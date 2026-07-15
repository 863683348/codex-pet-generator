'use client'

import { Heart } from 'lucide-react'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

export default function Footer() {
  const { t } = useI18n()
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-text-muted">
          <Link href="/privacy" className="transition-colors hover:text-text-primary">{t('footer.privacy')}</Link>
          <Link href="/terms" className="transition-colors hover:text-text-primary">{t('footer.terms')}</Link>
          <Link href="/faq" className="transition-colors hover:text-text-primary">{t('footer.faq')}</Link>
          <Link href="/blog" className="transition-colors hover:text-text-primary">Blog</Link>
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
