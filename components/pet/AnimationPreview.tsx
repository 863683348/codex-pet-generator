import SpritePlayer from './SpritePlayer'
import { ANIMATION_STATES } from '@/types/pet'
import { useI18n } from '@/lib/i18n'

interface AnimationPreviewProps {
  spritesheetUrl: string
}

export default function AnimationPreview({ spritesheetUrl }: AnimationPreviewProps) {
  const { t } = useI18n()
  return (
    <div className="animate-fade-in glass-card rounded-lg p-6">
      <h3 className="mb-4 font-pixel text-xs text-text-primary">{t('animationPreview.title')}</h3>
      <p className="mb-6 text-sm text-text-secondary">
        {t('animationPreview.desc')}
      </p>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
        {ANIMATION_STATES.map(state => (
          <div
            key={state.key}
            className="flex flex-col items-center gap-2 rounded-md border border-border bg-bg-surface/50 p-3 transition-colors hover:border-primary/50"
          >
            <SpritePlayer
              spritesheetUrl={spritesheetUrl}
              row={state.row}
              frames={state.frames}
              label={t(`animation.${state.key}`)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
