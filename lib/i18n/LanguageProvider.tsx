'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react'
import { en, type Dict } from './locales/en'
import { zh } from './locales/zh'

export type Lang = 'en' | 'zh'

const DICTS: Record<Lang, Dict> = { en, zh }
const STORAGE_KEY = 'petgen-lang'

type Params = Record<string, string | number>

interface I18nContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string, params?: Params) => string
}

const I18nContext = createContext<I18nContextValue>({
  lang: 'en',
  setLang: () => {},
  t: (key: string) => key,
})

export function useI18n(): I18nContextValue {
  return useContext(I18nContext)
}

function lookup(dict: unknown, path: string): string | undefined {
  return path
    .split('.')
    .reduce<unknown>((acc, seg) => (acc && typeof acc === 'object' ? (acc as Record<string, unknown>)[seg] : undefined), dict) as
    | string
    | undefined
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default to 'en' on first render so SSR and first client render match
  // (avoids hydration mismatch). Real preference is read from localStorage in effect.
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'zh') {
      setLangState(saved)
    }
  }, [])

  const applyDomLang = useCallback((l: Lang) => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = l === 'zh' ? 'zh-CN' : 'en'
    }
  }, [])

  useEffect(() => {
    applyDomLang(lang)
  }, [lang, applyDomLang])

  const setLang = useCallback(
    (l: Lang) => {
      setLangState(l)
      localStorage.setItem(STORAGE_KEY, l)
      applyDomLang(l)
    },
    [applyDomLang]
  )

  const t = useCallback(
    (key: string, params?: Params): string => {
      let str = lookup(DICTS[lang], key) ?? lookup(DICTS.en, key) ?? key
      if (params) {
        for (const [k, v] of Object.entries(params)) {
          str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v))
        }
      }
      return str
    },
    [lang]
  )

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>
}
