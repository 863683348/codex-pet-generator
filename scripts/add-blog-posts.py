import re, json

path = r'C:\Users\Administrator\WorkBuddy\2026-07-12-21-45-52\codex-pet-generator\lib\blog\posts.ts'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

last_bracket = content.rstrip().rindex(']')
header = content[:last_bracket].rstrip()

new_posts_code = []

def esc(s):
    return s.replace('\\', '\\\\').replace("'", "\\'").replace('\n', '\\n')

def build_post(slug, title, desc, keywords, sections):
    secs = []
    for sec in sections:
        h = sec['heading']
        parts = [f"      {{\n        heading: '{esc(h)}',"]
        if 'paragraphs' in sec:
            ps = ",\n".join(f"          '{esc(p)}'" for p in sec['paragraphs'])
            parts.append(f"\n        paragraphs: [\n{ps}\n        ],")
        if 'list' in sec:
            ls = ",\n".join(f"          '{esc(i)}'" for i in sec['list'])
            parts.append(f"\n        list: [\n{ls}\n        ],")
        parts.append("\n      }")
        secs.append("".join(parts))
    secs_code = ",\n".join(secs)
    kws = ", ".join(f"'{esc(k)}'" for k in keywords)
    return (
        f"  {{\n"
        f"    slug: '{slug}',\n"
        f"    title: '{esc(title)}',\n"
        f"    description:\n"
        f"      '{esc(desc)}',\n"
        f"    date: '2026-07-30',\n"
        f"    author: 'PetGen',\n"
        f"    keywords: [{kws}],\n"
        f"    sections: [\n{secs_code}\n    ],\n"
        f"  }}"
    )

# Post 1: Logo pet
new_posts_code.append(build_post(
    'create-codex-pet-from-logo',
    "How to Create a Codex Pet from Your Company Logo",
    "Turn your company logo into an animated pixel-art pet for OpenAI Codex. A step-by-step guide to branding your team's coding companion with your mascot or logo mark.",
    ['codex pet from logo', 'brand mascot codex', 'company pet codex', 'codex team pet', 'logo to pixel art', 'business codex pet', 'codex branding', 'pixel art logo maker', 'team coding companion', 'corporate codex pet'],
    [
        {"heading": "Why put your logo in Codex?", "paragraphs": [
            "A branded Codex pet turns your team's development environment into something more personal and fun. Instead of the default companion, your team sees your company mascot or logo mark sitting in the corner of the Codex window, reacting to their coding activity.",
            "It is a small touch that reinforces brand identity during every coding session. For remote teams, it is also a subtle signal that you are all working in the same space, even when you are miles apart.",
        ]},
        {"heading": "What you need to get started", "list": [
            "A clean, high-resolution version of your logo or mascot (PNG works best)",
            "A PetGen account with enough generations remaining",
            "About 3 to 5 minutes of your time",
        ]},
        {"heading": "Step 1: Prepare your logo image", "paragraphs": [
            "For the best pixel-art conversion, your logo should be at least 512x512 pixels and have a transparent background. Simple shapes and high contrast colors produce the cleanest results.",
            "If your logo is an SVG, convert it to a PNG first. Aim for a 1:1 aspect ratio so the final pet is well-proportioned.",
        ]},
        {"heading": "Step 2: Upload and generate", "paragraphs": [
            "Go to the PetGen homepage and upload your prepared logo image. The AI will analyze the shapes and colors, then generate a pixel-art base character within about 90 seconds.",
            "If the result does not capture your logo well, hit Regenerate. Try different crops of your logo if results keep missing the mark.",
        ]},
        {"heading": "Step 3: Approve and download", "paragraphs": [
            "Once you are happy with the pixel-art base, approve it. PetGen generates all 9 animation states then packs them into spritesheet.webp and pet.json inside a ZIP file.",
            "The spritesheet is 1536x1872 pixels with transparent background, matching the format Codex expects. No manual editing needed.",
        ]},
        {"heading": "Step 4: Share with your team", "paragraphs": [
            "After downloading the ZIP, rename the folder and distribute it through your internal tools. Each team member copies it to ~/.codex/pets/ and restarts Codex.",
            "The pet appears automatically. Switching between pets is easy from the Codex settings menu.",
        ]},
        {"heading": "Tips for the best logo-to-pet results", "list": [
            "Logos with a single main shape work better than complex multi-element designs",
            "High contrast between the logo and its background helps the AI identify the subject",
            "Mascot-style logos convert more naturally than abstract symbols",
            "If your logo has thin lines or small text, create a simplified mascot version for the pet",
        ]},
        {"heading": "Make your branded pet today", "paragraphs": [
            "PetGen's free Starter plan includes 3 generations to test your logo and refine the result. The Pro plan unlocks HD spritesheets for crisp display on 4K monitors.",
            "For installation help, see our step-by-step installation guide. For more on getting the best pixel-art quality, read our guide on choosing the best photos for PetGen.",
        ]},
    ]
))

