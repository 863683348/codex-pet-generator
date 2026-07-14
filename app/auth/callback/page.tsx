'use client'

import { useEffect, useRef, Suspense } from 'react'
import { useRouter } from 'next/navigation'

function AuthCallbackInner() {
  const router = useRouter()
  const exchanged = useRef(false)

  useEffect(() => {
    if (exchanged.current) return
    exchanged.current = true

    ;(async () => {
      try {
        // Dynamic import — never throws during SSR/build
        const mod = await import('@/lib/supabase/client')
        const supabase = mod.getSupabaseClient()

        const params = new URLSearchParams(window.location.search)
        const code = params.get('code')

        if (code) {
          const { error } = await supabase.auth.exchangeCodeForSession(code)
          if (error) {
            console.error('Auth callback error:', error)
            router.push('/?auth_error=code_exchange')
            return
          }
          router.push('/')
          return
        }

        const { data: { session } } = await supabase.auth.getSession()
        if (session) { router.push('/'); return }

        router.push('/?auth_error=missing_code')
      } catch (e) {
        console.error('Auth init error:', e)
        router.push('/?auth_error=config')
      }
    })()
  }, [router])

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
