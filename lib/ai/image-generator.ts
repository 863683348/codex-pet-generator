import OpenAI from 'openai'
import { ANIMATION_STATES } from '@/types/pet'

// ---------------------------------------------------------------------------
// Image generation provider abstraction.
//
// Two providers are supported:
//  - "bailian" : Alibaba Cloud Model Studio (鐧剧偧) Qwen-Image, via the
//                "鍗冮棶-鍥惧儚缂栬緫" synchronous multimodal endpoint.
//                Default when BAILIAN_API_KEY is present.
//  - "openai"  : OpenAI gpt-image-1 images.edit (img2img). Fallback.
//
// Selection: IMAGE_PROVIDER forces a choice; otherwise Bailian wins if its
// key is set, then OpenAI.
// ---------------------------------------------------------------------------

const OPENAI_MODEL = process.env.OPENAI_IMAGE_MODEL || 'gpt-image-1'
const BAILIAN_BASE_URL =
  process.env.BAILIAN_BASE_URL ||
  'https://dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation'
const BAILIAN_MODEL = process.env.BAILIAN_IMAGE_MODEL || 'qwen-image-2.0'

type Provider = 'openai' | 'bailian'

/** True when at least one image-generation provider has a key configured. */
export function hasImageGenConfig(): boolean {
  return Boolean(process.env.BAILIAN_API_KEY || process.env.OPENAI_API_KEY)
}

function resolveProvider(): Provider {
  const forced = process.env.IMAGE_PROVIDER
  if (forced === 'openai' || forced === 'bailian') return forced
  if (process.env.BAILIAN_API_KEY) return 'bailian'
  if (process.env.OPENAI_API_KEY) return 'openai'
  throw new Error('No image generation provider configured (set BAILIAN_API_KEY or OPENAI_API_KEY)')
}

// ----------------------------- OpenAI provider -----------------------------

let openaiClient: OpenAI | null = null
function getOpenAI(): OpenAI {
  if (openaiClient) return openaiClient
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) throw new Error('Missing OPENAI_API_KEY')
  openaiClient = new OpenAI({ apiKey })
  return openaiClient
}

function bufferToFile(buffer: Buffer, filename = 'image.png'): File {
  return new File([new Uint8Array(buffer)], filename, { type: 'image/png' })
}

const BASE_PROMPT = `Transform this image into a pixel art character sprite. The character should be centered, facing forward, on a transparent background. Pixel art style, 16-bit era aesthetic, clean outlines, limited color palette. The character should fit within a 192x208 frame.`

async function openaiGenerateBase(source: Buffer): Promise<Buffer> {
  const openai = getOpenAI()
  const result = await openai.images.edit({
    model: OPENAI_MODEL,
    image: bufferToFile(source, 'source.png'),
    prompt: BASE_PROMPT,
    size: '1024x1024',
    n: 1,
  })
  const b64 = result.data?.[0]?.b64_json
  if (!b64) throw new Error('No b64_json returned from OpenAI')
  return Buffer.from(b64, 'base64')
}

async function openaiGenerateFrame(base: Buffer, prompt: string): Promise<Buffer> {
  const openai = getOpenAI()
  const result = await openai.images.edit({
    model: OPENAI_MODEL,
    image: bufferToFile(base, 'base.png'),
    prompt,
    size: '1024x1024',
    n: 1,
  })
  const b64 = result.data?.[0]?.b64_json
  if (!b64) throw new Error('No b64_json returned from OpenAI')
  return Buffer.from(b64, 'base64')
}

// ----------------------------- Bailian provider ----------------------------

async function bailianEdit(source: Buffer, prompt: string): Promise<Buffer> {
  const key = process.env.BAILIAN_API_KEY
  if (!key) throw new Error('Missing BAILIAN_API_KEY')

  const body = {
    model: BAILIAN_MODEL,
    input: {
      messages: [
        {
          role: 'user',
          content: [
            { image: `${source.toString('base64')}` },
            { text: prompt },
          ],
        },
      ],
    },
    parameters: { size: '1024*1024', n: 1, seed: 0, prompt_extend: false, watermark: false },
  }

  const res = await fetch(BAILIAN_BASE_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const txt = await res.text().catch(() => '')
    throw new Error(`Bailian API ${res.status}: ${txt.slice(0, 600)}`)
  }

  const json = await res.json()

  // Synchronous success: output.choices[0].message.content[0].image -> URL
  const imageUrl = json?.output?.choices?.[0]?.message?.content?.[0]?.image
  if (imageUrl) return await bailianFetchImage(imageUrl)

  // Async fallback: poll task until SUCCEEDED
  const taskId = json?.output?.task_id || json?.task_id
  if (taskId) return await bailianPollTask(taskId)

  throw new Error('Bailian returned no image: ' + JSON.stringify(json).slice(0, 600))
}

