import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServer } from '@/lib/supabase/server'
import { getAuthenticatedUser, unauthorized } from '@/lib/auth'

export const runtime = 'nodejs'

// Submits a public pet to the community moderation queue. Idempotent per pet:
// a second submission of the same pet returns the existing row with 409 instead
// of creating a duplicate. Uses the service-role client so ownership checks are
// authoritative and writes bypass RLS.
export async function POST(req: NextRequest) {
  try {
    const user = await getAuthenticatedUser(req)
    if (!user) return unauthorized()

    const body = await req.json().catch(() => ({}))
    const petId = typeof body?.petId === 'string' ? body.petId : null
    if (!petId) {
      return NextResponse.json(
        { error: 'INVALID_PARAM', message: 'petId is required' },
        { status: 400 }
      )
    }
    const message = typeof body?.message === 'string' ? body.message : null

    const supabase = getSupabaseServer()

    // 1. Pet must exist.
    const { data: pet, error: petErr } = await supabase
      .from('pets')
      .select('id, user_id, email, is_public, base_image_path')
      .eq('id', petId)
      .maybeSingle()

    if (petErr || !pet) {
      return NextResponse.json({ error: 'NOT_FOUND', message: 'Pet not found' }, { status: 404 })
    }

    // 2. Ownership: by user_id, or by email when no account was linked.
    const isOwner = pet.user_id === user.id || (pet.email && pet.email === user.email)
    if (!isOwner) {
      return NextResponse.json({ error: 'FORBIDDEN', message: 'Not your pet' }, { status: 403 })
    }

    // 3. Only publicly shared pets (with a generated base image) can be submitted.
    if (!pet.is_public || !pet.base_image_path) {
      return NextResponse.json(
        {
          error: 'INVALID_PARAM',
          message: 'This pet must be shared publicly first. Go to /my-pets to share it.',
        },
        { status: 400 }
      )
    }

    // 4. Idempotency: already in the queue for this pet?
    const { data: existing } = await supabase
      .from('submissions')
      .select('id, status')
      .eq('pet_id', petId)
      .maybeSingle()

    if (existing) {
      return NextResponse.json(
        {
          error: 'ALREADY_SUBMITTED',
          message: 'This pet has already been submitted.',
          id: existing.id,
          status: existing.status,
        },
        { status: 409 }
      )
    }

    // 5. Create the submission.
    const { data: inserted, error: insErr } = await supabase
      .from('submissions')
      .insert({ pet_id: petId, user_id: user.id, message, status: 'pending' })
      .select('id, status')
      .maybeSingle()

    if (insErr || !inserted) {
      console.error('Submission insert error:', insErr)
      return NextResponse.json(
        { error: 'INTERNAL', message: 'Failed to create submission' },
        { status: 500 }
      )
    }

    return NextResponse.json({ id: inserted.id, status: inserted.status }, { status: 201 })
  } catch (err) {
    console.error('Submissions API error:', err)
    return NextResponse.json({ error: 'INTERNAL', message: 'Something went wrong' }, { status: 500 })
  }
}
