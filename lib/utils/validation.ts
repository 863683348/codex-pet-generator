import { ACCEPTED_FORMATS, MAX_FILE_SIZE } from '@/types/pet'

type TranslateFn = (key: string, params?: Record<string, string | number>) => string

export function validateImageFile(
  file: File,
  t: TranslateFn
): { valid: boolean; error?: string } {
  if (!ACCEPTED_FORMATS.includes(file.type)) {
    return { valid: false, error: t('error.unsupportedFormat', { type: file.type }) }
  }
  if (file.size > MAX_FILE_SIZE) {
    return {
      valid: false,
      error: t('error.fileTooLarge', { size: (file.size / 1024 / 1024).toFixed(1) }),
    }
  }
  return { valid: true }
}

export function generatePetId(): string {
  const adj = PET_ADJECTIVES[Math.floor(Math.random() * PET_ADJECTIVES.length)]
  const noun = PET_NOUNS[Math.floor(Math.random() * PET_NOUNS.length)]
  const num = Math.floor(Math.random() * 100)
  return `${adj}-${noun}-${num}`
}

const PET_ADJECTIVES = [
  'blue', 'red', 'green', 'purple', 'golden', 'silver', 'crystal', 'shadow',
  'frost', 'ember', 'storm', 'lunar', 'solar', 'cyber', 'mint', 'neon',
]

const PET_NOUNS = [
  'octo', 'fox', 'dragon', 'cat', 'wolf', 'owl', 'bot', 'ghost',
  'star', 'leaf', 'wave', 'spark', 'moon', 'sun', 'cloud', 'pixel',
]

export function generateDisplayName(petId: string): string {
  return petId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export function generateDescription(petId: string): string {
  const descriptions = [
    `A custom companion born from your image.`,
    `Your personal coding buddy, pixel-crafted.`,
    `A unique desktop pet ready to code with you.`,
    `Generated with love and pixels.`,
  ]
  return descriptions[Math.floor(Math.random() * descriptions.length)]
}
