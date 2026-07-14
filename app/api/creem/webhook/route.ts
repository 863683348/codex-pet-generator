import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServer } from '@/lib/supabase/server'

// Creem webhook secret — set in Vercel env vars / .env.local
// const WEBHOOK_SECRET = process.env.CREEM_WEBHOOK_SECRET

export async function POST(req: NextRequest) {
  try {
    // 1. Validate webhook signature (optional, uncomment when you have the secret)
    // const signature = req.headers.get('creem-signature')
    // if (!signature || !WEBHOOK_SECRET) {
    //   // For now, just log and continue
    // }

    const body = await req.json()
    const event = body.type || body.event

    console.log('Creem webhook received:', event)

    // 2. Handle checkout.completed
    if (event === 'checkout.completed') {
      const session = body.data || body
      const metadata = session.metadata || {}
      const userId = metadata.user_id
      const plan = metadata.plan
      const email = session.customer_email

      if (!userId || !plan) {
        return NextResponse.json({ error: 'Missing metadata' }, { status: 400 })
      }

      const supabase = getSupabaseServer()

      // Upsert user_usage record with the new plan
      await supabase
        .from('user_usage')
        .upsert(
          { user_id: userId, email, plan, generations: 0 },
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
