import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { buildMetadata, SITE } from '@/lib/seo'
import { posts, type BlogPost } from '@/lib/blog/posts'
import { JsonLd } from '@/components/seo/JsonLd'
import BlogPostCta from '@/components/blog/BlogPostCta'

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
    image: SITE.url + '/og-image.png',
    author: { '@type': 'Organization', name: SITE.name, url: SITE.url, '@id': SITE.url + '#organization' },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': SITE.url + '/blog/' + post.slug,
    },
    keywords: post.keywords.join(', '),
  }

  function breadcrumbJsonLd() {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: SITE.url + '/blog' },
        { '@type': 'ListItem', position: 3, name: post!.title, item: SITE.url + '/blog/' + post!.slug },
      ],
    }
  }

  const faqJsonLd = post.faq
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      }
    : null

  const RELATED_LIMIT = 4
  const currentSlug = post.slug
  const relatedPosts: BlogPost[] = []
  const relatedSlugs = new Set<string>([currentSlug])

  // Curated relations first (when the post declares them).
  for (const relatedSlug of post.related ?? []) {
    if (relatedPosts.length >= RELATED_LIMIT) break
    if (relatedSlugs.has(relatedSlug)) continue
    const match = posts.find((p) => p.slug === relatedSlug)
    if (!match) continue
    relatedPosts.push(match)
    relatedSlugs.add(match.slug)
  }

  // Top up with the following posts (cyclic) so every article links out to 3-4 others.
  const currentIndex = posts.findIndex((p) => p.slug === currentSlug)
  for (let i = 1; i < posts.length && relatedPosts.length < RELATED_LIMIT; i++) {
    const candidate = posts[(currentIndex + i) % posts.length]
    if (relatedSlugs.has(candidate.slug)) continue
    relatedPosts.push(candidate)
    relatedSlugs.add(candidate.slug)
  }

  return (
    <>
      <Navbar />
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd()} />
      {faqJsonLd && <JsonLd data={faqJsonLd} />}
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

          {post.faq && post.faq.length > 0 && (
            <section className="mt-10">
              <h2 className="font-pixel text-sm text-text-primary">Frequently asked questions</h2>
              <div className="mt-3 space-y-3">
                {post.faq.map((item, i) => (
                  <details key={i} className="rounded border px-4 py-3">
                    <summary className="cursor-pointer text-sm font-medium text-text-primary">
                      {item.question}
                    </summary>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {relatedPosts.length > 0 && (
            <section className="mt-10">
              <h2 className="font-pixel text-sm text-text-primary">Related posts</h2>
              <ul className="mt-3 space-y-2">
                {relatedPosts.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={'/blog/' + p.slug}
                      className="text-sm text-text-primary underline underline-offset-2"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <BlogPostCta />
        </article>
      </main>
      <Footer />
    </>
  )
}
