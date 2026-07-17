import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServer } from '@/lib/supabase/server'
import { getAuthenticatedUser, unauthorized } from '@/lib/auth'

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
      .select('zip_url, status, pet_json')
      .eq('id', taskId)
      .single()

    if (error || !pet) {
      return NextResponse.json({ error: 'NOT_FOUND', message: 'Task not found' }, { status: 404 })
    }

    if (pet.status !== 'completed' || !pet.zip_url) {
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

    // Fetch the ZIP from storage and stream it back with an explicit
    // Content-Disposition so the browser always downloads (naming it
    // <petId>.zip) instead of previewing the binary.
    const upstream = await fetch(pet.zip_url)
    if (!upstream.ok || !upstream.body) {
      return NextResponse.json(
        { error: 'FETCH_FAILED', message: 'Failed to fetch the package' },
        { status: 502 }
      )
    }

    const buf = Buffer.from(await upstream.arrayBuffer())

    return new NextResponse(buf, {
      status: 200,
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="${petId}.zip"`,
        'Content-Length': String(buf.length),
        'Cache-Control': 'no-store',
      },
    })
  } catch (err) {
    console.error('Download API error:', err)
    return NextResponse.json(
      { error: 'INTERNAL', message: 'Something went wrong' },
      { status: 500 }
    )
  }
}
