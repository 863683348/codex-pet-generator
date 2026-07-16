'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { XCircle } from 'lucide-react'

function PaymentCancelContent() {
  const searchParams = useSearchParams()
  const plan = searchParams.get('plan') || ''

  return (
    <main className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 text-center">
      <XCircle className="mb-4 h-14 w-14 text-danger" />
      <h1 className="font-pixel text-lg text-text-primary">Payment Cancelled</h1>
      <p className="mt-3 text-sm text-text-secondary">
        Your payment was cancelled. No charge was made. You can try again whenever you&apos;re ready.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href={plan ? '/#pricing' : '/'}
          className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
        >
          Back to Pricing
        </Link>
        <Link
          href="/"
          className="rounded-lg border border-border bg-bg-elevated px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-bg-surface"
        >
          Go to Homepage
        </Link>
      </div>
    </main>
  )
}

export default function PaymentCancel() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="min-h-[60vh]" />}>
        <PaymentCancelContent />
      </Suspense>
      <Footer />
    </>
  )
}
