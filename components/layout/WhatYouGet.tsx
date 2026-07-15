'use client'

import PixelPet from '@/components/pet/PixelPet'
import { ANIMATION_STATES } from '@/types/pet'
import { useI18n } from '@/lib/i18n'

const PET_JSON_SAMPLE = `{
  "id": "pixel-cat",
  "displayName": "Pixel Cat",
  "description": "A calm coding companion",
  "spritesheetPath": "spritesheet.webp"
}`

export default function WhatYouGet() {
  const { t } = useI18n()
  return (
    <section className="mt-16">
      <div className="mb-8 text-center">
        <h2 className="font-pixel text-sm text-text-primary">{t('whatYouGet.title')}</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-text-secondary">
          {t('whatYouGet.desc')}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* spritesheet card */}
        <div className="glass-card rounded-lg p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-pixel text-[10px] text-text-primary">{t('whatYouGet.spritesheetTitle')}</h3>
            <span className="font-pixel text-[8px] text-accent">{t('whatYouGet.spritesheetMeta')}</span>
          </div>
          <p className="mb-4 text-sm text-text-secondary">
            {t('whatYouGet.spritesheetDesc')}
          </p>
          <div className="grid grid-cols-3 gap-2 rounded-md border border-border bg-bg-elevated p-3">
            {ANIMATION_STATES.map((state, i) => (
              <div
                key={state.key}
                className="flex h-[60px] items-center justify-center rounded border border-border bg-bg-surface"
              >
                <PixelPet size={34} className={i % 2 === 0 ? 'motion-idle' : 'motion-waving'} />
              </div>
            ))}
          </div>
        </div>

        {/* pet.json card */}
        <div className="glass-card rounded-lg p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-pixel text-[10px] text-text-primary">{t('whatYouGet.jsonTitle')}</h3>
            <span className="font-pixel text-[8px] text-accent">{t('whatYouGet.jsonMeta')}</span>
          </div>
          <p className="mb-4 text-sm text-text-secondary">
            {t('whatYouGet.jsonDesc')}
          </p>
          <pre className="overflow-x-auto rounded-md border border-border bg-bg-elevated p-4 font-mono text-[12px] leading-relaxed text-text-secondary">
            {PET_JSON_SAMPLE}
          </pre>
          <p className="mt-4 text-sm text-text-secondary">
            {t('whatYouGet.jsonCompatible')}
          </p>
        </div>
      </div>
    </section>
  )
}
