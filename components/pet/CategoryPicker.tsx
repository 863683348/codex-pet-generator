'use client'

import { useI18n } from '@/lib/i18n'

export interface PetTag {
  id: string
  slug: string
  name: string
}

interface CategoryPickerProps {
  tags: PetTag[]
  selected: string
  onChange: (slug: string) => void
}

export default function CategoryPicker({ tags, selected, onChange }: CategoryPickerProps) {
  const { t } = useI18n()

  if (!tags || tags.length === 0) return null

  return (
    <div className="mb-4">
      <p className="mb-2 text-sm font-medium text-text-secondary">
        {t('upload.chooseCategory')}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => {
          const active = tag.slug === selected
          return (
            <button
              key={tag.id}
              type="button"
              onClick={() => onChange(tag.slug)}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                active
                  ? 'bg-primary text-white'
                  : 'border border-border bg-bg-elevated text-text-secondary hover:text-text-primary'
              }`}
            >
              {tag.name}
            </button>
          )
        })}
      </div>
    </div>
  )
}
