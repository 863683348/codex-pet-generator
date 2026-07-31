'use client'

import { useEffect, useState } from 'react'
import { Star, RefreshCw } from 'lucide-react'
import { getSupabaseClient } from '@/lib/supabase/client'
import { REDEEM_COST } from '@/lib/utils/constants'

// Shows the logged-in user's earned points in the navbar and lets them redeem
// points for a bonus generation when they have enough.
export default function PointsBadge() {
  const [points, setPoints] = useState<number | null>(null)
  const [bonus, setBonus] = useState(0)
  const [busy, setBusy] = useState(false)
  const [flash, setFlash] = useState('')

  useEffect(() => {
    const supabase = getSupabaseClient()
    if (!supabase) return

    const load = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      const token = session?.access_token
      if (!token) {
        setPoints(null)
        return
      }
      try {
        const res = await fetch('/api/pets/usage', { headers: { authorization: 'Bearer ' + token } })
        if (res.ok) {
          const d = await res.json()
          setPoints(d.points ?? 0)
          setBonus(d.bonus ?? 0)
        }
      } catch {}
    }
    load()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => load())

    // Refresh the balance when another surface (e.g. the My Pets gallery) awards
    // points via a share, so the navbar badge stays in sync without a reload.
    const onPointsUpdated = () => load()
    window.addEventListener('petgen:points-updated', onPointsUpdated)

    return () => {
      subscription.unsubscribe()
      window.removeEventListener('petgen:points-updated', onPointsUpdated)
    }
  }, [])

  if (points === null) return null

  const canRedeem = points >= REDEEM_COST

  const handleRedeem = async () => {
    if (busy || !canRedeem) return
    setBusy(true)
    try {
      const supabase = getSupabaseClient()
      const { data: { session } } = await supabase.auth.getSession()
      const token = session?.access_token
      if (!token) return
      const res = await fetch('/api/pets/redeem', {
        method: 'POST',
        headers: { authorization: 'Bearer ' + token },
      })
      if (res.ok) {
        const d = await res.json()
        setPoints(d.points)
        setBonus(d.bonus)
        setFlash(`+1 generation! (${bonus + 1} bonus)`)
        setTimeout(() => setFlash(''), 2500)
      }
    } catch (err) {
      console.error('Redeem error:', err)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1.5 rounded-lg border border-border bg-bg-elevated px-2.5 py-1.5 text-text-secondary">
        <Star className="h-3.5 w-3.5 text-accent" />
        <span className="font-pixel text-[10px] text-text-primary">{points} pts</span>
      </div>
      {canRedeem && (
        <button
          onClick={handleRedeem}
          disabled={busy}
          title={`Redeem ${REDEEM_COST} pts for 1 generation`}
          className="flex items-center gap-1 rounded-lg border border-accent/40 bg-accent/10 px-2.5 py-1.5 text-text-primary transition-all hover:bg-accent/20"
        >
          <RefreshCw className="h-3.5 w-3.5 text-accent" />
          <span className="font-pixel text-[10px]">Redeem</span>
        </button>
      )}
      {flash && (
        <span className="font-pixel text-[10px] text-success">{flash}</span>
      )}
    </div>
  )
}
