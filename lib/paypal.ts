// Shared PayPal helpers (server-side only).
// Uses the REST API directly so we don't need an extra SDK dependency.

const SANDBOX_BASE = 'https://api-m.sandbox.paypal.com'
const LIVE_BASE = 'https://api-m.paypal.com'

export function payPalBase(): string {
  return process.env.PAYPAL_MODE === 'live' ? LIVE_BASE : SANDBOX_BASE
}

export const PLAN_PRICES: Record<string, { price: string; label: string }> = {
  pro: {
    price: process.env.PAYPAL_PRO_PRICE || '9.99',
    label: 'PetGen Pro — monthly quota',
  },
  unlimited: {
    price: process.env.PAYPAL_UNLIMITED_PRICE || '19.99',
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
