'use client'

import { Check } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

const PLAN_KEYS = ['starter', 'pro', 'unlimited'] as const
const FEATURE_COUNTS: Record<string, number> = { starter: 5, pro: 6, unlimited: 7 }

export default function PricingSection() {
  const { t } = useI18n()

  return (
    <section className="mt-16">
      <div className="mb-10 text-center">
        <h2 className="font-pixel text-sm text-text-primary">{t('pricing.title')}</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-text-secondary">{t('pricing.desc')}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PLAN_KEYS.map((k) => {
          const popular = k === 'pro'
          const prefix = 'pricing.' + k + '.'
          const base = (key: string) => t((prefix + key) as 'pricing.starter.name')
          const features: string[] = []
          const cnt = FEATURE_COUNTS[k]
          for (let i = 1; i <= cnt; i++) {
            const f = base('f' + i)
            if (f !== 'pricing.' + k + '.f' + i) features.push(f)
          }
          return (
            <div
              key={k}
              className={'glass-card relative flex flex-col rounded-lg p-6 ' + (popular ? 'border-accent/40 shadow-glow-accent ring-1 ring-accent/20' : 'border-border')}
            >
              {popular && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-0.5 font-pixel text-[9px] text-white">
                  {t('pricing.popular')}
                </span>
              )}
              <h3 className="font-pixel text-[11px] text-text-primary">{base('name')}</h3>
              <div className="mt-3 flex items-baseline gap-0.5">
                <span className="text-2xl font-semibold text-text-primary">{base('price')}</span>
                <span className="text-xs text-text-muted">{base('period')}</span>
              </div>
              <p className="mt-2 text-sm text-text-secondary">{base('desc')}</p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={'mt-6 w-full rounded-lg py-2.5 text-sm font-medium transition-all active:scale-[0.98] ' + (popular ? 'bg-accent text-white hover:bg-accent/90' : 'border border-border bg-bg-elevated text-text-primary hover:bg-bg-surface')}
              >
                {base('cta')}
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}
