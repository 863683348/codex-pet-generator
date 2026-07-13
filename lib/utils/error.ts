/**
 * Convert raw backend error text into user-friendly, localized messages.
 *
 * Some providers (Bailian, OpenAI) return verbose machine-readable payloads.
 * We detect common patterns and return a short actionable translation key.
 */

export type Translate = (key: string, params?: Record<string, string | number>) => string

export function getFriendlyError(error: string | null, t: Translate): string | null {
  if (!error) return null

  // Bailian: free tier / unverified account quota exhausted.
  if (
    error.includes('AllocationQuota.FreeTierOnly') ||
    error.includes('FreeTierOnly') ||
    error.includes('use free tier only')
  ) {
    return t('error.bailianQuotaExhausted')
  }

  return error
}
