'use client'

import { useState } from 'react'
import { Share2, Link2, Twitter, Check, Gift } from 'lucide-react'
import { getSupabaseClient } from '@/lib/supabase/client'

interface SharePanelProps {
  petId: string
  isDemo?: boolean
}

// Shown on the completed result. Lets a logged-in user share their pet to the
// public gallery (/p/[id]) and earn points (once per pet, enforced by the API).
export default function SharePanel({ petId, isDemo = false }: SharePanelProps) {
  const [shared, setShared] = useState(false)
  const [awarded, setAwarded] = useState(0)
  const [points, setPoints] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)
  const [busy, setBusy] = useState(false)

  if (isDemo || !petId || petId === 'demo') return null

  const shareUrl = `${window.location.origin}/p/${petId}`
  const shareText = 'I turned my photo into a pixel pet for OpenAI Codex 🐾'

  const award = async (platform: string) => {
    if (busy || shared) return
    setBusy(true)
    // Open the result tab from within the click gesture so popup blockers don't
    // suppress it; we point it at the public page once the share actually lands.
    const shareUrl = `${window.location.origin}/p/${petId}`
    const resultTab = typeof window !== 'undefined' ? window.open('', '_blank') : null
    try {
      const supabase = getSupabaseClient()
      const { data: { session } } = await supabase.auth.getSession()
      const token = session?.access_token
      if (!token) return

      const res = await fetch(`/api/pets/${petId}/share`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', authorization: 'Bearer ' + token },
        body: JSON.stringify({ platform }),
      })
      if (!res.ok) return
      const data = await res.json()
      setShared(true)
      setAwarded(data.awarded ?? 0)
      setPoints(data.points ?? null)
      if (resultTab) resultTab.location.href = shareUrl
      else window.open(shareUrl, '_blank')
    } catch (err) {
      console.error('Share award error:', err)
    } finally {
      setBusy(false)
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
    award('copy')
  }

  const handleNative = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title: 'My Pixel Pet', text: shareText, url: shareUrl })
        award('native')
      } catch {
        // user cancelled — no award
      }
    } else {
      handleCopy()
    }
  }

  const handleX = () => {
    const intent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`
    window.open(intent, '_blank', 'noopener,noreferrer')
    award('x')
  }

  return (
    <div className="glass-card rounded-lg p-6">
      <div className="mb-4 flex items-center gap-2">
        <Gift className="h-4 w-4 text-accent" />
        <h3 className="font-pixel text-xs text-text-primary">Share & earn points</h3>
      </div>
      <p className="mb-4 text-sm text-text-secondary">
        Share your pet to the public gallery. First share earns{' '}
        <span className="font-pixel text-[10px] text-accent">+10 pts</span> (100 pts = 1 free generation).
      </p>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleNative}
          disabled={busy}
          className="flex items-center gap-2 rounded-lg border border-border bg-bg-elevated px-4 py-2.5 text-sm font-medium text-text-primary transition-all hover:border-accent"
        >
          <Share2 className="h-4 w-4 text-accent" />
          Share
        </button>
        <button
          onClick={handleCopy}
          disabled={busy}
          className="flex items-center gap-2 rounded-lg border border-border bg-bg-elevated px-4 py-2.5 text-sm font-medium text-text-primary transition-all hover:border-accent"
        >
          <Link2 className="h-4 w-4 text-primary" />
          {copied ? 'Copied!' : 'Copy link'}
        </button>
        <button
          onClick={handleX}
          disabled={busy}
          className="flex items-center gap-2 rounded-lg border border-border bg-bg-elevated px-4 py-2.5 text-sm font-medium text-text-primary transition-all hover:border-accent"
        >
          <Twitter className="h-4 w-4 text-primary" />
          Post on X
        </button>
      </div>

      {shared && (
        <div className="mt-4 flex items-center gap-2 rounded-lg border border-success/30 bg-success/10 px-4 py-2.5">
          <Check className="h-4 w-4 text-success" />
          <span className="font-pixel text-[10px] text-success">
            {awarded > 0 ? `Shared! +${awarded} pts` : 'Already shared'} · view at /p/{petId}
          </span>
        </div>
      )}
    </div>
  )
}