async function bailianFetchImage(url: string): Promise<Buffer> {
  const r = await fetch(url)
  if (!r.ok) throw new Error(`Bailian result fetch failed: ${r.status}`)
  return Buffer.from(await r.arrayBuffer())
}

async function bailianPollTask(taskId: string): Promise<Buffer> {
  const key = process.env.BAILIAN_API_KEY!
  const tasksBase = new URL(BAILIAN_BASE_URL).origin + '/api/v1/tasks'
  for (let i = 0; i < 60; i++) {
    const r = await fetch(`${tasksBase}/${taskId}`, {
      headers: { Authorization: `Bearer ${key}` },
    })
    if (!r.ok) throw new Error(`Bailian task poll ${r.status}`)
    const j = await r.json()
    const status = j?.output?.task_status
    if (status === 'SUCCEEDED') {
      const url = j?.output?.results?.[0]?.url || j?.output?.results?.[0]?.image
      if (!url) throw new Error('Bailian task succeeded but returned no url')
      return await bailianFetchImage(url)
    }
    if (status === 'FAILED') throw new Error('Bailian task failed: ' + JSON.stringify(j).slice(0, 400))
    await new Promise((res) => setTimeout(res, 5000))
  }
  throw new Error('Bailian task timed out after polling')
}

// ------------------------------- Public API --------------------------------

export async function generateBaseImage(sourceImageBuffer: Buffer): Promise<Buffer> {
  if (resolveProvider() === 'bailian') {
    return bailianEdit(sourceImageBuffer, BASE_PROMPT)
  }
  return openaiGenerateBase(sourceImageBuffer)
}

/**
 * Generate animation frames for all 9 states.
 * Returns an array of Buffers, one per state (will be duplicated to fill 8 columns).
 */
export async function generateAnimationFrames(
  baseImageBuffer: Buffer,
  characterDescription: string
): Promise<Buffer[]> {
  const statePrompts: Record<string, string> = {
    idle: `Pixel art character: ${characterDescription}. Idle breathing pose, facing forward, slight body movement. Transparent background. 16-bit pixel art style.`,
    'running-right': `Pixel art character: ${characterDescription}. Running to the right, mid-stride pose. Transparent background. 16-bit pixel art style.`,
    'running-left': `Pixel art character: ${characterDescription}. Running to the left, mid-stride pose. Transparent background. 16-bit pixel art style.`,
    waving: `Pixel art character: ${characterDescription}. Waving hello, one arm raised. Transparent background. 16-bit pixel art style.`,
    jumping: `Pixel art character: ${characterDescription}. Mid-jump pose, arms up, feet off ground. Transparent background. 16-bit pixel art style.`,
    failed: `Pixel art character: ${characterDescription}. Sad/dejected pose, head down, X mark or sweat drop. Transparent background. 16-bit pixel art style.`,
    waiting: `Pixel art character: ${characterDescription}. Waiting pose, looking at watch, impatient. Transparent background. 16-bit pixel art style.`,
    running: `Pixel art character: ${characterDescription}. Running forward, dynamic pose. Transparent background. 16-bit pixel art style.`,
    review: `Pixel art character: ${characterDescription}. Checking/reviewing pose, holding a clipboard or magnifying glass. Transparent background. 16-bit pixel art style.`,
  }

  const frames: Buffer[] = []
  for (const state of ANIMATION_STATES) {
    const prompt = statePrompts[state.key] || statePrompts.idle
    if (resolveProvider() === 'bailian') {
      frames.push(await bailianEdit(baseImageBuffer, prompt))
    } else {
      frames.push(await openaiGenerateFrame(baseImageBuffer, prompt))
    }
  }
  return frames
}

/**
 * Generate a character description for use in animation prompts.
 * In a production version, this would use vision API to describe the character.
 * For MVP, we return a generic description.
 */
export function generateCharacterDescription(): string {
  return 'a cute pixel art character with consistent colors and proportions'
}

