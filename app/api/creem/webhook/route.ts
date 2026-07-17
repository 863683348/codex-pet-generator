import { NextRequest, NextResponse } from 'next/server'
import { createHmac, timingSafeEqual } from 'crypto'
import { getSupabaseServer } from '@/lib/supabase/server'

const PRODUCT_IDS: Record<string, string | undefined> = {
  pro: process.env.CREEM_PRO_PRICE_ID,
  unlimited: process.env.CREEM_UNLIMITED_PRICE_ID,
}

const WEBHOOK_SECRET = process.env.CREEM_WEBHOOK_SECRET

const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000

export async function POST(req: NextRequest) {
  try {
    // C1: signature verification is mandatory. If the secret is not configured
    // we refuse to trust any payload rather than silently granting quota.
    if (!WEBHOOK_SECRET) {
      console.error('Creem webhook disabled: CREEM_WEBHOOK_SECRET is not set')
      return NextResponse.json({ error: 'Webhook verification not configured' }, { status: 501 })
    }

    // Read the RAW body — the signature is computed over the exact bytes.
    const rawBody = await req.text()
    const signature = req.headers.get('creem-signature')
    if (!signature) {
      return NextResponse.json({ error: 'Missing signature' }, { status: 401 })
    }

    const expected = createHmac('sha256', WEBHOOK_SECRET).update(rawBody).digest('hex')
    const sigBuf = Buffer.from(signature)
    const expBuf = Buffer.from(expected)
    if (sigBuf.length !== expBuf.length || !timingSafeEqual(sigBuf, expBuf)) {
      console.error('Creem webhook signature mismatch')
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    }

    const body = JSON.parse(rawBody)
    const event = body.type || body.event || ''

    console.log('Creem webhook received:', event)

    // 2. Handle checkout.completed
    if (event === 'checkout.completed' || event === 'subscription.created') {
      const session = body.data?.object || body.data || body
      const metadata = session.metadata || {}
      const userId = metadata.user_id
      const plan = metadata.plan || session.plan
      const email =
        session.customer?.email || session.customer_email || metadata.email || null

      // Verify the product in the event matches a configured Creem product/price.
      // Prevents a forged (but correctly signed) payload from granting an
      // arbitrary plan via a product id we don't recognize.
      const productId = session.product?.id || session.product_id
      const validProductIds = Object.values(PRODUCT_IDS).filter(Boolean) as string[]
      if (productId && validProductIds.length > 0 && !validProductIds.includes(productId)) {
        console.error('Creem webhook product mismatch:', productId)
        return NextResponse.json({ error: 'Unknown product' }, { status: 400 })
      }

      if (!userId || !plan) {
        console.log('Webhook skipped - missing metadata:', { userId, plan })
        return NextResponse.json({ error: 'Missing metadata' }, { status: 400 })
      }

      const supabase = getSupabaseServer()
      const expiresAt = new Date(Date.now() + THIRTY_DAYS_MS).toISOString()
      await supabase
        .from('user_usage')
        .upsert(
          { user_id: userId, email, plan, plan_expires_at: expiresAt, generations: 0 },
          { onConflict: 'user_id', ignoreDuplicates: false }
        )

      console.log(`Plan updated: ${userId} -> ${plan}`)
    }

    // 3. Acknowledge receipt
    return NextResponse.json({ received: true })
  } catch (err) {
    console.error('Webhook error:', err)
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
  }
}
