# Codex Pet Generator

Turn any photo into a custom animated pixel pet for OpenAI Codex desktop app.

## Quick Start

### 1. Environment Setup

Copy `.env.example` to `.env.local` and fill in your keys:

```bash
cp .env.example .env.local
```

Required env vars:
- `NEXT_PUBLIC_SUPABASE_URL` — Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase anon key
- `SUPABASE_SERVICE_ROLE_KEY` — Supabase service role key (server-only)
- `BAILIAN_API_KEY` — BaiLian (Aliyun DashScope) API key
- `BAILIAN_IMAGE_MODEL` — Image model (default: `qwen-image-2.0`)
- `BAILIAN_BASE_URL` — DashScope multimodal-generation endpoint
- `IMAGE_PROVIDER` — `bailian` (default) or `openai`
- `OPENAI_API_KEY` — OpenAI key (only needed when `IMAGE_PROVIDER=openai`)
- `CREEM_API_KEY` / `CREEM_PRO_PRICE_ID` / `CREEM_UNLIMITED_PRICE_ID` / `CREEM_WEBHOOK_SECRET` — Creem billing (optional, for the pricing page)
- `NEXT_PUBLIC_APP_URL` — public base URL (used for auth callbacks + Creem redirects)

### 2. Database Setup

Run `supabase/migrations/001_init.sql` in your Supabase SQL Editor.

Create a storage bucket named `pet-assets` (public read).

### 3. Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

> No code refactoring needed — `sharp`, `archiver`, and Node.js `stream` all work on Vercel's **Node.js runtime** (not Edge). The only constraint is the long-running `approve` step (9 frames + spritesheet + ZIP, ~2–5 min).

### 1. Import from GitHub

1. Go to [vercel.com](https://vercel.com) and sign in with **GitHub** (recommended over email signup).
2. **Add New → Project** → select the `codex-pet-generator` repo (authorize Vercel to access GitHub on first use).
3. Framework is auto-detected as Next.js. Click **Deploy**.

The repo already ships `vercel.json` with per-route `maxDuration` / `memory` tuned for this app:

| Route | Memory | maxDuration |
|-------|--------|-------------|
| `api/pets/generate` | 1024 MB | 120 s |
| `api/pets/[taskId]/approve` | 2048 MB | 300 s |
| `api/pets/[taskId]/download` | 1024 MB | 60 s |
| `api/creem/checkout` | 512 MB | 30 s |
| `api/creem/webhook` | 512 MB | 30 s |

`package.json` also pins `engines.node = 22.x`, so Vercel builds on Node 22.

### 2. Environment Variables

After the first deploy, go to **Settings → Environment Variables** and add every variable from your local `.env.local` (the file is gitignored, so secrets never hit the repo). Paste them in **Raw Editor**:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_xxx
SUPABASE_SERVICE_ROLE_KEY=sb_secret_xxx
OPENAI_API_KEY=
OPENAI_IMAGE_MODEL=gpt-image-1
BAILIAN_API_KEY=sk-xxx
BAILIAN_IMAGE_MODEL=qwen-image-2.0
BAILIAN_BASE_URL=https://dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation
IMAGE_PROVIDER=bailian
NEXT_PUBLIC_APP_URL=https://codexpetgenerator.com
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
CREEM_API_KEY=creem_test_xxx
CREEM_PRO_PRICE_ID=prod_xxx
CREEM_UNLIMITED_PRICE_ID=prod_xxx
CREEM_WEBHOOK_SECRET=whsec_xxx
```

Notes:
- `IMAGE_PROVIDER=bailian` activates the Qwen-Image path (set to `openai` to use OpenAI instead).
- `NEXT_PUBLIC_APP_URL` must be your real production domain (https://codexpetgenerator.com) — it's used for Creem success/cancel redirects and Supabase auth callbacks. Set it, then redeploy.
- `OPENAI_API_KEY` can stay empty when using Bailian.

### 3. Redeploy & Verify

1. Save the variables, then **Redeploy** (from the Deployments tab or push a commit).
2. Once live, open the production domain (https://codexpetgenerator.com) and walk the flow: upload → generate base → approve → wait for frames → download ZIP.

### ⚠️ Hobby plan timeout

Vercel's **Hobby plan caps functions at 60 s**. The `approve` route is configured for 300 s, but Hobby will still cut it off — the base generation, approval UI, and ZIP download all work, but the 9-frame composition will fail on Hobby. To run the full pipeline you need the **Pro plan** ($20/mo), which honors the 300 s limit.

### Creem "Payment system not initialized"

If the Creem checkout page shows *"Payment system not initialized"*, that's a **seller-side** issue in your [Creem dashboard](https://dashboard.creem.io) — finish onboarding, connect a payment processor (Stripe / bank), and make the product `active`. It is unrelated to Vercel and will persist on any host until the dashboard is set up.

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 16 (App Router) |
| Database | Supabase (PostgreSQL + Storage) |
| Styling | TailwindCSS 3 |
| AI | BaiLian / Qwen-Image (default) or OpenAI Images API |
| Image Processing | Sharp |
| ZIP | Archiver |
| Icons | Lucide React |

## Project Structure

```
app/
├── api/pets/
│   ├── generate/route.ts          POST — upload image, create task
│   └── [taskId]/
│       ├── route.ts               GET — query task status
│       ├── approve/route.ts       POST — approve/reject base
│       └── download/route.ts      GET — download ZIP
├── globals.css
├── layout.tsx
└── page.tsx                       Main generator page

components/
├── layout/                        Navbar, Footer
├── pet/                           UploadDropzone, BasePreview, AnimationPreview, etc.
└── ui/                            CodeBlock, ProgressRing

lib/
├── ai/                            image-generator, sprite-composer, pet-json-builder
├── storage/                       Supabase Storage operations
├── supabase/                      Server & browser clients
└── utils/                         constants, validation

types/pet.ts                       TypeScript types + constants
supabase/migrations/001_init.sql   DB schema
```

## How It Works

1. User uploads an image
2. AI generates a pixel art base character (~90s)
3. User approves or regenerates the base
4. AI generates 9 animation state frames (~2-5 min)
5. Frames are composed into a 1536x1872 spritesheet (8 cols x 9 rows)
6. spritesheet + pet.json are packed into a ZIP
7. User downloads and installs to `~/.codex/pets/`

## Spritesheet Spec

- Total: 1536 x 1872 px
- Grid: 8 columns x 9 rows
- Cell: 192 x 208 px
- Format: WebP, RGBA, transparent background

| Row | State | Frames |
|-----|-------|--------|
| 0 | idle | 6 |
| 1 | running-right | 8 |
| 2 | running-left | 8 |
| 3 | waving | 4 |
| 4 | jumping | 5 |
| 5 | failed | 8 |
| 6 | waiting | 6 |
| 7 | running | 6 |
| 8 | review | 6 |

## MVP Scope

This is the Phase 1 MVP. See `../codex-pet-mvp-and-roadmap.md` for the full roadmap.

### Included
- Image upload (JPG/PNG/WebP, max 10MB)
- AI base generation with approval flow
- AI animation generation (9 states)
- Spritesheet composition + ZIP packaging
- Animation preview (CSS sprite)
- Install command display (macOS/Windows)
- Polling-based status updates (3s interval)
- Email/password + Google auth (`/signin`, `/signup`, `/auth/callback`)
- Creem billing integration (Pro / Unlimited plans)
- Dark cyberpunk pixel theme
- Responsive layout

### Excluded (planned for later phases)
- Supabase Realtime (using polling instead)
- Email notifications
- Community gallery
- Multiple art styles
- Quality auto-validation
