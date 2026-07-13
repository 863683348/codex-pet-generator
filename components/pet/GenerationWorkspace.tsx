'use client'

import { useEffect, useState } from 'react'
import PixelPet from './PixelPet'
import ProgressRing from '@/components/ui/ProgressRing'
import BasePreview from './BasePreview'
import AnimationStatesGrid from './AnimationStatesGrid'
import DownloadButton from './DownloadButton'
import CodeBlock from '@/components/ui/CodeBlock'
import ErrorCard from './ErrorCard'
import { PetTask } from '@/types/pet'
import { useI18n } from '@/lib/i18n'
import { getFriendlyError } from '@/lib/utils/error'

interface GenerationWorkspaceProps {
  task: PetTask
  onApprove: () => void
  onReject: () => void
  onRetry: () => void
  onDemo?: () => void
  isApproving: boolean
  isRegenerating: boolean
  demo?: boolean
}

// Orchestrates the visual flow and surfaces INTERMEDIATE effects:
//  - base generation: a working mascot + simulated progress
//  - animation generation: the 9-state grid lighting up one-by-one
//  - completed: real spritesheet playing every state + install steps
export default function GenerationWorkspace({
  task,
  onApprove,
  onReject,
  onRetry,
  onDemo,
  isApproving,
  isRegenerating,
  demo = false,
}: GenerationWorkspaceProps) {
  const { t } = useI18n()
  const [baseProgress, setBaseProgress] = useState(task.progress || 15)
  const [revealed, setRevealed] = useState(0)

  // Simulate base progress until the real image arrives.
  useEffect(() => {
    if (task.status === 'processing' && !task.baseImageUrl) {
      const t = setInterval(() => {
        setBaseProgress(p => Math.min(p + Math.random() * 7 + 3, 95))
      }, 1100)
      return () => clearInterval(t)
    }
    if (task.baseImageUrl) setBaseProgress(100)
  }, [task.status, task.baseImageUrl])

  // Reveal animation states one-by-one until the real spritesheet arrives.
  useEffect(() => {
    if (task.status === 'generating_animation' && !task.spritesheetUrl) {
      const t = setInterval(() => {
        setRevealed(r => Math.min(r + 1, 9))
      }, 2500)
      return () => clearInterval(t)
    }
    if (task.spritesheetUrl) setRevealed(9)
  }, [task.status, task.spritesheetUrl])

  if (task.status === 'failed') {
    return (
      <ErrorCard
        message={getFriendlyError(task.error, t) || t('error.generationFailed')}
        code={task.errorCode}
        onRetry={onRetry}
        onDemo={onDemo}
      />
    )
  }

  if (task.status === 'processing') {
    return (
      <div className="animate-fade-in glass-card rounded-lg p-8">
        <div className="flex flex-col items-center gap-6">
          <PixelPet size={92} className="motion-idle" />
          <ProgressRing size={72} progress={Math.round(baseProgress)} label={t('workspace.generatingBase')} />
          <p className="text-center text-sm text-text-secondary">
            {t('workspace.sketching')}
          </p>
          <div className="h-1.5 w-full max-w-md overflow-hidden rounded-full bg-bg-elevated">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-700"
              style={{ width: `${baseProgress}%` }}
            />
          </div>
          <p className="mt-3 max-w-md text-center text-xs leading-relaxed text-text-muted">
            {t('workspace.waitingHintBase')}
          </p>
          <p className="font-pixel text-[9px] text-text-muted">{t('workspace.step1')}</p>
        </div>
      </div>
    )
  }

  if (task.status === 'awaiting_approval' && task.baseImageUrl) {
    return <BasePreview imageUrl={task.baseImageUrl} onApprove={onApprove} onReject={onReject} loading={isApproving || isRegenerating} />
  }

  if (task.status === 'generating_animation' || (task.status === 'completed' && !task.spritesheetUrl)) {
    const pct = Math.round((revealed / 9) * 100)
    return (
      <div className="animate-fade-in glass-card rounded-lg p-6">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h3 className="font-pixel text-xs text-text-primary">{t('workspace.generatingStates')}</h3>
            <p className="mt-2 text-sm text-text-secondary">
              {t('workspace.composing')}
            </p>
          </div>
          <span className="font-pixel text-[10px] text-accent">{revealed}/9</span>
        </div>

        <AnimationStatesGrid revealedCount={revealed} generating />

        <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-bg-elevated">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-700"
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="mt-4 max-w-md text-center text-xs leading-relaxed text-text-muted">
          {t('workspace.waitingHintAnim')}
        </p>
        <p className="mt-3 text-center font-pixel text-[9px] text-text-muted">{t('workspace.step2')}</p>
      </div>
    )
  }

  if (task.status === 'completed' && task.spritesheetUrl) {
    const petId = task.petJson?.id || 'your-pet'
    const macosCmds = [
      `mkdir -p ~/.codex/pets/${petId}`,
      `unzip -o ${petId}.zip -d ~/.codex/pets/${petId}`,
    ]
    const windowsCmds = [
      `New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\\.codex\\pets\\${petId}"`,
      `Expand-Archive -Path "${petId}.zip" -DestinationPath "$env:USERPROFILE\\.codex\\pets\\${petId}" -Force`,
    ]

    return (
      <div className="flex animate-fade-in flex-col gap-6">
        <div className="glass-card rounded-lg p-6">
          <h3 className="mb-2 font-pixel text-xs text-text-primary">{t('workspace.petAlive')}</h3>
          <p className="mb-5 text-sm text-text-secondary">
            {t('workspace.allStates')}
          </p>
          <AnimationStatesGrid spritesheetUrl={task.spritesheetUrl} />

          {/* 醒目下载区 */}
          <div className="mt-6 flex flex-col items-center gap-3 rounded-lg border border-accent/30 bg-accent/10 px-5 py-5">
            <span className="font-pixel text-[10px] text-accent">{t('workspace.packageReady')}</span>
            <p className="max-w-md text-center text-xs leading-relaxed text-text-muted">
              {t('workspace.downloadHint')}
            </p>
            {!demo && (
              <DownloadButton href={`/api/pets/${task.taskId}/download`} petId={petId} />
            )}
          </div>
        </div>

        <div className="glass-card rounded-lg p-6">
          <h3 className="mb-4 font-pixel text-xs text-text-primary">{t('workspace.petJsonTitle')}</h3>
          <CodeBlock label="pet.json" code={JSON.stringify(task.petJson, null, 2)} />

          <div className="mt-6">
            <h4 className="mb-3 font-pixel text-[10px] text-text-secondary">{t('workspace.installMac')}</h4>
            <CodeBlock label="Terminal" code={macosCmds} />
          </div>
          <div className="mt-4">
            <h4 className="mb-3 font-pixel text-[10px] text-text-secondary">{t('workspace.installWin')}</h4>
            <CodeBlock label="PowerShell" code={windowsCmds} />
          </div>
        </div>
      </div>
    )
  }

  return null
}
