import type { Metadata } from 'next'
import { BookOpen, ArrowRight } from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'

export const metadata: Metadata = {
  title: 'AI and Automation Hub | CollabEdge Solutions',
  description:
    'A learning hub for NDIS providers and Australian small businesses. Plain-language articles, guides, and video walkthroughs on AI and automation as they are published.',
  openGraph: {
    title: 'AI and Automation Hub | CollabEdge Solutions',
    description:
      'Learn how AI and automation actually work for NDIS providers and small businesses. Plain language, no hype.',
    url: 'https://collabedgesolutions.com.au/ai-automation',
  },
}

export default function AiAutomationHubPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 sm:py-20 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="w-9 h-[2px] bg-gold mb-4" />
            <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/80 mb-3 block">
              Learning Hub
            </span>
            <h1 className="text-[34px] md:text-[40px] font-bold text-white tracking-tight leading-[1.15] mb-5 max-w-[680px]">
              AI and Automation, Explained Plainly
            </h1>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-[620px]">
              This hub is a learning destination for NDIS providers and Australian small businesses. Articles, guides, and video walkthroughs on what AI and automation can genuinely do for an organisation like yours, written in plain language and published as they are ready.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Coming content note */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              Resources Are On the Way
            </h2>
            <p className="text-[16px] text-slate leading-relaxed max-w-[680px] mb-8">
              The first articles, guides, and video walkthroughs are in production and will appear here as they are published. Everything in this hub follows the same rule as our advice: plain language, no hype, and honest about what these tools can and cannot do.
            </p>
          </FadeIn>
          <FadeIn variant="fadeUp" delay={100}>
            <div className="bg-white rounded-xl p-7 border border-border flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <BookOpen size={22} className="text-brand-goldLight" />
              </div>
              <div className="flex-1">
                <h3 className="text-[18px] font-bold text-text-dark mb-1">
                  Need advice for your business?
                </h3>
                <p className="text-[14px] text-slate leading-relaxed">
                  The hub is for learning. When you want recommendations specific to your organisation, with cost benefit numbers behind them, that is AI Advisory.
                </p>
              </div>
              <a
                href="/services/ai-advisory"
                className="inline-flex items-center gap-2 bg-navy text-white text-[14px] font-semibold rounded-lg px-5 py-3 hover:bg-navy-mid transition-colors whitespace-nowrap flex-shrink-0"
              >
                Explore AI Advisory
                <ArrowRight size={13} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}