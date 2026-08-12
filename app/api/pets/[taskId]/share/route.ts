import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { getSupabaseServer } from '@/lib/supabase/server'
import { getAuthenticatedUser, unauthorized } from '@/lib/auth'
import { POINTS_PER_SHARE } from '@/lib/utils/constants'

export const runtime = 'nodejs'

// Awards points the first time a logged-in user shares one of their own pets.
// Idempotent: a second share of the same pet returns the already-awarded state
// without granting more points (pet_shares UNIQUE(pet_id, user_id) enforces this
// at the DB level too).
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ taskId: string }> }
) {
  try {
    const user = await getAuthenticatedUser(req)
    if (!user) return unauthorized()

    const { taskId } = await params
    const supabase = getSupabaseServer()

    // 1. Pet must exist and belong to the caller.
    const { data: pet, error: petErr } = await supabase
      .from('pets')
      .select('id, user_id, email, is_public')
      .eq('id', taskId)
      .maybeSingle()

    if (petErr || !pet) {
      return NextResponse.json({ error: 'NOT_FOUND', message: 'Pet not found' }, { status: 404 })
    }

    const isOwner = pet.user_id === user.id || (pet.email && pet.email === user.email)
    if (!isOwner) {
      return NextResponse.json({ error: 'FORBIDDEN', message: 'Not your pet' }, { status: 403 })
    }

    // 2. Ensure the user has a usage row (and thus a points balance).
    await supabase
      .from('user_usage')
      .upsert(
        { user_id: user.id, email: user.email },
        { onConflict: 'user_id', ignoreDuplicates: false }
      )

    // 3. Idempotent award: has this user already shared this pet?
    const { data: existing } = await supabase
      .from('pet_shares')
      .select('id, points_awarded')
      .eq('pet_id', taskId)
      .eq('user_id', user.id)
      .maybeSingle()

    const origin = process.env.NEXT_PUBLIC_SITE_URL || req.nextUrl.origin
    const shareUrl = `${origin}/p/${taskId}`

    if (existing) {
      const { data: usage } = await supabase
        .from('user_usage')
        .select('points')
        .eq('user_id', user.id)
        .maybeSingle()
      return NextResponse.json({
        alreadyShared: true,
        awarded: 0,
        points: usage?.points ?? 0,
        shareUrl,
        isPublic: pet.is_public,
      })
    }

    // 4. Grant points + mark public + record the share, all in one shot.
    const platform = (await req.json().catch(() => ({})))?.platform || 'web'

    const { data: usageRow, error: ptsErr } = await supabase
      .from('user_usage')
      .update({ points: (await getCurrentPoints(supabase, user.id)) + POINTS_PER_SHARE })
      .eq('user_id', user.id)
      .select('points')
      .maybeSingle()

    if (ptsErr) {
      console.error('Share points update error:', ptsErr)
      return NextResponse.json({ error: 'INTERNAL', message: 'Failed to award points' }, { status: 500 })
    }

    await supabase
      .from('pets')
      .update({ is_public: true, share_count: (await getCurrentShareCount(supabase, taskId)) + 1 })
      .eq('id', taskId)

    // Bust the gallery's cache immediately so a freshly shared pet shows up
    // without waiting out the edge TTL (next.config gives /gallery s-maxage=60).
    revalidatePath('/gallery')

    await supabase
      .from('pet_shares')
      .insert({ pet_id: taskId, user_id: user.id, platform, points_awarded: POINTS_PER_SHARE })

    return NextResponse.json({
      alreadyShared: false,
      awarded: POINTS_PER_SHARE,
      points: usageRow?.points ?? POINTS_PER_SHARE,
      shareUrl,
      isPublic: true,
    })
  } catch (err) {
    console.error('Share API error:', err)
    return NextResponse.json({ error: 'INTERNAL', message: 'Something went wrong' }, { status: 500 })
  }
}

async function getCurrentPoints(supabase: ReturnType<typeof getSupabaseServer>, userId: string): Promise<number> {
  const { data } = await supabase.from('user_usage').select('points').eq('user_id', userId).maybeSingle()
  return data?.points ?? 0
}

async function getCurrentShareCount(supabase: ReturnType<typeof getSupabaseServer>, petId: string): Promise<number> {
  const { data } = await supabase.from('pets').select('share_count').eq('id', petId).maybeSingle()
  return data?.share_count ?? 0
}
