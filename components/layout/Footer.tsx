'use client'

import { Heart } from 'lucide-react'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'
import AdUnit from '@/components/ui/AdUnit'

export default function Footer() {
  const { t } = useI18n()
  return (
    <footer className="border-t border-border py-8">
      {/* 站点级广告位：AdSense 后台创建的广告单元 slot ID */}
      <div className="mx-auto mb-6 max-w-5xl px-4 sm:px-6">
        <AdUnit
          slot="3729808665"
          format="auto"
          className="overflow-hidden rounded-lg border border-border bg-bg-surface/50"
          minHeight={90}
        />
      </div>
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-text-muted">
          <Link href="/privacy" className="transition-colors hover:text-text-primary">{t('footer.privacy')}</Link>
          <Link href="/terms" className="transition-colors hover:text-text-primary">{t('footer.terms')}</Link>
          <Link href="/faq" className="transition-colors hover:text-text-primary">{t('footer.faq')}</Link>
          <Link href="/contact" className="transition-colors hover:text-text-primary">{t('footer.contact')}</Link>
        </nav>
        <div className="mt-4 flex flex-col items-center gap-2 text-text-muted">
          <div className="flex items-center gap-1.5 text-sm">
            {t('footer.madeWith')}
            <Heart className="h-3.5 w-3.5 text-danger" fill="currentColor" />
          </div>
          <div className="text-xs">
            {t('footer.compatible')} &middot; {t('footer.copyright')}
          </div>
        </div>
      </div>
    </footer>
  )
}
