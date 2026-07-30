// PetGen Daily Blog Generator
// Usage: node scripts/generate-blog.mjs
// Reads BAILIAN_API_KEY from .env.local automatically.
// Outputs formatted TypeScript code to stdout (pipable to posts.ts).
// Set GEN_MODE=write to auto-write + git commit (may hit sandbox restrictions).

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import OpenAI from 'openai';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const POSTS_PATH = resolve(ROOT, 'lib/blog/posts.ts');
const TODAY = new Date().toISOString().slice(0, 10);

function loadEnv() {
  const envPath = resolve(ROOT, '.env.local');
  if (existsSync(envPath)) {
    for (const line of readFileSync(envPath, 'utf-8').split('\n')) {
      const t = line.trim();
      if (!t || t.startsWith('#')) continue;
      const sep = t.indexOf('=');
      if (sep === -1) continue;
      const key = t.slice(0, sep).trim();
      const val = t.slice(sep + 1).trim().replace(/^["']|["']$/g, '');
      if (!process.env[key]) process.env[key] = val;
    }
  }
}
loadEnv();

const BAILIAN_API_KEY = process.env.BAILIAN_API_KEY;
const MODEL = process.env.BAILIAN_MODEL || 'qwen-plus';
const POST_COUNT = parseInt(process.env.POST_COUNT || '5', 10);
const GEN_MODE = process.env.GEN_MODE || 'print';

if (!BAILIAN_API_KEY) {
  console.error('Missing BAILIAN_API_KEY');
  process.exit(1);
}

const client = new OpenAI({
  apiKey: BAILIAN_API_KEY,
  baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
});

function readExistingSlugs() {
  const c = readFileSync(POSTS_PATH, 'utf-8');
  const m = c.matchAll(/slug:\s+'([^']+)'/g);
  return new Set([...m].map((x) => x[1]));
}

function buildPrompt(existingSlugs) {
  return (
    `You are an SEO content writer for PetGen (codexpetgenerator.com), ` +
    `an AI tool that turns photos into pixel-art animated pets for OpenAI Codex.\n\n` +
    `EXISTING SLUGS (DO NOT REPEAT): ${[...existingSlugs].join(', ')}\n\n` +
    `Topics already covered: installation guide, photo-to-pixel tutorial, ` +
    `spritesheet explanation, AI pet generator comparison, why pixel art, ` +
    `how PetGen works, spritesheet dimensions, animation states, troubleshooting.\n\n` +
    `Generate ${POST_COUNT} unique blog posts targeting LONG-TAIL SEO keywords.\n` +
    `Ideas: codex pet custom color, codex pet gift ideas, codex pet for productivity, ` +
    `make codex pet from logo, codex pet file structure, codex pet share with friends, ` +
    `pixel art pet tips, best photos for pet generator, codex multiple pets, ` +
    `codex pet size, share codex pet online, codex pet community gallery, ` +
    `codex pet dark theme, codex pet fun uses, codex pet for teams, ` +
    `pet.json explained, spritesheet.webp optimization.\n\n` +
    `OUTPUT: valid JSON array only.\n` +
    `[\n  {\n    "slug": "url-friendly-slug",\n` +
    `    "title": "SEO Title with Keywords",\n` +
    `    "description": "Meta description 120-160 chars with keywords",\n` +
    `    "keywords": ["kw1", "kw2"],\n` +
    `    "sections": [\n` +
    `      { "heading": "Section Title", "paragraphs": ["p1", "p2"] },\n` +
    `      { "heading": "Another", "list": ["i1", "i2"] }\n` +
    `    ]\n  }\n]\n\n` +
    `RULES: 5-8 sections per post, 1000-2000 words total, 5-10 keywords, ` +
    `description 120-160 chars. Give real advice, not generic fluff. ` +
    `Tone: helpful and natural. Date: ${TODAY}. Author: PetGen.`
  );
}

async function generatePosts(existingSlugs) {
  console.error(`Generating ${POST_COUNT} posts with ${MODEL}...`);
  const r = await client.chat.completions.create({
    model: MODEL,
    messages: [
      { role: 'system', content: buildPrompt(existingSlugs) },
      { role: 'user', content: `Generate ${POST_COUNT} unique blog posts. Return ONLY valid JSON.` },
    ],
    temperature: 0.8,
    response_format: { type: 'json_object' },
  });
  const raw = r.choices[0]?.message?.content;
  if (!raw) throw new Error('Empty AI response');
  let parsed;
  try { parsed = JSON.parse(raw); }
  catch {
    const m = raw.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (m) parsed = JSON.parse(m[1]);
    else throw new Error('Failed to parse AI response');
  }
  const posts = Array.isArray(parsed) ? parsed : parsed.posts || [];
  if (posts.length === 0) throw new Error('Empty posts array');
  console.error(`Parsed ${posts.length} posts`);
  return posts;
}

function slugify(t) {
  return t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 80);
}

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}

