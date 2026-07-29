<div align="center">
  <img src="https://codexpetgenerator.com/og-image.png" alt="Codex Pet Generator" width="600" />
  <h1 align="center">Codex Pet Generator</h1>
  <p align="center">
    Turn any photo into a custom animated pixel pet for OpenAI Codex Desktop.
    <br />
    <a href="https://codexpetgenerator.com"><strong>Try it live &#x2192;</strong></a>
    <br />
    <br />
    <a href="https://codexpetgenerator.com/blog">Blog</a>
    &#x00B7;
    <a href="https://codexpetgenerator.com/pricing">Pricing</a>
    &#x00B7;
    <a href="https://codexpetgenerator.com/faq">FAQ</a>
  </p>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase" alt="Supabase" />
  <img src="https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?logo=tailwindcss" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/license-MIT-green" alt="MIT" />
</p>

---

## What It Does

Upload a photo of your pet (or any image), and AI generates a ready-to-install animated pixel pet for OpenAI Codex Desktop. The output is a ZIP containing a spritesheet and metadata file -- drop it into your Codex pets folder and your new companion comes to life.

**Try it free:** [codexpetgenerator.com](https://codexpetgenerator.com) -- no credit card required.

## Features

- **Upload any photo** -- JPG, PNG, WebP, up to 10MB
- **AI pixel art generation** -- powered by Qwen-Image or OpenAI
- **9 animation states** -- idle, walk, run, jump, sleep, die, action, special, interact
- **Full spritesheet + JSON** -- Codex-compatible format, ready to install
- **Animation preview** -- see your pet move before downloading
- **One-click install commands** -- for macOS and Windows
- **Free to try** -- Starter plan included, Pro for HD and more generations

## Quick Start (local dev)

```bash
git clone https://github.com/863683348/codex-pet-generator.git
cd codex-pet-generator
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Database | Supabase (PostgreSQL + Storage) |
| AI | Qwen-Image (Bailian) / OpenAI Images API |
| Styling | TailwindCSS 3 |
| Image Processing | Sharp |
| Payment | Creem |
| Deployment | Vercel |

## How It Works

1. **Upload** your image to the web app
2. **AI generation** creates a pixel art base character (~90 seconds)
3. **Review and approve** the base design (or regenerate)
4. **Animation generation** creates 9 animation states (~2-5 minutes)
5. **Download** the ZIP package containing spritesheet.webp + pet.json
6. **Install** to `~/.codex/pets/` and restart Codex

## Blog

Read our guides and tutorials:

- [How to Install a Custom Pet in Codex](https://codexpetgenerator.com/blog/how-to-install-codex-pet)
- [Turn Your Pet Photo Into a Pixel Art Avatar](https://codexpetgenerator.com/blog/turn-photo-into-pixel-art)
- [What Is a Pet Spritesheet?](https://codexpetgenerator.com/blog/what-is-pet-spritesheet)
- [Why Pixel Art Is Perfect for Codex Desktop Pets](https://codexpetgenerator.com/blog/why-use-pixel-art)
- [Animation States Explained](https://codexpetgenerator.com/blog/animation-states-explained)
- [AI Pipeline: How PetGen Works](https://codexpetgenerator.com/blog/how-petgen-works)
- [Spritesheet Dimensions Guide](https://codexpetgenerator.com/blog/spritesheet-dimensions)
- [Installation Troubleshooting](https://codexpetgenerator.com/blog/installation-troubleshooting)
- [Best AI Pet Generators Compared](https://codexpetgenerator.com/blog/best-ai-pet-generators-2026)

## Deploy to Vercel

1. Import the repo from GitHub at [vercel.com](https://vercel.com)
2. Add all environment variables from `.env.example` to Vercel's Settings
3. Set `NEXT_PUBLIC_SITE_URL` to your production domain
4. Deploy

> **Note:** The animation generation step requires up to 300 seconds. Vercel Hobby plan caps at 60s -- the Pro plan ($20/mo) is needed for full functionality.

## License

MIT

---

<p align="center">
  Made with &#x2764; for the Codex community
</p>
