import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServer } from '@/lib/supabase/server'
import { getAuthenticatedUser, unauthorized } from '@/lib/auth'
import { deriveDisplayName } from '@/lib/community/loaders'

export const runtime = 'nodejs'

// Returns the authenticated user's own leaderboard position so the UI can
// highlight their row. Rank is 1-based and globally consistent with
// loadLeaderboard: strictly-higher points rank ahead; ties broken by earlier
// created_at. Email / user_id are never returned.
export async function GET(req: NextRequest) {
  try {
    const user = await getAuthenticatedUser(req)
    if (!user) return unauthorized()

    const supabase = getSupabaseServer()

    // The caller's usage row is keyed by user_id (UNIQUE).
    const { data: me, error: meErr } = await supabase
      .from('user_usage')
      .select('points, display_name, email, created_at')
      .eq('user_id', user.id)
      .maybeSingle()

    if (meErr) {
      console.error('Leaderboard/me lookup error:', meErr)
      return NextResponse.json({ error: 'INTERNAL', message: 'Something went wrong' }, { status: 500 })
    }

    const myPoints = me?.points ?? 0
    const myCreatedAt = me?.created_at ?? new Date().toISOString()

    // Rank = 1 + number of users strictly ahead (higher points, or equal
    // points with an earlier created_at).
    const { count, error: countErr } = await supabase
      .from('user_usage')
      .select('*', { count: 'exact', head: true })
      .or(`points.gt.${myPoints},and(points.eq.${myPoints},created_at.lt.${myCreatedAt})`)

    if (countErr) {
      console.error('Leaderboard/me count error:', countErr)
      return NextResponse.json({ error: 'INTERNAL', message: 'Something went wrong' }, { status: 500 })
    }

    const displayName = me
      ? deriveDisplayName(me)
      : user.email
        ? user.email.split('@')[0].slice(0, 12).toLowerCase()
        : 'anonymous'

    return NextResponse.json({ rank: (count ?? 0) + 1, points: myPoints, displayName })
  } catch (err) {
    console.error('Leaderboard/me API error:', err)
    return NextResponse.json({ error: 'INTERNAL', message: 'Something went wrong' }, { status: 500 })
  }
}
