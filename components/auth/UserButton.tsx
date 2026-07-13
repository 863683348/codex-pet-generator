'use client'

import { useEffect, useState } from 'react'
import { LogIn, LogOut, User as UserIcon } from 'lucide-react'
import { getSupabaseClient } from '@/lib/supabase/client'
import type { User } from '@supabase/supabase-js'
import SignInModal from './SignInModal'

export default function UserButton() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [showSignIn, setShowSignIn] = useState(false)

  useEffect(() => {
    const supabase = getSupabaseClient()

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleSignOut = async () => {
    const supabase = getSupabaseClient()
    await supabase.auth.signOut()
    setUser(null)
  }

  if (loading) return null

  if (user) {
    return (
      <div className="relative group">
        <button className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-text-secondary transition-colors hover:bg-bg-elevated hover:text-text-primary">
          {user.user_metadata?.avatar_url ? (
            <img
              src={user.user_metadata.avatar_url}
              alt=""
              className="h-7 w-7 rounded-full"
            />
          ) : (
            <UserIcon className="h-5 w-5" />
          )}
        </button>
        <div className="absolute right-0 top-full mt-1 w-48 origin-top-right scale-95 rounded-lg border border-border bg-bg-base p-1 opacity-0 shadow-lg transition-all group-hover:scale-100 group-hover:opacity-100">
          <div className="border-b border-border px-3 py-2 text-xs text-text-secondary truncate">
            {user.email}
          </div>
          <button
            onClick={handleSignOut}
            className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-text-secondary transition-colors hover:bg-bg-elevated hover:text-text-primary"
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <button
        onClick={() => setShowSignIn(true)}
        className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-text-secondary transition-colors hover:bg-bg-elevated hover:text-text-primary"
      >
        <LogIn className="h-4 w-4" />
        <span className="hidden sm:inline">Sign in</span>
      </button>
      <SignInModal open={showSignIn} onClose={() => setShowSignIn(false)} />
    </>
  )
}
