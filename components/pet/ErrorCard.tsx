'use client'

import { AlertTriangle, RefreshCw, Play } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

interface ErrorCardProps {
  message: string
  code?: string
  onRetry?: () => void
  onDemo?: () => void
  demoLabel?: string
}

export default function ErrorCard({
  message,
  code,
  onRetry,
  onDemo,
  demoLabel,
}: ErrorCardProps) {
  const { t } = useI18n()
  return (
    <div className="animate-fade-in rounded-lg border border-danger/30 bg-danger/10 p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-danger/20">
          <AlertTriangle className="h-5 w-5 text-danger" />
        </div>

        <div className="flex-1">
          <h3 className="font-pixel text-xs text-danger">{t('errorCard.title')}</h3>
          <p className="mt-2 text-sm text-text-secondary">{message}</p>
          {code && (
            <p className="mt-1 font-mono text-[10px] text-danger/70">{code}</p>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-3">
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
