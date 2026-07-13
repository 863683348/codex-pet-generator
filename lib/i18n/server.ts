import { en } from './locales/en'

function lookup(dict: unknown, path: string): string | undefined {
  return path
    .split('.')
    .reduce<unknown>((acc, seg) => (acc && typeof acc === 'object' ? (acc as Record<string, unknown>)[seg] : undefined), dict) as
    | string
    | undefined
}

// Server-side translate backed by the English dictionary. API routes and
// Server Actions can't use the client `useI18n` hook, so they fall back to
// en for error messages returned to the client.
export function getServerT(): (key: string, params?: Record<string, string | number>) => string {
  return (key: string, params?: Record<string, string | number>) => {
    let str = lookup(en, key) ?? key
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v))
      }
    }
    return str
  }
}
