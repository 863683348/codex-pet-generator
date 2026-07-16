// One-off / re-runnable: register (or reuse) the PayPal webhook for this app.
// Usage: node scripts/register-paypal-webhook.mjs [WEBHOOK_URL]
//
// Reads PAYPAL_CLIENT_ID / PAYPAL_CLIENT_SECRET / PAYPAL_MODE from .env.local,
// then registers the webhook against PayPal. Prints the webhook id — set it as
// PAYPAL_WEBHOOK_ID in .env.local and in your Vercel project environment.

import { readFileSync } from 'fs'

function loadEnv() {
  const env = {}
  try {
    const raw = readFileSync('.env.local', 'utf8')
    for (const line of raw.split('\n')) {
      const m = line.match(/^([A-Z0-9_]+)=(.*)$/)
      if (m) env[m[1]] = m[2].trim()
    }
  } catch {
    /* no .env.local — fall back to process.env */
  }
  return { ...process.env, ...env }
}

const env = loadEnv()
const base =
  env.PAYPAL_MODE === 'live' ? 'https://api-m.paypal.com' : 'https://api-m.sandbox.paypal.com'
const clientId = env.PAYPAL_CLIENT_ID
const secret = env.PAYPAL_CLIENT_SECRET
const webhookUrl =
  process.argv[2] || env.PAYPAL_WEBHOOK_URL || 'https://codex-pet-generator.vercel.app/api/paypal/webhook'

if (!clientId || !secret) {
  console.error('Missing PAYPAL_CLIENT_ID / PAYPAL_CLIENT_SECRET')
  process.exit(1)
}

const basic = Buffer.from(`${clientId}:${secret}`).toString('base64')

async function getToken() {
  const res = await fetch(`${base}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  })
  if (!res.ok) {
    console.error('Auth failed:', res.status, await res.text())
    process.exit(1)
  }
  return (await res.json()).access_token
}

const token = await getToken()

// 1) List existing webhooks — reuse if one already points at our URL.
const listRes = await fetch(`${base}/v1/notifications/webhooks`, {
  headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
})
const list = await listRes.json()
const existing = (list.webhooks || []).find((w) => w.url === webhookUrl)

if (existing) {
  console.log('REUSE ' + existing.id)
  process.exit(0)
}

// 2) Otherwise create it.
const createRes = await fetch(`${base}/v1/notifications/webhooks`, {
  method: 'POST',
  headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({
    url: webhookUrl,
    event_types: [
      { name: 'PAYMENT.CAPTURE.COMPLETED' },
      { name: 'PAYMENT.CAPTURE.DENIED' },
      { name: 'PAYMENT.CAPTURE.REFUNDED' },
    ],
  }),
})

if (!createRes.ok) {
  console.error('Create failed:', createRes.status, await createRes.text())
  process.exit(1)
}

const created = await createRes.json()
console.log('CREATED ' + created.id)
