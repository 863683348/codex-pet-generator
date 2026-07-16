'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getSupabaseClient } from '@/lib/supabase/client'

declare global {
  interface Window {
    paypal?: any
  }
}

export default function PayPalCheckoutButton({ plan }: { plan: 'pro' | 'unlimited' }) {
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
  const mode = process.env.NEXT_PUBLIC_PAYPAL_MODE || 'sandbox'

  useEffect(() => {
    if (!clientId) {
      setError('PayPal is not configured.')
      setLoading(false)
      return
    }

    const authHeaders = async (): Promise<Record<string, string>> => {
      const supabase = getSupabaseClient()
      const { data: { session } } = await supabase.auth.getSession()
      const headers: Record<string, string> = { 'Content-Type': 'application/json' }
      if (session?.access_token) headers['Authorization'] = 'Bearer ' + session.access_token
      return headers
    }

    const renderButtons = () => {
      if (!window.paypal || !containerRef.current) return
      containerRef.current.innerHTML = ''
      window.paypal
        .Buttons({
          style: { layout: 'vertical', color: 'gold', shape: 'rect', label: 'pay', height: 44 },
          createOrder: async (): Promise<string> => {
            const res = await fetch('/api/paypal/order', {
              method: 'POST',
              headers: await authHeaders(),
              body: JSON.stringify({ plan }),
            })
            const data = await res.json()
            if (!res.ok || !data.orderID) {
              throw new Error(data.error || 'Failed to create PayPal order')
            }
            return data.orderID
          },
          onApprove: async (data: { orderID: string }) => {
            const res = await fetch('/api/paypal/capture', {
              method: 'POST',
              headers: await authHeaders(),
              body: JSON.stringify({ orderID: data.orderID, plan }),
            })
            const out = await res.json()
            if (!res.ok || !out.success) {
              throw new Error(out.error || 'Payment capture failed')
            }
            router.push('/payment/success?provider=paypal&plan=' + plan)
          },
          onCancel: () => {
            router.push('/payment/cancel?plan=' + plan)
          },
          onError: (err: unknown) => {
            console.error('PayPal error:', err)
            setError('PayPal payment failed. Please try again.')
          },
        })
        .render(containerRef.current)
      setLoading(false)
    }

    const existing = document.querySelector<HTMLScriptElement>('script[data-paypal-sdk]')
    if (existing && window.paypal) {
      renderButtons()
    } else if (!existing) {
      const script = document.createElement('script')
      // PayPal JS SDK 统一走 www.paypal.com；client-id 决定沙盒/生产环境
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD&intent=capture`
      script.dataset.paypalSdk = 'true'
      script.onload = renderButtons
      script.onerror = () => {
        setError('Failed to load PayPal SDK.')
        setLoading(false)
      }
      document.head.appendChild(script)
    } else {
      const timer = setInterval(() => {
        if (window.paypal) {
          clearInterval(timer)
          renderButtons()
        }
      }, 200)
      return () => clearInterval(timer)
    }

    return () => {
      if (containerRef.current) containerRef.current.innerHTML = ''
    }
  }, [clientId, plan, router])

  if (error) {
    return <p className="mt-6 text-center text-xs text-danger">{error}</p>
  }

  return (
    <div className="mt-6">
      {loading && <div className="h-11 animate-pulse rounded-lg bg-bg-surface" />}
      <div ref={containerRef} className="paypal-button-container" />
    </div>
  )
}
