import { NextRequest, NextResponse } from 'next/server'

// Creem integration is deprecated. All payments now go through PayPal
// (see app/api/paypal/*). This endpoint is intentionally disabled so it can
// never be invoked to grant quota or process a checkout.
export async function POST(req: NextRequest) {
  return NextResponse.json(
    { error: 'Creem payments are disabled. Use PayPal.' },
    { status: 501 }
  )
}
