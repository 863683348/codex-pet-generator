/**
 * seed-pets.mjs — 批量生成 30 只宠物并插入 Supabase
 *
 * 流程：
 * 1. 用 BAILIAN_API_KEY (qwen-image-2.0) 生成宠物 base 图
 * 2. 本地算法去背（sharp）
 * 3. 上传到 Supabase Storage (pet-assets/bases/)
 * 4. INSERT pets 表
 * 5. INSERT pet_tag_map 表
 *
 * 用法：
 *   node scripts/seed-pets.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, unlinkSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

// 配置
const BAILIAN_API_KEY = process.env.BAILIAN_API_KEY
const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!BAILIAN_API_KEY) {
  console.error('❌ 缺少 BAILIAN_API_KEY')
  process.exit(1)
}
if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('❌ 缺少 SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

// 30 只宠物定义
const PETS = [
  // Cats (5)
  { name: 'Luna', slug: 'luna', tags: ['cat'], prompt: 'Pixel art cute cat, white and gray, glowing green eyes, sitting pose, 16-bit style, game sprite' },
  { name: 'Shadow', slug: 'shadow', tags: ['cat'], prompt: 'Pixel art black cat, glowing yellow eyes, mysterious, 16-bit style, game sprite' },
  { name: 'Mochi', slug: 'mochi', tags: ['cat'], prompt: 'Pixel art chubby orange cat, happy expression, round face, 16-bit style, game sprite' },
  { name: 'Pixel', slug: 'pixel', tags: ['cat'], prompt: 'Pixel art blue cat with digital circuit patterns, neon glow, 16-bit style, game sprite' },
  { name: 'Whiskers', slug: 'whiskers', tags: ['cat'], prompt: 'Pixel art fluffy white cat, pink ears, cute expression, 16-bit style, game sprite' },
  // Dogs (5)
  { name: 'Rex', slug: 'rex', tags: ['dog'], prompt: 'Pixel art brown dog, brave expression, adventure style, 16-bit, game sprite' },
  { name: 'Buddy', slug: 'buddy', tags: ['dog'], prompt: 'Pixel art golden retriever, friendly smile, wagging tail, 16-bit style, game sprite' },
  { name: 'Fang', slug: 'fang', tags: ['dog'], prompt: 'Pixel art gray wolf-dog, sharp teeth, fierce look, 16-bit style, game sprite' },
  { name: 'Sparky', slug: 'sparky', tags: ['dog'], prompt: 'Pixel art yellow dog with electric sparks, energetic, 16-bit style, game sprite' },
  { name: 'Nibbles', slug: 'nibbles', tags: ['dog'], prompt: 'Pixel art tiny puppy, big eyes, cute and shy, 16-bit style, game sprite' },
  // Fantasy (6)
  { name: 'Dragon', slug: 'dragon', tags: ['fantasy'], prompt: 'Pixel art baby dragon, green scales, small wings, breathing fire, 16-bit style, game sprite' },
  { name: 'Phoenix', slug: 'phoenix', tags: ['fantasy'], prompt: 'Pixel art phoenix bird, red and orange flames, majestic, 16-bit style, game sprite' },
  { name: 'Unicorn', slug: 'unicorn', tags: ['fantasy'], prompt: 'Pixel art white unicorn, rainbow mane, golden horn, magical, 16-bit style, game sprite' },
  { name: 'Griffin', slug: 'griffin', tags: ['fantasy'], prompt: 'Pixel art griffin, eagle head lion body, golden feathers, 16-bit style, game sprite' },
  { name: 'Hydra', slug: 'hydra', tags: ['fantasy'], prompt: 'Pixel art three-headed hydra, green scales, mystical, 16-bit style, game sprite' },
  { name: 'Spirit', slug: 'spirit', tags: ['fantasy'], prompt: 'Pixel art ghost spirit, blue translucent, friendly, floating, 16-bit style, game sprite' },
  // Robots (5)
  { name: 'Bolt', slug: 'bolt', tags: ['robot'], prompt: 'Pixel art robot cat, metallic blue, glowing eyes, tech style, 16-bit, game sprite' },
  { name: 'Echo', slug: 'echo', tags: ['robot'], prompt: 'Pixel art robot dog, silver chrome, digital screen face, 16-bit style, game sprite' },
  { name: 'Neo', slug: 'neo', tags: ['robot'], prompt: 'Pixel art futuristic robot, neon green circuits, cyberpunk, 16-bit style, game sprite' },
  { name: 'Glitch', slug: 'glitch', tags: ['robot'], prompt: 'Pixel art glitch robot, colorful static effects, retro digital, 16-bit style, game sprite' },
  { name: 'Circuit', slug: 'circuit', tags: ['robot'], prompt: 'Pixel art circuit board pet, green PCB patterns, electronic, 16-bit style, game sprite' },
  // Anime (4)
  { name: 'Sakura', slug: 'sakura', tags: ['anime'], prompt: 'Pixel art anime girl cat, pink hair, cherry blossom petals, cute, 16-bit style, game sprite' },
  { name: 'Haru', slug: 'haru', tags: ['anime'], prompt: 'Pixel art anime boy dog, brown hair, summer festival, 16-bit style, game sprite' },
  { name: 'Yuki', slug: 'yuki', tags: ['anime'], prompt: 'Pixel art anime spirit, white hair, winter theme, snowflakes, 16-bit style, game sprite' },
  { name: 'Kenji', slug: 'kenji', tags: ['anime'], prompt: 'Pixel art anime samurai, red armor, katana, traditional Japanese, 16-bit style, game sprite' },
  // Game (3)
  { name: 'Link', slug: 'link', tags: ['game'], prompt: 'Pixel art green elf warrior, pointed ears, adventure hat, hero style, 16-bit, game sprite' },
  { name: 'Mario', slug: 'mario', tags: ['game'], prompt: 'Pixel art plumber, red hat mustache, jumping pose, classic 8-bit style, game sprite' },
  { name: 'Sephiroth', slug: 'sephiroth', tags: ['game'], prompt: 'Pixel art long silver hair, black coat, sword on back, dark fantasy, 16-bit style, game sprite' },
  // Original (3)
  { name: 'Nebula', slug: 'nebula', tags: ['original'], prompt: 'Pixel art cosmic creature, purple and blue nebula body, stars, space, 16-bit style, game sprite' },
  { name: 'Quasar', slug: 'quasar', tags: ['original'], prompt: 'Pixel art energy being, bright white and gold, radiating light, 16-bit style, game sprite' },
  { name: 'Cosmos', slug: 'cosmos', tags: ['original'], prompt: 'Pixel art galaxy pet, swirling colors, planetary rings, mystical, 16-bit style, game sprite' },
]

// ========== 工具函数 ==========

async function bailianGenerate(prompt, size = '512*512') {
  const res = await fetch('https://dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${BAILIAN_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'qwen-image-2.0',
      input: {
        messages: [
          {
            role: 'user',
            content: [
              { text: prompt + ', transparent background, isolated, no background' },
            ],
          },
        ],
      },
      parameters: {
        size: size,
        n: 1,
        watermark: false,
      }
    })
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Bailian API ${res.status}: ${text}`)
  }

  const data = await res.json()
  // Response: output.choices[0].message.content[0].image
  const imageUrl = data?.output?.choices?.[0]?.message?.content?.[0]?.image
  if (!imageUrl) {
    console.error('Response:', JSON.stringify(data, null, 2))
    throw new Error('No image URL in response')
  }
  return { url: imageUrl }
}

async function downloadImage(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed to download: ${url}`)
  return Buffer.from(await res.arrayBuffer())
}

// 使用 sharp 去背（内存处理，不写临时文件）
async function makeTransparent(buffer) {
  const sharp = (await import('sharp')).default

  // 解码为 RGBA 像素
  const { data: pixels, info } = await sharp(buffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const { width, height } = info

  // 简单去背：将所有接近白色的像素变透明
  const threshold = 240
  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i], g = pixels[i + 1], b = pixels[i + 2]
    if (r > threshold && g > threshold && b > threshold) {
      pixels[i + 3] = 0
    }
  }

  // 直接用 raw 像素编码为 PNG（不经过文件）
  const result = await sharp(pixels, {
    raw: { width, height, channels: 4 }
  })
    .png()
    .toBuffer()
  return result
}

// 上传到 Supabase Storage
async function uploadToStorage(buffer, key) {
  const res = await fetch(`${SUPABASE_URL}/storage/v1/object/pet-assets/${key}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'apikey': SUPABASE_KEY,
      'Content-Type': 'image/png',
    },
    body: buffer,
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Upload failed ${res.status}: ${text}`)
  }

  return `https://pfvzmkjmkwimvwosvnrs.supabase.co/storage/v1/object/public/pet-assets/${key}`
}

// 插入 pets 表
async function insertPet(data) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/pets?select=id`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'apikey': SUPABASE_KEY,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation',
    },
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Insert failed ${res.status}: ${text}`)
  }

  const result = await res.json()
  return result[0]
}

// 插入 pet_tag_map
async function insertPetTags(petId, tags) {
  const operations = []

  for (const tagSlug of tags) {
    // 先获取 tag ID
    const tagRes = await fetch(`${SUPABASE_URL}/rest/v1/pet_tags?slug=eq.${tagSlug}&select=id`, {
      headers: {
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'apikey': SUPABASE_KEY,
      }
    })
    const tags = await tagRes.json()
    if (tags.length === 0) {
      console.error(`Tag ${tagSlug} not found!`)
      continue
    }
    operations.push({ pet_id: petId, tag_id: tags[0].id })
  }

  if (operations.length === 0) return

  const res = await fetch(`${SUPABASE_URL}/rest/v1/pet_tag_map`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'apikey': SUPABASE_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(operations),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Tag map insert failed ${res.status}: ${text}`)
  }

  console.log(`  ✓ Inserted ${operations.length} tags`)
}

// ========== 主流程 ==========

async function main() {
  console.log(`🚀 开始导入 ${PETS.length} 只宠物\n`)

  const results = []

  for (let i = 0; i < PETS.length; i++) {
    const pet = PETS[i]
    console.log(`[${i + 1}/${PETS.length}] ${pet.name} (${pet.tags.join(', ')})`)

    try {
      // 1. 生成图片
      console.log('  🎨 生成图片...')
      const genResult = await bailianGenerate(pet.prompt, '512*512')

      // 2. 下载图片
      console.log('  📥 下载图片...')
      const imageUrl = genResult.url
      if (!imageUrl) throw new Error('No image URL in response')

      const imageBuffer = await downloadImage(imageUrl)
      console.log(`  ✅ 图片大小: ${(imageBuffer.length / 1024).toFixed(1)}KB`)

      // 3. 去背
      console.log('  🔧 去背处理...')
      const transparentBuffer = await makeTransparent(imageBuffer)
      console.log(`  ✅ 去背后: ${(transparentBuffer.length / 1024).toFixed(1)}KB`)

      // 4. 上传
      const key = `bases/${pet.slug}.png`
      console.log('  ☁️  上传到 Storage...')
      const publicUrl = await uploadToStorage(transparentBuffer, key)
      console.log(`  ✅ URL: ${publicUrl}`)

      // 5. 插入 pets 表（使用正确的列名：display_name, pet_id）
      console.log('  💾 插入 pets 表...')
      const insertedPet = await insertPet({
        pet_id: pet.slug,  // 用 slug 作为 pet_id
        display_name: pet.name,
        style: pet.tags[0] || 'pixel',
        status: 'completed',
        base_image_url: publicUrl,
        base_approved: true,
        is_public: true,
        featured: false,
      })
      console.log(`  ✅ Pet ID: ${insertedPet.id}`)

      // 6. 插入 pet_tag_map
      await insertPetTags(insertedPet.id, pet.tags)

      results.push({ name: pet.name, id: insertedPet.id, status: 'success' })

    } catch (err) {
      console.error(`  ❌ 失败: ${err.message}`)
      results.push({ name: pet.name, status: 'error', error: err.message })
    }

    // 节流：每只宠物间隔 1 秒
    if (i < PETS.length - 1) {
      await new Promise(r => setTimeout(r, 1000))
    }
  }

  // 汇总
  console.log('\n========== 汇总 ==========')
  const success = results.filter(r => r.status === 'success')
  const failed = results.filter(r => r.status === 'error')
  console.log(`✅ 成功: ${success.length}`)
  console.log(`❌ 失败: ${failed.length}`)

  if (failed.length > 0) {
    console.log('\n失败列表:')
    for (const f of failed) {
      console.log(`  - ${f.name}: ${f.error}`)
    }
  }
}

main().catch(err => {
  console.error('💥 脚本执行失败:', err)
  process.exit(1)
})
