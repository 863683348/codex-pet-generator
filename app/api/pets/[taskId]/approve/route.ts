import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServer } from '@/lib/supabase/server'
import { uploadBaseImage, uploadSpritesheet, uploadZip } from '@/lib/storage/storage'
import { generateBaseImage, generateAnimationFrames, generateCharacterDescription } from '@/lib/ai/image-generator'
import { composeSpritesheet, createZipBundle } from '@/lib/ai/sprite-composer'
import { buildPetJson } from '@/lib/ai/pet-json-builder'

export const runtime = 'nodejs'
export const maxDuration = 300

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ taskId: string }> }
) {
  try {
    const { taskId } = await params
    const body = await req.json()
    const { approved } = body

    const supabase = getSupabaseServer()

    const { data: pet, error: fetchError } = await supabase
      .from('pets')
      .select('*')
      .eq('id', taskId)
      .single()

    if (fetchError || !pet) {
      return NextResponse.json({ error: 'NOT_FOUND', message: 'Task not found' }, { status: 404 })
    }

    if (!approved) {
      // Re-generate base image
      await supabase
        .from('pets')
        .update({ status: 'processing', retry_count: pet.retry_count + 1 })
        .eq('id', taskId)

      // Fire-and-forget: re-generate base
      ;(async () => {
        try {
          // Download source image
          const sourceResponse = await fetch(pet.source_image_url)
          const sourceBuffer = Buffer.from(await sourceResponse.arrayBuffer())

          const baseBuffer = await generateBaseImage(sourceBuffer)
          const { path, url } = await uploadBaseImage(taskId, baseBuffer)

          await supabase
            .from('pets')
            .update({
              base_image_path: path,
              base_image_url: url,
              status: 'awaiting_approval',
            })
            .eq('id', taskId)
        } catch (err) {
          console.error('Base regeneration error:', err)
          await supabase
            .from('pets')
            .update({
              status: 'failed',
              error: err instanceof Error ? err.message : 'Base regeneration failed',
            })
            .eq('id', taskId)
        }
      })()

      return NextResponse.json({ taskId, status: 'processing' })
    }

    // Approved: generate animation
    await supabase
      .from('pets')
      .update({ status: 'generating_animation', base_approved: true })
      .eq('id', taskId)

    // Fire-and-forget: generate animation
    ;(async () => {
      try {
        const characterDesc = generateCharacterDescription()

        // Download base image
        const baseResponse = await fetch(pet.base_image_url)
        const baseBuffer = Buffer.from(await baseResponse.arrayBuffer())

        // Generate 9 state frames
        const stateFrames = await generateAnimationFrames(baseBuffer, characterDesc)

        // Compose spritesheet
        const spritesheetBuffer = await composeSpritesheet(stateFrames)
        const { path: ssPath, url: ssUrl } = await uploadSpritesheet(taskId, spritesheetBuffer)

        // Build pet.json
        const petJson = buildPetJson()

        // Create ZIP
        const zipBuffer = await createZipBundle(petJson, spritesheetBuffer)
        const { path: zipPath, url: zipUrl } = await uploadZip(petJson.id, zipBuffer)

        // Update DB
        await supabase
          .from('pets')
          .update({
            status: 'completed',
            spritesheet_path: ssPath,
            spritesheet_url: ssUrl,
            pet_json: petJson,
            zip_path: zipPath,
            zip_url: zipUrl,
            display_name: petJson.displayName,
            description: petJson.description,
            pet_id: petJson.id,
            completed_at: new Date().toISOString(),
          })
          .eq('id', taskId)
      } catch (err) {
        console.error('Animation generation error:', err)
        await supabase
          .from('pets')
          .update({
            status: 'failed',
            error: err instanceof Error ? err.message : 'Animation generation failed',
          })
          .eq('id', taskId)
      }
    })()

    return NextResponse.json({ taskId, status: 'generating_animation' })
  } catch (err) {
    console.error('Approve API error:', err)
    return NextResponse.json(
      { error: 'INTERNAL', message: 'Something went wrong' },
      { status: 500 }
    )
  }
}
