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

];
