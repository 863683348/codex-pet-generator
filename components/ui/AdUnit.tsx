'use client'

import { useEffect, useRef, useState } from 'react'

// localStorage key shared with CookieConsent. Values: 'accepted' | 'rejected' | null
export const ADSENSE_CONSENT_KEY = 'adsense-consent'
type Consent = 'accepted' | 'rejected' | null

/**
 * Reusable Google AdSense display ad unit.
 *
 * - Only renders when NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT is set AND the user has
 *   made a cookie/ads choice (never shows personalized ads before consent).
 * - If the user rejected, requests non-personalized ads via the adsbygoogle queue.
 * - Guards against double-pushing the same <ins> (which would create duplicate ads).
 *
 * Slot IDs are created in the AdSense dashboard after the site is approved.
 * Until then, pass the real slot id from the env or a prop.
 */
export default function AdUnit({
  slot,
  format = 'auto',
  className = '',
  style,
  minHeight = 100,
  label = 'Advertisement',
}: {
  slot: string
  format?: string
  className?: string
  style?: React.CSSProperties
  minHeight?: number
  label?: string
}) {
  const [consent, setConsent] = useState<Consent>(null)
  const insRef = useRef<HTMLModElement>(null)
  const pushed = useRef(false)
  const client = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT

  useEffect(() => {
    const read = () => setConsent((localStorage.getItem(ADSENSE_CONSENT_KEY) as Consent) || null)
    read()
    window.addEventListener('adsense-consent-changed', read)
    return () => window.removeEventListener('adsense-consent-changed', read)
  }, [])

  useEffect(() => {
    if (!client || !consent || pushed.current) return
    const w = window as unknown as { adsbygoogle?: unknown[] }
    w.adsbygoogle = w.adsbygoogle || []
    if (consent === 'rejected') {
      // Serve non-personalized ads for users who declined personalization.
      w.adsbygoogle.push({ requestNonPersonalizedAds: 1 } as never)
    }
    if (insRef.current && !pushed.current) {
      w.adsbygoogle.push({} as never)
      pushed.current = true
    }
  }, [consent, client])

  if (!client || !consent) return null

  return (
    <div
      className={`ads-container ${className}`}
      style={{ minHeight, ...style }}
      aria-label={label}
    >
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  )
}
