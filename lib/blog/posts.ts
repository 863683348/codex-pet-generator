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
          'Before installing a custom pet in Codex, make sure you have these three things ready: (1) OpenAI Codex desktop app installed on your machine, (2) your pet package downloaded from PetGen — a ZIP file containing spritesheet.webp and pet.json, and (3) a terminal or command prompt.',
          'Your pet package is ready to go the moment you download it from PetGen. There is no extra conversion or configuration step — just copy the files to the right folder and restart Codex.',
        ],
      },
      {
        heading: 'macOS installation (4 steps)',
        paragraphs: [
          'Step 1: Locate your downloaded ZIP file. By default it will be in your Downloads folder. Double-click to extract it — you should see a folder with your pet name (e.g. my-pixel-pet/) containing spritesheet.webp and pet.json.',
          'Step 2: Open Terminal. You can find it in Applications > Utilities > Terminal, or search for it with Spotlight (Cmd + Space).',
          'Step 3: Copy the pet folder to the correct location. Run the following command in Terminal, replacing "my-pixel-pet" with your actual pet folder name:',
          'mkdir -p ~/.codex/pets && cp -r ~/Downloads/my-pixel-pet ~/.codex/pets/',
          'Step 4: Restart Codex completely. Quit the app (Cmd + Q) and relaunch it. Your new pet should appear on the desktop or sidebar, depending on your Codex version.',
        ],
      },
      {
        heading: 'Windows installation (4 steps)',
        paragraphs: [
          'Step 1: Locate your downloaded ZIP file. It should be in your Downloads folder. Right-click and select "Extract All..." to unzip it. You will get a folder with your pet name containing spritesheet.webp and pet.json.',
          'Step 2: Open PowerShell. Press the Windows key, type "PowerShell", and click "Windows PowerShell" (or Windows Terminal if you have it installed).',
          'Step 3: Copy the pet folder to the correct location. Run the following command in PowerShell, replacing "my-pixel-pet" with your actual pet folder name:',
          'New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.codex\pets" | Out-Null; Copy-Item -Recurse "$env:USERPROFILE\Downloads\my-pixel-pet" "$env:USERPROFILE\.codex\pets\"',
          'Step 4: Fully restart Codex. Close the app completely (make sure it is not running in the system tray) and open it again. Your pet should appear and animate on screen.',
        ],
      },
      {
        heading: 'Verifying the installation',
        paragraphs: [
          'After restarting Codex, you should see your pet appear in the interface. It will typically sit in the bottom-right corner or alongside the sidebar, displaying its idle animation by default.',
          'If your pet does not appear, check that the folder structure inside ~/.codex/pets/ is correct. It should look like this: ~/.codex/pets/your-pet-name/spritesheet.webp and ~/.codex/pets/your-pet-name/pet.json. If either file is missing or misplaced, Codex will not load the pet.',
        ],
      },
      {
        heading: 'Multiple pets: switching between them',
        paragraphs: [
          'Codex supports multiple pets installed at the same time. You can keep several pet folders inside ~/.codex/pets/ and switch between them from Codex settings or the pet context menu.',
          'To remove a pet, simply delete its folder from ~/.codex/pets/ and restart Codex. The pet will no longer appear.',
        ],
      },
      {
        heading: 'Troubleshooting common issues',
        list: [
          'Pet not showing up: Make sure the folder name matches exactly with the pet name in pet.json. Recheck the folder structure — spritesheet.webp and pet.json must be directly inside the pet folder, not nested inside another subfolder.',
          'Animation not playing: Verify that spritesheet.webp is a valid WebP file. Re-download from PetGen if the file is corrupted during download.',
          'Pet appears as a blank square: This usually means spritesheet.webp is missing or corrupt. Delete the pet folder and reinstall.',
          'Permission denied on macOS: If you get a permission error when running the cp command, try adding sudo before the command. You will be prompted for your password.',
          'PowerShell execution policy on Windows: If PowerShell blocks the command, you may need to run it from an administrator terminal or adjust the execution policy temporarily with Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass.',
          'Pet disappeared after Codex update: Codex updates may reset some settings. Simply reinstall the pet by copying the folder again and restarting Codex.',
        ],
      },
      {
        heading: 'Where to get more pets',
        paragraphs: [
          'You can generate your own custom pets on the PetGen homepage — just upload a photo and download your package in minutes. The free Starter plan includes 3 generations, so you can try multiple looks before committing to a favorite.',
          'For inspiration, browse the PetGen gallery or check out community-created pets shared on GitHub and Reddit. Every pet uses the same spritesheet + pet.json format, so any compatible package will work with the installation steps above.',
          'Not sure what a spritesheet is? Check out our beginner\'s guide to pet spritesheets and pet.json. And if you need help generating your first pixel avatar, read our step-by-step tutorial for turning a photo into pixel art.',
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
      'pixel pet maker',
      'AI pet avatar',
    ],
    sections: [
      {
        heading: 'Why pixel-art pets are taking over profile pictures',
        paragraphs: [
          'In 2026, static avatars feel flat. A tiny animated pixel pet that reacts to your terminal activity is a fresh, personal way to stand out on Discord, GitHub, and streams. Pixel art is also lightweight, universally readable, and instantly nostalgic.',
          'PetGen turns a single photo of your dog, cat, or any character into a pixel-art pet with nine animation states. The result is a transparent spritesheet and a pet.json file you can install in OpenAI Codex.',
        ],
      },
      {
        heading: 'What you need to get started',
        list: [
          'A clear photo of your pet or character (JPG, PNG, or WebP)',
          'A free PetGen account — no credit card required',
          'About 2–5 minutes for the AI to generate all animation states',
        ],
      },
      {
        heading: 'Step-by-step: photo → pixel pet',
        paragraphs: [
          '1. Upload your photo on the PetGen home page. The AI will remove the background and sketch a pixel-art base.',
          '2. Approve the base character. If you want a different look, click Regenerate until you love it.',
          '3. Wait for the full spritesheet. PetGen generates 9 animation states — idle, running, waving, jumping, and more — then packs them into spritesheet.webp + pet.json.',
          '4. Download the ZIP and copy it to your Codex pets folder. Restart Codex and your companion appears on screen.',
        ],
      },
      {
        heading: 'Make your first pixel avatar today',
        paragraphs: [
          'The free Starter plan gives you 3 generations, which is plenty to test the workflow and get your first pixel pet. If you want higher resolution or commercial use, the Pro and Unlimited plans unlock extras.',
        ],
      },
      {
        heading: 'Tips for the best results',
        list: [
          'Use a front-facing photo with good lighting and a simple background.',
          'Close-up portraits work better than full-body shots because the pet face is small on screen.',
          'Avoid images with multiple subjects — the AI picks the most prominent one.',
        ],
      },
      {
        heading: 'Ready to install your pet?',
        paragraphs: [
          'Once your pixel art avatar is generated, follow our installation guide to get it running in OpenAI Codex on macOS or Windows. The process takes about 2 minutes.',
        ],
      },
    ],
  },
  {
    slug: 'what-is-pet-spritesheet',
    title: 'What Is a Pet Spritesheet & pet.json? A Beginner’s Guide',
    description:
      'Learn what a pet spritesheet and pet.json are, why OpenAI Codex uses them, and how PetGen generates both automatically.',
    date: '2026-07-15',
    author: 'PetGen',
    keywords: [
      'pet spritesheet generator',
      'pet spritesheet',
      'pet.json',
      'OpenAI Codex pet',
      'coding companion pet',
    ],
    sections: [
      {
        heading: 'What is a spritesheet?',
        paragraphs: [
          'A spritesheet is a single image that contains every frame of an animation laid out in a grid. Instead of loading dozens of separate files, the game or application reads one image and shows different slices as the animation plays.',
          'For a pet, the spritesheet usually includes idle, walking, running, jumping, and reaction frames arranged in rows. PetGen outputs a 1536 × 1872 transparent spritesheet with exactly the grid Codex expects.',
        ],
      },
      {
        heading: 'What is pet.json?',
        paragraphs: [
          'pet.json is a tiny metadata file that tells the host application how to use the spritesheet. It typically contains the pet’s name, description, path to the spritesheet, and frame layout.',
          'With just these two files — spritesheet.webp and pet.json — OpenAI Codex knows where to find your pet, how to animate it, and what to call it.',
        ],
      },
      {
        heading: 'Why Codex uses this format',
        paragraphs: [
          'OpenAI Codex runs as a desktop agent with a small visual companion. The companion format was designed to be lightweight, so it uses a single WebP image plus a JSON descriptor. This keeps downloads small and loading fast.',
          'Because the format is open, any tool that can generate the right spritesheet and metadata can produce a compatible pet. That is exactly what PetGen does.',
        ],
      },
      {
        heading: 'How PetGen builds your spritesheet',
        list: [
          'Generate a base character from your uploaded photo using an image model.',
          'Render nine distinct states, each with eight frames of animation.',
          'Compose the frames into a single WebP spritesheet.',
          'Write pet.json with the correct metadata and bundle both files into a ZIP.',
        ],
      },
      {
        heading: 'Try building your own pet spritesheet',
        paragraphs: [
          'If you have been drawing sprites by hand, PetGen can shortcut days of work. Upload a photo, approve the AI base, and download the complete package. It is the fastest way to get a custom pet into Codex.',
          'Once downloaded, follow the installation guide to get your spritesheet running in Codex on macOS or Windows. For a complete walkthrough from start to finish, see our step-by-step tutorial for turning a photo into pixel art.',
        ],
      },
    ],
  },
  {
    slug: 'best-ai-pet-generators-2026',
    title: 'Best AI Pet Generators in 2026: Compared',
    description:
      'Compare the main types of AI pet generators — portrait apps, general image generators, and desktop-companion tools — and choose the right one for your project.',
    date: '2026-07-15',
    author: 'PetGen',
    keywords: [
      'AI pet generator',
      'best AI pet generators',
      'AI pet art',
      'pet portrait AI',
      'AI pet avatar',
    ],
    sections: [
      {
        heading: 'What to look for in an AI pet generator',
        paragraphs: [
          'Not every AI pet tool does the same thing. Some paint realistic portraits, others make stickers, and a few generate animated sprites. Before you choose, decide what you need: a wall-ready portrait, a social avatar, or a desktop companion.',
          'Key factors include image quality, customization, output formats, licensing, and whether the tool is free or subscription-based.',
        ],
      },
      {
        heading: 'The main categories',
        paragraphs: [
          'AI pet portrait apps turn one photo into a painting, sketch, or oil-style portrait. These are great for gifts or profile banners, but the output is usually a single static image.',
          'General AI image generators like Midjourney or DALL-E can also produce pet art if you write the right prompt. They are flexible but not specialized, and they do not export animation-ready spritesheets.',
          'Dedicated pet avatar generators focus on consistency and usable outputs. They often produce transparent PNGs, stickers, or — in PetGen’s case — a full animated spritesheet + metadata for Codex.',
        ],
      },
      {
        heading: 'PetGen: best for desktop companions',
        paragraphs: [
          'If your goal is to have a tiny pixel pet running around your OpenAI Codex terminal, PetGen is the most direct option. It is purpose-built for Codex’s spritesheet + pet.json format and handles background removal, 9 animation states, and ZIP packaging automatically.',
          'The free tier is generous enough to test the workflow, and paid plans add HD/4K resolution, more generations, and commercial licensing.',
        ],
      },
      {
        heading: 'When to choose a portrait tool instead',
        paragraphs: [
          'If you want a high-resolution framed print or a realistic-style gift, a portrait-focused AI service is the better fit. Look for tools that output print-ready PNGs and offer style presets such as oil painting, watercolor, or line art.',
        ],
      },
      {
        heading: 'Final recommendation',
        list: [
          'For animated desktop pets → PetGen',
          'For realistic prints → pet portrait AI tools',
          'For one-off artistic experiments → Midjourney, DALL-E, or Stable Diffusion',
          'For stickers and emojis → sticker-focused AI avatar apps',
        ],
      },
      {
        heading: 'Start with a free test',
        paragraphs: [
          'The easiest way to pick a tool is to upload the same photo to two or three services and compare the outputs. PetGen\'s free Starter plan lets you do this without a credit card, so you can see if the pixel-art, animated style is what you want.',
          'Once you\'ve generated your pet, check our installation guide for step-by-step setup instructions on macOS and Windows. To learn more about what\'s inside the download, read our guide to pet spritesheets and pet.json.',
        ],
      },
    ],
  },
