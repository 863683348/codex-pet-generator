'use client'

import { Check, RefreshCw } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

interface BasePreviewProps {
  imageUrl: string
  onApprove: () => void
  onReject: () => void
  loading?: boolean
}

export default function BasePreview({ imageUrl, onApprove, onReject, loading }: BasePreviewProps) {
  const { t } = useI18n()
  return (
    <div className="animate-fade-in glass-card rounded-lg p-6">
      <h3 className="mb-4 font-pixel text-xs text-text-primary">{t('basePreview.title')}</h3>

      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        {/* Image preview - transparent PNG shows directly on the glass card */}
        <div className="relative shrink-0">
          <div className="h-[208px] w-[192px] overflow-hidden rounded-md border-2 border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageUrl}
              alt="Pet base preview"
              className="h-full w-full object-contain"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>
        </div>

        {/* Info + actions */}
        <div className="flex flex-1 flex-col gap-4">
          <div>
            <p className="text-sm text-text-secondary">
              {t('basePreview.desc')}
            </p>
          </div>

          {loading ? (
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <RefreshCw className="h-4 w-4 animate-spin" />
              {t('basePreview.regenerating')}
            </div>
          ) : (
            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                onClick={onApprove}
                className="flex items-center justify-center gap-2 rounded-md bg-success px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-success/90 hover:shadow-glow"
              >
                <Check className="h-4 w-4" />
                {t('basePreview.approve')}
              </button>
              <button
                onClick={onReject}
                className="flex items-center justify-center gap-2 rounded-md border border-border bg-bg-elevated px-5 py-2.5 text-sm font-medium text-text-secondary transition-all hover:border-primary hover:text-text-primary"
              >
                <RefreshCw className="h-4 w-4" />
                {t('basePreview.regenerate')}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
