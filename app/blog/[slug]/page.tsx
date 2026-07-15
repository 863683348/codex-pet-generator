import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { buildMetadata, SITE } from '@/lib/seo'
import { posts } from '@/lib/blog/posts'
import { JsonLd } from '@/components/seo/JsonLd'

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: '/blog/' + post.slug,
    type: 'article',
    publishedTime: post.date,
    keywords: post.keywords,
  })
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: SITE.name },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': SITE.url + '/blog/' + post.slug,
    },
    keywords: post.keywords.join(', '),
  }

  return (
    <>
      <Navbar />
      <JsonLd data={articleJsonLd} />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <article>
          <header>
            <h1 className="font-pixel text-lg text-text-primary">{post.title}</h1>
            <p className="mt-2 text-sm text-text-muted">{post.date}</p>
            <p className="mt-4 text-sm text-text-secondary">{post.description}</p>
          </header>
          <div className="mt-8 space-y-8">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-pixel text-sm text-text-primary">{section.heading}</h2>
                {section.paragraphs?.map((p, i) => (
                  <p key={i} className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text-secondary">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
          <div className="mt-10 rounded-lg border border-accent/30 bg-accent/10 p-5">
            <h2 className="font-pixel text-[10px] text-accent">Try it yourself</h2>
            <p className="mt-2 text-sm text-text-secondary">
              Ready to turn your own photo into a pixel-art pet? Upload it on PetGen and get your
              spritesheet + pet.json in minutes.
            </p>
            <Link
              href="/"
              className="mt-3 inline-block text-sm font-medium text-primary underline hover:text-accent"
            >
              Generate your pet now →
            </Link>
          </div>
        </article>
        <div className="mt-8">
          <Link href="/blog" className="text-sm text-text-muted hover:text-text-primary">
            ← Back to blog
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