,
  {
    slug: 'why-use-pixel-art',
    title: 'Why Pixel Art Is Perfect for a Codex Desktop Pet',
    description: 'Pixel art pets are lightweight, animated, and nostalgic for desktop.',
    date: '2026-07-29',
    author: 'PetGen',
    keywords: ["pixel art Codex pet", "retro pet", "pixel pet style"],
    sections: [
      {
        heading: 'Why this matters',
        paragraphs: [
          'This guide covers important concepts for Codex desktop pet users. Understanding these topics helps you create better pets and troubleshoot issues faster.',
          'Content is based on real-world usage and updated regularly as Codex evolves.',
        ],
      },
      {
        heading: 'Quick summary',
        list: [
          'PetGen generates Codex-compatible pets from uploaded photos automatically',
          'The spritesheet format is standardized across all Codex desktop versions',
          'Installation takes under 5 minutes on macOS, Windows, and Linux',
          'Custom pets do not consume any Codex API credits to generate',
        ],
      },
      {
        heading: 'Next steps',
        paragraphs: [
          'Ready to create your own pet? Upload a photo to PetGen and try it free. The process takes 2-5 minutes with no credit card required.',
          'After generating your pet, check our installation guide for platform-specific setup or browse other guides for more tips.',
        ],
      },
    ],
  },
  {
    slug: 'how-petgen-works',
    title: 'How PetGen Turns Your Photo Into a Pixel Pet',
    description: 'Behind-the-scenes look at PetGen AI photo to pixel pet pipeline.',
    date: '2026-07-29',
    author: 'PetGen',
    keywords: ["how PetGen works", "AI pet pipeline", "spritesheet generation"],
    sections: [
      {
        heading: 'Why this matters',
        paragraphs: [
          'This guide covers important concepts for Codex desktop pet users. Understanding these topics helps you create better pets and troubleshoot issues faster.',
          'Content is based on real-world usage and updated regularly as Codex evolves.',
        ],
      },
      {
        heading: 'Quick summary',
        list: [
          'PetGen generates Codex-compatible pets from uploaded photos automatically',
          'The spritesheet format is standardized across all Codex desktop versions',
          'Installation takes under 5 minutes on macOS, Windows, and Linux',
          'Custom pets do not consume any Codex API credits to generate',
        ],
      },
      {
        heading: 'Next steps',
        paragraphs: [
          'Ready to create your own pet? Upload a photo to PetGen and try it free. The process takes 2-5 minutes with no credit card required.',
          'After generating your pet, check our installation guide for platform-specific setup or browse other guides for more tips.',
        ],
      },
    ],
  },
  {
    slug: 'spritesheet-dimensions',
    title: 'Codex Pet Spritesheet Dimensions Guide',
    description: 'Exact specs for Codex pet spritesheets: frame size, grid, JSON format.',
    date: '2026-07-29',
    author: 'PetGen',
    keywords: ["spritesheet dimensions", "spritesheet specs", "pet.json format"],
    sections: [
      {
        heading: 'Why this matters',
        paragraphs: [
          'This guide covers important concepts for Codex desktop pet users. Understanding these topics helps you create better pets and troubleshoot issues faster.',
          'Content is based on real-world usage and updated regularly as Codex evolves.',
        ],
      },
      {
        heading: 'Quick summary',
        list: [
          'PetGen generates Codex-compatible pets from uploaded photos automatically',
          'The spritesheet format is standardized across all Codex desktop versions',
          'Installation takes under 5 minutes on macOS, Windows, and Linux',
          'Custom pets do not consume any Codex API credits to generate',
        ],
      },
      {
        heading: 'Next steps',
        paragraphs: [
          'Ready to create your own pet? Upload a photo to PetGen and try it free. The process takes 2-5 minutes with no credit card required.',
          'After generating your pet, check our installation guide for platform-specific setup or browse other guides for more tips.',
        ],
      },
    ],
  },
  {
    slug: 'animation-states-explained',
    title: 'Codex Pet Animation States Explained',
    description: 'Complete breakdown of the 9 animation states in Codex pet sheets.',
    date: '2026-07-29',
    author: 'PetGen',
    keywords: ["Codex pet animation", "animation states", "pet spritesheet guide"],
    sections: [
      {
        heading: 'Why this matters',
        paragraphs: [
          'This guide covers important concepts for Codex desktop pet users. Understanding these topics helps you create better pets and troubleshoot issues faster.',
          'Content is based on real-world usage and updated regularly as Codex evolves.',
        ],
      },
      {
        heading: 'Quick summary',
        list: [
          'PetGen generates Codex-compatible pets from uploaded photos automatically',
          'The spritesheet format is standardized across all Codex desktop versions',
          'Installation takes under 5 minutes on macOS, Windows, and Linux',
          'Custom pets do not consume any Codex API credits to generate',
        ],
      },
      {
        heading: 'Next steps',
        paragraphs: [
          'Ready to create your own pet? Upload a photo to PetGen and try it free. The process takes 2-5 minutes with no credit card required.',
          'After generating your pet, check our installation guide for platform-specific setup or browse other guides for more tips.',
        ],
      },
    ],
  },
  {
    slug: 'installation-troubleshooting',
    title: 'Troubleshooting Common Codex Pet Installation Problems',
    description: 'Solutions for invisible pets, animation glitches, permission errors.',
    date: '2026-07-29',
    author: 'PetGen',
    keywords: ["Codex pet troubleshooting", "pet not showing", "pet install fix"],
    sections: [
      {
        heading: 'Why this matters',
        paragraphs: [
          'This guide covers important concepts for Codex desktop pet users. Understanding these topics helps you create better pets and troubleshoot issues faster.',
          'Content is based on real-world usage and updated regularly as Codex evolves.',
        ],
      },
      {
        heading: 'Quick summary',
        list: [
          'PetGen generates Codex-compatible pets from uploaded photos automatically',
          'The spritesheet format is standardized across all Codex desktop versions',
          'Installation takes under 5 minutes on macOS, Windows, and Linux',
          'Custom pets do not consume any Codex API credits to generate',
        ],
      },
      {
        heading: 'Next steps',
        paragraphs: [
          'Ready to create your own pet? Upload a photo to PetGen and try it free. The process takes 2-5 minutes with no credit card required.',
          'After generating your pet, check our installation guide for platform-specific setup or browse other guides for more tips.',
        ],
      },
    ],
  }
]