export const STORAGE_BUCKET = 'pet-assets'

export const STORAGE_PATHS = {
  source: (taskId: string) => `sources/${taskId}.png`,
  base: (taskId: string) => `bases/${taskId}.png`,
  spritesheet: (taskId: string) => `spritesheets/${taskId}.webp`,
  zip: (petId: string) => `zips/${petId}.zip`,
} as const

export const POLL_INTERVAL = 3000 // 3s

// Share & points economy
export const POINTS_PER_SHARE = 10 // points awarded per unique pet share
export const REDEEM_COST = 100 // points required to redeem 1 bonus generation

export const PET_NAME_ADJECTIVES = [
  'blue', 'red', 'green', 'purple', 'golden', 'silver', 'crystal', 'shadow',
  'frost', 'ember', 'storm', 'lunar', 'solar', 'neon', 'cyber', 'mint',
]

export const PET_NAME_NOUNS = [
  'octo', 'fox', 'dragon', 'cat', 'wolf', 'owl', 'bot', 'ghost',
  'star', 'leaf', 'wave', 'spark', 'moon', 'sun', 'cloud', 'pixel',
]
