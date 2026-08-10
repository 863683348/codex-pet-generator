import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServer } from '@/lib/supabase/server'
import { getAuthenticatedUser, unauthorized } from '@/lib/auth'
import { STORAGE_BUCKET } from '@/lib/utils/constants'

export const runtime = 'nodejs'

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ taskId: string }> }
) {
  try {
    // H1: downloading a completed package requires an authenticated user.
    // (Per-user task ownership is a post-launch follow-up; the pets table has
    // no user_id column yet, so we authenticate but do not yet scope by owner.)
    const user = await getAuthenticatedUser(req)
    if (!user) return unauthorized()

    const { taskId } = await params
    const supabase = getSupabaseServer()

    const { data: pet, error } = await supabase
      .from('pets')
      .select('zip_url, zip_path, status, pet_json')
      .eq('id', taskId)
      .single()

    if (error || !pet) {
      return NextResponse.json({ error: 'NOT_FOUND', message: 'Task not found' }, { status: 404 })
    }

    if (pet.status !== 'completed') {
      return NextResponse.json({ error: 'NOT_READY', message: 'Pet not ready for download' }, { status: 400 })
    }

    const rawPetId =
      (pet.pet_json && typeof pet.pet_json === 'object' && (pet.pet_json as { id?: string }).id) ||
      taskId

    // Sanitize the filename: strip anything that isn't safe in a
    // Content-Disposition header (L1 — pet_json.id is attacker-influenced).
    const petId = (rawPetId || 'pet')
      .replace(/[^a-zA-Z0-9_-]/g, '_')
      .slice(0, 64)

    // FOT optimization: never stream the ZIP through the Vercel function.
    // Streaming doubles Fast Origin Transfer (inbound from Supabase + outbound
    // to the user) for every download. Instead, issue a short-lived signed URL
    // (with ?download= forcing attachment) and 302-redirect the client straight
    // to Supabase's CDN — the function then only returns a ~100 byte response.
    if (pet.zip_path) {
      const { data: signed } = await supabase.storage
        .from(STORAGE_BUCKET)
        .createSignedUrl(pet.zip_path, 3600, { download: `${petId}.zip` })

      if (signed?.signedUrl) {
        return NextResponse.redirect(signed.signedUrl, 302)
      }
    }

    // Legacy fallback: rows without zip_path carry a public zip_url. Point the
    // browser straight at it instead of proxying the bytes.
    if (pet.zip_url) {
      return NextResponse.redirect(pet.zip_url, 302)
    }

    return NextResponse.json(
      { error: 'NOT_READY', message: 'Package is not available yet' },
      { status: 400 }
    )
  } catch (err) {
    console.error('Download API error:', err)
    return NextResponse.json(
      { error: 'INTERNAL', message: 'Something went wrong' },
      { status: 500 }
    )
  }
}
