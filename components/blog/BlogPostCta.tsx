'use client'

import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

export default function BlogPostCta() {
  const { t } = useI18n()
  return (
    <>
      <div className="mt-10 rounded-lg border border-accent/30 bg-accent/10 p-5">
        <h2 className="font-pixel text-[10px] text-accent">{t('blog.tryItYourself')}</h2>
        <p className="mt-2 text-sm text-text-secondary">{t('blog.tryItYourselfDesc')}</p>
        <Link
          href="/"
          className="mt-3 inline-block text-sm font-medium text-primary underline hover:text-accent"
        >
          {t('blog.generateYourPet')}
        </Link>
      </div>
      <div className="mt-8">
        <Link href="/blog" className="text-sm text-text-muted hover:text-text-primary">
          ← {t('blog.backToBlog')}
        </Link>
      </div>
    </>
  )
}
