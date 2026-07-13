// English (en) translation dictionary.
// Mirrors the shape of zh.ts exactly — keys are dot-paths used by t().

export const en = {
  nav: {
    github: 'GitHub'},
  footer: {
    madeWith: 'Made with for Codex users',
    compatible: 'OpenAI Codex Compatible',
    copyright: '© 2026 PetGen',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    faq: 'FAQ',
    contact: 'Contact'},
  lang: {
    en: 'EN',
    zh: '中',
    ja: '日',
    ko: '한',
    fr: 'FR',
    de: 'DE'},
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
    ready: 'Ready to install!'},
  steps: {
    upload: 'Upload',
    base: 'Base',
    animate: 'Animate',
    install: 'Install'},
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
    s4desc: 'Copy to ~/.codex/pets/ and your companion comes to life on screen.'},
  whatYouGet: {
    title: 'What you get',
    desc: 'A Codex-ready package: a transparent spritesheet plus a metadata file.',
    spritesheetTitle: 'spritesheet.webp',
    spritesheetMeta: '1536 × 1872',
    spritesheetDesc: '9 states × 8 frames, transparent background. The exact grid Codex reads.',
    jsonTitle: 'pet.json',
    jsonMeta: 'metadata',
    jsonDesc: 'Four fields tell Codex how to name and locate your pet. That is it.',
    jsonCompatible: 'Compatible with OpenAI Codex custom pets.'},
  upload: {
    drop: 'Drop image here',
    dropActive: 'Drop it!',
    or: 'or',
    clickToBrowse: 'click to browse',
    jpg: 'JPG',
    png: 'PNG',
    webp: 'WebP',
    maxSize: 'Max 10MB'},
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
      'Bailian free quota exhausted. Complete real-name verification and recharge, or turn off "Free quota stops when exhausted" in the Bailian console (Model Usage → Free Quota).'},
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
    installWin: 'Install — Windows'},
  basePreview: {
    title: 'Your Pet Base',
    desc: 'This is your pet is base form. Approve to generate all 9 animation states, or regenerate for a new look.',
    regenerating: 'Regenerating...',
    approve: 'Approve & Generate',
    regenerate: 'Regenerate'},
  download: {
    preparing: 'Preparing...',
    download: 'Download ZIP'},
  errorCard: {
    title: 'Generation Failed',
    retry: 'Try Again',
    tryDemo: 'Try Demo'},
  animationPreview: {
    title: 'Animation Preview',
    desc: '9 animation states generated. Click any state to see it play.'},
  code: {
    copy: 'Copy',
    copied: 'Copied'},
  animation: {
    idle: 'Idle',
    'running-right': 'Run Right',
    'running-left': 'Run Left',
    waving: 'Waving',
    jumping: 'Jumping',
    failed: 'Failed',
    waiting: 'Waiting',
    running: 'Running',
    review: 'Review'},
  demo: {
    banner:
      'Demo mode — backend not configured. Previewing the full flow with your own image. Add Supabase + BAILIAN_API_KEY or OPENAI_API_KEY in .env.local to generate a real pixel pet.'},
      pricing: {
    title: 'Simple pricing',
    desc: 'Choose the plan that fits your needs. No hidden fees.',
    popular: 'POPULAR',
    starter: { name: 'Starter', price: 'Free', period: 'forever', desc: 'Try it out and see what PetGen can do.', cta: 'Get started', f1: '3 pet generations', f2: '9 animation states', f3: 'Standard quality spritesheet', f4: 'WebP download', f5: 'Community support' },
    pro: { name: 'Pro', price: '$9', period: '/month', desc: 'For creators who want more control and quality.', cta: 'Subscribe Pro', f1: '15 pet generations / month', f2: '9 animation states', f3: 'HD spritesheet (2x)', f4: 'WebP + ZIP download', f5: 'Priority support', f6: 'pet.json customization' },
    unlimited: { name: 'Unlimited', price: '$29', period: '/month', desc: 'For power users and teams.', cta: 'Subscribe Unlimited', f1: 'Unlimited generations', f2: '9 animation states', f3: 'HD + 4K spritesheet', f4: 'All download formats', f5: 'Commercial use license', f6: 'Dedicated support', f7: 'Custom color palette' },
  },
  faq: {
    title: 'Frequently Asked Questions',
    desc: 'Everything you need to know about PetGen.',
    q1: 'What is PetGen?', a1: 'PetGen is an AI-powered tool that transforms your photos into animated pixel-art pets compatible with OpenAI Codex.',
    q2: 'How does the pet generation work?', a2: 'Upload a photo, and our AI creates a pixel-art base character. You approve the look, then 9 animation states are generated.',
    q3: 'What image formats are supported?', a3: 'We support JPG, PNG, and WebP formats. Maximum file size is 10MB.',
    q4: 'How long does generation take?', a4: 'The base character takes about 90 seconds. The full animation set takes 2–5 minutes.',
    q5: 'How do I install the pet into Codex?', a5: 'Download the ZIP, extract it, and copy the folder to ~/.codex/pets/. Restart Codex and your pet will appear.',
    q6: 'Can I use the generated pets commercially?', a6: 'Yes, if you are on the Unlimited plan. Starter and Pro grants personal use only.',
    q7: 'What payment methods do you accept?', a7: 'We accept major credit cards and PayPal.',
    q8: 'Can I cancel my subscription?', a8: 'You can cancel anytime. Your access continues until the end of the billing period.',
    q9: 'What happens to my uploaded images?', a9: 'Uploaded images are processed by our AI and deleted after generation. They are not stored or used for any other purpose.',
    q10: 'Is there a free plan?', a10: 'Yes. The Starter plan is free and includes 3 pet generations with standard quality.'},
  contact: {
    title: 'Contact Us',
    desc: 'Have a question, suggestion, or need help? We would love to hear from you.',
    emailTitle: 'Email',
    emailDesc: 'cruzreese459228@gmail.com',
    emailReply: 'We reply within 24 hours.',
    githubTitle: 'GitHub Issues',
    githubDesc: 'Report bugs or request features.',
    githubLabel: 'Public issue tracker.',
    businessTitle: 'Business Inquiries',
    businessText: 'For partnership, sponsorship, or other business questions, please email us at'},
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: July 2026',
    s1title: '1. Information We Collect',
    s1items: ['Account information — If you sign in with Google, we receive your name, email address, and profile picture from Google.', 'Uploaded images — The images you upload are processed and temporarily stored.', 'Usage data — We use PostHog and Google Analytics for anonymized usage data.', 'Cookies — We use essential and analytics cookies.'],
    s2title: '2. How We Use Your Information',
    s2items: ['Provide, maintain, and improve PetGen', 'Generate pixel pets from your uploaded images', 'Authenticate your account and manage your subscription', 'Analyze usage patterns', 'Respond to your support requests'],
    s3title: '3. Data Sharing',
    s3items: ['Supabase — account management and file storage', 'Vercel — hosting and deployment', 'PostHog — product analytics', 'Google Analytics — website traffic', 'OpenAI / Bailian — AI image generation'],
    s4title: '4. Data Retention',
    s4text: 'Uploaded images are deleted after generation completes. Account data is retained until you delete your account.',
    s5title: '5. Your Rights',
    s5items: ['Access your personal data', 'Request deletion of your data', 'Opt out of analytics tracking', 'Withdraw consent'],
    s6title: '6. Contact',
    s6text: 'If you have questions about this privacy policy, please contact us at'},
  terms: {
    title: 'Terms of Service',
    lastUpdated: 'Last updated: July 2026',
    s1title: '1. Acceptance of Terms',
    s1text: 'By accessing or using PetGen, you agree to be bound by these Terms of Service.',
    s2title: '2. Description of Service',
    s2text: 'PetGen is an AI-powered tool that converts uploaded images into pixel-art pet spritesheets.',
    s3title: '3. User Accounts',
    s3text: 'You may sign in using Google authentication. You are responsible for your account.',
    s4title: '4. Subscriptions and Payments',
    s4text: 'Paid plans are billed monthly. You may cancel at any time.',
    s5title: '5. User Content',
    s5text: 'You retain ownership of the images you upload and the pets generated.',
    s6title: '6. Acceptable Use',
    s6items: ['Upload illegal or harmful content', 'Reverse-engineer or abuse the service', 'Use automated scripts', 'Violate applicable laws'],
    s7title: '7. Intellectual Property',
    s7text: 'The PetGen service is our intellectual property. Generated pets may be used freely per your plan.',
    s8title: '8. Limitation of Liability',
    s8text: 'PetGen is provided "as is" without warranties of any kind.',
    s9title: '9. Termination',
    s9text: 'We reserve the right to suspend or terminate access for violation of these terms.',
    s10title: '10. Contact',
    s10text: 'For questions about these terms, contact us at'}}

export type Dict = typeof en






