'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { CheckCircle } from 'lucide-react'

function PaymentSuccessContent() {
  const searchParams = useSearchParams()
  const plan = searchParams.get('plan') || ''
  const [name, setName] = useState('')

  useEffect(() => {
    if (plan === 'pro') setName('Pro')
    else if (plan === 'unlimited') setName('Unlimited')
  }, [plan])

  return (
    <main className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 text-center">
      <CheckCircle className="mb-4 h-14 w-14 text-success" />
      <h1 className="font-pixel text-lg text-text-primary">Payment Successful!</h1>
      <p className="mt-3 text-sm text-text-secondary">
        Your {name} plan is now active. You can start generating unlimited pets right away.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
      >
        Go to Homepage
      </Link>
    </main>
  )
}

export default function PaymentSuccess() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="min-h-[60vh]" />}>
        <PaymentSuccessContent />
      </Suspense>
      <Footer />
    </>
  )
}
