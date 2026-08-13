import { Fragment } from 'react'
import type { Metadata } from 'next'
import {
  Grid3x3,
  Film,
  FileJson,
  Terminal,
  CheckCircle,
} from 'lucide-react'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { buildMetadata, SITE } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import CodeBlock from '@/components/ui/CodeBlock'
import { ANIMATION_STATES, SPRITE_COLS } from '@/types/pet'
import { getServerT } from '@/lib/i18n/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getServerT()
  return buildMetadata({
    title: t('spec.title'),
    description: t('spec.desc'),
    path: '/spec',
  })
}

const SECTIONS = [
  { id: 'overview', labelKey: 'spec.overview' },
  { id: 'spritesheet', labelKey: 'spec.spritesheet' },
  { id: 'states', labelKey: 'spec.states' },
  { id: 'pet-json', labelKey: 'spec.petJson' },
  { id: 'install', labelKey: 'spec.install' },
  { id: 'validate', labelKey: 'spec.validate' },
] as const

const PET_JSON_EXAMPLE = `{
  "id": "pet_abc123",
  "displayName": "Pixel Companion",
  "description": "A cheerful pixel-art pet for OpenAI Codex.",
  "spritesheetPath": "spritesheet.webp"
}`

const INSTALL_MACOS = `mkdir -p ~/.codex/pets/my-pixel-pet
unzip -o my-pixel-pet.zip -d ~/.codex/pets/my-pixel-pet`

const INSTALL_WINDOWS = `New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\\.codex\\pets\\my-pixel-pet"
Expand-Archive -Path "my-pixel-pet.zip" -DestinationPath "$env:USERPROFILE\\.codex\\pets\\my-pixel-pet" -Force`

const specJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Codex Pet Spritesheet Specification',
  author: { '@type': 'Organization', name: SITE.fullName },
  publisher: { '@type': 'Organization', name: SITE.fullName },
  mainEntityOfPage: { '@type': 'WebPage', '@id': SITE.url + '/spec' },
  about: [
    {
      '@type': 'Thing',
      name: 'Codex Pet Spritesheet',
      description:
        'A 1536×1872 px transparent spritesheet with 9 animation states × 8 frames laid out in an 8-column by 9-row grid.',
    },
    {
      '@type': 'Thing',
      name: 'pet.json',
      description:
        'A metadata file describing a Codex pet: id, displayName, description, and spritesheetPath.',
    },
  ],
}

