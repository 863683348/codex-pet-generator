'use client'

import SpritePlayer from './SpritePlayer'
import PixelPet from './PixelPet'
import { ANIMATION_STATES } from '@/types/pet'
import { useI18n } from '@/lib/i18n'

interface AnimationStatesGridProps {
  spritesheetUrl?: string | null
  /** How many states are "done" during generation (0-9). Drives the intermediate reveal. */
  revealedCount?: number
  generating?: boolean
}

const MOTION: Record<string, string> = {
  'idle': 'motion-idle',
  'running-right': 'motion-running-right',
  'running-left': 'motion-running-left',
  'waving': 'motion-waving',
  'jumping': 'motion-jumping',
  'failed': 'motion-failed',
  'waiting': 'motion-waiting',
  'running': 'motion-running',
  'review': 'motion-review',
}

// Shows the 9 animation states. While generating, each state "lights up"
// one-by-one (intermediate effects). Once the spritesheet is ready, every
// cell plays the real animation from its row.
export default function AnimationStatesGrid({
  spritesheetUrl,
  revealedCount = 0,
  generating = false,
}: AnimationStatesGridProps) {
  const { t } = useI18n()
  return (
    <div className="grid grid-cols-3 gap-3">
      {ANIMATION_STATES.map((state, i) => {
        const real = !!spritesheetUrl
        const revealed = real || i < revealedCount

        return (
          <div
            key={state.key}
            className={`flex flex-col items-center gap-2 rounded-md border p-3 transition-colors ${
              real
                ? 'border-primary/30 bg-bg-surface/50'
                : revealed
                ? 'border-success/30 bg-success/5'
                : 'border-border bg-bg-surface/30'
            }`}
          >
            <div className="relative flex h-[104px] w-full items-center justify-center overflow-hidden rounded border border-border bg-bg-elevated">
              {real ? (
                <SpritePlayer
                  spritesheetUrl={spritesheetUrl as string}
                  row={state.row}
                  frames={state.frames}
                />
              ) : revealed ? (
                <PixelPet size={56} className={MOTION[state.key] || 'motion-idle'} />
              ) : (
                <div className="shimmer absolute inset-0" />
              )}

              {!real && revealed && (
                <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-success/20 font-pixel text-[7px] text-success">
                  ✓
                </span>
              )}
              {!real && !revealed && generating && (
                <span className="absolute bottom-1 right-1 font-pixel text-[7px] text-text-muted">
                  …
                </span>
              )}
            </div>
            <span className="font-pixel text-[8px] text-text-secondary">{t(`animation.${state.key}`)}</span>
          </div>
        )
      })}
    </div>
  )
}
