import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'
import CTASection from '@/components/ui/CTASection'
import { getPublishedArticles, formatDate, SERIES, Article } from '@/lib/articles'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Resources | CollabEdge Solutions',
  description:
    'Practical articles and guides for NDIS providers and Australian small businesses. Productivity, compliance, data and AI, written by an active practitioner.',
  openGraph: {
    title: 'Resources | CollabEdge Solutions',
    description:
      'Practical articles and guides for NDIS providers and Australian small businesses, written by an active practitioner.',
    url: 'https://www.collabedgesolutions.com.au/resources',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'website',
  },
}

function ArticleCard({ article, dark }: { article: Article; dark?: boolean }) {
  return (
    <Link
      href={`/resources/articles/${article.slug}`}
      className={`block rounded-xl overflow-hidden border h-full hover:-translate-y-[2px] hover:shadow-md transition-all duration-200 ${
        dark
          ? 'bg-white/[0.04] border-white/10 hover:border-gold/30'
          : 'bg-white border-border hover:border-gold/30'
      }`}
    >
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src={article.thumbnail.src}
          alt={article.thumbnail.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <span
          className={`inline-block text-[13px] font-semibold tracking-[.12em] uppercase mb-3 ${
            dark ? 'text-brand-goldDark' : 'text-brand-goldLight'
          }`}
        >
          {article.category}
        </span>
        <h3 className={`text-[18px] font-bold mb-2 leading-snug ${dark ? 'text-white' : 'text-text-dark'}`}>
          {article.title}
        </h3>
        <p className={`text-[14px] leading-relaxed mb-4 ${dark ? 'text-[#D1D5DB]' : 'text-slate'}`}>
          {article.description.length > 150
            ? article.description.slice(0, article.description.lastIndexOf(' ', 150)) + '...'
            : article.description}
        </p>
        <span className={`text-[14px] ${dark ? 'text-[#9CA3AF]' : 'text-slate-light'}`}>
          {formatDate(article.date)}
        </span>
      </div>
    </Link>
  )
}

export default function ResourcesPage() {
  const articles = getPublishedArticles()
  const seriesArticles = SERIES
    .map((s) => articles.find((a) => a.slug === s.slug))
    .filter((a): a is Article => a !== undefined)

  return (
    <>
      {/* 1. Hero */}
      <section className="bg-navy py-16 sm:py-20 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="w-9 h-[2px] bg-gold mb-4" />
            <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/80 mb-3 block">
              Resources
            </span>
            <h1 className="text-[34px] md:text-[40px] font-bold text-white tracking-tight leading-[1.15] mb-5 max-w-[680px]">
              Practical Guidance, Written by Practitioners
            </h1>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-[620px]">
              Articles and guides on NDIS productivity, compliance, data and AI. No theory for the sake of it. Everything here comes from work we do every week.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Featured series */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-3 leading-snug">
              The NDIS Productivity Series
            </h2>
            <p className="text-[16px] text-slate leading-relaxed mb-10 max-w-[680px]">
              A five part series on staying viable and ethical as the scheme tightens.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {seriesArticles.map((article, i) => (
              <FadeIn key={article.slug} variant="fadeUp" delay={i * 80}>
                <ArticleCard article={article} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. All articles */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-10 leading-snug">
              All Articles
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((article, i) => (
              <FadeIn key={article.slug} variant="fadeUp" delay={i * 70}>
                <ArticleCard article={article} dark />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AI Hub crosslink */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              Going Deeper on AI and Automation
            </h2>
            <p className="text-[16px] text-slate leading-relaxed mb-8 max-w-[680px]">
              The AI and Automation Hub is our flagship topic area, with walkthroughs and practical demonstrations for providers and small businesses. Explore it at the link below.
            </p>
            <a
              href="/ai-automation"
              className="inline-flex items-center gap-2 bg-navy text-white text-[14px] font-semibold rounded-lg px-6 py-3 hover:bg-navy-mid transition-colors"
            >
              Visit the AI and Automation Hub
              <ArrowRight size={14} />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* 5. Final CTA */}
      <CTASection
        heading="Prefer a Conversation?"
        sub="A free 30 minute conversation beats an hour of reading. Bring your questions."
        ctaLabel="Book a Free Consultation"
        ctaHref="/appt"
      />
    </>
  )
}