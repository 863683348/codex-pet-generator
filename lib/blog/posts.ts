export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  keywords: string[]
  related?: string[]
  faq?: { question: string; answer: string }[]
  sections: {
    heading: string
    paragraphs?: string[]
    list?: string[]
  }[]
}

export const posts: BlogPost[] = [
  {
    slug: 'how-to-install-codex-pet',
    title: 'How to Install a Custom Pet in OpenAI Codex (macOS & Windows)',
    description:
      'A complete step-by-step guide to installing your PetGen pixel-art companion in OpenAI Codex. Covers both macOS and Windows, with troubleshooting tips for beginners.',
    date: '2026-07-27',
    author: 'PetGen',
    keywords: [
      'install Codex pet',
      'Codex custom pet setup',
      'how to add pet to Codex',
      'Codex pet installation guide',
      'Codex desktop pet install',
      'OpenAI Codex pet tutorial',
      'Codex coding companion install',
      'pet.json Codex setup',
    ],
    sections: [
      {
        heading: 'What you need before you start',
        paragraphs: [
          'Before installing a custom pet in Codex, make sure you have: (1) OpenAI Codex desktop app, (2) your pet package from PetGen (ZIP with spritesheet.webp and pet.json), and (3) a terminal or command prompt.',
          'Your pet package is ready the moment you download it. No extra conversion is needed.',
        ],
      },
      {
        heading: 'macOS installation',
        paragraphs: [
          'Extract the ZIP, open Terminal, run: mkdir -p ~/.codex/pets && cp -r ~/Downloads/my-pixel-pet ~/.codex/pets/',
          'Restart Codex completely (Cmd+Q and relaunch). Your pet should appear.',
        ],
      },
      {
        heading: 'Windows installation',
        paragraphs: [
          'Extract the ZIP, open PowerShell, run: Copy-Item -Recurse "$env:USERPROFILE\\Downloads\\my-pixel-pet" "$env:USERPROFILE\\.codex\\pets\\"',
          'Fully restart Codex. Your pet should appear and animate.',
        ],
      },
      {
        heading: 'Troubleshooting',
        list: [
          'Pet not showing: Check folder structure matches pet.json naming',
          'Blank square: Spritesheet missing or corrupt, re-download',
          'Permission error on macOS: Add sudo before cp',
        ],
      },
    ],
  },
  {
    slug: 'turn-photo-into-pixel-art',
    title: 'How to Turn Your Pet Photo Into a Pixel-Art Avatar (Free in 2026)',
    description:
      'Turn any pet photo into a pixel-art avatar free in under a minute — no design skills. Upload, approve, and download a 9-state animated spritesheet ready for Codex.',
    date: '2026-07-15',
    author: 'PetGen',
    keywords: [
      'turn photo into pixel art',
      'free pixel pet generator',
      'pet avatar generator',
    ],
    faq: [
      { question: 'How do I turn my pet photo into pixel art for free?', answer: 'Upload a clear, centered photo to a free pixel pet generator like PetGen. The AI removes the background, draws a pixel-art base for you to approve, then generates 9 animation states into a single spritesheet.webp plus pet.json. Download the ZIP, drop it into ~/.codex/pets, restart Codex, and your pixel pet is alive.' },
      { question: 'What photo works best for a pixel-art avatar?', answer: 'A front-facing shot with the pet centered, a simple background, and good lighting. Aim for at least 512x512 pixels and a square crop. Dark, blurry, or group photos lose detail during the pixel conversion.' },
      { question: 'Do I need design skills to make a pixel pet?', answer: 'No. The generator handles background removal, pixelation, and animation. You only approve the base character and download the ready-to-install package — the whole flow takes under a minute.' },
    ],
    sections: [
      {
        heading: 'Why pixel-art pets',
        paragraphs: [
          'A tiny animated pixel pet is a fresh way to stand out. PetGen turns a single photo into a pixel-art pet with nine animation states.',
        ],
      },
      {
        heading: 'Steps',
        paragraphs: [
          '1. Upload your photo on PetGen. The AI removes background and sketches a base.',
          '2. Approve the base. PetGen generates 9 animation states into spritesheet.webp + pet.json.',
          '3. Download the ZIP and copy to your Codex pets folder. Restart and enjoy.',
        ],
      },
    ],
  },
  {
    slug: 'what-is-pet-spritesheet',
    title: 'What Is a Pet Spritesheet and pet.json?',
    description:
      'A pet spritesheet is the animation grid Codex uses to render your desktop pet. Learn the exact format, the pet.json fields, and how PetGen builds both for you.',
    date: '2026-07-15',
    author: 'PetGen',
    keywords: [
      'pet spritesheet',
      'pet.json',
      'OpenAI Codex pet',
    ],
    faq: [
      { question: 'What is a pet spritesheet in Codex?', answer: 'A pet spritesheet is a single image file that packs every animation frame of your desktop pet into a grid. Codex reads this exact grid to play idle, walk, and other animations. PetGen outputs a 1536x1872 transparent spritesheet with the precise layout Codex expects, so your pet renders correctly out of the box.' },
      { question: 'What does pet.json contain?', answer: 'pet.json is a small metadata file that tells Codex the pet name, a description, and the path to the spritesheet. If the name field in pet.json does not match the folder name in ~/.codex/pets, Codex silently skips the pet — this is the most common reason a pet does not show up.' },
      { question: 'Can I make a pet spritesheet without a generator?', answer: 'Technically yes, but you must match Codex\'s exact grid dimensions, frame count, and JSON schema, and pixel art by hand is slow. A generator like PetGen does the whole pipeline — background removal, pixelation, 9 animation states, and a valid pet.json — in about a minute.' },
    ],
    sections: [
      {
        heading: 'Spritesheet basics',
        paragraphs: [
          'A spritesheet is a single image containing every frame of animation in a grid. PetGen outputs a 1536x1872 transparent spritesheet with the exact grid Codex expects.',
          'pet.json is a metadata file with the pet name, description, and spritesheet path.',
        ],
      },
    ],
  },
  {
    slug: 'best-ai-pet-generators-2026',
    title: 'Best AI Pet Generators in 2026: Compared',
    description:
      'We compared the top AI pet generators of 2026 — portrait apps, prompt-based tools, and Codex-ready companions. See which one actually outputs an animated desktop pet.',
    date: '2026-07-15',
    author: 'PetGen',
    keywords: ['AI pet generator', 'best AI pet generators'],
    faq: [
      { question: 'What is the best AI pet generator in 2026?', answer: 'It depends on what you want. For a Codex desktop companion, you need a generator that outputs an animated spritesheet plus pet.json — PetGen is purpose-built for this. For a one-off portrait or avatar, general AI tools work, but they will not produce an installable, animated desktop pet.' },
      { question: 'Can any AI image generator make a Codex pet?', answer: 'Not directly. Codex expects a specific spritesheet grid plus pet.json metadata. Generic generators produce a single picture, not a packed animation sheet in the right format. You either need a Codex-aware generator or you must manually slice and assemble frames.' },
      { question: 'What should I look for in an AI pet generator?', answer: 'Check four things: whether it outputs an installable spritesheet + pet.json, how many animation states it creates, whether it removes the photo background for you, and the price. Free generators that handle the full pipeline save you the most time.' },
    ],
    sections: [
      {
        heading: 'Categories',
        paragraphs: [
          'Portrait apps turn photos into paintings. General AI generators need prompts. PetGen is purpose-built for animated Codex pets with spritesheet output.',
        ],
      },
    ],
  },
  {
    slug: 'why-use-pixel-art',
    title: 'Why Pixel Art Is Perfect for Codex',
    description: 'Pixel art pets are lightweight, animated, and nostalgic.',
    date: '2026-07-29',
    author: 'PetGen',
    keywords: ['pixel art Codex pet', 'pixel pet style'],
    sections: [
      {
        heading: 'Why it works',
        paragraphs: [
          'Pixel art is lightweight, universally readable, and does not distract from work. Codex was designed for simple 2D sprites.',
        ],
      },
    ],
  },
  {
    slug: 'how-petgen-works',
    title: 'How PetGen Turns Your Photo Into a Pixel Pet',
    description: 'Behind-the-scenes look at PetGen AI pipeline.',
    date: '2026-07-29',
    author: 'PetGen',
    keywords: ['how PetGen works', 'spritesheet generation'],
    sections: [
      {
        heading: 'The pipeline',
        paragraphs: [
          'PetGen analyzes your photo, generates a pixel-art base, creates 9 animation states with 8 frames each, and composes them into a single spritesheet.',
        ],
      },
    ],
  },
  {
    slug: 'spritesheet-dimensions',
    title: 'Codex Pet Spritesheet Dimensions Guide',
    description: 'Exact specs for Codex pet spritesheets.',
    date: '2026-07-29',
    author: 'PetGen',
    keywords: ['spritesheet dimensions', 'pet.json format'],
    sections: [
      {
        heading: 'The specs',
        paragraphs: [
          'Standard size: 1536x1872 pixels, 9 rows x 8 columns. Each frame: 192x156 pixels.',
        ],
      },
    ],
  },
  {
    slug: 'animation-states-explained',
    title: 'Codex Pet Animation States Explained',
    description: 'Breakdown of the 9 animation states.',
    date: '2026-07-29',
    author: 'PetGen',
    keywords: ['Codex pet animation', 'animation states'],
    sections: [
      {
        heading: 'The 9 states',
        list: [
          'Idle, Walk, Run, Jump, Wave, Celebrate, Sleep, Hurt, Special',
        ],
      },
    ],
  },
  {
    slug: 'installation-troubleshooting',
    title: 'Troubleshooting Codex Pet Installation',
    description: 'Fix invisible pets, glitches, and errors.',
    date: '2026-07-29',
    author: 'PetGen',
    keywords: ['Codex pet troubleshooting', 'pet not showing'],
    sections: [
      {
        heading: 'Common fixes',
        list: [
          'Verify folder structure matches pet.json naming',
          'Re-download if blank square appears',
          'Use sudo on macOS for permission errors',
        ],
      },
   ],
 }
,
  {
    slug: 'create-codex-pet-from-logo',
    title: 'How to Create a Codex Pet from Your Company Logo',
    description:
      'Turn your company logo into an animated pixel-art pet for OpenAI Codex. A step-by-step guide to branding your team coding companion with your mascot or logo mark.',
    date: '2026-07-30',
    author: 'PetGen',
    keywords: [
      'codex pet from logo',
      'brand mascot codex',
      'company pet codex',
      'codex team pet',
      'logo to pixel art',
      'business codex pet',
      'codex branding',
    ],
    sections: [
      {
        heading: 'Why put your logo in Codex?',
        paragraphs: [
          'A branded Codex pet turns your team environment into something personal. Your mascot sits in the Codex window reinforcing brand identity during every session.',
          'For remote teams, a shared pet signals you are all working in the same space.',
        ],
      },
      {
        heading: 'What you need',
        list: [
          'A high-res logo or mascot (PNG, at least 512x512)',
          'A PetGen account',
          'About 3 to 5 minutes',
        ],
      },
      {
        heading: 'Steps',
        paragraphs: [
          'Upload your logo to PetGen. The AI generates a pixel-art base within 90 seconds.',
          'Approve it. PetGen packs 9 animation states into spritesheet.webp and pet.json inside a ZIP.',
          'Distribute the ZIP to your team. Each person copies to ~/.codex/pets/ and restarts Codex.',
        ],
      },
      {
        heading: 'Tips',
        list: [
          'Single main shape works better than multi-element designs',
          'High contrast helps the AI identify the subject',
          'Mascot-style logos convert most naturally',
          'If your logo has thin text, create a simplified version first',
        ],
      },
      {
        heading: 'Make your branded pet today',
        paragraphs: [
          'The free Starter plan includes 3 generations to test your logo. The Pro plan unlocks HD spritesheets for 4K monitors.',
          'For installation help, see our installation guide.',
        ],
      },
    ],
  },
  {
    slug: 'creative-uses-for-codex-pet',
    title: '5 Creative Ways to Use Your Codex Desktop Pet',
    description:
      'Discover five fun and practical ways to use your pixel-art companion beyond the default idle animation.',
    date: '2026-07-30',
    author: 'PetGen',
    keywords: [
      'codex pet uses',
      'codex pet productivity',
      'desktop pet ideas',
      'pixel pet motivation',
      'codex companion tips',
    ],
    sections: [
      {
        heading: '1. Break timer',
        paragraphs: [
          'Use your pet as a natural break reminder. Set 25-45 minute intervals and check your pet when time ends.',
        ],
      },
      {
        heading: '2. Project mood matching',
        paragraphs: [
          'A calm pet for debugging, energetic for new features. The swap signals a mental mode switch.',
          'Keep multiple pets in ~/.codex/pets/ and swap from Codex settings.',
        ],
      },
      {
        heading: '3. Team bonding',
        paragraphs: [
          'A shared pet creates group identity. Everyone installs the same pet for a shared visual element.',
          'Remote teams find this especially effective across time zones.',
        ],
      },
      {
        heading: '4. Milestone pets',
        paragraphs: [
          'Generate a special pet for launches or sprints. A digital reward on your desktop.',
        ],
      },
      {
        heading: '5. Focus ritual',
        paragraphs: [
          'Select a specific pet when you sit to code. This signals your brain it is time to focus.',
        ],
      },
    ],
  },
  {
    slug: 'codex-pet-color-customization',
    title: 'Codex Pet Color Customization',
    description:
      'Customize your Codex pet colors by generating variations or manually editing spritesheets.',
    date: '2026-07-30',
    author: 'PetGen',
    keywords: [
      'codex pet custom color',
      'pixel pet color edit',
      'codex pet theme',
      'codex dark theme pet',
    ],
    sections: [
      {
        heading: 'Two methods',
        paragraphs: [
          'Upload photos with different colors for automatic palette changes. No editing skills needed.',
          'Or open spritesheet.webp in Photoshop and edit colors directly. Keep palette consistent across all 9 animation rows.',
        ],
      },
      {
        heading: 'Popular schemes',
        list: [
          'Synthwave: neon pink and cyan',
          'Monochrome: single hue variations',
          'Terminal: green-on-black retro',
          'Corporate: your brand colors',
        ],
      },
    ],
  },
  {
    slug: 'share-codex-pet-with-friends',
    title: 'How to Share Your Codex Pet with Friends',
    description:
      'Share your custom Codex pet spritesheet packages with friends and teammates.',
    date: '2026-07-30',
    author: 'PetGen',
    keywords: [
      'share codex pet',
      'codex pet for teams',
      'send codex pet',
    ],
    sections: [
      {
        heading: 'Share the ZIP',
        paragraphs: [
          'Send the PetGen download ZIP over email or Slack. Recipients extract and copy to ~/.codex/pets/.',
          'For teams, keep the ZIP in shared storage like Google Drive or internal GitHub.',
        ],
      },
      {
        heading: 'Best practices',
        list: [
          'Include a preview image',
          'Name the ZIP file clearly',
          'Test on a fresh install before sharing',
        ],
      },
    ],
  },
  {
    slug: 'best-photos-for-pixel-pet-generator',
    title: 'Best Photo Tips for a Perfect Pixel Pet',
    description:
      'The best photos for a pixel pet generator: clear subject, simple background, good light, and 512px+. Fix your shot first and get a sharper, cuter pixel pet every time.',
    date: '2026-07-30',
    author: 'PetGen',
    keywords: [
      'best photos for pet generator',
      'pixel art pet tips',
      'pet photo guide',
      'ai pet generator tips',
    ],
    faq: [
      { question: 'What kind of photo gives the best pixel pet result?', answer: 'A clear, front-facing photo with the pet centered, a simple background, and even lighting. At least 512x512 pixels with a square crop. The cleaner the input, the sharper the pixel conversion and the fewer AI artifacts on the final spritesheet.' },
      { question: 'Should I crop or edit my photo before using a pet generator?', answer: 'Light preparation helps: crop to a square, remove clutter from the background, and resize to at least 800x800 pixels if you have a very small image. Save as PNG for lossless quality. Avoid heavy filters — they can confuse the pixelation step.' },
      { question: 'Why did my pixel pet turn out blurry or distorted?', answer: 'Almost always the source photo: dark lighting, motion blur, a tiny low-resolution file, or a group shot where the AI cannot tell which pet to focus on. Re-shoot with the pet alone, centered, and well lit, then regenerate.' },
    ],
    sections: [
      {
        heading: 'What works best',
        list: [
          'Clear subject centered in frame',
          'Simple background',
          'Good lighting',
          'At least 512x512 pixels',
          'Single subject only',
        ],
      },
      {
        heading: 'What to avoid',
        paragraphs: [
          'Group photos, dark images, and low-resolution shots lose detail during pixel conversion.',
        ],
      },
      {
        heading: 'Quick tips',
        list: [
          'Crop to square aspect ratio',
          'Remove cluttered backgrounds',
          'Resize to at least 800x800 pixels',
          'Save as PNG for best quality',
        ],
      },
    ],
  },
  {
    slug: 'what-is-a-codex-pet',
    title: "What Is a Codex Pet? A Beginner's Guide to Custom Desktop Companions",
    description:
      'A Codex Pet is a pixel-art desktop companion for OpenAI Codex — two files (spritesheet.webp + pet.json) in ~/.codex/pets/. Make yours with Codex Pet Generator.',
    date: '2026-08-04',
    author: 'PetGen',
    keywords: [
      'what is a codex pet',
      'codex pet',
      'codex pet generator',
      'codex desktop pet',
      'openai codex pet',
      'custom codex pet',
      'codex ai pet',
      'what is codex pet generator',
    ],
    related: [
      'make-your-first-codex-pixel-pet',
      'codex-custom-pet-guide',
      'how-to-install-codex-pet',
    ],
    sections: [
      {
        heading: 'What exactly is a Codex Pet?',
        paragraphs: [
          'A Codex Pet is a custom pixel companion that lives inside the OpenAI Codex desktop app. If you have ever wondered "what is a Codex Pet?", think of it as a tiny animated buddy that sits in your editor and moves around while you write code — adding personality to an otherwise plain terminal.',
          'Under the hood, every Codex Pet is just two files: spritesheet.webp (one image holding every animation frame, 9 states x 8 frames) and pet.json (the config that tells Codex how to play each frame). Drop them into ~/.codex/pets/ and restart Codex — the pet appears.',
        ],
      },
      {
        heading: 'Why people add a Codex Pet to their setup',
        list: [
          'A more human workspace — coding is lonely; a pixel buddy makes it feel different',
          'Personal expression — a custom pet generated from your own photo is unique to you',
          'Community momentum — CodexPets and similar communities list 800+ pets, and "turn my cat into a Codex pet" posts are trending',
          'Free to start — the Codex Pet Generator Starter plan gives 3 free generations',
        ],
      },
      {
        heading: 'Is a Codex Pet the same as an AI coding assistant?',
        paragraphs: [
          'No. A Codex Pet does not participate in your code logic — it is purely visual companionship. The AI assistant does the real work; the pet is the morale support on your desktop. They coexist: the AI writes your code, the pet cheers you on.',
        ],
      },
      {
        heading: 'How do you get a Codex Pet?',
        list: [
          'Use a ready-made one — download a community pet package and unzip it into ~/.codex/pets/',
          'Generate from a photo (recommended) — open Codex Pet Generator, upload a photo, let the AI turn it into a pixel pet, download the ZIP, unzip and install. Takes minutes, no design skills.',
          'Hand-craft it — draw your own sprite sheet and write pet.json. High barrier, not recommended for beginners.',
        ],
      },
      {
        heading: 'How to install a Codex Pet',
        paragraphs: [
          '1) Download the pet package ZIP. 2) Unzip to get a my-pet/ folder (spritesheet.webp + pet.json inside). 3) Move it to ~/.codex/pets/my-pet/. 4) Fully restart Codex — the pet appears.',
          'For a full walkthrough with macOS and Windows commands, see our guide on installing a custom Codex pet.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does a Codex Pet use extra system resources?',
        answer:
          'No. It only plays a small sprite animation, so the overhead is negligible and will not slow down your editor.',
      },
      {
        question: 'Can I rename or recolor my Codex Pet?',
        answer:
          'Partially. Basic customization is covered in our custom Codex pet guide; deeper edits are possible by editing pet.json on paid plans.',
      },
      {
        question: 'Does every OpenAI Codex version support pets?',
        answer:
          'Most desktop builds support the ~/.codex/pets/ folder. Always check the official OpenAI Codex docs for your specific version.',
      },
      {
        question: 'Does generating a Codex Pet cost money?',
        answer:
          'The Starter plan is free and includes 3 generations. The Pro plan is $9/month and adds 15 generations plus HD spritesheets.',
      },
      {
        question: 'What is the difference between a Codex Pet and a custom Codex Pet?',
        answer:
          'A regular Codex Pet can be a community download. A custom Codex Pet is generated from your own photo or artwork so it looks like your pet, avatar, or brand.',
      },
    ],
  },
  {
    slug: 'make-your-first-codex-pixel-pet',
    title: 'Make Your First Codex Pixel Pet from a Photo in 5 Minutes',
    description:
      'Make your first Codex pixel pet from a photo in 5 minutes — no drawing or code. Download the ZIP (spritesheet.webp + pet.json), install to ~/.codex/pets/. Free on Starter.',
    date: '2026-08-05',
    author: 'PetGen',
    keywords: [
      'make codex pet',
      'make your first codex pixel pet',
      'create codex pet from photo',
      'codex pet generator',
      'first codex pet tutorial',
      'codex pixel pet from photo',
      'photo to codex pet',
    ],
    related: [
      'what-is-a-codex-pet',
      'codex-custom-pet-guide',
      'how-to-install-codex-pet',
    ],
    sections: [
      {
        heading: 'What you need to make your first Codex pet',
        list: [
          'A clear photo (a person or pet works best — front-facing, good light)',
          'A browser (Chrome, Edge, or Safari)',
          'The OpenAI Codex desktop app (to install the pet)',
        ],
        paragraphs: [
          'You do not need design software, coding skills, or any payment to make your first Codex pixel pet.',
        ],
      },
      {
        heading: 'Make your first Codex pixel pet in 4 steps',
        paragraphs: [
          'Step 1: Open Codex Pet Generator and click "Upload photo".',
          'Step 2: Upload a JPG, PNG, or WebP. Tip: square crop, subject centered, clean background — the AI converts it to pixel art automatically.',
          'Step 3: Preview your pixel pet. When you are happy, click "Unlock animation ZIP". The Starter plan includes 3 free generations, enough for your first pet.',
          'Step 4: Download the ZIP, unzip to a my-pet/ folder (spritesheet.webp + pet.json), move it to ~/.codex/pets/, then fully restart Codex — your pet appears!',
        ],
      },
      {
        heading: 'Photo tips for a cuter Codex pet',
        list: [
          'Square first — crop close to 1:1 so the pet does not distort',
          'Subject centered — keep the face in the middle',
          'Clean background — solid or simple backgrounds pixelate better',
          'Do not go too small — at least 800x800 px keeps the detail',
        ],
      },
    ],
    faq: [
      {
        question: 'Does it cost money to make your first Codex pet?',
        answer:
          'No. The Starter plan gives 3 free generations, which is enough to make your first Codex pixel pet. Pro is $9/month for 15 generations.',
      },
      {
        question: 'Which photo formats are supported?',
        answer:
          'JPG, PNG, and WebP. All processing happens locally in your browser, so your photo is never uploaded to a server.',
      },
      {
        question: 'Where does my Codex pet appear after install?',
        answer:
          'After you fully restart OpenAI Codex, the pet animates inside the Codex interface beside your code.',
      },
      {
        question: 'Can I change my Codex pet colors later?',
        answer:
          'Basic customization is coming soon; the Pro plan already unlocks more color and edit options.',
      },
      {
        question: 'Can I make a custom Codex pet from my own artwork?',
        answer:
          'Yes. Our custom Codex pet guide shows how to turn your own photo, logo, or drawing into a personalized pixel companion.',
      },
    ],
  },
  {
    slug: 'codex-custom-pet-guide',
    title: 'Codex Custom Pet: How to Make Your Own Pixel Pet',
    description:
      'Learn how to make a custom Codex pet from your own photo — upload, generate, and install a personalized pixel companion into OpenAI Codex. Step-by-step guide with troubleshooting.',
    date: '2026-08-05',
    author: 'PetGen',
    keywords: [
      'codex custom pet',
      'custom codex pet',
      'make custom codex pet',
      'customize codex pet',
      'personalized codex pet',
      'codex pet from photo',
      'custom pixel pet codex',
    ],
    sections: [
      {
        heading: 'What is a custom Codex pet?',
        paragraphs: [
          'A custom Codex pet is a pixel-art companion generated from your own photo or artwork, instead of a pre-made community pet. It carries your pet, your avatar, or your brand into OpenAI Codex.',
          'Under the hood it is the same two files every Codex pet uses: spritesheet.webp (the animation frames) and pet.json (the config). The only difference is the source — you supply the image, the generator does the pixel art.',
        ],
      },
      {
        heading: 'Why make a custom pet?',
        list: [
          'Personal expression — a pet that actually looks like your cat, dog, or mascot',
          'Team identity — share one branded pet across your whole engineering group',
          'Recognition — spot your own companion instantly among community pets',
          'Fun — turn a meme, logo, or kid drawing into something that lives on your desktop',
        ],
      },
      {
        heading: 'How to create a custom Codex pet (step by step)',
        paragraphs: [
          'Step 1: Open codexpetgenerator.com and click "Upload photo". Pick a JPG, PNG, or WebP with a clear, centered subject.',
          'Step 2: The AI builds a pixel-art base in about 90 seconds. Approve the look, or regenerate for a different style.',
          'Step 3: PetGen composes 9 animation states into spritesheet.webp + pet.json and packs them into a ZIP.',
          'Step 4: Download the ZIP, unzip to a my-pet/ folder, copy it to ~/.codex/pets/, and fully restart Codex. Your custom pet appears and animates.',
        ],
      },
      {
        heading: 'Customization options',
        paragraphs: [
          'You can steer the result by changing the source photo: different colors, a simpler background, or higher contrast all shift the final pixel pet.',
          'On the Pro and Unlimited plans you can also edit pet.json directly — rename the pet, tweak the description, or adjust the spritesheet path.',
        ],
      },
      {
        heading: 'Tips for the best custom pet',
        list: [
          'Square crop close to 1:1 so the pet does not distort',
          'Keep the subject centered and the background clean',
          'Use at least 800x800 px so detail survives pixelation',
          'One clear subject works far better than a group shot',
        ],
      },
      {
        heading: 'Frequently asked questions',
        list: [
          'Does a custom pet cost money? Starter gives 3 free generations; Pro is $9/month for 15.',
          'Can I use my custom pet commercially? Only on the Unlimited plan.',
          'What if my pet does not show after install? Verify the folder name matches pet.json and restart Codex fully.',
          'Can I recolor my custom pet? Regenerate from a differently colored photo, or edit the spritesheet manually on Pro/Unlimited.',
        ],
      },
    ],
  },
  {
    slug: 'pixel-art-pet-design-guide',
    title: 'Pixel Art Pet Design Guide for Developers: From Idea to Animated Companion',
    description:
      'A practical design guide for turning a mascot idea into a pixel-art Codex pet: silhouette, palette, spritesheet layout, and animation states that read well at small sizes.',
    date: '2026-08-06',
    author: 'PetGen',
    keywords: [
      'pixel art pet design',
      'codex pet design guide',
      'spritesheet layout',
      'pixel art mascot tutorial',
      'developer pet animation',
      'pet.json spritesheet',
      'pixel art for coders',
    ],
    sections: [
      {
        heading: 'What makes a good coding companion pet?',
        paragraphs: [
          'A pet that sits beside your editor should be charming at 32x32 pixels, not just on a designer\'s canvas. The best coding companions share three traits: a clear silhouette, a tight palette, and one or two animation states that feel alive without distracting you from your work.',
          'Think of the pet as a tiny piece of product branding. A consistent shape and color story make it recognizable the moment it appears, which is exactly what you want from a mascot you will see for hours every day.',
        ],
      },
      {
        heading: 'Start from a simple silhouette',
        paragraphs: [
          'Before colors, sketch the outline in a single color. If the shape reads clearly as a cat, robot, or ghost at thumbnail size, your design works. If it looks like a blob, simplify: fewer limbs, bigger head, clearer ears or antennae.',
          'Many first attempts fail because they carry too much detail. At small sizes, one expressive feature — a tilted head, a glowing eye, a wagging tail — communicates more than a fully rendered scene.',
        ],
      },
      {
        heading: 'Color palette discipline',
        paragraphs: [
          'Limit yourself to 4-6 colors plus one highlight and one shadow. A restrained palette is what makes pixel art feel intentional rather than muddy.',
        ],
        list: [
          'Pick a base color, a darker shade for outlines, a lighter shade for highlights.',
          'Use one accent color for eyes or a glow so the pet has a focal point.',
          'Avoid gradients inside a single sprite; dithering reads cleaner at small sizes.',
        ],
      },
      {
        heading: 'Building the spritesheet',
        paragraphs: [
          'A spritesheet stacks each animation frame side by side in a single image. Codex pets expect a predictable grid so the runtime can slice frames by index. Get the grid right and animation is automatic; get it wrong and frames jitter.',
          'The companion file, pet.json, tells the loader how many frames exist, their size, and the playback order. Keep frame dimensions identical across the sheet.',
        ],
        list: [
          'Use a fixed cell size (for example 32x32 or 48x48) for every frame.',
          'Lay frames left to right: idle, idle2, happy, working, sleeping.',
          'Export as a lossless PNG or WebP; never recompress with heavy JPEG.',
        ],
      },
      {
        heading: 'Animation states that read well at small sizes',
        paragraphs: [
          'You do not need many states. Two or three looping cycles are enough: a slow idle blink, a brief happy bounce, and a focused working pose.',
        ],
        list: [
          'Idle: a 2-4 frame loop with a subtle breathing or blink.',
          'Happy: a quick 2-frame bounce triggered on events.',
          'Working: a steady, low-energy loop so it does not compete with your code.',
        ],
      },
      {
        heading: 'Common mistakes to avoid',
        paragraphs: [
          'The most frequent errors are fixable in minutes if you catch them early.',
        ],
        list: [
          'Inconsistent frame sizes, which cause sliding animations.',
          'Too many colors, which makes the sprite look noisy when scaled down.',
          'Missing frames referenced in pet.json, which break the loop.',
          'Overly busy motion that pulls your eye away from the editor.',
        ],
      },
      {
        heading: 'From design to a running pet in Codex',
        paragraphs: [
          'Once your spritesheet and pet.json are ready, drop them into your Codex pets folder and restart the app. The pet should appear and begin its idle loop immediately.',
          'If nothing shows, the usual cause is a folder or file name mismatch with pet.json. Verify the names, then restart Codex fully rather than just closing the window.',
        ],
      },
      {
        heading: 'Frequently asked questions',
        list: [
          'Do I need to draw every frame by hand? No — start with 2 idle frames; you can expand later.',
          'What size should the sprite be? 32x32 or 48x48 cells are the sweet spot for editor-side pets.',
          'Can I reuse a game sprite? Yes, as long as the license allows it and the grid is uniform.',
          'Why does my animation jitter? Almost always mismatched frame dimensions in the sheet.',
        ],
      },
    ],
  },
  {
    slug: 'install-codex-pet-terminal',
    title: 'How to Install a Custom Codex Pet from the Terminal',
    description:
      'Install a custom Codex pet entirely from the command line: where the ~/.codex/pets folder lives, the exact cp / Copy-Item commands for macOS and Windows, and how to verify the install.',
    date: '2026-08-07',
    author: 'PetGen',
    keywords: [
      'install codex pet',
      'install custom codex pet',
      '~/.codex/pets folder',
      'codex pet terminal install',
      'codex cli install pet',
      'how to install codex pet command line',
    ],
    faq: [
      { question: 'Where does Codex look for pets?', answer: 'The pets folder is ~/.codex/pets on both macOS and Windows (C:\\Users\\<you>\\.codex\\pets). Codex reads this folder at startup, so changes need a full app restart.' },
      { question: 'Can I install a pet without opening the Codex UI?', answer: 'Yes. Everything happens in the terminal: create ~/.codex/pets, copy your pet folder in, and restart Codex. The UI is only needed to confirm the pet shows up.' },
      { question: 'Why is my pet not showing after I copied it?', answer: 'The usual cause is a name mismatch: the folder name must match the name field inside pet.json. Also make sure Codex was fully quit (Cmd+Q / exit tray) and relaunched, not just the window closed.' },
      { question: 'Does installing a pet touch any Codex system files?', answer: 'No. Pets live only in your user-level ~/.codex/pets directory. Nothing in the Codex installation is modified, so updates and uninstalls are clean.' },
    ],
    sections: [
      {
        heading: 'What you need before you start',
        paragraphs: [
          'A pet package with two files: spritesheet.webp (the animation frames) and pet.json (the config). If you generated it on PetGen, it downloads as a ZIP you can extract anywhere.',
          'You do not need the Codex UI open for the install itself. Terminal or PowerShell is enough.',
        ],
      },
      {
        heading: 'Where pets actually live: ~/.codex/pets',
        paragraphs: [
          'Codex scans a single directory for pets: ~/.codex/pets. The tilde means your home folder, so on Windows that is C:\\Users\\<you>\\.codex\\pets. Each pet is one subfolder inside it, containing spritesheet.webp and pet.json.',
          'The folder name and the name field inside pet.json have to match. I have burned ten minutes on this exact mismatch more than once, so check it before you restart.',
        ],
      },
      {
        heading: 'macOS: the two-line install',
        paragraphs: [
          'Open Terminal and run:',
          'mkdir -p ~/.codex/pets && cp -r ~/Downloads/my-pixel-pet ~/.codex/pets/',
          'Then quit Codex completely (Cmd+Q) and relaunch. Your pet should appear.',
          'Want a quick sanity check first? Run ls ~/.codex/pets and confirm your folder is there before restarting.',
        ],
      },
      {
        heading: 'Windows: the PowerShell equivalent',
        paragraphs: [
          'Open PowerShell and run:',
          'Copy-Item -Recurse "$env:USERPROFILE\\Downloads\\my-pixel-pet" "$env:USERPROFILE\\.codex\\pets\\"',
          'If the .codex folder does not exist yet, create it first with: New-Item -ItemType Directory "$env:USERPROFILE\\.codex\\pets" -Force',
          'Then fully exit Codex (check the tray) and launch again.',
        ],
      },
      {
        heading: 'Verifying the install like a nerd',
        paragraphs: [
          'Two commands tell you most of what you need: ls ~/.codex/pets shows the folder, and cat ~/.codex/pets/<name>/pet.json shows the config Codex will read.',
          'Check that the name field in pet.json matches the folder name exactly, and that spritesheet.webp sits next to it. If both are right and the pet still does not show, it is almost always a restart problem, not a file problem.',
        ],
      },
      {
        heading: 'Common terminal mistakes',
        list: [
          'Typing .codex with a capital C — it is lowercase.',
          'Copying the ZIP instead of the extracted folder — Codex does not unzip for you.',
          'Missing the trailing backslash on Windows when copying folders.',
          'Forgetting to fully quit Codex; closing the window is not enough.',
        ],
      },
      {
        heading: 'Uninstalling is just deleting a folder',
        paragraphs: [
          'rm -rf ~/.codex/pets/<name> on macOS, or Remove-Item -Recurse on Windows, then restart Codex. No leftover registry entries, no config changes — it is gone.',
          'If you want more pets to pick from, generate one at codexpetgenerator.com and drop it into the same folder. That is the whole workflow.',
        ],
      },
    ],
  },
  {
    slug: 'codex-pet-not-showing-fixes',
    title: 'Codex Pet Not Showing? 9 Common Problems and Fixes',
    description:
      'Your Codex pet installed but will not appear? Nine real causes behind codex pet not showing, from name mismatches in pet.json to the restart everyone forgets, with the exact fix for each.',
    date: '2026-08-08',
    author: 'PetGen',
    keywords: [
      'codex pet not working',
      'codex pet not showing',
      'codex pet troubleshooting',
      'codex pet install failed',
      'pet.json name mismatch',
      'codex pet spritesheet missing',
      '~/.codex/pets folder fix',
    ],
    faq: [
      { question: 'Why is my Codex pet not showing after install?', answer: 'Nine times out of ten it is one of three things: the folder name inside ~/.codex/pets does not match the name field in pet.json, spritesheet.webp is missing or named differently, or Codex was not fully restarted (Cmd+Q / tray exit). Fix those three and it almost always appears.' },
      { question: 'Does Codex cache pets and need a restart?', answer: 'Yes. Codex reads ~/.codex/pets at startup, so changes require a full quit and relaunch. Closing the window is not a restart on macOS, and on Windows you need to exit the tray icon too.' },
      { question: 'Can a pet.json error make the whole pet vanish?', answer: 'It can. If pet.json is invalid JSON or references a spritesheet that does not exist, Codex silently skips the pet instead of showing an error. Run node -e "JSON.parse(require(\'fs\').readFileSync(\'pet.json\',\'utf8\'))" to validate it quickly.' },
      { question: 'What if my pet was working and suddenly disappeared?', answer: 'Check whether Codex updated recently. An app update can reset the pets directory path or change the format it expects. Re-copy the pet folder and confirm pet.json still matches the current schema.' },
    ],
    sections: [
      {
        heading: 'The three causes behind almost every invisible pet',
        paragraphs: [
          'Before anything else, know that codex pet not showing is almost never a broken install. In my experience helping people with this, three causes cover most cases: a name mismatch between the folder and pet.json, a missing or renamed spritesheet.webp, and a restart that was not actually a restart. Everything below branches from those three.',
        ],
      },
      {
        heading: '1. Folder name does not match pet.json',
        paragraphs: [
          'Codex loads a pet from a subfolder of ~/.codex/pets and reads the name field inside that pet.json to decide what to call it. If the folder is my-cat-v2 but the JSON still says name: "my-cat", the loader can refuse to mount it. The fix is boring but instant: open pet.json, copy the exact name value, rename the folder to match, then restart.',
        ],
      },
      {
        heading: '2. spritesheet.webp is missing or renamed',
        paragraphs: [
          'The pet loader looks for spritesheet.webp by that exact filename next to pet.json. If your extractor created spritesheet (1).webp, or the file is still inside a nested folder from the ZIP, the pet has nothing to draw and gets skipped. Confirm the file sits directly beside pet.json and is spelled exactly spritesheet.webp.',
        ],
      },
      {
        heading: '3. The restart that was not a restart',
        paragraphs: [
          'On macOS, closing the window leaves Codex running in the menu bar; on Windows it keeps living in the tray. Until the process is fully gone, the pets directory is not re-read. Quit properly (Cmd+Q on macOS, exit from the tray on Windows), relaunch, and give it a few seconds. This single step fixes more cases than any other item on this list.',
        ],
      },
      {
        heading: '4. pet.json is invalid JSON',
        paragraphs: [
          'A typo, a trailing comma, or a mismatched quote in pet.json makes the file unreadable, and Codex skips the pet silently. Validate it fast: node -e "JSON.parse(require(\'fs\').readFileSync(\'pet.json\',\'utf8\'))". If it throws, fix the syntax. Common culprit: hand-editing the file and breaking the structure, which is why codex pet troubleshooting usually starts here.',
        ],
      },
      {
        heading: '5. Wrong file permissions on the folder',
        paragraphs: [
          'On macOS, a folder copied from Downloads with odd permissions can make the pet unreadable. chmod -R u+rwX ~/.codex/pets/<name> and restart. On Windows this is rarer, but check that the folder is not read-only after extraction.',
        ],
      },
      {
        heading: '6. Pet hidden behind a UI setting',
        paragraphs: [
          'Some Codex versions toggle pet visibility in settings, especially after updates that reset preferences. Look for a pets or companions toggle and make sure it is on. This one is easy to miss because the pet still exists on disk — it is just switched off in the UI.',
        ],
      },
      {
        heading: '7. Multiple pets, same name',
        paragraphs: [
          'If two subfolders under ~/.codex/pets declare the same name in pet.json, the loader may pick one and ignore the other, which reads as "my new pet is not showing." Give each pet a unique name field, then restart.',
        ],
      },
      {
        heading: '8. Codex updated and changed the format',
        paragraphs: [
          'A Codex desktop update can change what it expects from pet.json or the spritesheet dimensions. If a pet worked last week and vanished after an update, re-download the package from your generator (ours at codexpetgenerator.com always emits the current schema) and replace the folder.',
        ],
      },
      {
        heading: '9. The spritesheet grid does not match pet.json',
        paragraphs: [
          'If pet.json declares 9 animation states but the spritesheet has fewer rows, the loader can reject the whole thing. This is more common when people hand-craft pets. Regenerate or fix the sheet so the grid matches the JSON. Our generator handles this automatically.',
        ],
      },
      {
        heading: 'A five-minute checklist to run through',
        list: [
          'ls ~/.codex/pets/<name> — the folder must contain spritesheet.webp and pet.json directly',
          'Compare folder name with the name field in pet.json',
          'Validate pet.json with node -e JSON.parse',
          'Quit Codex fully (Cmd+Q / tray exit), then relaunch',
          'Check the pets visibility toggle in Codex settings',
          'If it worked before an update, re-download the pet package',
        ],
      },
      {
        heading: 'Frequently asked questions',
        list: [
          'Do I need to reinstall Codex if my pet will not show? No. This is a pets-folder problem, not a Codex problem. Reinstalling the app rarely helps and wipes your settings.',
          'Can I have more than one pet at a time? Yes, but each folder must have a unique name in pet.json, or the loader may ignore one of them.',
          'Is there a log I can check? On macOS look at ~/Library/Logs for Codex-related logs; on Windows check the app data logs folder. Search for "pet" or "spritesheet".',
          'Does codex pet not working affect my actual coding? No. Pets are cosmetic; if one fails to load, Codex runs normally.',
        ],
      },
    ],
  },
  {
    slug: 'codex-pet-image-formats-jpg-png-webp',
    title: 'Which Image Formats Work for Codex Pets? JPG vs PNG vs WebP',
    description:
      'A practical answer to the codex pet image format question: what Codex actually loads (WebP), which source formats you can upload, and how JPG, PNG and WebP compare for pixel pets.',
    date: '2026-08-09',
    author: 'PetGen',
    keywords: [
      'codex pet image format',
      'codex pet jpg png webp',
      'best format for pixel pet',
      'codex pet upload size',
      'spritesheet.webp format',
      'convert jpg to pixel pet',
      'codex pet png vs webp',
    ],
    related: ['what-is-a-codex-pet', 'what-is-pet-spritesheet', 'best-photos-for-pixel-pet-generator'],
    faq: [
      { question: 'What image format do Codex pets actually use?', answer: 'The final pet is always a WebP file named spritesheet.webp, sitting next to pet.json in your ~/.codex/pets folder. Codex loads that specific file; nothing else is read at runtime.' },
      { question: 'Can I upload a JPG to make a Codex pet?', answer: 'Yes, JPG works as a source image for most pixel-pet generators, including PetGen. It gets converted to WebP internally. The catch is quality: JPG compression blurs edges, which matters a lot for pixel art, so prefer PNG or WebP sources.' },
      { question: 'Is PNG better than WebP for pixel pets?', answer: 'As a source image, PNG is the safest choice because it is lossless and preserves hard pixel edges. As the final pet file, WebP is required. Think of it as: PNG or WebP in, WebP out.' },
      { question: 'Is there an upload size limit for pet images?', answer: 'Most generators cap uploads around 10MB. A high-resolution JPG or PNG under that limit is fine; if your file is larger, compress it first or reduce dimensions before uploading.' },
    ],
    sections: [
      {
        heading: 'What Codex actually loads',
        paragraphs: [
          'The short answer to the codex pet image format question: Codex reads one file, spritesheet.webp, from a subfolder of ~/.codex/pets. That is it. The spritesheet is a WebP grid of animation frames, and pet.json tells Codex how to slice it. Your source photo can be JPG, PNG or WebP, but the pet that ends up on your desktop is always WebP.',
        ],
      },
      {
        heading: 'JPG vs PNG vs WebP for pixel pets',
        paragraphs: [
          'JPG is the format nobody thinks about until it bites you. It is lossy, and lossy compression blurs the sharp edges that pixel art depends on. At low compression settings the difference is visible, especially on outlines. PNG is lossless, which makes it the safest source format: hard edges stay hard, and transparency works cleanly. WebP sits in the middle as a source, but it is also the only output format that matters here, since that is what Codex loads.',
        ],
        list: [
          'JPG: fine for photos, worst for pixel art sources; compression smears edges',
          'PNG: lossless, keeps hard pixel edges, supports transparency; best source format',
          'WebP: modern, smaller files, and the required output format for spritesheets',
        ],
      },
      {
        heading: 'What happens if you upload a JPG or PNG',
        paragraphs: [
          'Generators like PetGen accept JPG, PNG and WebP as input, convert the image into a pixel-art grid, and export the ZIP with spritesheet.webp plus pet.json. You never deal with the WebP conversion by hand. The practical takeaway: pick the cleanest source you have, PNG preferred, and let the generator do the format work.',
        ],
      },
      {
        heading: 'The best format for pixel pet sources',
        paragraphs: [
          'If you are choosing a source image, the best format for pixel pet work is PNG, for three reasons: lossless edges, transparency support, and predictable file size. A 1024x1024 PNG stays well under typical 10MB upload caps. JPG only makes sense when the source is a photo and PNG is unavailable. WebP as a source is fine but unnecessary, since it will be re-encoded anyway.',
        ],
      },
      {
        heading: 'Upload size and quality trade-offs',
        paragraphs: [
          'On the codex pet upload size front, keep it under 10MB. If your image exceeds that, resize to 1024px or 2048px on the long side before uploading. Compression at that point costs almost nothing, because pixel art is simple geometry; a 2048px PNG of a cartoon character is typically a few hundred KB, nowhere near the cap.',
        ],
      },
      {
        heading: 'Frequently asked questions',
        list: [
          'Do I need to convert my image to WebP before uploading? No. Upload JPG, PNG or WebP; the generator handles the conversion to spritesheet.webp.',
          'Does Codex support GIF pets? Not as spritesheets. If your animation comes as a GIF, convert frames to a WebP grid first, or use a generator that does it for you.',
          'Can a spritesheet be PNG instead of WebP? Some community loaders accept PNG, but stock Codex expects spritesheet.webp. Keep the standard format to avoid load failures.',
          'Will a large upload slow down the generator? Slightly. Above 2048px the benefit is marginal for pixel art; keep sources reasonably sized for faster results.',
        ],
      },
    ],
  },
  {
    slug: 'codex-pet-free-starter-plan',
    title: 'Get Your First Pet for Free: The Starter Plan Explained',
    description:
      'Short version: the codex pet free tier is real. What the Starter plan includes, where the limits are, and when upgrading to Pro actually makes sense. Your first pixel pet takes about five minutes.',
    date: '2026-08-10',
    author: 'PetGen',
    keywords: [
      'codex pet free',
      'codex pet free plan',
      'codex pet starter',
      'free pixel pet generator',
      'first pixel pet',
      'codex pet starter plan',
      'codex pet pricing',
    ],
    related: ['make-your-first-codex-pixel-pet', 'what-is-a-codex-pet', 'install-codex-pet-terminal'],
    faq: [
      { question: 'Is the free Codex pet plan really free?', answer: 'Yes. The Starter plan generates and installs your first pixel pet with no payment, full output, no watermark, no expiry. The quota resets on a cycle.' },
      { question: 'Do free-generated pets expire?', answer: 'No. The spritesheet and pet.json you download are yours permanently, and once installed in Codex they do not depend on any online state.' },
      { question: 'Is there a difference between Starter and Pro pets?', answer: 'Both work identically as pets. The difference is resolution, quota, and advanced customization, not whether the pet functions.' },
      { question: 'Can I use a free pet commercially?', answer: 'Personal use and general content creation are fine; full terms are on the site, and the pricing page has details if you are unsure.' },
    ],
    sections: [
      {
        heading: 'What the Starter plan includes (free)',
        paragraphs: [
          'Core capability in one sentence: upload a photo, generate a pixel pet, download the spritesheet, install it into Codex. The flow is identical to the paid tier, no gimped entry point.',
        ],
        list: [
          'Upload one source image (JPG / PNG / WebP) per generation, at standard pixel-pet resolution',
          'Full output: spritesheet.webp plus pet.json, ready to drop into ~/.codex/pets',
          'Basic animation states: 4-direction walk, idle, jump',
          'Free-generated pets are yours permanently, no subscription needed to keep them',
        ],
      },
      {
        heading: 'What the free tier does not include (honestly)',
        paragraphs: [
          'No sugarcoating: the differences between Starter and Pro come down to three things: generation quota, output resolution, and advanced customization. The key point is the quota resets, it is not gone forever. When it runs out, wait for the cycle to reset. The pets themselves are unaffected, and anything you already generated belongs to you permanently. A lot of people assume free pets expire or carry watermarks; neither is true.',
        ],
        list: [
          'Generation quota: Starter has a base allowance, Pro is unlimited',
          'Output resolution: Starter is standard, Pro goes higher',
          'Advanced customization: Starter has basic animation states, Pro adds more states, color and detail control',
          'Batch generation: Starter is single image, Pro is batch',
        ],
      },
      {
        heading: 'Making your first pet in 5 steps',
        paragraphs: [
          'Pick a front-facing photo with even lighting; a simple background makes the result cleaner. Upload it to the generator and pick a pixelation strength (the default is usually fine). Preview the animation, then download the ZIP when you are happy. Unzip and drop the folder into ~/.codex/pets (Windows users: the app data directory). Restart or reload Codex, and the pet shows up on your desktop.',
          'If you get stuck, our installation troubleshooting guide and terminal install guide cover most path and filename issues.',
        ],
      },
      {
        heading: 'How to pick a free pixel pet generator',
        paragraphs: [
          'Plenty of tools claim to be a free pixel pet generator. Judge them on four things: whether free actually means free (no watermark-bait pricing), whether the output is standard (spritesheet + pet.json, the only format Codex reads), whether there is a preview (do not generate first and find out after), and privacy (what happens to your source image). Our stance is simple: the Starter plan opens the whole core flow so you can have one pet before we ever talk upgrades.',
        ],
      },
      {
        heading: 'When upgrading to Pro is actually worth it',
        paragraphs: [
          'Three signals. First, you iterate on the same pet with multiple color schemes or detail passes and keep hitting the quota. Second, you need higher resolution output for avatars, wallpapers, or print. Third, you want to batch-generate pets for the whole family or a team. If you just want one pet to try the waters, Starter is plenty.',
        ],
      },
    ],
  },
  {
    slug: 'codex-pets-dont-change-your-model',
    title: "7 Things to Know About Codex Pets (They Don't Change Your Model)",
    description:
      'The first question most people ask about the Codex desktop pet is whether it affects the model. It does not. Here are the seven most misunderstood things about Codex pets, and why they neither change your model nor slow down coding.',
    date: '2026-08-11',
    author: 'PetGen',
    keywords: [
      'codex pet tips',
      'codex pet model',
      'codex pet does not affect coding',
      'codex pet facts',
      'codex desktop pet',
      'OpenAI Codex pet',
    ],
    related: ['how-to-install-codex-pet'],
    faq: [
      { question: 'Do Codex pets affect model capabilities?', answer: 'No. The pet runs in the UI layer, isolated from model inference, and neither generates code nor consumes tokens.' },
      { question: 'Will installing a pet slow down Codex?', answer: 'No. It is a small desktop animation with negligible resource use, and it takes no context window.' },
      { question: 'Is the pet state connected to task progress?', answer: 'Display-wise yes, function-wise no. The animation reads task events for show, but it cannot influence the task.' },
      { question: 'Does uninstalling the pet affect my account or settings?', answer: 'No. Uninstalling deletes a local folder. Account, subscription, config and chat history stay untouched.' },
    ],
    sections: [
      {
        heading: '1. The pet is a decoration layer, not a function layer',
        paragraphs: [
          'The Codex pet lives in the desktop UI layer, fully isolated from the model inference underneath. It does not generate code, it does not consume tokens, and it does not change model behavior. Think of it as a desktop wallpaper: nice to look at, unrelated to the work happening behind it.',
        ],
      },
      {
        heading: '2. Installing a pet does not slow Codex down',
        paragraphs: [
          'The pet is a small animation rendered on your desktop, not something stuffed into the model context. Its resource use is negligible. Autocomplete speed stays the same, and it takes up none of your context window.',
        ],
      },
      {
        heading: '3. Pet states and task states are two different things',
        paragraphs: [
          'The pet reacts to your work: idle when you pause, bouncy when a task is running. That state read is display-only. The reverse is not true. An excited pet does not mean the task is faster, and a sleeping pet does not mean the model is stuck.',
        ],
      },
      {
        heading: '4. Changing pet themes does not change code style',
        paragraphs: [
          'Skin swaps only affect appearance. Whether your companion is a pixel cat or a pixel dog, the quality, style and speed of generated code stay identical. If you see a post claiming a certain theme makes code better, ignore it.',
        ],
      },
      {
        heading: '5. Pet data stays local',
        paragraphs: [
          'The pet package (spritesheet + pet.json) lives in your local Codex config directory and is never uploaded. No need to worry about a pet sync dragging your code anywhere. Different storage, different paths.',
        ],
      },
      {
        heading: '6. Removing the pet touches nothing else',
        paragraphs: [
          'Uninstalling deletes one local folder. Your account, subscription, model config and conversation history are all untouched. Installing and uninstalling is a zero-cost operation, so feel free to experiment.',
        ],
      },
      {
        heading: '7. The pet is companionship, not a productivity tool',
        paragraphs: [
          'Its job is to make long coding sessions feel less lonely. Expect productivity gains and you will be disappointed. Expect your desktop to feel alive, and it delivers. Tools do the work; the pet keeps you company.',
        ],
      },
    ],
  },
  {
    slug: 'custom-pet-guide',
    title: 'Custom Pet Guide: How to Make a Custom Pet with AI',
    description:
      'Learn what a custom pet is and how to create one from any photo with an AI pet generator. A beginner-friendly guide to custom cats, dogs, and fantasy pets.',
    date: '2026-08-11',
    author: 'PetGen',
    keywords: [
      'custom pet',
      'custom pet maker',
      'make a custom pet',
      'ai custom pet',
      'custom pet generator',
      'codex custom pet',
      'personalized pet avatar',
    ],
    related: ['codex-custom-pet-guide', 'turn-photo-into-pixel-art', 'best-ai-pet-generators-2026', 'ai-pet-generator-ultimate-guide'],
    faq: [
      { question: 'What is a custom pet?', answer: 'A custom pet is a pet character built from your own photo or idea, rather than a preset template. With an AI pet generator you upload a picture and the tool renders a unique pixel-art version you can install and use.' },
      { question: 'Can I make a custom pet for free?', answer: 'Yes. PetGen offers a free Starter plan that includes several pet generations. You can create, preview, and download a custom pet without paying.' },
      { question: 'What kinds of pets can I make?', answer: 'Anything from a real cat or dog to a fantasy creature. The generator works from a photo, so your source image decides the look.' },
    ],
    sections: [
      { heading: 'What is a custom pet?', paragraphs: [
        'A custom pet is a pet character created from your own photo or concept, not picked from a fixed catalogue. Instead of accepting a default animal, you feed the tool a picture and it builds a pet that looks like your subject.',
        'For OpenAI Codex users, a custom pet becomes a small desktop companion that lives in the coding environment. It is decorative, but it makes long sessions feel less empty.',
      ]},
      { heading: 'Why make a custom pet?', paragraphs: [
        'A custom pet is recognizable. When your mascot is based on your own cat, dog, or avatar, people remember it across streams, posts, and repositories.',
        'It is also a fast way to give a project a face. Indie developers use custom pets as lightweight branding before they have art budget for a full sprite set.',
      ]},
      { heading: 'How to make a custom pet in 4 steps', paragraphs: [
        'First, choose a clear photo. A front-facing subject with good light gives the cleanest result.',
        'Second, upload it to an AI pet generator such as PetGen. The tool renders a pixel-art base from your image.',
        'Third, approve the base or regenerate until the look fits. Fourth, download the package and install it.',
      ]},
      { heading: 'Photo tips for a better custom pet', paragraphs: [
        'Use a single clear subject. Group photos confuse the generator and weaken the result.',
        'Avoid heavy filters. A plain, well-lit photo maps to pixel art more faithfully than a busy edit.',
      ]},
      { heading: 'Custom pet vs preset pet', paragraphs: [
        'A preset pet is the same for everyone. A custom pet is yours alone, derived from your image.',
        'If you want a companion that reflects your brand or your real animal, custom is the right choice.',
      ]},
      { heading: 'Where to use your custom pet', paragraphs: [
        'Install it in OpenAI Codex as a desktop companion, use it as a Discord avatar, or drop it into a game project as a placeholder character.',
        'Because the output is a spritesheet plus metadata, it travels easily between tools.',
      ]},
    ],
  },
  {
    slug: 'change-pet-style-tutorial',
    title: 'How to Change Your Pet Style: A Step-by-Step Tutorial',
    description:
      'Want a different look for your AI pet? This tutorial shows how to change your pet style, swap themes, and regenerate a fresh custom pet.',
    date: '2026-08-11',
    author: 'PetGen',
    keywords: [
      'change pet style',
      'codex change pet',
      'customize pet',
      'pet style swap',
      'regenerate pet',
      'ai pet redesign',
    ],
    related: ['codex-custom-pet-guide', 'codex-pet-color-customization', 'pixel-art-pet-design-guide', 'ai-pet-generator-ultimate-guide'],
    faq: [
      { question: 'Can I change my pet style after generating it?', answer: 'Yes. You can regenerate a new base from the same photo with a different prompt, or start fresh with a new image. The original is not locked in.' },
      { question: 'Does changing the style affect my installed pet?', answer: 'It affects only the new download. Your previously installed pet stays as it is until you replace its folder with the new package.' },
      { question: 'How many times can I regenerate?', answer: 'On the free Starter plan you get a limited number of generations. Paid plans raise or remove the limit.' },
    ],
    sections: [
      { heading: 'When to change your pet style', paragraphs: [
        'You might want a new style after a rebrand, a season change, or simply because the first result was not quite right.',
        'Style changes are cheap to try. Regenerating from the same photo is the fastest way to explore looks.',
      ]},
      { heading: 'Step 1: Open your source photo', paragraphs: [
        'Keep the original photo you used. Regenerating from the same image with a new style prompt gives the most consistent comparison.',
      ]},
      { heading: 'Step 2: Adjust the style prompt', paragraphs: [
        'Describe the look you want: brighter palette, thicker outline, retro 8-bit, or a specific color family.',
        'Small, precise words beat long vague sentences. The generator reads the prompt directly into the art.',
      ]},
      { heading: 'Step 3: Regenerate and compare', paragraphs: [
        'Generate the new base and place it next to the old one. Keep the version that reads best at small size.',
        'Pixel pets are viewed tiny on a desktop, so pick the one that stays clear when scaled down.',
      ]},
      { heading: 'Step 4: Reinstall the new package', paragraphs: [
        'Download the updated ZIP, copy it to your pets folder, and restart Codex. The new style replaces the old one.',
      ]},
      { heading: 'Common style mistakes', paragraphs: [
        'Too many colors make the pet noisy. Limit the palette for a clean retro read.',
        'Over-detailed prompts fight the pixel grid. Let the generator simplify.',
      ]},
    ],
  },
  {
    slug: 'pet-creation-guide',
    title: 'Pet Creation Guide: From Photo to Installable Pixel Pet',
    description:
      'A complete pet creation walkthrough: upload, generate, approve, and install your pixel-art pet. Perfect for first-time creators.',
    date: '2026-08-11',
    author: 'PetGen',
    keywords: [
      'pet creation',
      'codex pet creation',
      'create a pet',
      'how to make a pet',
      'ai pet creation guide',
      'pixel pet maker',
    ],
    related: ['how-petgen-works', 'make-your-first-codex-pixel-pet', 'install-codex-pet-terminal', 'ai-pet-generator-ultimate-guide'],
    faq: [
      { question: 'How long does pet creation take?', answer: 'The base character takes about 90 seconds. The full animation set with nine states takes a few minutes.' },
      { question: 'Do I need to know pixel art?', answer: 'No. The generator handles the pixel rendering. You only choose a photo and approve the result.' },
      { question: 'What do I get at the end?', answer: 'A ZIP with spritesheet.webp (the animation frames) and pet.json (the metadata Codex reads).' },
    ],
    sections: [
      { heading: 'What you need before you start', paragraphs: [
        'A photo you like, a free PetGen account, and a few minutes. That is the entire setup.',
        'No art skills and no software install are required to create the pet. Installation happens only at the end.',
      ]},
      { heading: 'Step 1: Upload your photo', paragraphs: [
        'Drop a JPG, PNG, or WebP file up to 10MB. One clear subject works best.',
      ]},
      { heading: 'Step 2: Review the base character', paragraphs: [
        'The AI returns a pixel-art base. Approve it if the look fits, or regenerate for another attempt.',
        'This is the moment to catch a wrong read before the animation is built.',
      ]},
      { heading: 'Step 3: Generate the animation set', paragraphs: [
        'Nine animation states are composed into a single spritesheet. These cover idle, working, and resting poses.',
        'The sheet uses a transparent background so it drops cleanly into any UI.',
      ]},
      { heading: 'Step 4: Download and install', paragraphs: [
        'Download the ZIP, copy the folder to your pets directory, and restart Codex. Your pet appears.',
      ]},
      { heading: 'First-creation checklist', paragraphs: [
        'Clear photo selected. Base approved. Animation generated. Package downloaded. Installed and verified.',
      ]},
    ],
  },
  {
    slug: 'pets-library-explained',
    title: 'Pets Library Explained: Browse, Save, and Manage Your Pets',
    description:
      'What is the pets library? Learn how to browse, save, and manage every custom pet you create, and reuse them across Codex.',
    date: '2026-08-11',
    author: 'PetGen',
    keywords: [
      'pets library',
      'codex pets library',
      'pet collection',
      'saved pets',
      'manage pets',
      'pet library',
    ],
    related: ['what-is-a-codex-pet', 'share-codex-pet-with-friends', 'codex-pet-free-starter-plan', 'ai-pet-generator-ultimate-guide'],
    faq: [
      { question: 'Where are my pets stored?', answer: 'Each pet is a local folder with a spritesheet and a metadata file. The pets library is the collection of these folders on your machine.' },
      { question: 'Can I have more than one pet?', answer: 'Yes. You can keep several pets and switch between them by changing which folder is active in your pets directory.' },
      { question: 'How do I share a pet from my library?', answer: 'Copy the pet folder or share the downloaded ZIP. Friends can drop it into their own pets directory.' },
    ],
    sections: [
      { heading: 'What is the pets library?', paragraphs: [
        'The pets library is your personal collection of every custom pet you have created. Each entry is a small folder with art and metadata.',
        'Think of it as a shelf of companions you can swap in and out of Codex.',
      ]},
      { heading: 'How pets are organized', paragraphs: [
        'Every pet lives in its own folder under the pets directory. The folder name is the pet name Codex shows.',
        'Keeping one folder per pet makes switching and sharing clean.',
      ]},
      { heading: 'Saving a pet', paragraphs: [
        'When you download a finished pet, keep the ZIP or the extracted folder. That is your saved copy.',
      ]},
      { heading: 'Switching between pets', paragraphs: [
        'To change the active pet, point Codex at a different folder. Restart the app and the new companion appears.',
      ]},
      { heading: 'Managing a growing library', paragraphs: [
        'Name folders clearly. A library of ten pets is easy to navigate only if each name means something.',
        'Periodically remove pets you no longer use to keep the list short.',
      ]},
      { heading: 'Sharing from your library', paragraphs: [
        'Send a friend the pet folder or ZIP. They paste it into their own pets directory and restart.',
      ]},
    ],
  },
  {
    slug: 'ai-pet-generator-ultimate-guide',
    title: 'The Ultimate Guide to AI Pet Generators (2026)',
    description:
      'Everything about AI pet generators: how they work, what to look for, and how to create a custom pixel-art pet for OpenAI Codex. The complete 2026 guide.',
    date: '2026-08-11',
    author: 'PetGen',
    keywords: [
      'ai pet generator',
      'best ai pet generator',
      'ai pet generator guide',
      'custom pet generator',
      'pixel pet generator',
      'ai pet art',
      'free ai pet generator',
    ],
    related: ['custom-pet-guide', 'change-pet-style-tutorial', 'pet-creation-guide', 'pets-library-explained', 'best-ai-pet-generators-2026'],
    faq: [
      { question: 'What is an AI pet generator?', answer: 'It is a tool that turns a photo or prompt into a pet character, usually pixel art, that you can use as an avatar, game sprite, or desktop companion.' },
      { question: 'Are AI pet generators free?', answer: 'Many offer a free tier. PetGen includes a free Starter plan with several generations so you can try before paying.' },
      { question: 'Do I need art skills?', answer: 'No. You provide a photo and approve the result. The tool handles the rendering.' },
      { question: 'What is the best AI pet generator for Codex?', answer: 'The best choice outputs a Codex-ready package: a spritesheet plus a metadata file. PetGen is built for exactly this.' },
    ],
    sections: [
      { heading: 'What is an AI pet generator?', paragraphs: [
        'An AI pet generator is a tool that converts a photo or a text prompt into a pet character. Most modern versions output pixel art because it is lightweight, readable at small sizes, and easy to animate.',
        'The result is not just a picture. A good generator produces a structured package you can actually use in software.',
      ]},
      { heading: 'How an AI pet generator works', paragraphs: [
        'You upload a photo. The model detects the subject and renders a pixel-art base that matches its shape and features.',
        'You approve the base or regenerate. Then the tool builds animation frames and packs them into a spritesheet with a metadata file.',
      ]},
      { heading: 'Why pixel art?', paragraphs: [
        'Pixel art stays clear when scaled down to a tiny desktop icon. Vector and photo styles blur at that size.',
        'It also animates cheaply. A handful of frames read as lively motion without heavy assets.',
      ]},
      { heading: 'What to look for in a generator', paragraphs: [
        'Check the output format first. A spritesheet plus metadata beats a single flat image because it is installable.',
        'Check the free tier. You should be able to try the full flow before paying.',
        'Check animation state count. Nine states cover the common poses a companion needs.',
      ]},
      { heading: 'Free vs paid plans', paragraphs: [
        'Free plans are enough to learn the tool and make one or two pets. Paid plans raise generation limits and unlock higher quality.',
        'Pick paid only when you create pets often or need commercial rights.',
      ]},
      { heading: 'Step-by-step: create your first AI pet', paragraphs: [
        'Upload a clear photo with one subject. Approve the base. Wait for the animation set. Download the ZIP. Install it.',
        'The whole flow takes a few minutes and needs no art background.',
      ]},
      { heading: 'Custom pets vs preset pets', paragraphs: [
        'Preset pets are shared by everyone. Custom pets come from your own photo, so they are unique to you.',
        'For branding or personal use, custom is worth the extra step.',
      ]},
      { heading: 'Changing and managing pet styles', paragraphs: [
        'You can regenerate a pet with a new style prompt at any time. Keep the originals in a pets library so you can compare.',
        'Limit the color palette for a clean retro look, and keep prompts short.',
      ]},
      { heading: 'Use cases beyond Codex', paragraphs: [
        'AI pets work as Discord avatars, game placeholders, stream mascots, and social icons.',
        'Because the output is a spritesheet, it drops into many tools without conversion.',
      ]},
      { heading: 'Common mistakes to avoid', paragraphs: [
        'Do not use a busy group photo. One clear subject gives the best base.',
        'Do not over-prompt the style. Let the grid simplify the art.',
        'Do not skip the install step. The pet only appears after you restart the app.',
      ]},
      { heading: 'The future of AI pet generators', paragraphs: [
        'Expect tighter app integration, more animation states, and better prompt control through 2026.',
        'The core value stays the same: turn a photo into a companion you actually recognize.',
      ]},
    ],
  },
  {
    slug: 'how-photo-quality-affects-pixel-pet',
    title: 'How Photo Quality Affects Your Pixel Pet Result',
    description:
      'Why a blurry, dark, or busy photo gives you a worse pixel pet. A practical pixel pet quality guide: what to check before upload, how much the source photo matters, and the fastest fixes.',
    date: '2026-08-12',
    author: 'PetGen',
    keywords: [
      'pixel pet quality',
      'photo to pixel pet quality',
      'pixel pet blurry',
      'best photos for pixel pet',
      'pixel pet photo tips',
      'Codex pet photo quality',
    ],
    related: ['how-to-install-codex-pet', 'codex-pet-free-plan-explained'],
    faq: [
      { question: 'Does photo quality really matter for a pixel pet?', answer: 'It matters more than people expect. A clear, well-lit, single-subject photo gives the pixel art generator a clean silhouette to work from. A blurry or busy photo forces it to guess, and the output looks smeared or loses the pet entirely.' },
      { question: 'What makes a photo bad for pixel art?', answer: 'Three things: motion blur, low resolution, and busy backgrounds. Blur smears the edges the pixel grid needs, low resolution removes detail before the generator starts, and busy backgrounds confuse the subject detection.' },
      { question: 'Can I fix a blurry photo before uploading?', answer: 'Sometimes. Sharpen it slightly, boost contrast, and crop to the subject first. If the original is too small or too blurry, no filter will recover detail that was never captured.' },
      { question: 'What is the best photo to use?', answer: 'A front-facing shot of one pet, head and shoulders or full body, in even lighting, with a plain background. Same rules as a good passport photo, just for your companion.' },
    ],
    sections: [
      {
        heading: 'Why the source photo sets the ceiling',
        paragraphs: [
          'Every pixel pet starts as a regular photo. The generator reads that photo, finds the subject, and rebuilds it as pixel art. Whatever the photo captures, or fails to capture, becomes the raw material. Garbage in, garbage out is not a slogan here, it is literally how the pipeline works.',
          'The pixel grid keeps the output small, which hides a lot of detail. But it cannot hide a wrong shape. If the photo is blurry, the generator sees unclear edges and the pet comes out looking smeared. If the subject is half in shadow, the dark side of the pet just disappears.',
        ],
      },
      {
        heading: 'The three photo problems that wreck results',
        paragraphs: [
          'First, motion blur. Pets move. A photo taken mid-wag is almost always soft, and that softness becomes wobbly pixel edges. Second, low resolution. A 300px thumbnail does not contain enough information for the generator to reconstruct a clean outline. Third, busy backgrounds. A carpet with a pattern, a crowd, or a cluttered shelf confuses subject detection, and the pet comes back with extra blobs of color attached.',
        ],
        list: [
          'Motion blur: soft edges become wobbly pixel lines',
          'Low resolution: detail is missing before generation starts',
          'Busy background: the subject detector picks up the wrong shapes',
        ],
      },
      {
        heading: 'What to check before you upload',
        paragraphs: [
          'Run through this list in about thirty seconds. Is the photo sharp when you zoom in? Is the pet taking up most of the frame? Is the lighting even, no deep shadows or blown-out highlights? Is the background plain? If yes to all four, you are in the top tier of source material and the result will show it.',
          'The best photos for pixel pet generation are the boring ones: one subject, head and shoulders, even light, plain wall behind. The same rules that make a good passport photo also make a good pixel pet, just swap the purpose.',
        ],
        list: [
          'Zoom in: edges should be crisp, not smeared',
          'Subject should fill most of the frame',
          'Even lighting, no deep shadows',
          'Plain background, one subject only',
        ],
      },
      {
        heading: 'Fast fixes when the photo is not great',
        paragraphs: [
          'You do not always have a perfect photo, especially with a wiggly dog or a cat that refuses to sit still. Run the photo through a quick edit first: crop to the subject, raise contrast slightly, sharpen a touch. Then retake if you can, a second try with better light usually beats any filter.',
          'If the original is genuinely too small or too blurry, no amount of editing brings back detail that was never recorded. Take a new photo. It takes two minutes and it is the highest-leverage fix there is.',
        ],
      },
      {
        heading: 'What quality looks like in the output',
        paragraphs: [
          "With a good source photo, the pixel pet keeps the pet's recognizable features: the ear shape, the eye color, the marking pattern. With a bad one, you get a generic blob that could be any animal. The difference is usually visible on the very first generation.",
          'The takeaway is simple. Photo quality is the single biggest factor you control in the whole pixel pet pipeline. Pick a clear photo, check the four points above, and the generator has everything it needs.',
        ],
      },
    ],
  },  {
    slug: 'codex-pet-9-animation-states',
    title: 'The 9 Animation States of a Codex Pet, Explained',
    description:
      'What your pixel pet actually does: idle, walking, running, and six more. A codex pet animation guide that walks through all nine states, when each one triggers, and why the idle loop matters more than the flashy moves.',
    date: '2026-08-13',
    author: 'PetGen',
    keywords: [
      'codex pet animation',
      'codex pet 9 animation states',
      'codex pet states running ready',
      'codex pet idle animation',
      'pixel pet animation states',
      'desktop pet animation guide',
    ],
    related: ['animation-states-explained', 'how-to-install-codex-pet'],
    faq: [
      { question: 'How many animation states does a Codex pet have?', answer: 'Nine. Idle, walking, running, jumping, sitting, sleeping, happy, working, and a special celebration state. Each one is a separate loop of frames that the pet switches between based on what you are doing.' },
      { question: 'Why does the idle animation matter?', answer: 'Because it is the state your pet is in most of the time. A well-made idle loop is subtle, a breathing rhythm, a tail flick, a blink. It is the difference between a sticker on your desktop and something that feels alive.' },
      { question: 'Do all pixel pets have all nine states?', answer: 'No. The nine states are the full spec, but individual pets ship with a subset. Simple pets may only have idle, walk, and happy. The state list is what the generator supports, not a guarantee of what every pet includes.' },
      { question: 'When does the running state trigger?', answer: 'It usually maps to fast window interaction, like when you drag the pet window quickly, or in gamified pets, when an activity timer is running low. It is the fastest loop in the set and the one with the most frames.' },
    ],
    sections: [
      {
        heading: 'Why the state list matters for a pixel pet',
        paragraphs: [
          'A pixel pet is not one animation, it is a set of loops the pet switches between. Each state is a small sequence of frames designed for one mood or action. The codex pet 9 animation states are the full catalog: idle, walking, running, jumping, sitting, sleeping, happy, working, and celebration.',
          'The state machine decides which loop plays. Idle when you are typing, working when the editor is busy, happy when you interact with it. Knowing the list tells you what to expect, and why your pet is doing that thing right now.',
        ],
      },
      {
        heading: 'Idle and the art of standing still',
        paragraphs: [
          'Idle is where most of the design effort goes. It needs to hold your attention without demanding it. A good codex pet idle animation is a breathing motion, a subtle head turn, an occasional blink or tail flick. It repeats every few seconds and should never look like a frozen image.',
          'The trick with idle is restraint. The frames are close together, small movements, no big jumps. When done right you barely notice the loop, which is exactly the point. The pet feels present, like something sharing your desk.',
        ],
        list: [
          'Idle: subtle breathing and blinking loop',
          'Walking: slow movement across the screen',
          'Running: fast frames for quick motion',
          'Jumping: a short hop, often after interaction',
          'Sitting: rest pose, smaller hitbox',
          'Sleeping: slow, closed-eye loop',
          'Happy: celebratory bounce after a positive event',
          'Working: busy animation, often synced to activity',
          'Celebration: the rarest state, special event only',
        ],
      },
      {
        heading: 'Working state and the productivity angle',
        paragraphs: [
          'The working state is the one that turns a toy into a companion. It triggers when the machine is busy, a build running, a download in progress, a long render. The pet appears to be doing something alongside you, which sounds gimmicky and somehow is not. A small creature visibly working while your terminal scrolls makes the wait feel shared.',
          'This state is also where codex pet states running ready comes from. The pet sits in a ready pose during normal work and switches to a faster running loop when things are moving quickly. It is subtle feedback about system activity, delivered as personality.',
        ],
      },
      {
        heading: 'How states combine into a real pet',
        paragraphs: [
          'Most pets do not expose all nine states at once. The generator assigns a subset based on the source photo and the personality it detects. A sleepy cat photo might ship with idle, sitting, and sleeping. A high-energy dog photo gets walking, running, jumping, and happy.',
          'The state list is the full vocabulary the system knows. Your pet will use part of it, and that is fine. The ones it has, it has well. Check which states your pet supports on the generation screen, it is listed right there.',
        ],
      },
    ],
  },
  {
    slug: 'turn-your-cat-into-a-codex-pet',
    title: 'Turn Your Cat into a Codex Pet: Full Workflow',
    description: 'Turn your cat into a Codex pet in about five minutes. A full workflow for making a cat pixel pet and installing your cat codex companion in OpenAI Codex, no design skills or sign-up needed.',
    date: '2026-08-14',
    author: 'PetGen',
    keywords: [
      'cat codex pet',
      'cat pixel pet',
      'cat codex companion',
      'make my cat a codex pet',
      'turn cat into codex pet',
      'cat desktop pet',
      'codex pet from photo'
    ],
    related: [
      'turn-photo-into-pixel-art',
      'make-your-first-codex-pixel-pet'
    ],
    faq: [
      {
        question: 'Can I use a photo with more than one cat?',
        answer: 'Stick to one cat per pet. The generator keys off a single subject, and a second cat in frame muddies the silhouette. Make a separate pet for each cat if you want both.'
      },
      {
        question: 'Does my cat need to look at the camera?',
        answer: 'Not strictly, but a face-on shot gives the best idle animation. Side profiles still work, they just read as a different pose.'
      },
      {
        question: 'Will the pet change my Codex model or settings?',
        answer: 'No. The pet is a separate spritesheet that Codex renders as an overlay. Your agent, model, and config stay exactly as they were.'
      },
      {
        question: 'Is it really free?',
        answer: 'The starter plan covers your first pet at no cost. Extra pets and higher-resolution sprites are paid, but turning one cat into a pixel pet costs nothing to try.'
      }
    ],
    sections: [
      {
        heading: 'Why a cat pixel pet is worth the five minutes',
        paragraphs: [
          'Most desktop pets are generic blobs wearing someone else\'s face. A cat pixel pet is different because it is actually your cat. The generator reads a photo of your pet, pulls out the silhouette and the markings, and rebuilds it as a tiny sprite with a few animation loops. You get idle, walking, and a couple of mood states that read as your cat, not a stock animal. That small difference is why people redo it for every pet in the house.'
        ]
      },
      {
        heading: 'What you need before you start',
        paragraphs: [
          'You do not need a fancy camera. A phone photo shot in daylight is enough. The one thing that matters is the cat filling most of the frame with a background that is not busy.',
          'If you can make out the whiskers and the eye color, the generator has enough to work with. A blurry or crowded shot forces it to guess, and the result looks like any cat instead of yours.'
        ],
        list: [
          'A clear, well-lit photo of your cat, ideally head and shoulders',
          'A plain background with no clutter behind the cat',
          'The OpenAI Codex desktop app already installed',
          'About five minutes of your time'
        ]
      },
      {
        heading: 'Step by step: make my cat a codex pet',
        paragraphs: [
          'Uploading is the only step where you actually do anything. After that the generator handles the pixel work. I usually watch the first pass and run it once more if the markings look off. A second try with a brighter photo clears up most problems.'
        ],
        list: [
          'Open codexpetgenerator.com and upload your cat\'s photo',
          'Let the generator find the subject and sketch a base sprite',
          'Approve the base. The tool builds the animation states from there',
          'Download the package. It contains spritesheet.webp and pet.json',
          'Drop the folder into Codex\'s pets directory and restart the app'
        ]
      },
      {
        heading: 'What the cat codex companion looks like in motion',
        paragraphs: [
          'Once it is installed, your cat codex companion shows up as a small animated sprite. It idles with a slow blink, walks when you switch windows, and perks up when you poke it. The states are pulled from the photo\'s mood, so a lazy afternoon cat ships with more sitting and sleeping loops. A kitten photo gets more running and jumping. It is a small touch, but it makes the pet feel like yours rather than a demo.'
        ]
      },
      {
        heading: 'Installing your cat codex companion',
        paragraphs: [
          'macOS: mkdir -p ~/.codex/pets && cp -r ~/Downloads/my-cat-pet ~/.codex/pets/',
          'Windows (PowerShell): Copy-Item -Recurse "$env:USERPROFILE\\Downloads\\my-cat-pet" "$env:USERPROFILE\\.codex\\pets\\"',
          'Restart Codex fully. A pet that does not appear is almost always a folder name that does not match pet.json, so check that first.'
        ]
      },
      {
        heading: 'If something goes wrong',
        paragraphs: [
          'Most install failures are one-line corrections. The usual miss is copying the wrong folder. Once it sits in the right place, your cat stays on the desktop for every session.'
        ],
        list: [
          'Pet not showing: folder name mismatch, rename the folder to match pet.json',
          'Blank square: spritesheet missing, re-download the package',
          'Permission error on macOS: add sudo before cp'
        ]
      }
    ]
  },
  {
    slug: 'dog-pixel-pet-guide',
    title: "Turn Your Dog into a Codex Pet: The Full Photo Guide",
    description: "Turn your dog into a codex pet in a few minutes. A complete dog pixel pet workflow: which photos work best, how to shoot one, and how to install your dog codex companion in OpenAI Codex.",
    date: '2026-08-15',
    author: 'PetGen',
    keywords: [
      'dog codex pet',
      'dog pixel pet',
      'dog codex companion',
      'make my dog a codex pet',
      'dog desktop pet',
      'codex pet from dog photo'
    ],
    related: [
      'turn-your-cat-into-a-codex-pet',
      'best-photos-for-pixel-pet-generator'
    ],
    faq: [
      {
            "question": "Does the dog need a front-facing photo?",
            "answer": "Not required, but front shots give the best idle animation and the clearest facial features. Side views work for long-muzzled breeds, though the far ear may disappear."
      },
      {
            "question": "Will a dark-coated dog convert?",
            "answer": "Yes. Stand it in front of a light background and skip harsh frontal light. That keeps the outline readable."
      },
      {
            "question": "What does my dog codex companion do?",
            "answer": "Idles with a tail wag, walks between windows, reacts to clicks. Animation states follow the photo's mood, a sleepy dog gets more sleep loops, an active one more movement."
      },
      {
            "question": "How is this different from the cat version?",
            "answer": "Same pipeline, but dogs have fluffier coats, messier colors, and harder-to-read dark features, so the photo needs better light and background. Done well, it has more fur-charm than a cat sprite ever could."
      }
],
    sections: [
    {
        "heading": "Why dogs are harder than cats",
        "paragraphs": [
            "A cat has a clean outline and clear pattern borders. The generator has an easy job. Dogs fight back: long coats end in a fringe of fur, short coats smear color blocks into each other. A dark-haired dog with a dark nose and dark eyes is the worst case, everything blends into silhouette."
        ],
        "list": [
            "Long coats (Golden, Border Collie, Corgi): the fur is the feature and the problem, fuzzy edges, but pixelation turns that fuzz into charm",
            "Short coats (Labrador, Frenchie): big color blocks, need even light to stay separate",
            "Dark coats: stand the dog in front of a light wall, or the background sinks into the dog",
            "Dark nose plus dark eyes: skip frontal flash, it throws shadows that eat the face"
        ]
    },
    {
        "heading": "Front view or side view?",
        "paragraphs": [
            "Front wins. A pixel sprite lives or dies by the head, and a front photo places the eyes and nose where the generator can read them. Your dog pixel pet gets the most expressive idle animation from a straight-on shot. Side views work for long-muzzled breeds, with one catch: the far ear tends to vanish, and the head can look lopsided.",
            "My own Corgi is a front-view case. Two big ears and a round face read instantly in a pixel grid."
        ]
    },
    {
        "heading": "How to shoot a photo that converts well",
        "paragraphs": [
            "No pro gear. A phone in daylight does it. Three things matter: One more trick: hold a treat and wait for the look-up. Prick-eared dogs like GSDs and Huskies are complete only with ears up. Drop-eared dogs like Goldens and Cockers carry their ears along the sides of the head when they look up, which beats the top-down look by a mile."
        ],
        "list": [
            "Light: window light or a cloudy sky, spread evenly, no shadows over the eyes",
            "Angle: camera level with the dog's eyes, top-down shots flatten the face and crush the muzzle",
            "Background: a plain wall or grass, and the darker the coat, the lighter the background needs to be"
        ]
    },
    {
        "heading": "What you get after conversion",
        "paragraphs": [
            "Installed, your dog codex companion lives in the corner of the desktop. A slow tail-wag idle, a walk when you switch windows, a reaction when you click. The animation states follow the photo's vibe: a napping dog ships with more sleep loops, a high-energy dog gets more walk and jump. In daily use it's good for a glance when a build drags and a screenshot for the group chat. My coworkers keep asking how I did it."
        ]
    },
    {
        "heading": "The steps that work",
        "paragraphs": [
            "macOS: `mkdir -p ~/.codex/pets && cp -r ~/Downloads/my-dog-pet ~/.codex/pets/` Windows (PowerShell): `Copy-Item -Recurse \"$env:USERPROFILE\\Downloads\\my-dog-pet\" \"$env:USERPROFILE\\.codex\\pets\\\"` No pixel dog on the desktop? The folder name almost always doesn't match pet.json. That's the bug."
        ],
        "list": [
            "Open codexpetgenerator.com and upload a front-facing photo",
            "The generator finds the subject and sketches a base sprite. Zoom in before downloading, check the face and the coat colors",
            "Not right? Try a brighter photo. Usually one retake fixes it",
            "Approve and download the package: spritesheet.webp + pet.json",
            "Drop the folder into Codex's pets directory and restart the app"
        ]
    }
]
  },

  {
    slug: 'avatar-to-codex-pet',
    title: "Turn Your Avatar into a Codex Pet for Your Desktop",
    description: "Make an avatar to codex pet from a profile picture or anime icon in minutes. A full avatar pixel pet workflow: which images work, what to fix, and how to install your anime avatar pet in OpenAI Codex.",
    date: '2026-08-16',
    author: 'PetGen',
    keywords: [
      'avatar to codex pet',
      'avatar pixel pet',
      'profile picture to pet',
      'anime avatar pet',
      'pfp to codex pet',
      'codex pet from avatar'
    ],
    related: [
      'turn-your-cat-into-a-codex-pet',
      'dog-pixel-pet-guide'
    ],
    faq: [
      {
            "question": "Can I use an anime avatar as a codex pet?",
            "answer": "Yes, and it converts better than most real photos. Anime faces have flat colors, strong outlines, and no motion blur, exactly what the pixel pipeline reads well. Keep the face large in the frame and pick an image without a busy background."
      },
      {
            "question": "What resolution should the avatar be?",
            "answer": "Bigger is better up to the upload cap. A 512x512 or 1024x1024 crop is plenty. Tiny 128x128 icons make the generator guess the face, and the sprite comes out blurry."
      },
      {
            "question": "Will my profile picture turn out well?",
            "answer": "Usually yes if the face takes up most of the frame and the background is simple. Selfies work better than group shots. A photo with a busy background gets cleaned first, so you may lose detail around the edges."
      },
      {
            "question": "What if my avatar is stylized or low-res?",
            "answer": "Try the original art file instead of a compressed social-media export. Re-exporting at higher quality often fixes the worst results. Chibi and flat-color styles convert especially well."
      }
],
    sections: [
    {
        "heading": "Why an avatar makes a good pixel pet",
        "paragraphs": [
            "An avatar is already a distilled version of a person or character: one face, one expression, no background noise. The pixel pipeline loves that. When I fed my own PFP into the generator, the sprite came out looking like a tiny arcade version of me, same hair, same glasses, instantly recognizable to anyone who knows my handle.",
            "Real photos carry shadows, motion blur, and clutter. Avatars strip all of that. Flat colors and clean outlines are exactly what pixel art needs, which is why an anime avatar pet usually beats a phone photo on the first try."
        ]
    },
    {
        "heading": "Which avatars convert best",
        "paragraphs": [
            "Not all PFPs are equal. The generator wants one clear subject with a readable face. Ranked by how well they turn out:"
        ],
        "list": [
            "Flat-color anime and chibi art: near-perfect, strong outlines, no texture noise",
            "Illustrated avatars with simple backgrounds: great, clean the background and you are done",
            "Real-photo selfies with plain walls: good, same rules as any pet photo",
            "Photos with busy backgrounds or multiple people: the generator cleans the frame and you may lose the edges",
            "Low-res or heavily compressed icons: weak, the face gets guessed instead of read"
        ]
    },
    {
        "heading": "How to prep an avatar for the best result",
        "paragraphs": [
            "You do not need design software. Five minutes of prep changes the output more than anything else. If your avatar is a crop of a bigger piece, re-crop it so the face fills most of the square. If it came from social media, dig up the original art file instead, re-uploads get recompressed and the pixel pipeline notices.",
            "One tip from my own failed attempts: remove text. Watermarks, usernames, and date stamps near the face all get pixelated into the sprite. Crop or erase them first and the sprite stays clean."
        ]
    },
    {
        "heading": "The conversion flow",
        "paragraphs": [
            "Upload the avatar, let the generator sketch the base sprite, and zoom in before approving. For an anime avatar pet the face check matters most: eyes aligned, hair shape intact, no weird merge between the chin and the collar. If the eyes come out wrong, try a brighter or higher-res image, one retake usually fixes it."
        ]
    },
    {
        "heading": "Installing your avatar pet",
        "paragraphs": [
            "Approve and download the package, spritesheet.webp plus pet.json. Then drop the folder into Codex's pets directory and restart the app."
        ],
        "list": [
            "macOS: `mkdir -p ~/.codex/pets && cp -r ~/Downloads/avatar-pet ~/.codex/pets/`",
            "Windows (PowerShell): `Copy-Item -Recurse \"$env:USERPROFILE\\Downloads\\avatar-pet\" \"$env:USERPROFILE\\.codex\\pets\\\"`",
            "Open codexpetgenerator.com and upload your avatar",
            "Check the face in the preview, especially eyes and hair",
            "Not right? Try the original art file or a brighter crop, then re-upload",
            "Approve, download, drop into the pets folder, restart Codex"
        ]
    }
]
  }
,
  {
    slug: 'codex-pet-upload-limit',
    title: "Before You Upload: The 10MB Limit and How to Stay Under It",
    description: "Codex pet uploads cap at 10MB, and most phone photos sail past it. This guide covers the codex pet upload limit in practice, how to compress a photo under 10MB without wrecking the pixels, and what the generator actually needs.",
    date: '2026-08-17',
    author: 'PetGen',
    keywords: [
      'codex pet upload limit',
      'codex pet max size 10mb',
      'compress photo pixel pet',
      'reduce image size upload',
      'pet image too large',
      'codex pet photo size'
    ],
    related: [
      'turn-your-cat-into-a-codex-pet',
      'avatar-to-codex-pet'
    ],
    faq: [
      {
            "question": "What is the codex pet upload limit?",
            "answer": "The upload cap is 10MB per image. Photos from modern phones usually land between 2MB and 8MB, so most work fine as-is. Raw exports, screenshots of huge canvases, and 48MP phone originals are what trip the limit."
      },
      {
            "question": "Will compressing my photo hurt the pet result?",
            "answer": "Not if you stay sensible. The pixel pipeline reads structure, not megabytes. Resizing to 1024px on the long edge and saving as JPG at 85-90% quality keeps the face details and drops the size dramatically. Avoid re-compressing a JPG twice."
      },
      {
            "question": "What image types are accepted?",
            "answer": "JPG, PNG, and WebP cover the practical range. PNG is best for logos and flat-color art, JPG for photos, WebP as the modern middle ground. A 10MB limit on a PNG usually means the source is huge and worth resizing anyway."
      },
      {
            "question": "What happens if my file is over 10MB?",
            "answer": "The upload is rejected before it costs you anything. Resize the longest edge to around 1024-1600px, re-export, and retry. That fix clears nearly every over-limit case."
      }
],
    sections: [
    {
        "heading": "Why the limit exists",
        "paragraphs": [
            "Ten megabytes is generous for a pet sprite and tight for a camera. The limit exists because the generator does real work on your image in the browser: it has to decode, analyze, and pixelate before you ever see a preview. A 40MB raw photo would make that step crawl on a mid-range phone.",
            "The practical upshot: the codex pet upload limit is rarely the wall you hit. Most people hit it with 48MP phone originals, screenshots of enormous canvases, or PNG exports of high-res art. All three are fixable in under a minute."
        ]
    },
    {
        "heading": "Check the size before you upload",
        "paragraphs": [
            "Five seconds of checking beats five minutes of guessing. On your phone, the file size usually sits next to the photo in the info panel. On a desktop, right-click and look at Properties on Windows or Get Info on macOS.",
            "If it is over 10MB, do one of these, in order of preference:"
        ],
        "list": [
            "Resize the longest edge to 1024px — the generator only needs the face, not the full resolution",
            "Save as JPG at 85-90% quality instead of PNG for photos",
            "Use WebP if your tool supports it, smallest size at same visual quality",
            "Skip the raw format entirely for this use case"
        ]
    },
    {
        "heading": "The resize-and-compress recipe",
        "paragraphs": [
            "A phone photo at 4000x3000px weighs 4-8MB. The same photo at 1024px on the long edge weighs 200-500KB at JPG quality 85. That is a 10x reduction with no visible difference at sprite scale, because the pet sprite is 1536x1872 at most and usually displayed far smaller.",
            "One warning: do not take a compressed JPG and re-save it as another JPG. Each pass adds artifacts. Resize from the original, or from the highest-quality version you still have."
        ]
    },
    {
        "heading": "What the generator actually needs",
        "paragraphs": [
            "The pixel pipeline wants a clear face, decent lighting, and a simple background — not maximum resolution. A 800px wide, well-lit photo of a face will beat a 48MP blurry one every time.",
            "So when you are under the limit but the result is weak, the fix is rarely 'bigger file'. It is better light, a closer crop, or a cleaner background. Size is a gate; quality of the subject is the actual lever."
        ]
    },
    {
        "heading": "Upload and go",
        "paragraphs": [
            "Once your file is under 10MB, upload, preview the sprite, and zoom in on the face before approving. If the eyes or hair outline look off, try a brighter or higher-res source and re-upload. The retake costs nothing."
        ],
        "list": [
            "Check file size in the photo info panel first",
            "Resize to 1024px long edge if over 10MB",
            "JPG at 85-90% for photos, PNG for flat-color art",
            "Preview and zoom in on the face before approving",
            "Open codexpetgenerator.com and start over with the fixed image"
        ]
    }
]
  },
  {
    slug: 'codex-pet-pro-vs-unlimited',
    title: "Pro vs Unlimited: Which Codex Pet Plan Is Right for You",
    description: "codex pet pricing comes down to three tiers: free, Pro, and Unlimited. This guide compares the codex pet pro plan and codex pet unlimited plan on limits, resolution, and commercial rights, so you can decide whether a codex pet subscription is worth it before you pay.",
    date: '2026-08-18',
    author: 'PetGen',
    keywords: [
      'codex pet pricing',
      'codex pet pro plan',
      'codex pet unlimited plan',
      'codex pet subscription worth it',
      'codex pet plans',
      'codex pet free vs paid',
    ],
    related: [
      'codex-pet-upload-limit',
      'turn-your-cat-into-a-codex-pet',
      'dog-pixel-pet-guide',
    ],
    faq: [
      {
        question: "What is the difference between the codex pet pro plan and Unlimited?",
        answer: "Pro gives you 15 generations a month at HD resolution for $9. Unlimited removes the monthly cap, adds 4K export, and includes a commercial license for $29 a month. Choose Pro for regular personal use; choose Unlimited if you sell sprites or generate in volume.",
      },
      {
        question: "Is the codex pet free tier enough to make a real pet?",
        answer: "Yes. Starter gives three generations, which is enough to upload a photo, preview the sprite, and download a working pet.json and spritesheet. You only pay once you want more attempts, higher resolution, or a commercial license.",
      },
      {
        question: "How do I know if a codex pet subscription is worth it?",
        answer: "Start free. If you hit the three-generation cap and still want more pets, move to Pro. If you sell sprites or need 4K and a license, go straight to Unlimited. Most casual users never need to pay at all.",
      },
    ],
    sections: [
      {
        heading: "What the three tiers actually give you",
        paragraphs: [
          "codex pet pricing is simpler than it looks: three tiers, and only two of them cost money. Starter is free with three generations. Pro is $9 a month for 15 generations and HD output. Unlimited is $29 a month with no cap, 4K export, and a commercial license. The free tier is not a teaser that breaks at the finish line. It is the real product, just limited. I tell people to start there and only upgrade once they actually hit the wall.",
        ],
        list: [
          "Starter - free, 3 generations, standard resolution, personal use only",
          "Pro - $9/month, 15 generations, HD output, personal use",
          "Unlimited - $29/month, unlimited generations, 4K export, commercial license included",
        ],
      },
      {
        heading: "The codex pet pro plan: who it fits",
        paragraphs: [
          "Pick the codex pet pro plan if you make pets regularly but not all day. Fifteen generations a month covers a pet for your cat, your dog, a couple of friends, and the odd retake when the face comes out wrong. The HD resolution matters more than people expect. At sprite scale the difference is subtle, but if you ever zoom in, crop, or print, HD holds up where standard falls apart.",
          "Where Pro runs out is volume. If you are building a whole cast of characters, or you run a shop that sells pet sprites, 15 a month disappears fast. You will feel the cap within a week.",
        ],
      },
      {
        heading: "The codex pet unlimited plan: who it fits",
        paragraphs: [
          "The codex pet unlimited plan is for people who generate constantly. The headline feature is no monthly cap, but the quiet winner is 4K export. It future-proofs your sprites if you move to a bigger display or a different tool later. The commercial license is the other reason: if you sell themes, stickers, or stream overlays built from the pet, you need it.",
          "The math is straightforward. If you would buy Pro three months in a row, Unlimited pays for itself around month four. If you are a casual user who makes one pet and moves on, it is money sitting on the table.",
        ],
      },
      {
        heading: "Is a codex pet subscription worth it?",
        paragraphs: [
          "A codex pet subscription is worth it only if you generate past the free limit and you care about resolution or rights. For most first-timers, the honest answer is no. Start free, make one pet, and decide after you have actually held it in your Codex. The trap is paying for Unlimited out of excitement, then generating twice and forgetting about it.",
          "Habit beats horsepower here. Pro is the safe middle for nearly everyone: enough room to play, cheap enough to forget. Save Unlimited for when you have a reason, not a feeling.",
        ],
      },
      {
        heading: "How I would pick",
        paragraphs: [
          "If you are stuck, here is the shortcut I give friends. Made one pet and stopped? Stay free, you owe nothing. Generating a few pets a month and want them crisp? Pro. Selling sprites or building a big cast? Unlimited. Still deciding? Start free, then compare the tiers at /pricing before you commit.",
        ],
        list: [
          "Casual, one pet: Starter (free)",
          "A few pets a month, want HD: Pro",
          "Selling sprites or need 4K and a license: Unlimited",
          "Not sure yet: start free, decide after one pet",
        ],
      },
      {
        heading: "Start with a photo, not a plan",
        paragraphs: [
          "When you are ready, head to codexpetgenerator.com and turn a photo into your first pet. If you want to see the output first, our cat guide at /blog/turn-your-cat-into-a-codex-pet and dog guide at /blog/dog-pixel-pet-guide walk through real results, and the upload guide at /blog/codex-pet-upload-limit covers keeping your file under the 10MB limit.",
        ],
      },
    ],
  }
  ,
  {
    slug: 'pixel-art-pet-trend',
    title: 'Why Pixel Art Pets Are Taking Over AI Desktops',
    description:
      'Pixel art pets exploded in 2026. Here is why the retro aesthetic took over AI coding companions, the cultural moment behind the trend, and what it means for the Codex pet ecosystem.',
    date: '2026-08-20',
    author: 'Codex Pet Generator',
    keywords: [
      'pixel art pet trend 2026',
      'why pixel pets are popular',
      'retro pixel aesthetic desktop',
      'pixel art history AI companion',
      'codex pet pixel art trend',
    ],
    sections: [
      {
        heading: 'The moment pixel pets went mainstream',
        paragraphs: [
          'Something shifted in mid-2026. One day pixel art companions were a niche hobby, and the next they were everywhere — Discord banners, GitHub profiles, desktop wallpapers, and now built directly into AI coding tools. The trend did not arrive overnight, but the timing was perfect: generative AI made it easy to turn any photo into a pixel pet, and the retro aesthetic filled a gap that photorealistic avatars never could.',
        ],
      },
      {
        heading: 'Why the retro aesthetic won',
        paragraphs: [
          'Pixel art carries nostalgia without feeling like a costume. It references the 8-bit and 16-bit era without demanding you live there. For a desktop companion that lives beside your code, that matters. A photorealistic pet looks like a sticker slapped on your IDE. A pixel pet looks like it belongs — small, deliberate, slightly playful.',
          'There is also a practical reason. Pixel art is lightweight. Spritesheet.webp files are small enough to load instantly, and the 9-state animation loop runs smoothly even on modest hardware. AI tools that generate pets need to be fast and lightweight, and pixel art delivers both.',
        ],
      },
      {
        heading: 'What drove the 2026 explosion',
        paragraphs: [
          'Three things converged. First, image generation models got good at preserving structure while stylizing — you could upload a clear photo and get a recognizable pixel pet, not a vague approximation. Second, Codex and similar tools added native pet support, giving the aesthetic a functional home. Third, social media made sharing effortless: a pixel pet in your corner of the screen is inherently shareable, and shareability is half the battle for any aesthetic trend.',
        ],
      },
      {
        heading: 'What this means for the Codex ecosystem',
        paragraphs: [
          'The pixel art pet trend is not a passing fad — it is a structural shift in how developers personalize their tools. Codex pets are not decorations; they are companions that sit beside you while you work. That intimacy makes the aesthetic choice matter more than it would for a wallpaper or a profile picture.',
          'For creators, the trend means more demand for quality pixel pets, more inspiration from the community, and more pressure to make your pet stand out. For users, it means the ecosystem is growing faster than ever, and there has never been a better time to make your first pet.',
        ],
      },
      {
        heading: 'How to join the trend',
        paragraphs: [
          'If you have not made a pixel pet yet, start with a clear photo of something you love — a pet, a character, a place. Upload it to codexpetgenerator.com, approve the base pixelation, and watch it come to life with 9 animation states. The whole process takes about a minute. Your pixel pet will then live in your Codex desktop, moving beside your code all day.',
        ],
        list: [
          'Pick a clear, well-lit photo (10MB limit)',
          'Upload to codexpetgenerator.com',
          'Approve the base pixelation',
          'Download the ZIP and install to ~/.codex/pets/',
          'Restart Codex and watch your pet come alive',
        ],
      },
      {
        heading: 'FAQ',
        paragraphs: [
          'What is the pixel art pet trend?',
          'The pixel art pet trend is the 2026 surge in popularity of small, animated pixel-art companions for AI coding tools like OpenAI Codex. It combines nostalgia, personalization, and AI generation into a single desktop experience.',
          '',
          'Why are pixel pets more popular than photorealistic avatars?',
          'Pixel art feels intentional and playful rather than generic. It is lightweight, loads instantly, and sits quietly beside your work without competing for attention. Photorealistic avatars often look like stickers; pixel pets look like they belong.',
          '',
          'Do I need to be an artist to make a pixel pet?',
          'No. You just need a clear photo. The AI handles the pixelation, animation states, and spritesheet generation. Your role is to pick the photo and approve the result.',
        ],
      },
    ],
  },
  {
    slug: 'rabbit-codex-pet',
    title: 'Rabbit Edition: Turn Your Bunny into a Codex Pet',
    description:
      'Own a rabbit and want to give them a second life on your Codex desktop? The Rabbit Edition of Codex Pet Generator turns your bunny into an adorable pixel-art companion. Learn which photos work best and how to install your new pet.',
    date: '2026-08-21',
    author: 'Codex Pet Generator Team',
    keywords: [
      'rabbit codex pet',
      'rabbit pixel pet',
      'bunny codex companion',
      'make my rabbit a codex pet',
      'rabbit pixel art guide',
    ],
    related: [
      'dog-pixel-pet-guide',
      'turn-your-cat-into-a-codex-pet',
      'codex-pet-upload-limit',
    ],
    sections: [
      {
        heading: 'Why rabbits make great Codex pets',
        paragraphs: [
          'Rabbits have distinct features that translate beautifully into pixel art: large ears, soft fur texture, and expressive eyes. The 192x208 cell format captures these characteristics while keeping animations smooth across all 9 states.',
          'Unlike dogs or cats, rabbits have a uniquely charming profile view that works exceptionally well as a desktop companion. Their gentle expressions and perky ears create an instantly recognizable pixel character.',
        ],
      },
      {
        heading: 'Best photos for rabbit pixel art',
        paragraphs: [
          'For the best results, use photos where your rabbit\'s face is clearly visible. Good lighting, a neutral background, and a direct or slightly angled pose all help. Side profiles work too — rabbits look charming in profile!',
          'Avoid photos where the rabbit is blurred, in shadow, or where the ears are folded back. The AI needs clear facial features to create an accurate pixel portrait.',
        ],
      },
      {
        heading: 'Generating your bunny pet',
        paragraphs: [
          'Upload your rabbit photo to codexpetgenerator.com. The AI analyzes facial features, fur patterns, and ear shape to create a faithful pixel portrait. Your pet will animate through walking, sitting, and idle states — perfect for desktop companionship.',
          'The whole process takes about a minute. Once generated, download the ZIP file and install it in ~/.codex/pets/. Restart Codex and your new rabbit companion will appear on your desktop.',
        ],
      },
      {
        heading: 'FAQ',
        paragraphs: [
          'Can I use a photo of my wild rabbit? Yes, but domesticated rabbit photos tend to produce better results due to clearer facial features.',
          'Does the pixel pet capture my rabbit\'s personality? The AI focuses on physical appearance, but the animation states can reflect your rabbit\'s typical behavior if you describe it in the prompt.',
          'How many rabbits can I generate? Free users get 3 generations per month. Pro users get 15. Unlimited users have no restrictions.',
        ],
      },
    ],
  },

  {
    slug: 'regenerate-codex-pet-right-way',
    title: "Don't Like Your Pet? How to Regenerate the Right Way",
    description:
      "Generated a Codex pet you're not happy with? Learn when to regenerate, common mistakes to avoid, and pro tips for getting the pixel companion you want.",
    date: '2026-08-22',
    author: 'Codex Pet Generator Team',
    keywords: [
      'regenerate codex pet',
      'codex pet regenerate',
      'approve base codex pet',
      'pixel pet redo',
      'codex pet not working',
    ],
    related: [
      'how-to-install-codex-pet',
      'codex-pet-upload-limit',
      'turn-your-cat-into-a-codex-pet',
    ],
    sections: [
      {
        heading: 'When to Regenerate',
        paragraphs: [
          "You uploaded your cat. The AI processed it. The result... isn't quite right. Maybe the ears are too pointy. Maybe the colors don't match. Maybe it just doesn't feel like your pet.",
          "First: don't delete it yet. Regenerating is easy, but doing it right saves you generations and gets you closer to the pixel companion you want.",
        ],
      },
      {
        heading: 'Signs You Should Regenerate',
        paragraphs: [
          'The pose is wrong (your pet was standing, the pet is sitting)',
          'Key features are missing (your cat\'s distinctive marking didn\'t carry over)',
          'The resolution looks blurry or pixelated in the wrong places',
          'The animation states look distorted',
          'If it\'s close but not perfect, you might edit the spritesheet manually — but that requires technical skill.',
        ],
      },
      {
        heading: 'The Regeneration Process',
        paragraphs: [
          'Go back to the upload page — don\'t start from scratch',
          'Keep your photo if it was good; only regenerate if the photo itself is the problem',
          'Adjust the prompt — describe what you want differently: "fluffy orange tabby sitting" vs "orange cat"',
          'Submit and wait — generation takes about 90 seconds',
          'Review the base — before approving, check all 9 animation states',
        ],
      },
      {
        heading: 'Common Regeneration Mistakes',
        paragraphs: [
          'Uploading the same photo again: If the first result was wrong because of the photo (bad angle, blurry, wrong lighting), uploading the same photo will give the same result. Take a new photo first.',
          'Not checking all states: The base image looks good, but one animation state is broken. Check walking, sitting, and idle before approving.',
          'Expecting perfection on first try: Even professional pixel artists iterate. Your first generation might be 70% there. The second, 85%. The third, 95%. Know when to stop.',
        ],
      },
      {
        heading: 'Pro Tips for Better Regenerations',
        paragraphs: [
          'Use consistent lighting — side lighting creates better pixel definition than flat overhead light',
          'Include the whole body — crops that cut off paws or tail will look odd',
          'Try different angles — if the front view didn\'t work, a 3/4 view might capture your pet better',
          'Check the preview — zoom in on the spritesheet before approving',
        ],
      },
      {
        heading: 'FAQ',
        paragraphs: [
          'How many times can I regenerate? Free users get 3 generations per month. Pro gets 15. Unlimited has no restrictions.',
          'Does regenerating use a new generation? Yes. Each regeneration counts as one generation from your quota.',
          'Can I edit an approved pet? Not after approval. You must regenerate before approving. Once approved, the pet is locked to your account.',
          'What\'s the best photo for regeneration? Well-lit, front or 3/4 view, neutral background, whole body visible.',
        ],
      },
    ],
  }
];
