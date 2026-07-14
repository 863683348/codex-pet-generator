import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServer } from '@/lib/supabase/server'

// Creem API base — replace with actual endpoint from Creem docs
const CREEM_API = 'https://api.creem.io/v1'

// Map plan keys to Creem price / product IDs
// Replace these with your actual Creem product IDs after creating them in Creem dashboard
const PRICE_IDS: Record<string, string | undefined> = {
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
    const { plan } = await req.json()
    if (!plan || !PRICE_IDS[plan]) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
    }

    const priceId = PRICE_IDS[plan]
    const origin = req.headers.get('origin') || 'http://localhost:3000'

    // 3. Create Creem checkout session
    const creemRes = await fetch(`${CREEM_API}/checkout-sessions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.CREEM_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        price_id: priceId,
        mode: 'subscription',
        success_url: `${origin}/payment/success?plan=${plan}`,
        cancel_url: `${origin}/pricing?canceled=true`,
        customer_email: user.email,
        metadata: {
          user_id: user.id,
          plan,
        },
      }),
    })

    if (!creemRes.ok) {
      const err = await creemRes.text()
      console.error('Creem API error:', err)
      return NextResponse.json({ error: 'Failed to create checkout' }, { status: 502 })
    }

    const session = await creemRes.json()

    // 4. Return the checkout URL so the frontend can redirect
    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Checkout error:', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
