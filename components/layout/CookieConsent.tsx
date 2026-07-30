'use client'

import { useEffect, useState } from 'react'
import { ADSENSE_CONSENT_KEY } from '@/components/ui/AdUnit'

type Consent = 'accepted' | 'rejected' | null

/**
 * Lightweight cookie / ad-consent banner.
 *
 * Shows on first visit only. Stores the choice in localStorage and broadcasts an
 * `adsense-consent-changed` event so AdUnit components can react without a reload.
 *
 * NOTE: For full EEA/UK compliance (TCF v2.2), Google requires a certified CMP.
 * This banner is a minimal, defensible starting point — replace with a certified
 * CMP (e.g. Google's Funding Choices / a TCF-registered vendor) before scaling EU traffic.
 */
export default function CookieConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const c = localStorage.getItem(ADSENSE_CONSENT_KEY)
    if (!c) setShow(true)
  }, [])

  const decide = (value: 'accepted' | 'rejected') => {
    localStorage.setItem(ADSENSE_CONSENT_KEY, value)
    setShow(false)
    window.dispatchEvent(new Event('adsense-consent-changed'))
  }

  if (!show) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-border bg-bg-surface/95 backdrop-blur-lg">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-xs leading-relaxed text-text-secondary">
          We use cookies and Google AdSense to display ads. Ads may be personalized based on your
          activity. See our{' '}
          <a href="/privacy" className="text-primary underline">
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => decide('rejected')}
            className="rounded-lg border border-border px-4 py-2 text-xs text-text-secondary transition-colors hover:bg-bg-elevated"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => decide('accepted')}
            className="rounded-lg bg-primary px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-primary-hover"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
