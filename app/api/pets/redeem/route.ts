import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServer } from '@/lib/supabase/server'
import { getAuthenticatedUser, unauthorized } from '@/lib/auth'
import { REDEEM_COST } from '@/lib/utils/constants'

export const runtime = 'nodejs'

// Redeem earned points for one bonus generation. Atomic: the UPDATE only
// succeeds when the user still has >= REDEEM_COST points, so concurrent
// requests can't over-spend.
export async function POST(req: NextRequest) {
  try {
    const user = await getAuthenticatedUser(req)
    if (!user) return unauthorized()

    const supabase = getSupabaseServer()

    // Ensure the row exists.
    await supabase
      .from('user_usage')
      .upsert(
        { user_id: user.id, email: user.email },
        { onConflict: 'user_id', ignoreDuplicates: false }
      )

    const { data: updated, error } = await supabase
      .from('user_usage')
      .update({ points: (await getPoints(supabase, user.id)) - REDEEM_COST, bonus_generations: (await getBonus(supabase, user.id)) + 1 })
      .eq('user_id', user.id)
      .gte('points', REDEEM_COST)
      .select('points, bonus_generations')
      .maybeSingle()

    if (error || !updated) {
      return NextResponse.json(
        { error: 'NOT_ENOUGH_POINTS', message: `Need at least ${REDEEM_COST} points to redeem.` },
        { status: 400 }
      )
    }

    return NextResponse.json({ points: updated.points, bonus: updated.bonus_generations })
  } catch (err) {
    console.error('Redeem API error:', err)
    return NextResponse.json({ error: 'INTERNAL', message: 'Something went wrong' }, { status: 500 })
  }
}

async function getPoints(supabase: ReturnType<typeof getSupabaseServer>, userId: string): Promise<number> {
  const { data } = await supabase.from('user_usage').select('points').eq('user_id', userId).maybeSingle()
  return data?.points ?? 0
}

async function getBonus(supabase: ReturnType<typeof getSupabaseServer>, userId: string): Promise<number> {
  const { data } = await supabase.from('user_usage').select('bonus_generations').eq('user_id', userId).maybeSingle()
  return data?.bonus_generations ?? 0
}
