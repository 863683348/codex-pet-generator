'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const faqs = [
  {
    q: 'What is PetGen?',
    a: 'PetGen is an AI-powered tool that transforms your photos into animated pixel-art pets compatible with OpenAI Codex. You get a spritesheet.webp and a pet.json file ready to install into Codex.',
  },
  {
    q: 'How does the pet generation work?',
    a: 'Upload a photo, and our AI creates a pixel-art base character. You approve the look, then 9 animation states are generated. The result is packaged into a ZIP file containing a spritesheet and metadata.',
  },
  {
    q: 'What image formats are supported?',
    a: 'We support JPG, PNG, and WebP formats. Maximum file size is 10MB.',
  },
  {
    q: 'How long does generation take?',
    a: 'The base character takes about 90 seconds. The full animation set takes 2–5 minutes. You can monitor progress in real time.',
  },
  {
    q: 'How do I install the pet into Codex?',
    a: 'Download the ZIP, extract it, and copy the folder to ~/.codex/pets/ (macOS/Linux) or the equivalent directory on Windows. Restart Codex and your pet will appear.',
  },
  {
    q: 'Can I use the generated pets commercially?',
    a: 'Yes, if you are on the Unlimited plan. Starter and Pro plans grant personal use only.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept major credit cards and PayPal. Payment processing is handled securely by our payment provider.',
  },
  {
    q: 'Can I cancel my subscription?',
    a: 'You can cancel anytime. Your access continues until the end of the billing period.',
  },
  {
    q: 'What happens to my uploaded images?',
    a: 'Uploaded images are processed by our AI and deleted after generation. They are not stored or used for any other purpose.',
  },
  {
    q: 'Is there a free plan?',
    a: 'Yes. The Starter plan is free and includes 3 pet generations with standard quality.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border py-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left text-sm font-medium text-text-primary"
      >
        {q}
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-text-muted transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">{a}</p>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="font-pixel text-lg text-text-primary">Frequently Asked Questions</h1>
        <p className="mt-2 text-sm text-text-muted">Everything you need to know about PetGen.</p>

        <div className="mt-8">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
