import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServer } from '@/lib/supabase/server'
import { getPayPalAccessToken, payPalBase, PLAN_PRICES } from '@/lib/paypal'

// Create a PayPal order (intent=CAPTURE) for a one-time monthly-quota purchase.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { plan } = body

    if (!plan || !PLAN_PRICES[plan]) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
    }

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

    const price = PLAN_PRICES[plan].price
    const accessToken = await getPayPalAccessToken()
    const origin = req.headers.get('origin') || 'http://localhost:3000'

    const orderRes = await fetch(`${payPalBase()}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'PayPal-Request-Id': `${user.id.slice(0, 8)}-${plan}-${Date.now()}`,
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [
          {
            description: PLAN_PRICES[plan].label,
            custom_id: `${user.id}|${plan}`,
            amount: {
              currency_code: 'USD',
              value: price,
            },
          },
        ],
        application_context: {
          return_url: `${origin}/payment/success?provider=paypal&plan=${plan}`,
          cancel_url: `${origin}/payment/cancel?plan=${plan}`,
          brand_name: 'PetGen',
          user_action: 'PAY_NOW',
        },
      }),
    })

    if (!orderRes.ok) {
      const text = await orderRes.text()
      console.error('PayPal create order error:', orderRes.status, text)
      return NextResponse.json({ error: 'Failed to create PayPal order' }, { status: 502 })
    }

    const order = await orderRes.json()
    if (!order.id) {
      return NextResponse.json({ error: 'Missing order id from PayPal' }, { status: 502 })
    }

    // Persist the order -> user/plan mapping immediately so the webhook can
    // resolve the payer even if the client-side capture callback never fires.
    try {
      await supabase.from('paypal_orders').insert({
        order_id: order.id,
        user_id: user.id,
        email: user.email,
        plan,
        status: 'CREATED',
      })
    } catch (auditErr) {
      console.error('paypal_orders create write failed (non-fatal):', auditErr)
    }

    return NextResponse.json({
      orderID: order.id,
      // Surface the PayPal "approve" link so clients can either render the
      // hosted checkout in-place (PayPalButtons) or do a hard redirect
      // (e.g. when the user clicks "Upgrade" from an error card and the
      // pricing section is not on screen).
      approvalUrl:
        order.links?.find((l: { rel?: string; href?: string }) => l.rel === 'approve')?.href ??
        null,
    })
  } catch (err) {
    console.error('PayPal order error:', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
