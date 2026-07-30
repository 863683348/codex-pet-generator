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
  }
]
