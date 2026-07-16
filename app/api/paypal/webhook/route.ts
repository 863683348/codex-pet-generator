import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServer } from '@/lib/supabase/server'
import { grantMonthlyQuota, verifyPayPalWebhook } from '@/lib/paypal'

// PayPal only POSTs here; we read the raw body to verify the signature.
export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const rawBody = await req.text()

  const webhookId = process.env.PAYPAL_WEBHOOK_ID
  if (!webhookId) {
    console.error('PAYPAL_WEBHOOK_ID is not configured')
    return NextResponse.json({ error: 'Webhook not configured' }, { status: 500 })
  }

  const valid = await verifyPayPalWebhook(
    rawBody,
    {
      authAlgo: req.headers.get('paypal-auth-algo') || '',
      certUrl: req.headers.get('paypal-cert-url') || '',
      transmissionId: req.headers.get('paypal-transmission-id') || '',
      transmissionSig: req.headers.get('paypal-transmission-sig') || '',
      transmissionTime: req.headers.get('paypal-transmission-time') || '',
    },
    webhookId
  )

  if (!valid) {
    console.warn('PayPal webhook signature verification failed')
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }

  let event: any
  try {
    event = JSON.parse(rawBody)
  } catch {
    return NextResponse.json({ error: 'Bad payload' }, { status: 400 })
  }

  const eventType = event.event_type
  console.log('[paypal-webhook] received:', eventType, event.id)

  if (eventType === 'PAYMENT.CAPTURE.COMPLETED') {
    try {
      const orderId: string =
        event.resource?.supplementary_data?.related_ids?.order_id || ''

      if (!orderId) {
        console.error('[paypal-webhook] missing order_id in event', event.id)
        return NextResponse.json({ received: true })
      }

      const supabase = getSupabaseServer()
      const { data: orderRow } = await supabase
        .from('paypal_orders')
        .select('user_id, email, plan')
        .eq('order_id', orderId)
        .maybeSingle()

      if (!orderRow) {
        console.error('[paypal-webhook] no mapping for order', orderId)
        return NextResponse.json({ received: true })
      }

      await grantMonthlyQuota(supabase, {
        user_id: orderRow.user_id,
        email: orderRow.email,
        plan: orderRow.plan,
        order_id: orderId,
      })
      console.log('[paypal-webhook] quota granted for order', orderId)
    } catch (err) {
      console.error('[paypal-webhook] grant error:', err)
      // Acknowledge to stop retries; reconcile manually if needed.
      return NextResponse.json({ received: true, error: String(err) })
    }
  } else {
    // DENIED / REFUNDED / etc. — acknowledge so PayPal stops retrying.
    console.log('[paypal-webhook] acknowledged non-grant event:', eventType)
  }

  return NextResponse.json({ received: true })
}
