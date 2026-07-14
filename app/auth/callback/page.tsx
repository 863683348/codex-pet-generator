'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import { getSupabaseClient } from '@/lib/supabase/client'

export default function AuthCallback() {
  const router = useRouter()
  const [status, setStatus] = useState('Verifying your session...')

  useEffect(() => {
    const supabase = getSupabaseClient()
    const params = new URLSearchParams(window.location.search)
    const code = params.get('code')

    if (!code) {
      setStatus('No verification code found. Redirecting to sign in...')
      const t = setTimeout(() => router.replace('/signin'), 1500)
      return () => clearTimeout(t)
    }

    supabase.auth
      .exchangeCodeForSession(code)
      .then(({ error }) => {
        if (error) {
          setStatus('Verification failed: ' + error.message)
          setTimeout(() => router.replace('/signin'), 2500)
        } else {
          router.replace('/')
        }
      })
      .catch((e: any) => {
        setStatus('Verification error: ' + (e?.message || 'unknown'))
        setTimeout(() => router.replace('/signin'), 2500)
      })
  }, [router])

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 px-4">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <p className="text-sm text-text-muted">{status}</p>
    </div>
  )
}
