import { Upload, MousePointerClick, Package, Terminal } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

const ICONS = [Upload, MousePointerClick, Package, Terminal]

export default function HowItWorks() {
  const { t } = useI18n()

  const STEPS = [
    { title: t('howItWorks.s1title'), desc: t('howItWorks.s1desc') },
    { title: t('howItWorks.s2title'), desc: t('howItWorks.s2desc') },
    { title: t('howItWorks.s3title'), desc: t('howItWorks.s3desc') },
    { title: t('howItWorks.s4title'), desc: t('howItWorks.s4desc') },
  ]

  return (
    <section className="mt-16">
      <div className="mb-8 text-center">
        <h2 className="font-pixel text-sm text-text-primary">{t('howItWorks.title')}</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-text-secondary">
          {t('howItWorks.desc')}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => {
          const Icon = ICONS[i]
          return (
            <div
              key={step.title}
              className="glass-card glow-border rounded-lg p-5"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-pixel text-[10px] text-text-muted">0{i + 1}</span>
              </div>
              <h3 className="mb-2 font-pixel text-[10px] text-text-primary">{step.title}</h3>
              <p className="text-sm text-text-secondary">{step.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