function formatPost(p, slug) {
  const secs = p.sections.map((s) => {
    let b = `      {\n        heading: '${esc(s.heading)}',`;
    if (s.paragraphs?.length) {
      b += `\n        paragraphs: [\n${s.paragraphs.map((x) => `          '${esc(x)}'`).join(',\n')}\n        ],`;
    }
    if (s.list?.length) {
      b += `\n        list: [\n${s.list.map((x) => `          '${esc(x)}'`).join(',\n')}\n        ],`;
    }
    return b + '\n      }';
  }).join(',\n');
  const kws = p.keywords.map((k) => `'${esc(k)}'`).join(', ');
  return (
    `  {\n` +
    `    slug: '${slug}',\n` +
    `    title: '${esc(p.title)}',\n` +
    `    description:\n      '${esc(p.description)}',\n` +
    `    date: '${TODAY}',\n` +
    `    author: 'PetGen',\n` +
    `    keywords: [${kws}],\n` +
    `    sections: [\n${secs}\n    ],\n` +
    `  }`
  );
}

async function main() {
  console.error('=== PetGen Blog Generator ===');
  console.error(`Model: ${MODEL}, Count: ${POST_COUNT}, Mode: ${GEN_MODE}, Date: ${TODAY}`);

  const existing = readExistingSlugs();
  console.error(`Existing posts: ${existing.size}`);

  const newPosts = await generatePosts(existing);
  const slugs = new Set(existing);
  const formatted = [];
  for (const p of newPosts) {
    let slug = slugify(p.title || p.slug);
    let attempt = 0;
    while (slugs.has(slug) || formatted.some((f) => f.slug === slug)) {
      attempt++;
      slug = (slugify(p.title || p.slug) + '-' + attempt).slice(0, 80);
    }
    formatted.push({ slug, code: formatPost(p, slug) });
  }

  const joined = formatted.map((f) => f.code).join(',\n');

  if (GEN_MODE === 'write') {
    const content = readFileSync(POSTS_PATH, 'utf-8');
    const lastBracket = content.lastIndexOf(']');
    const header = content.slice(0, lastBracket).trimEnd();
    writeFileSync(POSTS_PATH, `${header},\n${joined}\n]`, 'utf-8');
    console.error(`Wrote ${formatted.length} posts`);
    try {
      const { execSync } = await import('node:child_process');
      execSync('git add lib/blog/posts.ts', { cwd: ROOT, stdio: 'pipe' });
      execSync(`git commit -m "blog: auto-generate ${formatted.length} posts (${TODAY})"`, { cwd: ROOT, stdio: 'pipe' });
      execSync('git push', { cwd: ROOT, stdio: 'pipe' });
      console.error('Committed & pushed');
    } catch (e) {
      console.error('Git warning:', e.message.slice(0, 200));
    }
  } else {
    // Print formatted code to stdout for external capture
    console.log(joined);
  }

  console.error('\nGenerated slugs:');
  formatted.forEach((f) => console.error(`  /blog/${f.slug}`));
  console.error('Done!');
}

main().catch((e) => { console.error('Fatal:', e.message); process.exit(1); });
