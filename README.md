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
- `OPENAI_API_KEY` — OpenAI API key
- `OPENAI_IMAGE_MODEL` — Image model (default: `gpt-image-1`)

### 2. Database Setup

Run `supabase/migrations/001_init.sql` in your Supabase SQL Editor.

Create a storage bucket named `pet-assets` (public read).

### 3. Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 16 (App Router) |
| Database | Supabase (PostgreSQL + Storage) |
| Styling | TailwindCSS 3 |
| AI | OpenAI Images API (gpt-image-1) |
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
- Dark cyberpunk pixel theme
- Responsive layout

### Excluded (planned for later phases)
- Supabase Realtime (using polling instead)
- Email notifications
- User authentication
- Community gallery
- Multiple art styles
- Quality auto-validation
