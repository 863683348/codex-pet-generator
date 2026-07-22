'use client'

import { AlertTriangle, RefreshCw, Play, ArrowUpRight } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { useI18n } from '@/lib/i18n'

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
  const pathname = usePathname()
  const showUpgrade = code ? UPGRADE_CODES.has(code) : false

  const handleUpgrade = () => {
    if (pathname === '/') {
      // Smooth scroll to the pricing section already rendered on the homepage.
      document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      router.push('/#pricing')
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
                className="flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-all hover:bg-accent/90 active:scale-[0.98]"
              >
                <ArrowUpRight className="h-4 w-4" />
                {t('error.upgrade')}
              </button>
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
