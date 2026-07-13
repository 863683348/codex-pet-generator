import { Heart } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

export default function Footer() {
  const { t } = useI18n()
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <div className="flex flex-col items-center gap-2 text-text-muted">
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
