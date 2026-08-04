export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  keywords: string[]
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
      "A Codex Pet is a pixel-art desktop companion inside OpenAI Codex. Two files (spritesheet.webp + pet.json), one folder (~/.codex/pets/), and it animates beside you while you code. Generate your own from a photo.",
    date: '2026-08-04',
    author: 'PetGen',
    keywords: [
      'codex pet',
      'what is codex pet',
      'codex desktop pet',
      'codex pet feature',
      'custom codex pet',
      'codex pet generator',
    ],
    sections: [
      {
        heading: 'What exactly is a Codex Pet?',
        paragraphs: [
          'A Codex Pet is a custom pixel companion installed inside the OpenAI Codex desktop app. It lives in your editor and animates beside you while you write code, adding a little personality to the terminal.',
          'Under the hood it is two files: spritesheet.webp (one sprite sheet with every animation frame, 9 states x 8 frames) and pet.json (the animation config that tells Codex how to play each frame). Install them into ~/.codex/pets/ and restart Codex — the pet appears.',
        ],
      },
      {
        heading: 'Why are people getting into Codex Pets?',
        list: [
          'A more human workspace — coding is lonely; a pixel buddy makes it feel different',
          'Personal expression — a custom pet generated from your own photo is unique to you',
          'Community momentum — CodexPets and similar communities list 800+ pets, and "turn my cat into a Codex pet" posts are trending',
          'Free / low-cost to start — the Starter plan gives 3 free generations',
        ],
      },
      {
        heading: 'Is a Codex Pet the same as an AI assistant?',
        paragraphs: [
          'No. A Codex Pet does not participate in code logic — it is purely visual companionship. The AI assistant does the real work; the pet is the morale support on your desktop. They coexist: the AI writes your code, the pet cheers you on.',
        ],
      },
      {
        heading: 'How do I get a Codex Pet?',
        list: [
          'Option 1: Use a ready-made one — download a pet package shared by the community, unzip into ~/.codex/pets/',
          'Option 2: Generate from a photo (recommended) — open codexpetgenerator.com, upload a photo, AI turns it into a pixel pet, download the ZIP, unzip and install. Takes minutes, no design skills.',
          'Option 3: Hand-craft it — draw your own sprite sheet + hand-write pet.json. High barrier, not recommended for beginners.',
        ],
      },
      {
        heading: 'Install in one line',
        paragraphs: [
          '1) Download the pet package ZIP. 2) Unzip to get a my-pet/ folder (spritesheet.webp + pet.json inside). 3) Move it to ~/.codex/pets/my-pet/. 4) Fully restart Codex — the pet appears.',
        ],
      },
      {
        heading: 'Frequently asked questions',
        list: [
          'Does a Codex Pet use extra resources? No — it only plays sprite animation; overhead is negligible.',
          'Can I rename/recolor my pet? Partially — customization is covered in later posts.',
          'Does every Codex version support pets? Check the official docs; most desktop builds support the ~/.codex/pets/ directory.',
          'Does generating a pet cost money? Starter is free (3 times); Pro is $9/month for 15 generations.',
        ],
      },
    ],
  },
  {
    slug: 'make-your-first-codex-pixel-pet',
    title: 'Make Your First Codex Pixel Pet from a Photo in 5 Minutes',
    description:
      'Turn a photo into your own Codex pixel pet in 5 minutes — no drawing, no code. Upload, preview, download the ZIP (spritesheet.webp + pet.json), install into ~/.codex/pets/. Starter plan is free for 3 generations.',
    date: '2026-08-05',
    author: 'PetGen',
    keywords: [
      'make codex pet',
      'create codex pet from photo',
      'first codex pet tutorial',
      'codex pet 5 minutes',
      'codex pixel pet generator',
    ],
    sections: [
      {
        heading: 'What you need',
        list: [
          'A clear photo (person or pet — front-facing, good light)',
          'A browser (Chrome / Edge / Safari)',
          'The Codex desktop app (for installing the pet)',
        ],
        paragraphs: [
          'Not needed: design software, coding skills, or payment.',
        ],
      },
      {
        heading: 'Four steps',
        paragraphs: [
          'Step 1: Open codexpetgenerator.com and click "Upload photo".',
          'Step 2: Upload a JPG / PNG / WebP. Tip: square crop, subject centered, clean background. The AI converts it to pixel art automatically.',
          'Step 3: Preview your pixel pet. When happy, click "Unlock animation ZIP" — the Starter plan includes 3 free generations.',
          'Step 4: Download the ZIP, unzip to a my-pet/ folder (spritesheet.webp + pet.json), move to ~/.codex/pets/, fully restart Codex — the pet appears!',
        ],
      },
      {
        heading: 'Better photo, cuter pet',
        list: [
          'Square first — crop close to 1:1 so the pet does not distort',
          'Subject centered — keep the face in the middle',
          'Clean background — solid or simple backgrounds pixelate better',
          'Do not go too small — at least 800x800 px to keep detail',
        ],
      },
      {
        heading: 'Frequently asked questions',
        list: [
          'Does it cost money? Starter gives 3 free generations; Pro is $9/month for 15.',
          'Which formats are supported? JPG / PNG / WebP — all processed locally in your browser, nothing uploaded.',
          'Where does my pet appear after install? Fully restart Codex and the pet animates in the UI.',
          'Can I change colors? Basic customization is coming; Pro unlocks more options.',
        ],
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
]