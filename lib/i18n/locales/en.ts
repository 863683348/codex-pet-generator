// English (en) translation dictionary.
// Mirrors the shape of `zh.ts` exactly — keys are dot-paths used by `t()`.

export const en = {
  nav: {
    github: 'GitHub',
  },
  footer: {
    madeWith: 'Made with for Codex users',
    compatible: 'OpenAI Codex Compatible',
    copyright: '© 2026 PetGen',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    faq: 'FAQ',
    contact: 'Contact',
  },
  lang: {
    en: 'EN',
    zh: '中',
  },
  hero: {
    badge: 'AI-Powered Pet Generator',
    titlePrefix: 'Turn one photo into a tiny',
    titleHighlight: 'installable coding companion',
    subtitle:
      'Built for Codex, with spritesheet.webp plus pet.json compatible with Codex custom pets. Upload, approve the character base, unlock the animated ZIP, then install it from your terminal.',
    uploading: 'Uploading…',
    demo: 'Try a demo (no upload needed)',
    baseTime: '~90s base',
    statesCount: '9 animation states',
    zipDownload: 'ZIP download',
    ready: 'Ready to install!',
  },
  steps: {
    upload: 'Upload',
    base: 'Base',
    animate: 'Animate',
    install: 'Install',
  },
  howItWorks: {
    title: 'How it works',
    desc: 'Four steps from a photo to a coding companion that lives on your desktop.',
    s1title: 'Upload',
    s1desc: 'Drop any photo — a pet, an avatar, a character. JPG, PNG or WebP.',
    s2title: 'Approve the base',
    s2desc: 'AI turns it into a pixel character. Approve the look, or regenerate.',
    s3title: 'Unlock the animated ZIP',
    s3desc: '9 animation states composed into spritesheet.webp + pet.json.',
    s4title: 'Install from terminal',
    s4desc: 'Copy to ~/.codex/pets/ and your companion comes to life on screen.',
  },
  whatYouGet: {
    title: 'What you get',
    desc: 'A Codex-ready package: a transparent spritesheet plus a metadata file.',
    spritesheetTitle: 'spritesheet.webp',
    spritesheetMeta: '1536 × 1872',
    spritesheetDesc: '9 states × 8 frames, transparent background. The exact grid Codex reads.',
    jsonTitle: 'pet.json',
    jsonMeta: 'metadata',
    jsonDesc: 'Four fields tell Codex how to name and locate your pet. That’s it.',
    jsonCompatible: 'Compatible with OpenAI Codex custom pets.',
  },
  upload: {
    drop: 'Drop image here',
    dropActive: 'Drop it!',
    or: 'or',
    clickToBrowse: 'click to browse',
    jpg: 'JPG',
    png: 'PNG',
    webp: 'WebP',
    maxSize: 'Max 10MB',
  },
  error: {
    unsupportedFormat: 'Unsupported format: {type}. Use JPG, PNG, or WebP.',
    fileTooLarge: 'File too large: {size}MB. Max 10MB.',
    generationFailed: 'Generation failed.',
    missingBackendConfig:
      'Backend not configured. Add NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to .env.local, then restart the server.',
    openaiNotConfigured: 'Image generation API key is missing. Add BAILIAN_API_KEY or OPENAI_API_KEY to .env.local.',
    noFile: 'No image file was selected.',
    dbError: 'Database error. Check that the Supabase pets table and storage bucket exist.',
    unknown: 'Something went wrong. Try again or switch to the demo.',
    bailianQuotaExhausted:
      'Bailian free quota exhausted. Complete real-name verification and recharge, or turn off "Free quota stops when exhausted" in the Bailian console (Model Usage → Free Quota).',
  },
  workspace: {
    generatingBase: 'Generating base',
    sketching: 'AI is sketching your pixel character…',
    waitingHintBase:
      'AI is turning your photo into a pixel character — about 90 seconds. Keep this page open; do not refresh or close it.',
    step1: 'STEP 1 / 3 · ~90s',
    generatingStates: 'Generating 9 animation states',
    composing: 'Composing the spritesheet. Each state appears as it finishes.',
    waitingHintAnim:
      'Each of the 9 animation frames is generated individually by AI, so it takes about 2–5 minutes in total. Progress updates automatically — please keep the page open.',
    step2: 'STEP 2 / 3 · ~2-5 min',
    petAlive: 'Your pet is alive',
    allStates: 'All 9 animation states generated. Your companion is ready to install.',
    packageReady: 'Your package is ready',
    downloadHint:
      'Click below to download the ZIP — it contains spritesheet.webp (transparent sprites) and pet.json (metadata), ready to install into Codex.',
    petJsonTitle: 'pet.json',
    installMac: 'Install — macOS / Linux',
    installWin: 'Install — Windows',
  },
  basePreview: {
    title: 'Your Pet Base',
    desc: 'This is your pet’s base form. Approve to generate all 9 animation states, or regenerate for a new look.',
    regenerating: 'Regenerating...',
    approve: 'Approve & Generate',
    regenerate: 'Regenerate',
  },
  download: {
    preparing: 'Preparing...',
    download: 'Download ZIP',
  },
  errorCard: {
    title: 'Generation Failed',
    retry: 'Try Again',
    tryDemo: 'Try Demo',
  },
  animationPreview: {
    title: 'Animation Preview',
    desc: '9 animation states generated. Click any state to see it play.',
  },
  code: {
    copy: 'Copy',
    copied: 'Copied',
  },
  animation: {
    idle: 'Idle',
    'running-right': 'Run Right',
    'running-left': 'Run Left',
    waving: 'Waving',
    jumping: 'Jumping',
    failed: 'Failed',
    waiting: 'Waiting',
    running: 'Running',
    review: 'Review',
  },
  demo: {
    banner:
      'Demo mode — backend not configured. Previewing the full flow with your own image. Add Supabase + BAILIAN_API_KEY or OPENAI_API_KEY in .env.local to generate a real pixel pet.',
  },
}

export type Dict = typeof en
