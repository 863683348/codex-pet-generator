'use client'

import Link from 'next/link'
import { useI18n } from '@/lib/i18n'
import type { BlogPost } from '@/lib/blog/posts'

export default function BlogIndexView({ posts }: { posts: BlogPost[] }) {
  const { t } = useI18n()
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-pixel text-lg text-text-primary">{t('blog.indexTitle')}</h1>
      <p className="mt-2 text-sm text-text-muted">{t('blog.indexSubtitle')}</p>
      <div className="mt-8 space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="glass-card rounded-lg border border-border p-5 transition-colors hover:bg-bg-elevated"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <h2 className="font-pixel text-xs text-text-primary hover:text-primary">{post.title}</h2>
              <p className="mt-2 text-sm text-text-secondary">{post.description}</p>
              <p className="mt-3 text-xs text-text-muted">{post.date}</p>
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}
