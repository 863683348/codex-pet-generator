'use client'

import { useEffect, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { getSupabaseClient } from '@/lib/supabase/client'

export default function AuthCallback() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const exchanged = useRef(false)

  useEffect(() => {
    if (exchanged.current) return
    exchanged.current = true

    const code = searchParams.get('code')
    if (!code) {
      router.push('/?auth_error=missing_code')
      return
    }

    const supabase = getSupabaseClient()
    supabase.auth.exchangeCodeForSession(code).then(({ error }) => {
      if (error) {
        console.error('Auth callback error:', error)
        router.push('/?auth_error=true')
      } else {
        router.push('/')
      }
    })
  }, [searchParams, router])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        <p className="text-sm text-text-secondary">Signing you in...</p>
      </div>
    </div>
  )
}
