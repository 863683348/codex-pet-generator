import { Check } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

interface StepIndicatorProps {
  currentStep: number // 1-4
  completedSteps?: number[]
}

export default function StepIndicator({ currentStep, completedSteps = [] }: StepIndicatorProps) {
  const { t } = useI18n()
  const STEPS = [
    { num: 1, label: t('steps.upload') },
    { num: 2, label: t('steps.base') },
    { num: 3, label: t('steps.animate') },
    { num: 4, label: t('steps.install') },
  ]

  return (
    <div className="flex w-full items-center justify-center gap-2 sm:gap-4">
      {STEPS.map((step, idx) => {
        const isActive = step.num === currentStep
        const isCompleted = completedSteps.includes(step.num) || step.num < currentStep
        const isLast = idx === STEPS.length - 1

        return (
          <div key={step.num} className="flex items-center">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`
                  flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-300
                  ${isCompleted
                    ? 'border-success bg-success/20 text-success'
                    : isActive
                    ? 'border-primary bg-primary/20 text-primary animate-pulse-slow'
                    : 'border-border bg-bg-surface text-text-muted'
                  }
                `}
              >
                {isCompleted ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <span className="font-pixel text-[10px]">{step.num}</span>
                )}
              </div>
              <span
                className={`font-pixel text-[9px] transition-colors ${
                  isActive ? 'text-primary' : isCompleted ? 'text-success' : 'text-text-muted'
                }`}
              >
                {step.label}
              </span>
            </div>

            {!isLast && (
              <div
                className={`mx-1 h-0.5 w-8 rounded-full sm:w-16 transition-colors duration-300 ${
                  isCompleted ? 'bg-success' : 'bg-border'
                }`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
