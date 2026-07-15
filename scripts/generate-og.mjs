// Generates public/og-image.png (1200x630) for social/IM link previews.
// Run with: node scripts/generate-og.mjs
import sharp from 'sharp'
import { writeFileSync, mkdirSync } from 'node:fs'

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0F0F23"/>
      <stop offset="1" stop-color="#241d3f"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#6C5CE7"/>
      <stop offset="1" stop-color="#A98CFF"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- pixel pet mascot -->
  <g transform="translate(840,170)">
    <rect x="20" y="0" width="40" height="46" fill="#6C5CE7"/>
    <rect x="150" y="0" width="40" height="46" fill="#6C5CE7"/>
    <rect x="10" y="40" width="190" height="170" rx="34" fill="#6C5CE7"/>
    <rect x="55" y="100" width="26" height="32" rx="6" fill="#0F0F23"/>
    <rect x="130" y="100" width="26" height="32" rx="6" fill="#0F0F23"/>
    <rect x="62" y="108" width="8" height="8" fill="#FFFFFF"/>
    <rect x="137" y="108" width="8" height="8" fill="#FFFFFF"/>
    <rect x="95" y="140" width="20" height="14" rx="4" fill="#FF6B6B"/>
    <rect x="90" y="162" width="30" height="6" rx="3" fill="#0F0F23"/>
  </g>

  <!-- left copy -->
  <text x="70" y="150" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" letter-spacing="3" fill="#A98CFF">AI PET GENERATOR</text>
  <text x="68" y="238" font-family="Arial, Helvetica, sans-serif" font-size="56" font-weight="800" fill="#FFFFFF">Turn any photo</text>
  <text x="68" y="306" font-family="Arial, Helvetica, sans-serif" font-size="56" font-weight="800" fill="url(#accent)">into a pixel-art pet</text>
  <text x="70" y="370" font-family="Arial, Helvetica, sans-serif" font-size="25" font-weight="500" fill="#C9C5E0">Free · Animated · Installable in OpenAI Codex</text>
  <text x="70" y="560" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="800" fill="#FFFFFF">Pet<tspan fill="#6C5CE7">Gen</tspan></text>
</svg>`

const png = await sharp(Buffer.from(svg)).png().toBuffer()
mkdirSync('public', { recursive: true })
writeFileSync('public/og-image.png', png)
console.log('OG image written: public/og-image.png (' + png.length + ' bytes)')
