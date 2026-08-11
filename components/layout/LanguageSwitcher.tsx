'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useI18n, type Lang } from '@/lib/i18n'

const LANGS: Lang[] = ['en', 'zh', 'ja', 'ko', 'fr', 'de']

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useI18n()
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Select language"
        aria-expanded={open}
        className="flex h-9 items-center gap-1 rounded-lg border border-border bg-bg-elevated px-2.5 text-text-secondary transition-colors hover:bg-bg-surface hover:text-text-primary"
      >
        <span className="min-w-[1.25rem] text-center font-pixel text-[11px] font-medium uppercase">
          {t(`lang.${lang}`)}
        </span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-full z-50 mt-1.5 w-32 rounded-lg border border-border bg-bg-base p-1 shadow-lg">
            <div className="grid grid-cols-2 gap-1">
              {LANGS.map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setLang(l)
                    setOpen(false)
                  }}
                  aria-pressed={lang === l}
                  className={`rounded-md px-2 py-1.5 text-center font-pixel text-[10px] transition-colors ${
                    lang === l
                      ? 'bg-primary text-white'
                      : 'text-text-muted hover:bg-bg-elevated hover:text-text-primary'
                  }`}
                >
                  {t(`lang.${l}`)}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
