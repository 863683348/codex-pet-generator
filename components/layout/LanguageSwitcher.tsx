'use client'

import { useI18n, type Lang } from '@/lib/i18n'

const LANGS: Lang[] = ['en', 'zh', 'ja', 'ko', 'fr', 'de']

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useI18n()

  return (
    <div className="flex items-center gap-0.5 rounded-lg border border-border bg-bg-elevated p-0.5">
      {LANGS.map(l => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-md px-2.5 py-1 font-pixel text-[10px] transition-colors ${
            lang === l
              ? 'bg-primary text-white'
              : 'text-text-muted hover:text-text-primary'
          }`}
        >
          {t(`lang.${l}`)}
        </button>
      ))}
    </div>
  )
}
