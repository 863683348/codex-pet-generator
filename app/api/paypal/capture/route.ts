import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServer } from '@/lib/supabase/server'
import { getPayPalAccessToken, payPalBase } from '@/lib/paypal'

const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000

// Capture a previously created PayPal order and grant the monthly quota.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { orderID, plan } = body

    if (!orderID) {
      return NextResponse.json({ error: 'Missing orderID' }, { status: 400 })
    }
    if (!plan || (plan !== 'pro' && plan !== 'unlimited')) {
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

    // Idempotency: if this order was already captured, don't double-grant.
    const { data: existing } = await supabase
      .from('paypal_orders')
      .select('*')
      .eq('order_id', orderID)
      .maybeSingle()

    if (existing && existing.status === 'COMPLETED') {
      return NextResponse.json({ success: true, alreadyProcessed: true })
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

    // Record the order (non-fatal if the audit table isn't migrated yet).
    try {
      await supabase.from('paypal_orders').upsert(
        {
          order_id: orderID,
          user_id: user.id,
          email: user.email,
          plan,
          status: 'COMPLETED',
          captured_at: new Date().toISOString(),
        },
        { onConflict: 'order_id' }
      )
    } catch (auditErr) {
      console.error('paypal_orders audit write failed (non-fatal):', auditErr)
    }

    // Grant one-time monthly quota via user_usage (mirrors Creem webhook behavior).
    const expiresAt = new Date(Date.now() + THIRTY_DAYS_MS).toISOString()
    const { error: usageErr } = await supabase.from('user_usage').upsert(
      {
        user_id: user.id,
        email: user.email,
        plan,
        plan_expires_at: expiresAt,
        generations: 0,
      },
      { onConflict: 'user_id', ignoreDuplicates: false }
    )

    if (usageErr) {
      console.error('user_usage upsert failed:', usageErr)
      return NextResponse.json({ error: 'Failed to grant quota' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('PayPal capture error:', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
