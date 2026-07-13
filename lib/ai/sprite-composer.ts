import sharp from 'sharp'
import { PassThrough } from 'stream'
import {
  ANIMATION_STATES,
  SPRITE_COLS,
  SPRITE_CELL_W,
  SPRITE_CELL_H,
  SPRITE_TOTAL_W,
  SPRITE_TOTAL_H,
} from '@/types/pet'

/**
 * Compose 9 state images into a single 1536x1872 spritesheet.
 * Each state image is resized to 192x208 and placed across 8 columns.
 * Columns beyond the animation frame count repeat the last frame.
 * A slight vertical bounce is applied to simulate motion.
 */
export async function composeSpritesheet(stateImages: Buffer[]): Promise<Buffer> {
  if (stateImages.length !== 9) {
    throw new Error(`Expected 9 state images, got ${stateImages.length}`)
  }

  const frameBuffers: sharp.OverlayOptions[] = []

  for (let row = 0; row < 9; row++) {
    const stateImage = stateImages[row]
    const state = ANIMATION_STATES[row]

    // Resize the state image to cell dimensions with transparent padding
    const resized = await sharp(stateImage)
      .resize(SPRITE_CELL_W, SPRITE_CELL_H, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toBuffer()

    for (let col = 0; col < SPRITE_COLS; col++) {
      const frame = await applyBounce(resized, col, state.frames)

      frameBuffers.push({
        input: frame,
        top: row * SPRITE_CELL_H,
        left: col * SPRITE_CELL_W,
      })
    }
  }

  // Compose all frames into the final spritesheet
  const spritesheet = await sharp({
    create: {
      width: SPRITE_TOTAL_W,
      height: SPRITE_TOTAL_H,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite(frameBuffers)
    .webp({ quality: 90, lossless: false })
    .toBuffer()

  return spritesheet
}

/**
 * Create a frame with a slight vertical bounce for animation effect.
 * Uses composite onto a transparent canvas at a shifted position.
 */
async function applyBounce(
  baseFrame: Buffer,
  col: number,
  totalFrames: number
): Promise<Buffer> {
  // Static frame for columns beyond animation length
  if (col >= totalFrames) {
    return baseFrame
  }

  // Calculate vertical bounce: -2 to +2 px sine wave
  const bounce = Math.round(Math.sin((col / totalFrames) * Math.PI * 2) * 2)

  if (bounce === 0) {
    return baseFrame
  }

  // Create a transparent canvas and composite the frame at a vertical offset
  const canvas = sharp({
    create: {
      width: SPRITE_CELL_W,
      height: SPRITE_CELL_H,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })

  const offsetTop = bounce > 0 ? bounce : 0

  return canvas
    .composite([{
      input: baseFrame,
      top: offsetTop,
      left: 0,
    }])
    .png()
    .toBuffer()
}

/**
 * Create a ZIP buffer containing pet.json and spritesheet.webp.
 */
export async function createZipBundle(
  petJson: object,
  spritesheetBuffer: Buffer
): Promise<Buffer> {
  const archiver = (await import('archiver')).default

  const chunks: Buffer[] = []
  const passThrough = new PassThrough()
  passThrough.on('data', (chunk) => chunks.push(chunk as Buffer))

  const archive = archiver('zip', { zlib: { level: 9 } })

  return new Promise<Buffer>((resolve, reject) => {
    archive.on('error', reject)
    passThrough.on('end', () => {
      resolve(Buffer.concat(chunks))
    })

    archive.pipe(passThrough)

    archive.append(JSON.stringify(petJson, null, 2), { name: 'pet.json' })
    archive.append(spritesheetBuffer, { name: 'spritesheet.webp' })

    archive.finalize()
  })
}
