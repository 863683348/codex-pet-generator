import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServer } from '@/lib/supabase/server'

const PRODUCT_IDS: Record<string, string | undefined> = {
  pro: process.env.CREEM_PRO_PRICE_ID,
  unlimited: process.env.CREEM_UNLIMITED_PRICE_ID,
}

const CREEM_API_KEY = process.env.CREEM_API_KEY || ''

function getCreemApiBase() {
  // Creem test keys: creem_test_... or creem_dev_...
  // Creem live keys: creem_live_...
  if (CREEM_API_KEY.startsWith('creem_test_') || CREEM_API_KEY.startsWith('creem_dev_')) {
    return 'https://test-api.creem.io/v1'
  }
  return 'https://api.creem.io/v1'
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { plan, _testMode } = body

    // M5: the test-mode auth bypass must never be available in production.
    // In dev it lets local testing skip auth; in prod it is a privilege-escalation
    // backdoor (anyone could mint a real Creem checkout under a fake user).
    if (_testMode && process.env.NODE_ENV === 'production') {
      return NextResponse.json({ error: 'Test mode is not available in production' }, { status: 403 })
    }

    let email = 'test@test.com'
    let userId = 'test-user-id'

    if (!_testMode) {
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
      email = user.email ?? ''
      userId = user.id
    }

    if (!plan || !PRODUCT_IDS[plan]) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
    }

    if (!CREEM_API_KEY) {
      return NextResponse.json({ error: 'Missing CREEM_API_KEY' }, { status: 500 })
    }

    const productId = PRODUCT_IDS[plan]
    const origin = req.headers.get('origin') || 'http://localhost:3000'

    // Creem requires creating a checkout session via API; the hosted URL is returned in checkout_url.
    const creemRes = await fetch(`${getCreemApiBase()}/checkouts`, {
      method: 'POST',
      headers: {
        'x-api-key': CREEM_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product_id: productId,
        request_id: `${userId.slice(0, 8)}-${plan}-${Date.now()}`,
        customer: {
          email: email ?? '',
        },
        success_url: `${origin}/payment/success?plan=${plan}`,
        metadata: {
          user_id: userId,
          plan,
          email: email ?? '',
        },
      }),
    })

    if (!creemRes.ok) {
      const errText = await creemRes.text()
      console.error('Creem checkout error:', creemRes.status, errText)
      return NextResponse.json(
        { error: `Creem checkout failed: ${creemRes.status} ${errText.slice(0, 200)}` },
        { status: 502 }
      )
    }

    const creemData = await creemRes.json()
    if (!creemData.checkout_url) {
      return NextResponse.json(
        { error: 'Missing checkout_url from Creem', details: creemData },
        { status: 502 }
      )
    }

    return NextResponse.json({ url: creemData.checkout_url })
  } catch (err) {
    console.error('Checkout error:', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
