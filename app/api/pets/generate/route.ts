import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServer } from '@/lib/supabase/server'
import { getAuthenticatedUser, unauthorized } from '@/lib/auth'
import { validateImageFile } from '@/lib/utils/validation'
import { getServerT } from '@/lib/i18n/server'
import { generateBaseImage } from '@/lib/ai/image-generator'
import { uploadBaseImage, uploadSourceImage } from '@/lib/storage/storage'

export const runtime = 'nodejs'
export const maxDuration = 300

// Exported so the client can show a precise message and recovery action.
export type GenerateErrorCode =
  | 'NO_FILE'
  | 'INVALID_FILE'
  | 'MISSING_BACKEND_CONFIG'
  | 'OPENAI_NOT_CONFIGURED'
  | 'DB_ERROR'
  | 'INTERNAL'

interface ErrorResponse {
  error: GenerateErrorCode
  message: string
  details?: string
}

function hasBackendConfig(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY
  )
}

function hasImageGenConfig(): boolean {
  return Boolean(process.env.BAILIAN_API_KEY || process.env.OPENAI_API_KEY)
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    // H1: the entire generation chain requires an authenticated user.
    const user = await getAuthenticatedUser(req)
    if (!user) return unauthorized()

    const formData = await req.formData()
    const file = formData.get('image') as File | null
    const email = formData.get('email') as string | null

    if (!file) {
      return NextResponse.json(
        { error: 'NO_FILE', message: 'No image file provided' },
        { status: 400 }
      )
    }

    const t = getServerT()
    const validation = validateImageFile(file, t)
    if (!validation.valid) {
      return NextResponse.json(
        { error: 'INVALID_FILE', message: validation.error },
        { status: 400 }
      )
    }

    // Fail fast with a useful code when the backend is not configured.
    // This is the most common reason first-time users see "Something went wrong".
    if (!hasBackendConfig()) {
      return NextResponse.json(
        {
          error: 'MISSING_BACKEND_CONFIG',
          message:
            'Backend not configured. Add NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to .env.local.',
          details:
            'Supabase URL and service role key are required to store images and task state.',
        },
        { status: 503 }
      )
    }

    if (!hasImageGenConfig()) {
      return NextResponse.json(
        {
          error: 'OPENAI_NOT_CONFIGURED',
          message:
            'Image generation not configured. Add BAILIAN_API_KEY (recommended) or OPENAI_API_KEY to .env.local.',
          details:
            'A Bailian (Qwen-Image) or OpenAI key is required to generate pixel art from photos.',
        },
        { status: 503 }
      )
    }

    const supabase = getSupabaseServer()

    // H1: server-side quota enforcement. The client shows a soft limit, but the
    // server is authoritative — an over-quota request is rejected here no matter
    // what the client believes.
    await supabase
      .from('user_usage')
      .upsert({ user_id: user.id, email: user.email }, { onConflict: 'user_id', ignoreDuplicates: false })

    const { data: usageRow } = await supabase
      .from('user_usage')
      .select('plan, generations')
      .eq('user_id', user.id)
      .maybeSingle()

    const plan = usageRow?.plan || 'free'
    const genCount = usageRow?.generations || 0
    const maxGen = plan === 'unlimited' ? 999 : plan === 'pro' ? 15 : 3
    if (genCount >= maxGen) {
      return NextResponse.json(
        {
          error: 'QUOTA_EXCEEDED',
          message:
            'You have used all your generations for this plan. Please upgrade to continue.',
        },
        { status: 403 }
      )
    }

    // Convert File to Buffer
    const arrayBuffer = await file.arrayBuffer()
    const fileBuffer = Buffer.from(arrayBuffer)

    // Insert pet record
    const { data: pet, error: dbError } = await supabase
      .from('pets')
      .insert({
        status: 'processing',
        style: 'pixel',
        email: user.email ?? email ?? null,
      })
      .select()
      .single()

    if (dbError || !pet) {
      console.error('DB insert error:', dbError)
      return NextResponse.json(
        { error: 'DB_ERROR', message: 'Failed to create task' },
        { status: 500 }
      )
    }

    // Count this generation against the user's quota only after the row exists,
    // so a failed insert never consumes a generation.
    try {
      await supabase
        .from('user_usage')
        .update({ generations: genCount + 1 })
        .eq('user_id', user.id)
    } catch (incErr) {
      console.error('Usage increment failed (non-fatal):', incErr)
    }

    const taskId = pet.id

    // Upload source image
    try {
      const sourcePath = await uploadSourceImage(taskId, fileBuffer)
      const sourceUrl = supabase.storage.from('pet-assets').getPublicUrl(sourcePath).data.publicUrl

      await supabase
        .from('pets')
        .update({ source_image_path: sourcePath, source_image_url: sourceUrl })
        .eq('id', taskId)
    } catch (err) {
      console.error('Source upload error:', err)
    }

    // Synchronous base generation: Vercel does not guarantee that a
    // fire-and-forget task keeps running after the HTTP response is sent, so we
    // await the base image before responding. The frontend still polls for the
    // rare case where the request times out, but normally it returns as soon as
    // the base is ready.
    try {
      const baseBuffer = await generateBaseImage(fileBuffer)
      const { path, url } = await uploadBaseImage(taskId, baseBuffer)

      await supabase
        .from('pets')
        .update({
          base_image_path: path,
          base_image_url: url,
          status: 'awaiting_approval',
        })
        .eq('id', taskId)

      return NextResponse.json({
        taskId,
        status: 'awaiting_approval',
        estimatedSeconds: 90,
      })
    } catch (err) {
      const provider = process.env.IMAGE_PROVIDER
        ?? (process.env.BAILIAN_API_KEY ? 'bailian' : process.env.OPENAI_API_KEY ? 'openai' : 'unknown')
      const baseMsg = err instanceof Error ? err.message : 'Base generation failed'
      const causeMsg =
        err instanceof Error && (err as Error & { cause?: unknown }).cause
          ? JSON.stringify((err as Error & { cause?: unknown }).cause)
          : ''
      console.error('Base generation error (provider=' + provider + '):', err, 'cause:', causeMsg)
      await supabase
        .from('pets')
        .update({
          status: 'failed',
          error: err instanceof Error ? err.message : 'Unknown error during base generation',
        })
        .eq('id', taskId)

      return NextResponse.json(
        {
          error: 'INTERNAL',
          message: 'Base image generation failed (' + provider + '): ' + baseMsg + (causeMsg ? ' [' + causeMsg + ']' : ''),
          details: causeMsg || undefined,
        },
        { status: 500 }
      )
    }
  } catch (err) {
    console.error('Generate API error:', err)
    return NextResponse.json(
      {
        error: 'INTERNAL',
        message: 'Something went wrong',
        details: err instanceof Error ? err.message : undefined,
      },
      { status: 500 }
    )
  }
}