export default async function SpecPage() {
  const t = await getServerT()
  const rows = ANIMATION_STATES.length // 9
  const cols = SPRITE_COLS // 8

  return (
    <>
      <Navbar />
      <JsonLd data={specJsonLd} />

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        {/* Header */}
        <header>
          <h1 className="font-pixel text-lg leading-relaxed text-text-primary sm:text-xl">
            {t('spec.title')}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary">
            {t('spec.desc')}
          </p>
        </header>

        {/* Layout: sticky anchor nav + content */}
        <div className="mt-10 lg:flex lg:gap-10">
          <nav className="mb-8 lg:mb-0 lg:w-48 lg:shrink-0">
            <ul className="flex gap-2 overflow-x-auto pb-2 lg:sticky lg:top-24 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={'#' + s.id}
                    className="block whitespace-nowrap rounded-lg px-3 py-2 text-sm text-text-secondary transition-colors hover:bg-bg-elevated hover:text-text-primary"
                  >
                    {t(s.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0 flex-1 space-y-16">
            {/* Overview */}
            <section id="overview" className="scroll-mt-24">
              <h2 className="flex items-center gap-2 font-pixel text-sm text-text-primary">
                <Grid3x3 className="h-5 w-5 text-primary" />
                {t('spec.overview')}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary" dangerouslySetInnerHTML={{ __html: t('spec.overviewDesc') }} />
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {[
                  { k: 'Total', v: '1536 × 1872 px' },
                  { k: 'Grid', v: '8 cols × 9 rows' },
                  { k: 'Cell', v: '192 × 208 px' },
                ].map((m) => (
                  <div
                    key={m.k}
                    className="glass-card rounded-lg border border-border p-4"
                  >
                    <div className="text-xs uppercase tracking-wider text-text-muted">
                      {m.k}
                    </div>
                    <div className="mt-1 font-mono text-sm text-text-primary">
                      {m.v}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Spritesheet Layout */}
            <section id="spritesheet" className="scroll-mt-24">
              <h2 className="flex items-center gap-2 font-pixel text-sm text-text-primary">
                <Grid3x3 className="h-5 w-5 text-primary" />
                {t('spec.spritesheet')}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                {t('spec.spritesheetLayoutDesc')}
              </p>

              <div className="glass-card mt-5 overflow-x-auto rounded-lg border border-border p-5">
                <div className="grid grid-cols-[5rem_repeat(8,minmax(2.5rem,1fr))] gap-1">
                  {/* Column header */}
                  <div />
                  {Array.from({ length: cols }).map((_, i) => (
                    <div
                      key={'col-' + i}
                      className="text-center font-mono text-[10px] text-text-muted"
                    >
                      {i + 1}
                    </div>
                  ))}

                  {/* Rows */}
                  {ANIMATION_STATES.map((state) => (
                    <Fragment key={state.key}>
                      <div className="flex items-center justify-end pr-2 font-mono text-[10px] text-text-secondary">
                        {state.key}
                      </div>
                      {Array.from({ length: cols }).map((_, i) => (
                        <div
                          key={state.key + '-' + i}
                          className="grid place-items-center rounded-sm border border-border bg-bg-surface py-2 text-[9px] text-text-muted"
                        >
                          {i + 1}
                        </div>
                      ))}
                    </Fragment>
                  ))}
                </div>
                <p className="mt-4 text-xs text-text-muted">
                  Columns → frames 1–8 · Rows → animation states (top to bottom).
                </p>
              </div>
            </section>

            {/* Animation States */}
            <section id="states" className="scroll-mt-24">
              <h2 className="flex items-center gap-2 font-pixel text-sm text-text-primary">
                <Film className="h-5 w-5 text-primary" />
                {t('spec.states')}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                {t('spec.animationStatesDesc')}
              </p>

              <div className="glass-card mt-5 overflow-x-auto rounded-lg border border-border p-5">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-border text-xs uppercase tracking-wider text-text-muted">
                      <th className="py-2 pr-4 font-medium">#</th>
                      <th className="py-2 pr-4 font-medium">Key</th>
                      <th className="py-2 pr-4 font-medium">Label</th>
                      <th className="py-2 pr-4 font-medium">Frames</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ANIMATION_STATES.map((state, i) => (
                      <tr
                        key={state.key}
                        className="border-b border-border/60 last:border-0"
                      >
                        <td className="py-2 pr-4 font-mono text-text-muted">
                          {i + 1}
                        </td>
                        <td className="py-2 pr-4 font-mono text-primary">
                          {state.key}
                        </td>
                        <td className="py-2 pr-4 text-text-secondary">
                          {state.label}
                        </td>
                        <td className="py-2 pr-4 font-mono text-text-secondary">
                          {state.frames}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* pet.json */}
            <section id="pet-json" className="scroll-mt-24">
              <h2 className="flex items-center gap-2 font-pixel text-sm text-text-primary">
                <FileJson className="h-5 w-5 text-primary" />
                {t('spec.petJson')}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                {t('spec.petJsonDesc')}
              </p>

              <div className="mt-5">
                <CodeBlock code={PET_JSON_EXAMPLE} label="pet.json" icon />
              </div>

              <ul className="mt-5 space-y-3">
                {[
                  {
                    field: 'id',
                    desc: 'A stable unique identifier for the pet (used for caching and future updates).',
                  },
                  {
                    field: 'displayName',
                    desc: 'The human-readable name shown in Codex and the pet picker.',
                  },
                  {
                    field: 'description',
                    desc: 'A short sentence describing the pet, shown as a tooltip or in listings.',
                  },
                  {
                    field: 'spritesheetPath',
                    desc: 'Path to the spritesheet image, relative to pet.json (usually spritesheet.webp).',
                  },
                ].map((f) => (
                  <li
                    key={f.field}
                    className="flex gap-3 text-sm text-text-secondary"
                  >
                    <code className="shrink-0 font-mono text-accent">
                      {f.field}
                    </code>
                    <span className="leading-relaxed">{f.desc}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Install */}
            <section id="install" className="scroll-mt-24">
              <h2 className="flex items-center gap-2 font-pixel text-sm text-text-primary">
                <Terminal className="h-5 w-5 text-primary" />
                {t('spec.install')}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                {t('spec.installDesc')}
              </p>

              <div className="mt-5 space-y-5">
                <CodeBlock
                  code={INSTALL_MACOS}
                  label="macOS — Terminal"
                  icon
                />
                <CodeBlock
                  code={INSTALL_WINDOWS}
                  label="Windows — PowerShell"
                  icon
                />
              </div>
            </section>

            {/* Validate */}
            <section id="validate" className="scroll-mt-24">
              <h2 className="flex items-center gap-2 font-pixel text-sm text-text-primary">
                <CheckCircle className="h-5 w-5 text-primary" />
                {t('spec.validate')}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                {t('spec.validateDesc')}
              </p>

              <ul className="mt-5 space-y-3">
                {[
                  'Spritesheet is exactly 1536 × 1872 px (8 columns × 9 rows, 192 × 208 px cells).',
                  'All nine animation states are present and in the correct row order with their expected frame counts.',
                  'pet.json defines all four fields: id, displayName, description, spritesheetPath.',
                ].map((item) => (
                  <li
                    key={item}
                    className="glass-card flex items-start gap-3 rounded-lg border border-border p-4 text-sm text-text-secondary"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
