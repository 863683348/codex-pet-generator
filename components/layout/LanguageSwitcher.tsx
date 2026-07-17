'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useI18n, type Lang } from '@/lib/i18n'

const LANGS: Lang[] = ['en', 'zh', 'ja', 'ko', 'fr', 'de']

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useI18n()
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Desktop: full button row */}
      <div className="hidden items-center gap-0.5 rounded-lg border border-border bg-bg-elevated p-0.5 sm:flex">
        {LANGS.map((l) => (
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

      {/* Mobile: compact dropdown to avoid navbar overflow */}
      <div className="relative sm:hidden">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="Select language"
          className="flex items-center gap-1 rounded-lg border border-border bg-bg-elevated px-3 py-2 font-pixel text-[10px] text-text-primary"
        >
          {t(`lang.${lang}`)}
          <ChevronDown className="h-3 w-3" />
        </button>
        {open && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <div className="absolute right-0 top-full z-50 mt-1 grid w-28 grid-cols-2 gap-1 rounded-lg border border-border bg-bg-base p-1 shadow-lg">
              {LANGS.map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setLang(l)
                    setOpen(false)
                  }}
                  className={`rounded-md px-2 py-1.5 text-center font-pixel text-[10px] transition-colors ${
                    lang === l
                      ? 'bg-primary text-white'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                >
                  {t(`lang.${l}`)}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}