# Post 2: Creative uses
new_posts_code.append(build_post(
    'creative-uses-for-codex-pet',
    "5 Creative Ways to Use Your Codex Desktop Pet",
    "Your Codex pet is more than a cute face. Discover five fun and practical ways to use your pixel-art companion beyond the default idle animation.",
    ['codex pet uses', 'codex pet productivity', 'desktop pet ideas', 'codex pet fun', 'pixel pet motivation', 'codex companion tips', 'codex pet engagement', 'coding companion ideas', 'codex pet workflow', 'desktop pet productivity'],
    [
        {"heading": "Beyond idle: your pet is always reacting", "paragraphs": [
            "Most people install a Codex pet and enjoy the idle animation, but your pixel companion has multiple animation states that can make coding sessions feel more alive and responsive.",
            "Here are five ways to get more out of your Codex pet, from practical productivity tricks to pure fun.",
        ]},
        {"heading": "1. Use your pet as a break timer", "paragraphs": [
            "Train yourself to glance at your pet as a natural break reminder. The contrast between focused coding and the pet's playful presence creates a gentle boundary.",
            "Try this: set a timer for 25-45 minutes and check on your pet when it ends. Over time, the pet becomes associated with taking healthy breaks, reducing eye strain.",
        ]},
        {"heading": "2. Match your pet to your project mood", "paragraphs": [
            "Switch between different pets depending on what you are working on. A calm pet for debugging, an energetic one for starting new features. The visual change signals a mental mode switch.",
            "Keep multiple pets in ~/.codex/pets/ and swap from Codex settings whenever you need a fresh vibe.",
        ]},
        {"heading": "3. Make it a team bonding tool", "paragraphs": [
            "Create a shared pet representing your group identity. Everyone installs the same pet, creating a shared visual element across the team's coding environments.",
            "Remote teams find this especially effective. A uniform desktop pet creates a sense of shared space across time zones.",
        ]},
        {"heading": "4. Create pets for milestones", "paragraphs": [
            "Generate a special pet for project milestones. A celebration pet for launches, a trophy-themed pet for hitting goals. The pet becomes a digital reward on your desktop.",
            "The free tier includes 3 generations for milestone pets. The Unlimited plan is ideal for making a new pet every sprint.",
        ]},
        {"heading": "5. Use pets as a focus ritual", "paragraphs": [
            "Build a simple ritual: select a specific pet when you sit down to code. The act of choosing signals your brain that it is time to focus, becoming a powerful conditioning cue over time.",
            "Some developers keep a deep work pet for uninterrupted coding and a separate pet for communication-heavy days.",
        ]},
        {"heading": "What other uses will you discover?", "paragraphs": [
            "The Codex pet format is simple but flexible. As more people customize their companions, new creative uses keep emerging.",
            "Ready to build your collection? Generate your first pet on PetGen free, then follow the installation guide. For brand pets, read our guide on creating a Codex pet from your company logo.",
        ]},
    ]
))

