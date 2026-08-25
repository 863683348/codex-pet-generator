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
import { ja } from './locales/ja'
import { ko } from './locales/ko'
import { fr } from './locales/fr'
import { de } from './locales/de'

export type Lang = 'en' | 'zh' | 'ja' | 'ko' | 'fr' | 'de'

const DICTS: Record<Lang, Dict> = { en, zh, ja, ko, fr, de }
const STORAGE_KEY = 'petgen-lang'
const COOKIE_NAME = 'petgen-lang'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365

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
  const [lang, setLangState] = useState<Lang>('en')

  const setCookieLang = useCallback((l: Lang) => {
    if (typeof document === 'undefined') return
    document.cookie = `${COOKIE_NAME}=${encodeURIComponent(l)}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`
  }, [])

  useEffect(() => {
    // Prefer localStorage; fall back to the petgen-lang cookie so the client
    // initializes to the same locale the server used to render the page.
    let saved: string | null = localStorage.getItem(STORAGE_KEY)
    if (!saved && typeof document !== 'undefined') {
      const match = document.cookie.match(new RegExp(`(?:^|;)\\s*${COOKIE_NAME}=([^;]+)`))
      if (match) saved = decodeURIComponent(match[1])
    }
    if (saved === 'en' || saved === 'zh' || saved === 'ja' || saved === 'ko' || saved === 'fr' || saved === 'de') {
      setLangState(saved)
      setCookieLang(saved)
    }
  }, [setCookieLang])

  const applyDomLang = useCallback((l: Lang) => {
    if (typeof document !== 'undefined') {
      const map: Record<Lang, string> = { en: 'en', zh: 'zh-CN', ja: 'ja', ko: 'ko', fr: 'fr', de: 'de' }
      document.documentElement.lang = map[l]
    }
  }, [])

  useEffect(() => {
    applyDomLang(lang)
  }, [lang, applyDomLang])

  const setLang = useCallback(
    (l: Lang) => {
      setLangState(l)
      localStorage.setItem(STORAGE_KEY, l)
      setCookieLang(l)
      applyDomLang(l)
    },
    [applyDomLang, setCookieLang]
  )

  const t = useCallback(
    (key: string, params?: Params): string => {
      let str = lookup(DICTS[lang], key) ?? lookup(DICTS.en, key) ?? key
      if (params) {
        for (const [k, v] of Object.entries(params)) {
          str = str.replace(new RegExp('\\{' + k + '\\}', 'g'), String(v))
        }
      }
      return str
    },
    [lang]
  )

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>
}
