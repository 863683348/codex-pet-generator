'use client'

import { AlertTriangle, RefreshCw, Play, ArrowUpRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useI18n } from '@/lib/i18n'
import { getSupabaseClient } from '@/lib/supabase/client'

interface ErrorCardProps {
  message: string
  code?: string
  onRetry?: () => void
  onDemo?: () => void
  demoLabel?: string
}

// Codes that mean the user has hit a plan limit and should upgrade.
const UPGRADE_CODES = new Set(['LIMIT_REACHED', 'QUOTA_EXCEEDED'])

export default function ErrorCard({
  message,
  code,
  onRetry,
  onDemo,
  demoLabel,
}: ErrorCardProps) {
  const { t } = useI18n()
  const router = useRouter()
  const [upgrading, setUpgrading] = useState(false)
  const [upgradeError, setUpgradeError] = useState('')
  const showUpgrade = code ? UPGRADE_CODES.has(code) : false

  const handleUpgrade = async () => {
    setUpgradeError('')
    const supabase = getSupabaseClient()
    const { data: { session } } = await supabase.auth.getSession()
    if (!session?.access_token) {
      // Not signed in — bounce to auth so the user can sign up / log in
      // before paying.
      router.push('/auth?next=' + encodeURIComponent(window.location.pathname))
      return
    }
    setUpgrading(true)
    try {
      const res = await fetch('/api/paypal/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({ plan: 'pro' }),
      })
      if (!res.ok) {
        const text = await res.text().catch(() => '')
        throw new Error(text || `PayPal order failed (${res.status})`)
      }
      const data = (await res.json()) as { orderID?: string; approvalUrl?: string | null }
      if (!data.approvalUrl) {
        throw new Error('PayPal did not return an approval URL')
      }
      // Hard redirect to the PayPal hosted checkout. The user lands back on
      // /payment/success?provider=paypal&plan=pro after approving.
      window.location.href = data.approvalUrl
    } catch (err) {
      setUpgradeError(err instanceof Error ? err.message : 'Failed to start checkout')
      setUpgrading(false)
    }
  }

  // Surface a short, human-friendly code label instead of raw machine codes.
  const friendlyCode =
    code === 'LIMIT_REACHED'
      ? t('error.limitReached')
      : code === 'QUOTA_EXCEEDED'
        ? t('error.quotaExceededShort')
        : code

  return (
    <div className="animate-fade-in rounded-lg border border-danger/30 bg-danger/10 p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-danger/20">
          <AlertTriangle className="h-5 w-5 text-danger" />
        </div>

        <div className="flex-1">
          <h3 className="font-pixel text-xs text-danger">{t('errorCard.title')}</h3>
          <p className="mt-2 text-sm text-text-secondary">{message}</p>
          {friendlyCode && (
            <p className="mt-1 font-mono text-[10px] text-danger/70">{friendlyCode}</p>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-3">
            {showUpgrade && (
              <button
                onClick={handleUpgrade}
                disabled={upgrading}
                className="flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-all hover:bg-accent/90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <ArrowUpRight className="h-4 w-4" />
                {upgrading ? 'Opening checkout…' : t('error.upgrade')}
              </button>
            )}
            {upgradeError && (
              <span className="font-mono text-[10px] text-danger/80">{upgradeError}</span>
            )}
            {onRetry && (
              <button
                onClick={onRetry}
                className="flex items-center gap-2 rounded-md border border-danger/30 bg-danger/10 px-4 py-2 text-sm text-danger transition-all hover:bg-danger/20"
              >
                <RefreshCw className="h-4 w-4" />
                {t('errorCard.retry')}
              </button>
            )}
            {onDemo && (
              <button
                onClick={onDemo}
                className="flex items-center gap-2 rounded-md border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-accent transition-all hover:bg-accent/20"
              >
                <Play className="h-4 w-4" />
                {demoLabel || t('errorCard.tryDemo')}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
