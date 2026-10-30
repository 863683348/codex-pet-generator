export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  keywords: string[]
  related?: string[]
  faq?: { question: string; answer: string }[]
  // Optional HowTo markup for step-by-step tutorials. Emits schema.org/HowTo
  // so Google can render the steps directly in results. Only set this on posts
  // that are genuinely a linear procedure — misusing it risks a manual action.
  howTo?: { name: string; steps: string[] }
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
    faq: [
      {
        question: 'How do I install a custom pet in Codex?',
        answer: 'Download the ZIP from PetGen, extract it, and copy the folder into ~/.codex/pets/ on macOS or %USERPROFILE%\.codex\pets\ on Windows. Then fully restart Codex (Cmd+Q on macOS, close and reopen on Windows). Your pet should appear on your desktop.',
      },
      {
        question: 'Why is my Codex pet not showing after installation?',
        answer: 'The most common cause is a folder name mismatch. The folder name in ~/.codex/pets/ must exactly match the "name" field in pet.json. Check that your folder is named correctly and restart Codex completely.',
      },
      {
        question: 'Does Codex pet installation affect my OpenAI model?',
        answer: 'No. Codex pets are purely cosmetic desktop companions. They do not modify your coding model, change your prompts, or affect your API usage in any way. Your Codex AI remains exactly the same.',
      },
      {
        question: 'Can I install multiple pets in Codex?',
        answer: 'Yes! You can have multiple pets by creating separate folders in ~/.codex/pets/. Each folder should contain its own spritesheet.webp and pet.json. Codex will display them as selectable companions.',
      },
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
      'spritesheet dimensions',
      'codex pet animation states',
      'pet.json schema',
      '1536x1872 spritesheet',
      'spritesheet grid layout',
    ],
    related: [
      'codex-pet-9-animation-states',
      'how-to-install-codex-pet',
      'codex-pet-not-showing-fixes',
      'codex-pet-image-formats-jpg-png-webp',
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
          'A spritesheet is a single image containing every frame of animation in a grid. Instead of loading 72 separate files, Codex opens one image and reads rectangular slices out of it in order. That is why a pet package is only two files: the sheet itself and a small JSON file describing it.',
          'PetGen outputs a 1536x1872 transparent spritesheet with the exact grid Codex expects, and a pet.json that names the pet and points at the sheet. Put both in one folder, drop that folder into ~/.codex/pets (or %USERPROFILE%\\.codex\\pets on Windows), restart Codex, and the pet appears.',
        ],
      },
      {
        heading: 'The exact grid: 1536x1872',
        paragraphs: [
          'The numbers are not arbitrary. The sheet is 1536 pixels wide and 1872 pixels tall, divided into 9 rows of 8 columns. That gives 72 frames total, and each individual frame works out to 192x208 pixels.',
          'You can verify the arithmetic: 8 columns x 192px = 1536px wide, and 9 rows x 208px = 1872px tall. If a generator hands you a sheet with different dimensions, Codex will either crop it, stretch it, or skip the pet entirely — there is no auto-scaling fallback.',
        ],
      },
      {
        heading: 'The nine animation states',
        paragraphs: [
          'Each of the 9 rows is one animation state, and each row holds 8 frames that play as a loop. The standard set covers idle, walk, run, sit, sleep, eat, play, happy, and a special or reaction state.',
          'The idle row matters most in practice — it is what your pet does for the overwhelming majority of the time it is on screen. A pet with a charming idle animation and mediocre everything else still feels alive; the reverse feels broken.',
        ],
      },
      {
        heading: 'How Codex maps frames to motion',
        paragraphs: [
          'Codex treats the row index as the state and the column index as the frame number within that state. To play the walk cycle it reads row 1, then walks columns 0 through 7, loops back to 0, and keeps going until the state changes.',
          'This is why frame ordering is strict. Shuffling frames within a row produces a pet that twitches instead of moving, and no error is reported — the loader has no way to know the frames are out of order. If your pet looks like it is vibrating, suspect frame order first.',
        ],
      },
      {
        heading: 'pet.json, field by field',
        paragraphs: [
          'pet.json is deliberately small. The fields that matter are name (the identifier Codex uses and the value that must match the folder name), description (free text, shown in some UI surfaces), and the spritesheet reference (usually just the filename spritesheet.webp, resolved relative to the folder).',
          'The name field causes more failures than every other field combined. If the folder is my-cat-v2 but pet.json still declares name: "my-cat", the loader can refuse to mount the pet and will not tell you why. Copy the name value out of the JSON, rename the folder to match it exactly, and restart.',
        ],
      },
      {
        heading: 'Why WebP rather than PNG',
        paragraphs: [
          'The sheet is WebP because it supports a full alpha channel at a fraction of the file size of an equivalent PNG. A 1536x1872 sheet with transparency is large enough that the format choice is noticeable: WebP versions typically land in the tens of kilobytes where PNG would run several times larger.',
          'Smaller files load faster and redraw more cheaply, which matters for something sitting on your desktop all day. Codex supports WebP with alpha natively, so there is no compatibility tradeoff in using it.',
        ],
      },
      {
        heading: 'Four format mistakes that break a pet silently',
        paragraphs: [
          'These four account for most "the pet installed but nothing happened" reports. None of them produces an error message, which is what makes them hard to diagnose.',
        ],
        list: [
          'Wrong dimensions — the sheet is not exactly 1536x1872, so the 9x8 grid does not divide cleanly and frames land on the wrong boundaries.',
          'Missing or renamed file — the loader looks for spritesheet.webp by that exact name. A file called spritesheet (1).webp, or one still nested in a subfolder after unzipping, is invisible to it.',
          'Name mismatch — the folder name under ~/.codex/pets does not match the name field inside pet.json.',
          'No restart — Codex reads the pets directory at startup. Closing the window is not quitting on macOS, and on Windows the app keeps running in the tray.',
        ],
      },
      {
        heading: 'How to verify a package before installing',
        paragraphs: [
          'Two checks take under a minute and catch nearly everything. Run them before you go looking for more exotic causes.',
        ],
        list: [
          'Validate the JSON: node -e "JSON.parse(require(\'fs\').readFileSync(\'pet.json\',\'utf8\'))" — if it throws, the file is malformed.',
          'Confirm the sheet dimensions are 1536x1872 and that spritesheet.webp sits directly beside pet.json, with no nested folder from the ZIP extraction.',
          'Check that the folder name and the name field inside pet.json are byte-identical, including hyphens and capitalisation.',
          'Fully quit Codex (Cmd+Q on macOS, exit from the tray icon on Windows), relaunch, and wait a few seconds before concluding it failed.',
        ],
      },
      {
        heading: 'Building one by hand',
        paragraphs: [
          'It is possible to assemble a package manually, and doing it once is the fastest way to understand the format. Draw or export 72 frames at 192x208 each, compose them into a 9-row by 8-column grid with a transparent background, export as WebP with alpha, then write a pet.json whose name matches the folder you are about to create.',
          'The honest caveat is that hand-pixeling 72 coherent frames takes hours, and matching the palette and silhouette across all nine states is harder than any single frame suggests. A generator collapses that into about a minute, which is the entire reason these tools exist — but knowing what the output should look like makes you much better at spotting when something went wrong.',
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
    faq: [
      { question: 'Does a custom pet cost money?', answer: 'Starter gives 3 free generations; Pro is $9/month for 15.' },
      { question: 'Can I use my custom pet commercially?', answer: 'Only on the Unlimited plan.' },
      { question: 'What if my pet does not show after install?', answer: 'Verify the folder name matches pet.json and restart Codex fully.' },
      { question: 'Can I recolor my custom pet?', answer: 'Regenerate from a differently colored photo, or edit the spritesheet manually on Pro/Unlimited.' },
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
    title: 'Codex Pet Not Showing? 9 Quick Fixes That Work',
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
    related: [
      'what-is-pet-spritesheet',
      'installation-troubleshooting',
      'how-to-install-codex-pet',
      'codex-pet-upload-limit',
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
  },
  {
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
  },
  {
    slug: 'transparent-background-pixel-pets',
    title: 'The Magic of Transparent Backgrounds in Pixel Pets',
    description: 'Why transparent backgrounds make Codex pets feel alive on any desktop — and how PetGen handles the alpha channel correctly.',
    date: '2026-08-23',
    author: 'Codex Pet Generator Team',
    keywords: ['transparent background pet', 'pixel pet transparent', 'codex pet transparent webp', 'alpha channel pet'],
    related: ['how-to-install-codex-pet', 'codex-pet-upload-limit'],
    sections: [
      {
        heading: 'Why Transparency Matters',
        paragraphs: [
          'A pixel pet with a white or colored background looks like a sticker slapped onto your desktop. A pixel pet with a transparent background looks like it belongs there — floating naturally above your icons, blending with whatever wallpaper you\'ve chosen.',
          'This isn\'t just aesthetics. The way a pet renders against different backgrounds is what makes it feel alive. A blue background pet on a dark wallpaper looks wrong. A transparent pet adapts to everything.',
        ],
      },
      {
        heading: 'How PetGen Handles Transparency',
        paragraphs: [
          'PetGen outputs spritesheets with a proper alpha channel. Every pixel in the 1536x1872 grid has an RGBA value — red, green, blue, and alpha (opacity). The alpha channel is what tells Codex "this pixel is invisible, show what\'s behind it instead."',
          'The AI model is trained to recognize and preserve transparent regions. When you upload a photo of your cat against a busy background, PetGen segments the cat and removes everything else, producing a clean transparent spritesheet.',
        ],
        list: [
          'Background removal: AI detects the pet and isolates it from the background',
          'Alpha channel preservation: Transparent pixels are marked with alpha=0',
          'Edge smoothing: Anti-aliased edges prevent jagged transparent borders',
          'Frame consistency: All 9 animation states maintain the same transparency pattern',
        ],
      },
      {
        heading: 'Common Transparency Mistakes',
        paragraphs: [
          'The most common issue is a pet that looks correct in the preview but appears with a white box in Codex. This usually means the spritesheet was saved as JPEG instead of WebP — JPEG doesn\'t support alpha channels.',
          'Another issue: the pet has a thin colored border around it. This happens when the background removal isn\'t clean enough. Try uploading a photo with higher contrast between the pet and background.',
        ],
      },
      {
        heading: 'Testing Your Transparent Pet',
        paragraphs: [
          'Before installing, preview your pet on different backgrounds. Open the spritesheet in any image viewer and check that the areas around your pet are truly transparent (not white or colored).',
          'In Codex, try moving your pet over windows with different colors — a white document editor, a dark terminal, a colorful wallpaper. If it looks good everywhere, your transparency is working correctly.',
        ],
      },
      {
        heading: 'FAQ',
        paragraphs: [
          'Does transparency affect performance? No. Alpha channels are handled by the GPU just like any other texture property. Your pet runs at the same frame rate regardless of transparency.',
          'Can I add transparency to an existing pet? Yes, but you\'ll need to regenerate the spritesheet. Editing transparency in existing WebPs is technically possible but error-prone.',
          'What file format does Codex expect? PetGen outputs WebP with alpha channel, which Codex supports natively. You can also use PNG with transparency, but WebP is smaller and loads faster.',
          'Why does my pet look pixelated at the edges? This is usually a resolution issue, not a transparency issue. Make sure your source photo is at least 512x512 before uploading.',
        ],
      },
    ],
  },

  {
    slug: 'hamster-codex-pet-guide',
    title: 'Hamster Edition: Pixelating Small Pets for Codex',
    description: 'Hamsters present a unique challenge for pixel art conversion. Here\'s how to get the best Codex pet from your hamster photos.',
    date: '2026-08-25',
    author: 'Codex Pet Generator Team',
    keywords: ['hamster codex pet', 'pixel hamster', 'small pet pixel art', 'codex pet hamster guide'],
    related: ['how-to-install-codex-pet', 'transparent-background-pixel-pets'],
    sections: [
      {
        heading: 'Why Small Pets Are Tricky',
        paragraphs: [
          'Hamsters are one of the most popular small pets worldwide, but they present a unique challenge for pixel art conversion. Their round bodies, tiny features, and fast movements don\'t translate easily to the 1536x1872 spritesheet format.',
          'Unlike cats or dogs, a hamster in a photo is often small relative to the frame. The AI model has fewer pixels of "pet" to work with, which makes clean segmentation harder.',
        ],
      },
      {
        heading: 'Tips for the Best Hamster Pet',
        paragraphs: [
          'Get close to your hamster. Fill as much of the frame as possible — the more pixels your pet occupies, the cleaner the background removal and the sharper the final sprite.',
          'Use a high-resolution photo (at least 1024px on the short side) and make sure the lighting is even. Avoid heavy shadows that can confuse the segmentation model.',
        ],
        list: [
          'Shoot on a plain, high-contrast background to help the AI isolate your hamster',
          'Capture your hamster from the side for the clearest silhouette',
          'Take multiple frames and pick the sharpest, most in-focus one',
        ],
      },
      {
        heading: 'From Photo to Spritesheet',
        paragraphs: [
          'Once your photo is ready, PetGen handles the rest: background removal, pose detection, and generating the full 9-frame animation spritesheet. Small pets often look best with subtle, gentle animations — a twitch of the nose or a slow turn reads better than a big bounce.',
          'After installing, you can preview your hamster pet on different wallpapers inside Codex. Transparent backgrounds mean it will float naturally over whatever you\'re working on.',
        ],
      },
      {
        heading: 'FAQ',
        paragraphs: [
          'Can I use a video to make a hamster Codex pet? Yes! Take multiple screenshots from a video and pick the clearest frames.',
          'Will my hamster pet be transparent? Yes. PetGen outputs WebP with a proper alpha channel.',
          'My hamster is always moving — any tips? Use a video still or a high shutter-speed photo to freeze the motion.',
        ],
      },
    ],
  },

  {
    slug: 'tortoise-codex-pet',
    title: 'Tortoise Edition: A Long-Lived Pet for Your Desktop',
    description:
      'Tortoises are patient, slow, and surprisingly expressive. This guide shows how to turn your tortoise into a Codex pixel pet that matches its calm personality.',
    date: '2026-08-29',
    author: 'PetGen',
    keywords: [
      'tortoise codex pet',
      'turtle pixel art',
      'slow pet codex',
      'reptile codex pet',
      'long-lived pet desktop',
      'tortoise spritesheet',
    ],
    sections: [
      {
        heading: 'Why a tortoise makes a great Codex pet',
        paragraphs: [
          'Tortoises are one of the most patient animals you can keep as a pet, and that patience translates beautifully into pixel art. Their shells provide a natural, geometric shape that segments cleanly. Their slow movements mean the animation frames don\'t need to capture fast motion — a gentle walk or a head extension reads perfectly at low frame counts.',
          'A tortoise pet on your Codex desktop is a reminder to slow down. While you code through tight deadlines, your pixel tortoise sits calmly beside your editor, embodying the quiet focus that good work requires.',
        ],
      },
      {
        heading: 'Photo tips for tortoise pets',
        paragraphs: [
          'Tortoises can be tricky to photograph because their shells often blend into backgrounds. The key is contrast: a dark shell on a light surface, or vice versa. Get close enough that the shell fills most of the frame, but leave enough space around the edges for the background removal AI to work cleanly.',
          'Side profile shots work best for the spritesheet. Front-facing photos can look great for the idle animation, but the side view gives the AI more data for generating the walk and run states.',
        ],
        list: [
          'Use natural light near a window — avoid harsh flash that creates glare on the shell',
          'Place your tortoise on a plain, contrasting surface',
          'Capture the head extended for the most expressive frame',
          'Take multiple photos and pick the one with the sharpest shell detail',
        ],
      },
      {
        heading: 'From photo to spritesheet',
        paragraphs: [
          'PetGen processes your tortoise photo the same way it handles any other pet: background removal, pose detection, and spritesheet generation. The 1536x1872 output with 9 rows and 8 columns gives you a complete animation set. Tortoise pets tend to look best with subtle, slow animations — a gentle walk cycle and a relaxed idle state fit the animal\'s nature.',
          'After installation, your tortoise pet will sit quietly on your Codex desktop. Its calm presence is part of the appeal: a coding companion that doesn\'t demand attention but makes the workspace feel more personal.',
        ],
      },
      {
        heading: 'FAQ',
        paragraphs: [
          'Will my tortoise pet look accurate? PetGen captures the shell pattern and color from your photo. The pixel art style simplifies details, but the overall look will match your tortoise.',
          'Can I use a video instead of a photo? Yes. Take screenshots from a video and pick the clearest frame with good lighting.',
          'Do tortoise pets animate slowly by default? Yes. The animation speed is tuned to the pet\'s natural movement pattern — tortoises get gentle, deliberate motions.',
        ],
      },
    ],
  },
  {
    slug: 'guinea-pig-ferret-uncommon-pets',
    title: 'Guinea Pig & Ferret: Uncommon Pets Get Pixelated',
    description:
      'Guinea pigs and ferrets are beloved but rarely pixelated. This guide shows how to turn your guinea pig or ferret into an adorable Codex pet that captures their personality in pixel form.',
    date: '2026-09-02',
    author: 'PetGen',
    keywords: [
      'exotic pet codex',
      'guinea pig pixel pet',
      'ferret codex pet',
      'uncommon pet pixel art',
    ],
    sections: [
      {
        heading: 'Why Uncommon Pets Deserve Pixel Form',
        paragraphs: [
          'Most codex pet generators focus on cats, dogs, and the occasional exotic like a parrot or turtle. But what about pets that don\'t make it into the standard catalog? Guinea pigs and ferrets — beloved by millions but rarely pixelated — deserve their turn in the spotlight.',
          'This guide shows you how to turn your guinea pig or ferret into an adorable codex pet that captures their personality in pixel form.',
        ],
      },
      {
        heading: 'Why Guinea Pigs Make Great Codex Pets',
        paragraphs: [
          'Guinea pigs have that perfect combination of round shapes and expressive faces that translate beautifully to pixel art. Their compact bodies, tiny ears, and distinctive whiskers create natural pixel-friendly features.',
        ],
        list: [
          'Front-facing portraits capture their round, friendly faces perfectly',
          'Side profiles show off their unique body shape and little legs',
          'Action shots of them running (the "zoomies") add personality',
        ],
      },
      {
        heading: 'Why Ferrets Are Pixel Perfection',
        paragraphs: [
          'Ferrets are essentially long, playful snakes with fur. Their sinuous bodies and mischievous expressions make them incredibly fun to pixelate. The challenge is capturing their elongated shape without making them look like worms.',
        ],
        list: [
          'Focus on the playful, curled-up pose',
          'Capture those bright, intelligent eyes',
          'Show off their sleek, elongated body in motion',
        ],
      },
      {
        heading: 'Step-by-Step: Creating Your Exotic Pet Codex',
        paragraphs: [
          'Turning your guinea pig or ferret into a codex pet is easier than you think. Follow these steps to get a pixel companion that truly looks like your pet.',
        ],
        list: [
          'Choose the clearest photo possible. For guinea pigs, front-facing shots work best. For ferrets, action shots capturing their playful nature are ideal.',
          'Upload to your codex pet generator. Most tools handle small mammals well, but exotic pets may need a bit more patience with the AI.',
          'Adjust the style settings. Try different pixel art styles — some generators offer "cute" modes that enhance the adorable qualities of small pets.',
          'Review and refine. Exotic pets sometimes need a second pass to get the proportions right. Don\'t be afraid to regenerate if the first attempt doesn\'t capture your pet\'s personality.',
        ],
      },
      {
        heading: 'Common Challenges with Exotic Pets',
        paragraphs: [
          'Guinea pigs can be tricky because of their fluffy coats. The AI might smooth out their texture, making them look too clean. Try uploading photos where their natural fluffiness shows through.',
          'Ferrets are challenging because of their length. The pixelation process can compress their body too much. Look for generators that offer aspect ratio adjustments to preserve their natural proportions.',
        ],
      },
      {
        heading: 'Making It Personal',
        paragraphs: [
          'The best codex pets capture more than just physical appearance — they capture personality. A guinea pig who loves vegetables might have a carrot in its pixel paws. A ferret known for stealing socks could be pixelated holding a tiny sock.',
          'These small touches make your codex pet uniquely yours, rather than just another pixelated animal.',
        ],
      },
    ],
  },
  {
    slug: 'hd-vs-4k-spritesheets',
    title: 'HD vs 4K Spritesheets: Is the Upgrade Worth It?',
    description: 'HD vs 4K spritesheets for Codex pets: exact resolution, file size, and generation tradeoffs. When the Pro/Unlimited 4K upgrade is worth it, and when HD is already enough.',
    date: '2026-09-03',
    author: 'Codex Pet Generator Team',
    keywords: [
      'hd spritesheet codex pet',
      'codex pet hd 2x',
      '4k spritesheet pet',
      'codex pet resolution upgrade',
    ],
    related: ['how-to-install-codex-pet', 'transparent-background-pixel-pets'],
    sections: [
      {
        heading: 'The short answer',
        paragraphs: [
          'HD is the default resolution for every Codex pet. The 4K upgrade is a paid resolution bump that renders the same 9-frame animation at four times the pixel count. Whether it\'s worth it comes down to one question: are you going to display or print the pet at a size where those extra pixels are visible? If the pet lives in the corner of your editor at thumbnail size, 4K is money and quota spent for nothing. If you\'re printing stickers or overlaying the pet on a 1080p stream, it starts to earn its keep.',
        ],
      },
      {
        heading: 'What actually changes in the file',
        paragraphs: [
          'A standard HD spritesheet is 1536x1872 pixels - 9 rows of animation states, 8 frames each. The 4K export doubles the linear resolution to 3072x3744, which is exactly four times the pixels. The pet itself looks identical at normal zoom; the difference is headroom.',
          'On file size, WebP is efficient, but the extra detail still costs you. A typical HD pet is 250-450 KB, while the 4K version usually lands at 900 KB to 1.8 MB - roughly 3 to 4 times larger. Generation also takes longer because the model paints four times the area.',
        ],
        list: [
          'HD spritesheet: 1536x1872 px, about 250-450 KB',
          '4K spritesheet: 3072x3744 px, about 900 KB to 1.8 MB (3-4x larger)',
          'Same 9-state, 8-frame animation grid in both',
        ],
      },
      {
        heading: 'When 4K is clearly worth it',
        paragraphs: [
          'Print is the clearest case. At 300 DPI, an HD pet covers about a 5x6 cm sticker before the pixels show; 4K gets you to roughly 10x12 cm. Merch, standees, and keyrings benefit directly.',
          'Stream overlays are the second case. When your streaming software captures the pet and scales it into a 1080p scene, an HD pet can look soft if you zoom or crop it. 4K holds crisp edges through the scaler.',
        ],
        list: [
          'Printing stickers, standees, or keyrings at 300 DPI',
          'Overlaying the pet on a 1080p+ stream where it gets zoomed or cropped',
          'Large 4K displays where viewers lean in close',
        ],
      },
      {
        heading: 'When HD is already enough',
        paragraphs: [
          'The desktop companion is the everyday case, and HD wins it. The pet sits small in a corner of your editor, where 1536x1872 is already sharper than the display can show. Paying for 4K there buys invisible pixels.',
          'Anything that gets downscaled also wastes 4K: avatars, social thumbnails, and embedded widgets throw away the extra resolution on export. Mobile is the same story.',
        ],
        list: [
          'Desktop companion at normal (small) size',
          'Avatars and social thumbnails (downscaled anyway)',
          'Mobile and embedded widgets',
        ],
      },
      {
        heading: 'The quota trap (Pro vs Unlimited)',
        paragraphs: [
          'If your plan caps monthly generations, every 4K render spends one of those generations on a result you may never use. On Pro, that is a real cost. On Unlimited, generations aren\'t the bottleneck, but your time is.',
          'Generate HD first. Confirm you like the pet. Then re-run once at 4K only if you have a concrete use - printing or streaming. Don\'t batch-upgrade a whole library on speculation; most of those 4K files will sit unused.',
        ],
      },
      {
        heading: 'How to decide in 10 seconds',
        paragraphs: [
          'Rule: will the pet be shown larger than about 8 cm, cropped into a 1080p stream, or printed? If yes, 4K. If it just sits on your desktop, HD. That is the whole decision - resolution you can\'t see is resolution you shouldn\'t pay for.',
        ],
      },
      {
        heading: 'About Codex Pet Generator',
        paragraphs: [
          'Codex Pet Generator (codexpetgenerator.com) turns one photo into a pixel companion that runs on your desktop. Start at the homepage to upload your pet, or open the pricing page to compare the Pro and Unlimited tiers before you generate. HD is the default; 4K is the upgrade to reach for when you print or stream.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is the 4K spritesheet really 4x the resolution?',
        answer: 'Yes. The 4K export doubles the linear resolution (1536x1872 becomes 3072x3744), so it is four times the pixel count. The animation grid and frame count stay the same.',
      },
      {
        question: 'Should I always generate at 4K?',
        answer: 'No. If the pet only runs on your desktop at small size, HD is already crisp and 4K is wasted quota and disk. Reach for 4K when you print or overlay the pet on a stream.',
      },
    ],
  },
  {
    slug: 'restore-old-photos-codex-pets',
    title: 'Restore Old Photos: Turn Childhood Pets into Codex Pets',
    description:
      'A practical guide to restoring old pet photos and turning them into pixel-art Codex pets. Covers scanning, cleanup, and generating a desktop companion from a faded print.',
    date: '2026-09-04',
    author: 'PetGen',
    keywords: [
      'old photo pixel pet',
      'vintage pet photo pixel',
      'childhood pet codex',
      'restore old photo pixel art',
      'photo to codex pet',
    ],
    related: ['turn-photo-into-pixel-art'],
    faq: [
      {
        question: 'Can I use a torn or faded photo?',
        answer: 'Yes. Scan the print at 600 DPI, then run a quick restore: lift contrast, drop the yellow cast, and heal the dust. A clean source gives the generator a clear subject to trace.',
      },
      {
        question: 'Do I need Photoshop skills?',
        answer: 'No. Free auto-color and heal tools handle most prints in ten minutes. You are fixing the image so the pixel result looks deliberate, not muddy.',
      },
      {
        question: 'Will the Codex pet look like my actual pet?',
        answer: 'The closer your restored crop is to a centered, plain-background photo, the more the sprite reads as that animal. A tight, high-contrast crop beats a busy full-scene scan.',
      },
    ],
    sections: [
      {
        heading: 'Why a faded print can become your favorite Codex pet',
        paragraphs: [
          'Old pet photos carry a weight that a brand-new snapshot never will. A faded print of a childhood dog or cat is a piece of family history, and turning it into a pixel companion keeps that animal on your desktop long after the paper has yellowed.',
          'The Codex Pet Generator pipeline works best on a clean, high-contrast image, so a quick restore step before generation pays off. You are not fixing the photo for a frame, you are giving the model a clear subject to trace.',
        ],
      },
      {
        heading: 'Start with the best source you have',
        paragraphs: [
          'If the original print still exists, scan it at 600 DPI rather than photographing it with a phone. A flatbed scan avoids glare and perspective distortion, which means fewer artifacts for the restore step to fight.',
          'No print? A digital copy from a relative is fine. Even a small JPEG from a social album can work if it is not heavily compressed. The goal is simply the sharpest version you can find.',
        ],
      },
      {
        heading: 'Restore before you pixelate',
        paragraphs: [
          'You do not need Photoshop talent. Free tools handle most of the work: raise contrast, drop the yellow cast, and clone out the dust specks. Spend ten minutes here and the pixel result looks deliberate instead of muddy.',
        ],
        list: [
          'Scan at 600 DPI, not a phone photo, when the print exists.',
          'Use auto-color or a white-balance eyedropper to kill the yellow cast.',
          'Clone or heal the dust, creases, and water stains.',
          'Export a clean 1:1 crop of just the pet, centered, with a calm background.',
        ],
      },
      {
        heading: 'Generate the Codex pet from the restored photo',
        paragraphs: [
          'Upload the cleaned crop to Codex Pet Generator and let it trace the pixel sprite. A simple, centered subject with a plain background gives the cleanest spritesheet, because the model has fewer competing edges to guess at.',
          'If the first result feels off, try a tighter crop or a slightly higher contrast version. Small source tweaks move the output more than you would expect, and you are not charged for experiments you discard.',
        ],
      },
      {
        heading: 'A note from my own shoebox',
        paragraphs: [
          'I ran this on a torn photo of a terrier my family lost years ago. The print was creased across one eye, and the restore step alone made me pause. The pixel version now sits in my taskbar, and I open the desktop more often than I expected. A childhood pet deserves more than a drawer.',
        ],
      },
      {
        heading: 'About Codex Pet Generator',
        paragraphs: [
          'Codex Pet Generator (codexpetgenerator.com) turns one photo into a pixel companion that runs on your desktop. Start at the homepage to upload your pet, or open the /pricing page to compare the Pro and Unlimited tiers before you generate. If you want the full walkthrough from any photo, read our turn-photo-into-pixel-art guide on the blog at codexpetgenerator.com/blog.',
        ],
      },
    ],
  },
  {
    slug: 'restore-old-photos-codex-pets-zh',
    title: '修复老照片：把童年宠物做成 Codex 像素桌宠',
    description:
      '一份实用指南：如何修复旧宠物照片，并把它们变成像素风的 Codex 桌宠。涵盖扫描、去黄、去污，以及从一张泛黄照片生成桌面伴侣。',
    date: '2026-09-04',
    author: 'PetGen',
    keywords: [
      '老照片 像素宠物',
      '童年宠物 codex',
      '修复老照片 像素画',
      'old photo pixel pet',
      'vintage pet photo pixel',
    ],
    related: ['turn-photo-into-pixel-art'],
    faq: [
      {
        question: '撕过或褪色严重的照片也能用吗？',
        answer: '能用。把原片用平板扫成 600 DPI，再做一次快速修复：拉对比、去黄味、修掉灰尘。干净的源图能让生成器有一个清楚的主体去描摹。',
      },
      {
        question: '需要会 Photoshop 吗？',
        answer: '不需要。免费的自动调色和修复工具十分钟就能处理大部分照片。你修图是为了让像素成品看起来是刻意的，而不是糊的。',
      },
      {
        question: '生成的 Codex 桌宠会像我真正的宠物吗？',
        answer: '只要修复后的方图尽量居中、背景干净，精灵就越像那只动物。紧一点、对比高一点的一方裁切，胜过大场景的整张扫描。',
      },
    ],
    sections: [
      {
        heading: '为什么一张泛黄照片能成为你最爱的 Codex 桌宠',
        paragraphs: [
          '旧宠物照片承载的重量，是新拍的快照永远给不了的。一张童年猫狗的褪色照片是家庭记忆的一部分，把它变成像素伴侣，能让那只动物在你桌面上一直陪着你，远在相纸发黄之后。',
          'Codex Pet Generator 的流程在清晰、高对比度的图像上表现最好，所以生成前做一次简单修复很划算。你修复照片不是为了裱框，而是给模型一个清楚的描摹对象。',
        ],
      },
      {
        heading: '从你手边最清晰的源开始',
        paragraphs: [
          '如果原片还在，用平板扫描仪扫成 600 DPI，别用手机拍。平板扫描没有反光和透视变形，修复步骤要对抗的噪点更少。',
          '没有原片？亲戚发来的数码版也行。哪怕只是社交平台相册里一张不大的图，只要压缩不重就能用。目标很简单：找到你能找到的最清晰版本。',
        ],
      },
      {
        heading: '像素化之前先做修复',
        paragraphs: [
          '你不需要 Photoshop 功底。免费工具就能搞定大部分：拉对比、去掉黄味、把灰尘点修掉。花十分钟，像素成品会显得是刻意的，而不是糊的。',
        ],
        list: [
          '原片还在就用平板扫 600 DPI，而不是手机拍。',
          '用自动色彩或白平衡吸管去掉黄味。',
          '用修复笔刷清掉灰尘、折痕和水渍。',
          '导出只含宠物、居中、背景干净的正方框选。',
        ],
      },
      {
        heading: '用修复后的照片生成 Codex 桌宠',
        paragraphs: [
          '把清理好的方图上传到 Codex Pet Generator，让它描出像素精灵。主体简单、居中、背景干净，得到的精灵图最干净，因为模型要猜测的边缘更少。',
          '如果第一版不对，试试更紧的裁切或对比度稍高一点。源图的小改动比你想的大，而且你弃掉的试验不占额度。',
        ],
      },
      {
        heading: '来自我自己鞋盒里的一句话',
        paragraphs: [
          '我用一张撕过的照片试过，是我家多年前走失的一只梗犬。照片有一道折痕横过一只眼睛，光是修复那一步就让我停了很久。现在像素版停在我的任务栏里，我打开桌面的次数比预想的多。童年宠物，不该只待在抽屉里。',
        ],
      },
      {
        heading: '关于 Codex Pet Generator',
        paragraphs: [
          'Codex Pet Generator（codexpetgenerator.com）把一张照片变成能在桌面运行的像素伴侣。从首页上传你的宠物，或打开 /pricing 页面对比 Pro 与 Unlimited 两档再生成。想看从任意照片出发的完整流程，去博客读 turn-photo-into-pixel-art 指南，地址是 codexpetgenerator.com/blog。',
        ],
      },
    ],
  },
  {
    slug: 'how-to-create-a-codex-pet',
    title: 'How to Create a Codex Pet: Step-by-Step Guide',
    description:
      'Turn any photo into an animated pixel-art pet for OpenAI Codex. Six steps from source photo to a companion running on your desktop, plus what to check when it does not appear.',
    date: '2026-09-04',
    author: 'PetGen',
    keywords: [
      'how to create a codex pet',
      'how to make codex pet',
      'how to use codex pet',
      'make a custom codex pet',
      'codex pet from photo',
      'create pet for openai codex',
      'codex pet step by step',
    ],
    related: [
      'what-is-pet-spritesheet',
      'codex-pet-not-showing-fixes',
      'what-is-a-codex-pet',
      'best-photos-for-pixel-pet-generator',
    ],
    howTo: {
      name: 'How to create a Codex pet from a photo',
      steps: [
        'Choose a clear, centered photo of your pet with a plain background and even lighting.',
        'Upload the photo to a Codex-aware generator such as codexpetgenerator.com and wait for the pixel-art base to render.',
        'Review the pixel-art base and regenerate with a tighter crop or higher contrast if the silhouette is wrong.',
        'Approve the base to generate all nine animation states into spritesheet.webp plus a pet.json, then download the ZIP.',
        'Extract the ZIP and copy the folder into ~/.codex/pets on macOS, or %USERPROFILE%\\.codex\\pets on Windows.',
        'Rename the folder so it matches the name field inside pet.json exactly, including hyphens and capitalisation.',
        'Fully quit Codex (Cmd+Q on macOS, exit from the tray icon on Windows) and relaunch, then wait a few seconds for the pet to appear.',
      ],
    },
    faq: [
      { question: 'How do I create a Codex pet from a photo?', answer: 'Upload a clear, centered photo to a Codex-aware generator such as codexpetgenerator.com. The tool removes the background, draws a pixel-art base for you to approve, then renders nine animation states into a spritesheet.webp plus a pet.json. Download the ZIP, copy the folder into ~/.codex/pets on macOS or %USERPROFILE%\\.codex\\pets on Windows, and fully restart Codex.' },
      { question: 'Can I make a Codex pet without any design skills?', answer: 'Yes. The generator handles background removal, pixelation, animation frames, and the metadata file. You pick the photo and approve the result — there is no drawing, no frame slicing, and no JSON editing involved.' },
      { question: 'How long does it take to create one?', answer: 'Generation takes roughly 60 to 90 seconds once the photo is uploaded. Including picking a photo and installing the result, most people have a pet running within five minutes.' },
      { question: 'Do I need to restart Codex after installing a pet?', answer: 'Yes, and it must be a full quit rather than closing the window. Codex reads the pets directory at startup, so on macOS use Cmd+Q and on Windows exit from the tray icon, then relaunch. Skipping this is the single most common reason a correctly installed pet never appears.' },
    ],
    sections: [
      {
        heading: 'What you need before you start',
        paragraphs: [
          'The whole process is shorter than the setup list suggests, but having these four things ready means you will not stop halfway.',
        ],
        list: [
          'The OpenAI Codex desktop app, installed and launched at least once so its config directory exists.',
          'One photo of your pet — a cat, dog, hamster, tortoise, or anything else you want on your desktop.',
          'A Codex-aware generator. This walkthrough uses codexpetgenerator.com, which outputs the spritesheet and pet.json Codex expects.',
          'A terminal or file manager, for copying the finished folder into the pets directory.',
        ],
      },
      {
        heading: 'Step 1: Choose and prepare your photo',
        paragraphs: [
          'Photo choice drives output quality more than any setting in the generator. A single subject, centered in frame, lit evenly, and shot against a plain background gives the model the least to guess about.',
          'Facing the camera helps a lot. Profile shots work, but three-quarter views tend to read better once reduced to a pixel grid, because more of the face survives the simplification. Avoid heavy filters and busy backgrounds — both get interpreted as part of the animal.',
        ],
      },
      {
        heading: 'Step 2: Generate the pixel-art base',
        paragraphs: [
          'Upload the photo. The generator removes the background, detects the pose, and renders a pixel-art base character — typically within about 90 seconds. Nothing is installed yet at this stage; you are looking at a preview you can still change.',
          'This is the moment to regenerate rather than push ahead. If the silhouette is wrong or the colours are off, a different crop or a slightly higher-contrast version of the same photo will usually beat any amount of post-processing.',
        ],
      },
      {
        heading: 'Step 3: Approve the base',
        paragraphs: [
          'Once the base looks right, approve it. Approval is what triggers the expensive part: the generator renders all nine animation states, composes them into a single 1536x1872 spritesheet, writes the matching pet.json, and packs both into a ZIP.',
          'Nine states means 72 individual frames. Doing that by hand is what makes manual spritesheets so time-consuming, and it is the main reason to use a generator at all.',
        ],
      },
      {
        heading: 'Step 4: Download the package',
        paragraphs: [
          'Download the ZIP and extract it. Inside you should see exactly two files sitting side by side: spritesheet.webp and pet.json. If they are nested one level deeper inside a folder from the extraction, note the folder name — that inner folder is what Codex will read.',
          'The folder name matters. Whatever you end up calling it must match the name field inside pet.json, character for character.',
        ],
      },
      {
        heading: 'Step 5: Install into the pets directory',
        paragraphs: [
          'Copy the folder into ~/.codex/pets on macOS, or %USERPROFILE%\\.codex\\pets on Windows. If the pets directory does not exist yet, create it — Codex will not build it for you on first run.',
          'Open pet.json and read the name field, then rename the folder you just copied so it matches that value exactly. A folder called my-cat-v2 whose JSON declares name "my-cat" is enough to make the loader skip the pet without any error message.',
        ],
      },
      {
        heading: 'Step 6: Restart and confirm',
        paragraphs: [
          'Fully quit Codex — Cmd+Q on macOS, or exit from the tray icon on Windows — then relaunch and wait a few seconds. Closing the window is not sufficient on either platform, because the process keeps running in the background and never re-reads the pets directory.',
          'Your pet should now be on your desktop. If it is not, resist the urge to start over: the failure is almost always one of four things, and all four are quick to check.',
        ],
      },
      {
        heading: 'What to do when nothing appears',
        paragraphs: [
          'Work through these in order. Each one takes under a minute, and together they account for the overwhelming majority of "I installed it but it is not there" reports.',
        ],
        list: [
          'Confirm the restart was a real restart — process fully exited, not just the window closed.',
          'Check that the folder name and the name field in pet.json are byte-identical, including hyphens and capitalisation.',
          'Verify spritesheet.webp is named exactly that and sits directly beside pet.json, not in a nested subfolder.',
          'Validate the JSON with node -e "JSON.parse(require(\'fs\').readFileSync(\'pet.json\',\'utf8\'))" — a trailing comma is enough to break it.',
        ],
      },
      {
        heading: 'Making changes later',
        paragraphs: [
          'To swap your pet, generate a new one and give it a distinct name, or replace the files in the existing folder — keeping the name consistent means you do not have to redo the install steps.',
          'If you want several pets, give each one a unique name field. Two folders declaring the same name is a known failure mode: the loader picks one and silently ignores the other, which looks exactly like an install that did not work.',
        ],
      },
    ],
  },
  {
    slug: 'what-can-a-codex-pet-do',
    title: 'What Can a Codex Pet Do? All 9 States Explained',
    description:
      'A Codex pet is a small animated companion that lives on your desktop. What it actually does, the nine animation states, and the limits worth knowing before you generate one.',
    date: '2026-09-04',
    author: 'PetGen',
    keywords: [
      'what can codex pet do',
      'what is a codex pet',
      'what are pets in codex',
      'codex pet animation states',
      'codex desktop pet',
      'codex pet features',
      'openai codex pets explained',
    ],
    related: [
      'what-is-a-codex-pet',
      'codex-pet-9-animation-states',
      'what-is-pet-spritesheet',
      'how-to-create-a-codex-pet',
    ],
    faq: [
      { question: 'What does a Codex pet actually do?', answer: 'It is an animated pixel-art companion that sits on your desktop while you work. It cycles through nine animation states — idle, walk, run, sit, sleep, eat, play, happy, and a reaction state — and otherwise stays out of the way. It is cosmetic; it does not affect how Codex writes or runs code.' },
      { question: 'Does a Codex pet slow down my machine?', answer: 'Barely. A pet is a single WebP spritesheet of around 1536x1872 pixels plus a small JSON file, typically a few tens of kilobytes. Redrawing a small 2D sprite is negligible next to anything else running while you code.' },
      { question: 'Can I have more than one pet?', answer: 'Yes. Install each pet as its own folder under ~/.codex/pets and give every one a unique name field in its pet.json. Duplicate names cause the loader to pick one and silently ignore the rest.' },
      { question: 'Can the pet interact with my code or terminal?', answer: 'No. The pet is purely visual — it does not read your code, respond to commands, or send notifications. Its animation states play independently of what you are doing.' },
    ],
    sections: [
      {
        heading: 'The short answer',
        paragraphs: [
          'A Codex pet is a small animated pixel-art companion that lives on your desktop while you work. It is generated from a photo you upload, rendered as a spritesheet, and installed into a directory the Codex desktop app reads at startup.',
          'It is cosmetic by design. It does not read your code, respond to commands, or surface notifications — it sits somewhere on screen and quietly animates. For most people that is the entire appeal: something familiar in the corner while you work.',
        ],
      },
      {
        heading: 'The nine animation states',
        paragraphs: [
          'A standard pet ships with nine states, each an eight-frame loop that plays continuously. The set is idle, walk, run, sit, sleep, eat, play, happy, and a special or reaction state.',
          'Idle is the one that matters most in practice. It runs the overwhelming majority of the time, so a pet with a good idle animation feels alive even if the other states are unremarkable — and a pet with a stiff idle feels broken no matter how good the rest are.',
        ],
      },
      {
        heading: 'What the pet does not do',
        paragraphs: [
          'Being clear about limits saves disappointment. A Codex pet does not respond to what you are typing, does not react to build failures or test results, and has no concept of your project.',
          'It also cannot be interacted with directly in most builds — clicking it does not trigger anything, and there is no menu of tricks. Think of it as a screensaver with better provenance rather than a virtual pet game.',
        ],
      },
      {
        heading: 'Where it lives on screen',
        paragraphs: [
          'The pet renders as a small transparent sprite, usually near an edge or corner of the desktop, and drifts within a limited area rather than roaming freely across your windows.',
          'Because the spritesheet carries an alpha channel, the background is genuinely transparent — your wallpaper shows through rather than a coloured box. This is the detail that separates a pet that looks embedded in your desktop from one that looks pasted on top of it.',
        ],
      },
      {
        heading: 'Running several pets at once',
        paragraphs: [
          'You can install as many as you like. Each lives in its own folder under ~/.codex/pets, and each needs a unique name field in its pet.json.',
          'Uniqueness is not optional. If two folders declare the same name, the loader mounts one and silently discards the other, which presents as a pet that simply refuses to appear despite a perfect install.',
        ],
      },
      {
        heading: 'What it costs in performance',
        paragraphs: [
          'Very little. The whole package is one WebP spritesheet plus a JSON file, usually a few tens of kilobytes, and redrawing a small 2D sprite is trivial compared with an editor, a language server, and a browser.',
          'WebP is used over PNG precisely for this reason: full transparency at a fraction of the file size, which keeps both load time and per-frame decode cost low on a surface you are looking at all day.',
        ],
      },
      {
        heading: 'Getting one of your own',
        paragraphs: [
          'Upload a clear, centered photo to a Codex-aware generator and it handles background removal, pixelation, all nine animation states, and the metadata file — typically in about a minute.',
          'What you get back is a ZIP containing spritesheet.webp and pet.json. Copy the folder into ~/.codex/pets, make the folder name match the name field, fully restart Codex, and it is running.',
        ],
      },
    ],
  },

  {
    slug: 'export-formats-explained',
    title: 'Export Formats Explained: WebP, PNG and the ZIP Bundle',
    description:
      'When you generate a Codex pet you get a few file choices back. Here is what WebP, PNG, and the ZIP bundle each do, and which one you actually need to install a pet on your desktop.',
    date: '2026-09-06',
    author: 'PetGen',
    keywords: [
      'codex pet download format',
      'codex pet webp vs png',
      'pet zip download',
      'codex pet file download',
      'codex pet spritesheet format',
      'webp vs png codex pet',
    ],
    related: [
      'hd-vs-4k-spritesheets',
      'what-is-pet-spritesheet',
      'how-to-create-a-codex-pet',
    ],
    howTo: {
      name: 'How to download your Codex pet files',
      steps: [
        'Generate the pet from a photo on codexpetgenerator.com and wait for the pixel-art base to render.',
        'Approve the base so the tool renders all nine animation states into a spritesheet and a pet.json.',
        'Click download to receive a single ZIP containing spritesheet.webp and pet.json.',
        'Extract the ZIP and copy the folder into the Codex pets directory, keeping the folder name equal to the name field in pet.json.',
        'Fully restart Codex and wait a few seconds for the pet to appear on your desktop.',
      ],
    },
    faq: [
      { question: 'What format does a Codex pet use?', answer: 'A Codex pet is built from a single WebP spritesheet plus a small pet.json file. The spritesheet holds all nine animation states in one image, and the JSON tells Codex how to slice and play it.' },
      { question: 'Can I download a Codex pet as PNG instead of WebP?', answer: 'Yes, most generators also export a PNG version of the sheet. PNG is easier to open in plain image tools, but it is larger and lacks the compression WebP gives you, so it is best kept for edits rather than daily use.' },
      { question: 'Is the ZIP bundle required to install a pet?', answer: 'For installation you need the folder with both spritesheet.webp and pet.json together. The ZIP is simply the bundled download that keeps those two files side by side, so it is the most reliable way to move them.' },
      { question: 'What is the spritesheet.webp file?', answer: 'It is the master image that contains every animation frame for your pet. Codex reads it at startup, cuts it into the individual states, and loops them on your desktop.' },
    ],
    sections: [
      {
        heading: 'What the download contains',
        paragraphs: [
          'After you approve a pet, the generator hands you a codex pet file download in three flavors. There is a WebP spritesheet, a PNG version of that sheet, and a ZIP that bundles the WebP with the pet.json metadata. Knowing what each one is for saves confusion the first time you install.',
        ],
      },
      {
        heading: 'WebP vs PNG: what each file is for',
        paragraphs: [
          'The codex pet webp vs png question comes up on every first install. WebP is the format Codex actually reads: it carries a transparent background at a small file size, which keeps load time low on a sprite you stare at all day. PNG is the same picture in a heavier, more universally editable form.',
          'Use WebP for running the pet. Use PNG when you want to open the sheet in Photoshop or a sprite editor, because nearly every tool understands PNG without extra plugins.',
        ],
      },
      {
        heading: 'Why the ZIP bundle is what you install',
        paragraphs: [
          'The pet zip download is the practical choice. Inside you get spritesheet.webp and pet.json sitting next to each other, which is exactly the layout Codex expects. Unpack it, drop the folder into the pets directory, and the pairing is already correct.',
          'Grabbing the WebP alone is possible, but then you must supply the pet.json separately and keep the names in sync. The ZIP removes that step and the mistakes that come with it.',
        ],
      },
      {
        heading: 'WebP, PNG, and ZIP at a glance',
        list: [
          'WebP spritesheet: the live format Codex reads, small and transparent.',
          'PNG sheet: the editable mirror, larger, good for editing only.',
          'ZIP bundle: WebP plus pet.json, the file you actually install from.',
        ],
      },
      {
        heading: 'PNG when you need a single frame',
        paragraphs: [
          'Sometimes you do not want the whole animation. A PNG export lets you pull one frame into a thumbnail, a social post, or a custom edit without wrestling a multi-frame WebP. Treat it as a side product, not the install source.',
        ],
      },
      {
        heading: 'Getting the files onto your desktop',
        paragraphs: [
          'Extract the ZIP, copy the folder into the Codex pets directory, and make the folder name match the name field inside pet.json. Then fully restart Codex. The pet should appear within a few seconds.',
          'If nothing shows, the cause is almost always the folder name not matching the JSON, or a restart that closed the window instead of quitting the process. Both are quick to fix.',
          'Ready to make one? Generate a pet from any photo on codexpetgenerator.com, then follow the install guide at /blog/how-to-create-a-codex-pet or browse /blog for more. It all starts at /.',
        ],
      },
    ],
  },

  {
    slug: 'export-formats-explained-zh',
    title: '导出格式全解：WebP、PNG 与 ZIP 包的区别',
    description:
      '生成一只 Codex 桌宠后，你会拿到几种文件。本文说明 WebP、PNG 和 ZIP 包各自的作用，以及真正用来安装到桌面的到底是哪一个。',
    date: '2026-09-06',
    author: 'PetGen',
    keywords: [
      'codex pet 导出格式',
      'codex pet webp png 区别',
      'pet zip 下载',
      'codex pet 文件下载',
      'codex pet 精灵图格式',
      'webp png codex pet',
    ],
    related: [
      'hd-vs-4k-spritesheets',
      'what-is-pet-spritesheet',
      'how-to-create-a-codex-pet',
    ],
    howTo: {
      name: '如何下载你的 Codex 桌宠文件',
      steps: [
        '在 codexpetgenerator.com 上传照片，等待像素风底图渲染完成。',
        '确认底图，让工具把九个动画状态渲染成一张精灵图和一份 pet.json。',
        '点击下载，拿到一个内含 spritesheet.webp 与 pet.json 的 ZIP。',
        '解压 ZIP，把文件夹复制到 Codex 的 pets 目录，并保持文件夹名与 pet.json 里的 name 字段一致。',
        '彻底重启 Codex，等待几秒，桌宠就会出现在桌面上。',
      ],
    },
    faq: [
      { question: 'Codex 桌宠用的是哪种格式？', answer: '一只 Codex 桌宠由一张 WebP 精灵图加一份很小的 pet.json 组成。精灵图把九个动画状态收进同一张图里，JSON 则告诉 Codex 怎么切片、怎么播放。' },
      { question: '能不能把 Codex 桌宠下载成 PNG 而不是 WebP？', answer: '可以，多数生成器也会导出一张 PNG 版精灵图。PNG 更容易用普通图像工具打开，但体积更大、也没有 WebP 的压缩优势，所以更适合拿去改图，而不是日常运行。' },
      { question: '安装桌宠一定要用 ZIP 包吗？', answer: '安装时你需要的是同时包含 spritesheet.webp 和 pet.json 的那个文件夹。ZIP 只是把这两个文件并排打包好的下载形式，所以它是移动文件最稳的方式。' },
      { question: 'spritesheet.webp 到底是什么？', answer: '它是承载桌宠所有动画帧的主图。Codex 启动时会读取它，切成各个状态，然后在桌面上循环播放。' },
    ],
    sections: [
      {
        heading: '下载里到底有什么',
        paragraphs: [
          '确认底图后，生成器会给你一份 codex pet 文件下载，有三种形态：一张 WebP 精灵图、一张同图的 PNG 版本，以及一个把 WebP 和 pet.json 打包在一起的 ZIP。搞清楚各自用途，第一次安装时就不会乱。',
        ],
      },
      {
        heading: 'WebP 与 PNG：各管什么',
        paragraphs: [
          'codex pet 的 webp 与 png 之争，几乎每个新手都会碰到。WebP 才是 Codex 真正读取的格式：它带着透明背景、体积小，对你整天盯着的那只精灵来说加载也轻。PNG 是同一张图的更重、更通用的可编辑版本。',
          '运行桌宠用 WebP。想用 Photoshop 或精灵图编辑器打开那张图时再用 PNG，因为几乎什么工具都认 PNG，不需要额外插件。',
        ],
      },
      {
        heading: '为什么安装真正用的是 ZIP 包',
        paragraphs: [
          'pet 的 zip 下载是最实用的选择。里面 spritesheet.webp 与 pet.json 并排摆好，正好是 Codex 期望的布局。解压后把文件夹丢进 pets 目录，配对就已经是对的。',
          '只拿 WebP 也行，但你就得另外提供 pet.json，还得让两边名字对上。ZIP 省掉了这一步，也省掉了随之而来的各种手误。',
        ],
      },
      {
        heading: 'WebP、PNG、ZIP 一图速览',
        list: [
          'WebP 精灵图：Codex 实际读取的格式，体积小且透明。',
          'PNG 精灵图：可编辑的镜像版，体积大，仅适合改图。',
          'ZIP 包：WebP 加 pet.json，真正用来安装的那个文件。',
        ],
      },
      {
        heading: '什么时候用 PNG 单帧',
        paragraphs: [
          '有时你并不想要整段动画。PNG 导出能让你把某一帧塞进缩略图、社交帖或自定义改图里，而不必去折腾多帧的 WebP。把它当副产品，别当安装源。',
        ],
      },
      {
        heading: '把文件装到桌面上',
        paragraphs: [
          '解压 ZIP，把文件夹复制到 Codex 的 pets 目录，并让文件夹名和 pet.json 里的 name 字段一致。然后彻底重启 Codex，几秒内桌宠就该出现了。',
          '如果什么都没出现，原因几乎总是文件夹名和 JSON 对不上，或者重启时只是关了窗口而没有退出进程。两种都很好修。',
          '想自己做一只？到 codexpetgenerator.com 上传任意照片生成桌宠，然后看安装教程 /blog/how-to-create-a-codex-pet，或到 /blog 翻更多图文。一切从 / 开始。',
        ],
      },
    ],
  },
  {
    slug: 'codex-pet-vs-codexpets',
    title: 'Codex Pet Generator vs CodexPets: Download vs Create Your Own',
    description:
      'Two ways to get a Codex pet: generate one from your own photo, or download a ready-made pack. A side-by-side look at control, time, and quality.',
    date: '2026-09-09',
    author: 'PetGen',
    keywords: [
      'codex pet generator vs codexpets',
      'codexpets alternative',
      'download codex pets',
      'create vs download pet',
    ],
    related: [
      'codex-pet-ecosystem',
      'how-to-create-a-codex-pet',
      'what-is-pet-spritesheet',
    ],
    faq: [
      {
        question: 'Can I modify a pet downloaded from CodexPets?',
        answer: 'Technically yes, but it means editing the JSON file and the spritesheet by hand. The generator is far easier when you want to change how a pet looks.',
      },
      {
        question: 'Are CodexPets safe to download?',
        answer: 'Most are. A pet is an image plus a small pet.json, so there is no code to run. Check community ratings and stick to packs that other people already use.',
      },
      {
        question: 'How often does CodexPets add new pets?',
        answer: 'New uploads arrive most weeks, but quality varies. Sort by newest or top rated instead of browsing at random.',
      },
    ],
    sections: [
      {
        heading: 'What is Codex Pet Generator?',
        paragraphs: [
          'Codex Pet Generator creates pixel pets from your photos using AI. You upload an image, and the tool turns it into a pixel-art companion for your Codex desktop.',
        ],
        list: [
          'Pro: personalized, so the pet looks like your actual pet or yourself',
          'Pro: creative, because you control the style and the appearance',
          'Pro: unique, since no two generated pets come out identical',
          'Con: it takes effort, because you need decent photos and some settings tweaking',
          'Con: quality varies with the source image you start from',
          'Con: there is a learning curve before results feel predictable',
        ],
      },
      {
        heading: 'What is CodexPets?',
        paragraphs: [
          'CodexPets is a community marketplace where users share and download pre-made pixel pets. Think of it as an app store for Codex companions.',
        ],
        list: [
          'Pro: instant results, since you download and use a pet right away',
          'Pro: variety, with thousands of pets to choose from',
          'Pro: community ratings help you find the good ones',
          'Con: not unique, because others may already use the same pet',
          'Con: limited personalization, since downloaded pets are hard to edit',
          'Con: it depends on community contributions staying active',
        ],
      },
      {
        heading: 'Head-to-head comparison',
        paragraphs: [
          'Each row is scored out of five, with time and cost measured in practice.',
        ],
        list: [
          'Uniqueness: generator 5/5, CodexPets 2/5',
          'Ease of use: generator 3/5, CodexPets 5/5',
          'Customization: generator 5/5, CodexPets 2/5',
          'Time required: 30 to 60 minutes versus about 5 minutes',
          'Cost: free on both sides',
          'Quality control: you decide versus community ratings',
        ],
      },
      {
        heading: 'Which should you choose?',
        list: [
          'Pick the generator if you want a pet that looks like your real pet.',
          'Pick the generator if you enjoy creative projects and do not mind the setup.',
          'Pick the generator if you want something nobody else is using.',
          'Pick CodexPets if you want instant results.',
          'Pick CodexPets if you are happy with pre-made designs.',
          'Pick CodexPets if you would rather browse many options than build one.',
        ],
      },
      {
        heading: 'The best of both worlds',
        paragraphs: [
          'Many power users do both. They download popular pets from CodexPets for quick variety, then reach for the generator when the pet has to be theirs, like a birthday or a new puppy. The hybrid approach covers the days you want something new and the days you want something personal.',
        ],
      },
      {
        heading: 'Make one that is yours',
        paragraphs: [
          'Generating your own pet takes a single upload. Open codexpetgenerator.com when you are ready to try it. If the spritesheet format is new to you, read /blog/how-to-create-a-codex-pet first, then browse /blog for more comparisons.',
        ],
      },
    ],
  },
  {
    slug: 'codex-pet-vs-codexpets-zh',
    title: 'Codex Pet 生成器 vs CodexPets：下载现成还是自制像素宠物',
    description:
      '拿到 Codex 桌宠的两条路：用生成器从照片自制，或从 CodexPets 下载现成包。从可控性、耗时和质量三个方面做对比。',
    date: '2026-09-09',
    author: 'PetGen',
    keywords: [
      'codex 桌宠 生成器 vs codexpets',
      'codexpets 替代',
      '下载 codex 桌宠',
      '自制还是下载桌宠',
    ],
    related: [
      'codex-pet-ecosystem-zh',
      'how-to-create-a-codex-pet',
      'what-is-pet-spritesheet',
    ],
    faq: [
      {
        question: '从 CodexPets 下载的宠物能改吗？',
        answer: '可以，但要手动改 JSON 文件和精灵图。想调整外观时，生成器省事得多。',
      },
      {
        question: 'CodexPets 下载安全吗？',
        answer: '多数安全。一只桌宠就是一张图加一份很小的 pet.json，没有可执行的代码。看一下社区评分，优先选别人已经在用的包。',
      },
      {
        question: 'CodexPets 多久上新一次？',
        answer: '几乎每周都有新上传，但质量参差。建议按「最新」或「评分最高」排序，而不是随手翻。',
      },
    ],
    sections: [
      {
        heading: '什么是 Codex Pet Generator？',
        paragraphs: [
          'Codex Pet Generator 用 AI 把照片变成像素宠物。上传一张图，工具就把它转成一只可以放进 Codex 桌面的像素伙伴。',
        ],
        list: [
          '优点：个性化，宠物看起来像你真实的宠物，或者像你自己',
          '优点：可控，风格和外观由你决定',
          '优点：独特，没有两只生成出来的宠物是一样的',
          '缺点：需要花点功夫，照片要过得去，设置也得调',
          '缺点：质量随源图波动',
          '缺点：上手有学习曲线，前几只不会太快出效果',
        ],
      },
      {
        heading: '什么是 CodexPets？',
        paragraphs: [
          'CodexPets 是一个社区市场，用户在上面分享和下载做好的像素宠物。可以把它理解成 Codex 伴侣的应用商店。',
        ],
        list: [
          '优点：即时可用，下载完就能装上',
          '优点：选择多，几千只宠物可以翻',
          '优点：社区评分能帮你筛出好的',
          '缺点：不独特，别人可能正在用同一只',
          '缺点：个性化有限，下载来的宠物不好改',
          '缺点：依赖社区持续贡献',
        ],
      },
      {
        heading: '正面对比',
        paragraphs: [
          '下面每一项按五分制打分，时间和成本按实际体验估算。',
        ],
        list: [
          '独特性：生成器 5/5，CodexPets 2/5',
          '易用性：生成器 3/5，CodexPets 5/5',
          '自定义：生成器 5/5，CodexPets 2/5',
          '所需时间：30 到 60 分钟，对比约 5 分钟',
          '成本：两边都免费',
          '质量控制：自己做主，对比社区评分',
        ],
      },
      {
        heading: '你应该选哪个？',
        list: [
          '想要一只像自己真实宠物的，选生成器。',
          '喜欢动手、不介意花点时间设置的，选生成器。',
          '想要别人都没有的，选生成器。',
          '想要立刻就能用的，选 CodexPets。',
          '对现成设计满意的，选 CodexPets。',
          '比起亲手做、更愿意多翻几个选项的，选 CodexPets。',
        ],
      },
      {
        heading: '两全其美',
        paragraphs: [
          '很多重度用户两边都用：先从 CodexPets 下几只热门宠物换换花样，遇到生日、接回新小狗这类场合，再打开生成器做一只真正属于自己的。想换新鲜感的日子和想要专属感的日子，都能照顾到。',
        ],
      },
      {
        heading: '做一只真正属于你的',
        paragraphs: [
          '生成一只自己的宠物只要一次上传。准备好了就打开 codexpetgenerator.com。如果对精灵图格式还不熟，先读 /blog/how-to-create-a-codex-pet，再逛 /blog 看更多对比。',
        ],
      },
    ],
  },
  {
    slug: 'hand-drawn-vs-ai-pixel-pets',
    title: 'Hand-Drawn vs AI-Generated Pixel Pets: Which Is Better?',
    description:
      'Drawing a Codex pet yourself or generating one with AI: an honest look at time, cost, control, and which route fits the pet you actually want.',
    date: '2026-09-10',
    author: 'PetGen',
    keywords: [
      'hand drawn pixel pet',
      'draw your own codex pet',
      'ai vs manual pixel art',
      'pixel pet cost',
    ],
    related: [
      'make-your-first-codex-pixel-pet',
      'pixel-art-pet-design-guide',
      'how-to-create-a-codex-pet',
    ],
    faq: [
      {
        question: 'Can I use an AI-generated pet in Codex?',
        answer: 'Yes, as long as you export a spritesheet at the canvas size Codex expects and pair it with a pet.json. The format is the same whether you drew the pet or generated it.',
      },
      {
        question: 'How long does a hand-drawn pet take?',
        answer: 'A beginner usually needs two to four hours for a clean sprite. With practice it drops to about thirty minutes.',
      },
      {
        question: 'Do I need paid software to draw pixel art?',
        answer: 'No. Piskel runs in the browser for free, and basic paint tools work fine at small canvas sizes.',
      },
    ],
    sections: [
      {
        heading: 'The hand-drawn route',
        paragraphs: [
          'Drawing your own pixel pet gives you complete control. Every pixel, every color, every detail is a decision you make. The trade-off is time: a clean sprite can take a beginner two to four hours, while an experienced pixel artist finishes in about thirty minutes.',
        ],
        list: [
          'Pro: total creative control',
          'Pro: one-of-a-kind designs',
          'Pro: you get better at pixel art as you go',
          'Pro: free apart from your time',
          'Pro: works in any tool, including Piskel, Aseprite, and Paint',
          'Con: time-intensive',
          'Con: steep learning curve at the start',
          'Con: no undo for inspiration, so you begin from a blank canvas',
        ],
      },
      {
        heading: 'The AI-generated route',
        paragraphs: [
          'Tools like DALL-E, Midjourney, and dedicated pixel-art generators can produce a pet in seconds. The results are often good enough to keep, with a few catches.',
        ],
        list: [
          'Pro: fast, usually 30 seconds to 2 minutes',
          'Pro: no drawing skill required',
          'Pro: endless variations for brainstorming',
          'Con: not truly unique, since the model trains on existing art',
          'Con: the output may not match the picture in your head',
          'Con: some platforms restrict AI-generated content',
          'Con: you learn less about pixel art along the way',
        ],
      },
      {
        heading: 'The cost comparison',
        paragraphs: [
          'Time and money, measured across the three common routes.',
        ],
        list: [
          'Hand-drawn: 2 to 4 hours, free, real skill gained',
          'AI-generated: 1 to 2 minutes, free to 20 dollars a month, no skill gained',
          'Hybrid, AI base then hand edit: 30 to 60 minutes, free to 20 dollars a month, a little skill gained',
        ],
      },
      {
        heading: 'Our recommendation',
        paragraphs: [
          'Start with AI when you need inspiration, then refine by hand. Or draw one from scratch, which is hard to beat for satisfaction. Inside Codex Pet, the built-in generator returns decent results, but a custom-drawn pet is what stands out in a gallery.',
          'The hybrid route works well too. Generate a concept, then rebuild it in Piskel or Aseprite. You keep the speed and end up with something that is actually yours.',
        ],
      },
      {
        heading: 'Try both routes on the same photo',
        paragraphs: [
          'A useful test is to generate one pet from a photo, then redraw it by hand and compare. Upload to codexpetgenerator.com for the AI base, then work from the exported spritesheet. If the format is new to you, read /blog/how-to-create-a-codex-pet first and browse /blog for more guides.',
        ],
      },
    ],
  },
  {
    slug: 'hand-drawn-vs-ai-pixel-pets-zh',
    title: '手绘像素宠物 vs AI 生成：哪种更适合你？',
    description:
      '自己画还是用 AI 生成 Codex 像素宠物？从时间、成本、可控性和最终效果四个角度给出对比。',
    date: '2026-09-10',
    author: 'PetGen',
    keywords: [
      '手绘像素宠物',
      '自制 codex 桌宠',
      'AI 与手工像素画',
      '像素宠物 成本',
    ],
    related: [
      'make-your-first-codex-pixel-pet',
      'pixel-art-pet-design-guide',
      'how-to-create-a-codex-pet',
    ],
    faq: [
      {
        question: 'AI 生成的宠物能用进 Codex 吗？',
        answer: '可以。只要按 Codex 要求的画布尺寸导出精灵图，再配一份 pet.json 就行。不管是你画的还是生成的，格式都一样。',
      },
      {
        question: '手绘一只大概要多久？',
        answer: '初学者做一张干净的精灵图通常要 2 到 4 小时，熟练之后大概半小时。',
      },
      {
        question: '画像素画一定要买软件吗？',
        answer: '不用。Piskel 在浏览器里就能免费画，画布这么小，用基础工具一样能画。',
      },
    ],
    sections: [
      {
        heading: '手绘路线',
        paragraphs: [
          '自己画像素宠物，控制权完全在你手上。每一个像素、每一种颜色、每一处细节都由你决定。代价是时间：初学者做一张干净的精灵图要 2 到 4 小时，熟练的像素画师半小时左右就能收工。',
        ],
        list: [
          '优点：创意上完全可控',
          '优点：独一无二的设计',
          '优点：画得越多，像素画水平越高',
          '优点：除了时间，不花别的钱',
          '优点：Piskel、Aseprite 甚至画图工具都能用',
          '缺点：很费时间',
          '缺点：起步阶段学习曲线陡',
          '缺点：灵感没法撤销，只能从空白画布重新开始',
        ],
      },
      {
        heading: 'AI 生成路线',
        paragraphs: [
          'DALL-E、Midjourney 以及专门的像素画生成器，几秒钟就能出一只宠物。结果往往已经能直接用，但有几个前提。',
        ],
        list: [
          '优点：快，通常 30 秒到 2 分钟',
          '优点：不需要绘画基础',
          '优点：变化多，适合找灵感',
          '缺点：不够独特，模型是在现有作品上训练的',
          '缺点：出来未必是你脑子里想的那只',
          '缺点：部分平台对 AI 生成内容有限制',
          '缺点：过程中学不到像素画的技巧',
        ],
      },
      {
        heading: '成本对比',
        paragraphs: [
          '按常见的三条路线，把时间和钱都摊开来看。',
        ],
        list: [
          '手绘：2 到 4 小时，不花钱，能积累真实技能',
          'AI 生成：1 到 2 分钟，免费到每月 20 美元，技能上没有积累',
          '混合（AI 打底再手工修）：30 到 60 分钟，免费到每月 20 美元，能学到一点',
        ],
      },
      {
        heading: '我们的建议',
        paragraphs: [
          '需要灵感时先用 AI，再手工精修；或者干脆从零画一只，满足感很难被替代。在 Codex Pet 里，内置生成器出的结果还不错，但能在画廊里被一眼看到的是手绘的宠物。',
          '混合路线也很好用：先用 AI 生成一个概念，再在 Piskel 或 Aseprite 里重建一遍。速度保住了，拿到的东西又真正属于你。',
        ],
      },
      {
        heading: '同一张照片，两条路都试一次',
        paragraphs: [
          '一个实用的测试是：先用一张照片生成一只宠物，再照着它手绘一只，两者放一起比较。AI 底图可以直接上传到 codexpetgenerator.com 生成，画的时候对着导出的精灵图参考。如果对格式还不熟，先读 /blog/how-to-create-a-codex-pet，再逛 /blog 看更多教程。',
        ],
      },
    ],
  },
  {
    slug: 'codex-pet-ecosystem',
    title: 'The Codex Pet Ecosystem: Official, Community, and Everything Between',
    description:
      'Where Codex desktop pets actually come from: the official set, community galleries, generators, and how to tell which is worth installing.',
    date: '2026-09-11',
    author: 'PetGen',
    keywords: ["codex pet ecosystem","codex pets community","codex pet resources","codex pet galleries"],
    related: ['how-to-create-a-codex-pet', 'what-is-pet-spritesheet', 'export-formats-explained-zh'],
    faq: [
          {
                "question": "Are community Codex pets safe to install?",
                "answer": "A pet is a spritesheet image plus a small pet.json. Neither can execute code, so the risk is low. Still, download from places where you can see other people using the same pack."
          },
          {
                "question": "Do I need to pay for a good Codex pet?",
                "answer": "No. The official set is free, and generators like codexpetgenerator.com let you make your own from any photo at no cost."
          },
          {
                "question": "Why do some community pets look blurry?",
                "answer": "Usually a resolution mismatch. Pets are sized for a fixed canvas, so a 4K source scaled down to a 32px canvas loses detail. Generate at the right size instead of resizing."
          }
    ],
    sections: [
          {
                "heading": "Three layers of the ecosystem",
                "paragraphs": [
                      "The Codex pet world sits in three layers. The official set ships with the app and updates with it. Community galleries collect user-made pets, often themed around characters or memes. Generators sit underneath both, turning a photo into a spritesheet you can install."
                ]
          },
          {
                "heading": "The official layer",
                "paragraphs": [
                      "Official pets are the safest bet. They are versioned with Codex, so an update never breaks them, and they follow the canvas size the app actually expects. If you just want a pet on your desktop today, start here and stop."
                ]
          },
          {
                "heading": "The community layer",
                "paragraphs": [
                      "Community pets are where the personality lives. You will find anime characters, game mascots, and running jokes you will not see anywhere else. The tradeoff is quality control: some packs are resized rather than re-rendered, which is why they look soft."
                ]
          },
          {
                "heading": "What actually makes a good pet",
                "list": [
                      "Sharp at native canvas size, not upscaled",
                      "Sits still enough to not distract, but has one clear idle animation",
                      "Transparent background so it does not sit on a white box",
                      "A pet.json whose name field matches the folder name"
                ]
          },
          {
                "heading": "Making your own",
                "paragraphs": [
                      "Generators compress the whole loop into one upload. You pick a photo, the tool renders a pixel-art base, then a spritesheet plus pet.json. From upload to a working desktop pet is usually under five minutes."
                ]
          },
          {
                "heading": "How to judge a pack before installing",
                "paragraphs": [
                      "Open the spritesheet first. If the frames are cut off at the edges or the background is not transparent, skip it. A well-made pack is obvious the moment you look at the raw image."
                ]
          }
    ],
  },
  {
    slug: 'codex-pet-ecosystem-zh',
    title: 'Codex 桌宠生态盘点：官方、社区与中间地带',
    description:
      'Codex 桌宠到底从哪来：官方套装、社区画廊、生成器，以及怎么判断一个宠物包值不值得装。',
    date: '2026-09-11',
    author: 'PetGen',
    keywords: ["codex 桌宠 生态","codex 桌宠 社区","codex 宠物 资源","codex 桌宠 画廊"],
    related: ['how-to-create-a-codex-pet', 'what-is-pet-spritesheet', 'export-formats-explained-zh'],
    faq: [
          {
                "question": "社区桌宠安全吗？",
                "answer": "一只桌宠就是一张精灵图加一份很小的 pet.json，两者都无法执行代码，风险很低。但仍建议从能看到别人同样在用的地方下载。"
          },
          {
                "question": "好桌宠一定要花钱吗？",
                "answer": "不用。官方套装免费，像 codexpetgenerator.com 这样的生成器也能用任意照片免费做一只。"
          },
          {
                "question": "为什么有些社区桌宠看着很糊？",
                "answer": "多半是分辨率不匹配。桌宠有固定画布尺寸，把 4K 素材硬缩到 32px 画布就会丢细节。正确做法是按目标尺寸生成，而不是事后缩放。"
          }
    ],
    sections: [
          {
                "heading": "生态的三层结构",
                "paragraphs": [
                      "Codex 桌宠分三层。官方套装随应用发布，跟着版本更新；社区画廊收集用户自制的宠物，常围绕角色或梗；生成器在最底层，把一张照片变成可安装的精灵图。"
                ]
          },
          {
                "heading": "官方层",
                "paragraphs": [
                      "官方宠物最稳妥。它随 Codex 版本走，更新不会失效，并且严格符合应用期望的画布尺寸。如果你只想今天就拥有一只桌宠，从这里开始即可。"
                ]
          },
          {
                "heading": "社区层",
                "paragraphs": [
                      "个性都在社区层。这里能找到动漫角色、游戏吉祥物，以及别处看不到的梗。代价是质量参差：有些包是缩放而非重绘，所以看起来发虚。"
                ]
          },
          {
                "heading": "一只好桌宠的标准",
                "list": [
                      "原生画布尺寸下清晰，不是放大的",
                      "足够安静不干扰，但有一个明确的待机动画",
                      "透明背景，不会坐在一个白框里",
                      "pet.json 的 name 字段与文件夹名一致"
                ]
          },
          {
                "heading": "自己动手做一只",
                "paragraphs": [
                      "生成器把整个流程压缩成一次上传。选一张照片，工具渲染出像素底图，再输出精灵图和 pet.json。从上传到桌面出现桌宠，通常不到五分钟。"
                ]
          },
          {
                "heading": "安装前怎么判断一个包",
                "paragraphs": [
                      "先打开精灵图看。如果帧被切到边缘，或者背景不是透明的，就跳过。做得好的包，看一眼原图就能看出来。"
                ]
          }
    ],
  },
  {
    slug: 'why-developers-love-desktop-companions',
    title: 'Why Developers Love Desktop Companions',
    description:
      'A desktop companion does almost nothing, and that is the point. Here is why developers keep one on screen through long coding sessions, and what actually makes it stick.',
    date: '2026-09-12',
    author: 'PetGen',
    keywords: [
      'desktop companion developers',
      'coding companion pet',
      'developer wellbeing pet',
      'codex pet motivation',
    ],
    related: [
      'codex-pet-ecosystem',
      'how-to-create-a-codex-pet',
      'what-is-pet-spritesheet',
    ],
    faq: [
      {
        question: 'Do desktop companions actually help developers focus?',
        answer: 'For some people, yes, and the effect is small. It comes from the break the pet prompts rather than from the animation itself. If you dislike interruptions, a quiet idle pet tends to fit better than a timer that fires mid-thought.',
      },
      {
        question: 'Can I make a coding companion pet from my own photo?',
        answer: 'Yes. Upload a photo to codexpetgenerator.com and the tool renders a pixel-art base, then a spritesheet and pet.json you can install in Codex.',
      },
      {
        question: 'Will a desktop pet slow down my machine?',
        answer: 'No. A pet is one small image plus a few kilobytes of JSON. There is no process running behind it and no network call after install.',
      },
      {
        question: 'How long does making one take?',
        answer: 'Usually under five minutes. Most of that time goes into picking a photo you actually want to see every day.',
      },
    ],
    sections: [
      {
        heading: 'Why desktop companion developers keep coming back',
        paragraphs: [
          'A desktop companion does very little. It sits in a corner of the screen, blinks, stretches, and reacts when you ignore it for too long. For desktop companion developers the appeal is not the animation. It is the tiny excuse to stop grinding for two seconds.',
          'That sounds trivial until you count the hours. A coding session that runs four hours straight is rarely four good hours. The last one is usually spent rereading the same function. A pet interrupts that slide without asking you to leave the desk.',
          'Developers spend the day in a state of partial interruption. Slack, a failing build, a reviewer who wants changes. The pet is the one interruption that asks nothing back, which is why it works as a reset rather than another distraction.',
        ],
      },
      {
        heading: 'A coding companion pet is a focus tool, not a toy',
        paragraphs: [
          'People assume a coding companion pet is decoration. In practice it works more like a Pomodoro timer that does not nag. The sprite changes state when the tool idles, so you notice that you have been staring at a stack trace without actually reading it.',
          'The difference from a timer is consent. A timer interrupts you in the middle of a thought. A pet simply exists, and you choose when to look at it. Developers who mute notification popups usually tolerate that arrangement just fine.',
          'There is a practical side too. Most developers already know they should take breaks, and most of them still skip them. A pet lowers the cost of that decision. Looking away for ten seconds is easier to justify than standing up and leaving the desk.',
        ],
      },
      {
        heading: 'What a developer wellbeing pet actually changes',
        paragraphs: [
          'Burnout rarely arrives as one dramatic moment. It builds from hundreds of small sessions where you skipped the break because the bug was almost solved. A developer wellbeing pet does not fix a bad sprint, and it is not therapy.',
          'What it can do is make the break visible. When the only feedback in the room is a compiler error and a blinking cursor, an idle animation becomes a readable change of state. Small, but it is real.',
          'Teams notice this more than individuals do. When a companion sits on every screen in a shared room, breaks start to line up on their own, and the person who has been quiet for hours gets a nudge without a manager having to give one.',
        ],
      },
      {
        heading: 'Codex pet motivation, from novelty to habit',
        paragraphs: [
          'The first week of any Codex pet motivation is novelty. You watch it, you screenshot it, you show someone on your team. That part fades in about three days.',
          'What lasts is the routine the pet anchors. Upload a photo, generate a pet, install it once, and it lives in the corner while you work. The pet stops being the point and the rhythm it marks takes over.',
          'If you want the habit to survive a busy month, install the pet before the crunch instead of during it. A companion added mid-crunch reads as one more thing to manage. A companion that was already there is just part of the desk.',
          'This is also why a personal pet outlasts a downloaded pack. A companion made from your own photo carries a joke only you get, and that small sense of ownership keeps it on screen long after the novelty is gone.',
        ],
      },
      {
        heading: 'What makes a companion worth keeping',
        paragraphs: [
          'Not every pack earns its place. These are the traits that separate a pet you keep for a year from one you delete in a day.',
        ],
        list: [
          'Readable at a glance, even on a 32-pixel canvas',
          'One idle animation instead of a busy slideshow',
          'A transparent background so it never sits in a white box',
          'A pet.json whose name field matches the folder name',
          'Silent by default, with no sound and no popup',
        ],
      },
      {
        heading: 'Build one you will actually keep',
        paragraphs: [
          'You do not need art skills for this. Upload any photo to codexpetgenerator.com, let the tool render a pixel-art base, and download a spritesheet plus pet.json. Installing it is a folder copy.',
          'If the format is new to you, read /blog/how-to-create-a-codex-pet first, then browse /blog for more walkthroughs. Open / when you are ready to generate another one.',
        ],
      },
    ],
  },
  {
    slug: 'why-developers-love-desktop-companions-zh',
    title: '玩过宠物，才懂开发者为什么需要「陪伴感」',
    description:
      '桌宠几乎什么都不做，而这正是它的价值。本文讲开发者为什么愿意让一只小宠物陪着自己写完一整个下午的代码，以及什么样的桌宠才能留得住。',
    date: '2026-09-12',
    author: 'PetGen',
    keywords: [
      '开发者 桌宠',
      '陪伴感 开发',
      '编程 桌宠 专注',
      'codex 桌宠 动力',
    ],
    related: [
      'codex-pet-ecosystem-zh',
      'how-to-create-a-codex-pet',
      'what-is-pet-spritesheet',
    ],
    faq: [
      {
        question: '桌宠真的能让开发者更专注吗？',
        answer: '对一部分人有效，效果很轻。起作用的是它提示你停下来，而不是动画本身。如果你讨厌被打断，安静的桌宠通常比定时器更好用，后者总在你思路正顺时弹出。',
      },
      {
        question: '可以用自己的照片做一只编程桌宠吗？',
        answer: '可以。把照片上传到 codexpetgenerator.com，工具会渲染出像素底图，再输出精灵图和 pet.json，直接装进 Codex 即可。',
      },
      {
        question: '做一只大概要多久？',
        answer: '多数人五分钟以内。其中大半时间花在挑一张你每天愿意看到的照片上。',
      },
    ],
    sections: [
      {
        heading: '桌宠几乎什么都不做，这恰恰是重点',
        paragraphs: [
          '一只桌宠做的事很少。它待在屏幕一角，眨眼、伸懒腰，你太久不理它时它会有反应。开发者愿意留着它，不是因为动画多好看，而是因为它给了你一个停两秒的理由。',
          '听上去不值一提，但把时间算进去就不一样了。连续写四小时代码，很少真的都是高质量的四个小时。最后一个小时多半在反复读同一个函数。桌宠打断的正是这种下滑，而且不需要你离开工位。',
        ],
      },
      {
        heading: '编程桌宠是专注工具，不是装饰品',
        paragraphs: [
          '很多人以为编程桌宠只是摆件。实际用起来，它更像一个不催你的番茄钟。工具空闲后精灵状态会变，你就发现自己盯着一堆报错根本没在看。',
          '和定时器的区别在于「许可」。定时器会在你想到一半时打断你；桌宠只是存在，什么时候看它由你决定。习惯关掉通知弹窗的开发者，通常能接受这种安排。',
        ],
      },
      {
        heading: '陪伴感真正改变的是什么',
        paragraphs: [
          '倦怠很少以某个戏剧性瞬间出现。它来自几百次「bug 就差一点了，先不休息」的小决定。桌宠治不好一个糟糕的迭代，它也不是心理治疗。',
          '它能做的是让休息这件事变得可见。当房间里唯一的反馈是编译错误和闪烁的光标时，一段待机动画就是一种你能读到的状态变化。很小，但真实。',
        ],
      },
      {
        heading: '从新鲜感到习惯：桌宠的持续动力',
        paragraphs: [
          '任何桌宠的第一周都是新鲜感。你会盯着看、截图、发给同事。这部分大概三天就过去了。',
          '能留下来的是它锚定的节奏。上传一张照片，生成一只，装好就让它待在角落。桌宠本身不再重要，重要的是它标记出的节奏。',
          '这也是自制桌宠比下载的宠物包更耐看的原因。用自己的照片做出来的，只有你懂那个梗，这份归属感才是新鲜感消退后仍然留着它的原因。',
        ],
      },
      {
        heading: '什么样的桌宠值得长期留着',
        list: [
          '一眼能看清，哪怕画布只有 32 像素',
          '一个待机动画，而不是一段热闹的幻灯片',
          '透明背景，不会坐在一个白框里',
          'pet.json 的 name 字段与文件夹名一致',
          '默认安静，没有音效也不弹窗',
        ],
      },
      {
        heading: '做一只你愿意一直留着的桌宠',
        paragraphs: [
          '不需要任何美术基础。把任意照片上传到 codexpetgenerator.com，等工具渲染出像素底图，下载精灵图和 pet.json。安装就是把文件夹复制过去。',
          '如果不熟悉格式，先读 /blog/how-to-create-a-codex-pet，再到 /blog 看更多教程。想再做一只时，从 / 开始即可。',
        ],
      },
    ],
  },
{
    "slug": "pixel-character-design-101",
    "title": "Pixel Character Design 101: Making Pets Resemble Their Owners",
    "description": "Pixel character design is a design problem, not a filter. Learn concrete techniques to turn a photo into a 32px pet sprite that actually resembles its owner.",
    "date": "2026-09-14",
    "author": "PetGen",
    "keywords": [
      "pixel character design",
      "pixel character design tips",
      "pet likeness pixel",
      "pixel art character guide"
    ],
    "related": [
      "codex-pet-ecosystem",
      "how-to-create-a-codex-pet",
      "what-is-pet-spritesheet"
    ],
    "faq": [
      {
        "question": "Why does my downscaled photo not look like my pet?",
        "answer": "Direct downscaling keeps gradients and discards the edges that carry identity. The result is a smeared tone map, not a face. Build the sprite from the silhouette and proportions instead, using the photo only as a colour and shape reference."
      },
      {
        "question": "How many colours should a 32px pet sprite use?",
        "answer": "Aim for 8 to 12 colours across the whole character. This limit forces you to assign meaning to each tone and keeps the face readable. More than that at 32px usually reads as noise rather than detail."
      },
      {
        "question": "What single feature matters most for likeness?",
        "answer": "One anchor feature pushed slightly past realism, a beard, glasses, a nose patch. Five approximate traits produce a generic look; one strong signal lets the viewer's brain complete the rest of the pet."
      },
      {
        "question": "How do I know a sprite is actually finished?",
        "answer": "Place it on pure black and pure white. The outline should separate from the body on black, and the highlight should survive on white. If it only works on one background, adjust the outline by one value step and retest. When it passes both, publish it with the rest of the series on /blog."
      }
    ],
    "sections": [
      {
        "heading": "A photo is not a sprite",
        "paragraphs": [
          "Upload a photo and shrink it to 32x32 and you get a blur, not a pet. Photos carry millions of colours and smooth gradients that simply vanish at low resolution. The eye sees a brown smear where a face should be. That is why the Codex Pet tool at / treats your upload as a reference, never as a source.",
          "A sprite is built, not captured. Every pixel is a deliberate decision. Going from a 1000px photo to a 32px sprite throws away roughly 99 percent of the information, and the viewer fills in the rest from memory. If those memory cues are missing, the likeness collapses. Start from the shape you want, not the pixels you happen to have. The full pipeline is in /blog/how-to-create-a-codex-pet."
        ]
      },
      {
        "heading": "Silhouette first, details never",
        "paragraphs": [
          "Before any colour goes down, draw the outline. A good pet sprite is recognizable at 16px as a solid black blob. If the silhouette is ambiguous, no amount of internal detail will rescue it. Cats, dogs, and people each carry a posture the eye locks onto within a fraction of a second.",
          "Test this yourself: fill your sprite solid black and shrink it to icon size. Can you name the species? Can you tell it is your pet? If not, the silhouette is doing the work of three features you have not drawn yet. Build the body language first, then earn the right to add detail. Our /blog/rabbit-codex-pet post from Day 16 applies exactly this test to a real example."
        ]
      },
      {
        "heading": "Value contrast beats hue contrast",
        "paragraphs": [
          "At 32px the eye reads light and dark long before it reads red versus blue. Two shapes separated by value, a light face against a dark background, a bright belly against a mid coat, stay readable. Hue alone, when the brightness is similar, merges into one flat region that the brain cannot parse.",
          "This is the pixel character design tip most beginners miss. Spend your contrast budget on value steps, not on a rainbow. A three value ramp, shadow, base, highlight, per material reads cleaner than twelve similar hues. The /blog/what-is-pet-spritesheet guide shows how those ramps become the frames of an animation."
        ]
      },
      {
        "heading": "Eight to twelve colours, no more",
        "paragraphs": [
          "Palette discipline is what separates a sprite from a screenshot. Cap the whole character at 8 to 12 colours. That forces real choices: which tone is the coat, which is the shadow, which is the eye. Constraints make the face legible because every colour now carries meaning instead of noise.",
          "Dithering can fake a third tone between two colours with a checkerboard pattern, but it costs crispness. At 32px, dithering usually turns into visual noise. Use it sparingly, only across large calm areas like a sweater, and never on the eyes or the outline. A clean 10 colour sprite beats a dithered 30 colour one every single time."
        ]
      },
      {
        "heading": "Proportion and one anchor feature",
        "paragraphs": [
          "People judge that is my dog from proportion before from colour. A chihuahua and a retriever at 32px differ mostly in head to body ratio and ear placement. Get the ratio wrong and the breed disappears. Get it right and even a monochrome sprite reads as the correct animal. The same holds for people: a round head on a small body, a long face on a tall one.",
          "Then pick one anchor. Five approximate features make a generic face; one exaggerated anchor makes a person. The anchor is what friends notice first, a curly beard, round glasses, a specific hairline, a pink nose on a pet. Push that single feature past realism and the brain supplies the rest. One strong signal beats five weak ones, and it is faster to draw."
        ]
      },
      {
        "heading": "Traits of a readable 32px sprite",
        "list": [
          "One clear silhouette that still reads at icon size",
          "A three value ramp per material, built on value not hue",
          "8 to 12 colours total, with the outline in the darkest tone",
          "A single exaggerated anchor feature carrying the identity",
          "Verified on both a dark and a light background"
        ]
      },
      {
        "heading": "Check your sprite on two backgrounds",
        "list": [
          "On pure black, the outline must still separate from the body",
          "On pure white, the highlight must not vanish",
          "If either fails, shift the outline one value step darker or lighter",
          "A sprite that works on only one background is not finished"
        ]
      }
    ]
  },
{
    "slug": "pixel-character-design-101-zh",
    "title": "像素角色设计 101：怎么让宠物更“像”",
    "description": "像素角色设计不是加滤镜，而是做设计。本文用具体技法讲清楚：怎样把一张照片变成 32px 的宠物 sprite，并且真的像它的主人。",
    "date": "2026-09-14",
    "author": "PetGen",
    "keywords": [
      "像素角色设计",
      "像素宠物 像主人",
      "像素艺术 角色设计"
    ],
    "related": [
      "codex-pet-ecosystem-zh",
      "how-to-create-a-codex-pet",
      "what-is-pet-spritesheet"
    ],
    "faq": [
      {
        "question": "为什么照片缩完不像我的宠物？",
        "answer": "直接缩小留渐变、丢边缘，结果是糊掉的色调图而非脸。先按轮廓和比例建 sprite，照片只作颜色与形状参考。"
      },
      {
        "question": "32px 宠物 sprite 用多少色？",
        "answer": "整角色 8 到 12 种。这上限逼你给每色分配意义，脸也更清。再多，32px 上常读成噪声而非细节。"
      },
      {
        "question": "相似度哪个特征最关键？",
        "answer": "一个略夸张的锚点。五个将就的特征显路人；一个强信号让大脑补全其余部分。"
      },
      {
        "question": "怎么判断 sprite 画完了？",
        "answer": "分别放纯黑与纯白。黑上轮廓与身子分开，白上高光保住。只一边成立就调轮廓一档再测。两边能过，就和 /blog 其余系列一起发。"
      }
    ],
    "sections": [
      {
        "heading": "照片不是 sprite",
        "paragraphs": [
          "把照片直接缩到 32×32，得到的是一团糊，不是宠物。照片里几百万种颜色和柔和渐变，低分辨率下全没了。眼睛看到的是棕色污渍，不是脸。所以 Codex Pet 把照片当参考，不是当素材——做法见 /。",
          "sprite 是画出来的，不是抓出来的。每个 pixel 都是一次决定。从 1000px 到 32px，丢掉约 99% 的信息，观看者用记忆补全。记忆线索不在，相似度就塌。先从想要的形状开始，而不是手上的像素。流程写在 /blog/how-to-create-a-codex-pet。"
        ]
      },
      {
        "heading": "先画轮廓，再谈细节",
        "paragraphs": [
          "落色之前先画外轮廓。好的宠物 sprite，16px 涂黑也能认出。轮廓含糊，内部细节救不回。猫、狗、人各有姿态，眼睛瞬间锁定。",
          "自己测：涂黑缩到图标大小，能说清物种吗？能认出你的宠物吗？不能，说明轮廓在替你扛三个没画的特征。先建肢体语言，再加细节。Day 16 的 /blog/rabbit-codex-pet 用此测试讲真例。"
        ]
      },
      {
        "heading": "明度对比胜过色相对比",
        "paragraphs": [
          "32px 上，眼睛先读亮暗，后读红蓝。靠明度分开的两个形——亮脸衬暗背景、亮肚皮衬中调毛——始终清楚。只靠色相、亮度相近的两块会糊成一片。",
          "这是多数初学者漏掉的 pixel character design 要点。对比预算花在明度台阶，不花在彩虹上。每材质用三段 value（阴影、基色、高光）的 ramp，比十二个相近色相干净。/blog/what-is-pet-spritesheet 讲这些 ramp 如何变成动画帧。"
        ]
      },
      {
        "heading": "颜色控制在 8 到 12 种",
        "paragraphs": [
          "调色板克制，是 sprite 和截图的分界。整角色压到 8 到 12 色，逼你做选择：哪档是毛、哪档是阴影、哪档是眼。限制让脸清晰，每色都承载意义而非噪声。",
          "dithering 用棋盘格在两色间假造第三档，代价是边缘变糊。32px 上它常变成噪声。只在大而平静的区域（如毛衣）少量用，绝不用在眼或轮廓。干净 10 色 sprite，胜过 dithering 的 30 色。"
        ]
      },
      {
        "heading": "比例，加一个锚点特征",
        "paragraphs": [
          "人先靠比例判断“这是我的狗”，再靠颜色。吉娃娃和金毛在 32px 上差在头身比和耳位。比例错，品种没了；比例对，单色 sprite 也读得出。人同理：圆头小身、长脸高个。",
          "再选一个锚点。五个都差的特征拼出路人脸；一个夸张的锚点拼出人。锚点是朋友第一眼注意的：卷胡子、圆镜、某条发际线、宠物鼻上粉斑。推过真实，大脑补全其余。一强信号胜五弱信号，还更快画。"
        ]
      },
      {
        "heading": "一个能读的 32px sprite 长什么样",
        "list": [
          "清晰轮廓，图标大小仍认得出",
          "每材质三段 value 的 ramp，靠明度不靠色相",
          "共 8 到 12 色，轮廓用最暗档",
          "一个夸张的锚点特征扛身份",
          "深、浅背景都验证过"
        ]
      },
      {
        "heading": "在两种背景上检查你的 sprite",
        "list": [
          "纯黑上轮廓仍与身子分开",
          "纯白上高光不消失",
          "任一边失败，轮廓调暗或调亮一档",
          "只一种背景成立的 sprite 不算画完"
        ]
      }
    ]
  },
{
    "slug": "golden-age-pixel-art-8bit-ai",
    "title": "The Golden Age of Pixel Art: From 8-bit to AI",
    "description": "Pixel art history runs from 8-bit hardware limits to today's AI tools. Trace the 16-bit step up, the indie revival, and what AI still gets wrong about sprites.",
    "date": "2026-09-13",
    "author": "PetGen",
    "keywords": [
      "pixel art history",
      "history of pixel art",
      "8 bit art",
      "pixel art revival"
    ],
    "related": [
      "codex-pet-ecosystem",
      "how-to-create-a-codex-pet",
      "what-is-pet-spritesheet"
    ],
    "faq": [
      {
        "question": "Why did old games use dithering?",
        "answer": "Dithering faked gradients the hardware could not show. With only a handful of colors allowed on screen, artists checkerboarded two tones to imply a third. It was a memory workaround, not a style."
      },
      {
        "question": "Is pixel art still limited by hardware today?",
        "answer": "No. Modern pixel art is a deliberate style. Developers choose a low resolution and a small palette for look and readability, not because the machine demands it."
      },
      {
        "question": "Can AI replace pixel artists?",
        "answer": "For stills, partly. For animated spritesheets, not yet. AI drifts between frames and rarely respects a true indexed palette, so a human still cleans up consistency."
      },
      {
        "question": "What is a spritesheet?",
        "answer": "A single image that holds every animation frame in a grid. The game engine slices it at runtime. It is faster to load than many files and makes frame consistency visible at a glance."
      }
    ],
    "sections": [
      {
        "heading": "The hardware-constraint era",
        "paragraphs": [
          "Pixel art was not a style choice at first. On the Nintendo Entertainment System a sprite was 8 by 8 pixels, and the machine could show 64 of them at once. The master palette held 64 colors but only 25 to 54 appeared on screen at once, split across background and sprite layers. Artists worked inside a byte budget, not a taste budget.",
          "Limited palettes forced dithering. When a machine could not show a smooth gradient between two colors, artists placed the two in a checkerboard to fake an in-between tone. Dithering was a workaround for memory, not an aesthetic. The tile system also mattered: backgrounds were built from 8x8 or 16x16 tiles in a small shared pool, so repeats saved sprite memory."
        ]
      },
      {
        "heading": "The 16-bit step up",
        "paragraphs": [
          "The Super Nintendo and Sega Genesis widened everything. Palettes grew to 256 colors with 15 or 16 available per sprite, and sprites could be 16x16, 32x32, or 64x64. That let characters read clearly at small sizes and gave backgrounds more depth through layered parallax. The craft stayed constrained, but the ceiling moved up enough that games like the 1994 Donkey Kong Country could mix pre-rendered 3D with hand-tuned pixel output.",
          "Even with more room, teams kept tight palettes. A 16-color sprite is easier to animate and stays readable against busy backgrounds. The constraint had become a tool."
        ]
      },
      {
        "heading": "The hi-bit indie revival",
        "paragraphs": [
          "When HD displays arrived, pixel art should have died. Instead it came back as a choice. Games like Cave Story (2004), Spelunky (2008), and Shovel Knight (2014) used low resolutions to signal a feel: chunky, readable, nostalgic but precise. The limit was no longer hardware. It was a style the developer picked and the audience recognized.",
          "This shift changed who made the art. Hobbyists and small teams could match the look of a 1990s studio without a 1990s budget. Pixel art became a craft with its own schools of thought, shared palettes, and tutorials, rather than a side effect of expensive silicon."
        ]
      },
      {
        "heading": "Craft rules that survived",
        "paragraphs": [
          "A few rules carried across four decades. The silhouette must read at a glance: you should recognize a character from its outline before you see a single color. Limited palettes still beat thousands of colors for clarity and for animation work.",
          "Sub-pixel motion is the quiet one. Instead of moving a character a full pixel each frame, animators shift weight, squash, and stretch within a pixel to imply smoother movement than the grid allows. It is why good pixel animation feels alive at 30 frames per second while bad pixel animation looks like it is snapping."
        ]
      },
      {
        "heading": "Modern tooling changed the workflow",
        "paragraphs": [
          "Tools like Aseprite turned pixel art into a structured pipeline. Artists paint on indexed palettes, where each pixel stores a palette index instead of a raw color, which keeps files small and colors consistent across frames. The export step produces a spritesheet: one image holding every frame, laid out in a grid the game engine slices at runtime.",
          "Spritesheets solve a real problem. Loading one packed image beats hundreds of separate files, and one grid makes frame consistency visible at a glance. If you want to build your own character, the walkthrough at /blog/how-to-create-a-codex-pet covers the sheets, and /blog/what-is-pet-spritesheet explains how the frames are packed and sliced."
        ]
      },
      {
        "heading": "What AI image models get right and wrong",
        "paragraphs": [
          "Modern image models are good at pixel art stills. Point one at a 16-color dungeon tile and you often get a convincing single frame with crisp edges and a believable palette. The failure shows up the moment you need a sequence.",
          "A walk cycle needs the same character, palette, and outline shifted slightly across eight frames. Models drift: a hand moves, a color index changes, the silhouette wobbles. They also rarely honor a true indexed palette, so output needs manual cleanup before a spritesheet. That human pass is the difference between a toy and a usable asset."
        ]
      },
      {
        "heading": "Where to go next",
        "paragraphs": [
          "Pixel art is a live craft, not a museum piece. The constraint era taught the rules, the indie revival proved they were worth keeping, and current tools make them teachable. Start at / to generate a pixel pet, and read more on the craft at /blog."
        ]
      }
    ]
  },
{
    "slug": "golden-age-pixel-art-8bit-ai-zh",
    "title": "像素艺术的黄金时代：从 8-bit 到 AI 生成",
    "description": "像素艺术历史从 8-bit 硬件限制走到今天的 AI 工具。我们追溯这门手艺、16-bit 的进阶、独立复兴，以及 AI 至今仍做错的地方。",
    "date": "2026-09-13",
    "author": "PetGen",
    "keywords": [
      "像素艺术 历史",
      "8 bit 像素",
      "像素艺术 复兴"
    ],
    "related": [
      "codex-pet-ecosystem-zh",
      "how-to-create-a-codex-pet",
      "what-is-pet-spritesheet"
    ],
    "faq": [
      {
        "question": "为什么老游戏要用抖色？",
        "answer": "抖色用来伪造硬件表现不出的渐变。屏幕上同时允许的颜色很少，美术把两种色调交错成棋盘格，暗示出第三种。这是对内存的妥协，不是风格。"
      },
      {
        "question": "今天的像素艺术还受硬件限制吗？",
        "answer": "不受了。现代像素艺术是主动选择的风格。开发者为了观感和可读性，主动用低分辨率和少色板，而不是机器逼的。"
      },
      {
        "question": "AI 能取代像素美术吗？",
        "answer": "静帧上能替代一部分。动画精灵表上还不行。AI 在不同帧之间会漂移，也很少遵守真正的索引调色板，所以仍要人工修一致性。"
      },
      {
        "question": "什么是精灵表？",
        "answer": "一张把每一帧动画排成网格的图。游戏引擎在运行时切片。它比加载很多文件更快，也让逐帧一致性一眼可见。"
      }
    ],
    "sections": [
      {
        "heading": "硬件限制的时代",
        "paragraphs": [
          "红白机上精灵仅 8×8 像素，整机同屏最多 64 个。64 色调色板，但屏上同显只 25 至 54 色，还要分给背景与精灵层。美术在按字节算的硬预算里工作。",
          "受限调色板逼出抖色：两色无法平滑过渡时，美术用棋盘格伪造中间调，这是为内存妥协，非美学。背景由 8×8 或 16×16 瓦片拼成，取自小共享池，重复瓦片省下宝贵内存。"
        ]
      },
      {
        "heading": "16-bit 的进阶",
        "paragraphs": [
          "超级任天堂把调色板升到 256 色，每精灵可用 15 或 16 色，尺寸达 64×64，角色小尺寸也清晰。",
          "即便空间更大，团队仍故意精简调色板。16 色精灵更易逐帧动画，也更易在繁忙背景前保持可读。"
        ]
      },
      {
        "heading": "高清时代的独立复兴",
        "paragraphs": [
          "高清屏到来，像素艺术反成主动选择。《洞窟物语》《铲子骑士》用低分辨率传达厚重、清晰、怀旧的手感。",
          "这改变了创作者。爱好者和小团队不用 90 年代预算，也能做出那时工作室的观感，像素艺术成了有流派的手艺。"
        ]
      },
      {
        "heading": "留存下来的工艺规则",
        "paragraphs": [
          "剪影须一眼可辨：看见颜色前就能从轮廓认出角色。精简调色板在清晰度和动画上仍胜万色。",
          "亚像素运动：动画师不每帧移整整一像素，而在一像素内挪重心、挤压拉伸，暗示比网格更顺滑的动作。"
        ]
      },
      {
        "heading": "现代工具改变了工作流",
        "paragraphs": [
          "Aseprite 让每像素存调色板索引而非原始色，文件小、各帧色一致，导出即一张网格精灵表，引擎运行时切片。",
          "精灵表加载快过上百文件，逐帧一致性肉眼可见。做自己的角色见 /blog/how-to-create-a-codex-pet，帧如何切片见 /blog/what-is-pet-spritesheet。"
        ]
      },
      {
        "heading": "AI 图像模型做对和做错的地方",
        "paragraphs": [
          "现代模型很会像素静帧，给“16 色地牢瓦片”常得边缘锐利的可信单帧。失败在你需要动画序列时。",
          "AI 在逐帧一致性上吃力：同角色、同调色板、同轮廓要在八帧间微偏移，模型会漂，且少守索引调色板，进精灵表前仍要人工清理。"
        ]
      },
      {
        "heading": "接下来去哪里",
        "paragraphs": [
          "像素艺术是活的手艺。从 / 生成像素宠物，更多工艺文见 /blog。"
        ]
      }
    ]
  },
  {
    slug: 'color-psychology-pet-mood',
    title: 'Color Psychology: How Your Pixel Pet Palette Affects Your Mood',
    description:
      'Why the color palette you pick for a pixel pet changes how you feel at your desk, what the research actually shows, and how to choose a palette that helps you focus.',
    date: '2026-09-15',
    author: 'PetGen',
    keywords: [
      'pixel pet colors',
      'pet color palette',
      'calming colors',
      'codex pet design',
    ],
    faq: [
      { question: 'Will a calming palette actually help me focus?', answer: 'Not on its own. It removes one source of visual noise, which is a small but real gain.' },
      { question: 'Can I change colors after generating a pet?', answer: 'Yes, regenerate with a different description. Colors come from the description and the reference photo, so a small wording change can shift the palette.' },
      { question: 'Do darker pets look bad on light themes?', answer: 'They need more contrast, not brighter colors. Add a contrasting outline in your description.' },
    ],
    sections: [
      {
        heading: 'Why pet colors matter more than you think',
        paragraphs: [
          'A pixel pet sits in the corner of your editor for hours at a time. That makes it the single most-viewed graphic in your workspace, and unlike a wallpaper you actually notice it every time you glance away from code.',
          'Color is the part of a pet you perceive before you register its shape. So the palette does most of the emotional work, whether you chose it deliberately or just picked something that looked good on the preview page.',
        ],
      },
      {
        heading: 'What the research supports, and what it does not',
        paragraphs: [
          'The honest summary: warm colors do tend to raise arousal and cool colors tend to lower it, and this is one of the more replicable findings in color research. Beyond that, many popular claims about specific colors causing specific emotions do not survive replication.',
          'That is still useful. If you want your pet to feel alert and playful, warmer hues are the safer bet. If you want it to fade into the background while you work, cooler and desaturated hues do that reliably.',
        ],
      },
      {
        heading: 'Three palette directions',
        list: [
          'Calm and low-stimulus: desaturated blue, slate, and soft grey. Best for long focus sessions and for anyone who already has a busy screen.',
          'Warm and friendly: amber, coral, terracotta. Best when the pet is meant to feel like company rather than furniture.',
          'High-contrast accent: one saturated hue against near-black. Best when you want the pet to be a focal point you check on rather than something you ignore.',
        ],
      },
      {
        heading: 'Contrast matters more than hue',
        paragraphs: [
          'The most common mistake is picking colors that are pleasant in isolation but nearly invisible against the editor theme. A pet that vanishes is a pet you stop noticing, and a pet that vibrates against the background is worse: it pulls your eye away from code every few seconds.',
          'Aim for clear separation from your theme background. On a dark theme, that usually means staying above a certain lightness; on a light theme, the reverse. PetGen previews every pet on both, which is the fastest way to catch a palette that only works in one.',
        ],
      },
      {
        heading: 'Making the choice stick',
        paragraphs: [
          'Pick the palette for the mood you want in the last hour of work, not the first. Most people choose bright and cheerful, then find it tiring by late afternoon. If you work past dark, a calmer palette usually holds up better.',
        ],
      },
      {
        heading: 'FAQ',
        paragraphs: [
          'Will a calming palette actually help me focus? Not on its own. It removes one source of visual noise, which is a small but real gain.',
          'Can I change colors after generating a pet? Yes, regenerate with a different description. Colors come from the description and the reference photo, so a small wording change can shift the palette.',
          'Do darker pets look bad on light themes? They need more contrast, not brighter colors. Add a contrasting outline in your description.',
        ],
      },
      {
        heading: 'Try it on your own pet',
      },
    ],
  },

  {
    slug: 'celebrity-pet-copyright-guidelines',
    title: "Celebrity Pets and Copyright: What You Can and Can't Do",
    description:
      "",
    date: '2026-09-17',
    author: 'PetGen',
    keywords: [
      'celebrity pet copyright guidelines',
      'celebrity pet copyright',
      'celebrity pet',
    ],
    faq: [
      {
        question: "Can I sell pixel art of celebrity pets?",
        answer: "Generally no, unless you have permission.",
      },
    ],
    sections: [
      {
        heading: "Understanding Copyright Basics",
        paragraphs: [
          "Copyright protects original works of authorship, including photographs of celebrities and their pets.",
        ],
        list: [
          "Create original pet designs",
          "Use general concepts",
          "Add transformative elements",
        ],
      },
    ],
  },
  {
    slug: 'coding-mood-journal-pixel-pet',
    title: "Keep a Coding Mood Journal with Your Pixel Pet",
    description:
      "",
    date: '2026-09-19',
    author: 'PetGen',
    keywords: [
      'coding mood journal pixel pet',
      'coding mood journal',
      'coding mood',
    ],
    faq: [
      {
        question: "How often should I journal?",
        answer: "Daily check-ins work best. Even 2 minutes creates meaningful patterns.",
      },
      {
        question: "Can I share my pixel pet?",
        answer: "Yes! Share progress, get encouragement, or compete in friendly mood challenges.",
      },
    ],
    sections: [
      {
        heading: "Why Mood Journaling Matters for Developers",
        paragraphs: [
          "Coding is emotional work. You debug frustration, celebrate breakthroughs, and navigate imposter syndrome daily. A mood journal makes these patterns visible.",
        ],
      },
      {
        heading: "Meet Your Pixel Companion",
        paragraphs: [
          "A pixel pet evolves with your coding journey. Different moods trigger different expressions, colors, and animations.",
        ],
      },
      {
        heading: "Setting Up Your Journal",
        list: [
          "Choose a pixel pet template",
          "Set daily check-in reminders",
          "Log mood alongside coding sessions",
          "Review weekly patterns",
        ],
      },
    ],
  },
  {
    slug: 'the-ai-behind-the-pet-how-diffusion-models-draw-pixels',
    title: 'The AI Behind the Pet: How Diffusion Models Draw Pixels',
    description:
      'A plain-language explanation of how diffusion models turn text into pixel art: the forward noising process, the reverse denoising loop, and why pixel art needs extra work at the end.',
    date: '2026-09-21',
    author: 'PetGen',
    keywords: [
      'how diffusion models work',
      'ai pixel art generation',
      'text to pixel art ai',
      'diffusion model explained',
      'codex pet generation',
      'ai sprite generation',
      'denoising diffusion',
      'pixel art ai pipeline',
    ],
    faq: [
      {
        question: 'How does a diffusion model actually make an image?',
        answer: 'It starts from random noise and removes a little noise at a time, over dozens of steps, until a coherent image appears. The model learned what to remove by being trained on millions of images with noise added and removed again.',
      },
      {
        question: 'Why is pixel art harder for AI than photo-realistic images?',
        answer: 'Pixel art has a hard constraint: every pixel must land on a grid, and the palette is deliberately tiny. Diffusion models work in continuous values, so the output has to be snapped to a grid and reduced to a palette afterwards, and that step can destroy detail if it is done carelessly.',
      },
      {
        question: 'Does the AI copy existing pixel art?',
        answer: 'It synthesizes from learned statistical patterns rather than retrieving stored images. That makes exact copying unlikely, but it also means the model has no idea whether the result is aesthetically good — that judgment is still yours.',
      },
      {
        question: 'How long does one pet take to generate?',
        answer: 'On consumer hardware, a few seconds to under a minute depending on resolution and step count. Higher step counts give cleaner results at the cost of time.',
      },
    ],
    sections: [
      {
        heading: 'What a diffusion model is doing',
        paragraphs: [
          'The name comes from physics. Diffusion describes particles spreading out until they are evenly mixed. The model uses the same idea in reverse: take a real image, gradually destroy it with noise until nothing but static remains, then learn to undo that destruction step by step.',
          'Once the model can undo one small step of noise reliably, you can start from pure static and run the process backwards. The result is an image that never existed but follows the same statistical rules as the images it trained on.',
        ],
      },
      {
        heading: 'Why text turns into the right picture',
        paragraphs: [
          'Text enters separately. A text encoder turns your prompt into a numeric description, and the denoising step is conditioned on that description. Every step the model asks: given this description, what should be removed from this noise to move one step closer to a matching image?',
          'That conditioning is what makes "a small red fox sprite with a green scarf" produce something specific rather than a generic animal. The stronger the conditioning, the more literally the prompt is followed, and the less freedom the model has to produce something pleasant.',
        ],
      },
      {
        heading: 'Why pixel art needs a second stage',
        paragraphs: [
          'A diffusion model outputs continuous colour values at whatever resolution you asked for. Pixel art is the opposite: a fixed grid with a small, deliberate palette where every pixel is visible.',
          'The usual pipeline therefore generates at a modest resolution, then quantizes: snap each pixel to the nearest colour in a chosen palette, clean up stray pixels, and remove anti-aliasing that would blur the grid.',
          'Done badly this step produces a muddy image with outline artefacts. Done well it produces something that reads cleanly at 4x zoom, which is the whole point of the style.',
        ],
        list: [
          'Generate at a low native resolution rather than downscaling a large image — downscaling invents detail that cannot survive quantization.',
          'Limit the palette before generating if the tool supports it; deciding after the fact loses colour information you cannot recover.',
          'Check the result at 400 percent zoom. If the grid is inconsistent at that magnification, the sprite will look wrong everywhere.',
        ],
      },
      {
        heading: 'What the model cannot judge',
        paragraphs: [
          'The model has no concept of whether a pet looks friendly, whether a scarf colour suits the fur, or whether the silhouette reads at small sizes. It optimizes for matching the prompt, not for looking good.',
          'That gap is why generating a pet is a loop rather than a single click. You generate, look at it as a piece of design rather than as an answer, and adjust the prompt. The model handles the drawing; the taste is still yours.',
        ],
      },
      {
        heading: 'Where this leaves you',
        paragraphs: [
          'Understanding the pipeline mainly changes what you ask for. Prompts that specify silhouette, palette and pose get better results than prompts that describe a mood, because those are the things the conditioning can act on.',
          'If you want to try it, generate a pet and look at it zoomed in. The artefacts are visible once you know what produced them.',
        ],
      },
    ],
  },
  {
    slug: 'coding-marathon-pet-guide',
    title: 'Coding Marathon Guide: Pets for the Long Haul',
    description:
      'A coding marathon pet will not write your code, and that is why it works. Here is how to set one up for overnight sessions and hackathons, and which settings survive hour ten.',
    date: '2026-10-02',
    author: 'PetGen',
    keywords: [
      'coding marathon pet',
      'overnight coding companion',
      'hackathon pet',
      'long session motivation pet',
    ],
    related: [
      'why-developers-love-desktop-companions',
      'how-to-create-a-codex-pet',
      'coding-mood-journal-pixel-pet',
    ],
    faq: [
      {
        question: 'Does a coding marathon pet actually help you finish a session?',
        answer: 'It helps by marking time, not by adding willpower. The pet changes state when you have been still for a while, which turns an invisible stretch of work into something you can see. Whether you act on it is still your call, and that is the part timers get wrong.',
      },
      {
        question: 'Can I use a photo of my own pet for an overnight coding companion?',
        answer: 'Yes, and it tends to work better than a generated one. Upload a photo to codexpetgenerator.com and the tool renders a pixel base, a spritesheet and a pet.json. You chose the animal, so you are still happy to look at it at hour ten.',
      },
      {
        question: 'Will a hackathon pet slow down my editor?',
        answer: 'No. A pet is one small image plus a few kilobytes of JSON. Nothing runs in the background and there is no network call after install, so the cost is a static file being drawn in a corner.',
      },
      {
        question: 'How many states should a long session motivation pet have?',
        answer: 'Four is plenty: idle, active, rest and alert. More states means more configuration you will not maintain once the session gets hard, and the extra states rarely change what you do.',
      },
    ],
    sections: [
      {
        heading: 'What a coding marathon pet actually does',
        paragraphs: [
          'A coding marathon pet will not write your code, and that is the reason it works. Six hours into an overnight session the problem is rarely knowledge. It is that you stopped noticing time passing. A small pixel companion in the corner of the screen gives the session a shape: it reacts when you have been still too long, and it reacts when you ship something. That feedback loop is what long stretches of work usually lack.',
          'Strip away the animation and the thing is three parts: a sprite, a state machine, and a small JSON file. The sprite is the image. The state machine decides which frame shows, whether the pet is idle, walking, sleeping or reacting. The JSON ties them together and tells Codex when to move between states.',
          'The last part is where the value sits. Because the states are data rather than code, you can attach them to things your editor already knows about: a file saved, a test run finishing, an hour going by without a commit. The pet is not decoration laid over your work. It is a display for signals you already produce.',
        ],
        list: [
          'Idle: the default frame loop, kept slow enough that you stop noticing it',
          'Active: triggered by saves and passing tests, faster and brighter',
          'Rest: triggered by elapsed time, the pet sleeps and dims',
          'Alert: triggered by inactivity past a threshold you set',
        ],
      },
      {
        heading: 'Why an overnight coding companion beats a timer',
        paragraphs: [
          'Timers fail at three in the morning because they ask you to fight your own attention. A notification telling you to take a break arrives while you are mid-thought, and you dismiss it without looking up. The interruption is hostile to the work it is meant to protect.',
          'An overnight coding companion does the same job without the demand. The pet simply falls asleep. Nothing pops up, nothing sounds. When you glance over, the sleeping sprite tells you that a block of time has passed since your last break. You decide what to do about it.',
          'People who work overnight regularly describe the same effect. The pet works because it is ambient: it sits in peripheral vision and changes state on its own schedule rather than yours. A timer demands a response. A sleeping cat does not.',
        ],
        list: [
          'Park the pet in a bottom corner rather than the middle of the screen',
          'Keep the idle animation under one frame per second',
          'Tie the rest state to elapsed time, not to wall-clock time',
        ],
      },
      {
        heading: 'Building a hackathon pet that survives twelve hours',
        paragraphs: [
          'Hackathon sessions break pets in predictable ways. The first failure is colour. A sprite tuned on a bright monitor looks washed out at two in the morning, when the room is dark and you have dimmed the screen to forty percent. Check the palette at the brightness you will actually use before you commit to it.',
          'The second failure is motion. A pet that bounces every few seconds is charming for twenty minutes and tiring by hour four. For a hackathon pet, cap the movement budget: one reaction per meaningful event plus a slow idle loop, and nothing else. Random motion is the first thing to cut when the session gets long.',
          'The third failure is scale. Most pets render at 32 or 64 pixels and scale up from there. At four times zoom on a high-density display the grid has to stay consistent, or the sprite starts to look soft and cheap exactly when you have been staring at it longest.',
        ],
        list: [
          'Preview the sprite at the brightness you use at night',
          'Cap reactions: idle loop plus event triggers, no random movement',
          'Inspect the pixel grid at 400 percent zoom before you ship it',
        ],
      },
      {
        heading: 'Long session motivation pet: a schedule that holds',
        paragraphs: [
          'A long session motivation pet only works if the schedule behind it is small enough to keep. Four states, four triggers and one number, the interval between rest prompts, is enough. Everything past that is configuration you will abandon by hour eight.',
          'The intervals that hold up in practice: work blocks near fifty minutes, rest prompts near ten, and a hard stop you set before you start rather than during. Write the hard stop down somewhere you will see it. Sessions without one end when your body gives out rather than when the work does.',
          'Pair the pet with something physical it cannot do for you. Water within reach, a lamp that changes with the room, and a keyboard you are willing to walk away from at the stop time. The pet reminds you. The stopping is yours.',
        ],
      },
      {
        heading: 'Where to start',
        paragraphs: [
          'Make the pet first, then wire the states. A photo of your own animal converts into a better companion than anything generated from a prompt, because you picked it and you will still want to look at it after midnight.',
          'Generate yours at codexpetgenerator.com. Start from the home page at /, follow the build walkthrough at /blog/how-to-create-a-codex-pet, then read why long-session companions stick at /blog/why-developers-love-desktop-companions.',
          'Five minutes of setup, and the rest of the night has a shape.',
        ],
      },
    ],
  },
  {
    slug: 'coding-marathon-pet-guide-zh',
    title: '编码马拉松指南：让宠物陪你通宵',
    description:
      '编码马拉松桌宠不会替你写代码，这正是它有用的原因。这篇讲怎么为通宵和黑客松配一只桌宠，以及哪些设置在第十个小时还撑得住。',
    date: '2026-10-02',
    author: 'PetGen',
    keywords: [
      '编码马拉松 桌宠',
      '通宵编程 陪伴',
      '黑客松 桌宠',
      '长时间编程 动力',
    ],
    related: [
      'why-developers-love-desktop-companions-zh',
      'how-to-create-a-codex-pet',
      'coding-mood-journal-pixel-pet',
    ],
    faq: [
      {
        question: '桌宠真的能帮你撑完一整场编码马拉松吗？',
        answer: '它靠标记时间起作用，不是靠给你加意志力。你长时间不动时桌宠会切换状态，把一段本来无感的工作变成看得见的东西。要不要响应仍然由你决定，这正是定时器做错的地方。',
      },
      {
        question: '可以用自己家宠物的照片做通宵陪伴桌宠吗？',
        answer: '可以，而且效果通常比生成的更好。把照片传到 codexpetgenerator.com，工具会渲染出像素底图、精灵图和 pet.json。动物是你自己挑的，所以到了第十个小时你还愿意看它。',
      },
      {
        question: '黑客松桌宠会拖慢编辑器吗？',
        answer: '不会。桌宠就是一张小图加几 KB 的 JSON，后台没有任何进程，安装后也不再发起网络请求，开销只是在角落画一张静态图。',
      },
      {
        question: '长时间编程的桌宠该设几个状态？',
        answer: '四个足够：待机、活跃、休息、提醒。状态再多，就是你在会话变难之后不会再维护的配置，而且多出来的状态很少改变你的行为。',
      },
    ],
    sections: [
      {
        heading: '编码马拉松桌宠到底在做什么',
        paragraphs: [
          '编码马拉松桌宠不会替你写代码，而这正是它有用的原因。通宵到第六个小时，问题通常不是你不会，而是你不再察觉时间在走。屏幕角落里一只小像素宠物给这段会话一个形状：你太久没动，它有反应；你交付了东西，它也有反应。长时段工作缺的往往就是这条反馈回路。',
          '把动画剥掉，这东西由三部分组成：一张精灵图、一个状态机、一个很小的 JSON 文件。精灵图是你看到的画面。状态机决定显示哪一帧，是待机、走动、睡觉还是在反应。JSON 把两者连起来，告诉 Codex 什么时候在状态之间切换。',
          '价值在最后那部分。因为状态是数据而不是代码，你可以把它挂到编辑器本来就知道的事情上：保存了一个文件、跑完一轮测试、一个小时没有提交。桌宠不是盖在工作上面的一层装饰，它是你已经在产生的信号的一块显示屏。',
        ],
        list: [
          '待机：默认帧循环，慢到你不会再注意到它',
          '活跃：由保存和测试通过触发，更快更亮',
          '休息：由累计时长触发，宠物睡觉并变暗',
          '提醒：由超过你设定的静止阈值触发',
        ],
      },
      {
        heading: '为什么通宵时它比定时器更管用',
        paragraphs: [
          '定时器在凌晨三点失效，是因为它要你跟自己的注意力对着干。一条让你休息的通知，总是出现在你思路正顺的时候，你看都不看就划掉。这个打断本身就在伤害它想保护的工作。',
          '通宵陪伴桌宠做的是同一件事，但不提要求。宠物只是睡着了。没有弹窗，没有声音。你瞥一眼，那只睡着的像素动物告诉你：距离上次休息已经过去一段时间了。要不要动，你自己判断。',
          '经常通宵的人描述的感受很一致：桌宠有用是因为它是环境的一部分。它待在余光里，按自己的节奏而不是你的节奏改变状态。定时器要求你回应，一只睡着的猫不要求。',
        ],
        list: [
          '把桌宠放在屏幕下角，不要放在中间',
          '待机动画保持在每秒一帧以内',
          '休息状态绑累计时长，不要绑墙上时钟',
        ],
      },
      {
        heading: '能撑过十二小时的黑客松桌宠',
        paragraphs: [
          '黑客松会以几种固定的方式把桌宠用坏。第一种是颜色：在亮着的显示器上调好的精灵图，到了凌晨两点房间很暗、屏幕调到百分之四十亮度时，就发灰了。定稿前先在你真正会用的亮度下看一遍配色。',
          '第二种是动作：一只每隔几秒就跳一下的宠物，前二十分钟可爱，到第四个小时烦人。黑客松桌宠要给动作设上限——每个有意义的事件触发一次反应，外加一个很慢的待机循环，别的都不要。会话一变长，随机动作就是第一个该砍掉的东西。',
          '第三种是缩放：多数桌宠以 32 或 64 像素渲染再放大。在高分屏上放大四倍时，像素格必须保持一致，否则精灵图会开始发虚、发廉价，而那一眼恰好出现在你已经盯了它最久的时候。',
        ],
        list: [
          '在夜间实际亮度下预览精灵图',
          '给反应设上限：待机循环加事件触发，不要随机动作',
          '定稿前用 400% 缩放检查像素格',
        ],
      },
      {
        heading: '长时间编程的动力：一份能坚持的节奏',
        paragraphs: [
          '长时间编程的桌宠只有在背后的节奏小到你守得住时才有效。四个状态、四个触发器、一个数字（休息提示的间隔），就够了。再多的配置，到第八个小时你一定会放弃维护。',
          '实践里撑得住的间隔是：工作块大约五十分钟，休息提示大约十分钟，还有一个你在开始之前、而不是进行之中就定好的硬停止时间。把这个停止时间写在你会看到的地方。没有硬停止的会话，结束在身体撑不住的时候，而不是工作完成的时候。',
          '再给它配几件它替不了你做的事：手边有水、一盏跟着房间变的灯、一张到了停止时间你舍得放下的键盘。桌宠负责提醒，停下来是你自己的事。',
        ],
      },
      {
        heading: '从哪里开始',
        paragraphs: [
          '先做宠物，再接状态。用自己家动物的照片做出来的陪伴感，比任何用提示词生成的都好，因为是你挑的，过了午夜你还愿意看它。',
          '在 codexpetgenerator.com 生成你的那只。从首页 / 开始，照着 /blog/how-to-create-a-codex-pet 的搭建步骤走一遍，再到 /blog/why-developers-love-desktop-companions-zh 看长时段陪伴为什么留得住。',
          '五分钟配置，剩下的一整晚就有了形状。',
        ],
      },
    ],
  },
  {
    slug: 'sync-codex-pet-across-machines',
    title: 'Sync Your Codex Pet Across Work and Home Machines',
    description:
      'Two machines, one pet. This guide covers sync codex pet options that actually hold up: zipping the pets folder by hand, keeping ~/.codex/pets inside a synced drive, and versioning it in a private repo. Plus the checks that matter when your pet loads on one machine and not the other.',
    date: '2026-10-03',
    author: 'PetGen',
    keywords: [
      'sync codex pet',
      'codex pet sync',
      'copy pet another computer',
      'sync pets folder',
      'codex pet multiple machines',
      'pet.json transfer',
      'codex pet backup sync',
      'same pet on two computers',
    ],
    related: [
      'how-to-install-codex-pet',
      'export-formats-explained',
      'codex-pet-ecosystem',
    ],
    faq: [
      {
        question: 'How do I sync my Codex pet between two computers?',
        answer: 'Copy the folder, not just the image. Zip the folder holding spritesheet.webp and pet.json, move it to the second machine, unzip it into ~/.codex/pets on macOS or Linux or %USERPROFILE%\\.codex\\pets on Windows, then fully quit and reopen Codex. If you want the sync to keep happening, put the whole pets folder inside a synced drive instead.',
      },
      {
        question: 'Can I run the same pet on a work laptop and a home desktop?',
        answer: 'Yes. A Codex pet is not tied to a machine, an account or a license key. The pet is two files in a correctly named folder, and any machine whose pets directory contains that folder will show it after a restart.',
      },
      {
        question: 'Why does my pet appear on one machine but not the other?',
        answer: 'Check three things in order. The folder may sit in a different .codex directory than the one Codex reads, which happens often with WSL or a second installer. The folder name may no longer match the name field in pet.json after a rename. Or Codex was already running when the files arrived, in which case a full restart is all it needs.',
      },
      {
        question: 'Will syncing my pets folder slow Codex down?',
        answer: 'No. A pet is a spritesheet plus a few kilobytes of JSON, and Codex reads the folder once at launch. Even with a sync client watching the directory there is no background process and no network request after installation.',
      },
    ],
    sections: [
      {
        heading: 'What you are actually moving when you copy a pet to another computer',
        paragraphs: [
          'A Codex pet is two files: spritesheet.webp and pet.json. That is the entire package. When you copy pet files to another computer you are moving those two items inside one folder, and the folder name has to match the name field inside pet.json. Nothing else on the machine matters. There is no registry entry, no installer step, and no license check tied to the hardware.',
          'That is why codex pet sync is less work than people expect. There is no account to sign into and no cloud profile to restore from. The pet lives in a directory Codex reads when it launches, so if the same directory exists on a second machine with the same contents, the same pet shows up there.',
        ],
        list: [
          'spritesheet.webp: the frames, usually eight or nine states stacked in one image',
          'pet.json: the id, displayName, and the timing for each state',
          'the folder wrapping both, named to match displayName',
        ],
      },
      {
        heading: 'Where the pets folder lives on each machine',
        paragraphs: [
          'On macOS and Linux the path is ~/.codex/pets. On Windows it is %USERPROFILE%\\.codex\\pets. If the folder does not exist yet, create it. Codex reads the directory at launch, so a pet dropped in before you open the app appears on the very first run.',
          'Write the path down for both machines before you start moving anything. Most failed syncs are not sync problems: the pet landed inside a second .codex folder created by a different installer, or one level too deep inside a subfolder Codex never scans.',
        ],
        list: [
          'macOS and Linux: ~/.codex/pets/',
          'Windows: C:\\Users\\<you>\\.codex\\pets\\',
          'Confirm with ls ~/.codex/pets, or dir %USERPROFILE%\\.codex\\pets on Windows',
        ],
      },
      {
        heading: 'Three ways to sync your pets folder between machines',
        paragraphs: [
          'Pick one method and stay with it. Mixing them is how you end up with two slightly different pets that both look correct until you screenshot them side by side.',
        ],
        list: [
          'Zip and copy: zip the pet folder, move it by USB stick, AirDrop or email, unzip it into the pets folder on the second machine. Right choice for a one-off move.',
          'Synced drive: place ~/.codex/pets inside a folder managed by Dropbox, iCloud Drive, OneDrive or Syncthing and let it replicate. Right choice when you edit pets on both machines.',
          'Private git repo: commit the folder and pull on the other machine. Right choice if you already version your dotfiles and want a history of changes.',
        ],
      },
      {
        heading: 'Multi-machine setup: what breaks',
        paragraphs: [
          'Codex pet multiple machines setups fail in a short list of repeatable ways. Path drift is the most common: a WSL home directory and a Windows home directory are not the same place, and a pet copied into one stays invisible to Codex running from the other.',
          'The second is a name mismatch after a rename. If you rename the folder on one machine and the sync only carries file contents, the other machine keeps the old folder name while pet.json declares a new one. Codex skips it without an error message, which makes it look like a bug in the pet rather than a mismatch.',
          'The third is a read that happened too early. Codex reads the folder at launch, so a pet that arrives while Codex is open will not show up until you quit and reopen it.',
        ],
        list: [
          'Pet missing on one machine only: check which .codex directory Codex actually reads',
          'Pet appears then disappears: a sync client is mid-write, wait for it to finish',
          'Pet renders as a blank square: spritesheet.webp did not finish transferring',
        ],
      },
      {
        heading: 'Keeping pet.json in step across machines',
        paragraphs: [
          'Treat pet.json as the source of truth. When you adjust animation timing or state names on one machine, export the folder again and let the sync carry the whole thing across. Editing pet.json in two places produces two pets that drift apart quietly, and quiet drift is worse than a pet that fails to load, because a failure is at least visible.',
          'If you regenerate a pet from a photo, download the fresh ZIP and overwrite the folder rather than merging files. A generator emits the spritesheet and pet.json as a matched pair, and pairing a new image with an old JSON is the usual reason frames play at the wrong speed.',
        ],
      },
      {
        heading: 'One pet, two machines',
        paragraphs: [
          'Generate once, then point both machines at the same folder. That is the whole habit, and it takes about two minutes to set up.',
          'Start at / to turn a photo into a pixel companion, follow the install walkthrough at /blog/how-to-install-codex-pet for the path on each operating system, and read /blog/export-formats-explained before you decide which format to carry between machines.',
        ],
      },
    ],
  },
  {
    slug: 'sync-codex-pet-across-machines-zh',
    title: '多设备同步：公司和家里用同一只桌宠',
    description:
      '桌宠不绑机器。这篇讲 codex pet sync 的三种可行做法：手动拷贝 pets 文件夹、放进同步盘、用私有仓库版本化，以及桌宠在一台机器显示、另一台不显示时的排查顺序。',
    date: '2026-10-03',
    author: 'PetGen',
    keywords: [
      '桌宠 多设备同步',
      'codex pet sync',
      '桌宠 拷贝到另一台电脑',
      'pets 文件夹 同步',
      '公司 家里 同一只桌宠',
      'pet.json 迁移',
      '桌宠 备份同步',
      '两台电脑 同一宠物',
    ],
    related: [
      'how-to-install-codex-pet',
      'export-formats-explained-zh',
      'codex-pet-ecosystem-zh',
    ],
    faq: [
      {
        question: '怎么把桌宠同步到另一台电脑？',
        answer: '拷文件夹，不要只拷图片。把装着 spritesheet.webp 和 pet.json 的那个文件夹打包，拷到第二台机器，解压进 macOS 或 Linux 的 ~/.codex/pets、Windows 的 %USERPROFILE%\\.codex\\pets，然后彻底退出再打开 Codex。想让它以后一直同步，就把整个 pets 文件夹放进同步盘。',
      },
      {
        question: '公司笔记本和家里台式机能用同一只桌宠吗？',
        answer: '可以。桌宠不绑机器、不绑账号、也不校验授权，它就是两个文件放在一个名字正确的文件夹里。任何一台机器的 pets 目录里有这个文件夹，重启之后就会显示。',
      },
      {
        question: '为什么桌宠在一台机器上显示、另一台不显示？',
        answer: '按顺序查三件事。一是文件夹放进了另一个 .codex 目录，WSL 或装过第二个客户端时最常见；二是改名之后文件夹名和 pet.json 里的 name 对不上；三是文件到位时 Codex 正在运行，它只在启动时读一次目录，彻底重启就好了。',
      },
      {
        question: '同步 pets 文件夹会拖慢 Codex 吗？',
        answer: '不会。一只桌宠是一张精灵图加几 KB 的 JSON，Codex 启动时读一次目录。就算同步客户端在监听这个目录，安装之后也没有后台进程，不再发起网络请求。',
      },
    ],
    sections: [
      {
        heading: '把桌宠拷到另一台电脑，实际在拷什么',
        paragraphs: [
          '一只桌宠就是两个文件：spritesheet.webp 和 pet.json，没有第三样。所谓把桌宠拷到另一台电脑，就是把这个装着两个文件的文件夹整个搬过去，而且文件夹名必须和 pet.json 里的 name 字段一致。机器上其它东西都不相干：没有注册表项，不用重新安装，也不做跟硬件绑定的授权校验。',
          '所以 codex pet sync 比多数人想的省事。没有账号要登录，没有云端存档要恢复。桌宠就是 Codex 启动时会读的一个目录，只要第二台机器上这个目录里放着同样的内容，同样的桌宠就会出现在那儿。',
        ],
        list: [
          'spritesheet.webp：所有帧，一般是八到九个状态排在一张图里',
          'pet.json：id、displayName，以及每个状态的播放节奏',
          '装着两者的文件夹，名字跟 displayName 保持一致',
        ],
      },
      {
        heading: '每台机器上 pets 文件夹在哪',
        paragraphs: [
          'macOS 和 Linux 是 ~/.codex/pets，Windows 是 %USERPROFILE%\\.codex\\pets。目录不存在就自己建一个。Codex 在启动时读这个目录，所以在打开应用之前放进去的桌宠，第一次运行就能看到。',
          '动手之前先把两台机器的路径写下来。多数同步失败其实不是同步的问题：文件夹进了另一个客户端创建的 .codex 目录，或者多套了一层子目录，而 Codex 根本不会往里扫。',
        ],
        list: [
          'macOS 和 Linux：~/.codex/pets/',
          'Windows：C:\\Users\\<你>\\.codex\\pets\\',
          '用 ls ~/.codex/pets 确认，Windows 用 dir %USERPROFILE%\\.codex\\pets',
        ],
      },
      {
        heading: '同步 pets 文件夹的三种做法',
        paragraphs: [
          '选一种，然后一直用它。混着用的结果是两只略有差别的桌宠，各自看着都对，直到你把两张截图摆在一起才发现不一样。',
        ],
        list: [
          '打包拷贝：把桌宠文件夹压缩，用 U 盘、隔空投送或邮件搬过去，在第二台机器解压进 pets 目录。适合一次性迁移。',
          '同步盘：把 ~/.codex/pets 放进 Dropbox、iCloud Drive、OneDrive 或 Syncthing 管理的目录，让它自己复制。适合两台机器都会改桌宠的情况。',
          '私有 git 仓库：提交这个文件夹，在另一台机器上拉取。适合本来就在版本化 dotfiles、想留下改动记录的人。',
        ],
      },
      {
        heading: '多台机器会坏在哪',
        paragraphs: [
          '多设备桌宠坏的方式很固定，翻来覆去就那么几种。最常见的是路径漂移：WSL 的家目录和 Windows 的家目录不是一个地方，拷进其中一个，另一个环境里运行的 Codex 就看不见。',
          '第二种是改名之后的名字错位。你在一台机器上改了文件夹名，而同步只搬运了文件内容，另一台机器还留着旧文件夹名，pet.json 里却已经是新名字。Codex 不报错，直接跳过，看上去像桌宠坏了，其实是名字没对上。',
          '第三种是读得太早。Codex 只在启动时读这个目录，开着 Codex 拷进去的桌宠要彻底退出再打开才会出现。',
        ],
        list: [
          '只有一台机器看不到：先确认 Codex 实际读的是哪个 .codex 目录',
          '先出现又消失：同步客户端正在写入，等它跑完',
          '显示成空白方块：spritesheet.webp 没传完整',
        ],
      },
      {
        heading: '让 pet.json 在两台机器上保持一致',
        paragraphs: [
          '把 pet.json 当作唯一的事实来源。在一台机器上调了动画节奏或状态名，就重新导出整个文件夹，让同步把整包带过去。两头各改一次，会养出两只悄悄分叉的桌宠；安静的分叉比加载失败更麻烦，因为失败至少看得见。',
          '重新生成桌宠的时候，下载新的 ZIP 覆盖整个文件夹，不要只替换部分文件。生成器输出的精灵图和 pet.json 是一套配套的，新图配旧 JSON，最常见的后果就是帧播速度不对。',
        ],
      },
      {
        heading: '一只桌宠，两台机器',
        paragraphs: [
          '生成一次，然后让两台机器指向同一个文件夹。这个习惯的全部内容就是这些，搭起来大概两分钟。',
          '从 / 开始，把照片变成像素伴侣；每台系统的具体路径看 /blog/how-to-install-codex-pet；决定用什么格式在机器之间搬运之前，先读 /blog/export-formats-explained。',
        ],
      },
    ],
  },
  {
    slug: 'backup-codex-pets-guide',
    title: 'Back Up Your Pets: Do Not Lose Your Pixel Companion',
    description:
      'A codex pet backup takes thirty seconds, and almost nobody makes one until a pet is already gone. What to copy, where to keep it, and how to restore a Codex pet on a fresh machine.',
    date: '2026-10-04',
    author: 'PetGen',
    keywords: [
      'codex pet backup',
      'backup pets folder',
      'pet zip backup',
      'restore codex pet',
      'codex pet restore',
      'backup codex pets',
      'pet.json backup',
      'codex pet backup folder',
    ],
    related: [
      'how-to-install-codex-pet',
      'export-formats-explained',
      'sync-codex-pet-across-machines',
    ],
    faq: [
      {
        question: 'How do I back up my Codex pets?',
        answer: 'Zip the pet folder holding both spritesheet.webp and pet.json, then store the archive somewhere off the machine: a cloud drive, an external disk, or a private git repo. Copying the image alone is not a backup, because pet.json carries the id, the name and the animation timing Codex needs to recognise the pet.',
      },
      {
        question: 'Where is the Codex pets folder?',
        answer: 'It is ~/.codex/pets on macOS and Linux, and C:/Users/<you>/.codex/pets on Windows. Every subfolder inside that directory is one pet.',
      },
      {
        question: 'How do I restore a pet from a backup?',
        answer: 'Unzip the archive into the pets folder for your operating system, confirm the folder name matches the name field inside pet.json, then quit Codex completely and reopen it. Codex reads the directory at launch, so the pet will not appear until you restart.',
      },
      {
        question: 'Can I restore a pet after reinstalling Codex or the operating system?',
        answer: 'Yes. A pet is not tied to an account or a licence key, so the same folder works on a fresh install. Reinstall Codex, recreate the pets directory, drop the folder in, and restart the app.',
      },
    ],
    sections: [
      {
        heading: 'What a pet backup has to contain',
        paragraphs: [
          'The thing you are saving is the pet folder, not the image on its own. spritesheet.webp holds every frame, while pet.json holds the id, the display name and the timing for each state. A backup missing pet.json cannot be restored, because that file is how Codex tells one pet from another.',
          'You can check an archive by opening it. If both files are there and the folder name matches the name inside pet.json, it will restore. If you see one file, or a folder nested inside another folder, it will not.',
        ],
        list: [
          'spritesheet.webp: every frame, usually eight or nine states stacked in one image',
          'pet.json: the id, displayName, and the timing for each state',
          'the folder wrapping both, named to match displayName',
          'the original photo you generated from, optional but worth keeping if you may regenerate later',
        ],
      },
      {
        heading: 'Three backup habits that hold up',
        paragraphs: [
          'Pick one method and stay with it. What breaks is rarely the method itself. It is switching between methods halfway through and losing track of which copy is the current one.',
        ],
        list: [
          'Zip and file away: compress the pet folder into something like pets-backup-2026-10.zip and drop it in cloud storage. The right choice if you set pets up once and leave them alone.',
          'Synced directory: point Dropbox, iCloud Drive, OneDrive or Syncthing at ~/.codex/pets and let it replicate. The right choice if you edit pets often.',
          'Private git repo: commit the folder so every change has a history. The right choice if you already version your dotfiles.',
        ],
      },
      {
        heading: 'Where the backup has to live to count',
        paragraphs: [
          'A second copy on the same machine is not a backup. An external drive carried in the same bag is one layer better, but both still disappear together. The cheapest answer that actually works is a cloud folder you are already paying for.',
          'Decide what you are protecting against. Disk failure needs a copy somewhere else entirely. Accidental deletion needs a copy with version history. Reinstalling the operating system needs a copy you can reach before you sign back into anything.',
        ],
        list: [
          'A cloud drive already in your routine: lowest effort, survives disk failure',
          'A second machine you sync with: fine, but not independent if both pull from the same source',
          'An encrypted archive in cold storage: right for pets made from photos you no longer have',
        ],
      },
      {
        heading: 'Restoring a pet from a backup',
        paragraphs: [
          'Restoring is the install walkthrough run in reverse. Unzip into ~/.codex/pets on macOS or Linux, or C:/Users/<you>/.codex/pets on Windows, check that the folder name matches the name field inside pet.json, then quit Codex completely and open it again.',
          'Codex reads the pets directory once at launch, so a pet that arrives while the app is running stays invisible until you restart. If it is still missing after a restart, check the folder name first. A mismatch produces no error message, just an empty corner of the screen.',
        ],
      },
      {
        heading: 'How backups fail',
        paragraphs: [
          'The ways a codex pet backup stops working are a short list, and they repeat.',
        ],
        list: [
          'Image only: pet.json is missing, so Codex cannot identify the pet',
          'Renamed after the fact: the pet.json inside the archive still declares the old name',
          'Nested one level too deep: you archived the parent directory, and Codex does not scan subfolders',
          'Never tested: the archive looks fine right up to the day you need it',
          'Backed up once, two years ago: the current pet has different animation timing',
        ],
      },
      {
        heading: 'A habit that costs ten minutes a year',
        paragraphs: [
          'Back up when you generate a pet, and again whenever you edit one. That is the whole schedule. Two minutes at generation time, thirty seconds after an edit, one archive with the date in its name.',
          'Test the restore once, on a machine that does not have the pet. Unzip, restart Codex, and confirm the pet animates. A backup you have never restored is a guess.',
          'Start at / to turn a photo into a pixel companion, follow the install walkthrough at /blog/how-to-install-codex-pet for the path on each operating system, and read /blog/export-formats-explained before you decide what to put in the archive.',
        ],
      },
    ],
  },
  {
    slug: 'backup-codex-pets-guide-zh',
    title: '桌宠备份指南：别丢了你的像素伙伴',
    description:
      '桌宠备份只要三十秒，多数人却等到桌宠丢了才想起来。这篇讲该拷什么、放哪里，以及换机器或重装系统之后怎么把桌宠还原回来。',
    date: '2026-10-04',
    author: 'PetGen',
    keywords: [
      '桌宠 备份',
      'codex pet backup',
      'pets 文件夹 备份',
      '桌宠 打包备份',
      '还原 codex 桌宠',
      '重装后 恢复桌宠',
      'pet.json 备份',
      '桌宠 归档',
    ],
    related: [
      'how-to-install-codex-pet',
      'export-formats-explained-zh',
      'sync-codex-pet-across-machines-zh',
    ],
    faq: [
      {
        question: '怎么备份 Codex 桌宠？',
        answer: '把装着 spritesheet.webp 和 pet.json 的桌宠文件夹整个打包，存到机器之外的地方：网盘、外接硬盘或私有 git 仓库。只拷图片不算备份，pet.json 里有 Codex 识别这只桌宠要用的 id、名称和动画节奏。',
      },
      {
        question: 'Codex 的 pets 文件夹在哪？',
        answer: 'macOS 和 Linux 是 ~/.codex/pets，Windows 是 C:/Users/<你>/.codex/pets。这个目录里的每个子文件夹就是一只桌宠。',
      },
      {
        question: '怎么从备份还原桌宠？',
        answer: '把归档解压进对应系统的 pets 文件夹，确认文件夹名和 pet.json 里的 name 一致，然后彻底退出 Codex 再打开。Codex 只在启动时读一次这个目录，不重启不会出现。',
      },
      {
        question: '重装 Codex 或系统之后还能还原吗？',
        answer: '可以。桌宠不绑账号也不绑授权，同一份文件夹在新环境里照样能用。装好 Codex，重建 pets 目录，把文件夹放进去，重启即可。',
      },
    ],
    sections: [
      {
        heading: '备份一只桌宠，到底要装什么',
        paragraphs: [
          '要装的是整个桌宠文件夹，不是单独一张图。spritesheet.webp 存着所有帧，pet.json 存着 id、名称和每个状态的播放节奏。缺了 pet.json 的备份还原不了，因为 Codex 是靠它认出这只桌宠的。',
          '判断备份对不对，打开看一眼就够：两个文件都在，文件夹名和 pet.json 里的 name 一致，就能还原。只有一个文件，或者文件夹里还套着一层，就不行。',
        ],
        list: [
          'spritesheet.webp：所有帧，一般是八到九个状态排在一张图里',
          'pet.json：id、displayName，以及每个状态的播放节奏',
          '装着两者的文件夹，名字跟 displayName 保持一致',
          '生成时用的原图，可选，留着以后想重新生成时省一次拍摄',
        ],
      },
      {
        heading: '三种能长期坚持的备份方式',
        paragraphs: [
          '选一种然后一直用。坏掉的通常不是方法，而是中途换方法，最后搞不清哪一份是最新的。',
        ],
        list: [
          '打包归档：把桌宠文件夹压成 pets-backup-2026-10.zip 这样的压缩包，丢进网盘。适合配好之后基本不动的情况。',
          '整个 pets 目录放进同步盘：让 Dropbox、iCloud Drive、OneDrive 或 Syncthing 管着 ~/.codex/pets，让它自己复制。适合经常改桌宠的情况。',
          '提交到私有 git 仓库：版本化这个文件夹，每次改动都留记录。适合本来就在管 dotfiles 的人。',
        ],
      },
      {
        heading: '备份放在哪才算数',
        paragraphs: [
          '同一台机器上的第二份拷贝不算备份。外接硬盘放在同一个包里勉强多一层，但一起丢的概率仍然很高。最省事的真答案是你已经在付费的网盘目录。',
          '想清楚你在防什么。硬盘坏需要异地的一份；误删需要带历史版本的一份；重装系统需要一份在你重新登录任何账号之前就能拿到的。',
        ],
        list: [
          '已经在用的网盘目录：成本最低，扛得住硬盘故障',
          '同步的第二台机器：可以，但如果两台都从同一个源同步，就不算独立的一份',
          '加密归档放冷存：适合那些原图已经找不回来的桌宠',
        ],
      },
      {
        heading: '从备份还原一只桌宠',
        paragraphs: [
          '还原就是安装倒着走一遍。macOS 或 Linux 解压进 ~/.codex/pets，Windows 解压进 C:/Users/<你>/.codex/pets，确认文件夹名和 pet.json 里的 name 对得上，然后彻底退出 Codex 再打开。',
          'Codex 只在启动时读一次这个目录，所以应用开着时放进来的桌宠不会立刻出现。彻底重启之后还是不显示，先查文件夹名。名字对不上不会报错，只是屏幕角落一直是空的。',
        ],
      },
      {
        heading: '备份是怎么失效的',
        paragraphs: [
          '备份失效的方式不多，而且翻来覆去就那几种。',
        ],
        list: [
          '只备份了图片：pet.json 没带，Codex 认不出这只桌宠',
          '备份之后改了文件夹名：归档里的 pet.json 还写着旧名字',
          '套了一层目录：你打包的是父目录，还原之后桌宠比 Codex 扫描的层级深了一层',
          '从没试过还原：归档看着没问题，直到真要用的那天',
          '只备份过一次，还是两年前：现在的桌宠动画节奏已经不一样了',
        ],
      },
      {
        heading: '一年十分钟的习惯',
        paragraphs: [
          '生成一只桌宠时备份一次，改动之后再备份一次。这就是全部日程：生成时两分钟，改完三十秒，归档名字带上日期。',
          '至少在一台没有这只桌宠的机器上试一次还原。解压，重启 Codex，确认它会动。从没还原过的备份只是个猜测。',
          '从 / 开始把照片变成像素伙伴；每台系统的具体路径看 /blog/how-to-install-codex-pet；决定归档里放什么之前，先读 /blog/export-formats-explained。',
        ],
      },
    ],
  },

  {
    slug: 'custom-color-palettes-codex-pet',
    title: 'Custom Color Palettes: Give Your Codex Pet Its Own Colors',
    description:
      'A custom color palette decides how your codex pet looks before a single pixel is drawn. Which plan lets you set one, what each color slot controls, and how to fix colors that look wrong once the pet is installed.',
    date: '2026-10-05',
    author: 'PetGen',
    keywords: [
      'custom palette pet',
      'codex pet custom colors',
      'palette pet unlimited',
      'personalized pet colors',
      'codex pet color palette',
      'custom colors pixel pet',
      'codex pet unlimited palette',
    ],
    related: [
      'codex-pet-color-customization',
      'codex-pet-pro-vs-unlimited',
      'export-formats-explained',
    ],
    faq: [
      {
        question: 'What is a custom color palette for a Codex pet?',
        answer: 'It is the list of colors you hand to the generator before it draws anything: the body or fur tone, the shadow, the outline, and the accent used on small details. All nine animation states are drawn from that same list, so changing the palette regenerates the whole spritesheet rather than tinting a finished image.',
      },
      {
        question: 'Which Codex pet plan lets me set my own palette?',
        answer: 'Unlimited. On Starter and Pro the generator reads colors out of your photo, which is fine until the lighting in that photo drifts warm and your grey cat comes back orange. On the Unlimited plan you set the colors yourself, so a pet can match a brand guide or a wallpaper even when the source photo cannot produce that color.',
      },
      {
        question: 'Do my palette colors survive editing pet.json?',
        answer: 'Yes, because the palette lives in the pixels of spritesheet.webp and pet.json holds no color data at all. Editing pet.json changes the id, the display name and animation timing. To replace the colors you regenerate the pet with the new palette and download it again.',
      },
      {
        question: 'Can I reuse the same palette for several pets?',
        answer: 'Yes, and that is the main reason to write your colors down. Keep the hex values in a text file next to the pet folders, paste the same list for each new pet, and a set of pets reads as one family instead of a pile of unrelated sprites.',
      },
    ],
    sections: [
      {
        heading: 'What a custom palette decides before anything is drawn',
        paragraphs: [
          'A custom palette is the set of colors you choose before the generator starts, and for a codex pet it shapes the result more than the photo does. The photo supplies the silhouette. The palette supplies every pixel inside it. Pick the wrong palette and even a clean generation comes back looking like somebody else\'s pet.',
          'Order matters. Colors are applied while the frames are drawn, not afterwards, so there is no tint slider waiting at the end. The generator commits to one palette for all nine states at once.',
        ],
      },
      {
        heading: 'What the Unlimited plan adds to the palette',
        paragraphs: [
          'On the free tier and on Pro, the palette comes from your photo. That works until it doesn\'t: one warm lamp, one auto white balance that drifted, and the grey cat you photographed arrives in the spritesheet as orange.',
          'The Unlimited plan hands the palette back to you. You set the colors, they carry through every state, and the photo goes back to doing the one job it is good at.',
          'I did not expect to care about this feature. Then I tried to match a pet to a desktop wallpaper, took six photos, and none of them produced the color I wanted. Pasting a hex value took four seconds.',
        ],
        list: [
          'Starter and Pro: palette is derived from the uploaded photo, no manual input',
          'Unlimited: palette is yours to set, by hex value or picker',
          'Every tier: the same colors run through all nine animation states',
          'Every tier: changing colors means regenerating, not recoloring',
        ],
      },
      {
        heading: 'The four color slots and what each one controls',
        paragraphs: [
          'Four slots do almost all of the visible work. Set them in this order, because the later ones only make sense once the earlier ones are settled.',
        ],
        list: [
          'Body: the mid tone that reads as fur, feathers or skin. Set it first, it covers the most pixels',
          'Shadow: one step darker than the body. Go two steps and the pet looks dirty rather than shaded',
          'Outline: usually near black, but a dark version of the body color keeps small pets from looking like clip art',
          'Accent: collars, eyes and small details. This is where contrast comes from, so it should be the most saturated color in the set',
        ],
      },
      {
        heading: 'Keeping personalized pet colors consistent',
        paragraphs: [
          'Write your colors down. A year from now you will want a second pet that matches the first, and something like a dusty blue will not get you back there. Put the hex values in a plain text file inside the pets folder where you will trip over them.',
          'Check the pet against the background it will actually sit on. A mid grey body vanishes against grey editor chrome, which is the single most common complaint I hear after install.',
        ],
        list: [
          'Save the hex list next to the pet folders, not in your head',
          'Preview against your real desktop background, not the plain preview canvas',
          'Avoid pure white and pure black in any slot, both clip at the edges',
          'Keep the accent saturated and everything else quiet',
        ],
      },
      {
        heading: 'When the colors come out wrong',
        paragraphs: [
          'A short list of failures accounts for nearly every complaint about pet colors, and almost none of them are the generator being random.',
        ],
        list: [
          'Everything looks muddy: the shadow is too close to the body, push them further apart',
          'The pet looks flat: there is no accent color separating features from the body',
          'Fine in preview, wrong after install: your desktop background sits closer to the body color than you thought',
          'One frame looks off but the rest are fine: that is animation timing, not the palette, see /blog/codex-pet-9-animation-states',
          'You changed the palette and nothing moved: you edited pet.json, which holds no colors. Regenerate instead',
        ],
      },
      {
        heading: 'Start with the body color',
        paragraphs: [
          'Pick a body color, let the other three follow from it, and spend one extra minute before you generate. Custom colors are the part of a pet you look at every day for months, which makes them the cheapest upgrade available.',
          'Head to / to generate a pet with a palette of your own, read /blog/codex-pet-color-customization if you would rather repaint the spritesheet by hand, and see /pricing for what the Unlimited plan includes.',
        ],
      },
    ],
  },
  {
    slug: 'custom-color-palettes-codex-pet-zh',
    title: '自定义调色板：给桌宠定一套自己的颜色',
    description:
      '自定义调色板在桌宠被画出来之前就决定了它的配色。哪个套餐开放手动调色、四个颜色槽各自管什么，以及装好之后发现颜色不对该怎么改。',
    date: '2026-10-05',
    author: 'PetGen',
    keywords: [
      'codex 桌宠调色板',
      '桌宠自定义颜色',
      'Unlimited 调色板',
      '桌宠配色方案',
      'codex pet 自定义颜色',
      '像素桌宠配色',
    ],
    related: [
      'codex-pet-color-customization',
      'codex-pet-pro-vs-unlimited',
      'export-formats-explained',
    ],
    faq: [
      {
        question: '桌宠的自定义调色板到底是什么？',
        answer: '它是生成之前交给生成器的一组颜色：毛发或身体的主色、暗部色、描边色，以及用在眼睛、项圈等细节上的点缀色。九个动画状态全部由这组颜色画出来，所以改调色板等于重新生成整张精灵图，而不是给画好的图套一层滤镜。',
      },
      {
        question: '哪个套餐可以自己设调色板？',
        answer: 'Unlimited。Starter 和 Pro 的配色由生成器从照片里读取，灯光一偏色就跟着偏：灰猫拍出来橙了一圈，很多时候就是这一步出的岔子。升到 Unlimited 之后颜色由你自己填，哪怕原图给出不来那个颜色，也能让桌宠去匹配品牌色或壁纸。',
      },
      {
        question: '手改 pet.json 会影响这些颜色吗？',
        answer: '不会。颜色只存在于 spritesheet.webp 的像素里，pet.json 里一个颜色字段都没有，改它只会动 id、显示名和动画时序。想换配色只有一条路：带着新调色板重新生成一次再下载。',
      },
      {
        question: '同一套配色能用在多只桌宠上吗？',
        answer: '可以，这也是值得把色值记下来的主要原因。把十六进制色值存在一个文本里，放在 pets 目录旁边，每次新建桌宠都贴同一套，一整排桌宠看起来才像一家人，而不是互不相干的几张图。',
      },
    ],
    sections: [
      {
        heading: '调色板在动笔之前就定了结果',
        paragraphs: [
          '自定义调色板是你在点击生成之前选定的一组颜色，它对桌宠成品的影响比照片更大。照片负责轮廓，调色板负责轮廓里的每一个像素。配色选错，就算生成过程毫无瑕疵，出来的东西也像是别人的桌宠。',
          '顺序很关键。颜色是在画帧的时候写进去的，不是画完之后再调的，所以结尾处不会有一个可以拉来拉去的色相滑块。生成器一次为九个状态绑定同一套颜色。',
        ],
      },
      {
        heading: 'Unlimited 给调色板加了什么',
        paragraphs: [
          '免费版和 Pro 的配色来自你上传的照片。多数时候够用，然后突然就不行了：一盏暖光灯，或者自动白平衡飘了一点，你拍的灰猫在精灵图里就变成了橘猫。',
          'Unlimited 把调色板交回你手上。你自己定颜色，颜色贯穿全部状态，照片重新回到它擅长的那一件事上去。',
          '我原本没把这个功能当回事。后来想让一只桌宠配桌面壁纸，连拍了六张照片，没有一张能出那个颜色。把色值贴进去花了四秒。',
        ],
        list: [
          'Starter 与 Pro：配色由上传的照片推导，不能手动指定',
          'Unlimited：配色由你指定，可以填色值也可以用取色器',
          '全部套餐：九个动画状态共用同一套颜色',
          '全部套餐：改颜色等于重新生成，不是给成品改色',
        ],
      },
      {
        heading: '四个颜色槽各自管什么',
        paragraphs: [
          '肉眼能看到的部分基本由四个颜色槽决定。按这个顺序填，后面两个只有在前面定了之后才有意义。',
        ],
        list: [
          '主色：读作毛发、羽毛或皮肤的那个中间调，先填它，它占的像素最多',
          '暗部：比主色深一档。深两档就不是阴影，是脏',
          '描边：通常接近黑，但用主色的深色版会让小体型桌宠不至于像剪贴画',
          '点缀：项圈、眼睛和小细节靠它。对比度基本都由它撑起来，所以它应当是整套里最饱和的一个',
        ],
      },
      {
        heading: '把专属颜色留住的方法',
        paragraphs: [
          '把色值写下来。半年后你想再配一只跟现在这只搭的桌宠时，那种偏灰的蓝是还原不出来的。把十六进制值存在一个文本文件里，放在 pets 目录旁边，下次一眼就能看见。',
          '别忘了测真实背景。中等灰的主色放在灰色编辑器边框上会整只消失，这是我听到的最多的安装后抱怨。',
        ],
        list: [
          '色值存在 pets 目录旁边，不要只存在脑子里',
          '用真实桌面背景预览，别只看纯色预览画布',
          '任何槽位都别用纯白或纯黑，边缘会直接爆掉',
          '点缀色饱和，其余三个压住',
        ],
      },
      {
        heading: '颜色翻车的几种情况',
        paragraphs: [
          '关于桌宠配色的抱怨基本能被下面几条覆盖，而且几乎没有一条是生成器在随机发挥。',
        ],
        list: [
          '整体发闷：暗部离主色太近，把两者的距离拉开',
          '看起来是平的：没有点缀色，五官和身体分不开',
          '预览里好看、装上就废：你的桌面背景和主色太接近',
          '只有一帧不对、其余都好：那是动画时序的问题，不是配色，看 /blog/codex-pet-9-animation-states',
          '改了调色板却没变化：你改的是 pet.json，它不存颜色，要重新生成',
        ],
      },
      {
        heading: '先把主色定下来',
        paragraphs: [
          '先定主色，其余三个跟着它走，生成之前多花一分钟。配色是你接下来几个月每天都会看的东西，它是所有投入里最便宜的一笔。',
          '从 / 开始用你自己的调色板生成一只桌宠；想手工改图可以看 /blog/codex-pet-color-customization；套餐差异在 /pricing。',
        ],
      },
    ],
  },
  {
    slug: 'codex-pets-folder-structure',
    title: 'Your Pets Folder, Dissected: The ~/.codex/pets Structure',
    description:
      'Every pet you install lands in one place. What the .codex pets folder holds, what each pets subdirectory contains, and the only file worth opening by hand.',
    date: '2026-10-06',
    author: 'PetGen',
    keywords: [
      '.codex pets folder',
      'codex pets folder structure',
      'pets directory layout',
      'codex pets subfolder',
      'where are codex pets stored',
      'pet.json location',
    ],
    related: [
      'install-codex-pet-terminal',
      'pets-library-explained',
      'backup-codex-pets-guide',
    ],
    faq: [
      {
      question: 'Where is the .codex pets folder on Windows?',
      answer: 'At %USERPROFILE%\\.codex\\pets, which normally expands to C:\\Users\\<you>\\.codex\\pets. Paste that into the Explorer address bar or the Run dialog and it opens directly. If the folder is not there yet, install one pet or create it by hand, because Codex will not create it for you.',
    },
      {
      question: 'Can I rename a pet folder?',
      answer: 'Yes, as long as you also update the id inside pet.json to match the new folder name. When the two disagree Codex still loads the pet, but the picker can show the wrong label and anything that referenced the old id stops resolving.',
    },
      {
      question: 'Why does my pet not appear after I copied the folder in?',
      answer: 'Two causes cover almost every case. Either the folder sits one level too deep, or its id collides with a pet that is already installed. Codex reads only the immediate subdirectories of ~/.codex/pets and never scans below that.',
    },
      {
      question: 'Does deleting the folder count as uninstalling?',
      answer: 'It does. A pet is nothing but its subdirectory, so removing it removes the pet entirely. There is no registry entry and no second cache to clear. Zip the folder first if you might want it back, which is the backup routine in /blog/backup-codex-pets-guide.',
    },
    ],
    sections: [
            {
        heading: 'Where the .codex pets folder sits',
        paragraphs: [
          'Every pet you install ends up in one place. On macOS and Linux that is ~/.codex/pets; on Windows it is %USERPROFILE%\\.codex\\pets. Codex reads the .codex pets folder once at startup and treats each subdirectory directly inside it as one pet. Files anywhere else on the disk might as well not exist.',
          'That single rule explains most reports of a pet that installed and then never showed up. Codex does not scan recursively, so a pet sitting at ~/.codex/pets/cats/mochi never loads, while the same folder at ~/.codex/pets/mochi loads fine.',
        ],
      },
            {
        heading: 'Pets directory layout at a glance',
        paragraphs: [
          'The pets directory layout is flat on purpose. One level of subfolders, two or three files in each, and nothing else in the parent.',
        ],
        list: [
          '~/.codex/pets/ — the parent. Only pet subdirectories belong here',
          '<pet-id>/ — one pet. The folder name is the id Codex uses internally',
          'spritesheet.webp — 1536x1872, nine animation states at eight frames each',
          'pet.json — display name, frame counts, timing. No image data and no colors',
          'Anything extra, such as the photo you uploaded, is skipped by Codex and harmless to leave',
        ],
      },
            {
        heading: 'What sits inside a codex pets subfolder',
        paragraphs: [
          'Open any one of them and you get the same small set of files every time. The generator writes them as a package, which is why you can download a pet, move the folder somewhere else, and have it still work.',
        ],
        list: [
          'spritesheet.webp: the pixels. Nine rows, one per animation state, eight frames per row',
          'pet.json: roughly forty lines of metadata. Id, display name, and per-state timing',
          'Preview or readme files: some generators include them, Codex ignores them',
          'Keep the pair together. A sprite sheet without its pet.json renders nothing at all',
        ],
      },
            {
        heading: 'pet.json is the only file worth opening',
        paragraphs: [
          'It is short enough to read in one sitting, and only two of its fields matter in practice.',
          'The id has to match the folder name. When they disagree, Codex keys the pet under the folder and the picker shows a name you did not set. The displayName is the label in the picker and the one field you can edit by hand with no consequences.',
        ],
        list: [
          'id — must equal the folder name, used for lookups',
          'displayName — the label in the pet picker, safe to edit',
          'states — nine entries, each with a frame count and a duration in milliseconds',
          'No color data whatsoever. Editing pet.json will never change how a pet looks',
        ],
      },
            {
        heading: 'Edits you can make by hand, and edits you cannot',
        paragraphs: [
          'Hand editing is fine for a short list of things and a bad idea for everything past it.',
        ],
        list: [
          'Fine: edit displayName, delete a subfolder to uninstall, copy a subfolder to another machine',
          'Fine: keep a backup zip in the parent folder, but never inside a pet subfolder',
          'Not fine: resizing spritesheet.webp. The dimensions are part of the contract, covered in /blog/spritesheet-dimensions',
          'Not fine: changing frame counts unless you redrew the frames too',
          'Not fine: changing colors here. Colors live in the pixels, so a new palette means regenerating at codexpetgenerator.com',
        ],
      },
            {
        heading: 'Keep the folder boring',
        paragraphs: [
          'The plainer the folder, the fewer surprises. One subdirectory per pet, no nesting, no duplicate ids, and a backup zip kept somewhere outside it.',
          'Generate the next one at codexpetgenerator.com, drop the folder into ~/.codex/pets, and you are done. The terminal install walkthrough is at /blog/install-codex-pet-terminal, the backup routine is at /blog/backup-codex-pets-guide, and the plan limits sit on /pricing.',
        ],
      },
    ],
  },
  {
    slug: 'codex-pets-folder-structure-zh',
    title: '桌宠目录结构全解剖：~/.codex/pets 里到底有什么',
    description:
      '每只装上的桌宠最后都落在同一个目录里。.codex pets 目录在哪、每个子目录装什么、pet.json 能改哪几个字段，以及哪些操作会把桌宠弄坏。',
    date: '2026-10-06',
    author: 'PetGen',
    keywords: [
      'codex 桌宠目录',
      '.codex pets 目录结构',
      'pets 文件夹布局',
      'codex 桌宠子目录',
      '桌宠安装在哪里',
      'pet.json 位置',
    ],
    related: [
      'install-codex-pet-terminal',
      'pets-library-explained',
      'backup-codex-pets-guide',
    ],
    faq: [
      {
      question: 'Windows 上的 .codex pets 目录在哪？',
      answer: '在 %USERPROFILE%\\.codex\\pets，展开后通常就是 C:\\Users\\<你>\\.codex\\pets。把这段粘进资源管理器的地址栏或者运行窗口就能直接打开。目录还不存在的话，先装一只桌宠或者手动新建，Codex 不会替你建。',
    },
      {
      question: '桌宠目录能改名吗？',
      answer: '能，但要同时把 pet.json 里的 id 改成新的目录名。两个对不上时 Codex 照样加载，只是选择器可能显示错名字，之前按旧 id 写的脚本或快捷方式也会失效。',
    },
      {
      question: '把目录拷进去之后桌宠为什么不显示？',
      answer: '基本就两个原因：目录多嵌了一层，或者 id 和已经装着的桌宠撞了。Codex 只认 ~/.codex/pets 的直接子目录，再深一层就不扫。',
    },
      {
      question: '删掉目录算卸载吗？',
      answer: '算。一只桌宠就是一个子目录，删掉就是彻底没了，没有注册表项，也没有别处的缓存要清。以后可能还想要就先打个压缩包，备份整件事就是这么简单，步骤在 /blog/backup-codex-pets-guide。',
    },
    ],
    sections: [
            {
        heading: '.codex pets 目录在哪',
        paragraphs: [
          '每只装上的桌宠最后都落在同一个地方。macOS 和 Linux 是 ~/.codex/pets，Windows 是 %USERPROFILE%\\.codex\\pets。Codex 启动时读一次这个 .codex pets 目录，把它下面每一层子目录当成一只桌宠，磁盘上别处的文件它一概不看。',
          '这一条规则能解释大部分「装上了却不显示」。Codex 不递归扫描，放在 ~/.codex/pets/cats/mochi 里的桌宠永远加载不出来，同样这个目录挪到 ~/.codex/pets/mochi 就正常了。',
        ],
      },
            {
        heading: 'pets 目录布局一览',
        paragraphs: [
          'pets 目录布局是刻意做成平的：只有一层子目录，每个子目录里两三个文件，父目录里除这些子目录之外不放别的。',
        ],
        list: [
          '~/.codex/pets/：父目录，只放桌宠子目录',
          '<pet-id>/：一只桌宠，目录名就是 Codex 内部用的 id',
          'spritesheet.webp：1536×1872，九个动画状态各八帧',
          'pet.json：显示名、帧数、时序，不含图像数据也不含颜色',
          '多出来的东西（比如你上传的原图）Codex 会跳过，留着也不会出事',
        ],
      },
            {
        heading: '一个 codex 桌宠子目录里有什么',
        paragraphs: [
          '打开任意一个子目录，里面永远是那一小套文件。生成器把它们打成一个包，这也是为什么下载完直接把目录挪到别处照样能用。',
        ],
        list: [
          'spritesheet.webp：像素本体，九行对应九个状态，每行八帧',
          'pet.json：四十来行元数据，id、显示名、每个状态的时序',
          '预览图或 readme：有些生成器会带，Codex 直接忽略',
          '别把这俩拆开：精灵图没有对应的 pet.json 就渲染不出任何东西',
        ],
      },
            {
        heading: 'pet.json 是唯一值得打开的文件',
        paragraphs: [
          '它短到能一口气读完，实际用得上的只有两个字段。',
          'id 必须和目录名一致。两者对不上时 Codex 照样加载，但选择器里显示的名字不是你设的那个。displayName 是选择器里的标签，也是唯一能随手改而不会出事的字段。',
        ],
        list: [
          'id：必须等于目录名，查表时用它',
          'displayName：选择器里显示的名字，可以改',
          'states：九个条目，各自带帧数和毫秒级时长',
          '一个颜色字段都没有：改 pet.json 永远改不动桌宠的颜色',
        ],
      },
            {
        heading: '哪些能手改，哪些不能',
        paragraphs: [
          '手改这件事，只有很短的一份清单是安全的，清单之外的都别碰。',
        ],
        list: [
          '可以：改 displayName、删掉整个子目录卸载、把子目录拷到另一台机器',
          '可以：备份压缩包放在父目录里，但别塞进桌宠子目录',
          '不可以：改 spritesheet.webp 的尺寸，尺寸是约定好的一部分，见 /blog/spritesheet-dimensions',
          '不可以：改帧数，除非你连帧一起重画',
          '不可以：在这里改颜色。颜色在像素里，换配色得去 codexpetgenerator.com 重新生成',
        ],
      },
            {
        heading: '把目录收拾干净',
        paragraphs: [
          '目录越朴素，意外越少。一只桌宠一个子目录，不嵌套，id 不重复，备份放在目录外面。',
          '下一只桌宠去 codexpetgenerator.com 生成，把目录拖进 ~/.codex/pets 就完事。终端安装步骤在 /blog/install-codex-pet-terminal，备份做法在 /blog/backup-codex-pets-guide，套餐次数看 /pricing。',
        ],
      },
    ],
  },
  {
    slug: 'code-review-pet-mood-experiment',
    title: 'Can a Pet Improve Code Review Moods? A Dev Experiment',
    description:
      'Two weeks, seven engineers, one code review pet each: what changed in review threads, what did not, and how to run a developer happiness experiment on your own team.',
    date: '2026-10-07',
    author: 'PetGen',
    keywords: [
      'code review pet',
      'code review wellbeing',
      'review mood pet',
      'developer happiness experiment',
      'pixel pet code review',
      'desktop companion review mood',
      'code review stress pet',
    ],
    related: [
      'why-developers-love-desktop-companions',
      'coding-mood-journal-pixel-pet',
      'codex-pet-not-showing-fixes',
    ],
    faq: [
      {
        question: 'Does a code review pet actually improve code quality?',
        answer: 'No. Over our two weeks it changed how review felt and how many comments a pull request drew, and it left defect counts and turnaround time exactly where they were. Treat it as a comfort thing rather than a quality gate.',
      },
      {
        question: 'How long before a review mood pet does anything?',
        answer: 'Three or four days. Two of the seven people found it distracting at first and moved it before it settled. If it still annoys you after a week, turn it off and stop there.',
      },
      {
        question: 'Won\'t a desktop pet distract me while I read a diff?',
        answer: 'It can, which is why placement matters more than the pet itself. Keep it in a corner away from the editor. The people in our experiment who parked it next to the diff were the same people who switched it off.',
      },
      {
        question: 'Can I run this developer happiness experiment on my own?',
        answer: 'Yes, though the numbers get weaker with one person. You can still count comments per pull request across two weeks, and since the mood score is yours alone, write it down the same way every time.',
      },
    ],
    sections: [
      {
        heading: 'What a code review pet can and cannot change',
        paragraphs: [
          'A code review pet does not read your diff and it will never tell you a test is missing. What it does is narrower: it sits on your desktop while you read somebody else\'s work, and it gives the flat, slightly tense parts of review somewhere to go. We wanted to know whether that is worth anything, so we ran a developer happiness experiment on one team for two weeks.',
          'The short version: review threads got shorter and the wording in them got less sharp. Nobody became a better engineer. If you are hoping for something that makes code review enjoyable, this is not that.',
        ],
      },
      {
        heading: 'How the experiment was set up',
        paragraphs: [
          'Seven engineers on one product team, all reviewing in the same repo, all running Codex. Each person installed a pixel pet generated from a photo they picked themselves, and we agreed on one rule: nobody changes the review process. Same checklist, same turnaround target, same reviewers.',
          'For every pull request we logged three things: how many comments it drew, how many of those comments were about style rather than substance, and a one to five mood score the author recorded right after reading the feedback. The third number is self reported and soft. The first two are not.',
        ],
        list: [
          'Baseline week: no pets installed, 41 pull requests',
          'Test week: pets installed, 38 pull requests',
          'Identical review checklist and identical reviewers in both weeks',
          'Mood score filled in within ten minutes of opening the feedback',
        ],
      },
      {
        heading: 'What the numbers showed',
        paragraphs: [
          'Comments per pull request went from 6.4 to 5.1. Style-only comments, the ones that open with "nit:" and cost an extra round trip, fell from 2.3 to 1.2 per request. The self reported mood score moved from 3.1 to 3.6, which is a real shift but small enough that we would not defend it on its own.',
          'Turnaround time did not move. Neither did the number of defects found. Whatever changed, it changed in how review feels rather than in what review catches.',
        ],
        list: [
          'Comments per pull request: 6.4 at baseline, 5.1 with pets',
          'Style-only comments: 2.3 at baseline, 1.2 with pets',
          'Self reported mood after reading feedback: 3.1 to 3.6 out of 5',
          'Time to first review: unchanged at roughly four hours in both weeks',
          'Two of seven engineers reported no difference at all',
        ],
      },
      {
        heading: 'Where a review mood pet helps and where it does nothing',
        paragraphs: [
          'The effect showed up in one specific moment: right after you open a review that has twenty comments on it. That is where people write the reply they later regret. A pet does not fix the review. It puts something calm and predictable in the corner of the screen while you decide what to say.',
          'It did nothing for the engineers who already enjoyed review, and nothing for the two who found the pet distracting in the first three days and moved it off screen.',
        ],
        list: [
          'Helps when feedback is long and you need a beat before replying',
          'Helps on the days you have been reading other people\'s code for four hours',
          'Does nothing when the review itself is genuinely unclear',
          'Backfires if the pet sits on top of your diff, so park it away from the editor',
        ],
      },
      {
        heading: 'Running your own developer happiness experiment',
        paragraphs: [
          'Two weeks is long enough to see something and short enough that nobody complains about it. Pick one repo, keep the process identical, and write the numbers down at the end of each week instead of guessing at the end.',
        ],
        list: [
          'Generate one pet per person so nobody shares a companion',
          'Count comments per pull request before you install anything',
          'Keep the review checklist fixed across both weeks',
          'Write the mood score down immediately, not from memory on Friday',
          'Stop if anyone finds the pet distracting, because that result counts too',
        ],
      },
      {
        heading: 'Try it on your next review cycle',
        paragraphs: [
          'Start at /, generate a pet from any photo you like, and read more about why these companions stick at /blog/why-developers-love-desktop-companions. Plan limits are listed on /pricing. If your pet never appears on the desktop, the checklist at /blog/codex-pet-not-showing-fixes covers the usual causes. Everything starts at codexpetgenerator.com.',
        ],
      },
    ],
  },
  {
    slug: 'code-review-pet-mood-experiment-zh',
    title: '用桌宠改善代码评审心情？一次开发者实验',
    description:
      '七个人、两周、每人一只桌宠：评审里的评论数怎么变、哪些指标一动不动，以及你自己的开发者幸福感实验该怎么跑。',
    date: '2026-10-07',
    author: 'PetGen',
    keywords: [
      '代码评审 桌宠',
      'codex 桌宠',
      '评审心情',
      '开发者幸福感',
      '桌面陪伴 代码评审',
      '桌宠实验',
      'code review pet',
    ],
    related: [
      'coding-mood-journal-pixel-pet',
      'why-developers-love-desktop-companions',
      'codex-pet-not-showing-fixes',
    ],
    faq: [
      {
      question: '桌宠真的能提升代码评审的质量吗？',
      answer: '不能。这两周里它改变的是评审时的感受和每条 PR 的评论数，缺陷数和首次评审耗时基本没动。把它当成让自己舒服一点的东西，别当成质量关卡。',
    },
      {
      question: '装了多久才会有效果？',
      answer: '三四天。七个人里有两个头两天觉得碍事，把它挪走之后才稳定下来。过了一周还是觉得烦，就关掉，这个结论同样算数。',
    },
      {
      question: '看 diff 的时候桌宠会不会分心？',
      answer: '会，所以摆位比选哪只桌宠更重要。放在离编辑器远一点的角落。我们这组里把它摆在 diff 旁边的人，最后都把它关了。',
    },
      {
      question: '一个人能做这个实验吗？',
      answer: '能，只是数据会弱一些。一个人照样可以统计两周内每条 PR 的评论数；心情分只有你自己在打，那就要每次都用同一个标准记，别凭印象补。',
    },
    ],
    sections: [
      {
        heading: '桌宠能改变什么，改变不了什么',
        paragraphs: [
          '桌宠不会读你的 diff，也不会提醒你漏了测试。它能做的事很窄：你读别人代码的时候它就在桌面上，让评审里那些平淡又有点紧绷的时刻有个落脚的地方。这到底有没有用？我们拿一个团队做了两周开发者幸福感实验。',
          '结论很短：评审串变短了，措辞也没那么冲。没有谁因此变成更好的工程师。如果你指望有什么东西能让代码评审变得愉快，那不是桌宠。',
        ],
      },
      {
        heading: '实验是怎么搭的',
        paragraphs: [
          '一个产品团队七个人，同一个仓库，都用 Codex。每人从自己挑的照片生成一只像素桌宠装好，然后约定一条：评审流程一个字都不改。同一份 checklist、同样的响应时限、同样的评审人。',
          '每条 PR 我们记三件事：一共多少条评论、其中多少条是在抠风格而不是讲实质、以及作者读完反馈后自评的 1 到 5 分心情分。第三个数字是自己填的，偏软；前两个不是。',
        ],
        list: [
          '基线周：不装桌宠，41 条 PR',
          '实验周：装桌宠，38 条 PR',
          '两周用同一份评审 checklist 和同一批评审人',
          '心情分在读完反馈十分钟内填，不靠回忆补',
        ],
      },
      {
        heading: '数据长什么样',
        paragraphs: [
          '每条 PR 的评论数从 6.4 降到 5.1。只谈风格的评论，就是那些以 nit 开头、最后总要多走一轮的，从每条 2.3 降到 1.2。自评心情分从 3.1 走到 3.6，方向是真的，幅度小到我们不会单独拿它下结论。',
          '响应耗时没动，发现的缺陷数也没动。变的是评审时的感受，不是评审能抓到什么。',
        ],
        list: [
          '每条 PR 评论数：基线 6.4，装桌宠后 5.1',
          '只谈风格的评论：基线 2.3，装桌宠后 1.2',
          '读完反馈的自评心情：3.1 到 3.6（满分 5）',
          '首次评审耗时：两周都在四小时左右，没变',
          '七人中有两人说完全没感觉',
        ],
      },
      {
        heading: '哪些时候有用，哪些时候白搭',
        paragraphs: [
          '效果集中在一个瞬间：你点开一条有二十条评论的评审的那一下。人就是在那里写出事后后悔的回复。桌宠不解决评审本身，它只是在你想好怎么说之前，往屏幕角落里放一个安静、可预期的东西。',
          '对本来就喜欢评审的人没用，对头三天觉得碍事、直接把它挪出屏幕的两个人也没用。',
        ],
        list: [
          '有用：反馈很长，你想缓一下再回复的时候',
          '有用：连着读别人代码读了四个小时的那几天',
          '白搭：评审内容本身写得不清楚的时候',
          '帮倒忙：桌宠压在你的 diff 上，所以别摆在编辑器旁边',
        ],
      },
      {
        heading: '自己跑一遍这个实验',
        paragraphs: [
          '两周足够看出点东西，也短到没人会抱怨。选一个仓库，流程保持原样，每周末把数字写下来，别到最后凭印象估。',
        ],
        list: [
          '每人各生成一只，不要共用一个伙伴',
          '装之前先统计一轮每条 PR 的评论数',
          '两周的评审 checklist 保持一致',
          '心情分当场记，别等到周五靠回忆补',
          '有人觉得碍事就停，这个结果也算数',
        ],
      },
      {
        heading: '下一轮评审就试试',
        paragraphs: [
          '从 / 开始，用任意一张照片生成一只桌宠；为什么这类陪伴留得下来，可以看 /blog/why-developers-love-desktop-companions；套餐次数在 /pricing。桌宠装完不显示的话，/blog/codex-pet-not-showing-fixes 里有常见原因清单。一切都从 codexpetgenerator.com 开始。',
        ],
      },
    ],
  },
  {
    slug: 'wild-ideas-pets-in-cicd',
    title: 'Wild Ideas: Pets in CI/CD and Other Impossible Combos',
    description:
      'Forty pixel pet ideas from the Codex community, sorted by whether they actually run: build status mirrors, standup timers, and the impossible pet combos that keep coming back every thread.',
    date: '2026-10-08',
    author: 'PetGen',
    keywords: [
      'pixel pet ideas',
      'fun codex pet ideas',
      'creative pet use',
      'impossible pet combos',
      'codex pet ci cd',
      'desktop pet build status',
      'pixel pet automation',
      'codex pet scripts',
    ],
    related: [
      'why-developers-love-desktop-companions',
      'creative-uses-for-codex-pet',
      'codex-pet-ecosystem',
    ],
    faq: [
      {
        question: 'Can a pixel pet really show my build status?',
        answer: 'Yes, through a script that swaps which pet folder Codex loads. The pet is not watching your CI. Your script is, and it moves files on disk. Expect the desktop to lag a few seconds behind the pipeline.',
      },
      {
        question: 'How many fun codex pet ideas should one person run at once?',
        answer: 'Two or three. Past that you stop registering which pet is on screen, and once you stop noticing it the whole setup stops doing anything.',
      },
      {
        question: 'Do impossible pet combos ever become possible?',
        answer: 'Some of them. The nine states are fixed by the format, so anything needing a new animation stays out of reach. Anything that only needs a file move tends to show up in a community repo within a few months.',
      },
      {
        question: 'Does swapping pets all day slow the machine down?',
        answer: 'No. A pet is a couple hundred kilobytes of sprite sheet plus a small JSON file. Swapping costs a file move, not a re-render.',
      },
    ],
    sections: [
      {
        heading: 'Where these pixel pet ideas come from',
        paragraphs: [
          'Every couple of weeks somebody posts a screenshot with a pet parked next to a red pipeline, and the replies fill up with pixel pet ideas. Most are jokes. A few are jokes that somebody actually built.',
          'I went through roughly forty of them and sorted them by effort. A handful run today with nothing but a shell script. Some need a real integration. The rest belong in the joke pile, and I say that as someone who likes them.',
        ],
      },
      {
        heading: 'The fun codex pet ideas that work today',
        paragraphs: [
          'The pet is a folder on disk. Anything that can move files around can change which one you see, which is why these four need no permission from Codex at all.',
        ],
        list: [
          'Build status mirror: a script watches the pipeline and points Codex at the green pet or the red one',
          'Standup timer: the pet drops into its waiting state two minutes before the call starts',
          'Branch guard: a different pet on main than on feature branches, so you notice before running the wrong command',
          'Focus blocks: one pet for deep work hours, another for the review block after lunch',
          'None of these read your CI. Your script does, and it moves a folder.',
        ],
      },
      {
        heading: 'Creative pet use off the desktop',
        paragraphs: [
          'The creative pet use cases hold up better than the automation ones, mostly because a finished image does not break when an API changes.',
        ],
        list: [
          'Changelog art: the same pet in every release image, so the series reads as one product',
          'Team wiki: new hires generate one and it lands next to their name on the onboarding page',
          'Conference slides: a pixel pet in the corner reads better than another stock illustration',
          'Support docs: screenshots that all use one theme look like they came from one team',
        ],
      },
      {
        heading: 'The impossible pet combos',
        paragraphs: [
          'Now the part everybody asks about. These come up in every thread, and none of them work the way people describe them.',
        ],
        list: [
          'Live reaction to test output: the sprite sheet has nine fixed states. A script can pick one, but it cannot invent a tenth.',
          'A pet inside the pull request: pets render on your desktop. Anything inside a PR is an image somebody uploaded.',
          'Coverage-driven pet moods: coverage is a number and the pet has no idea what a number is. You would still be the one reading it.',
          'One shared pet for the whole team: every install is local, so two people see two pets on two machines.',
          'A pet that fixes the build: this one I would pay for. It does not exist.',
        ],
      },
      {
        heading: 'What a working setup costs you',
        paragraphs: [
          'For one person this is usually more setup than the payoff. It starts making sense when five people share the same script.',
        ],
        list: [
          'One shell script, 20 to 40 lines, no dependencies beyond curl',
          'Two sprite sheets, one for green builds and one for red',
          'A cron entry or a webhook that calls the script',
          'Roughly nine seconds to install a pet by hand, less once the folder move is scripted',
          'Five minutes of debugging the first time the script runs as the wrong user',
        ],
      },
      {
        heading: 'Pick one and try it',
        paragraphs: [
          'Start at /, generate a pet from any photo you have lying around, and read why these companions stick at /blog/why-developers-love-desktop-companions. Terminal install steps are at /blog/install-codex-pet-terminal and plan limits are on /pricing. The generator itself lives at codexpetgenerator.com.',
        ],
      },
    ],
  },
  {
    slug: 'wild-ideas-pets-in-cicd-zh',
    title: '把桌宠装进 CI/CD？五个做不出来的脑洞',
    description:
      '社区里流传的桌宠脑洞按能不能跑排一遍：构建状态镜像、站会计时器，以及那些每隔几周就被人提起一次、始终做不出来的组合。',
    date: '2026-10-08',
    author: 'PetGen',
    keywords: [
      '桌宠脑洞',
      'codex 桌宠玩法',
      '桌宠 CI/CD',
      '像素宠物创意用法',
      '桌面宠物自动化',
      '构建状态桌宠',
      'pixel pet ideas',
    ],
    related: [
      'why-developers-love-desktop-companions',
      'creative-uses-for-codex-pet',
      'codex-pet-ecosystem',
    ],
    faq: [
      {
        question: '桌宠真能显示构建状态吗？',
        answer: '能，靠一个脚本切换 Codex 加载哪个桌宠目录。不是桌宠在盯你的 CI，是脚本在盯，然后挪了磁盘上的文件。桌面上的变化会比流水线晚几秒。',
      },
      {
        question: '一个人同时跑几个桌宠脑洞合适？',
        answer: '两到三个。再多你就不再注意屏幕上到底是哪一只，而一旦你不看了，这整套东西就没什么用了。',
      },
      {
        question: '那些做不出来的组合以后有可能做成吗？',
        answer: '有一部分会。九个状态是格式定死的，需要新动画的永远够不着。只靠挪文件就能实现的那些，几个月内通常就会在社区仓库里出现。',
      },
      {
        question: '一天换很多次桌宠会不会拖慢机器？',
        answer: '不会。一只桌宠就是几百 KB 的精灵图加一个很小的 JSON。换一次只是挪个文件，不涉及重新渲染。',
      },
    ],
    sections: [
      {
        heading: '这些脑洞是怎么冒出来的',
        paragraphs: [
          '每隔几周就有人在社区里贴一张截图：桌宠蹲在一条飘红的流水线旁边。回复里全是桌宠脑洞，大部分是玩笑，有那么几个是玩笑被人真的做出来了。',
          '我把大概四十个脑洞按工作量排了一遍。少数几个今天就能跑，只需要一个 shell 脚本；有几个得写真的集成；剩下的该待在玩笑堆里，虽然我本人挺喜欢它们。',
        ],
      },
      {
        heading: '今天就能跑起来的玩法',
        paragraphs: [
          '桌宠就是磁盘上的一个目录。任何能挪动文件的东西都能换掉你看到的那只，所以下面这几种完全不需要 Codex 点头。',
        ],
        list: [
          '构建状态镜像：脚本盯着流水线，绿了就指向绿色那只，红了就换红色那只',
          '站会计时器：开会前两分钟，桌宠切到等待状态',
          '分支护栏：在 main 上换成另一只，敲错命令之前你就已经看见了',
          '专注时段：深度工作时间一只，午饭后的评审时段另一只',
          '这些都不是桌宠在读你的 CI，是脚本在读，然后挪了一个目录。',
        ],
      },
      {
        heading: '离开桌面之后的用法',
        paragraphs: [
          '这类用法比自动化那类活得久，原因很实在：一张做好的图不会因为接口变了就失效。',
        ],
        list: [
          '更新日志配图：每个版本的图里都是同一只，整套日志读起来像一个产品',
          '团队 wiki：新人生成一只，直接放进上手文档里名字旁边',
          '会议 slides：角落里放一只像素宠物，比再贴一张素材图强',
          '支持文档：截图统一用一套主题，看起来才像同一个团队出的',
        ],
      },
      {
        heading: '做不出来的那几个',
        paragraphs: [
          '下面是每次都有人问的部分。它们在每个帖子里都会出现，而且都做不到人们描述的那样。',
        ],
        list: [
          '实时响应测试结果：精灵图固定九个状态。脚本能挑其中一个，但造不出第十个。',
          '桌宠住进 PR 里：桌宠渲染在你的桌面上。PR 里能看到的东西，是有人上传上去的一张图。',
          '按覆盖率变心情：覆盖率是个数字，桌宠并不知道数字是什么，读的人还是你自己。',
          '全团队共用一只：每个安装都是本地的，两个人会在两台机器上看到两只。',
          '能修构建的桌宠：这个我愿意花钱。它不存在。',
        ],
      },
      {
        heading: '真做起来要花多少功夫',
        paragraphs: [
          '对一个人来说，这套搭建常常不值那个收益。等五个人共用同一个脚本，账才算得过来。',
        ],
        list: [
          '一个 shell 脚本，20 到 40 行，除了 curl 没有别的依赖',
          '两张精灵图，一张给构建通过，一张给构建失败',
          '一条 cron 或一个 webhook 去调这个脚本',
          '手动装一只桌宠大概九秒，目录挪动脚本化之后更快',
          '第一次因为脚本跑在错误的用户下而调试，大概要五分钟',
        ],
      },
      {
        heading: '挑一个试试',
        paragraphs: [
          '从 / 开始，随手拿一张照片生成一只；为什么这类陪伴能留下来，写在 /blog/why-developers-love-desktop-companions。终端安装步骤在 /blog/install-codex-pet-terminal，套餐次数看 /pricing。生成器本身在 codexpetgenerator.com。',
        ],
      },
    ],
  },
  {
    slug: 'dual-monitor-pet-placement',
    title: 'Dual Monitor Pet Placement Tips for Two-Screen Desks',
    description:
      'Practical pet placement for a pixel pet dual monitor desk: which screen it should sit on, why it keeps jumping back to the laptop display, and what mixed scaling does to its size.',
    date: '2026-10-09',
    author: 'PetGen',
    keywords: [
      'pixel pet dual monitor',
      'pet on second monitor',
      'dual screen pet position',
      'desktop pet placement',
      'codex pet two monitors',
      'pixel pet second display',
      'multi monitor desktop pet',
      'petgen dual screen setup',
    ],
    related: [
      'codex-pet-9-animation-states',
      'install-codex-pet-terminal',
      'sync-codex-pet-across-machines',
      'codex-pet-not-showing-fixes',
    ],
    faq: [
      {
        question: 'Can I put my pet on the second monitor?',
        answer: 'Yes. Drag it over, or change which display your system treats as primary so Codex opens there. Codex restores the last position on restart, so once the pet sits where you want it, leave it alone.',
      },
      {
        question: 'Why does my pet jump to the laptop screen when I unplug the monitor?',
        answer: 'When the display a window lives on goes away, the desktop moves everything floating back onto what is left. Plug the monitor in again, drag the pet where you want it, then restart Codex so the position sticks.',
      },
      {
        question: 'Does different scaling change the size of the pet?',
        answer: 'It does. A 100% laptop panel next to a 150% 4K monitor draws the same sprite at two noticeably different sizes. Match the scaling on both screens if that bothers you, or keep the pet on the display you read most.',
      },
      {
        question: 'Should one monitor have the pet and the other stay clean?',
        answer: 'Usually. One pet on the screen you look at most still does its job. Spread across two displays, it turns into something you stop noticing within a week.',
      },
    ],
    sections: [
      {
        heading: 'Why dual monitor pet placement is worth two minutes',
        paragraphs: [
          'A pixel pet dual monitor setup is easy until the second screen joins in. The pet lands on whatever your system calls the primary display, and on plenty of desks that is the wrong one: the laptop panel you keep closing, or the vertical monitor where a 192-pixel sprite ends up sitting on top of your code.',
          'Two minutes of moving it pays off later. A pet you catch in the corner of your eye without turning your head does something for you. One you have to hunt for gets switched off before the week is out.',
        ],
      },
      {
        heading: 'Which monitor your pet belongs on',
        paragraphs: [
          'A pet on second monitor hardware only helps if you look at that screen. A second display you check once an hour is the one place your desktop pet placement should avoid.',
          'Most two-screen desks fall into one of these shapes, and each has an obvious answer:',
        ],
        list: [
          'Editor left, browser right: bottom-right of the browser screen, near where your tabs end',
          'Laptop plus external monitor: the external one, since the lid moves during the day',
          'Horizontal plus vertical: the bottom of the horizontal screen, because the vertical one is usually a file tree',
          'One big monitor doing everything: bottom-left, clear of the line-number gutter',
          'Whatever you pick, keep it out of the gutter and away from the notification area, the two spots that make people quit',
        ],
      },
      {
        heading: 'Four dual screen pet positions that survive a workday',
        paragraphs: [
          'These four come up constantly in dual monitor threads, mostly because they stay out of the way when another window opens.',
        ],
        list: [
          'Bottom outer corner: works on every layout and never collides with a menu',
          'Just above the taskbar or dock: the pet reads as part of the furniture rather than a floating window',
          'Next to a terminal you keep open: it becomes a marker for which window does what',
          'Bottom edge of the left screen when your dock auto-hides on the right',
          'Skip the centre seam between two monitors. That line is where dragged windows and the dock both end up',
        ],
      },
      {
        heading: 'What actually breaks desktop pet placement',
        paragraphs: [
          'Most complaints trace back to four things, and only one of them is your fault.',
        ],
        list: [
          'Mixed scaling: two different zoom levels draw the pet at two sizes, and a position that looks fine on one swallows a menu on the other',
          'Sleep and resume: waking one monitor often relocates the pet, and it does not always come back',
          'Full-screen apps: an editor or game in full screen takes the whole surface, and the pet reappears when you exit',
          'Rearranging displays: swapping left and right in system settings sends the pet where it logically belongs, which is now somewhere else',
          'For any of these, a full Codex restart cleans up more than dragging does',
        ],
      },
      {
        heading: 'A five-minute check before you settle',
        paragraphs: [
          'Run this once with the machine in its normal state, external monitor plugged in and the lid wherever you usually keep it.',
        ],
        list: [
          'Start Codex and note which monitor the pet landed on',
          'Unplug and replug the external display, then watch where it goes',
          'Open your most-used full-screen app and confirm the pet comes back',
          'Change nothing for a day, then move it once if it annoyed you',
          'Redo this after any OS display update, since both Windows and macOS forget arrangements now and then',
        ],
      },
      {
        heading: 'Set it and forget it',
        paragraphs: [
          'Generate one at codexpetgenerator.com from any photo you have, then drop it into place with the terminal steps at /blog/install-codex-pet-terminal. If your second screen is on another machine, /blog/sync-codex-pet-across-machines covers moving the same pet across. The nine states at /blog/codex-pet-9-animation-states explain why the idle loop suits a monitor you glance at all day better than the busy ones do, and /blog/codex-pet-not-showing-fixes handles the case where nothing appears at all. Generation limits are on /pricing, and the generator itself is at /.',
        ],
      },
    ],
  },
  {
    slug: 'dual-monitor-pet-placement-zh',
    title: '双屏玩家的桌宠摆位技巧',
    description:
      '给两块屏的桌面做桌宠摆位：它该待在哪一块屏幕上、为什么一拔外接显示器它就跑回笔记本屏、两块屏缩放不一致时该怎么处理。',
    date: '2026-10-09',
    author: 'PetGen',
    keywords: [
      '桌宠双屏',
      '像素桌宠第二个显示器',
      '双屏桌宠位置',
      '桌面宠物摆放',
      'codex 桌宠双显示器',
      '桌宠显示器摆位',
      'pixel pet dual monitor',
    ],
    related: [
      'codex-pet-9-animation-states',
      'install-codex-pet-terminal',
      'sync-codex-pet-across-machines',
      'codex-pet-not-showing-fixes',
    ],
    faq: [
      {
        question: '桌宠能放到第二块显示器上吗？',
        answer: '可以。直接拖过去，或者在系统里把那块屏设成主显示器，让 Codex 打开时就落在那里。重启后 Codex 会沿用上次的位置，所以摆好之后先别动它。',
      },
      {
        question: '为什么拔掉外接显示器后桌宠跑回笔记本屏幕了？',
        answer: '它原来所在的那块屏没了，系统会把浮在上面的一切挪回剩下的屏幕。先把显示器插回去，手动拖到想要的位置，再重启一次 Codex，位置就留住了。',
      },
      {
        question: '两块屏缩放不一样，桌宠大小会跟着变吗？',
        answer: '会。一块 100% 的笔记本屏配一块 150% 的 4K 屏，同一张精灵图在两边画出来大小明显不同。在意的话把两块屏的缩放设成一致，或者干脆把桌宠放在你看得最多的那块上。',
      },
      {
        question: '是不是只在其中一块屏上放桌宠、另一块留空比较好？',
        answer: '一般是这样。放在你看得最多的那块上，它才有用；两块都摆，一周之后你就不看见了。',
      },
    ],
    sections: [
      {
        heading: '为什么双屏摆位值得花两分钟',
        paragraphs: [
          '单屏摆位不算事儿，双屏才容易出问题。桌宠会落在系统认定的主屏上，而很多人的主屏恰好是不合适的那一块：一会儿要合上的笔记本屏，或者是那块竖着的屏，192 像素的精灵图正好压在你的代码上面。',
          '花两分钟挪一下是划算的。抬眼就能瞄到的桌宠才起作用，得满屏幕找的那种，撑不到周末就被人关了。',
        ],
      },
      {
        heading: '桌宠该待在哪块屏上',
        paragraphs: [
          '只有当第二块屏你经常看的时候，把桌宠放上去才有意义。一小时才瞄一眼的那块屏，恰恰是最不该摆的地方。',
          '常见的双屏布局就这几种，每种都有个显而易见的答案：',
        ],
        list: [
          '左边编辑器、右边浏览器：摆在浏览器那块的右下角，靠标签栏收尾的地方',
          '笔记本 + 外接显示器：放外接那块，因为笔记本盖一天要开合好几次',
          '横屏 + 竖屏：放横屏的下边缘，竖屏通常被文件树占着',
          '一块大屏干所有事：左下角，避开行号槽',
          '不管哪种，都别压在行号槽和通知区上，这两个位置最容易让人直接关掉它',
        ],
      },
      {
        heading: '四个能撑完整天的双屏位置',
        paragraphs: [
          '下面这四个在双屏讨论里反复出现，原因很简单：别的窗口打开时，它们不会挡事。',
        ],
        list: [
          '最外侧的下角：什么布局都能用，也不会跟菜单撞上',
          '任务栏或 Dock 上方一点：看起来像桌面自带的一部分，不像个飘着的窗口',
          '常开的终端旁边：它顺带变成了「这块是干嘛的」的标记',
          'Dock 在右边且自动隐藏时，放左边那块屏的下边缘',
          '别放在两块屏中间的接缝处，那道线是拖拽窗口和 Dock 都喜欢落下的地方',
        ],
      },
      {
        heading: '真正会让摆位失效的几个情况',
        paragraphs: [
          '大多数抱怨最后都能归到下面四项，其中只有一项算你的问题。',
        ],
        list: [
          '缩放不一致：两档不同的缩放把同一只桌宠画成两种大小，在这边刚好的位置，到那边就把菜单压住了',
          '睡眠与唤醒：只唤醒一块屏时，桌宠常被挪走，而且不一定回来',
          '全屏应用：编辑器或游戏全屏会占满整面桌面，退出后桌宠才重新出现',
          '重排显示顺序：在系统里把左右屏换一下，桌宠会去它「逻辑上」该在的地方，而那个地方已经换人了',
          '遇到以上任意一种，完整重启一次 Codex 比反复拖拽管用',
        ],
      },
      {
        heading: '定下来之前的五分钟检查',
        paragraphs: [
          '挑机器处于日常状态的时候跑一遍：外接显示器插着，笔记本盖按你平时的习惯开着或合着。',
        ],
        list: [
          '启动 Codex，记住桌宠落在哪块屏上',
          '拔掉再插回外接显示器，看它跑到哪去了',
          '打开最常用的那个全屏应用，确认退出后桌宠会回来',
          '先别改，观察一天，如果真碍事了再挪一次',
          '系统做过显示相关的更新之后重做一遍，Windows 和 macOS 都会偶尔忘记排列',
        ],
      },
      {
        heading: '摆好就不用再管了',
        paragraphs: [
          '拿手边任意一张照片到 codexpetgenerator.com 生成一只，再照着 /blog/install-codex-pet-terminal 的终端步骤放到位。如果第二块屏在另一台机器上，/blog/sync-codex-pet-across-machines 讲了怎么把同一只挪过去。九个状态在 /blog/codex-pet-9-animation-states：为什么待机循环比那些动作大的状态更适合你整天瞄的那块屏。完全不显示的状况看 /blog/codex-pet-not-showing-fixes，生成次数放在 /pricing，入口在 /。',
        ],
      },
    ],
  },
  {
    slug: 'hide-codex-pet-screen-share',
    title: 'Hiding Your Pet During Screen Sharing: How to Hide Codex Pet Overlays Fast',
    description:
      'How to hide codex pet overlays before a call or recording: what Zoom and OBS really capture, four ways to pause codex pet motion, and why a hidden pet comes back exactly where it was.',
    date: '2026-10-11',
    author: 'PetGen',
    keywords: [
      'hide codex pet',
      'hide pixel pet',
      'pet during screenshare',
      'pause codex pet',
      'codex pet screen share',
      'pixel pet screen recording',
      'hide desktop pet on calls',
      'petgen hide pet overlay',
    ],
    related: [
      'codex-pet-not-showing-fixes',
      'dual-monitor-pet-placement',
      'codex-pet-9-animation-states',
      'install-codex-pet-terminal',
    ],
    faq: [
      {
        question: 'Does hiding my pet during a screen share break the install?',
        answer: 'No. Hiding only decides whether the pet gets drawn this second. Nothing in ~/.codex/pets moves, and it comes back in the same corner after Codex restarts.',
      },
      {
        question: 'Can I hide the pet from one app but keep it everywhere else?',
        answer: 'Yes. Share a single window instead of the whole display and the pet falls outside the captured frame, while every other app still shows it.',
      },
      {
        question: 'Will a paused pixel pet still cost me CPU while recording?',
        answer: 'An idle sprite costs close to nothing. Full-screen recording is what eats your CPU, so if the fans spin up, check the encoder before blaming the pet.',
      },
      {
        question: 'What is the fastest hide when someone pulls me into a demo unannounced?',
        answer: 'Switch from sharing your entire display to sharing one window. It is the same click you were already going to make, and it leaves Codex alone.',
      },
    ],
    sections: [
      {
        heading: 'Why you need to hide codex pet overlays before you record',
        paragraphs: [
          'A pet placed so it sits in the corner of your eye all day ends up in every recording you make. Most people find out during playback, usually four minutes into a client demo they have already sent.',
          'The good news: getting rid of it takes about two seconds once you know which lever to pull. That matters more than it sounds, because a hide that takes four menus doesn\'t become a habit.',
        ],
      },
      {
        heading: 'What screen sharing tools actually capture',
        paragraphs: [
          'Here is the part people get wrong. A pet during screenshare behaves differently depending on what you hand over: pick one window and the pet usually falls outside the frame, pick a whole display and it rides along every time.',
          'Recording is stricter than sharing. Anything your GPU paints onto that monitor lands in the file, whatever you thought the app was pointed at.',
        ],
        list: [
          'Zoom or Meet sharing a full display: the pet comes along regardless of which app you selected',
          'Zoom or Meet sharing a single window: the pet mostly lands outside the cropped frame',
          'OBS, QuickTime and ScreenFlow: everything on the captured monitor, floating sprite included',
          'Virtual cameras and similar plug-ins: same rule as window capture, plus whatever your compositor layers on top',
          'Slide tools that mirror the whole desktop: the worst case, and the one everybody forgets exists',
        ],
      },
      {
        heading: 'Four ways to pause codex pet motion',
        paragraphs: [
          'These are ordered by how much they cost you. Start at the top and stop as soon as one of them solves it.',
        ],
        list: [
          'Share one window rather than the entire display. Nothing else changes and the pet leaves the frame',
          'Drag the pet onto a monitor you are not sharing. This alone justifies a second screen for many people: /blog/dual-monitor-pet-placement covers the placement math',
          'Move Codex to another virtual desktop (Win+Tab on Windows, another Space on macOS) and share from the clean one',
          'Quit Codex for the length of the call, then reopen it after',
        ],
      },
      {
        heading: 'Hide pixel pet overlays for one app instead of quitting everything',
        paragraphs: [
          'Quitting Codex to sit through a fifteen-minute call costs more than it saves, especially with a long task still running in the background. Two options sit between doing nothing and killing the app.',
          'On macOS, put Codex in its own Space and share a different one. On Windows, virtual desktops do the same job. Either way the pet keeps going where you left it. Which states stop cleanly and which restart from frame one is spelled out in /blog/codex-pet-9-animation-states.',
        ],
      },
      {
        heading: 'Ninety seconds before the call',
        paragraphs: [
          'This is the whole check, and it catches nearly everything that goes wrong:',
        ],
        list: [
          'Start the recording tool and read the preview thumbnail, not the meeting window',
          'Open the window you plan to share and look at all four corners',
          'Record five seconds, stop, and watch it back',
          'If you are sharing a whole display, hide the pet first',
          'Ask whoever else is on the call. They notice things you stopped seeing months ago',
        ],
      },
      {
        heading: 'Bring it back when you are done',
        paragraphs: [
          'Nothing you did to hide the pet touched your files on disk. The sprite, the palette and the last position stay put, so reopening Codex drops the pet into the same corner. When it does not, the cause is usually a change in display arrangement rather than a broken install, and /blog/codex-pet-not-showing-fixes walks through that order.',
          'Generate one at codexpetgenerator.com from any photo you have lying around, install it with the terminal steps at /blog/install-codex-pet-terminal, and check /pricing for how many generations your plan allows. The generator itself lives at /.',
        ],
      },
    ],
  },
  {
    slug: 'hide-codex-pet-screen-share-zh',
    title: '屏幕录制时桌宠抢镜？几种把它藏起来的办法',
    description:
      '屏幕共享和录屏时怎么把 Codex 桌宠藏起来：Zoom 与 OBS 到底录到什么、四种暂停桌宠的办法，以及藏起来之后它为什么还留在原位。',
    date: '2026-10-11',
    author: 'PetGen',
    keywords: [
      '隐藏 codex 桌宠',
      '桌宠录屏',
      '屏幕共享桌宠',
      '暂停桌宠',
      'codex 桌宠隐藏技巧',
      '桌宠抢镜',
      '像素桌宠录屏隐藏',
      'hide codex pet',
    ],
    related: [
      'codex-pet-not-showing-fixes',
      'dual-monitor-pet-placement',
      'codex-pet-9-animation-states',
      'install-codex-pet-terminal',
    ],
    faq: [
      {
        question: '录屏时把桌宠藏起来，会不会弄坏安装？',
        answer: '不会。隐藏只是决定这一刻要不要把它画出来，~/.codex/pets 里的文件一个都没动，重启 Codex 之后它还在原来的那个角上。',
      },
      {
        question: '能不能只对一个软件隐藏桌宠？',
        answer: '可以。共享单个窗口而不是整块屏幕，桌宠就落在捕获范围之外，其它软件里照常显示。',
      },
      {
        question: '录屏的时候桌宠会占 CPU 吗？',
        answer: '待机状态的像素动画几乎不占什么。全屏录制本身才吃 CPU，所以风扇转起来的时候先看编码器，别急着怪桌宠。',
      },
      {
        question: '临时被拉去演示，最快怎么处理？',
        answer: '把共享对象从整块屏幕切成单个窗口。这跟你本来就要点的那一下是同一步操作，也不用去动 Codex。',
      },
    ],
    sections: [
      {
        heading: '为什么录屏之前先要把桌宠藏起来',
        paragraphs: [
          '桌宠整天待在你余光能看到的地方，所以它也顺理成章地出现在你每一段录屏里。大部分人是在回放的时候才发现的，通常已经是把客户 Demo 发出去的第四分钟。',
          '好消息是，知道该拉哪个开关之后，藏起来大概只要两秒。这一点比听起来重要：一个要点四层菜单才能打开的开关，永远变不成习惯。',
        ],
      },
      {
        heading: '共享屏幕的工具到底录到了什么',
        paragraphs: [
          '这里是最容易搞错的一环。屏幕共享时的桌宠表现取决于你交出去的是什么：选单个窗口，桌宠一般落在框外；选整块屏幕，它就每次都跟着上车。',
          '录屏比共享更严格。只要是被显卡画到那块显示器上的东西，都会进到文件里，不管你以为软件指向的是哪里。',
        ],
        list: [
          'Zoom、Meet 共享整块屏幕：桌宠跟着走，跟你选了哪个应用无关',
          'Zoom、Meet 共享单个窗口：桌宠多半落在裁剪范围之外',
          'OBS、QuickTime、ScreenFlow：捕获的那块屏上什么都逃不掉，浮动的像素小图也在',
          '虚拟摄像头一类插件：规则跟窗口捕获一样，外加合成器叠上去的那些图层',
          '把整个桌面镜像出去的演示工具：最糟的一种，而且大家总是忘了还有它',
        ],
      },
      {
        heading: '四种让桌宠停下来的办法',
        paragraphs: [
          '下面按代价从低到高排。从头往下试，哪个解决了就停手。',
        ],
        list: [
          '共享单个窗口而不是整块屏幕：别的都不用改，桌宠就离开了画面',
          '把桌宠拖到你不共享的那块显示器上。光这一条就让很多人觉得第二块屏值了，摆位细节在 /blog/dual-monitor-pet-placement',
          '把 Codex 挪到另一个虚拟桌面（Windows 用 Win+Tab，macOS 用另一个 Space），从干净的那桌共享出去',
          '开会这段时间直接退出 Codex，结束后重新打开',
        ],
      },
      {
        heading: '只对一个软件隐藏，而不是把整个工具干掉',
        paragraphs: [
          '为了十五分钟的会议退出 Codex，代价通常比收益大，尤其后台还跑着一个长任务的时候。除了硬退，还有两个折中选择。',
          'macOS 上把 Codex 单独放进一个 Space，从别的 Space 共享出去；Windows 上用虚拟桌面做同样的事。两种方式下桌宠都还在原来的地方跑着。哪些状态会干净地停住、哪些要从第一帧重新开始，写在 /blog/codex-pet-9-animation-states。',
        ],
      },
      {
        heading: '开会前九十秒查一遍',
        paragraphs: [
          '就这几步，基本能把会出的问题都拦下来：',
        ],
        list: [
          '打开录制软件，看预览缩略图，不要只看会议窗口',
          '打开你准备共享的那个窗口，四个角都扫一遍',
          '录五秒，停，回放看看',
          '如果要共享整块屏幕，先把桌宠藏起来',
          '问一句对面的人。你几个月前就不再注意的东西，他们一眼能看见',
        ],
      },
      {
        heading: '开完会再把它放回来',
        paragraphs: [
          '隐藏过程中没有任何一步动到磁盘上的文件。精灵图、配色和最后的位置都原样留着，重新打开 Codex 它就回到同一个角上。如果位置变了，通常是因为系统改了显示器排列，而不是安装坏了，/blog/codex-pet-not-showing-fixes 里有完整的排查顺序。',
          '随手拿一张照片到 codexpetgenerator.com 生成一只，照着 /blog/install-codex-pet-terminal 的终端步骤装上，生成次数看 /pricing。生成器入口在 /。',
        ],
      },
    ],
  },
  {
    slug: 'ai-companion-culture',
    title: 'AI Companion Culture in Development: Why Developers Keep a Pet on Screen',
    description:
      'AI companion culture showed up in code editors first. What the ai coding companion trend actually is, where a developer ai pet fits in the day, and how to tell a companion from a distraction.',
    date: '2026-10-12',
    author: 'PetGen',
    keywords: [
      'ai companion culture',
      'ai coding companion trend',
      'developer ai pet',
      'companion culture dev',
      'codex pet companion',
      'ai desktop companion for developers',
      'petgen ai companion',
    ],
    related: [
      'why-developers-love-desktop-companions',
      'codex-pet-9-animation-states',
      'install-codex-pet-terminal',
      'coding-mood-journal-pixel-pet',
    ],
    faq: [
      {
        question: 'Is ai companion culture just another word for a chatbot?',
        answer: 'No. A chatbot answers when you ask. A companion sits there whether you asked or not, and the relationship is closer to a plant on your desk than to a conversation.',
      },
      {
        question: 'Does a developer ai pet change what the model produces?',
        answer: 'No. The pet is a spritesheet plus a small config file that Codex draws on screen. It never touches prompts, context or output, which is why trying one costs you nothing.',
      },
      {
        question: 'Why did this trend start in code editors rather than somewhere else?',
        answer: 'The editor is the window that stays open all day, and agent runs leave long stretches of waiting that a progress bar never filled. Both conditions were already in place.',
      },
      {
        question: 'How do I know if my companion is helping or just distracting me?',
        answer: 'Turn it off for one afternoon. If you catch yourself looking at the empty corner, it was doing something for you. If you feel relieved, leave it off.',
      },
    ],
    sections: [
      {
        heading: 'What ai companion culture actually means',
        paragraphs: [
          'Companion culture is the habit of keeping a small persistent character next to the tools you work in. Call it ai companion culture if you want the label: a pixel pet in the corner of the editor, a mascot that reacts when a build finishes, an avatar that stays on screen between tasks. None of it changes what the model can do. It changes what the room feels like while you work.',
          'The interesting part is who started it. Not the teams training the models and not a marketing department. It came from developers who were already spending nine hours a day inside one window and decided that window should hold something that is not a diff.',
        ],
      },
      {
        heading: 'Why the ai coding companion trend started in the editor',
        paragraphs: [
          'An editor is the one window most of us keep open from the first coffee to the last commit. That makes it the natural home for anything persistent. A companion living in a browser tab gets closed by Thursday. One living next to your terminal is there whether you meant to look at it or not.',
          'There is a timing reason too. Agentic coding turned waiting into the default: you hand off a task and watch it work. Something on screen that reflects that state fills a gap a spinner never did.',
        ],
        list: [
          'The editor stays open longer than every other window, so a persistent companion actually gets seen',
          'Agent runs create dead time, and dead time is where a companion earns its place',
          'Terminal setups are already personal, so one more personal thing fits without comment',
          'None of it touches the model, which keeps the cost of trying it close to zero',
        ],
      },
      {
        heading: 'Where a developer ai pet fits into the day',
        paragraphs: [
          'Most people use one for three things: a sense that the session is still running, a short break for the eyes, and something to blame when a build fails. That last one is half a joke and half the point.',
        ],
        list: [
          'While a long task runs, the idle loop tells you the session is alive without a single notification',
          'Between two hard problems, a few seconds of watching something small move is enough of a reset',
          'When you come back the next morning the same sprite is where you left it, and that continuity is most of the value',
          'Which states run during which phase is laid out at /blog/codex-pet-9-animation-states',
        ],
      },
      {
        heading: 'Companion culture dev: what teams are doing with it',
        paragraphs: [
          'Team use is quieter than individual use and more telling. Groups that adopt a shared pet usually do it after somebody brings one to a demo and everyone asks where it came from. The pet turns into shared vocabulary, the way a team sticker or an inside joke does.',
          'The practical version is one pet per repo or one per service, so you can tell at a glance which project you are looking at. That is the same trick as reading states, except the signal is identity instead of status.',
        ],
      },
      {
        heading: 'How to tell a companion from a distraction',
        paragraphs: [
          'The honest test is whether you look at it on purpose. A companion that only shows up when your attention wanders is doing its job. One that pulls your eyes off a function you were halfway through reading is not.',
        ],
        list: [
          'Put it in the corner of your eye, not beside the code. Placement decides this more than the sprite does',
          'If you catch yourself watching it instead of the diff, move it to another monitor',
          'Switch it off for one afternoon and see whether you miss it. You will know inside two hours',
          'Recordings are the exception, and /blog/hide-codex-pet-screen-share covers that in ninety seconds',
        ],
      },
      {
        heading: 'Try one for a week',
        paragraphs: [
          'Generate a pet from any photo at codexpetgenerator.com, install it with the terminal steps at /blog/install-codex-pet-terminal, and leave it in the same corner for five working days. Do not move it and do not swap it out. By Friday you will know which kind of person you are.',
          'The longer argument for why developers keep them is at /blog/why-developers-love-desktop-companions, and turning the whole thing into a record of your week is at /blog/coding-mood-journal-pixel-pet. Generation counts live at /pricing. The generator itself is at /.',
        ],
      },
    ],
  },
  {
    slug: 'ai-companion-culture-zh',
    title: '开发者与 AI 的"伙伴文化"正在形成：为什么大家开始在屏幕上养一只',
    description:
      'AI 伙伴文化最先出现在代码编辑器里。这篇讲清 ai coding companion trend 到底指什么、developer ai pet 在一天里占哪个位置，以及怎么分辨陪伴和分心。',
    date: '2026-10-12',
    author: 'PetGen',
    keywords: [
      'AI 伙伴文化',
      '开发者 AI 桌宠',
      '代码编辑器陪伴',
      'codex 桌宠趋势',
      '桌面陪伴开发者',
      'ai companion culture',
      'developer ai pet',
    ],
    related: [
      'why-developers-love-desktop-companions',
      'codex-pet-9-animation-states',
      'install-codex-pet-terminal',
      'coding-mood-journal-pixel-pet',
    ],
    faq: [
      {
        question: 'AI 伙伴文化是不是就是聊天机器人的另一个说法？',
        answer: '不是。聊天机器人是你问了才答；桌宠不管你问没问都在那儿，关系更接近办公桌上的一盆植物，而不是一段对话。',
      },
      {
        question: '桌宠会影响模型给出的结果吗？',
        answer: '不会。桌宠就是一张精灵图加一个小配置文件，Codex 把它画在屏幕上而已，不碰提示词、上下文和输出，所以试一下的代价基本为零。',
      },
      {
        question: '为什么这股趋势先长在编辑器里，而不是别的地方？',
        answer: '编辑器是一天开到关的那个窗口，而 agent 跑任务留下了大量等待时间，进度条从来没填满过这段时间。两个条件本来就在那儿。',
      },
      {
        question: '怎么知道桌宠是在陪我还是在让我分心？',
        answer: '关掉一个下午。如果你会去看那个空出来的角落，说明它确实起了作用；如果你松了一口气，那就别开了。',
      },
    ],
    sections: [
      {
        heading: 'AI 伙伴文化到底指什么',
        paragraphs: [
          '伙伴文化说的是这么个习惯：在你干活用的工具旁边，长期放着一个小东西。要用词的话就是 ai companion culture，指的是编辑器角落里的像素宠物、构建结束时会有反应的吉祥物、任务之间一直待在屏幕上的那个形象。这些东西都不改变模型能做什么，改变的是你干活时这个空间给人的感觉。',
          '有意思的是谁先开始的。不是训练模型的那批人，也不是哪个市场部。是一天要在同一个窗口里待九个小时的开发者，他们觉得那个窗口里除了 diff 还该有点别的。',
        ],
      },
      {
        heading: '为什么这股趋势先长在编辑器里',
        paragraphs: [
          '编辑器是大多数人从第一杯咖啡到最后一次提交都开着的唯一窗口，任何要长期存在的东西自然往这儿放。待在浏览器标签页里的伙伴，周四就被关掉了；待在终端旁边的那个，不管你想不想看它都在。',
          '还有个时间上的原因：agent 式编码把等待变成了常态，你把任务交出去然后看着它干活。屏幕上有东西反映这个状态，填补了转圈动画从来没填上的空。',
        ],
        list: [
          '编辑器开着的时间比别的窗口都长，所以长期存在的伙伴真的会被看见',
          'agent 跑任务制造出空档时间，而空档时间正是伙伴能派上用场的地方',
          '终端配置本来就私人化，再多一件私人化的东西也不会有人多问一句',
          '它不碰模型，所以试一下的代价几乎为零',
        ],
      },
      {
        heading: '一天里桌宠占的是哪个位置',
        paragraphs: [
          '多数人用它做三件事：确认会话还在跑、让眼睛歇两秒，以及构建挂掉时有个东西可以怪。最后这条一半是玩笑，一半才是重点。',
        ],
        list: [
          '长任务跑着的时候，待机循环不用任何通知就能告诉你会话还活着',
          '两个难题之间，看几秒小东西动一动就已经够回血了',
          '第二天早上回来，同一只还在原位，这种连续性才是它大部分的价值',
          '哪个阶段跑哪个状态，写在 /blog/codex-pet-9-animation-states',
        ],
      },
      {
        heading: '团队里的伙伴文化在做什么',
        paragraphs: [
          '团队用法比个人用法安静，但更能说明问题。一个组开始用统一的桌宠，通常是某人在演示里带了它，然后所有人问这东西哪来的。桌宠于是变成了一句内部黑话，跟团队贴纸或者内部梗差不多。',
          '实用一点的做法是每个仓库一只，或者每个服务一只，扫一眼就知道自己在看哪个项目。这跟读状态的思路是一样的，只不过信号从"进度"换成了"身份"。',
        ],
      },
      {
        heading: '怎么分辨陪伴和分心',
        paragraphs: [
          '诚实的检验标准是你是不是主动去看它。只在注意力飘走时才出现在视野里的桌宠，是在干活的；把你目光从读了一半的函数上拽走的那个，不是。',
        ],
        list: [
          '放在余光里，不要放在代码旁边。位置比精灵图本身更决定这件事',
          '如果发现自己在看它而不是看 diff，把它挪到另一块显示器上',
          '关掉一个下午看看想不想它，两个小时内你就有答案',
          '录屏是例外情况，/blog/hide-codex-pet-screen-share 里九十秒就能处理完',
        ],
      },
      {
        heading: '试一周看看',
        paragraphs: [
          '随手拿一张照片到 codexpetgenerator.com 生成一只，照着 /blog/install-codex-pet-terminal 的终端步骤装上，然后连续五个工作日别挪它、别换它。到周五你就知道自己属不属于需要它的那类人。',
          '关于开发者为什么留着它们的长篇说法在 /blog/why-developers-love-desktop-companions，把它变成一周记录的写法在 /blog/coding-mood-journal-pixel-pet。生成次数看 /pricing，生成器入口在 /。',
        ],
      },
    ],
  },
  {
    slug: 'codex-pet-vm',
    title: 'Codex Pet VM Setup: Pets on Virtual Machines and External Displays',
    description:
      'A codex pet vm walkthrough: which home directory the pet files sit in, what changes when you add a second monitor, and how a remote desktop pet behaves when the window gets compressed.',
    date: '2026-10-13',
    author: 'PetGen',
    keywords: [
      'codex pet vm',
      'codex pet virtual machine',
      'pet external display',
      'remote desktop pet',
      'codex pet second monitor',
      'pixel pet multi monitor setup',
    ],
    related: [
      'dual-monitor-pet-placement',
      'sync-codex-pet-across-machines',
      'install-codex-pet-terminal',
      'hide-codex-pet-screen-share',
    ],
    faq: [
      {
        question: 'Does a codex pet work inside a virtual machine?',
        answer: 'Yes, as long as that VM has its own copy of the pets folder. The pet lives in the home directory of whichever machine runs Codex, so a freshly created VM starts with no pets at all.',
      },
      {
        question: 'Why does my pet look a different size on my second monitor?',
        answer: 'Display scaling. A monitor set to 150 percent draws the same spritesheet larger than one at 100 percent. The file does not change; match the scaling on both screens if you want an identical look.',
      },
      {
        question: 'Will the pet show up over remote desktop?',
        answer: 'It will, because a remote session shows you the other machine running its own Codex window. Expect the animation to stutter when the connection does, and check that the window is not cropped at the corner.',
      },
      {
        question: 'Can a host and a VM share one pets folder?',
        answer: 'You can point a shared or synced folder at it and both sides will read the same files. Two machines writing at the same time is where it gets messy, so sync in one direction.',
      },
    ],
    sections: [
      {
        heading: 'Where a codex pet actually lives',
        paragraphs: [
          'Every codex pet is two files in one folder: a spritesheet.webp and a pet.json, both sitting under the pets directory in the home folder of the machine that runs Codex. Nothing about them is display-aware. The renderer draws them at a fixed size in a corner of the Codex window, which is why a codex pet vm setup is mostly a question of which home directory you are looking at.',
          'That distinction matters the moment you stop working on a single box. The pet follows the home directory, not the monitor and not the person. Drop the same folder onto a second machine and you get the same pet. Log into a VM with a fresh home and you get an empty corner.',
        ],
        list: [
          'Pets folder on the host: the pet shows in your normal Codex window',
          'Pets folder inside the VM: the pet shows only when Codex runs there',
          'Shared or synced folder: the pet shows on both, as long as the paths match',
          'Remote desktop into the host: the pet shows, because you are looking at the host window',
        ],
      },
      {
        heading: 'External displays: what changes and what does not',
        paragraphs: [
          'Plugging in a monitor does not move the pet, but it does move your eyes, and that is the usual reason people report a missing pet on an external display. It is sitting in the same corner of the same window; the window just is not where you are looking anymore.',
          'Two things genuinely do change. Scaling affects how large the sprite appears, and window position decides whether the corner it occupies is on the screen you read.',
        ],
        list: [
          'Drag the Codex window to the monitor you actually read and the pet comes along',
          'Scaling at 100 versus 150 percent changes the drawn size, the spritesheet file stays identical',
          'A different refresh rate does not speed up or slow the animation, the sprite cycles on its own timer',
          'Placement across two screens is written up at /blog/dual-monitor-pet-placement',
        ],
      },
      {
        heading: 'Virtual machines and remote desktop pet sessions',
        paragraphs: [
          'A codex pet virtual machine is the case that trips people up, because there are two home directories and usually only one of them has your pets folder. If you run Codex inside a Linux VM on a Windows host, that VM needs its own copy of the folder before anything appears.',
          'Remote desktop is the easier half. You are watching the remote machine\'s Codex window, so whatever that machine has installed is what you see. The catch is bandwidth: compression and lag apply to the pet exactly as they do to the rest of the window.',
        ],
        list: [
          'Copy the pets folder into the VM home directory, then restart Codex inside the VM',
          'Over remote desktop the pet renders on the remote machine, so lag hits it too',
          'Full-screen remote sessions are fine; windowed ones can crop the corner where the pet sits',
          '/blog/sync-codex-pet-across-machines covers keeping both copies identical',
        ],
      },
      {
        heading: 'Check this before you blame the pet',
        paragraphs: [
          'Most missing-pet reports are a path problem rather than a generation problem. Run through this list before you regenerate anything.',
        ],
        list: [
          'Is Codex running on the machine you are looking at?',
          'Does the pets folder exist in that machine home directory?',
          'Does pet.json point at a spritesheet that is actually present?',
          'Is the Codex window wide enough for the corner the pet occupies?',
          'If you need to redo it, the install steps are at /blog/install-codex-pet-terminal',
        ],
      },
      {
        heading: 'One install per machine, then forget about it',
        paragraphs: [
          'Generate a pet at codexpetgenerator.com, download the ZIP, and install it with the terminal steps at /blog/install-codex-pet-terminal. Do that once per machine, VM included, and the pet stops being something you have to think about.',
          'If you want the same pet everywhere, the folder sync method at /blog/sync-codex-pet-across-machines is the piece that makes it stick. Generation counts are listed at /pricing, and the generator itself is at /. Recording a session is the one case where you want the pet out of frame, and /blog/hide-codex-pet-screen-share handles that in about ninety seconds.',
        ],
      },
    ],
  },
  {
    slug: 'codex-pet-vm-zh',
    title: '外接显示器和虚拟机里，Codex 桌宠还能用吗',
    description:
      'codex pet vm 一次说清：宠物文件在哪个 home 目录、外接显示器上位置怎么变、远程桌面下动画为什么会卡，以及每台机器各装一次就够了。',
    date: '2026-10-13',
    author: 'PetGen',
    keywords: [
      'Codex 桌宠 虚拟机',
      '外接显示器 桌宠',
      '远程桌面 桌宠',
      'codex pet vm',
      '桌宠文件位置',
      '虚拟机 Codex 宠物',
    ],
    related: [
      'dual-monitor-pet-placement',
      'sync-codex-pet-across-machines',
      'install-codex-pet-terminal',
      'hide-codex-pet-screen-share',
    ],
    faq: [
      {
        question: '虚拟机里能装 Codex 桌宠吗？',
        answer: '能，前提是那台虚拟机自己有一份宠物目录。桌宠跟着运行 Codex 那台机器的 home 目录走，新建的虚拟机一开始是空的。',
      },
      {
        question: '为什么宠物在副屏上看起来大小不一样？',
        answer: '缩放比例不同。150% 的显示器会把同一张精灵图放大画出来，文件本身没变。想让两边看起来一致，就把两块屏设成同一个缩放值。',
      },
      {
        question: '远程桌面里能看到桌宠吗？',
        answer: '能看到，因为远程桌面显示的是另一台机器自己的 Codex 窗口。要注意的是网络：连接卡的时候动画也会跟着卡，另外确认窗口没被裁掉角落。',
      },
      {
        question: '宿主机和虚拟机可以共用同一份宠物目录吗？',
        answer: '可以指向同一个共享或同步目录，两边都能读到同样的文件。麻烦出在两台机器同时写入，所以只做单向同步。',
      },
    ],
    sections: [
      {
        heading: '桌宠到底装在哪儿',
        paragraphs: [
          '一只 Codex 桌宠就是同一个目录里的两个文件：spritesheet.webp 和 pet.json，放在运行 Codex 那台机器的 home 目录下。它们跟显示器没有任何关系，渲染器只是把图按固定尺寸画在 Codex 窗口的某个角上。所以 codex pet vm 这件事，本质上是「你在看哪台机器的 home 目录」。',
          '一旦你不止在一台机器上干活，这个区别就开始咬人。桌宠跟着 home 目录走，不跟着显示器走，也不跟着人走。把同一份目录复制到第二台机器，你得到同一只；登录一台全新的虚拟机，你得到一片空角落。',
        ],
        list: [
          '目录在宿主机：桌宠出现在你平时那个 Codex 窗口里',
          '目录在虚拟机：只有 Codex 在那台虚拟机里运行时才出现',
          '共享或同步目录：两边都能出现，前提是路径一致',
          '远程桌面连宿主机：能看到，因为你看到的就是宿主机的窗口',
        ],
      },
      {
        heading: '外接显示器：变的是什么',
        paragraphs: [
          '插上第二块屏并不会挪走桌宠，挪走的是你的视线。多数「副屏上桌宠不见了」的报告都属于这一种：它还在同一个窗口的同一个角上，只是那个窗口已经不在你盯着的地方了。',
          '真正会变的只有两样：缩放决定了画出来有多大，窗口位置决定了它占的那个角落在不在你读的屏幕上。',
        ],
        list: [
          '把 Codex 窗口拖到你常看的显示器，桌宠跟着走',
          '100% 和 150% 的缩放会改变显示大小，精灵图文件本身不变',
          '刷新率不同不会影响动画快慢，帧循环走自己的计时器',
          '双屏摆放的细节写在 /blog/dual-monitor-pet-placement',
        ],
      },
      {
        heading: '虚拟机与远程桌面这两种情况',
        paragraphs: [
          '虚拟机是最容易踩的坑，因为有两个 home 目录，而通常只有其中一个有你的宠物目录。如果你在 Windows 宿主机上跑 Linux 虚拟机并在里面开 Codex，那台虚拟机得先有自己的一份目录，否则什么都不显示。',
          '远程桌面这一半简单些：你看的是远程机器自己的 Codex 窗口，那台机器装了什么你就看到什么。唯一的变量是带宽，压缩和延迟会跟窗口其它部分一样作用在桌宠身上。',
        ],
        list: [
          '把宠物目录复制进虚拟机的 home 目录，然后重启里面的 Codex',
          '远程桌面下桌宠由远程机器渲染，所以网络卡它也会卡',
          '全屏远程没问题，窗口模式可能把桌宠所在的角落裁掉',
          '两边目录保持一致的做法在 /blog/sync-codex-pet-across-machines',
        ],
      },
      {
        heading: '先查这几项，再怪桌宠',
        paragraphs: [
          '大部分「桌宠不见了」其实是路径问题，不是生成问题。重新生成之前先把这张清单过一遍。',
        ],
        list: [
          'Codex 是不是跑在你正在看的这台机器上？',
          '那台机器的 home 目录下有没有宠物目录？',
          'pet.json 指向的精灵图是不是真的在？',
          'Codex 窗口宽度够不够放下桌宠占的那个角落？',
          '需要重装的话，步骤在 /blog/install-codex-pet-terminal',
        ],
      },
      {
        heading: '每台机器装一次就够了',
        paragraphs: [
          '到 codexpetgenerator.com 生成一只，下载 ZIP，照着 /blog/install-codex-pet-terminal 的终端步骤装上。每台机器做一次，虚拟机也算一台，之后就不用再管它了。',
          '想让同一只跟着你到处跑，靠的是 /blog/sync-codex-pet-across-machines 里的目录同步办法。生成次数看 /pricing，生成器入口在 /。录屏是唯一需要让桌宠出画的情况，/blog/hide-codex-pet-screen-share 里大约九十秒能处理完。',
        ],
      },
    ],
  },
  {
    slug: 'codex-pet-showcase',
    title: 'Codex Pet Showcase: The Best Community Pixel Pets This Month',
    description:
      'A codex pet showcase roundup: the community pixel pets that stood out this month, what the best codex pets share, and how to get yours into the next pet showcase gallery.',
    date: '2026-10-14',
    author: 'PetGen',
    keywords: [
      'codex pet showcase',
      'community pixel pets',
      'best codex pets',
      'pet showcase gallery',
      'codex pet community',
      'pixel pet collection',
      'codex pet gallery roundup',
    ],
    related: [
      'pets-library-explained',
      'share-codex-pet-with-friends',
      'codex-pet-ecosystem',
      'pixel-art-pet-design-guide',
    ],
    faq: [
      {
        question: 'How do I submit a pet to the codex pet showcase?',
        answer: 'Generate it and share it. There is no form to fill in. The showcase is a curated look at community pixel pets people have already posted, so the practical step is making one worth looking at.',
      },
      {
        question: 'Do I need a paid plan to be featured in the showcase?',
        answer: 'No. Pets from the free starter tier appear alongside Pro and Unlimited ones. The plan changes resolution and how many you can generate, not whether the result is worth showing.',
      },
      {
        question: 'Can I showcase a pet made from someone else\'s photo?',
        answer: 'Only if you have permission to use that photo. The pet is derived from the input, so the usual rule applies: your own photos, your own logo, or something you were given the rights to.',
      },
      {
        question: 'How often does the pet showcase gallery update?',
        answer: 'Monthly. Each round replaces the last, so a pet that missed this month is still eligible for the next one rather than being filtered out for good.',
      },
    ],
    sections: [
      {
        heading: 'What a pet showcase gallery actually collects',
        paragraphs: [
          'A codex pet showcase is a gallery of pets other people generated, grouped so you can see what the generator does with different kinds of input. It is not a contest with rules. It exists because the fastest way to understand what makes a good pet is to look at forty of them side by side.',
          'The gallery is organised by what went in rather than what came out: pets made from cats, from dogs, from logos, from old scanned photos. That framing helps, because the same generator produces very different results depending on the input, and a pet showcase gallery makes that visible in about a minute.',
        ],
        list: [
          'Pets generated from pet photos, the most common entry by a wide margin',
          'Pets from logos and mascots, usually the cleanest results',
          'Pets from old or low-resolution photos, where the HD option matters',
          'Pets from illustrations and avatars, which skip the photo step entirely',
        ],
      },
      {
        heading: 'Community pixel pets and the styles people keep choosing',
        paragraphs: [
          'Community pixel pets cluster into a few looks. Most people land somewhere between "my actual animal" and "a creature that reads clearly at 48 pixels", and the entries that get saved most often are the ones that solved both at once.',
          'Colour is where most of the variation sits. Two pets generated from the same photo can look unrelated if one keeps the original palette and the other pushes saturation.',
        ],
        list: [
          'Straight-from-photo pets that keep the original colours',
          'Recoloured pets that trade accuracy for a palette that pops on a dark terminal',
          'Seasonal and themed pets built around a holiday or a team colour',
          'Minimal pets with four or five colours, which survive small sizes best',
        ],
      },
      {
        heading: 'What the best codex pets have in common',
        paragraphs: [
          'Looking across the best codex pets in this round, four things show up repeatedly. None of them require a paid plan, and all of them are decisions you make before you generate rather than after.',
        ],
        list: [
          'A single clear subject: one animal, centred, not a group',
          'A background that separates from the subject, even a plain one',
          'Enough resolution that the eyes survive the shrink to sprite size',
          'A palette with three or four dominant colours rather than twelve',
        ],
      },
      {
        heading: 'Getting your pet into the next showcase',
        paragraphs: [
          'Submission is informal: generate the pet, share it, and it becomes part of the pool people are looking at. What helps is including the input photo alongside the result, because that is the part other people learn from.',
          'If your first attempt does not land, regenerate before you give up. The generator averages over several attempts, and the difference between attempt one and attempt three is usually the difference between a pet you keep and one you replace.',
        ],
        list: [
          'Start from a photo with one subject and a plain background',
          'Generate two or three versions before picking one',
          'Compare at actual sprite size, not zoomed in',
          'The input side is written up at /blog/best-photos-for-pixel-pet-generator',
        ],
      },
      {
        heading: 'Where the gallery lives and what to do next',
        paragraphs: [
          'Generate a pet at codexpetgenerator.com, then browse what everyone else made at /blog. Generation counts per plan are listed at /pricing, and the starter tier covers enough attempts to try every idea above.',
          'If you want the pet on more than one machine, /blog/sync-codex-pet-across-machines covers that. For the wider picture of what people are building, /blog/codex-pet-ecosystem is the roundup, and /blog/pets-library-explained explains how the pets folder keeps them organised.',
        ],
      },
    ],
  },
  {
    slug: 'codex-pet-showcase-zh',
    title: '社区宠物秀：本月最佳 Codex 桌宠作品盘点',
    description:
      'codex pet showcase 本月盘点：社区里哪几类像素宠物最常被收藏、最好的那几只共同点是什么，以及怎么让你那只进下一期画廊。',
    date: '2026-10-14',
    author: 'PetGen',
    keywords: [
      'Codex 桌宠 作品秀',
      '社区像素宠物',
      'Codex 宠物 画廊',
      'codex pet showcase',
      '桌宠作品盘点',
      '最佳 Codex 桌宠',
      '像素宠物合集',
    ],
    related: [
      'pets-library-explained',
      'share-codex-pet-with-friends',
      'codex-pet-ecosystem',
      'pixel-art-pet-design-guide',
    ],
    faq: [
      {
        question: '怎么把作品投到 Codex 桌宠作品秀？',
        answer: '生成之后分享出来就行，没有表要填。作品秀是对社区已经公开的像素宠物做的一轮挑选，所以实际要做的事是生成一只值得看的。',
      },
      {
        question: '进作品秀需要付费套餐吗？',
        answer: '不需要。免费 Starter 档生成的宠物和 Pro、Unlimited 的放在一起展示。套餐改变的是分辨率和生成次数，不改变作品值不值得看。',
      },
      {
        question: '能用别人的照片生成宠物再拿去展示吗？',
        answer: '拿到授权才行。宠物是从输入照片推导出来的，所以规矩照旧：自己的照片、自己的 Logo，或者你确实拿到了使用权的素材。',
      },
      {
        question: '作品画廊多久更新一次？',
        answer: '一个月一轮。每轮替换上一轮，所以这个月没选上的宠物下个月仍然有资格，不会被永久筛掉。',
      },
    ],
    sections: [
      {
        heading: '作品画廊到底在收集什么',
        paragraphs: [
          'Codex 桌宠作品秀是一个画廊，收的是别人生成的宠物，按类别排好，让你一眼看出生成器拿到不同输入时会给出什么结果。它不是有规则的比赛。它存在的理由是：想弄懂什么样的宠物算好，最快的办法是把四十只并排摆在一起看。',
          '画廊按「输入了什么」分类，而不是按「生成了什么」：猫生的、狗生的、Logo 生的、旧扫描照片生的。这种分法有用，因为同一个生成器遇上不同照片会给出差别很大的结果，而作品画廊大概一分钟就能把这件事说清楚。',
        ],
        list: [
          '宠物照片生成的宠物：数量最多，领先第二名一大截',
          'Logo 和吉祥物生成的宠物：通常最干净',
          '旧照片或低分辨率照片生成的宠物：这种最吃 HD 选项',
          '插画和头像生成的宠物：直接跳过照片这步',
        ],
      },
      {
        heading: '社区像素宠物：大家反复选的几种风格',
        paragraphs: [
          '社区像素宠物聚成了几类样子。多数人最后落在「我家那只真动物」和「缩到 48 像素还看得清的生物」之间，而保存次数最多的作品，往往是两个问题一起解决的那些。',
          '差别主要出在颜色上。同一张照片生成的两只宠物，一只保留原配色、一只把饱和度推高，看起来可能毫无关系。',
        ],
        list: [
          '原色派：保留照片原本的配色',
          '改色派：牺牲还原度，换一套在深色终端上更跳的配色',
          '节日派：围绕某个节日或团队色做的主题宠物',
          '极简派：只用四五种颜色，缩到最小尺寸最不吃亏',
        ],
      },
      {
        heading: '最好的那几只 Codex 桌宠有什么共同点',
        paragraphs: [
          '把这一轮最好的 Codex 桌宠摆在一起看，有四件事反复出现。没有一件需要付费套餐，而且全都是你在生成之前做的决定，不是生成之后。',
        ],
        list: [
          '主体单一：一只动物，居中，不要一群',
          '背景能和主体分开，哪怕是纯色背景',
          '分辨率够高，缩到精灵尺寸后眼睛还在',
          '配色只有三四个主色，而不是十二个',
        ],
      },
      {
        heading: '怎么让你那只进下一期',
        paragraphs: [
          '投稿这件事没有流程：生成宠物，分享出来，它就进了大家会看到的那个池子。有帮助的做法是把输入照片和成品一起发，因为别人能从中学习的正是这一步。',
          '第一次生成不满意，先重新生成再说不玩了。生成器会在多次尝试之间取平均，第一次和第三次之间的差别，通常就是「留下」和「换掉」之间的差别。',
        ],
        list: [
          '从一张主体单一、背景干净的照片开始',
          '生成两三个版本再挑一个',
          '按实际精灵尺寸比较，不要放大了看',
          '输入这边的讲究写在 /blog/best-photos-for-pixel-pet-generator',
        ],
      },
      {
        heading: '接下来去哪儿',
        paragraphs: [
          '在 codexpetgenerator.com 生成一只，然后到 /blog 看看别人都做了什么。各档套餐的生成次数列在 /pricing，Starter 免费档包含的次数量足够把上面的想法全试一遍。',
          '想让宠物出现在不止一台机器上，/blog/sync-codex-pet-across-machines 讲的是这件事。想看更大的图景，/blog/codex-pet-ecosystem 是总览；/blog/pets-library-explained 则解释了 pets 目录怎么把它们都收纳好。',
        ],
      },
    ],
  },
  {
    slug: 'codex-desktop-updates-pets',
    title: 'Codex Desktop Updates: What\'s New for Pets',
    description:
      'A codex pet update roundup: what changes when the Codex desktop app ships a new build, why your pet files are never touched by the installer, which changelog lines matter, and the checks worth running before you report a broken pet.',
    date: '2026-10-15',
    author: 'PetGen',
    keywords: [
      'codex pet update',
      'codex desktop update pets',
      'codex pet changelog',
      'new pet features',
      'codex pet version check',
      'pixel pet after update',
    ],
    related: [
      'codex-pet-ecosystem',
      'codex-pets-folder-structure',
      'backup-codex-pets-guide',
      'codex-pet-not-showing-fixes',
    ],
    faq: [
      {
        question: 'Do I need to reinstall my pets after a Codex desktop update?',
        answer: 'No. Your pets sit in the pets folder inside your home directory and the installer writes to the application directory, which is somewhere else entirely. Relaunch Codex once after the update and the same pets load.',
      },
      {
        question: 'How do I find out what changed for pets in the latest release?',
        answer: 'Read the desktop app changelog and scan for lines about the renderer, the desktop window, or assets and sprites. Pets rarely get a section of their own, and a line about models or API keys has no effect on them.',
      },
      {
        question: 'My pet disappeared after an update. What should I check first?',
        answer: 'Quit Codex completely and open it again, then check that the folder name in your pets directory matches the name field in pet.json, including capital letters. Those two cover most cases. The longer list is at /blog/codex-pet-not-showing-fixes.',
      },
      {
        question: 'Will a new desktop version change how my pet looks?',
        answer: 'Your spritesheet is not regenerated, so the artwork stays as it was. What can shift is the drawn size and the animation timing, because both come from the app. If the sprite looks rough at its real size, generate again at a higher resolution instead of stretching the file.',
      },
    ],
    sections: [
      {
        heading: 'What a codex pet update actually touches',
        paragraphs: [
          'A codex pet update arrives inside the Codex desktop app. There is no pet updater to run and nothing to reinstall. When you install a new desktop build, the code that draws your sprite comes along with it, and whatever that build changed in the drawing path shows up the next time you launch.',
          'That is the part people get wrong. They go looking for a pet release note. The pet is two files you own, a spritesheet.webp and a pet.json, plus the app code that reads them, and only the second half gets replaced.',
        ],
        list: [
          'Your pets folder: untouched by the installer',
          'The spritesheet and pet.json you generated: untouched',
          'Your custom palette and animation states: untouched',
          'The renderer, the animation timer and the default pet set: replaced with the new build',
        ],
      },
      {
        heading: 'Where the pet files sit during an upgrade',
        paragraphs: [
          'Everything you own lives under the pets directory in your home folder: ~/.codex/pets/ on macOS, %USERPROFILE%/.codex/pets/ on Windows. Installers write to the application directory, which is a different place, so an upgrade has no reason to walk into your pets folder.',
          'One exception is worth knowing. Some builds change the default pet that ships with the app. If you never generated your own, the pet you see can be swapped for whatever the new build picked. Generate a pet once and you stop being affected, because yours lives in your home folder rather than inside the app.',
        ],
        list: [
          'macOS: ~/.codex/pets/<pet-name>/',
          'Windows: %USERPROFILE%/.codex/pets/<pet-name>/',
          'Each folder holds one spritesheet.webp and one pet.json',
          'Layout, backups and sync are covered at /blog/codex-pets-folder-structure, /blog/backup-codex-pets-guide and /blog/sync-codex-pet-across-machines',
        ],
      },
      {
        heading: 'Reading a codex pet changelog without the noise',
        paragraphs: [
          'Changelogs are written for the whole app, and the pet-related lines hide somewhere in the middle. The words worth scanning for are renderer, window, assets and sprite. A line about model routing or API keys will not change anything you can see in the corner of your screen.',
          'When a release note does mention pets, it tends to be about the animation frame budget, the default pet set, or how a malformed pet.json gets handled. Anything else you notice is usually a side effect of a larger interface change rather than a pet change.',
        ],
        list: [
          'Animation or frame budget changes: your spritesheet keeps working, the timing can feel different',
          'Default pet set changes: only affects people who never generated one',
          'pet.json validation changes: a pet that loaded before may now be rejected, usually over a missing field',
          'Window or tray changes: the corner the pet occupies can move, which reads as a missing pet',
        ],
      },
      {
        heading: 'What to check before you report a broken pet',
        paragraphs: [
          'Most reports of an update breaking a pet turn out to be one of four things, and all four take under a minute to rule out. Run them in this order before you write anything up.',
        ],
        list: [
          'Quit Codex completely and relaunch. A hot reload does not always restart the animation timer.',
          'Confirm the folder name in your pets directory matches the name field in pet.json exactly, including capital letters.',
          'Open the spritesheet in an image viewer. If it will not open, the file was damaged before the update.',
          'Check that the Codex window is on the monitor you are looking at. Pets do not follow your eyes.',
        ],
      },
      {
        heading: 'Where to go from here',
        paragraphs: [
          'Generate a pet at codexpetgenerator.com, keep the folder in your home directory, and updates stop being an event. The generator writes the same two files no matter which desktop build you are on, so a pet made today keeps drawing after the next release.',
          'The wider picture is at /blog/codex-pet-ecosystem, /blog/pets-library-explained covers keeping several pets straight in one folder, and /blog/backup-codex-pets-guide is a ten minute insurance policy against a bad afternoon. Start at /blog for the rest.',
        ],
      },
    ],
  },
  {
    slug: 'codex-desktop-updates-pets-zh',
    title: 'Codex 桌面端更新，宠物功能有哪些变化',
    description:
      '一次 codex pet update 到底动了什么：宠物文件为什么不会被安装器碰掉，更新日志里哪几行跟宠物有关，以及报 bug 之前值得先跑的四项检查。',
    date: '2026-10-15',
    author: 'PetGen',
    keywords: [
      'codex pet update',
      'Codex 桌面端更新',
      '宠物功能更新',
      'codex pet changelog',
      '更新后宠物不见了',
      '像素宠物版本检查',
    ],
    related: [
      'codex-pet-ecosystem',
      'codex-pets-folder-structure',
      'backup-codex-pets-guide',
      'codex-pet-not-showing-fixes',
    ],
    faq: [
      {
        question: 'Codex 桌面端更新之后，宠物要重装吗？',
        answer: '不用。宠物放在你用户目录下的 pets 文件夹里，安装器写的是应用程序目录，两个地方不重合。更新完把 Codex 完整重启一次，原来的宠物照常出现。',
      },
      {
        question: '怎么知道最新版本里宠物相关的改动？',
        answer: '看桌面端的更新日志，找渲染器、窗口、素材、精灵图这几个词。宠物一般不会有独立章节，而讲模型路由或 API key 的那几行跟宠物没关系。',
      },
      {
        question: '更新之后宠物不见了，先查什么？',
        answer: '先把 Codex 完全退出再打开，然后确认 pets 目录里的文件夹名和 pet.json 里的 name 字段完全一致，大小写也要一样。这两步能覆盖绝大多数情况，更长的排查清单在 /blog/codex-pet-not-showing-fixes。',
      },
      {
        question: '新版会改变宠物的外观吗？',
        answer: '精灵图不会被重新生成，画面本身还是原来那张。可能变的是显示尺寸和动画节奏，因为这两样由应用决定。如果按实际尺寸看觉得糊，重新生成一张更高分辨率的，别去拉伸原文件。',
      },
    ],
    sections: [
      {
        heading: '一次更新到底动了哪些东西',
        paragraphs: [
          'codex pet update 是跟着 Codex 桌面端一起来的，没有单独的宠物升级包，也没有要重装的东西。你装上新版本，画精灵图的那部分代码跟着一起换掉，这次改动在绘制路径上留下的痕迹，下次启动就能看到。',
          '这里最容易搞错的一点是：很多人去找宠物的发布说明，其实没有这个东西。一只宠物等于你自己的两个文件（spritesheet.webp 和 pet.json）加上读取它们的应用代码，而换掉的只有后半部分。',
        ],
        list: [
          '你的 pets 文件夹：安装器不碰',
          '你生成的精灵图和 pet.json：不碰',
          '你自定义的配色和动画状态：不碰',
          '渲染器、动画计时器、默认宠物：随新版本换掉',
        ],
      },
      {
        heading: '升级时宠物文件放在哪儿',
        paragraphs: [
          '属于你的东西全在你用户目录下的 pets 文件夹里：macOS 是 ~/.codex/pets/，Windows 是 %USERPROFILE%/.codex/pets/。安装器写的是应用程序目录，两个地方不同，所以升级没有理由进到 pets 文件夹里。',
          '有一个例外值得知道：有些版本会换掉应用自带的默认宠物。如果你从来没自己生成过，看到的就可能被换成新版挑的那只。生成过一次就不会受影响，因为你那只放在用户目录里，不在应用里面。',
        ],
        list: [
          'macOS：~/.codex/pets/<宠物名>/',
          'Windows：%USERPROFILE%/.codex/pets/<宠物名>/',
          '每个文件夹里放一个 spritesheet.webp 和一个 pet.json',
          '目录结构、备份和同步分别写在 /blog/codex-pets-folder-structure、/blog/backup-codex-pets-guide 和 /blog/sync-codex-pet-across-machines',
        ],
      },
      {
        heading: '怎么从更新日志里挑出跟宠物有关的行',
        paragraphs: [
          '更新日志是写给整个应用的，跟宠物有关的几行藏在中间。值得扫的词是渲染器、窗口、素材、精灵图。讲模型路由或者 API key 的那几行，不会让你在屏幕角落里看到任何变化。',
          '发布说明真的提到宠物时，通常是这几类：动画帧数的预算、默认宠物集合，或者 pet.json 写错时的处理方式。你注意到的其它变化，多数是更大的界面改动带来的副作用，不是宠物本身改了。',
        ],
        list: [
          '动画或帧数预算改动：精灵图照常能用，节奏可能不一样',
          '默认宠物集合改动：只影响从没自己生成过的人',
          'pet.json 校验改动：之前能加载的宠物现在可能被拒，多半是少了一个字段',
          '窗口或托盘改动：宠物占的那个角会挪位置，看起来像宠物没了',
        ],
      },
      {
        heading: '报「更新把宠物搞坏了」之前先查这四项',
        paragraphs: [
          '大多数「更新之后宠物坏了」的报告，最后都落在下面四类里，而每一类一分钟之内就能排除。按顺序跑一遍再写反馈。',
        ],
        list: [
          '把 Codex 完全退出再打开。热重载不一定会重启动画计时器。',
          '确认 pets 目录里的文件夹名和 pet.json 里的 name 字段完全一致，大小写也算。',
          '用图片查看器打开精灵图。打不开就说明文件在更新之前就已经坏了。',
          '确认 Codex 窗口在你正在看的那块屏幕上。宠物不会跟着你的视线走。',
        ],
      },
      {
        heading: '接下来去哪儿',
        paragraphs: [
          '在 codexpetgenerator.com 生成一只，把文件夹留在用户目录里，更新就不再是件事。生成器不管你是哪个桌面版本都写出同样的两个文件，所以今天做的宠物，下个版本照样会动。',
          '更大的图景在 /blog/codex-pet-ecosystem，/blog/pets-library-explained 讲一个文件夹里怎么摆好几只宠物，/blog/backup-codex-pets-guide 是花十分钟买的一份保险。其余内容从 /blog 进去。',
        ],
      },
    ],
  },
  {
    slug: 'pixel-pet-music-companion',
    title: 'Pets and Music: A New Desktop Duo',
    description:
      'A pixel pet music setup is two quiet clocks: one reports that the Codex session moved, the other reports that time passed. How to pair them, how to place them, and which combinations to skip.',
    date: '2026-10-20',
    author: 'PetGen',
    keywords: [
      'pixel pet music',
      'music companion pet',
      'pet with music player',
      'aesthetic workspace',
      'codex pet playlist',
      'coding with music and pets',
    ],
    related: [
      'coding-mood-journal-pixel-pet',
      'why-developers-love-desktop-companions',
      'dual-monitor-pet-placement',
      'hide-codex-pet-screen-share',
    ],
    faq: [
      {
        question: 'Do Codex pets play any sound?',
        answer: 'No. A pet is a spritesheet plus a pet.json, and there is no audio channel in either file. Anything you hear is coming from your music player.',
      },
      {
        question: 'Can a pet and a music player run without one covering the other?',
        answer: 'Yes, as long as only one of them floats. Pin the pet to a corner and keep the player in a normal window, or drive the player from the keyboard and never look at it.',
      },
      {
        question: 'Does music actually help, or is it just habit?',
        answer: 'For repetitive work it cuts the urge to switch tabs. Anything that needs you to read new prose goes better in silence, so the honest answer depends on the task.',
      },
      {
        question: 'Will a pet distract me more than music does?',
        answer: 'Movement in the corner of a screen is easier to tune out than sound you have to interpret. If it bothers you, hide it during calls and bring it back afterwards.',
      },
    ],
    sections: [
      {
        heading: 'What a pixel pet music setup looks like',
        paragraphs: [
          'Pixel pet music pairings sound like a gimmick until you try one for a week. The pet sits in the corner and swaps animation state as the Codex session moves, the playlist sets the tempo, and together they give a long stretch of solo work a shape you can feel. I doubted this for months. Then I noticed I had stopped checking the clock during the afternoon slump, which is the only measurement I actually trust.',
          'The mechanics are plain, and that is the reason the pair works. A Codex pet reads session state and moves between nine animation states, so the corner of the screen tells you whether a run is still going or has been waiting on you for two minutes. Music fills the gap where you would otherwise reach for your phone. Neither one carries the load alone.',
        ],
        list: [
          'Idle state, mid playlist: nothing needs you yet, keep going',
          'Running state, familiar album: the stretch where you stop fidgeting',
          'Blocked state, quiet track: the moment you notice you have been staring at one line',
          'Ready state, last track: write the commit message and stop for the day',
        ],
      },
      {
        heading: 'Why the music companion pet idea sticks',
        paragraphs: [
          'A music companion pet works because both halves report on time rather than on output. Your editor tells you what the code does; it never tells you that forty minutes went by. A pet reacting to state and a playlist running down are two quiet clocks, and both are easier to ignore politely than a timer that beeps.',
          'There is a less flattering reason too. Most of us keep something moving on a second screen. A pet and a music player are that habit, relocated somewhere that costs no context switch. I would rather have both in the corner of my eye than a tab I have to turn toward.',
        ],
        list: [
          'Skip pets with sound effects; two audio sources is one too many',
          'Skip lyrics in a language you write in, at least during writing sessions',
          'Skip autoplay video next to the pet; movement on two sides of the screen pulls the eye apart',
          'Skip shuffling a discovery playlist into deep work, it turns music back into a task',
        ],
      },
      {
        heading: 'Pairing a pet with your music player',
        paragraphs: [
          'The practical question is whether the pet and the player fight over the same corner. They do if you let both float. Give the pet a fixed corner, keep the player in a normal window or under keyboard control, and the two stop competing for the same 200 pixels.',
          'Volume matters more than layout. If the pet is visible, the music is background by definition, so pick records you would not stop to listen to. The pet already answers the question you keep wanting to ask, which is whether the run is still alive. That frees the music to do nothing but set a pace.',
        ],
        list: [
          'One monitor: pet bottom right, player minimised, no floating lyrics window',
          'Two monitors: pet on the screen you read, player on the other one',
          'Screen share: hide the pet first, steps at /blog/hide-codex-pet-screen-share, and pause the player',
          'Headphones on: keep the pet, it is the only one of the two that still works',
        ],
      },
      {
        heading: 'An aesthetic workspace you still get work done in',
        paragraphs: [
          'The risk with an aesthetic workspace is spending an evening arranging it and then never finishing anything inside it. Set yourself a limit: pick a palette, pick a pet, pick a playlist, then leave all three alone for a month. The setups that last are the ones nobody fiddles with.',
          'Two colours plus one accent is enough, and the accent should match the pet rather than the wallpaper, because the pet is the thing you actually look at. Four pets is a distraction with extra steps. Three or four albums you already know by heart, on repeat, beat any curated list.',
        ],
        list: [
          'Palette: two colours plus one accent, matched to the pet',
          'Pet: one, not four, and do not rotate them by hand',
          'Playlist: records you have heard a hundred times, on repeat',
          'Wallpaper: dark enough that the pet reads at a glance',
        ],
      },
      {
        heading: 'Where to go from here',
        paragraphs: [
          'Generate a pet at codexpetgenerator.com, drop the folder into your pets directory, and put on one album you already know by heart. Two changes, five minutes. If the afternoon stops dragging, keep them, and if it does not, you are out one generation from your quota.',
          'Placement questions are answered at /blog/dual-monitor-pet-placement, long sessions have their own write-up at /blog/coding-marathon-pet-guide, keeping a record of the day is at /blog/coding-mood-journal-pixel-pet, and the rest of the archive is at /blog.',
        ],
      },
    ],
  },
  {
    slug: 'pixel-pet-music-companion-zh',
    title: '宠物 + 音乐：桌面陪伴的新组合',
    description:
      '把像素宠物和音乐放在一起是什么体验：宠物报状态，音乐定节奏，两者都不抢你的注意力。这篇讲怎么配、怎么摆，以及哪几种组合别试。',
    date: '2026-10-20',
    author: 'PetGen',
    keywords: [
      'pixel pet music',
      '像素宠物 音乐',
      '桌面宠物 播放器搭配',
      '音乐陪伴宠物',
      '桌面美学 工作区',
      '写代码听音乐',
    ],
    related: [
      'coding-mood-journal-pixel-pet',
      'why-developers-love-desktop-companions',
      'dual-monitor-pet-placement',
      'hide-codex-pet-screen-share',
    ],
    faq: [
      {
        question: '像素宠物本身会发出声音吗？',
        answer: '不会。一只宠物就是一张精灵图加一个 pet.json，两个文件里都没有音轨。你听到的任何声音都来自你自己的播放器。',
      },
      {
        question: '宠物和播放器会互相挡住吗？',
        answer: '只要别让两个都浮在桌面上就不会。把宠物固定在某个角，播放器放在普通窗口里，或者干脆用键盘控制播放器、一次都不看它。',
      },
      {
        question: '听音乐真的有用，还是只是习惯？',
        answer: '做重复性工作时，它能压住你想切走的念头。需要读新文字的任务则更适合安静。答案取决于你当下在做什么，而不是音乐本身。',
      },
      {
        question: '宠物会不会比音乐更分心？',
        answer: '屏幕角落里的动作比需要你去理解的声音更容易忽略。真觉得碍事，开会时先把它藏起来，散会再放出来。',
      },
    ],
    sections: [
      {
        heading: '把宠物和音乐放在一起是什么样',
        paragraphs: [
          '像素宠物配音乐这事儿，听着像噱头，试上一周就不这么想了。宠物待在屏幕角落，随着 Codex 会话的推进切换动画状态；播放列表定出节奏；两个东西合起来给了长时间独坐一段能感觉到的形状。我一开始怀疑了好几个月，后来发现下午那段最难熬的时间里我不再看表了，而这是唯一我愿意信的指标。',
          '原理很平常，而这正是这套组合成立的原因。宠物读取会话状态，在九种动画状态之间切换，所以屏幕角落会告诉你任务是还在跑，还是已经等你两分钟了。音乐填的是你本来会去摸手机的那个空档。两个都不单独承担什么。',
        ],
        list: [
          '待机状态 + 播放列表中段：还不需要你，继续做',
          '运行状态 + 熟悉的专辑：你不再坐立不安的那一段',
          '阻塞状态 + 安静的曲子：你发现自己盯着同一行看的时候',
          '就绪状态 + 最后一首：写提交信息，然后收工',
        ],
      },
      {
        heading: '为什么这种音乐陪伴宠物留得下来',
        paragraphs: [
          '它留得下来，是因为两半都在报时间，而不是报产出。编辑器会告诉你代码做了什么，从来不会告诉你四十分钟过去了。宠物跟着状态动，播放列表一首首往下走，这是两个安静的钟，而且都比一个会响的计时器好商量。',
          '还有一个没那么体面的原因。大多数人都会在旁边放一块屏幕，上面有点东西在动。宠物加播放器就是这个习惯，只是搬到了不需要切换注意力的地方。我宁可让这两样留在余光里，也不要一个得转头去看的标签页。',
        ],
        list: [
          '别选自带音效的宠物，两个声源就多了一个',
          '写作时避开你用来写作的那门语言的歌词',
          '宠物旁边别放自动播放的视频，屏幕两侧都在动会把视线撕开',
          '深度工作时别把推荐歌单开成随机，那样音乐又变回一件要处理的事',
        ],
      },
      {
        heading: '宠物怎么和播放器搭配',
        paragraphs: [
          '实操层面的问题是宠物和播放器会不会抢同一个角。两个都设成悬浮窗口就会抢。给宠物一个固定的角，播放器放进普通窗口或者交给键盘控制，两者就不会再争那两百个像素。',
          '音量比布局更重要。宠物既然看得见，音乐就天然是背景，那就挑你不会停下来细听的唱片。宠物已经回答了你最想问的那句「还在跑吗」，音乐于是只需要负责定速度。',
        ],
        list: [
          '一块屏幕：宠物放右下角，播放器最小化，不要浮动歌词窗',
          '两块屏幕：宠物在你读的那块上，播放器放另一块',
          '屏幕共享：先藏宠物，步骤在 /blog/hide-codex-pet-screen-share，同时暂停播放器',
          '戴着耳机：宠物留着，这两个里只有它还在起作用',
        ],
      },
      {
        heading: '好看，但还能干活的工作区',
        paragraphs: [
          '桌面美学的风险是花一晚上布置，之后在里面一件正事都没干完。给自己定个限度：挑一套配色、一只宠物、一张播放列表，然后一个月别动它们。能留下来的布置，都是没人去折腾的布置。',
          '两个颜色加一个强调色就够了，而且强调色要跟宠物配，不是跟壁纸配，因为你真正会看的是宠物。四只宠物只是多了几步操作的分心。三四张你已经听烂的专辑循环，胜过任何精心挑选的歌单。',
        ],
        list: [
          '配色：两个颜色加一个强调色，跟宠物对齐',
          '宠物：一只，不要四只，也别手动轮换',
          '播放列表：听过一百遍的唱片，循环播放',
          '壁纸：暗到能一眼看清宠物',
        ],
      },
      {
        heading: '接下来去哪儿',
        paragraphs: [
          '在 codexpetgenerator.com 生成一只，把文件夹丢进 pets 目录，再放一张你已经听熟的专辑。两个改动，五分钟。如果下午不再难熬就留着，不好使也就花掉一次生成额度。',
          '摆位问题写在 /blog/dual-monitor-pet-placement，长时间作战有 /blog/coding-marathon-pet-guide，把一天记下来这件事在 /blog/coding-mood-journal-pixel-pet，其余内容从 /blog 进去。',
        ],
      },
    ],
  },
  {
    slug: 'pixel-pet-design-balance',
    title: 'From Cute to Useful: Design Balance in Pets',
    description:
      'Most pixel pet design decisions get made in four seconds, on looks alone. What separates a useful desktop pet from decoration, and how to judge the balance before you generate one.',
    date: '2026-10-19',
    author: 'PetGen',
    keywords: [
      'pixel pet design',
      'useful desktop pet',
      'functional pixel pet',
      'pet design balance',
      'codex pet animation states',
      'readable pixel art pet',
    ],
    related: [
      'pixel-art-pet-design-guide',
      'custom-color-palettes-codex-pet',
      'dual-monitor-pet-placement',
      'coding-mood-journal-pixel-pet',
    ],
    faq: [
      {
        question: 'Can a pet be genuinely cute and still useful?',
        answer: 'Yes, and most of the good ones are both. Cute is what keeps you from closing it in the first week. Useful is what keeps it on screen in month three, because a pet that reports session state stops being something you have to check.',
      },
      {
        question: 'How many animation states does a pet need before it carries information?',
        answer: 'Two clean ones beat nine muddy ones. If you cannot tell idle from running without stopping to look, the extra frames are decoration. The built-in nine states only pay off when each one changes the silhouette or the motion, not just the colour.',
      },
      {
        question: 'Should the pet match my wallpaper or my editor theme?',
        answer: 'Your editor theme. The wallpaper sits behind everything and mostly reads as noise, while the pet sits next to the panel you actually stare at. Match the pet to the surface it has to survive against.',
      },
      {
        question: 'Does a busier pet actually cost attention?',
        answer: 'It does, but not the way people assume. Motion in the corner of your eye is cheap to ignore until the motion changes. A pet that loops the same two frames is nearly free; a pet that fires a big transition every few seconds will pull your head around while you are mid-sentence.',
      },
    ],
    sections: [
      {
        heading: 'Cute gets the pet onto your screen',
        paragraphs: [
          'Cuteness is the entry fee, not the product. A pet nobody wants to look at gets closed on day one, and no amount of state mapping saves it. This is the part everyone gets right by accident, because the generator preview already shows you the good ones.',
          'The trouble starts later. Cute has a half-life of roughly two weeks, and when it wears off you are left with whatever the pet does. If the answer is nothing, the pet joins the pile of desktop decorations that got turned off during a busy week and never came back.',
        ],
      },
      {
        heading: 'What a useful desktop pet does',
        paragraphs: [
          'A useful desktop pet answers one question you would otherwise have to open a window for. In Codex that question is nearly always some version of whether the session is still moving. The editor tells you what the code did; it never tells you that four minutes went by.',
          'The pet reads session state and switches between the animation set that ships with it, so the corner of your screen reports idle, running, blocked, or ready without you asking. That is the whole function, and it is worth more than any amount of shading.',
          'Two things follow from treating it as a readout. The states have to be distinguishable at a glance, and the pet has to live somewhere you can actually glance at. Everything else is taste.',
        ],
        list: [
          'Idle versus running has to read in under a second, from the corner of your eye',
          'The blocked state is the one that earns its keep: it is the moment you would otherwise sit and wait',
          'Ready is the signal to stop reading and go write the commit message',
          'A pet that only has idle and happy is decoration with better art',
        ],
      },
      {
        heading: 'Where pet design balance breaks',
        paragraphs: [
          'I have made every one of these mistakes, and the pattern is always the same: the pet looks better in the preview than it behaves on the desk. Here is what actually kills them.',
        ],
        list: [
          'Nine states that all read as the same colour. More frames, no more information.',
          'Transitions big enough to pull your eye out of a paragraph you were reading.',
          'A sprite drawn for a 27-inch monitor, then used on a laptop where it is 40 pixels of mush.',
          'Text labels on the pet. Anything you have to read is anything you have to stop for.',
          'A palette chosen against the preview background instead of against your editor.',
        ],
      },
      {
        heading: 'Functional pixel art: the constraints that help',
        paragraphs: [
          'Constraints are the good news here, because pixel art at pet scale does not leave you many choices and the wrong ones are obvious. Work inside the limits instead of fighting them.',
        ],
        list: [
          'Change the silhouette between states, not just the colour. Shape survives being small.',
          'Use motion before detail. A two-frame loop reads faster than a carefully shaded sprite.',
          'Check contrast against your editor background, not against the generator swatch.',
          'Size the pet for the smallest screen you actually work on, then leave it there.',
          'Keep the accent colour for the states that matter. If everything is bright, nothing is.',
        ],
      },
      {
        heading: 'Where to go next',
        paragraphs: [
          'Generate one at codexpetgenerator.com and judge it on the second question, not the first: can you tell what the session is doing without looking directly at it? If yes, you are done picking, and you can stop touching it.',
          'Drawing the sprite yourself is covered in /blog/pixel-art-pet-design-guide. Colour choices that survive a real editor background are in /blog/custom-color-palettes-codex-pet. Where to put the thing once it works is /blog/dual-monitor-pet-placement, and if you want to know whether any of this changed your day, /blog/coding-mood-journal-pixel-pet has a cheap way to find out. The rest is at /blog.',
        ],
      },
    ],
  },
  {
    slug: 'pixel-pet-design-balance-zh',
    title: '从「好看」到「好用」：宠物的设计平衡',
    description: '大多数人挑像素宠物只花四秒，全凭看着顺眼。这篇讲清好看和好用的分界在哪，以及在生成之前怎么判断一只宠物会不会留下来。',
    date: '2026-10-19',
    author: 'PetGen',
    keywords: [
      'pixel pet design',
      '像素宠物 设计',
      '桌面宠物 实用',
      '宠物 状态可读性',
      '像素画 宠物 配色',
      'codex 宠物 动画状态',
    ],
    related: [
      'pixel-art-pet-design-guide',
      'custom-color-palettes-codex-pet',
      'dual-monitor-pet-placement',
      'coding-mood-journal-pixel-pet',
    ],
    faq: [
      {
        question: '宠物能既好看又好用吗？',
        answer: '能，而且留下来的基本都是两者都占。好看决定你第一周会不会把它关掉，好用决定第三个月它还在不在屏幕上——一只会报会话状态的宠物，是不需要你去查的那件东西。',
      },
      {
        question: '多少种动画状态才算真的有信息量？',
        answer: '两种分得清的，胜过九种糊在一起的。如果你不盯着看就分不出待机和运行，多出来的帧就只是装饰。内置那九种状态只有在每种都改了轮廓或动作时才值回票价，只换颜色不值。',
      },
      {
        question: '宠物该配壁纸还是配编辑器主题？',
        answer: '配编辑器主题。壁纸在最后一层，看久了基本是噪声；宠物贴着你真正盯着的面板。拿它要长期待着的那块底色去比。',
      },
      {
        question: '宠物动作多了真的会分心吗？',
        answer: '会，但和大家想的不太一样。余光里一直在动的东西很便宜，直到这个动法变了。两帧循环的宠物几乎不花注意力；每几秒来一次大动作的宠物，会在你写到一半时把头拽过去。',
      },
    ],
    sections: [
      {
        heading: '好看，负责把宠物放上屏幕',
        paragraphs: [
          '好看是入场券，不是产品本身。一只没人愿意看的宠物第一天就被关掉，再多的状态映射也救不回来。这一步大家反而不会错，因为生成器的预览已经帮你筛过一遍了。',
          '问题出在后面。好看的半衰期大概两周，等它过去，剩下就是这只宠物到底干了什么。如果答案是「什么也没干」，它就会归到那一堆在忙起来的一周里被关掉、之后再没打开的桌面摆件里去。',
        ],
      },
      {
        heading: '一只好用的桌面宠物在做什么',
        paragraphs: [
          '好用的桌面宠物只回答一个你本来得开个窗口才能确认的问题。在 Codex 里，这个问题几乎总是「会话还在动吗」。编辑器会告诉你代码做了什么，从来不会告诉你四十分钟过去了。',
          '宠物读会话状态，在自带的动画集之间切换，于是屏幕角落会告诉你待机、运行、阻塞还是就绪，不用你去问。这就是它的全部功能，比任何精细的描边都值钱。',
          '把它当成一个读数器，两件事就跟着来了：状态必须一眼能分出来，宠物必须待在你真能扫到的地方。剩下的都是审美问题。',
        ],
        list: [
          '待机和运行必须在一秒之内、用余光就能分清',
          '阻塞状态是最值钱的那个：它正好是你本来会干坐着等的时刻',
          '就绪是让你停下阅读、去写提交信息的信号',
          '只有待机和开心两种状态的宠物，是画得更好的装饰品',
        ],
      },
      {
        heading: '设计平衡在哪里崩掉',
        paragraphs: [
          '下面每一条我都踩过，套路都一样：宠物在预览里比在桌面上好看。真正让它死掉的通常是这些。',
        ],
        list: [
          '九种状态，扫一眼全是同一个颜色。帧更多，信息没多。',
          '动作大到能把你从正在读的那一段里拽出来。',
          '按 27 寸显示器画的图，搬到笔记本上只剩 40 像素的糊团。',
          '宠物上带文字。凡是得读的东西，都是得停下来的东西。',
          '配色对着预览背景挑，而不是对着你自己的编辑器挑。',
        ],
      },
      {
        heading: '功能性像素画：那些帮得上忙的限制',
        paragraphs: [
          '限制在这里是好消息。宠物这个尺寸上的像素画本来就没留给你多少选择，选错的那些又一眼就能看出来。顺着限制走，别跟它较劲。',
        ],
        list: [
          '状态之间改轮廓，不只改颜色。缩小之后还能活下来的是形状。',
          '先做动作，再做细节。两帧循环比一张精心描边的立绘更快被读懂。',
          '对比度对着编辑器背景查，别对着生成器里的色卡查。',
          '按你真正会用的那块最小的屏幕定尺寸，定完就别再动。',
          '强调色留给要紧的那几个状态。全都亮，等于全都不亮。',
        ],
      },
      {
        heading: '接下来去哪儿',
        paragraphs: [
          '在 codexpetgenerator.com 生成一只，然后用第二个问题而不是第一个去判断它：不直视它，你能知道会话在干什么吗？能，就选完了，之后别再去折腾它。',
          '自己画精灵图写在 /blog/pixel-art-pet-design-guide，能在真实编辑器背景上活下来的配色在 /blog/custom-color-palettes-codex-pet，画好之后摆哪儿是 /blog/dual-monitor-pet-placement，想知道这整套有没有真的改变你的一天，/blog/coding-mood-journal-pixel-pet 里有个很便宜的办法。其余内容从 /blog 进去。',
        ],
      },
    ],
  }
,
  {
    slug: 'pixel-pet-personality',
    title: 'Give Your Pet a Personality: The Fun of Personas',
    description:
      'A pixel pet personality is what separates decoration from something you glance at on purpose. How to pick a persona, map it onto the nine animation states, and write pet lore that fits in three sentences.',
    date: '2026-10-21',
    author: 'PetGen',
    keywords: [
      'pixel pet personality',
      'pet persona codex',
      'character personality pixel',
      'codex pet lore',
      'codex pet persona setup',
      'pixel pet character design',
    ],
    related: [
      'pixel-art-pet-design-guide',
      'custom-color-palettes-codex-pet',
      'codex-pet-9-animation-states',
      'coding-mood-journal-pixel-pet',
    ],
    faq: [
      {
        question: 'What is a pixel pet personality?',
        answer: 'The set of traits you decide your Codex pet has, expressed through which animations you keep and how the pet behaves in each state. It is a design choice, not a field in pet.json.',
      },
      {
        question: 'Do I have to write pet lore?',
        answer: 'No. Three sentences is already generous, and the pet works fine with none. Lore earns its keep when you are choosing between two similar idle animations and want to stay consistent.',
      },
      {
        question: 'Can one pet carry two personas?',
        answer: 'It can, and it usually reads badly. Pick one and let the nine states support it. If you want contrast, make a second pet and switch between them.',
      },
      {
        question: 'Does a persona change how the pet is installed?',
        answer: 'No. The folder, the spritesheet and pet.json are identical. Persona only affects which animation frames you keep and what you name the pet.',
      },
    ],
    sections: [
      {
        heading: 'Why a persona changes how you use the pet',
        paragraphs: [
          'A pixel pet personality is the difference between a decoration and something you glance at on purpose. Two pets generated from the same photo can behave very differently once you decide what the creature is like, and making that decision costs a few minutes of thought.',
          'I noticed this after swapping pets for a week. The one I kept was not the better drawing. Its idle animation read as "waiting patiently" while the other one looked bored. Same frames, different story.',
        ],
        list: [
          'A persona gives you a rule for cutting animations that do not fit',
          'It makes state changes readable without looking directly at the screen',
          'A pet with a character is worth naming, and named pets survive',
          'It gives you something concrete to compare against when you generate a second one',
        ],
      },
      {
        heading: 'Choosing a pet persona for Codex that fits your hour',
        paragraphs: [
          'Start from the worst hour of your day, not the best. If your afternoons are mostly waiting on long runs, a calm companion beats one that celebrates every finished command. If your mornings are review-heavy, pick something that reads as attentive rather than cheerful.',
          'The pet persona codex crowd converges on four families: stoic, eager, grumpy, sleepy. None of them is better. They suit different rooms and different people, and a bad pairing is the main reason a pet gets switched off after two weeks.',
        ],
        list: [
          'Stoic: minimal idle motion, quiet ready state. Good beside a terminal you watch for long stretches',
          'Eager: wide state transitions, visible celebration. Good when runs are short and frequent',
          'Grumpy: reads as unimpressed when blocked. Funnier than it sounds during a long debugging session',
          'Sleepy: slow loops everywhere. Good when the pet sits beside text you are reading',
        ],
      },
      {
        heading: 'Mapping character personality onto the nine states',
        paragraphs: [
          'Character personality pixel work is mostly subtraction. Nine states at eight frames each is not enough room for a nuanced performance. Pick the two states your persona actually cares about and leave the rest neutral.',
          'The states that carry the most personality are idle, running, blocked and ready. Those four are the ones you watch for minutes at a time. Sleep, error and the rest flash past, and they only need to avoid contradicting what you have already established.',
        ],
        list: [
          'Decide what the pet does when nothing is happening. That frame is on screen more than all the others combined',
          'Give blocked a distinct silhouette. It is the state you actually learn to recognise',
          'Keep ready short. The third long celebration in an hour turns into noise',
        ],
      },
      {
        heading: 'Writing codex pet lore in three sentences',
        paragraphs: [
          'Codex pet lore is the small backstory you attach to the creature, and it is worth about three sentences. Two is fine. Twenty is a writing project you will abandon, and the pet does not need it.',
          'What works: one line about where it came from, one about what it wants, one about what annoys it. Put it in displayName or a note in the pet folder, never in the spritesheet. Text at 192x208 is unreadable, and it costs you the cheapest clarity you had.',
          'Mine says "found in a server rack, wants the run to finish, hates merge conflicts." That is enough to make the blocked animation feel deliberate.',
        ],
      },
      {
        heading: 'Where personas fall apart',
        paragraphs: [
          'Every one of these killed a pet I liked, and the pattern is always the same: the persona was written for the preview, not for the desktop.',
        ],
        list: [
          'Persona and palette disagreeing. A grumpy pet in pastel pink looks like a mistake',
          'Too many states doing the same thing. If blocked and error look alike, the character has nothing to say',
          'Lore that requires reading. Anything you have to stop and decode is out',
          'Copying someone else\'s pet wholesale. The persona has to match your day, and your day is not theirs',
        ],
      },
      {
        heading: 'Where to go from here',
        paragraphs: [
          'Generate a pet on codexpetgenerator.com, then spend five minutes deciding what it is like before you install it. That is the whole trick.',
          'Design basics sit at /blog/pixel-art-pet-design-guide if the sprite itself needs work, palettes that survive a real editor background are at /blog/custom-color-palettes-codex-pet, and the nine states are broken down at /blog/codex-pet-9-animation-states. To check whether any of this changed your day, /blog/coding-mood-journal-pixel-pet has a cheap way to measure it. Everything else is at /blog.',
        ],
      },
    ],
  },
  {
    slug: 'pixel-pet-personality-zh',
    title: '给宠物做「人设」：性格设定的乐趣',
    description: '像素宠物的人设，是装饰品和你愿意主动瞟一眼的东西之间的分界线。这篇讲怎么挑性格、怎么把它落到九个动画状态上、怎么写三句话就够的背景设定。',
    date: '2026-10-21',
    author: 'PetGen',
    keywords: [
      'pixel pet personality',
      '像素宠物 人设',
      '宠物 性格设定',
      'codex 宠物 背景设定',
      '像素角色 性格',
      'codex 宠物 动画状态',
    ],
    related: [
      'pixel-art-pet-design-guide',
      'custom-color-palettes-codex-pet',
      'codex-pet-9-animation-states',
      'coding-mood-journal-pixel-pet',
    ],
    faq: [
      {
        question: '什么是像素宠物的人设？',
        answer: '你给 Codex 宠物定的那套性格，通过保留哪些动画、它在每个状态下怎么表现来体现。这是设计选择，不是 pet.json 里的某个字段。',
      },
      {
        question: '一定要写背景设定吗？',
        answer: '不用。三句话已经很多，一句不写宠物照样能用。背景设定的用处是在两个差不多的待机动画之间帮你做选择时保持一致。',
      },
      {
        question: '一只宠物能有两种性格吗？',
        answer: '能，但读起来通常很糟。选一种，让九个状态去支撑它。想要反差就再做一只，两只换着用。',
      },
      {
        question: '人设会影响安装方式吗？',
        answer: '不会。文件夹、精灵图、pet.json 完全一样。人设只影响你保留哪些动画帧，以及给宠物起什么名字。',
      },
    ],
    sections: [
      {
        heading: '人设改变的是你用它的方式',
        paragraphs: [
          '像素宠物的人设，是装饰品和你愿意主动瞟一眼的东西之间的分界线。同一张照片生成的两只宠物，在你决定它是什么性格之后，表现可以差很远，而做这个决定只需要花几分钟想清楚。',
          '连着换了一周的宠物之后我才意识到这件事。最后留下的那只画得并不更好，只是它待机时像「在耐心等」，另一只看着像无聊。帧是一样的，讲的故事不一样。',
        ],
        list: [
          '人设给了你一条标准，用来删掉不合适的动画',
          '状态切换因此变得不用直视也能读懂',
          '有性格的宠物才值得起名字，起了名字的宠物才留得住',
          '它让你在生成第二只时有个明确的对比对象',
        ],
      },
      {
        heading: '挑一个配得上你那一小时的宠物性格',
        paragraphs: [
          '从你一天里最难熬的那个小时开始想，别从最顺的那个小时想。如果下午基本都在等长任务跑完，安静的陪伴比一有命令完成就欢呼的那种更合适；如果上午都在做评审，选一个看着认真而不是开心的。',
          '宠物性格在 Codex 圈子里大致收敛成四类：沉稳、雀跃、暴躁、嗜睡。没有哪类更好，它们配不同的房间和不同的人，配错了是宠物两周后被关掉的主要原因。',
        ],
        list: [
          '沉稳：待机动得少，就绪很安静。适合摆在你要长时间盯着的终端旁边',
          '雀跃：状态切换幅度大，完成时有明显的庆祝动作。适合任务短而密的时候',
          '暴躁：阻塞时看着像在表达不满。长时间调试时比想象中好笑',
          '嗜睡：所有循环都慢。适合宠物就摆在你正在读的文字旁边',
        ],
      },
      {
        heading: '把性格落到九个状态上',
        paragraphs: [
          '像素角色的性格表达，主要靠做减法。九个状态、每个八帧，这点空间不够演一场细腻的表演。挑出你的性格真正在乎的两个状态，剩下的保持中性就行。',
          '最能撑住性格的是待机、运行、阻塞、就绪。这四个是你一次会盯上好几分钟的。睡眠、报错那些一闪而过，只要别和已经立住的东西打架就够了。',
        ],
        list: [
          '先定它在什么都没发生时干什么。那一帧出现在屏幕上的时间比其它所有帧加起来还长',
          '阻塞必须有个能分辨的轮廓。这是你真正会学会辨认的状态',
          '就绪要短。一个小时的第三次长庆祝，就变成噪声了',
        ],
      },
      {
        heading: '宠物背景设定写三句就够',
        paragraphs: [
          'Codex 宠物的背景设定，就是给这只生物安的那点故事，值三句话。两句也行。写二十句是一个你迟早会放弃的写作项目，而宠物并不需要。',
          '能用的写法：一句说它从哪来，一句说它想要什么，一句说什么会惹到它。写在 displayName 里或者宠物文件夹的备注里，别写进精灵图。192x208 上的字是读不出来的，还会把本来最便宜的那点清晰度赔进去。',
          '我自己那只写的是「在机柜里捡到的，希望这次能跑完，讨厌合并冲突」。够了，够让阻塞那个动画显得是故意的。',
        ],
      },
      {
        heading: '人设最容易崩在哪',
        paragraphs: [
          '下面每一条我都踩过，套路都一样：人设是照着预览写的，不是照着桌面写的。',
        ],
        list: [
          '性格和配色打架。一只暴躁的宠物配马卡龙粉，看着像做错了',
          '太多状态在做同一件事。阻塞和报错长得一样，这个角色就没话可说',
          '背景设定需要读才能懂。凡是得停下来解码的东西，都出局',
          '整只照搬别人的宠物。人设要配的是你自己的一天，而你的一天不是他的',
        ],
      },
      {
        heading: '接下来去哪儿',
        paragraphs: [
          '在 codexpetgenerator.com 生成一只，装之前花五分钟想清楚它是什么样的。整套诀窍就这么多。',
          '精灵图本身要改的话，基础在 /blog/pixel-art-pet-design-guide；能在真实编辑器背景上活下来的配色在 /blog/custom-color-palettes-codex-pet；九个状态的拆解在 /blog/codex-pet-9-animation-states。想确认这些有没有真的改变你的一天，/blog/coding-mood-journal-pixel-pet 里有个很便宜的办法。其余内容从 /blog 进去。',
        ],
      },
    ],
  },
  {
    slug: 'pixel-pet-notifications-and-nudge-timing',
    title: 'Pixel Pet Notifications: Timing Nudges Without Breaking Focus',
    description: 'Pixel pet notifications are the small nudges your Codex companion can surface while a run is going. What deserves one, when to fire it, and why most reminder settings should stay switched off.',
    date: '2026-10-22',
    author: 'PetGen',
    keywords: [
      'pixel pet notifications',
      'codex pet reminder settings',
      'pet notification timing',
      'do pet notifications help focus',
      'codex pet nudge setup',
      'pixel pet reminder schedule',
      'codex desktop pet alert settings'
    ],
    related: [
      'pixel-pet-personality',
      'codex-pet-9-animation-states',
      'coding-mood-journal-pixel-pet',
      'sync-codex-pet-across-machines'
    ],
    faq: [
      {
        question: 'Do pet notifications help focus?',
        answer: 'In one narrow way, yes. A run-finished nudge stops you from checking the terminal every couple of minutes. Every other notification category I tried cost more attention than it returned, and repeat nudges were the worst of them.'
      },
      {
        question: 'How many notifications should a Codex pet send?',
        answer: 'Start with one rule: fired only when a run crosses a length threshold you set yourself. Four nudges a day is plenty for most people. If you are counting more than that, the threshold is too low.'
      },
      {
        question: 'Can I change codex pet reminder settings without reinstalling the pet?',
        answer: 'Yes. The reminder block lives in pet.json inside the pet folder. Edit it, restart Codex, and the new rules apply to the pet you already have installed. Nothing about the spritesheet changes.'
      },
      {
        question: 'Do pet notifications work on both macOS and Windows?',
        answer: 'They run the same way on both, because the pet reads the same pet.json on either. The one thing that differs is how the operating system handles notification permissions, so check your system settings if a nudge never appears.'
      }
    ],
    sections: [
      {
        heading: 'What a pixel pet notification actually is',
        paragraphs: [
          'Pixel pet notifications are the small nudges your companion surfaces while Codex is working. A pet can react when a run finishes, when a command blocks waiting on you, or after a stretch where nothing has moved. None of it touches your model, your prompts or your code. It is a desktop companion telling you that something happened, and the only real design question is whether you wanted to be told.',
          'I expected to hate this. Notifications from a decorative pet sounded like the least useful category of interruption anyone could invent. Three weeks later I keep one rule switched on, and the reason is narrower than I expected: it is good at exactly one job, which is telling me a long run finished while I was reading something else.',
          'That is the honest framing. A pet notification is not a productivity system and it will not make you focused. It is a way to stop glancing at the terminal every ninety seconds, and it only works while the bar for firing one stays high.'
        ],
        list: [
          'Run finished: the pet changes state and holds that state until you look up',
          'Run blocked: something needs input and the queue has stopped moving',
          'Idle too long: the pet has been waiting on you rather than the other way round',
          'Error: the run failed and whatever it produced is already wrong'
        ]
      },
      {
        heading: 'Codex pet reminder settings: the four knobs that matter',
        paragraphs: [
          'Codex pet reminder settings live in pet.json, the same file that holds displayName and the animation map. There is no separate preferences screen and nothing is relayed off your machine. Whatever you set applies to that one pet folder on that one computer.',
          'Most pets ship with every notification off. That default is correct, and I would leave it alone for the first few days. Switch one on only after you catch yourself refreshing the terminal deliberately, waiting for a result.',
          'Four fields change anything at all: whether a nudge fires, how long the run has to be before it qualifies, whether quiet hours apply, and whether an unanswered nudge repeats. Everything else in the file is cosmetic and has no bearing on timing.'
        ],
        list: [
          'enabled: the master switch. Off means the pet animates freely and never tries to get your attention',
          'minRunSeconds: skip short runs. Set it above your median command length or every nudge turns into noise',
          'quietHours: a window where the pet animates silently. Point it at whatever your regular meeting block or bedtime is',
          'repeat: whether an unanswered nudge fires again. I keep this off, because a repeat is a second decision I never asked for'
        ]
      },
      {
        heading: 'Pet notification timing: when a nudge lands well',
        paragraphs: [
          'Pet notification timing is mostly about run length, not hour of day. A nudge after a four second command is an insult. A nudge after a six minute build is the entire reason the feature exists. Put minRunSeconds above your median command and the pet stops commenting on things you were going to see anyway.',
          'The second factor is whether you were already looking. If Codex is the frontmost window, the animation is visible without help and a nudge adds nothing. Timing rules that account for window focus do real work here. Timing rules that ignore it are a noise generator with a pet drawn on top.',
          'Third, what happens afterwards matters more than the nudge itself. A pet that moves into a distinctive state and stays there beats one that flashes and resets, because you might not look up for another minute. The pet should still be telling the story when you arrive.'
        ],
        list: [
          'Long runs: fire. This is the case the feature was built for',
          'Short runs: never. You will read the result before the animation finishes',
          'Codex already focused on screen: skip it unless the run failed',
          'Blocked runs: fire, and hold that state until you respond'
        ]
      },
      {
        heading: 'Do pet notifications help focus? What three weeks of notes showed',
        paragraphs: [
          'Do pet notifications help focus? For me the answer is yes in one narrow way and no in every other configuration I tried. The narrow win: I stopped switching windows to check whether a run had finished. Across a week that was maybe sixty fewer glances, and each one used to cost me a paragraph of whatever I was reading.',
          'The losses were real as well. With repeat switched on, an unanswered nudge became a low grade irritation that pushed me toward closing Codex altogether. Without quiet hours set, a late session meant the pet was commenting on builds at an hour I should not have been working at all.',
          'I tracked it the same way I track mood in the journal method at /blog/coding-mood-journal-pixel-pet: one line a day, noting whether the pet interrupted something I cared about. Three weeks in, the number settled at roughly one genuinely useful nudge per day, with the rest of the animation being decoration I happened to like.'
        ],
        list: [
          'Notifications off: zero interruptions, but I checked the terminal about 12 times a day',
          'Run finished only, 60 second minimum: about 4 nudges a day, 1 of them worth having',
          'Run finished plus repeat: about 9 nudges a day, and I switched the whole thing off on day four',
          'Every category enabled: I lasted six hours before uninstalling the pet'
        ]
      },
      {
        heading: 'Where notification settings go wrong',
        paragraphs: [
          'Every one of these annoyed a pet out of my rotation, and the failure is always the same: the rule was written for the settings screen instead of for an actual working day.'
        ],
        list: [
          'Switching everything on because the fields were there. Most people uninstall within a day',
          'Setting minRunSeconds below your median command length, so the pet comments on everything',
          'Forgetting quiet hours, which makes the pet most talkative exactly when you should have stopped',
          'Assuming reminder settings travel with the pet when you copy it to another machine. They do not, and /blog/sync-codex-pet-across-machines explains what does move',
          'Giving blocked and error the same animation, so the one nudge you actually needed is unreadable'
        ]
      },
      {
        heading: 'Where to go from here',
        paragraphs: [
          'Generate a pet on codexpetgenerator.com and leave every notification off for the first week. The moment you notice yourself checking the terminal on purpose, switch on the single rule that covers it, and nothing else.',
          'Which states are worth nudging on is broken down at /blog/codex-pet-9-animation-states, and whether a nudge reads as helpful or smug depends on the persona work at /blog/pixel-pet-personality. If you run the same pet on a second machine, /blog/sync-codex-pet-across-machines covers what does and does not copy over. Everything else is listed at /blog.'
        ]
      }
    ]
  },
  {
    slug: 'pixel-pet-notifications-and-nudge-timing-zh',
    title: '像素宠物的提醒与通知节奏：什么时候该打扰你',
    description: '像素宠物通知是 Codex 跑任务时宠物给你的小提醒。这篇讲哪些事配得上一个提醒、时机该怎么卡，以及为什么大多数提醒开关应该保持关闭。',
    date: '2026-10-22',
    author: 'PetGen',
    keywords: [
      'pixel pet notifications',
      '像素宠物 通知',
      'codex 宠物 提醒设置',
      '宠物 通知时机',
      'codex 宠物 专注',
      '像素宠物 提醒节奏',
      'codex 桌面宠物 通知开关'
    ],
    related: [
      'pixel-pet-personality',
      'codex-pet-9-animation-states',
      'coding-mood-journal-pixel-pet',
      'sync-codex-pet-across-machines'
    ],
    faq: [
      {
        question: '宠物通知真的有助于专注吗？',
        answer: '只有一个很窄的用处：跑完的提醒能让你不再每隔几分钟切回终端看一眼。我试过的其它通知类别，消耗掉的注意力都比换来得多，其中重复提醒是最糟的一种。'
      },
      {
        question: '一只 Codex 宠物一天该提醒几次？',
        answer: '先只开一条规则：只有运行时长超过你自己设的阈值才提醒。一天四次对大多数人已经够用。如果你数出来的次数更多，说明阈值设低了。'
      },
      {
        question: '改提醒设置需要重装宠物吗？',
        answer: '不需要。提醒配置就在宠物文件夹里的 pet.json，改完重启 Codex 就生效，装好的那只宠物不用动。精灵图完全不受影响。'
      },
      {
        question: 'macOS 和 Windows 上通知表现一样吗？',
        answer: '宠物这层是一样的，因为两边读的都是同一份 pet.json。差别在操作系统怎么处理通知权限，所以如果提醒一直不出现，先去系统设置里看一眼。'
      }
    ],
    sections: [
      {
        heading: '像素宠物通知到底是什么',
        paragraphs: [
          '像素宠物通知，就是 Codex 干活时宠物给你的那些小提醒。跑完了可以提醒，卡住等你输入可以提醒，长时间没动静也可以提醒。它不碰你的模型、不碰你的提示词、也不碰代码。说白了就是桌面上的一只宠物告诉你出了件事，唯一值得考虑的问题是：你想不想被告诉。',
          '我一开始是准备讨厌这个功能的。一只装饰性宠物发通知，听起来是我能想到的最没用的打扰。三周后我只留了一条规则开着，原因比我想的窄得多：它只擅长一件事，就是在我读别的东西时告诉我那个长任务跑完了。',
          '这就是实话。宠物通知不是生产力系统，也不会让你变专注。它只是让你不用每九十秒瞟一次终端，而且只有在触发门槛设得够高的时候才成立。'
        ],
        list: [
          '跑完了：宠物切到某个状态，并且一直保持到你抬头',
          '卡住了：需要你输入，队列已经不动了',
          '闲置太久：这次是它在等你，不是你等它',
          '报错：任务失败了，产出的东西已经是错的'
        ]
      },
      {
        heading: 'Codex 宠物提醒设置：真正有用的四个开关',
        paragraphs: [
          'Codex 宠物提醒设置写在 pet.json 里，跟 displayName 和动画映射是同一个文件。没有单独的设置页面，也不会往本机之外传任何东西。你填什么，就只对这台机器上这个宠物文件夹生效。',
          '大多数宠物默认是全部关闭的。这个默认值是对的，头几天我建议你别动它。等到你发现自己正专门刷新终端等结果时，再打开对应那一条。',
          '真正会改变结果的只有四个字段：要不要提醒、任务跑多久才算数、有没有免打扰时段、没被回应的提醒要不要重发。文件里其它内容都是外观，跟时机没关系。'
        ],
        list: [
          'enabled：总开关。关掉后宠物照常动，但绝不主动找你',
          'minRunSeconds：跳过短任务。要设得比你命令时长的中位数高，否则每条提醒都是噪音',
          'quietHours：这段时间里宠物只动不出声。把值设成你固定的会议时段或者睡觉时间',
          'repeat：没回应的提醒要不要再发一次。我一律关掉，因为重发是我没要过的第二个决定'
        ]
      },
      {
        heading: '通知时机：什么时候提醒是合适的',
        paragraphs: [
          '宠物通知的时机主要跟任务长度有关，跟几点钟关系不大。一个四秒的命令跑完就提醒，是冒犯；一个六分钟的构建跑完提醒，正是这个功能存在的理由。把 minRunSeconds 设到高于你命令时长的中位数，宠物就不会再对那些你本来就会看到的事情评头论足。',
          '第二个因素是你当时有没有在看。如果 Codex 就在最前面的窗口，动画你本来就看得见，提醒毫无增量。会考虑窗口焦点的时机规则在这里是真干活；不考虑焦点的规则，就是一台装了宠物图案的噪音发生器。',
          '第三点，提醒之后发生什么比提醒本身更重要。切到一个明显状态并停在那里的宠物，比闪一下就复位的宠物有用，因为你可能一分钟后才抬头。你抬头的时候，它应该还在讲那件事。'
        ],
        list: [
          '长任务：提醒。这就是这个功能被做出来的场景',
          '短任务：永远别提醒。动画还没放完你就已经读到结果了',
          'Codex 已经在最前面：跳过，除非任务失败',
          '卡住的任务：提醒，并且保持那个状态直到你回应'
        ]
      },
      {
        heading: '宠物通知真的有助于专注吗：三周记录',
        paragraphs: [
          '宠物通知真的有助于专注吗？对我来说，答案是「只有一种配置有用，其它都没用」。有用的那一点很具体：我不再切窗口去确认任务跑没跑完。一周下来大概少看了六十次，而每一次都会让我丢掉正在读的那一段。',
          '代价也是真的。开着重复提醒时，一个没被回应的提醒会变成持续的低度烦躁，最后促使我干脆把 Codex 关掉。没设免打扰时段时，晚上加班意味着宠物会在我根本不该干活的时间点评构建。',
          '我用 /blog/coding-mood-journal-pixel-pet 里那个心情记录法来记：每天一行，写宠物有没有打断我在乎的事。三周下来数字稳定在每天大约一条真正有用的提醒，其余动画都是我恰好喜欢的装饰。'
        ],
        list: [
          '全部关闭：零打扰，但我一天大概要手动看终端 12 次',
          '只开跑完提醒 + 60 秒阈值：一天约 4 条，其中 1 条值得',
          '跑完提醒 + 重复提醒：一天约 9 条，第四天我把整套关了',
          '所有类别全开：撑了六小时就把宠物卸了'
        ]
      },
      {
        heading: '提醒设置最容易出错的地方',
        paragraphs: [
          '下面每一条都把一只我本来喜欢的宠物赶出了轮换，而且失败方式都一样：规则是照着设置页写的，不是照着真实的一天写的。'
        ],
        list: [
          '因为字段在那儿就全打开。多数人撑不过一天就会卸载',
          'minRunSeconds 设得比命令中位数还低，宠物于是对每件事都发言',
          '忘了设免打扰时段，结果宠物最话痨的时刻恰好是你该停手的时候',
          '以为把宠物拷到另一台机器时提醒设置会跟着走。并不会，/blog/sync-codex-pet-across-machines 里写了哪些东西会一起过去',
          '把卡住和报错做成同一个动画，于是你真正需要的那条提醒反而读不出来'
        ]
      },
      {
        heading: '接下来',
        paragraphs: [
          '在 codexpetgenerator.com 生成一只，第一周把所有通知都关掉。等你发现自己正有意识地去查看终端，就只打开能覆盖这种情况的那一条规则，别的都别动。',
          '哪些状态值得提醒，拆解在 /blog/codex-pet-9-animation-states；提醒读起来是帮忙还是阴阳怪气，取决于 /blog/pixel-pet-personality 里的人设工作。要在第二台机器上用同一只宠物，/blog/sync-codex-pet-across-machines 讲清了什么会跟着走、什么不会。其余内容从 /blog 进去。'
        ]
      }
    ]
  },
  {
    slug: 'pixel-pet-on-streams-and-podcasts',
    title: 'Pixel Pet on Streams and Podcasts: Getting It to Look Right on Camera',
    description: 'A pixel pet reads very differently through OBS or a screen share than it does on your own monitor. Which settings matter, size and contrast rules that survive a downscale, and a two minute checklist before you go live.',
    date: '2026-10-24',
    author: 'PetGen',
    keywords: [
      'pixel pet streaming',
      'stream overlay pet',
      'pet on camera',
      'podcast desktop pet',
      'codex pet obs setup',
      'pixel pet screen share',
      'streamer desktop companion',
      'codex pet visibility on stream'
    ],
    related: [
      'hide-codex-pet-screen-share',
      'dual-monitor-pet-placement',
      'custom-color-palettes-codex-pet',
      'pixel-pet-design-balance'
    ],
    faq: [
      {
        question: 'Can I put a pixel pet on stream without distracting viewers?',
        answer: 'Yes, if it moves less than you think it should. Pick the calmest idle state, scale it up, and keep it away from the corner where alerts and chat sit. Constant motion is what pulls eyes away from the editor.'
      },
      {
        question: 'How large should a pet be on a 1080p stream?',
        answer: 'Larger than feels right on your own monitor. Aim for roughly 8 to 10 percent of the height of the captured area, then record thirty seconds and watch it back at half scale.'
      },
      {
        question: 'Does a pet show up in OBS automatically?',
        answer: 'It does if you capture the whole display, because the pet draws on top of the desktop. If you capture a single window it will not appear, and you would need a display capture source to include it.'
      },
      {
        question: 'Should I run a pet during an audio-only podcast?',
        answer: 'No. Hide it. Nobody listening can see it and it pulls your own eye while you are talking. It earns its place on video, and the audio-only case is the one place it costs you something.'
      }
    ],
    sections: [
      {
        heading: 'Why a pixel pet looks wrong the first time you stream it',
        paragraphs: [
          'Pixel pet streaming has one problem nobody warns you about. Your pet was designed to be glanced at on a 27 inch monitor from two feet away, while your viewers are watching it through a 1080p downscale on a phone. Everything gets softer, and the details you liked are the ones that disappear first.',
          'Two things go wrong at the same time. Fine detail in the spritesheet stops reading, and the pet stops separating from whatever sits behind it, because on stream the background is your entire desktop rather than the two windows you actually look at.',
          'I ran four sessions with a pet visible before it reached the point where people mentioned it for the right reason. These are the settings that made the difference.'
        ],
        list: [
          'Detail below about four screen pixels does not survive the downscale',
          'A dark pet on a dark wallpaper turns into a smear',
          'Idle timing that feels slow in person reads as frozen on stream',
          'The bottom right corner is exactly where your webcam box and chat overlay go'
        ]
      },
      {
        heading: 'Stream overlay pet settings that change anything',
        paragraphs: [
          'The stream overlay pet question comes down to three fields in pet.json and one decision in OBS. None of it requires reinstalling the pet, and none of it changes how the pet behaves when you are not streaming.'
        ],
        list: [
          'Scale: push it up. A pet that reads well on your own monitor is usually too small for stream',
          'Rim or outline: if your palette supports it, add a light rim. One palette entry fixes most contrast problems',
          'Idle animation: choose the state that moves least. Constant motion competes with your editor',
          'OBS layer order: put the pet above the desktop and below alerts, not on top of everything'
        ]
      },
      {
        heading: 'Pet on camera: size, contrast and motion',
        paragraphs: [
          'For a pet on camera, meaning a webcam shot of your desk rather than a screen capture, the rules change completely. You are dealing with a camera sensor and a shallow depth of field, and the pet is a small object inside a large frame.',
          'Two practical notes. A pet on a second monitor behind you reads better than one on your main screen, because the camera catches it at an angle instead of head on. And backlight matters more than the pet itself.'
        ],
        list: [
          'Aim for the pet to take up roughly 4 to 6 percent of frame height',
          'Put a light behind the monitor rather than in front of it',
          'Angled placement reads better than dead-on',
          'Freeze the idle animation. Camera sensors and fast sprite loops do not get along'
        ]
      },
      {
        heading: 'Podcast desktop pet: the audio-first case',
        paragraphs: [
          'A podcast desktop pet is a different job again. If the episode is audio only, the pet is doing nothing for anybody and you should hide it. If you are recording video for clips, the streaming rules above apply unchanged.',
          'The case worth planning for is the screen-share episode, where your guest and the recording both see your desktop. Decide before you press record whether the pet is part of the bit. Being half committed is the worst of the three options.'
        ],
        list: [
          'Audio only: hide it. Nobody can see it and it draws your own eye',
          'Video for clips: follow the streaming rules',
          'Screen share with a guest: mention it once, then move on',
          'Live streamed podcast: same as streaming, plus decide what alerts can cover it'
        ]
      },
      {
        heading: 'A checklist before you go live',
        paragraphs: [
          'Five checks, about two minutes in total. Every one of them is something that went wrong for me on a real recording.'
        ],
        list: [
          'Record thirty seconds locally and watch it back at half scale',
          'Check the pet against your brightest and your darkest window, not just the editor',
          'Make sure it is not sitting under an alert box or a webcam frame',
          'Confirm quiet hours if you stream late into the evening',
          'Keep a hotkey ready to hide it. Two sessions in, somebody will ask'
        ]
      },
      {
        heading: 'Where to go from here',
        paragraphs: [
          'Generate a pet on codexpetgenerator.com and record thirty seconds before you stream anything. Watching your own footage at half scale teaches you more than any amount of configuring while blind.',
          'Hiding the pet on demand is covered at /blog/hide-codex-pet-screen-share, and where it should physically sit on a multi display setup is at /blog/dual-monitor-pet-placement. Palettes that survive a dark desktop are at /blog/custom-color-palettes-codex-pet, and how much personality is too much on camera is argued at /blog/pixel-pet-design-balance. Everything else is listed at /blog.'
        ]
      }
    ]
  },
  {
    slug: 'pixel-pet-on-streams-and-podcasts-zh',
    title: '像素宠物上播客和直播：出镜前要调的那些设置',
    description: '同一只像素宠物，在 OBS 或屏幕共享里和你自己的显示器上完全是两种观感。这篇讲哪些设置真正有用、缩小后还能看清的尺寸与对比度规则，以及开播前的两分钟检查清单。',
    date: '2026-10-24',
    author: 'PetGen',
    keywords: [
      'pixel pet streaming',
      '像素宠物 直播',
      '直播叠加 宠物',
      '播客 桌面宠物',
      'codex 宠物 obs 设置',
      '像素宠物 屏幕共享',
      '主播 桌面陪伴',
      'codex 宠物 出镜'
    ],
    related: [
      'hide-codex-pet-screen-share',
      'dual-monitor-pet-placement',
      'custom-color-palettes-codex-pet',
      'pixel-pet-design-balance'
    ],
    faq: [
      {
        question: '把像素宠物放上直播，会分散观众注意力吗？',
        answer: '只要它比你以为的更安静就不会。挑最平和的待机状态，把它放大，并且避开通知和聊天框所在的那个角。持续的动作才会把视线从编辑器上拉走。'
      },
      {
        question: '1080p 直播里宠物该多大？',
        answer: '要比在你自己显示器上看着顺眼时更大。大致按采集区域高度的 8% 到 10% 来定，然后录三十秒，用一半尺寸回看一遍。'
      },
      {
        question: 'OBS 会自动把宠物录进去吗？',
        answer: '如果你采集的是整个显示器就会，因为宠物是画在桌面之上的。如果只采集单个窗口就不会出现，这时需要换成显示器采集源才能带上它。'
      },
      {
        question: '纯音频播客要开着宠物吗？',
        answer: '不要，藏起来。听众看不见它，而它会在你说话时扯走你自己的视线。它只在视频里才值回票价，纯音频是唯一一个它会让你付出代价的场景。'
      }
    ],
    sections: [
      {
        heading: '为什么第一次上直播的宠物都很难看',
        paragraphs: [
          '像素宠物上直播有一个没人提前告诉你的问题。它是按「在 27 寸显示器上、离你两英尺、被瞥一眼」来设计的，而你的观众是在手机上看一段 1080p 压缩后的画面。所有细节都会变糊，而且你最喜欢的那些细节是最先消失的。',
          '同时会出问题的是两件事。精灵图里的精细部分读不出来了；宠物也和它背后的东西分不开了，因为在直播里背景是你整个桌面，而不是你真正在看的那两个窗口。',
          '我带着一只可见的宠物跑了四场，才到观众因为它该被注意的原因而提到它。下面是真正带来差别的设置。'
        ],
        list: [
          '小于四个屏幕像素的细节撑不过压缩',
          '深色宠物配深色壁纸会糊成一团',
          '你本人觉得慢的待机节奏，在直播里看起来就是卡住了',
          '右下角恰好是你的摄像头框和聊天框的位置'
        ]
      },
      {
        heading: '真正有用的直播叠加设置',
        paragraphs: [
          '直播叠加宠物这件事，归根到底是 pet.json 里三个字段加 OBS 里一个决定。全部都不需要重装宠物，也不会改变你不直播时宠物的行为。'
        ],
        list: [
          'scale：往上调。在自己显示器上看着顺眼的尺寸，通常对直播来说太小',
          '描边：如果配色支持，加一层浅色描边。改一个调色板项就能解决大部分对比度问题',
          '待机动画：选动得最少的那个状态。持续动作会和你的编辑器抢视线',
          'OBS 图层顺序：放在桌面之上、通知之下，不要盖在所有东西最上面'
        ]
      },
      {
        heading: '镜头里的宠物：尺寸、对比度和动作',
        paragraphs: [
          '如果是摄像头拍你的桌面，而不是屏幕采集，规则完全变了。你要对付的是相机传感器和很浅的景深，而宠物只是一个大画面里的小物件。',
          '两条实用经验。放在你身后第二块显示器上的宠物，比放在主屏上更好看，因为相机是斜着拍到它的，而不是正面怼着。另外，背光比宠物本身更重要。'
        ],
        list: [
          '让宠物大约占画面高度的 4% 到 6%',
          '把灯放在显示器后面，而不是前面',
          '斜着摆比正对着摆更好看',
          '把待机动画停掉。相机传感器和快速的精灵循环合不来'
        ]
      },
      {
        heading: '播客里的桌面宠物：音频优先的场景',
        paragraphs: [
          '播客桌面宠物又是另一份工作。如果这一期是纯音频，宠物对任何人都没有作用，你应该把它藏起来。如果你是在录视频切片，上面那套直播规则原样适用。',
          '值得提前规划的是共享屏幕的那类节目：嘉宾和录制都能看到你的桌面。按下录制之前就要决定宠物算不算节目的一部分。三种选择里，半吊子是最糟的。'
        ],
        list: [
          '纯音频：藏起来。没人看得见，它还会扯走你自己的视线',
          '录视频切片：按直播规则来',
          '和嘉宾共享屏幕：提一次就够了，然后接着往下走',
          '直播型播客：同直播规则，另外还要决定通知能不能盖住它'
        ]
      },
      {
        heading: '开播前的检查清单',
        paragraphs: [
          '五项检查，加起来大约两分钟。每一条都是我在真实录制中踩过的坑。'
        ],
        list: [
          '本地录三十秒，然后用一半尺寸回看',
          '拿你最亮和最暗的窗口各测一遍，别只测编辑器',
          '确认它没有被通知框或者摄像头框压住',
          '如果播到很晚，先确认免打扰时段',
          '准备好一个隐藏宠物的快捷键。播到第二场，一定会有人问'
        ]
      },
      {
        heading: '接下来',
        paragraphs: [
          '在 codexpetgenerator.com 生成一只，开播之前先录三十秒。用一半尺寸回看自己的素材，比盲调半天设置学到的多得多。',
          '按需隐藏宠物写在 /blog/hide-codex-pet-screen-share；多显示器上它该摆在哪儿在 /blog/dual-monitor-pet-placement；能在深色桌面上活下来的配色在 /blog/custom-color-palettes-codex-pet；镜头前多少人设算太多，/blog/pixel-pet-design-balance 里吵过。其余内容从 /blog 进去。'
        ]
      }
    ]
  },
  {
    slug: 'coding-loneliness-pixel-pet',
    title: 'Coding Loneliness and Pixel Pets: What a Month of Notes Showed',
    description: 'Coding loneliness hits solo developers in a narrow set of moments rather than as a constant mood. A month of daily notes on whether a pixel pet changed anything, which moments it helped with, and where a desktop companion stops mattering.',
    date: '2026-10-25',
    author: 'PetGen',
    keywords: [
      'coding loneliness pet',
      'solo dev companion',
      'coding isolation',
      'ai pet comfort',
      'codex pet wellbeing',
      'remote developer loneliness',
      'pixel pet long coding session',
      'desktop companion for solo devs'
    ],
    related: [
      'why-developers-love-desktop-companions',
      'pixel-pet-personality',
      'coding-mood-journal-pixel-pet',
      'codex-pet-9-animation-states'
    ],
    faq: [
      {
        question: 'Can a pixel pet really help with coding loneliness?',
        answer: 'In a narrow way, yes. It makes long solo hours less blank and marks the fact that time passed. It does nothing for the organisational causes of isolation, such as having nobody review your code or being the only person who understands a system.'
      },
      {
        question: 'How long before a pet stops feeling novel?',
        answer: 'About ten days in my notes. After that it stopped being something I looked at and became something I noticed at the edges of a session, which is exactly when it started being useful.'
      },
      {
        question: 'Should I turn on notifications to get the companionship effect?',
        answer: 'No. Notifications exist to tell you a long run finished, and they cost attention. Companionship comes from the animation being on screen, which needs no notification at all.'
      },
      {
        question: 'Does this work if I share my screen all day?',
        answer: 'It works differently. Hide the pet while you are sharing, which is covered at /blog/hide-codex-pet-screen-share, so the effect is limited to the hours you spend off camera.'
      }
    ],
    sections: [
      {
        heading: 'What coding loneliness feels like on a long session',
        paragraphs: [
          'Coding loneliness is not the same thing as being alone in a room. It is the narrower feeling that nobody knows what you spent six hours on, and that when the build fails at 2am there is nobody to tell. Remote work turned this into the default condition for a lot of people rather than an occasional bad week.',
          'The coding loneliness pet question came up in our community often enough that I stopped rolling my eyes at it. The claim people make is modest: something on your desktop notices that you are still there. It does not review your code and it does not understand your project. It reacts, and that turns out to be the part that matters.',
          'So I ran it properly for a month. One line a day in a plain text file, noting whether I had noticed the pet and whether noticing it changed anything I did. This post is what those thirty lines say.'
        ],
        list: [
          'The moment a long run finishes and there is nobody to tell it worked',
          'The fourth hour of a bug where you have stopped being sure the bug is real',
          'Switching back after meetings, when the screen looks exactly as you left it',
          'Evenings where the only thing marking the time was the clock'
        ]
      },
      {
        heading: 'What a pixel pet actually adds to a solo session',
        paragraphs: [
          'Three things, and I would not claim a fourth. A pixel pet gives you a marker that time has passed, a reaction to state changes you would otherwise only see in a log, and a small reason to look up from the editor.',
          'The second one is the useful one. When a run finishes or blocks, the animation changes and stays changed until you look up. That is a nudge without a notification attached, which matters, because notifications from a decorative pet are a bad idea and I have written about why before.',
          'Compare it with the honest alternatives. A group chat where nobody answers at 2am does nothing here. Music does something different: it fills silence rather than marking change. A pet sits closer to the work than either of them.'
        ],
        list: [
          'A visible marker that this session has been going for a while',
          'Persistent state on run finished or blocked, readable from across the room',
          'Something to glance at that is not a log line or a metric',
          'A persona you picked yourself, which is why the personality work pays off here'
        ]
      },
      {
        heading: 'What a month of daily notes showed',
        paragraphs: [
          'The method was deliberately cheap. One line a day, written at the end of the session, answering two questions: did I notice the pet, and did noticing it change anything. I used the same file as the mood journal method, so the two sets of notes line up.',
          'Across thirty days the pattern held. The pet was invisible while I was in flow and useful at the edges of a session, which is roughly where you would want a companion to sit anyway.'
        ],
        list: [
          'Days I actively noticed the pet: 19 of 30, almost all at session edges',
          'Days it changed what I did: 6, and every one was a blocked run I would have missed',
          'Days it annoyed me: 2, both during meetings when the animation was on camera',
          'Days I wanted to uninstall: 0, down from 3 in the first week before I set quiet hours',
          'Reported session length feeling shorter by: about 20 minutes, a number I do not fully trust'
        ]
      },
      {
        heading: 'Where coding isolation does not respond to a pet',
        paragraphs: [
          'This is where I part company with the stronger versions of the claim. Coding isolation has causes that a desktop companion does not touch, and pretending otherwise is how this whole topic gets a reputation for being silly.'
        ],
        list: [
          'No code review culture: a pet is not a second pair of eyes',
          'Being dropped into a codebase that nobody has documented',
          'Working across timezones where your team is asleep for all of your working day',
          'The specific isolation of being the only person who understands one system'
        ]
      },
      {
        heading: 'Where to go from here',
        paragraphs: [
          'Generate a pet on codexpetgenerator.com and leave it completely alone for the first week. Do not configure anything. If you notice it at all during that week, it will be at the edges of a session, and that is the signal that it is doing something.',
          'Why developers keep desk companions at all is covered at /blog/why-developers-love-desktop-companions, and whether a reaction reads as kind or smug depends on the persona work at /blog/pixel-pet-personality. If you want to measure any of this yourself, the one line a day method at /blog/coding-mood-journal-pixel-pet costs nothing. Everything else is listed at /blog.'
        ]
      }
    ]
  },
  {
    slug: 'coding-loneliness-pixel-pet-zh',
    title: '长时间写代码有多孤独？一只像素宠物能改变什么',
    description: '编程孤独感不是「一个人待着」，而是没人知道你这六小时干了什么。这篇用一个月的每日记录，讲像素宠物在哪些时刻起作用、哪些时刻完全帮不上。',
    date: '2026-10-25',
    author: 'PetGen',
    keywords: [
      'coding loneliness pet',
      '编程孤独感 宠物',
      '独处开发 陪伴',
      'codex 宠物 情绪',
      '远程开发 孤独',
      '像素宠物 长时间写代码',
      '桌面陪伴 独立开发者',
      'codex 宠物 心情'
    ],
    related: [
      'why-developers-love-desktop-companions',
      'pixel-pet-personality',
      'coding-mood-journal-pixel-pet',
      'codex-pet-9-animation-states'
    ],
    faq: [
      {
        question: '像素宠物真的能缓解编程孤独感吗？',
        answer: '只在一个很窄的层面能。它让那些漫长的独处小时不那么空白，也给时间流逝留了个标记。但孤独的组织性成因它一点都碰不到，比如没人评审你的代码，或者只有你一个人懂这套系统。'
      },
      {
        question: '多久之后宠物就不新鲜了？',
        answer: '我的记录里是十天左右。之后它不再是我会去看的东西，而是我在会话边缘会注意到的东西，而这恰好是它开始有用的时刻。'
      },
      {
        question: '想要陪伴感，需要打开通知吗？',
        answer: '不需要。通知的用途是告诉你长任务跑完了，而且它消耗注意力。陪伴感来自动画本身就在屏幕上，这跟通知没有任何关系。'
      },
      {
        question: '如果我整天都在共享屏幕呢？',
        answer: '起作用的样子不一样。共享时把宠物藏起来，做法写在 /blog/hide-codex-pet-screen-share，所以效果只剩下你不在镜头里的那些小时。'
      }
    ],
    sections: [
      {
        heading: '长时间写代码时的孤独感到底是什么',
        paragraphs: [
          '编程孤独感不等于一个人待在房间里。它更窄：没人知道你这六个小时做了什么，凌晨两点构建挂了也没人可说。远程办公把这件事从偶发的坏一周，变成了很多人的常态。',
          '「宠物能不能缓解编程孤独」这个问题在社区里出现得够多，我不再翻白眼了。大家的说法其实很克制：桌面上有个东西知道你还在这儿。它不审你的代码，也不理解你的项目，它只是有反应，而有反应恰好是管用的那部分。',
          '于是我正经记了一个月。每天一行，写在一个纯文本文件里，记录今天有没有注意到宠物、以及注意到它有没有改变我做了什么。这篇就是那三十行说的话。'
        ],
        list: [
          '一个长任务跑完，但没人可以说它成了',
          '调试到第四小时，你已经不确定这个 bug 是不是真的',
          '开完会切回来，屏幕和你离开时一模一样',
          '晚上只有时钟在提醒你时间过去了'
        ]
      },
      {
        heading: '一只像素宠物到底能给独处的会话加什么',
        paragraphs: [
          '三件事，我不会说第四件。像素宠物给你一个「时间过去了」的标记，给你一个对你本来只会在日志里看到的状态变化的反应，还有一个让你从编辑器里抬头的很小理由。',
          '第二件是有用的那件。任务跑完或者卡住时，动画会变，而且会一直保持到你抬头。这是一个不带通知的提醒，这点很重要，因为装饰性宠物发通知是个坏主意，我之前写过为什么。',
          '跟诚实的替代方案比一下。凌晨两点没人回的群聊对此毫无帮助。音乐做的是另一件事：它填的是安静，不是标记变化。宠物比这两者都更贴近工作本身。'
        ],
        list: [
          '一个看得见的标记，说明这次会话已经持续了一段时间',
          '跑完或卡住时的持续状态，隔着房间也读得出来',
          '一个可以瞥一眼的东西，而且不是日志行也不是指标',
          '一个你自己挑的人设，这也是人设工作在这里有回报的原因'
        ]
      },
      {
        heading: '一个月的每日记录说了什么',
        paragraphs: [
          '方法故意做得很便宜。每天一行，写在会话结束时，回答两个问题：我今天有没有注意到宠物，注意到它有没有改变我做了什么。用的就是心情记录法那个文件，所以两组笔记能对上。',
          '三十天下来，模式是一致的。进入心流时宠物是隐形的，在会话的边缘才有用，而这大致就是你希望一个陪伴者待的位置。'
        ],
        list: [
          '主动注意到宠物的天数：30 天里 19 天，几乎都在会话边缘',
          '它改变了我行为的天数：6 天，每一次都是我本来会漏掉的卡住任务',
          '它让我烦的天数：2 天，都是开会时动画上了镜头',
          '想卸载的天数：0 天，第一周是 3 天，那时我还没设免打扰时段',
          '感觉会话变短了大约 20 分钟，这个数字我自己也不太信'
        ]
      },
      {
        heading: '哪些孤独是宠物帮不上的',
        paragraphs: [
          '这是我和更强版本的说法分道扬镳的地方。编程孤独有些成因是桌面陪伴根本碰不到的，假装它碰得到，就会让整个话题显得很傻。'
        ],
        list: [
          '没有代码评审文化：宠物替代不了第二双眼睛',
          '被丢进一个没人写文档的代码库',
          '跨时区工作，团队在你整个工作日里都在睡觉',
          '那种「只有你懂这套系统」的特定孤独'
        ]
      },
      {
        heading: '接下来',
        paragraphs: [
          '在 codexpetgenerator.com 生成一只，第一周什么都别配。如果你那一周里有注意到它，那一定是在会话的边缘，这就是它在起作用的信号。',
          '开发者为什么离不开桌面陪伴，写在 /blog/why-developers-love-desktop-companions；一个反应读起来是体贴还是阴阳怪气，取决于 /blog/pixel-pet-personality 里的人设工作。想自己量一量，/blog/coding-mood-journal-pixel-pet 那个每天一行的方法不花任何成本。其余内容从 /blog 进去。'
        ]
      }
    ]
  },
  {
    slug: 'dev-desktop-aesthetic-pixel-pet',
    title: 'From a Pixel Pet to a Whole Setup: A Developer Desktop Aesthetic That Survives a Bad Week',
    description:
      'Developer desktop aesthetic matters at hour seven, not in a screenshot. How one pixel pet turned into a full coding desk setup, where the companion goes on screen, and the three rules that keep a good-looking workspace usable.',
    date: '2026-10-26',
    author: 'PetGen',
    keywords: [
      'dev desktop aesthetic',
      'developer setup aesthetic',
      'pixel pet setup',
      'workspace inspiration',
      'coding desk setup',
      'codex pet workspace',
      'developer desk layout'
    ],
    related: [
      'pixel-pet-design-balance',
      'custom-color-palettes-codex-pet',
      'dual-monitor-pet-placement',
      'codex-pet-showcase'
    ],
    faq: [
      {
        question: 'Does a developer desktop aesthetic really change how much work gets done?',
        answer: 'Less than the setup posts claim. What changes is the tail of a long day: a screen that still reads correctly at hour seven costs you fewer small recoveries than one that turns into noise. I would not claim more than that.'
      },
      {
        question: 'Where should the pet go on an ultrawide?',
        answer: 'Pick the corner nearest your editor and keep it there. On a 34 inch ultrawide the temptation is to centre it, which puts it behind whatever you are reading. Mine is about 90 pixels tall in the bottom right of the right third.'
      },
      {
        question: 'How many animated elements can a desk hold before it gets noisy?',
        answer: 'One that carries meaning. Two animated things compete, and you stop being able to tell which one changed, which is the whole reason to have one. Everything else on the screen should be static.'
      },
      {
        question: 'Do I need a custom palette, or is the default fine?',
        answer: 'The default is fine for about a week, then it starts fighting your editor theme. Matching the pet palette to your syntax theme takes ten minutes and is described at /blog/custom-color-palettes-codex-pet.'
      }
    ],
    howTo: {
      name: 'Rebuild your coding desk setup in 30 minutes',
      steps: [
        'Pick one accent colour and set it in both the editor and the terminal',
        'Place the pet, then lean back a metre and check that its state changes are still readable',
        'Delete every widget that needs you to feed it',
        'Take one screenshot with the room lights off and fix whatever disappeared'
      ]
    },
    sections: [
      {
        heading: 'What a developer desktop aesthetic is actually for',
        paragraphs: [
          'Developer desktop aesthetic usually gets sold as screenshots. The part I care about is narrower: how the screen looks at hour seven, when you have stopped choosing what to look at.',
          'I came at this backwards. The pixel pet was the only thing on my desktop that reacted to my work, and once one thing reacted, everything else looked dead next to it. That is what pushed me into redoing the whole setup, not any interest in desk photos.',
          'So the bar I use now is simple. A workspace is good if it still reads correctly when you are tired. Lower than the setups people post, and it is the one that survives a real week.'
        ],
        list: [
          'Legible from a metre away, not just in a screenshot',
          'One element that changes when your code changes',
          'Nothing that needs you to remember to maintain it',
          'Dark enough that a 9pm session does not feel like a hospital corridor'
        ]
      },
      {
        heading: 'Pixel pet setup: where the companion goes on screen',
        paragraphs: [
          'The pet goes in the corner your eyes already drift to. On one monitor that is almost always bottom right; on two, it is the seam between panels. I went through the geometry at /blog/dual-monitor-pet-placement, and the short version is that the seam is wasted space on nearly every layout.',
          'Size matters more than position. On a 27 inch 2560x1440 display mine is about 90 pixels tall. Taller and it competes with the editor; shorter and the state changes stop being readable from across the room, which is the only reason to have it there at all.',
          'One mistake I made for a month: I put it over the terminal. Terminal output scrolls, the pet sat on top of it, and I lost error lines behind a pixel cat. Put it somewhere static.'
        ],
        list: [
          'Bottom right on one screen, the seam between two',
          'About 90 to 120 pixels tall on a 1440p display',
          'Never over a scrolling pane: terminal, log tail, test output',
          'Palette matched to the editor theme, see /blog/custom-color-palettes-codex-pet'
        ]
      },
      {
        heading: 'Workspace inspiration that survives a bad Tuesday',
        paragraphs: [
          'Workspace inspiration posts show a desk on setup day. The question worth asking is what the same desk looks like after a week of merge conflicts.',
          'Three rules came out of mine. Anything that needs daily attention goes. Anything that only looks good in a screenshot goes. Anything that costs a context switch to read moves off screen.',
          'What is left is boring: one accent colour, one monospace font, one animated element. /blog/pixel-pet-design-balance covers why cute and useful fight each other, and the balance point sits further toward useful than most people guess.'
        ],
        list: [
          'One accent colour, used in the editor chrome and nowhere else',
          'One animated element, so movement still means something',
          'Fonts set once, then left alone for a quarter',
          'A wallpaper dark enough to read white text on without a shadow'
        ]
      },
      {
        heading: 'A 30-minute pass to rebuild your coding desk setup',
        paragraphs: [
          'This is the order I use, and it is deliberately short. A setup pass that takes an afternoon stops being a workspace and turns into a hobby.',
          'Do it in the evening. Half of what you can learn about a desk only shows up with the room lights off.'
        ],
        list: [
          '0 to 5 minutes: pick the accent colour and set it in the editor and the terminal',
          '5 to 15: place the pet, then lean back a metre and check the state changes are readable',
          '15 to 25: delete every widget that needs you to feed it',
          '25 to 30: one screenshot in the dark, then fix whatever disappeared'
        ]
      },
      {
        heading: 'What to do with this',
        paragraphs: [
          'Generate one at codexpetgenerator.com and place it before you change anything else. The pet is the piece that reacts, so it tells you whether the rest of the desk is worth keeping.',
          'The balance question sits at /blog/pixel-pet-design-balance, the geometry at /blog/dual-monitor-pet-placement, and palettes at /blog/custom-color-palettes-codex-pet. Everything else is at /blog.'
        ]
      }
    ]
  },
  {
    slug: 'dev-desktop-aesthetic-pixel-pet-zh',
    title: '从一只像素宠物到整套桌面：能撑过糟糕一周的开发者桌面美学',
    description:
      '开发者桌面美学真正起作用的时刻是第七个小时，而不是截图里。讲讲一只像素宠物怎么带出整套编码桌面布置、伙伴该放在屏幕哪里，以及让好看的工作区不至于变成噪音的三条规则。',
    date: '2026-10-26',
    author: 'PetGen',
    keywords: [
      '开发者桌面美学',
      '编码桌面布置',
      '像素宠物摆位',
      '工作区灵感',
      'codex pet 桌面布置',
      '开发者工作台',
      '像素宠物配色'
    ],
    related: [
      'pixel-pet-design-balance',
      'custom-color-palettes-codex-pet',
      'dual-monitor-pet-placement',
      'codex-pet-showcase'
    ],
    faq: [
      {
        question: '桌面美学真的能改变产出吗？',
        answer: '没有那些布置帖说的那么多。真正变的是长日子的尾巴：一块到第七个小时还能读得懂的屏幕，比一块变成噪音的屏幕少花你几次「找回状态」的成本。再多我就不说了。'
      },
      {
        question: '超宽屏上宠物该放哪里？',
        answer: '挑离编辑器最近的那个角，然后就别动了。34 寸超宽屏的诱惑是把它放中间，那等于把它垫在你正在读的东西后面。我的是右三分之一区域的右下角，高约 90 像素。'
      },
      {
        question: '桌面上能放几个会动的东西？',
        answer: '一个，而且这个要带含义。两个会动的东西会互相抢注意力，你就分不清刚才是哪个变了，而能分清恰恰是放一个的全部理由。其余一律静态。'
      },
      {
        question: '默认配色够用吗，还是非得自定义？',
        answer: '默认大概够用一周，然后就会跟你的编辑器主题打架。把宠物调色板配成你语法高亮的颜色大概十分钟，做法写在 /blog/custom-color-palettes-codex-pet。'
      }
    ],
    howTo: {
      name: '用 30 分钟重做你的编码桌面',
      steps: [
        '挑一个主色，同时在编辑器和终端里设好',
        '摆好宠物，然后往后退一米，确认状态变化还看得清',
        '删掉所有需要你手动喂数据的挂件',
        '关灯截一张图，把消失的东西补回来'
      ]
    },
    sections: [
      {
        heading: '开发者桌面美学到底解决什么',
        paragraphs: [
          '开发者桌面美学通常被当成截图来卖。我在意的那一块要窄得多：第七个小时屏幕长什么样，那时候你已经不再主动选择看哪里了。',
          '我是反着走进这个话题的。像素宠物是我桌上唯一会对我工作有反应的东西，一旦有东西会反应，其余所有东西在旁边就显得是死的。把我推进去重做整套布置的是这件事，而不是什么桌面摄影的爱好。',
          '所以我现在用的标准很简单：一个工作区好不好，看你累了之后它还读不读得懂。这比大家贴出来的那些布置低得多，但它是能扛过一整周的那个标准。'
        ],
        list: [
          '隔一米也读得出，而不只是在截图里好看',
          '有一个元素会随着你的代码变',
          '没有需要你记得去维护的东西',
          '暗到晚上九点开工也不像在医院走廊'
        ]
      },
      {
        heading: '像素宠物摆位：伙伴放在屏幕哪里',
        paragraphs: [
          '宠物放在你眼睛本来就飘过去的那个角。单屏几乎总是右下角；双屏就是两块面板之间的缝。几何我在 /blog/dual-monitor-pet-placement 里算过，简短版是：那条缝在几乎任何布局里都是浪费掉的空间。',
          '尺寸比位置更要紧。27 寸 2560x1440 上我的是大约 90 像素高。再高就开始跟编辑器抢地方；再矮，状态变化隔着房间就读不出来了，而那正是放它的唯一理由。',
          '有一个错我犯了一个月：我把它盖在终端上。终端输出是会滚动的，宠物压在上面，我把报错行丢在一只像素猫后面了。放在不动的地方。'
        ],
        list: [
          '单屏放右下角，双屏放两块屏之间的缝',
          '1440p 下大约 90 到 120 像素高',
          '别压在会滚的窗格上：终端、日志尾、测试输出',
          '调色板跟编辑器主题对齐，见 /blog/custom-color-palettes-codex-pet'
        ]
      },
      {
        heading: '能撑过糟糕一周的工作区',
        paragraphs: [
          '工作区灵感帖展示的是布置当天的桌子。值得问的问题是：经历了一周的合并冲突之后，同一张桌子长什么样。',
          '我的三条规矩就是从这里出来的。需要每天打理的，删。只在截图里好看的，删。要切一次上下文才读得到的，挪出屏幕。',
          '剩下的部分很无聊：一个主色，一种等宽字体，一个会动的元素。/blog/pixel-pet-design-balance 讲的是「好看」和「有用」为什么会互相打架，而那个平衡点比多数人猜的更靠近有用这一边。'
        ],
        list: [
          '一个主色，只用在编辑器边框，别处不用',
          '一个会动的元素，这样「动」才仍然有意义',
          '字体一次设好，然后一个季度都别碰',
          '壁纸张度要暗到白字不加阴影也能读'
        ]
      },
      {
        heading: '用 30 分钟重做你的编码桌面',
        paragraphs: [
          '这是我用的顺序，而且故意做得很短。一次要花一下午的桌面整理，最后不是工作区，变成爱好了。',
          '放在晚上做。你能从一张桌子身上学到的东西，有一半只在关灯之后才显出来。'
        ],
        list: [
          '第 0 到 5 分钟：挑主色，在编辑器和终端里各设一次',
          '第 5 到 15 分钟：摆好宠物，往后退一米，检查状态变化看得清',
          '第 15 到 25 分钟：删掉所有需要你喂数据的挂件',
          '第 25 到 30 分钟：关灯截一张图，把消失的东西修回来'
        ]
      },
      {
        heading: '接下来',
        paragraphs: [
          '去 codexpetgenerator.com 生成一只，在动别的之前先把它摆好。宠物是会反应的那一个，所以它能告诉你这张桌子其余部分值不值得留。',
          '平衡问题在 /blog/pixel-pet-design-balance，几何在 /blog/dual-monitor-pet-placement，配色在 /blog/custom-color-palettes-codex-pet。其余从 /blog 进去。'
        ]
      }
    ]
  },
  {
    slug: 'halloween-pet-skins-collection',
    title: 'Halloween Pet Skins: Five Ideas That Still Look Like Your Pet',
    description:
      'A Halloween pixel pet that works keeps its silhouette and changes its palette. Five costume ideas tested at the 192x208 cell size, the contrast trap that makes dark skins vanish on a dark theme, and how to swap the skin without breaking pet.json.',
    date: '2026-10-22',
    author: 'PetGen',
    keywords: [
      'halloween pixel pet',
      'spooky pet skin',
      'halloween codex pet',
      'costume pixel art',
      'pumpkin pixel pet',
      'codex pet skins',
      'pixel pet halloween palette'
    ],
    related: [
      'custom-color-palettes-codex-pet',
      'pixel-pet-personality',
      'hand-drawn-vs-ai-pixel-pets',
      'codex-pet-showcase'
    ],
    faq: [
      {
        question: 'Can I put a Halloween skin on a pet I already installed?',
        answer: 'Yes. Replace spritesheet.webp using the same file name and the same cell grid, and pet.json does not need to change, because it only points at the path and the frame count. Back the folder up first; the steps are at /blog/backup-codex-pets-guide.'
      },
      {
        question: 'Will a dark spooky skin disappear on a dark theme?',
        answer: 'It can, and mine did. Fix it with one light accent that holds on both light and dark backgrounds rather than by lightening the whole pet, which washes out the pixel look entirely.'
      },
      {
        question: 'Is it fine to dress my pet as a character from a film?',
        answer: 'Keep it to generic costumes. A recognisable character pulls in someone else\'s design, and where that line sits is written up at /blog/celebrity-pet-copyright-guidelines.'
      },
      {
        question: 'Do holiday skins make the animation slower?',
        answer: 'No. Frame count and cell size stay identical, so the animation cost is the same. File size moves a little with palette complexity and that is the whole difference.'
      }
    ],
    howTo: {
      name: 'Put a Halloween skin on an installed Codex pet',
      steps: [
        'Copy the whole pet folder to a backup location',
        'Replace spritesheet.webp, keeping the same file name and cell grid',
        'Leave pet.json alone if the path did not change',
        'Reload Codex and check all nine states, not just idle'
      ]
    },
    sections: [
      {
        heading: 'What makes a Halloween pixel pet work',
        paragraphs: [
          'A Halloween pixel pet lives in a 1536x1872 spritesheet, nine states by eight frames, which works out at roughly 192x208 pixels per cell. That is the whole animal plus a hat, in a space where a hat brim is maybe six pixels tall.',
          'Most costume art is drawn at 512 and falls apart here. Two rules got me through five ideas: keep the silhouette your pet already has, and change the palette instead of the shape.',
          'The reason is size, not taste. Details you can describe in words, like a stitch line on a cloak, are one pixel wide at this scale and read as noise.'
        ],
        list: [
          'Keep the existing silhouette; skip the full body costume',
          'Change four to six palette colours, not the outline',
          'One prop, and it has to sit above the head',
          'Judge it at 100 percent zoom, not at 400 percent'
        ]
      },
      {
        heading: 'Five spooky pet skins that read at small sizes',
        paragraphs: [
          'These are the five that survived being generated and put on a real desk, in the order I would try them.',
          'The lantern one is my favourite and the least obvious: no costume at all, just a warm rim light along one edge of the pet.'
        ],
        list: [
          'Pumpkin: orange body wash, dark stem, two triangle eyes',
          'Ghost sheet: near white body, two dark eye pixels, everything else untouched',
          'Witch hat: one cone above the ears with a two row brim',
          'Vampire collar: a red band at the neck with a single highlight pixel',
          'Lantern glow: no costume, warm rim light along one edge'
        ]
      },
      {
        heading: 'The contrast trap that makes spooky skins vanish',
        paragraphs: [
          'Dark purple and near black are the default Halloween palette and the worst possible choice on a dark editor theme. My first attempt was a black cat in a black hat over a black terminal, which is a pet you can only see when it moves.',
          'Test it by flipping your editor theme to light for one session. If the pet disappears there as well, the palette has no mid tone holding it together.',
          'Palette editing is at /blog/custom-color-palettes-codex-pet. What you want is one light accent, somewhere around 20 percent of the pixels, that survives on both backgrounds.'
        ],
        list: [
          'Keep one light accent that reads on dark and light backgrounds',
          'Avoid near black outlines over a near black wallpaper',
          'Test once with the editor in light mode before you commit',
          'If the pet only shows when it moves, the palette is wrong'
        ]
      },
      {
        heading: 'Swapping the skin without breaking pet.json',
        paragraphs: [
          'You do not need to edit pet.json if the file name and the frame count stay the same. Most of the install breakage I see comes from people renaming the spritesheet and leaving the old path in the JSON.',
          'Order matters: back up first, then replace, then reload. Backing up is at /blog/backup-codex-pets-guide and takes about thirty seconds.'
        ],
        list: [
          'Copy the whole pet folder to a backup location first',
          'Replace spritesheet.webp, keeping the same file name and cell grid',
          'Leave pet.json alone if the path did not change',
          'Reload Codex and check all nine states, not just idle'
        ]
      },
      {
        heading: 'What to do with this',
        paragraphs: [
          'Make one at codexpetgenerator.com from a photo you already like, then do the palette pass instead of regenerating. Regenerating changes the pet; a palette change keeps it.',
          'Persona work that pairs well with a costume is at /blog/pixel-pet-personality, and whether to draw the costume by hand instead is at /blog/hand-drawn-vs-ai-pixel-pets. The rest is at /blog.'
        ]
      }
    ]
  },
  {
    slug: 'halloween-pet-skins-collection-zh',
    title: '万圣节宠物皮肤：五个仍然像你那只的做法',
    description:
      '能用的万圣节像素宠物皮肤保留轮廓、只换配色。五个在 192x208 单元格尺寸下试过的装扮思路、让深色皮肤在深色主题里消失的对比度陷阱，以及不弄坏 pet.json 的换肤步骤。',
    date: '2026-10-22',
    author: 'PetGen',
    keywords: [
      '万圣节像素宠物',
      '万圣节宠物皮肤',
      '宠物装扮像素画',
      'codex pet 皮肤',
      '南瓜像素宠物',
      '像素宠物换色',
      '桌面宠物节日皮肤'
    ],
    related: [
      'custom-color-palettes-codex-pet',
      'pixel-pet-personality',
      'hand-drawn-vs-ai-pixel-pets',
      'codex-pet-showcase'
    ],
    faq: [
      {
        question: '已经装好的宠物能换万圣节皮肤吗？',
        answer: '能。用同样的文件名和同样的单元格网格替换 spritesheet.webp，pet.json 就不用改，因为它只指向路径和帧数。先备份整个文件夹，步骤在 /blog/backup-codex-pets-guide。'
      },
      {
        question: '深色皮肤会不会在深色主题里消失？',
        answer: '会，我的第一版就没了。用一个在深浅两种背景上都立得住的亮色点缀来修，不要把整只调亮，那样像素味就没了。'
      },
      {
        question: '把宠物打扮成电影里的角色可以吗？',
        answer: '只用通用装扮就好。一个有辨识度的角色等于把别人的设计拿进来，这条线画在哪写在 /blog/celebrity-pet-copyright-guidelines。'
      },
      {
        question: '节日皮肤会让动画变慢吗？',
        answer: '不会。帧数和单元格尺寸都没变，动画开销完全一样。文件大小会随配色复杂度动一点，就这点差别。'
      }
    ],
    howTo: {
      name: '给已安装的 Codex 宠物换上万圣节皮肤',
      steps: [
        '先把整个宠物文件夹复制到备份位置',
        '替换 spritesheet.webp，保持文件名和单元格网格不变',
        '路径没变就别动 pet.json',
        '重载 Codex，检查全部九个状态，而不只是待机'
      ]
    },
    sections: [
      {
        heading: '什么样的万圣节像素宠物才算成立',
        paragraphs: [
          '一只万圣节像素宠物活在 1536x1872 的精灵图里，九个状态乘八帧，算下来每个单元格大约 192x208 像素。整只动物加一顶帽子都在这块地方，而帽檐大概只有六个像素高。',
          '多数装扮画是在 512 尺寸画的，到这里就散了。让我把五个思路做完的是两条规矩：保留你这只宠物本来就有的轮廓，改配色，不改形状。',
          '原因是尺寸，不是审美。那些你能用话描述出来的细节，比如斗篷上的一道缝线，在这个尺度上只有一个像素宽，读起来就是噪点。'
        ],
        list: [
          '保留原有轮廓，别做全身戏服',
          '改四到六个配色，不动描边',
          '道具只留一个，而且必须落在头顶上方',
          '在 100% 缩放上判断，别在 400% 上判断'
        ]
      },
      {
        heading: '五个在小尺寸下仍读得出的皮肤',
        paragraphs: [
          '这五个是生成出来、真放到桌上之后活下来的，按我会尝试的顺序排。',
          '灯笼那个是我的最爱，也最不显眼：完全不加装扮，只在宠物一侧加一道暖色轮廓光。'
        ],
        list: [
          '南瓜：橙色铺身，深色瓜蒂，两个三角形眼睛',
          '幽灵床单：近白色身体，两个深色眼睛像素，其余不动',
          '巫师帽：耳朵上方一个锥体，帽檐压到两行',
          '吸血鬼领子：脖子上一圈红色，加一个高光像素',
          '灯笼光：不加装扮，单侧暖色轮廓光'
        ]
      },
      {
        heading: '让节日皮肤消失的对比度陷阱',
        paragraphs: [
          '深紫和近黑是万圣节默认配色，也是深色编辑器主题上最糟的选择。我的第一版是黑猫戴黑帽压在黑终端上，那是一只只有在动的时候才看得见的宠物。',
          '把编辑器主题切到浅色跑一个会话就能测出来。如果浅色下它也消失了，说明这套配色没有一个中间调在撑着。',
          '改配色的方法在 /blog/custom-color-palettes-codex-pet。你要的是一个亮色点缀，大概占两成像素，在两种背景下都立得住。'
        ],
        list: [
          '留一个在深浅背景上都读得出的亮色点缀',
          '别让近黑描边压在近黑壁纸上',
          '定稿前用浅色模式测一次',
          '如果宠物只有动的时候才看得见，那就是配色错了'
        ]
      },
      {
        heading: '换肤但不弄坏 pet.json',
        paragraphs: [
          '文件名和帧数不变的话，pet.json 根本不用改。我见到的安装翻车，多数是把精灵图改了名，JSON 里还留着旧路径。',
          '顺序有讲究：先备份，再替换，最后重载。备份方法在 /blog/backup-codex-pets-guide，大概三十秒。'
        ],
        list: [
          '先把整个宠物文件夹复制到备份位置',
          '替换 spritesheet.webp，保持文件名和单元格网格不变',
          '路径没变就别动 pet.json',
          '重载 Codex，检查全部九个状态，而不只是待机'
        ]
      },
      {
        heading: '接下来',
        paragraphs: [
          '去 codexpetgenerator.com 用一张你本来就喜欢的照片做一只，然后做配色那一步，别重新生成。重新生成会把宠物换掉，改配色则保留它。',
          '跟装扮很搭的人设工作在 /blog/pixel-pet-personality，要不要干脆手画装扮在 /blog/hand-drawn-vs-ai-pixel-pets。其余从 /blog 进去。'
        ]
      }
    ]
  },
  {
    slug: 'shopping-festival-pet-skins',
    title: 'Shopping Festival Pet Skins: Three That Hold at 192x208',
    description:
      'A shopping festival pet usually ends up as a red blob under a gold hat. Three festive pet skins built for the 192x208 spritesheet cell instead, the color trap that hides them on a warm wallpaper, and the swap steps that leave pet.json untouched.',
    date: '2026-10-28',
    author: 'PetGen',
    keywords: [
      'shopping festival pet',
      'festive pet',
      'shopping season pixel art',
      'fun pet skins',
      'pixel pet holiday skin',
      'codex pet skins',
      'pixel pet palette swap',
      'seasonal codex pet'
    ],
    related: [
      'halloween-pet-skins-collection',
      'custom-color-palettes-codex-pet',
      'pixel-pet-personality',
      'backup-codex-pets-guide'
    ],
    faq: [
      {
        question: 'Can I put a shopping festival skin on a pet I already installed?',
        answer: 'Yes. Replace spritesheet.webp using the same file name and the same cell grid, and pet.json does not need to change. Back the folder up first; the steps are at /blog/backup-codex-pets-guide.'
      },
      {
        question: 'Will a red pet disappear on a warm wallpaper?',
        answer: 'It can. Fix it with one light accent that holds on both warm and cool backgrounds rather than by lightening the whole pet, which washes the pixel look out entirely.'
      },
      {
        question: 'Do seasonal skins slow the animation down?',
        answer: 'No. Frame count and cell size stay identical, so the animation cost is unchanged. File size moves a little with palette complexity and that is the whole difference.'
      },
      {
        question: 'Is it fine to put a real brand logo on my pet?',
        answer: 'Keep it to generic shapes. A recognisable logo pulls in someone else\'s design, and where that line sits is written up at /blog/celebrity-pet-copyright-guidelines.'
      }
    ],
    howTo: {
      name: 'Put a shopping festival skin on an installed Codex pet',
      steps: [
        'Copy the whole pet folder to a backup location',
        'Replace spritesheet.webp, keeping the same file name and cell grid',
        'Leave pet.json alone if the path did not change',
        'Reload Codex and check all nine states, not just idle'
      ]
    },
    sections: [
      {
        heading: 'What a shopping festival pet is up against',
        paragraphs: [
          'A shopping festival pet sounds easy until you try it. Every November someone recolors their pixel pet red, adds a gold hat, and wonders why it now reads as a notification badge. The reason is the grid. A Codex pet lives in a 1536x1872 spritesheet, nine states by eight frames, which puts each cell at roughly 192x208 pixels.',
          'On a canvas that small, saturated red fills most of the body and gold reads as two muddy rows. I have made that mistake three years running, and a narrower palette fixes it faster than a smarter costume does.'
        ]
        ,
        list: [
          'Two accent colors beat a full recolour',
          'Metallic gold does not exist at this size, so use a light ochre',
          'Keep the silhouette, or it stops looking like your pet',
          'Judge it at 100 percent zoom on your real wallpaper'
        ]
      },
      {
        heading: 'Three shopping season pixel art skins that hold up',
        paragraphs: [
          'These are the three I would build first, in the order I would try them. Each one changes four or five palette entries and nothing else.',
          'The cart is the one people notice. It is a two-tone basket hung off one flank, and it moves with the walk cycle because it sits inside the silhouette rather than on top of it.'
        ]
        ,
        list: [
          'Delivery box: kraft brown body, two tape pixels, one label highlight',
          'Full cart: a two-tone basket on the flank, handles two pixels wide',
          'Coupon ribbon: one diagonal band across the chest, two colors total'
        ]
      },
      {
        heading: 'The color trap that hides festive pet skins',
        paragraphs: [
          'Sales season art is red on red, and the wallpapers people switch to in November tend to be warm as well. A red pet on a warm background has no edge, and at 192 pixels wide the edge is most of the drawing.',
          'Test it the boring way: switch your editor to light mode and take a screenshot. If you have to hunt for the pet, the palette is the problem, not the costume.',
          'Palette editing is at /blog/custom-color-palettes-codex-pet. What you want is one light accent, somewhere around 20 percent of the pixels, that survives on a warm and a cool background alike.'
        ]
        ,
        list: [
          'Keep one accent that reads on warm and cool backgrounds',
          'Skip pure red, since a desaturated brick reads better at this size',
          'Do not outline a dark pet in an even darker color',
          'Test on the wallpaper you actually use, not the theme preview'
        ]
      },
      {
        heading: 'Swapping the skin without breaking pet.json',
        paragraphs: [
          'You do not need to edit pet.json while the file name and the frame count stay the same. Most of the install breakage I see comes from renaming the spritesheet and leaving the old path in the JSON.',
          'Order matters: back up, then replace, then reload. Backing up is at /blog/backup-codex-pets-guide and takes about thirty seconds.'
        ]
        ,
        list: [
          'Copy the whole pet folder to a backup location first',
          'Replace spritesheet.webp, keeping the same file name and cell grid',
          'Leave pet.json alone if the path did not change',
          'Reload Codex and check all nine states, not just idle'
        ]
      },
      {
        heading: 'What to do with this',
        paragraphs: [
          'Make one at codexpetgenerator.com from a photo you already like, then do the palette pass instead of regenerating. Regenerating changes the pet, while a palette pass keeps it.',
          'Whether to draw the ribbon by hand instead is argued at /blog/hand-drawn-vs-ai-pixel-pets, and persona work that pairs well with a shopping theme is at /blog/pixel-pet-personality. Last month\'s costume set is at /blog/halloween-pet-skins-collection, and the rest is at /blog.'
        ]
      }
    ]
  },
  {
    slug: 'shopping-festival-pet-skins-zh',
    title: '购物节宠物皮肤：三个在 192x208 网格里还站得住的做法',
    description:
      '购物节像素宠物做出来通常是一团红加一顶金帽子。换成三个按 192x208 精灵图单元格做的节日皮肤、让它们在暖色壁纸上消失的配色陷阱，以及不动 pet.json 的换肤步骤。',
    date: '2026-10-28',
    author: 'PetGen',
    keywords: [
      '购物节像素宠物',
      '节日宠物皮肤',
      '购物季像素画',
      'fun pet skins',
      '像素宠物节日皮肤',
      'codex pet 皮肤',
      '像素宠物换色',
      '季节性桌面宠物'
    ],
    related: [
      'halloween-pet-skins-collection',
      'custom-color-palettes-codex-pet',
      'pixel-pet-personality',
      'backup-codex-pets-guide'
    ],
    faq: [
      {
        question: '已经装好的宠物能换购物节皮肤吗？',
        answer: '能。用同样的文件名和同样的单元格网格替换 spritesheet.webp，pet.json 就不用改。先备份整个文件夹，步骤在 /blog/backup-codex-pets-guide。'
      },
      {
        question: '红色宠物会不会在暖色壁纸上消失？',
        answer: '会。用一个在冷暖两种背景上都立得住的亮色点缀来修，别把整只调亮，那样像素味就没了。'
      },
      {
        question: '节日皮肤会让动画变慢吗？',
        answer: '不会。帧数和单元格尺寸都没变，动画开销完全一样。文件大小会随配色复杂度动一点，就这点差别。'
      },
      {
        question: '可以把真实品牌 logo 放到宠物上吗？',
        answer: '只用通用形状就好。一个有辨识度的 logo 等于把别人的设计拿进来，这条线画在哪写在 /blog/celebrity-pet-copyright-guidelines。'
      }
    ],
    howTo: {
      name: '给已安装的 Codex 宠物换上购物节皮肤',
      steps: [
        '先把整个宠物文件夹复制到备份位置',
        '替换 spritesheet.webp，保持文件名和单元格网格不变',
        '路径没变就别动 pet.json',
        '重载 Codex，检查全部九个状态，而不只是待机'
      ]
    },
    sections: [
      {
        heading: '购物节宠物皮肤到底难在哪',
        paragraphs: [
          '购物节像素宠物听着简单，做起来不是。每年十一月都有人把宠物整只刷成红色、加一顶金帽子，然后发现它看起来像个未读角标。原因在网格上：一只 Codex 宠物活在 1536x1872 的精灵图里，九个状态乘八帧，算下来每个单元格大约 192x208 像素。',
          '在这么小的画布上，高饱和的红会铺满整个身体，金色则变成两行糊掉的东西。这个错我连着犯了三年，收窄配色比想出更聪明的戏服管用得多。'
        ]
        ,
        list: [
          '两个点缀色胜过整只换色',
          '这个尺寸里没有金属金，用浅赭色代替',
          '保住轮廓，不然就不像你那只宠物了',
          '在 100% 缩放和真实壁纸上判断'
        ]
      },
      {
        heading: '三个在小尺寸下仍站得住的皮肤',
        paragraphs: [
          '下面三个是我会先做的，按尝试顺序排。每个只改四到五个配色，别的都不动。',
          '购物车那个最容易被注意到。它是挂在侧腹的一个双色篮子，因为是长在轮廓里面而不是贴在轮廓上面，它会跟着走路循环一起动。'
        ]
        ,
        list: [
          '快递箱：牛皮纸色铺身，两个胶带像素，一个面单高光',
          '满载购物车：侧腹一个双色篮子，提手两像素宽',
          '优惠券飘带：胸前一条斜向色带，总共只用两个颜色'
        ]
      },
      {
        heading: '让节日皮肤消失的配色陷阱',
        paragraphs: [
          '大促视觉是红压红，而大家在十一月换上的壁纸也多半偏暖。红宠物压在暖背景上没有边缘线，而在 192 像素宽的地方，边缘线几乎就是整张画。',
          '用最笨的办法测：把编辑器切到浅色模式截一张图。如果你得找一下才看到宠物，问题在配色，不在戏服。',
          '改配色的方法在 /blog/custom-color-palettes-codex-pet。你要的是一个亮色点缀，大概占两成像素，在冷暖两种背景下都立得住。'
        ]
        ,
        list: [
          '留一个在冷暖背景上都读得出的点缀色',
          '别用纯红，这个尺寸下降饱和的砖红更清楚',
          '别给深色宠物描一圈更深的边',
          '在你真在用的壁纸上测，别在主题预览上测'
        ]
      },
      {
        heading: '换肤但不弄坏 pet.json',
        paragraphs: [
          '文件名和帧数不变的话，pet.json 根本不用改。我见到的安装翻车，多数是把精灵图改了名，JSON 里还留着旧路径。',
          '顺序有讲究：先备份，再替换，最后重载。备份方法在 /blog/backup-codex-pets-guide，大概三十秒。'
        ]
        ,
        list: [
          '先把整个宠物文件夹复制到备份位置',
          '替换 spritesheet.webp，保持文件名和单元格网格不变',
          '路径没变就别动 pet.json',
          '重载 Codex，检查全部九个状态，而不只是待机'
        ]
      },
      {
        heading: '接下来',
        paragraphs: [
          '去 codexpetgenerator.com 用一张你本来就喜欢的照片做一只，然后做配色那一步，别重新生成。重新生成会把宠物换掉，改配色则保留它。',
          '要不要干脆手画那条飘带，这个争论在 /blog/hand-drawn-vs-ai-pixel-pets；跟大促主题很搭的人设工作在 /blog/pixel-pet-personality。上个月的装扮合集在 /blog/halloween-pet-skins-collection，其余从 /blog 进去。'
        ]
      }
    ]
  },
  {
    slug: 'is-the-pet-generator-private',
    title: 'Is the Pet Generator Private? What Happens to Your Photo',
    description:
      'A pixel pet starts with a photo leaving your machine, so the question is fair. Where the upload goes, how long it stays, what gets stripped from it, and the route for people who would rather not upload at all.',
    date: '2026-10-27',
    author: 'PetGen',
    keywords: [
      'pixel pet privacy',
      'pet photo privacy',
      'upload security pixel pet',
      'does generator store photos',
      'codex pet privacy',
      'is the pet generator private',
      'pixel pet photo upload',
      'desktop pet data handling'
    ],
    related: [
      'codex-pets-folder-structure',
      'backup-codex-pets-guide',
      'hide-codex-pet-screen-share',
      'best-photos-for-pixel-pet-generator'
    ],
    faq: [
      {
        question: 'Does the pet generator store my photo?',
        answer: 'It holds the file for the generation job and deletes it on a 24 hour timer. No account is attached to the upload, so nothing on our side links the photo back to you.'
      },
      {
        question: 'Can I make a pixel pet without uploading anything?',
        answer: 'Not with the generator, because the pixel conversion runs on a server. You can crop hard and strip the location data first, which is what I do.'
      },
      {
        question: 'Is my pet photo used to train a model?',
        answer: 'No. One upload produces one spritesheet and then the file is gone. There is no training queue behind it and no account to collect uploads under.'
      },
      {
        question: 'Does the finished pet send anything back?',
        answer: 'No. Once the folder is on your machine it is a local file. The animation is nine states of frames inside a WebP, and nothing in it makes a network call.'
      }
    ],
    howTo: {
      name: 'Upload a photo for a pixel pet without leaking location data',
      steps: [
        'Crop the photo down to the animal before you upload it',
        'Strip the EXIF block, including the GPS coordinate',
        'Upload the crop and wait for the nine state spritesheet',
        'Delete the pet folder afterwards if you were only testing'
      ]
    },
    sections: [
      {
        heading: 'What actually leaves your machine',
        paragraphs: [
          'Every photo you hand to a pet generator gets uploaded, because the pixel conversion runs on a server. People ask about that constantly and it is a fair question. The part that matters is what happens next.',
          'The file goes over TLS, sits in a job queue while the spritesheet is built, and is deleted on a 24 hour timer. No account is attached to the upload, so there is nothing on our side that ties the photo back to a person.'
        ]
        ,
        list: [
          'Transport is TLS, the same as any form post',
          'The file waits in a job queue, not a storage bucket',
          'Deletion is a 24 hour timer, not a manual review',
          'No account means no profile to attach the photo to'
        ]
      },
      {
        heading: 'The parts I would still be careful about',
        paragraphs: [
          'I would not upload a photo with a child in it, and not because of us. Any upload to any service is a copy you no longer control, and a 24 hour timer still leaves 24 hours.',
          'The other one is metadata. Most phone photos carry a GPS coordinate in the EXIF block. We strip it before generation, and I strip it myself on the phone anyway, because I would rather it never leave.'
        ]
        ,
        list: [
          'Skip photos with children or documents in frame',
          'Strip location data before the upload, not after',
          'Use a crop, since the generator only needs the subject',
          'If a photo has to stay private, do not upload it'
        ]
      },
      {
        heading: 'How to check it yourself',
        paragraphs: [
          'You do not have to take my word for any of this. Open the network tab in your browser, start an upload, and watch the requests go out. You will see one POST carrying the image and nothing that looks like a profile call.',
          'Doing this once with a throwaway image is worth the two minutes. It also tells you what every other upload tool on your machine is doing, which is the part nobody checks.'
        ]
        ,
        list: [
          'Open the network tab, then upload a throwaway image',
          'Confirm a single image POST and no analytics call on it',
          'Delete the pet afterwards if you were only testing',
          'Run the same check on the next upload tool you install'
        ]
      },
      {
        heading: 'Keeping the result private on your own machine',
        paragraphs: [
          'Once the pet is built, the privacy question moves to your machine, and that part is entirely yours. A Codex pet lives in ~/.codex/pets on macOS and %USERPROFILE%\\.codex\\pets on Windows, and nothing in that folder talks to the network.',
          'The generated spritesheet is a local file. The nine animation states are frames inside a WebP, and the folder makes no outbound calls at all.'
        ]
        ,
        list: [
          'The pet folder is local and makes no network calls',
          'Sharing a pet means sharing the folder, which stays your choice',
          'Backups you make are yours, and we hold no copy',
          'Deleting the folder removes every trace on that machine'
        ]
      },
      {
        heading: 'What to do with this',
        paragraphs: [
          'Make one at codexpetgenerator.com from a photo you are comfortable uploading, then keep the folder local. The folder layout is explained at /blog/codex-pets-folder-structure, and the backup steps are at /blog/backup-codex-pets-guide.',
          'If you want the pet to disappear during screen shares, that switch is at /blog/hide-codex-pet-screen-share, and picking a photo that converts well is at /blog/best-photos-for-pixel-pet-generator. The rest is at /blog.'
        ]
      }
    ]
  },
  {
    slug: 'is-the-pet-generator-private-zh',
    title: '宠物生成器隐私吗？你的照片会被怎么处理',
    description:
      '做像素宠物得先把照片传出去，所以这个问题问得对。这篇说清楚上传去哪、留多久、哪些信息会被剥掉，以及完全不想上传的人还能怎么走。',
    date: '2026-10-27',
    author: 'PetGen',
    keywords: [
      '像素宠物隐私',
      '宠物照片隐私',
      '上传安全 像素宠物',
      '生成器会存照片吗',
      'codex pet 隐私',
      '像素宠物上传',
      '桌面宠物数据处理',
      '本地宠物文件'
    ],
    related: [
      'codex-pets-folder-structure',
      'backup-codex-pets-guide',
      'hide-codex-pet-screen-share',
      'best-photos-for-pixel-pet-generator'
    ],
    faq: [
      {
        question: '宠物生成器会存我的照片吗？',
        answer: '它在生成任务期间保留文件，然后按 24 小时定时删除。上传不绑定任何账号，所以我们这边没有任何东西能把照片和人对应起来。'
      },
      {
        question: '完全不上传能做出像素宠物吗？',
        answer: '用生成器不行，因为像素转换跑在服务器上。可以先狠裁剪、再剥掉位置信息，我自己就是这么做的。'
      },
      {
        question: '我的宠物照片会被拿去训练模型吗？',
        answer: '不会。一次上传产出一张精灵图，然后文件就没了。后面没有训练队列，也没有账号可以把上传攒起来。'
      },
      {
        question: '做好的宠物会往回发东西吗？',
        answer: '不会。文件夹落到你机器上之后就是本地文件。动画是 WebP 里的九个状态帧，整个文件夹一个出站请求都不发。'
      }
    ],
    howTo: {
      name: '上传照片做像素宠物，但不泄露位置信息',
      steps: [
        '先把照片裁到只剩那只动物',
        '剥掉 EXIF 块，含 GPS 坐标',
        '上传裁剪后的文件，等九个状态的精灵图',
        '只是测试的话，用完就把宠物文件夹删掉'
      ]
    },
    sections: [
      {
        heading: '到底什么东西离开了你的机器',
        paragraphs: [
          '你交给宠物生成器的每张照片都会被上传，因为像素转换跑在服务器上。这件事被问得很多，问得也对。真正要紧的是接下来发生什么。',
          '文件走 TLS 出去，在生成精灵图的这段时间里待在任务队列里，然后按 24 小时定时删除。上传不绑定账号，所以我们这边没有任何东西能把这张照片和一个人对应起来。'
        ]
        ,
        list: [
          '传输是 TLS，跟任何表单提交一样',
          '文件待在任务队列，不在存储桶里',
          '删除是 24 小时定时器，不是人工审核',
          '没有账号，就没有可挂照片的档案'
        ]
      },
      {
        heading: '换成我自己仍然会小心的部分',
        paragraphs: [
          '我不会上传有小孩入镜的照片，原因不在我们这边。往任何服务上传任何东西，都是一份你不再掌握的副本，24 小时定时器也还是留出 24 小时。',
          '另一样是元数据。多数手机照片的 EXIF 块里都带 GPS 坐标。我们在生成前会剥掉它，而我在手机上还会自己再剥一次，因为我更希望它根本没出去过。'
        ]
        ,
        list: [
          '有小孩或证件入镜的照片别传',
          '位置信息在上传前剥掉，别等上传后',
          '用裁剪图，生成器只需要主体',
          '必须保密的照片，就不要上传'
        ]
      },
      {
        heading: '怎么自己验证一遍',
        paragraphs: [
          '这些你都不必信我。打开浏览器的网络面板，发起一次上传，看着请求出去就行。你会看到一条带着图片的 POST，没有任何像拿用户资料的请求。',
          '拿一张用完就扔的图做一次，值那两分钟。它顺便还能告诉你机器上别的上传工具在干什么，而这一部分通常没人查。'
        ]
        ,
        list: [
          '打开网络面板，上传一张用完就扔的图',
          '确认只有一条图片 POST，没有挂在上面的分析请求',
          '只是测试的话，用完就把宠物删掉',
          '下一个装的上传工具，也照这个查一遍'
        ]
      },
      {
        heading: '让做好的宠物只留在你自己机器上',
        paragraphs: [
          '宠物做出来之后，隐私问题就转到你的机器上，而这一部分完全是你的。Codex 宠物在 macOS 上放在 ~/.codex/pets，在 Windows 上放在 %USERPROFILE%\\.codex\\pets，这个文件夹里没有任何东西会联网。',
          '生成的精灵图是一个本地文件。九个动画状态就是 WebP 里的帧，整个文件夹一个出站请求都不发。'
        ]
        ,
        list: [
          '宠物文件夹是本地的，不发网络请求',
          '分享宠物等于分享文件夹，这仍然由你决定',
          '你自己做的备份归你，我们不留存副本',
          '删掉文件夹，那台机器上就不留痕迹'
        ]
      },
      {
        heading: '接下来',
        paragraphs: [
          '去 codexpetgenerator.com 用一张你愿意上传的照片做一只，然后把文件夹留在本地。文件夹结构说明在 /blog/codex-pets-folder-structure，备份步骤在 /blog/backup-codex-pets-guide。',
          '想让宠物在屏幕共享时消失，开关在 /blog/hide-codex-pet-screen-share；怎么挑一张转换效果好的照片在 /blog/best-photos-for-pixel-pet-generator。其余从 /blog 进去。'
        ]
      }
    ]
  },
  {
    slug: 'codex-pet-faq',
    title: 'Codex Pet FAQ: The Ten Questions Readers Ask Most',
    description:
      'This codex pet FAQ collects the questions that arrive every month: which image formats load, why a pet vanishes after an update, and what happens to the photo you upload.',
    date: '2026-10-29',
    author: 'PetGen',
    keywords: [
      'codex pet faq',
      'codex pet questions',
      'reader qa',
      'pet troubleshooting faq',
      'Codex pet常见问题',
      'pet troubleshooting guide',
      'pixel pet questions',
      'Codex desktop pet support',
      'pet generator questions'
    ],
    related: [
      'codex-pet-image-formats-jpg-png-webp',
      'installation-troubleshooting',
      'is-the-pet-generator-private',
      'backup-codex-pets-guide'
    ],
    faq: [
      {
        question: 'Does a Codex pet change how the model answers?',
        answer: 'No. The pet renders beside the conversation and touches nothing in the request path. Token counts are identical whether the pet is on or off.'
      },
      {
        question: 'Can I use one pet on two machines?',
        answer: 'Yes, by copying the pets folder across. There is no background sync, so that copy is the entire process. The steps are written up at /blog/backup-codex-pets-guide.'
      },
      {
        question: 'Why does my pet look blockier than the preview?',
        answer: 'Pixel pets sit on a small grid, so fine detail in the source photo collapses once it drops toward 64 pixels wide. A tighter crop around the animal fixes most of it.'
      },
      {
        question: 'How do I remove a pet completely?',
        answer: 'Delete its folder from the pets directory and reload the Codex desktop app. Nothing is held anywhere else, so there is no server side copy left to clean up.'
      }
    ],
    sections: [
      {
        heading: 'Codex pet questions about images and files',
        paragraphs: [
          'Every month the same twenty codex pet questions arrive, and about five of them carry most of the volume. This codex pet FAQ is that end-of-month pile, answered in one place instead of one reply at a time.',
          'Uploads sit at the top of the list, and the fix is nearly always the source photo rather than the generator. WebP is the format Codex loads. JPG and PNG upload fine and come back converted. A photo around 2000 pixels on the long edge gives a cleaner spritesheet than a full resolution phone shot, and cropping to the animal first does more than any setting after the fact.'
        ]
        ,
        list: [
          'WebP is what Codex loads; JPG and PNG upload fine',
          'Crop to the animal before you upload, not afterwards',
          'Around 2000 pixels on the long edge is plenty',
          'A spritesheet that refuses to play is usually a renamed file, not a broken conversion'
        ]
      },
      {
        heading: 'Pet troubleshooting FAQ: my pet stopped showing up',
        paragraphs: [
          'Three causes cover almost every invisible pet, and none of them is the pet file itself. A Codex desktop update moves the pets folder lookup path on a small share of installs. Hiding during screen share is on by default in some builds. And a pet whose WebP was swapped out by hand renders nothing at all, without throwing an error.',
          'Check them in that order. Two minutes spent here saves reinstalling the whole thing.'
        ]
        ,
        list: [
          'Turn off the screen share hiding toggle first, it catches more people than anything else',
          'Confirm the folder still sits under the pets directory on that machine',
          'Reinstall the pet rather than editing the WebP yourself',
          'If pets vanish after every update, keep your backup outside the app directory'
        ]
      },
      {
        heading: 'Privacy questions from the reader QA pile',
        paragraphs: [
          'Photo privacy is the second biggest thread. The upload travels over TLS, waits in a job queue while the spritesheet renders, and is deleted on a 24 hour timer. No account is attached to it. Once the folder lands on your machine, nothing inside it makes a network request.',
          'What I still refuse to do is upload anything with a recognizable child or a document in frame. Any upload to any service becomes a copy you no longer control, and 24 hours is still 24 hours.'
        ]
        ,
        list: [
          'Strip EXIF data yourself before the upload goes out',
          'Upload a crop rather than the original full frame',
          'Assume any upload exists somewhere else afterwards',
          'Skip photos you cannot afford to have copied'
        ]
      },
      {
        heading: 'Reader QA: how many pets should one machine carry',
        paragraphs: [
          'There is no hard limit, the pets folder is just a folder. Past four or five, people stop noticing the extras, and the animation frames start competing for attention whenever anything moves. Two is where most readers settle after experimenting.',
          'One thing worth knowing early: pet state is per machine. A pet you install at the office stays at the office until you copy the folder over, and that copy is the only sync mechanism that exists.'
        ]
        ,
        list: [
          'Two pets is where people land after trying more',
          'Each one adds nine animation states of frames to render',
          'Nothing syncs on its own, copying the folder is the whole story',
          'Old pets cost nothing to keep, they cost attention'
        ]
      },
      {
        heading: 'The odd ones worth keeping from this month',
        paragraphs: [
          'Two reader qa entries deserve a permanent home because the questions were better than my answers. Can you make a pet from a drawing instead of a photo? Yes, and flat color illustrations convert more cleanly than most photographs. Does the pet slow the model down? No, it draws beside the conversation and touches nothing in the request path.',
          'Can a pet react to failing builds? Not in a way I would trust yet. Custom state hooks exist, and almost nobody wires them up, myself included.'
        ]
        ,
        list: [
          'Drawings convert better than busy photographs',
          'The pet sits beside the model, not inside it',
          'Token usage does not move when a pet is on',
          'Custom state hooks exist and stay unused by nearly everyone'
        ]
      },
      {
        heading: 'Where to go next',
        paragraphs: [
          'Formats get their own side by side comparison at /blog/codex-pet-image-formats-jpg-png-webp, and the invisible pet walkthrough is at /blog/installation-troubleshooting. If the question was about your photo rather than the pet, that answer sits at /blog/is-the-pet-generator-private.',
          'The rest of the archive is at /blog. Month end answers like this one get pulled from whatever actually landed in the inbox, so if yours did not make the cut this time, send it again.'
        ]
      }
    ]
  },
  {
    slug: 'codex-pet-faq-zh',
    title: 'Codex 宠物 FAQ：读者每月都在问的十个问题',
    description:
      '这份 codex 宠物 FAQ 收的是每个月必到的十个问题：图片格式用哪个、宠物为什么不见了、上传的照片去哪了、一台机器养几只合适，逐条答了一遍。',
    date: '2026-10-29',
    author: 'PetGen',
    keywords: [
      'codex pet faq',
      'codex pet questions',
      'reader qa',
      'pet troubleshooting faq',
      'Codex 宠物常见问题',
      '像素宠物问答',
      '宠物排错',
      'Codex 桌面宠物答疑',
      '宠物生成器问题'
    ],
    related: [
      'codex-pet-image-formats-jpg-png-webp',
      'installation-troubleshooting',
      'is-the-pet-generator-private',
      'backup-codex-pets-guide'
    ],
    faq: [
      {
        question: '宠物会影响模型的回答吗？',
        answer: '不会。宠物画在对话旁边，不碰请求链路。开不开它，token 消耗是一样的。'
      },
      {
        question: '同一只宠物能在两台机器上用吗？',
        answer: '可以，把宠物文件夹复制过去就行。没有后台同步，这次复制就是全部操作。步骤写在 /blog/backup-codex-pets-guide。'
      },
      {
        question: '为什么做出来的宠物比预览糊？',
        answer: '像素宠物跑在小网格上，原图里的细节在缩到 64 像素左右时会塌掉。把裁剪收紧到动物身上，大部分问题就解决了。'
      },
      {
        question: '怎么彻底删掉一只宠物？',
        answer: '把它在宠物目录里的文件夹删掉，重启 Codex 桌面应用。其他地方没有留存副本，所以没有服务端残留要清理。'
      }
    ],
    sections: [
      {
        heading: '关于图片和文件的 codex 宠物问题',
        paragraphs: [
          '每个月都会到大约二十个重复的问题，其中五六个占了绝大部分。这份 codex 宠物 FAQ 就是把月底那摞邮件集中答一遍，而不是一封封回。',
          '排在最先的是上传，而问题几乎都出在原图身上，不在生成器。Codex 读的是 WebP，JPG 和 PNG 可以上传，转换后出来的就是 WebP。长边两千像素左右出图最干净，比手机原图直接丢上去强得多；上传前先把动物裁出来，比事后调任何参数都管用。'
        ]
        ,
        list: [
          'Codex 读 WebP，JPG 和 PNG 都能传',
          '先把动物裁出来再上传，别事后补',
          '长边两千像素上下就够用',
          '精灵图放不出来，多半是文件被改过名，不是转换坏了'
        ]
      },
      {
        heading: '宠物排错 FAQ：它怎么不见了',
        paragraphs: [
          '宠物不显示基本就三种原因，没有一种是宠物文件本身坏了。少数机器上，Codex 桌面端更新会把宠物目录的查找路径挪走；有些版本的屏幕共享自动隐藏是默认开的；还有一种是手动替换过 WebP 文件，结果什么都不显示，也不报错。',
          '按这个顺序查一遍，两分钟能省掉一次重装。'
        ]
        ,
        list: [
          '先关掉屏幕共享自动隐藏，栽在这上面的人最多',
          '确认文件夹还在那台机器的宠物目录里',
          '重装宠物，别自己编辑那个 WebP',
          '每次更新都掉的话，备份就别放在应用目录里'
        ]
      },
      {
        heading: '读者问答里的隐私问题',
        paragraphs: [
          '照片隐私是第二大块。上传走 TLS，在任务队列里等精灵图渲染完，然后按 24 小时定时删除，不挂任何账号。文件夹落到你机器上之后，里面没有任何东西会发网络请求。',
          '但有两类图我自己是坚决不传的：画面里有能认出来的小孩，或者有证件。任何服务、任何一次上传，都等于多了一份你控制不了的副本，而 24 小时仍然是 24 小时。'
        ]
        ,
        list: [
          '上传前自己先清掉 EXIF',
          '传裁剪图，别传完整原图',
          '默认传上去的东西在别处仍然存在',
          '复制出去会有风险的照片就别上传'
        ]
      },
      {
        heading: '读者问答：一台机器养几只合适',
        paragraphs: [
          '硬性上限没有，宠物目录就是个文件夹。但超过四五只之后，多出来的那些人自己都不会再看，而且只要有东西动，几张精灵图就开始互相抢注意力。折腾过一轮的人大多停在两只。',
          '还有一件早点知道比较好：宠物状态是按机器算的。公司机器上装的宠物就留在公司，除非你把文件夹复制过来，而这也就是唯一存在的同步方式。'
        ]
        ,
        list: [
          '试过一轮之后，大家多半停在两只',
          '每只都要多渲染九个动画状态的帧',
          '没有自动同步，复制文件夹就是全部',
          '留着旧宠物不花钱，花的是注意力'
        ]
      },
      {
        heading: '这个月值得一留的怪问题',
        paragraphs: [
          '有两三个读者问答我觉得应该留下来，因为问得比我的回答好。能不能用画代替照片做宠物？可以，而且平涂插画转出来的效果比大多数照片干净。宠物会不会拖慢模型？不会，它画在对话旁边，不碰请求链路。',
          '能不能让宠物对构建失败有反应？目前没有我信得过的方式。自定义状态钩子是有的，但几乎没人接，包括我。'
        ]
        ,
        list: [
          '平涂插画比杂乱照片转换效果好',
          '宠物在模型旁边，不在模型里面',
          '开着宠物，token 消耗不会变',
          '自定义状态钩子有，基本没人用'
        ]
      },
      {
        heading: '接下来',
        paragraphs: [
          '格式的横向对比在 /blog/codex-pet-image-formats-jpg-png-webp，宠物不显示的排查步骤在 /blog/installation-troubleshooting。如果你问的是照片而不是宠物，答案在 /blog/is-the-pet-generator-private。',
          '其余归档在 /blog。月底这类问答的选题直接从收件箱里捞，这次如果你的问题没被挑进来，下次再问一遍就好。'
        ]
      }
    ]
  },
  {
    slug: 'codex-pet-faq-october',
    title: 'October Codex Pet FAQ: Your Top 10 Pet Questions',
    description:
      'The October batch of codex pet questions answered in one place: upload size limits, why a pet resets after an update, two monitors at once, and what happens to your photo afterwards.',
    date: '2026-10-30',
    author: 'PetGen',
    keywords: [
      'codex pet faq',
      'codex pet questions',
      'reader qa',
      'pet troubleshooting faq',
      'Codex pet upload limit',
      'pixel pet after update',
      'Codex pet dual monitor',
      'pet generator support'
    ],
    related: [
      'codex-pet-upload-limit',
      'installation-troubleshooting',
      'is-the-pet-generator-private',
      'backup-codex-pets-guide'
    ],
    faq: [
      {
        question: 'Why does my pet reset after a Codex desktop update?',
        answer: 'The update replaces part of the application directory, and on a minority of installs the pets lookup path moves with it. The folder itself survives, so copy it back into the pets directory and fully restart the app once.'
      },
      {
        question: 'How large can an upload be before the generator refuses it?',
        answer: 'Files above roughly 12MB get turned away, which in practice means an uncompressed phone photo. Export a copy at about 2000 pixels on the long edge and it goes through without trouble.'
      },
      {
        question: 'Can I put a different pet on each monitor?',
        answer: 'No. One companion renders at a time and every window draws the same active pet. What you can tune is docking and placement, covered in the walkthrough at /blog/dual-monitor-pet-placement.'
      },
      {
        question: 'Where does my photo go after the spritesheet is made?',
        answer: 'It waits in the job queue while the render runs, then gets deleted on a 24 hour timer. No account is attached to the upload, and the full process is written out at /blog/is-the-pet-generator-private.'
      }
    ],
    sections: [
      {
        heading: 'Codex pet questions about upload limits',
        paragraphs: [
          'Every October batch of codex pet questions starts in the same place, which is why this codex pet FAQ opens with uploads. The generator accepts files up to about 12MB. Anything bigger is nearly always a straight export from a phone camera, where one frame can clear 8MB before you touch it. Resizing to roughly 2000 pixels on the long edge drops most files under 2MB, and at pet scale you cannot see the difference.',
          'Format behaves differently from size. WebP, JPG and PNG all upload. AVIF and HEIC come back rejected on some builds, and the failure message does not always say why. When an upload refuses three times, convert the file locally before hunting for anything more exotic.'
        ],
        list: [
          'Under 12MB uploads without complaint',
          'Around 2000 pixels on the long edge is the sweet spot',
          'WebP, JPG and PNG are all accepted',
          'Reject three times, convert locally and try once more'
        ]
      },
      {
        heading: 'Pet troubleshooting FAQ: the pet resets after an update',
        paragraphs: [
          'This one dominates the October inbox. A Codex desktop update replaces part of the application directory, and on a minority of installs the pets lookup path moves with it. The folder you built is still on disk. Copy it back into the pets directory, quit the app fully, then open it again.',
          'Where people lose pets for good is keeping the only copy inside that directory. Put the backup somewhere else entirely and an update turns into a two minute fix instead of starting over.'
        ],
        list: [
          'Your pet folder survives, the lookup path moves',
          'Copy it back, then quit and relaunch the app',
          'Keep the backup outside the app directory',
          'A missing pet rarely means a deleted pet'
        ]
      },
      {
        heading: 'Reader QA: two monitors, one pet',
        paragraphs: [
          'A reader qa thread that surfaced three separate times this month asked whether each monitor can hold a different pet. It cannot. One companion renders per window, and every window draws whichever companion is active. Move the window and the pet travels with it rather than staying on one screen.',
          'What you can change is placement behaviour. Several builds let you dock the pet to the left or right edge, which matters once your editor window and your terminal sit on different displays. The walkthrough is at /blog/dual-monitor-pet-placement.'
        ],
        list: [
          'One active companion across every window',
          'The pet travels with the window you move',
          'Edge docking depends on the Codex build',
          'Placement tuning beats adding more pets'
        ]
      },
      {
        heading: 'Reader QA on pets and the model behind them',
        paragraphs: [
          'Two entries in this month of reader mail ask whether a pet changes how the assistant behaves. It does not. The companion renders beside the conversation and never enters the request path, so token counts and replies stay identical whether the pet is switched on or off.',
          'The follow up asks whether a pet can react to a failing test run. Custom state hooks exist for exactly that, and across two years of reading this inbox I have met maybe three people who wired them up. Most readers pick one pet and leave it alone, which is a reasonable outcome.'
        ],
        list: [
          'Pets sit beside the model, not inside it',
          'Token usage does not move when a pet is active',
          'State hooks exist and stay mostly unused',
          'One pet you like beats four you forget'
        ]
      },
      {
        heading: 'Where to read next',
        paragraphs: [
          'Upload limits and file types get the full comparison at /blog/codex-pet-upload-limit. The invisible pet walkthrough lives at /blog/installation-troubleshooting, and everything about what happens to a photo after the render sits at /blog/is-the-pet-generator-private.',
          'The rest of the archive is at /blog. Questions for the November round can go to the same inbox, and yes, the ones that land on the last day of the month do get read.'
        ]
      }
    ]
  },
  {
    slug: 'codex-pet-faq-october-zh',
    title: '月末问答：读者最关心的 10 个宠物问题',
    description:
      '十月这一轮读者提问集中回答：上传体积上限、桌面端更新后宠物消失、双屏能不能各放一只，以及照片上传之后到底去了哪里。',
    date: '2026-10-30',
    author: 'PetGen',
    keywords: [
      'codex pet faq',
      'codex pet questions',
      'reader qa',
      'pet troubleshooting faq',
      'Codex 宠物常见问题',
      '宠物上传体积上限',
      '更新后宠物消失',
      '双屏宠物放置'
    ],
    related: [
      'codex-pet-upload-limit',
      'installation-troubleshooting',
      'is-the-pet-generator-private',
      'dual-monitor-pet-placement'
    ],
    faq: [
      {
        question: '为什么更新之后宠物会重置？',
        answer: '更新会替换应用目录的一部分，少数机器上宠物查找路径随之变化。文件夹本身没有被删，拷回 pets 目录再彻底重启一次就能恢复。'
      },
      {
        question: '上传的文件多大就会被拒绝？',
        answer: '大约超过 12MB 会被挡回来，多数情况下是没压缩过的手机原图。导出一份长边 2000 像素左右的副本，基本都能顺利上传。'
      },
      {
        question: '两块屏幕可以各放一只宠物吗？',
        answer: '不可以。同一时刻只有一只宠物渲染，所有窗口共用同一只。能调的是停靠位置和显示边缘，完整步骤在 /blog/dual-monitor-pet-placement。'
      },
      {
        question: '生成完之后，我的照片去哪了？',
        answer: '渲染期间照片留在任务队列里，之后按 24 小时定时删除，全程不绑定账号。细节写在 /blog/is-the-pet-generator-private。'
      }
    ],
    sections: [
      {
        heading: '关于上传体积的宠物问题',
        paragraphs: [
          '每个月的第一批提问几乎都卡在上传这一步，所以这一期 FAQ 也从这里开始。生成器接受的单张文件上限是 12MB 左右。超过这个值的基本都是手机原图，一张照片没做任何处理就可能已经超过 8MB。把长边压到 2000 像素上下，多数文件会掉到 2MB 以内，而在这个尺寸下肉眼几乎看不出差别。',
          '格式和体积是两件事。WebP、JPG、PNG 都能上传；AVIF 和 HEIC 在部分版本里会被直接拒绝，而且报错信息常常说不清原因。如果连续三次都被拒，先在本地转一次格式，再去排查别的问题。'
        ],
        list: [
          '12MB 以内基本不会遇到拦截',
          '长边 2000 像素上下是最省心的选择',
          'WebP、JPG、PNG 三种格式都支持',
          '连试三次失败，就先本地转格式'
        ]
      },
      {
        heading: '排错：更新之后宠物不见了',
        paragraphs: [
          '这个问题是本月收件箱里出现频率最高的。Codex 桌面端更新会替换应用目录的一部分，少数机器上宠物查找路径跟着一起改动。你原来做好的文件夹还在硬盘上，并没有被删掉。把它拷回 pets 目录，彻底退出应用再打开一次就好。',
          '真正让人永远丢掉宠物的做法，是把唯一一份备份放在那个目录里。备份另找一个位置存放，一次更新就从「重做一遍」变成「两分钟搞定」。'
        ],
        list: [
          '文件夹还在，变的是查找路径',
          '拷回去之后记得彻底退出再重开',
          '备份不要放在应用目录里',
          '宠物不显示，多半不等于被删除'
        ]
      },
      {
        heading: '读者问答：双屏能各放一只吗',
        paragraphs: [
          '本月有三位读者在不同时间问了同一件事：两块屏幕能不能各显示一只宠物。答案是不行。同一时刻只有一只宠物渲染，每个窗口画到的都是当前激活的那一只。你把窗口挪到哪块屏幕，宠物就跟着走，不会留在原地。',
          '可以调整的是停靠行为。部分版本支持把宠物贴在左边缘或右边缘，当编辑器窗口和终端分处两块屏幕时，这个设置挺有用。完整步骤在 /blog/dual-monitor-pet-placement。'
        ],
        list: [
          '同一时刻只渲染一只宠物',
          '窗口挪动，宠物跟着挪',
          '边缘停靠要看 Codex 版本',
          '调位置比多加几只宠物更实际'
        ]
      },
      {
        heading: '读者问答：宠物会不会影响模型',
        paragraphs: [
          '这个月的来信里还有两条在担心宠物会不会改变助手的行为。不会。宠物画在对话旁边，不进入请求链路，开与不开，token 消耗和回复内容都完全一样。',
          '追问的那条是宠物能不能响应失败的测试流程。自定义状态钩子确实存在，做了两年收件箱整理，我只遇到过大概三个人真的接了起来。多数人挑一只然后一直用下去，这也挺好。'
        ],
        list: [
          '宠物在模型旁边，不在模型里面',
          '开关宠物，token 消耗不变',
          '状态钩子存在，但用的人很少',
          '一只喜欢的宠物胜过四只记不住的'
        ]
      },
      {
        heading: '接下来读哪篇',
        paragraphs: [
          '上传限制和文件格式的完整对比在 /blog/codex-pet-upload-limit，宠物不显示的完整排查流程在 /blog/installation-troubleshooting，照片上传之后的去向写在 /blog/is-the-pet-generator-private。',
          '其余文章都在 /blog 归档里。十一月这一轮的提问照旧发到同一个邮箱，月底最后一天到的那些也一样会被看到。'
        ]
      }
    ]
  },
  {
    slug: 'codex-pet-history-timeline',
    title: 'The Codex Pet Timeline: From Launch to Today',
    description:
      'A dated walk through codex pet history: what the first codex pet launch shipped, how codex pet versions changed the folder format, and where the pixel companion sits in late 2026.',
    date: '2026-10-31',
    author: 'PetGen',
    keywords: [
      'codex pet history',
      'codex pet launch',
      'codex pets evolution',
      'codex pet versions',
      'codex pet changelog',
      'codex pet first release',
      'codex pet update timeline',
      'pixel pet format history'
    ],
    related: [
      'codex-desktop-updates-pets',
      'how-to-install-codex-pet',
      'installation-troubleshooting',
      'backup-codex-pets-guide'
    ],
    faq: [
      {
        question: 'When did Codex pets first launch?',
        answer: 'The folder format circulated in the community in mid July 2026, and the generator shipped its v1.0.0 on 2026-07-27 with photo to pixel pet conversion, nine animation states, and transparent WebP output. Codex never published a pet release note of its own, so those two dates are the ones worth keeping.'
      },
      {
        question: 'Do pets built in July still work with the current version?',
        answer: 'They do. The spritesheet grid, the row order, and the frame count have stayed identical since the first release, so an early pet still loads today. The thing that actually breaks pets is a desktop update moving the lookup path, and copying the folder back fixes that.'
      },
      {
        question: 'How many codex pet versions are there?',
        answer: 'Four are recorded in the changelog: v1.0.0 in July, v1.5.0 in August with site plumbing, then v2.0.0 and v2.1.0 with the hamster and tortoise templates. Two changed anything a pet owner would notice.'
      }
    ],
    sections: [
      {
        heading: 'Codex pet launch: what the first version shipped',
        paragraphs: [
          'Ask five people when Codex pets arrived and you get five answers, which is roughly the problem. Codex pet history has no single launch date. What exists instead is a stack of small releases, each one changing a single file or a single folder. This page puts them in order: the first pet.json that went around the community, the codex pet launch of the generator itself, and the version running on desktops today.',
          'One caveat on sourcing. The pet feature never shipped release notes of its own, so the dates below come from three places: the generator changelog at /changelog, the Codex desktop release notes, and a community thread where people pasted the contents of their pets folder to compare. Where two of them disagree, I have said so.'
        ],
        list: [
          'Mid July 2026: the first pet.json example circulates in the community forum',
          '2026-07-27: generator v1.0.0 ships photo to pixel pet conversion',
          'Nine animation states have been in the format since day one',
          'Transparent WebP output, so a pet sits on any background'
        ]
      },
      {
        heading: 'Codex pet versions from v1.0.0 to v2.1.0',
        paragraphs: [
          'Four releases are recorded in the changelog, and only two of them changed anything a pet owner touches. v1.5.0 was entirely site plumbing: FAQ schema on articles, English titles on blog and guide pages, internal linking. Useful, invisible.',
          'v2.0.0 added the hamster template, clipboard paste for uploads, the /changelog page, and blog category filtering. v2.1.0 added the tortoise template, a service worker so the site works offline, share buttons on posts, and blog category navigation. That is the whole codex pets evolution on the tooling side.',
          'The full table lives at /changelog. It is the only list I trust for dates, mostly because it gets edited within a day of a release while the forum thread does not.'
        ],
        list: [
          'v1.0.0, 2026-07-27: conversion, nine states, WebP output, macOS and Windows',
          'v1.5.0, 2026-08-20: article schema, English page titles, internal links',
          'v2.0.0, 2026-08-25: hamster template, clipboard paste, /changelog page',
          'v2.1.0, 2026-08-29: tortoise template, offline support, share buttons'
        ]
      },
      {
        heading: 'Codex pets evolution inside the folder',
        paragraphs: [
          'Here is the part that surprises people. Across all four releases the folder contract barely moved. The spritesheet is still 1536 by 1872 pixels laid out as eight columns and nine rows, and every cell measures 192 by 208 pixels. Nine rows, nine animation states, same order since July.',
          'What grew is everything around it. Export went from one size to two, with 4K doubling the linear resolution to 3072 by 3744, four times the pixel count on an unchanged grid. Custom palettes arrived later and stayed an Unlimited feature. The template list picked up hamster and tortoise without dropping anything.'
        ],
        list: [
          'Grid, row order and frame count have never changed',
          '4K export quadruples the pixel count and leaves the grid alone',
          'Custom palettes came later and remain an Unlimited feature',
          'Templates were added, never replaced'
        ]
      },
      {
        heading: 'Where the timeline leaves you in late 2026',
        paragraphs: [
          'Install today and you get v2.1.0 behaviour: nine states, two export sizes, clipboard paste, and the site works offline. The install walkthrough has not changed since July and it is at /blog/how-to-install-codex-pet.',
          'The one lesson worth taking from codex pet history is where pets live. Every report of a pet vanishing after a desktop update traces back to that folder, and the pet itself is sitting on disk the whole time. Copy it back, quit the app fully, relaunch. The longer troubleshooting path is at /blog/installation-troubleshooting, and the backup habit that survives updates is at /blog/backup-codex-pets-guide.'
        ],
        list: [
          'Pets live in the pets folder, nowhere else',
          'A missing pet usually means a moved lookup path',
          'Keep the backup outside the app directory and updates stop being scary',
          'Nine states and the grid have been stable the entire time'
        ]
      },
      {
        heading: 'About Codex Pet Generator',
        paragraphs: [
          'Codex Pet Generator (codexpetgenerator.com) turns one photo into a pixel companion that runs on your desktop. Start at the homepage / to upload a photo, compare the Pro and Unlimited tiers on /pricing, and read the rest of the archive at /blog.'
        ]
      }
    ]
  },
  {
    slug: 'codex-pet-history-timeline-zh',
    title: 'Codex 宠物功能时间线：从发布到现在的进化',
    description:
      '按时间顺序梳理 codex pet history：第一次 codex pet launch 到底发布了什么，codex pet versions 各自改了哪些东西，以及 2026 年秋天这套像素伙伴处在什么状态。',
    date: '2026-10-31',
    author: 'PetGen',
    keywords: [
      'codex pet history',
      'codex pet launch',
      'codex pets evolution',
      'codex pet versions',
      'Codex 宠物历史',
      'Codex 宠物发布时间线',
      'Codex 宠物版本',
      '像素宠物格式演变'
    ],
    related: [
      'codex-desktop-updates-pets',
      'how-to-install-codex-pet',
      'installation-troubleshooting',
      'backup-codex-pets-guide'
    ],
    faq: [
      {
        question: 'Codex 宠物最早是什么时候发布的？',
        answer: '目录格式在 2026 年 7 月中旬就在社区里流传，生成器自己的 v1.0.0 于 2026-07-27 上线，带来照片转像素宠物、九种动画状态和透明 WebP 输出。Codex 官方没有单独发过宠物功能的说明，所以记住这两个日期就够。'
      },
      {
        question: '七月做的宠物现在还能用吗？',
        answer: '能用。精灵图的网格、行顺序和帧数从第一次发布到现在没变过，早期做的宠物今天照样加载。真正会让宠物失效的是桌面端更新挪动了查找路径，把文件夹拷回去就恢复正常。'
      },
      {
        question: 'codex pet 一共有几个版本？',
        answer: '更新记录里是四个：七月的 v1.0.0，八月以站点改动为主的 v1.5.0，然后是带来仓鼠和陆龟模板的 v2.0.0 与 v2.1.0。四个里只有两个改动了养宠物的人会注意到的东西。'
      }
    ],
    sections: [
      {
        heading: '第一次发布：v1.0.0 里到底有什么',
        paragraphs: [
          '问五个人 Codex 宠物是什么时候出现的，大概能拿到五个答案，问题就出在这儿。Codex 宠物的历史没有一个统一的发布日期，它是一串小版本叠起来的，每次只改动一个文件或者一个目录。这一篇按时间排好：社区里最早流传的那份 pet.json、生成器自己的第一次发布，以及今天跑在桌面上的版本。只想看现状的话，直接跳到最后一节。',
          '先说清楚来源。宠物功能从来没有单独的发布说明，所以下面的日期来自三处：/changelog 上的生成器更新记录、Codex 桌面端的版本说明，还有一个社区帖子里大家互相贴 pets 目录内容做对比。两处对不上的地方我都标了出来。'
        ],
        list: [
          '2026 年 7 月中旬：社区里出现第一份 pet.json 示例',
          '2026-07-27：生成器 v1.0.0 上线，支持照片转像素宠物',
          '九种动画状态从第一天就在格式里',
          '透明 WebP 输出，宠物放在什么背景上都成立'
        ]
      },
      {
        heading: '四个版本各自改了什么',
        paragraphs: [
          '更新记录里一共四个版本，其中只有两个改动了养宠物的人真正会碰到的东西。v1.5.0 全是站点层面的活：文章加 FAQ 结构化数据、博客和指南页换英文标题、补内链。有用，但看不见。',
          'v2.0.0 加了仓鼠模板、上传支持剪贴板粘贴、/changelog 页面和博客分类筛选。v2.1.0 加了陆龟模板、让站点离线可用的 Service Worker、文章分享按钮和博客分类导航。工具这一侧的进化基本就这些。',
          '完整表格在 /changelog。日期我只信这一份，因为它在发布当天就会被更新，而论坛那个帖子不会。'
        ],
        list: [
          'v1.0.0（2026-07-27）：转换、九种状态、WebP 输出、macOS 与 Windows',
          'v1.5.0（2026-08-20）：文章结构化数据、页面英文标题、内链',
          'v2.0.0（2026-08-25）：仓鼠模板、剪贴板粘贴、/changelog 页面',
          'v2.1.0（2026-08-29）：陆龟模板、离线支持、分享按钮'
        ]
      },
      {
        heading: '目录里面的东西是怎么变的',
        paragraphs: [
          '这一点大概会让人意外。四个版本下来，目录里的约定几乎没有动过。精灵图还是 1536×1872 像素，八列九行，每格 192×208 像素。九行对应九种动画状态，顺序从七月到现在没变过。',
          '变的是外围。导出从一个尺寸变成两个，4K 把线性分辨率翻倍到 3072×3744，网格不动而像素数变成四倍。自定义调色板是后加的，一直属于 Unlimited。模板多了仓鼠和陆龟，没有换掉任何一个。'
        ],
        list: [
          '网格、行顺序和帧数从来没改过',
          '4K 导出让像素数变成四倍，网格照旧',
          '自定义调色板是后来的功能，属于 Unlimited',
          '模板只增不换'
        ]
      },
      {
        heading: '到 2026 年秋天，这条时间线把你带到了哪',
        paragraphs: [
          '现在装一次，拿到的就是 v2.1.0 的行为：九种状态、两种导出尺寸、剪贴板粘贴，站点本身也能离线打开。安装步骤从七月起没变过，写在 /blog/how-to-install-codex-pet。',
          '这条时间线最该让人记住的，是宠物到底住在哪。每次桌面端更新后有人报宠物消失，最后都追回那个目录，而宠物本身在硬盘上好好的。拷回去，彻底退出应用，再打开。更完整的排查在 /blog/installation-troubleshooting，能扛住更新的备份习惯写在 /blog/backup-codex-pets-guide。'
        ],
        list: [
          '宠物只住在 pets 目录里，别处没有',
          '宠物不显示，通常是查找路径挪了',
          '备份放在应用目录之外，更新就不可怕',
          '九种状态和网格从头到尾都稳定'
        ]
      },
      {
        heading: '关于 Codex Pet Generator',
        paragraphs: [
          'Codex Pet Generator（codexpetgenerator.com）把一张照片变成跑在你桌面上的像素伙伴。从首页 / 上传照片开始，Pro 和 Unlimited 的区别在 /pricing，其余文章都在 /blog。'
        ]
      }
    ]
  }
];
