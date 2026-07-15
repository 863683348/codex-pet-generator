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
          'The easiest way to pick a tool is to upload the same photo to two or three services and compare the outputs. PetGen’s free Starter plan lets you do this without a credit card, so you can see if the pixel-art, animated style is what you want.',
        ],
      },
    ],
  },
]
