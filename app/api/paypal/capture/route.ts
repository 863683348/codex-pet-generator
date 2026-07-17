import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServer } from '@/lib/supabase/server'
import { getPayPalAccessToken, grantMonthlyQuota, payPalBase } from '@/lib/paypal'

// Capture a previously created PayPal order and grant the monthly quota.
// The PayPal webhook provides a redundant, server-verified grant path.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    // H2: `plan` is intentionally NOT read from the request body. A client could
    // otherwise buy the $9 "pro" order and claim the $29 "unlimited" plan.
    const { orderID } = body

    if (!orderID) {
      return NextResponse.json({ error: 'Missing orderID' }, { status: 400 })
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

    // Resolve the plan + payer from the server-side order mapping that the
    // order-creation route persisted. This is the single source of truth.
    const { data: orderRow, error: orderErr } = await supabase
      .from('paypal_orders')
      .select('user_id, plan, status')
      .eq('order_id', orderID)
      .maybeSingle()

    if (orderErr || !orderRow) {
      console.error('PayPal capture: no matching order mapping', orderID)
      return NextResponse.json({ error: 'Unknown order' }, { status: 400 })
    }

    // The captured order must belong to the authenticated user.
    if (orderRow.user_id !== user.id) {
      return NextResponse.json({ error: 'Order does not belong to this user' }, { status: 403 })
    }

    const plan = orderRow.plan
    if (!plan || (plan !== 'pro' && plan !== 'unlimited')) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
    }

    const accessToken = await getPayPalAccessToken()
    const capRes = await fetch(`${payPalBase()}/v2/checkout/orders/${orderID}/capture`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    })

    if (!capRes.ok) {
      const text = await capRes.text()
      console.error('PayPal capture error:', capRes.status, text)
      return NextResponse.json({ error: 'Capture failed' }, { status: 502 })
    }

    const cap = await capRes.json()
    const status: string =
      cap.status || cap.purchase_units?.[0]?.payments?.captures?.[0]?.status || ''

    if (status !== 'COMPLETED') {
      return NextResponse.json({ error: `Payment not completed: ${status}` }, { status: 400 })
    }

    const result = await grantMonthlyQuota(supabase, {
      user_id: user.id,
      email: user.email,
      plan,
      order_id: orderID,
    })

    if (result.alreadyProcessed) {
      return NextResponse.json({ success: true, alreadyProcessed: true })
    }
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('PayPal capture error:', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
