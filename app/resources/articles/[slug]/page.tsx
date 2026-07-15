import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { getPublishedArticles, getArticleBySlug, formatDate, SERIES, Block } from '@/lib/articles'

export const revalidate = 3600

export function generateStaticParams() {
  return getPublishedArticles().map((a) => ({ slug: a.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://www.collabedgesolutions.com.au/resources/articles/${article.slug}`,
      images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
      type: 'article',
    },
  }
}

// Inline renderer: handles [text](href) links and **bold** spans
function renderInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = []
  const pattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g
  let last = 0
  let match: RegExpExecArray | null
  let key = 0
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index))
    if (match[1] !== undefined) {
      const label = match[1]
      const href = match[2]
      if (href.startsWith('/')) {
        nodes.push(
          <Link key={key++} href={href} className="text-brand-goldLight font-semibold hover:underline">
            {label}
          </Link>
        )
      } else {
        nodes.push(
          <a
            key={key++}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-goldLight font-semibold hover:underline"
          >
            {label}
          </a>
        )
      }
    } else if (match[3] !== undefined) {
      nodes.push(
        <strong key={key++} className="font-bold text-text-dark">
          {match[3]}
        </strong>
      )
    }
    last = match.index + match[0].length
  }
  if (last < text.length) nodes.push(text.slice(last))
  return nodes
}

function SeriesNav({ currentSlug }: { currentSlug: string }) {
  return (
    <div className="bg-offwhite border border-border rounded-xl p-6 my-8">
      <h3 className="text-[18px] font-bold text-text-dark mb-4">The NDIS Productivity Series</h3>
      <ol className="flex flex-col gap-3">
        {SERIES.map((item) => (
          <li key={item.position} className="flex items-start gap-3">
            <span className="text-[14px] font-bold text-brand-goldLight flex-shrink-0 w-5">
              {item.position}.
            </span>
            {item.slug === currentSlug ? (
              <span className="text-[16px] font-semibold text-text-dark">
                {item.title} <span className="text-[14px] text-slate font-normal">(this article)</span>
              </span>
            ) : (
              <Link
                href={`/resources/articles/${item.slug}`}
                className="text-[16px] font-semibold text-brand-goldLight hover:underline"
              >
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}

function ArticleBlock({ block, slug }: { block: Block; slug: string }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="text-[26px] font-bold text-text-dark tracking-tight mt-12 mb-4 leading-snug">
          {renderInline(block.text)}
        </h2>
      )
    case 'h3':
      return (
        <h3 className="text-[18px] font-bold text-text-dark mt-8 mb-3">
          {renderInline(block.text)}
        </h3>
      )
    case 'note':
      return (
        <p className="text-[14px] italic text-slate border-l-2 border-gold/40 pl-4 my-6 leading-relaxed">
          {renderInline(block.text)}
        </p>
      )
    case 'image':
      return (
        <figure className="my-8">
          <Image
            src={block.image.src}
            alt={block.image.alt}
            width={block.image.width}
            height={block.image.height}
            className="rounded-xl w-full h-auto"
          />
          {block.caption && (
            <figcaption className="text-[14px] italic text-slate mt-3 leading-relaxed">
              {renderInline(block.caption)}
            </figcaption>
          )}
        </figure>
      )
    case 'series-nav':
      return <SeriesNav currentSlug={slug} />
    case 'p':
    default:
      return (
        <p className="text-[16px] text-text-body leading-relaxed mb-5">
          {renderInline(block.text)}
        </p>
      )
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()
  const today = new Date().toISOString().slice(0, 10)
  if (article.date > today) notFound()

  return (
    <article className="bg-white">
      {/* Header */}
      <header className="bg-navy py-14 px-5 sm:px-10">
        <div className="max-w-[760px] mx-auto">
          <span className="inline-block text-[13px] font-semibold tracking-[.14em] uppercase text-brand-goldDark bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-5">
            {article.category}
          </span>
          <h1 className="text-[30px] md:text-[36px] font-bold text-white tracking-tight leading-[1.2] mb-5">
            {article.title}
          </h1>
          <p className="text-[14px] text-[#D1D5DB]">
            By{' '}
            <Link href="/about/sinclair-hurtis" className="text-brand-goldDark font-semibold hover:underline">
              {article.author}
            </Link>
            {' '}&middot; {formatDate(article.date)}
            {article.updated && <> &middot; Updated {formatDate(article.updated)}</>}
          </p>
        </div>
      </header>

      {/* Body */}
      <div className="py-12 px-5 sm:px-10">
        <div className="max-w-[760px] mx-auto">
          {article.blocks.map((block, i) => (
            <ArticleBlock key={i} block={block} slug={article.slug} />
          ))}

          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-[16px] font-semibold text-brand-goldLight hover:gap-3 transition-all duration-200"
            >
              <ArrowLeft size={16} />
              Back to Resources
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}