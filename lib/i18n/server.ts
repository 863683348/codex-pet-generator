import { headers } from 'next/headers'
import { en } from './locales/en'
import { zh } from './locales/zh'
import { ja } from './locales/ja'
import { ko } from './locales/ko'
import { fr } from './locales/fr'
import { de } from './locales/de'
import type { Lang } from './LanguageProvider'

const DICTS: Record<Lang, typeof en> = { en, zh, ja, ko, fr, de }

function lookup(dict: unknown, path: string): string | undefined {
  return path
    .split('.')
    .reduce<unknown>((acc, seg) => (acc && typeof acc === 'object' ? (acc as Record<string, unknown>)[seg] : undefined), dict) as
    | string
    | undefined
}

const COOKIE_NAME = 'petgen-lang'

export async function getLangFromRequest(): Promise<Lang> {
  const headerList = await headers()
  const cookie = headerList.get('cookie') || ''
  const cookieMatch = cookie.match(new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=([^;]+)`))
  if (cookieMatch) {
    const saved = decodeURIComponent(cookieMatch[1])
    if (saved in DICTS) return saved as Lang
  }

  const accept = headerList.get('accept-language') || ''
  const lower = accept.toLowerCase()
  if (lower.includes('zh') || lower.includes('zh-cn') || lower.includes('zh-tw')) return 'zh'
  if (lower.includes('ja')) return 'ja'
  if (lower.includes('ko')) return 'ko'
  if (lower.includes('fr')) return 'fr'
  if (lower.includes('de')) return 'de'
  return 'en'
}

// Server-side translate backed by the detected locale. API routes and
// Server Actions can't use the client `useI18n` hook, so they use the
// request's Accept-Language header to pick the right dictionary.
export async function getServerT(): Promise<(key: string, params?: Record<string, string | number>) => string> {
  const lang = await getLangFromRequest()
  const dict = DICTS[lang]
  return (key: string, params?: Record<string, string | number>) => {
    let str = lookup(dict, key) ?? lookup(en, key) ?? key
    if (params) {
      for (const [k, v] of Object.entries(params ?? {})) {
        str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v))
      }
    }
    return str
  }
}
