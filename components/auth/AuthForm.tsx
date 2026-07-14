'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Mail, Lock, Loader2, AlertCircle, Gamepad2 } from 'lucide-react'
import { getSupabaseClient } from '@/lib/supabase/client'

type Mode = 'signin' | 'signup'

export default function AuthForm({ mode: initialMode = 'signup' }: { mode?: Mode }) {
  const router = useRouter()
  const [mode, setMode] = useState<Mode>(initialMode)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const isSignup = mode === 'signup'

  const handleGoogle = async () => {
    setError('')
    try {
      const supabase = getSupabaseClient()
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: window.location.origin + '/auth/callback' },
      })
      if (error) setError(error.message)
    } catch (e: any) {
      setError(e?.message || 'Google sign-in failed')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)
    try {
      const supabase = getSupabaseClient()
      if (mode === 'signin') {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) {
          setError(error.message)
        } else {
          router.replace('/')
        }
      } else {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin + '/auth/callback' },
        })
        if (error) {
          setError(error.message)
        } else if (data?.session) {
          router.replace('/')
        } else {
          setSuccess('Account created! Check your email to confirm your address.')
        }
      }
    } catch (e: any) {
      console.error('[AuthForm] error:', e)
      setError(e?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  const switchMode = () => {
    setMode((m) => (m === 'signin' ? 'signup' : 'signin'))
    setError('')
    setSuccess('')
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-10">
      <div className="w-full max-w-sm">
        <Link href="/" className="mb-8 flex items-center justify-center gap-2">
          <Gamepad2 className="h-7 w-7 text-primary" />
          <span className="font-pixel text-base text-text-primary">PetGen</span>
        </Link>

        <div className="rounded-2xl border border-border bg-bg-base p-8 shadow-2xl">
          <h1 className="mb-1 text-center font-pixel text-sm text-text-primary">
            {isSignup ? 'Create your account' : 'Welcome back'}
          </h1>
          <p className="mb-6 text-center text-xs text-text-muted">
            {isSignup ? 'Sign up to start generating pixel pets' : 'Sign in to your PetGen account'}
          </p>

          {error && (
            <div className="mb-4 flex items-start gap-2 rounded-lg bg-red-500/10 px-3 py-2.5 text-sm text-red-500">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}
          {success && (
            <div className="mb-4 rounded-lg bg-green-500/10 px-3 py-2 text-center text-sm text-green-500">{success}</div>
          )}

          <form onSubmit={handleSubmit} className="mb-4 space-y-3">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-border bg-bg-elevated py-3 pl-10 pr-4 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
              <input
                type="password"
                placeholder="Password (min 6)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full rounded-xl border border-border bg-bg-elevated py-3 pl-10 pr-4 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-60"
            >
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              {isSignup ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          <div className="mb-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs text-text-muted">OR</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <button
            onClick={handleGoogle}
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-border bg-white px-6 py-3 text-sm font-medium text-[#1f1f1f] transition-all hover:bg-gray-50 active:scale-[0.98]"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Continue with Google
          </button>

          <p className="mt-6 text-center text-xs text-text-muted">
            {isSignup ? (
              <>
                Already have an account?{' '}
                <Link href="/signin" className="text-primary hover:underline">Sign in</Link>
              </>
            ) : (
              <>
                Don&apos;t have an account?{' '}
                <Link href="/signup" className="text-primary hover:underline">Sign up</Link>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}
