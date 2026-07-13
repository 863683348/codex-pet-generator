import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'forever',
    description: 'Try it out and see what PetGen can do.',
    popular: false,
    features: [
      '3 pet generations',
      '9 animation states',
      'Standard quality spritesheet',
      'WebP download',
      'Community support',
    ],
  },
  {
    name: 'Pro',
    price: '$9',
    period: '/month',
    description: 'For creators who want more control and quality.',
    popular: true,
    features: [
      '15 pet generations / month',
      '9 animation states',
      'HD spritesheet (2x)',
      'WebP + ZIP download',
      'Priority support',
      'pet.json customization',
    ],
  },
  {
    name: 'Unlimited',
    price: '$29',
    period: '/month',
    description: 'For power users and teams.',
    popular: false,
    features: [
      'Unlimited generations',
      '9 animation states',
      'HD + 4K spritesheet',
      'All download formats',
      'Commercial use license',
      'Dedicated support',
      'Custom color palette',
    ],
  },
]

export default function PricingSection() {
  return (
    <section className="mt-16">
      <div className="mb-10 text-center">
        <h2 className="font-pixel text-sm text-text-primary">Simple pricing</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-text-secondary">
          Choose the plan that fits your needs. No hidden fees.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`glass-card relative flex flex-col rounded-lg p-6 ${
              plan.popular
                ? 'border-accent/40 shadow-glow-accent ring-1 ring-accent/20'
                : 'border-border'
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-0.5 font-pixel text-[9px] text-white">
                POPULAR
              </span>
            )}

            <h3 className="font-pixel text-[11px] text-text-primary">{plan.name}</h3>
            <div className="mt-3 flex items-baseline gap-0.5">
              <span className="text-2xl font-semibold text-text-primary">{plan.price}</span>
              {plan.period && (
                <span className="text-xs text-text-muted">{plan.period}</span>
              )}
            </div>
            <p className="mt-2 text-sm text-text-secondary">{plan.description}</p>

            <ul className="mt-5 flex-1 space-y-2.5">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {f}
                </li>
              ))}
            </ul>

            <button
              className={`mt-6 w-full rounded-lg py-2.5 text-sm font-medium transition-all active:scale-[0.98] ${
                plan.popular
                  ? 'bg-accent text-white hover:bg-accent/90'
                  : 'border border-border bg-bg-elevated text-text-primary hover:bg-bg-surface'
              }`}
            >
              {plan.price === 'Free' ? 'Get started' : `Subscribe ${plan.name}`}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