# Post 3: Color customization
new_posts_code.append(build_post(
    'codex-pet-color-customization',
    "Codex Pet Color Customization: Change Your Pet's Look",
    "Learn how to customize your Codex pet's colors by generating variations in PetGen and manually editing spritesheets. Personalize your coding companion to match your theme.",
    ['codex pet custom color', 'change codex pet colors', 'codex pet personalization', 'pixel pet color edit', 'codex pet theme', 'customize codex companion', 'spritesheet color change', 'codex pet palette', 'codex dark theme pet', 'pixel art recolor'],
    [
        {"heading": "Why customize your pet's colors?", "paragraphs": [
            "Out of the box, PetGen generates pets with colors from your photo. But what if you want your pet to match your Codex dark theme or your terminal color scheme? Color customization makes a generic pet feel truly yours.",
            "There are two approaches: generating new variations with different photos, or manually editing the spritesheet.",
        ]},
        {"heading": "Method 1: Generate variations with different photos", "paragraphs": [
            "Upload a photo with different dominant colors to get a new palette. Try an abstract gradient, a photo with the right mood, or a screenshot from a color palette tool.",
            "This approach needs no image editing skills. The free Starter plan gives 3 generations for experimenting.",
        ]},
        {"heading": "Method 2: Manually edit the spritesheet", "paragraphs": [
            "Open spritesheet.webp in Photoshop, GIMP, or Photopea. The sheet is 1536x1872 pixels with 9 rows (animation states) and 8 columns (frames).",
            "Use hue/saturation or selective color replacement. Keep these tips in mind:",
        ], "list": [
            "Work on a copy, never the original",
            "All 9 animation rows should use the same palette",
            "Keep the background transparent (pure black = transparent for Codex)",
            "Export as WebP with transparency",
        ]},
        {"heading": "Matching your Codex theme", "paragraphs": [
            "For dark themes, bright saturated colors stand out beautifully. Neon accents, pastels, or monochrome palettes each create a different mood.",
            "For light themes, use darker outlines and saturated fills so the pet does not wash out.",
        ]},
        {"heading": "Popular color schemes", "list": [
            "Synthwave: neon pink and cyan on dark background",
            "Monochrome: single hue with varying saturation",
            "Nature: earth tones with green accents",
            "Terminal: green-on-black retro aesthetic",
            "Pastel: soft pinks, blues, and yellows",
            "Corporate: your brand colors",
        ]},
        {"heading": "Preserving animation quality", "paragraphs": [
            "Pay attention to shading pixels that give the pet depth. Use selective color replacement that preserves lightness variations.",
            "The pet.json file does not need modification after recoloring. Any visual changes to the WebP file are picked up automatically by Codex.",
        ]},
        {"heading": "Start customizing today", "paragraphs": [
            "The free plan is perfect for experimentation. After customizing, reinstall by copying the folder to ~/.codex/pets/ and restarting Codex.",
            "For installation help, see our installation guide. To learn more about the spritesheet, read our beginner's guide to pet spritesheets.",
        ]},
    ]
))

# Post 4: Share pets
new_posts_code.append(build_post(
    'share-codex-pet-with-friends',
    "How to Share Your Codex Pet with Friends and Team Members",
    "Your custom Codex pet does not have to stay on your machine. Learn how to share spritesheet packages with friends, teammates, and the Codex community.",
    ['share codex pet', 'codex pet for teams', 'send codex pet', 'codex pet distribution', 'codex pet community', 'share pixel pet', 'codex pet multiple users', 'team codex pet', 'codex pet sharing guide', 'distribute codex companion'],
    [
        {"heading": "Your pet can travel", "paragraphs": [
            "Every Codex pet is just two files in a ZIP: spritesheet.webp and pet.json. This simple format makes sharing incredibly easy across any operating system.",
            "Here is how to share your PetGen creations with anyone.",
        ]},
        {"heading": "Method 1: Share the ZIP directly", "paragraphs": [
            "The ZIP you download from PetGen is ready to share. Send it over email, Slack, Discord, or any file-sharing service. The recipient extracts and follows standard installation steps.",
            "Make sure the folder structure inside is intact: the folder directly contains spritesheet.webp and pet.json, not another nested folder.",
        ]},
        {"heading": "How recipients install", "paragraphs": [
            "On macOS: mkdir -p ~/.codex/pets && cp -r ~/Downloads/your-pet ~/.codex/pets/",
            "On Windows PowerShell: New-Item -ItemType Directory -Force -Path \"$env:USERPROFILE\\.codex\\pets\" | Out-Null; Copy-Item -Recurse \"$env:USERPROFILE\\Downloads\\your-pet\" \"$env:USERPROFILE\\.codex\\pets\\\"",
            "After copying, restart Codex. See our installation guide for detailed steps.",
        ]},
        {"heading": "Method 2: Share with your team", "paragraphs": [
            "Keep the pet ZIP in a shared location like Google Drive, an internal GitHub repo, or a Slack pinned message. Each team member downloads once.",
            "To update, replace the ZIP and notify the team. The pet format is stable so updates never break compatibility.",
        ]},
        {"heading": "Method 3: Share in the community", "paragraphs": [
            "Share your pet on GitHub, Reddit, or Discord. Include a README with a screenshot and installation instructions.",
            "Only share pets you created or have permission to distribute. For brand logo pets, check your company's guidelines before sharing publicly.",
        ]},
        {"heading": "Best practices", "list": [
            "Include a preview image so people know what the pet looks like",
            "Name the ZIP file clearly, like my-pixel-cat-petgen.zip",
            "Keep pet.json metadata accurate for proper display",
            "Test the ZIP on a fresh install before sharing",
            "Mention which Codex version the pet was tested with",
        ]},
        {"heading": "Start sharing", "paragraphs": [
            "Generate your pet on PetGen, download the ZIP, and send it. Friends will have it running in Codex within minutes.",
            "Try creating one from your company logo for a team-branded companion, or read our creative uses guide for more ideas.",
        ]},
    ]
))

