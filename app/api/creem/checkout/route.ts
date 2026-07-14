import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServer } from '@/lib/supabase/server'

const PRODUCT_IDS: Record<string, string | undefined> = {
  pro: process.env.CREEM_PRO_PRICE_ID,
  unlimited: process.env.CREEM_UNLIMITED_PRICE_ID,
}

export async function POST(req: NextRequest) {
  try {
    // 1. Auth check
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

    // 2. Parse plan from body
    const { plan, _testMode } = await req.json()
    if (!plan || !PRODUCT_IDS[plan]) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
    }

    const productId = PRODUCT_IDS[plan]
    const origin = req.headers.get('origin') || 'http://localhost:3000'
    const email = _testMode ? 'test@test.com' : user.email
    const userId = _testMode ? 'test-user-id' : user.id

    // 3. Build Creem hosted checkout URL (no API call needed)
    const checkoutUrl = new URL(`https://www.creem.io/checkout/${productId}`)
    checkoutUrl.searchParams.set('success_url', `${origin}/payment/success?plan=${plan}`)
    checkoutUrl.searchParams.set('cancel_url', `${origin}/pricing?canceled=true`)
    checkoutUrl.searchParams.set('email', email)
    // Pass metadata so Creem webhook can identify the user
    checkoutUrl.searchParams.set('metadata', JSON.stringify({ user_id: userId, plan }))

    return NextResponse.json({ url: checkoutUrl.toString() })
  } catch (err) {
    console.error('Checkout error:', err)
    return NextResponse.json({ error: 'Failed to create checkout', details: String(err) }, { status: 500 })
  }
}
