// Shared PayPal helpers (server-side only).
// Uses the REST API directly so we don't need an extra SDK dependency.

import type { SupabaseClient } from '@supabase/supabase-js'

const SANDBOX_BASE = 'https://api-m.sandbox.paypal.com'
const LIVE_BASE = 'https://api-m.paypal.com'

export const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000

export function payPalBase(): string {
  return process.env.PAYPAL_MODE === 'live' ? LIVE_BASE : SANDBOX_BASE
}

export const PLAN_PRICES: Record<string, { price: string; label: string }> = {
  pro: {
    price: process.env.PAYPAL_PRO_PRICE || '9',
    label: 'PetGen Pro — monthly quota',
  },
  unlimited: {
    price: process.env.PAYPAL_UNLIMITED_PRICE || '29',
    label: 'PetGen Unlimited — monthly quota',
  },
}

export async function getPayPalAccessToken(): Promise<string> {
  const clientId = process.env.PAYPAL_CLIENT_ID
  const secret = process.env.PAYPAL_CLIENT_SECRET
  if (!clientId || !secret) throw new Error('Missing PayPal credentials')

  const basic = Buffer.from(`${clientId}:${secret}`).toString('base64')
  const res = await fetch(`${payPalBase()}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`PayPal auth failed: ${res.status} ${text.slice(0, 200)}`)
  }

  const data = await res.json()
  return data.access_token as string
}

// Idempotent monthly-quota grant shared by the capture route AND the webhook.
// Either caller may run first; the grant only ever happens once per order.
export async function grantMonthlyQuota(
  supabase: SupabaseClient,
  params: { user_id: string; email?: string | null; plan: string; order_id: string }
): Promise<{ success: boolean; alreadyProcessed: boolean }> {
  const { user_id, email, plan, order_id } = params

  // Idempotency: already granted for this order?
  const { data: existing } = await supabase
    .from('paypal_orders')
    .select('*')
    .eq('order_id', order_id)
    .maybeSingle()

  if (existing && existing.status === 'COMPLETED') {
    return { success: true, alreadyProcessed: true }
  }

  // Record / update the order audit row.
  try {
    await supabase.from('paypal_orders').upsert(
      {
        order_id,
        user_id,
        email,
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
      user_id,
      email,
      plan,
      plan_expires_at: expiresAt,
      generations: 0,
    },
    { onConflict: 'user_id', ignoreDuplicates: false }
  )

  if (usageErr) {
    console.error('user_usage upsert failed:', usageErr)
    throw new Error('Failed to grant quota')
  }

  return { success: true, alreadyProcessed: false }
}

// Verify a PayPal webhook signature against the registered webhook id.
export async function verifyPayPalWebhook(
  rawBody: string,
  headers: {
    authAlgo: string
    certUrl: string
    transmissionId: string
    transmissionSig: string
    transmissionTime: string
  },
  webhookId: string
): Promise<boolean> {
  try {
    const accessToken = await getPayPalAccessToken()
    const res = await fetch(`${payPalBase()}/v1/notifications/verify-webhook-signature`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        auth_algorithm: headers.authAlgo,
        cert_url: headers.certUrl,
        transmission_id: headers.transmissionId,
        transmission_sig: headers.transmissionSig,
        transmission_time: headers.transmissionTime,
        webhook_id: webhookId,
        webhook_event: JSON.parse(rawBody),
      }),
    })

    if (!res.ok) {
      console.error('Webhook verification request failed:', res.status, await res.text())
      return false
    }

    const data = await res.json()
    return data.verification_status === 'SUCCESS'
  } catch (err) {
    console.error('Webhook verification error:', err)
    return false
  }
}
