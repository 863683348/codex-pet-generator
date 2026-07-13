import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServer } from '@/lib/supabase/server'

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization')
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const token = authHeader.slice(7)
    const supabase = getSupabaseServer()

    const { data: { user }, error: authError } = await supabase.auth.getUser(token)
    if (authError || !user) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }

    const { data: usage, error: upsertError } = await supabase
      .from('user_usage')
      .upsert(
        { user_id: user.id, email: user.email },
        { onConflict: 'user_id', ignoreDuplicates: false }
      )
      .select()
      .maybeSingle()

    if (upsertError) {
      console.error('Usage upsert error:', upsertError)
      return NextResponse.json({ remaining: 3, plan: 'free', usage: 0 })
    }

    const plan = usage?.plan || 'free'
    const genCount = usage?.generations || 0
    const maxGen = plan === 'unlimited' ? 999 : plan === 'pro' ? 15 : 3
    const remaining = Math.max(0, maxGen - genCount)

    return NextResponse.json({ remaining, plan, usage: genCount })
  } catch (err) {
    console.error('Usage API error:', err)
    return NextResponse.json({ remaining: 3, plan: 'free', usage: 0 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization')
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const token = authHeader.slice(7)
    const supabase = getSupabaseServer()

    const { data: { user }, error: authError } = await supabase.auth.getUser(token)
    if (authError || !user) return NextResponse.json({ error: 'Invalid token' }, { status: 401 })

    // Get current count, then increment
    const { data: record } = await supabase
      .from('user_usage')
      .select('generations')
      .eq('user_id', user.id)
      .single()

    const current = (record as { generations?: number })?.generations ?? 0
    await supabase
      .from('user_usage')
      .update({ generations: current + 1 })
      .eq('user_id', user.id)

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Usage increment error:', err)
    return NextResponse.json({ ok: true })
  }
}
