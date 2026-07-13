'use client'

import { useEffect, useRef, Suspense } from 'react'
import { useRouter } from 'next/navigation'
import { getSupabaseClient } from '@/lib/supabase/client'

function AuthCallbackInner() {
  const router = useRouter()
  const supabase = getSupabaseClient()
  const exchanged = useRef(false)

  useEffect(() => {
    if (exchanged.current) return
    exchanged.current = true

    async function handleCallback() {
      // Try PKCE flow first — extract `code` from URL query params
      const params = new URLSearchParams(window.location.search)
      const code = params.get('code')

      if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code)
        if (error) {
          console.error('Auth callback code exchange error:', error)
          router.push('/?auth_error=code_exchange')
          return
        }
        router.push('/')
        return
      }

      // No code param — check if session was already established (e.g. implicit flow)
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        router.push('/')
        return
      }

      // Neither — something went wrong
      router.push('/?auth_error=missing_code')
    }

    handleCallback()
  }, [router, supabase])

  return null
}

export default function AuthCallback() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        <p className="text-sm text-text-secondary">Signing you in...</p>
      </div>
      <Suspense fallback={null}>
        <AuthCallbackInner />
      </Suspense>
    </div>
  )
}
