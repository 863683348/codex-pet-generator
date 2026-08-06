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
      'A step-by-step guide to turning a pet photo into a pixel-art avatar using a free AI pet generator. No design skills required.',
    date: '2026-07-15',
    author: 'PetGen',
    keywords: [
      'turn photo into pixel art',
      'free pixel pet generator',
      'pet avatar generator',
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
      'Learn what a pet spritesheet and pet.json are, why Codex uses them, and how PetGen generates both.',
    date: '2026-07-15',
    author: 'PetGen',
    keywords: [
      'pet spritesheet',
      'pet.json',
      'OpenAI Codex pet',
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
      'Compare AI pet generators -- portrait apps, image generators, and desktop-companion tools.',
    date: '2026-07-15',
    author: 'PetGen',
    keywords: ['AI pet generator', 'best AI pet generators'],
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
      'Learn which photos work best with PetGen AI and how to prepare them for the best pixel-art conversion.',
    date: '2026-07-30',
    author: 'PetGen',
    keywords: [
      'best photos for pet generator',
      'pixel art pet tips',
      'pet photo guide',
      'ai pet generator tips',
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
]