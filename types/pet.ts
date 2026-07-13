export type PetStatus =
  | 'pending'
  | 'processing'
  | 'awaiting_approval'
  | 'generating_animation'
  | 'completed'
  | 'failed'

export type PetStyle = 'pixel' | 'chibi' | 'realistic'

export interface Pet {
  id: string
  pet_id: string | null
  status: PetStatus
  style: PetStyle
  email: string | null
  source_image_path: string | null
  source_image_url: string | null
  base_image_path: string | null
  base_image_url: string | null
  base_approved: boolean
  spritesheet_path: string | null
  spritesheet_url: string | null
  pet_json: PetJson | null
  zip_path: string | null
  zip_url: string | null
  display_name: string | null
  description: string | null
  error: string | null
  retry_count: number
  created_at: string
  updated_at: string
  completed_at: string | null
}

export interface PetJson {
  id: string
  displayName: string
  description: string
  spritesheetPath: string
}

export interface PetTask {
  taskId: string
  status: PetStatus
  progress: number
  baseImageUrl: string | null
  spritesheetUrl: string | null
  zipUrl: string | null
  petJson: PetJson | null
  error: string | null
  errorCode?: string
}

export interface AnimationState {
  row: number
  key: string
  label: string
  frames: number
}

export const ANIMATION_STATES: AnimationState[] = [
  { row: 0, key: 'idle',           label: 'Idle',      frames: 6 },
  { row: 1, key: 'running-right',  label: 'Run Right', frames: 8 },
  { row: 2, key: 'running-left',   label: 'Run Left',  frames: 8 },
  { row: 3, key: 'waving',         label: 'Waving',    frames: 4 },
  { row: 4, key: 'jumping',        label: 'Jumping',   frames: 5 },
  { row: 5, key: 'failed',         label: 'Failed',    frames: 8 },
  { row: 6, key: 'waiting',        label: 'Waiting',   frames: 6 },
  { row: 7, key: 'running',        label: 'Running',   frames: 6 },
  { row: 8, key: 'review',         label: 'Review',    frames: 6 },
]

export const SPRITE_COLS = 8
export const SPRITE_ROWS = 9
export const SPRITE_CELL_W = 192
export const SPRITE_CELL_H = 208
export const SPRITE_TOTAL_W = SPRITE_COLS * SPRITE_CELL_W  // 1536
export const SPRITE_TOTAL_H = SPRITE_ROWS * SPRITE_CELL_H  // 1872

export const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
export const ACCEPTED_FORMATS = ['image/jpeg', 'image/png', 'image/webp']

export const PET_STATUS_LABELS: Record<PetStatus, string> = {
  pending: 'Pending',
  processing: 'Generating Base',
  awaiting_approval: 'Awaiting Approval',
  generating_animation: 'Generating Animation',
  completed: 'Completed',
  failed: 'Failed',
}
