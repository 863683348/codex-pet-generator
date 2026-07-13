'use client'

import { ANIMATION_STATES, SPRITE_CELL_W, SPRITE_CELL_H, SPRITE_COLS } from '@/types/pet'

interface SpritePlayerProps {
  spritesheetUrl: string
  row: number
  frames?: number
  label?: string
  play?: boolean
}

// Display at half scale for preview grid
const SCALE = 0.5
const DISPLAY_W = Math.round(SPRITE_CELL_W * SCALE)  // 96
const DISPLAY_H = Math.round(SPRITE_CELL_H * SCALE)   // 104
const BG_W = Math.round(SPRITE_CELL_W * SPRITE_COLS * SCALE) // 768
const BG_H = Math.round(SPRITE_CELL_H * 9 * SCALE)          // 936
const FRAME_MS = 120

export default function SpritePlayer({
  spritesheetUrl,
  row,
  frames = 6,
  label,
  play = true,
}: SpritePlayerProps) {
  const duration = (frames * FRAME_MS) / 1000
  const bgPosY = -row * DISPLAY_H

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="relative overflow-hidden rounded-md border border-border bg-bg-elevated"
        style={{ width: DISPLAY_W, height: DISPLAY_H }}
      >
        {/* Checkerboard background for transparency */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(45deg, #16162B 25%, transparent 25%),
              linear-gradient(-45deg, #16162B 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, #16162B 75%),
              linear-gradient(-45deg, transparent 75%, #16162B 75%)
            `,
            backgroundSize: '12px 12px',
            backgroundPosition: '0 0, 0 6px, 6px -6px, -6px 0',
          }}
        />
        <div
          className={`sprite-container absolute inset-0 ${play ? 'sprite-player' : ''}`}
          style={
            {
              backgroundImage: `url(${spritesheetUrl})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: `${BG_W}px ${BG_H}px`,
              backgroundPositionX: '0',
              backgroundPositionY: `${bgPosY}px`,
              imageRendering: 'pixelated',
              '--sprite-start-x': '0px',
              '--sprite-end-x': `-${BG_W}px`,
              '--sprite-frames': frames,
              '--sprite-duration': `${duration}s`,
            } as React.CSSProperties
          }
        />
      </div>
      {label && (
        <span className="font-pixel text-[8px] text-text-secondary">{label}</span>
      )}
    </div>
  )
}