# Post 5: Best photo tips
new_posts_code.append(build_post(
    'best-photos-for-pixel-pet-generator',
    "Best Photo Tips for a Perfect Pixel Pet",
    "Not all photos make great pixel pets. Learn which images work best with PetGen's AI and how to prepare your photos for the highest quality pixel-art conversion.",
    ['best photos for pet generator', 'pixel art pet tips', 'pet photo guide', 'petgen photo tips', 'pixel pet quality', 'pet image preparation', 'pet photo best practices', 'pixel art from photo', 'pet photo optimization', 'ai pet generator tips'],
    [
        {"heading": "The right photo makes all the difference", "paragraphs": [
            "PetGen's AI does an impressive job converting photos to pixel-art pets, but output quality depends heavily on the input. A well-chosen photo produces a charming pixel companion.",
            "Here is everything you need to know about picking and preparing photos for the best results.",
        ]},
        {"heading": "What makes a great pet photo?", "list": [
            "Clear subject centered in the frame",
            "Simple background to help the AI isolate the subject",
            "Even, front-facing light without harsh shadows",
            "At least 512x512 pixels. Larger is better up to 10MB",
            "Front or three-quarter angle",
            "Single subject only",
        ]},
        {"heading": "Photo types that work best", "paragraphs": [
            "Pet photos produce excellent results. Cats and dogs with distinct features translate particularly well. Human portraits also work great, especially close-ups.",
            "For objects and logos, simple shapes with clean outlines work best. A coffee mug, game controller, or recognizable logo silhouette all make great pixel pets.",
        ]},
        {"heading": "Photo types to avoid", "paragraphs": [
            "Group photos where the subject is small relative to the frame. Crop tightly around the subject first.",
            "Very dark or backlit photos lose detail during pixelation. Brighten them first.",
            "Low-resolution or heavily compressed images lack needed detail. Use the largest version available.",
        ]},
        {"heading": "Pre-processing tips", "list": [
            "Crop to a square aspect ratio (1:1) centered on the subject",
            "Remove or blur cluttered backgrounds",
            "Adjust brightness and contrast for clear separation",
            "Resize to at least 800x800 pixels if smaller",
            "Save as PNG for highest quality",
        ]},
        {"heading": "Try multiple attempts", "paragraphs": [
            "Even with a perfect photo, the first pixel base may not match your vision. The free Starter plan includes 3 generations for experimentation.",
            "Sometimes a quirky angle produces the most charming pixel pet. Do not be afraid to experiment.",
        ]},
        {"heading": "Ready to make your perfect pet?", "paragraphs": [
            "Pick your best image and upload it to PetGen. The process takes about 90 seconds.",
            "Once ready, follow the installation guide to bring it to life in Codex. To match colors to your theme, read our color customization guide.",
        ]},
    ]
))

# Write the file
all_posts = ",\n".join(new_posts_code)
with open(path, 'w', encoding='utf-8') as f:
    f.write(header + ",\n" + all_posts + "\n]")

print(f"Wrote {len(new_posts_code)} posts to posts.ts")
for p in new_posts_code:
    m = re.search(r"slug:\s+'([^']+)'", p)
    if m:
        print(f"  /blog/{m.group(1)}")
print("Done!")
