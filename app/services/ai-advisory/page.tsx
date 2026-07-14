import type { Metadata } from 'next'
import {
  Brain, TrendingUp, Shield, Zap, ArrowRight, Download
} from 'lucide-react'
import CTASection from '@/components/ui/CTASection'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'
import FAQAccordion, { FAQ } from '@/components/sections/FAQAccordion'
import VideoEmbed from '@/components/VideoEmbed'

export const metadata: Metadata = {
  title: 'AI Advisory for NDIS Providers and Small Business | CollabEdge Solutions',
  description:
    'Honest advice on where AI fits in your business. What to automate, what to leave alone, cost and time savings, and whether moving from SaaS subscriptions to bespoke AI-assisted solutions stacks up.',
  openGraph: {
    title: 'AI Advisory | CollabEdge Solutions',
    description:
      'AI advice without the hype. Grounded recommendations with cost benefit numbers for NDIS providers and Australian small businesses.',
    url: 'https://collabedgesolutions.com.au/services/ai-advisory',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AI Advisory',
  provider: {
    '@type': 'ProfessionalService',
    name: 'CollabEdge Solutions',
    url: 'https://collabedgesolutions.com.au',
  },
  areaServed: 'AU',
  description:
    'AI advisory for NDIS providers and Australian small businesses: what to automate, cost and time saving analysis, SaaS versus bespoke comparison, and safe adoption with policy and governance.',
}

const aiFaqs: FAQ[] = [
  {
    q: 'Is AI safe to use with NDIS participant data?',
    a: 'Only with the right safeguards. Sensitive client data should be de-identified before it goes anywhere near an AI tool, and your team needs clear rules about what can and cannot be shared. Setting up those safeguards is a core part of what we advise on.',
  },
  {
    q: 'Will AI actually save my business money?',
    a: 'Sometimes, and we will tell you when it will not. The savings are real when AI removes genuinely repetitive work, and illusory when a tool is bought before the workflow is understood. Every recommendation we make comes with the expected saving and the payback period.',
  },
  {
    q: 'Should I replace my software subscriptions with a custom-built solution?',
    a: 'It depends on your team size, your workflows, and what you are paying per seat. AI-assisted development has made bespoke solutions viable for small businesses in a way they were not a few years ago, but staying on your current software is sometimes the right answer. We run the comparison so you decide with the numbers in front of you.',
  },
]

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: aiFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

const coverage = [
  {
    icon: Brain,
    title: 'What to Automate and What Not To',
    body: 'A clear-eyed assessment of your workflows. Where AI genuinely saves time and money, where it introduces risk, and where the honest answer is that a human should keep doing it. Pros and cons stated plainly for each candidate.',
  },
  {
    icon: TrendingUp,
    title: 'The Cost and Time Saving Case',
    body: 'Numbers before commitments. For every recommendation you get the expected time saved, the cost to implement, and the payback period, so the decision is a business decision rather than a leap of faith.',
  },
  {
    icon: Zap,
    title: 'SaaS Subscriptions or Bespoke',
    body: 'Per-seat subscription costs add up fast for a growing team. AI-assisted development has changed the economics of building your own. We assess when staying on SaaS is right and when a bespoke solution pays for itself, with a full cost benefit comparison.',
  },
  {
    icon: Shield,
    title: 'Safe and Confident Adoption',
    body: 'AI policy and governance sized for your organisation, privacy-safe workflows for sensitive client data, and practical capability building for your team, including how to prompt these tools well, woven into every engagement.',
  },
]

export default function AiAdvisoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-border px-5 sm:px-10 py-3">
        <div className="max-w-[1000px] mx-auto">
          <ol className="flex items-center gap-2 text-[14px] text-slate">
            <li><a href="/services" className="hover:text-brand-goldLight transition-colors">Services</a></li>
            <li className="text-slate-light">/</li>
            <li className="text-text-dark font-medium">AI Advisory</li>
          </ol>
        </div>
      </nav>

      {/* 1. Hero */}
      <section className="bg-navy py-16 sm:py-20 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="w-9 h-[2px] bg-gold mb-4" />
            <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/80 mb-3 block">
              AI Advisory
            </span>
            <h1 className="text-[34px] md:text-[40px] font-bold text-white tracking-tight leading-[1.15] mb-5 max-w-[680px]">
              AI Advice Without the Hype
            </h1>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-[620px] mb-8">
              Everyone is telling you AI will transform your business. We help you work out where that is actually true for you, what it costs, what it saves, and what to leave well alone. Grounded advice from a team that builds and uses these tools daily.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/appt" className="btn-gold">Book a Free Consultation</a>
              <a href="/ai-automation" className="btn-ghost">Explore the AI Hub</a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. What AI Advisory covers */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-10 leading-snug">
              What We Help You Decide
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {coverage.map((card, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 80}>
                <div className="bg-white rounded-xl p-6 border border-border h-full hover:border-gold/30 hover:shadow-md hover:-translate-y-[2px] transition-all duration-200">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <card.icon size={18} className="text-gold" />
                  </div>
                  <h3 className="text-[18px] font-bold text-text-dark mb-3">{card.title}</h3>
                  <p className="text-[14px] text-slate leading-relaxed">{card.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn variant="fadeUp" delay={coverage.length * 80}>
            <p className="text-[14px] font-semibold text-slate mt-10 mb-4">
              See MedPrivacy de-identification in action below.
            </p>
            <div className="max-w-[620px]">
              <VideoEmbed
                videoId="4egH7q4hG5I"
                title="MedPrivacy Demo: Safe AI for NDIS and Allied Health Documentation"
                duration="4:37"
              />
            </div>
          </FadeIn>
          <FadeIn variant="fadeUp" delay={coverage.length * 80 + 80}>
            <div className="mt-10 bg-white rounded-xl border border-border p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 max-w-[620px] hover:border-gold/30 hover:shadow-md transition-all duration-200">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Download size={18} className="text-gold" />
              </div>
              <div className="flex-1">
                <p className="text-[15px] font-semibold text-text-dark mb-1">
                  Get 100 ready-to-use AI prompts for your team, organised by NDIS role.
                </p>
                <p className="text-[14px] text-slate">Support coordinators, plan managers, allied health, families, and more.</p>
              </div>
              <a
                href="/resources/downloads"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-goldLight hover:text-gold transition-colors whitespace-nowrap"
              >
                Download now <ArrowRight size={14} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. Where advisory ends and delivery begins */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-4 leading-snug">
              Advice First, Then the Right Builder
            </h2>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-[720px]">
              AI Advisory produces the decision and the roadmap. When the answer involves building something, delivery goes to the right team: internal process automation through{' '}
              <a href="/services/healthcare-workflow" className="text-brand-goldDark font-semibold hover:underline">
                Healthcare Workflow Automation
              </a>
              , AI agents, websites, and analytics through{' '}
              <a href="/services/digital" className="text-brand-goldDark font-semibold hover:underline">
                Digital Services
              </a>
              , and specialist enterprise needs through{' '}
              <a href="/services/partner-solutions" className="text-brand-goldDark font-semibold hover:underline">
                Partner Solutions
              </a>
              .
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 4. Managed Services mention */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              One Team, Ongoing
            </h2>
            <p className="text-[16px] text-slate leading-relaxed max-w-[720px]">
              Many clients start with a single advisory engagement and move to CollabEdge Managed Services, one team looking after compliance, automation, and technology on an ongoing basis. Every product CollabEdge builds is included as part of a Managed Services engagement, and your AI roadmap keeps evolving as the tools do.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[760px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-8 leading-snug">
              Common Questions
            </h2>
          </FadeIn>
          <FadeIn variant="fadeUp" delay={100}>
            <FAQAccordion faqs={aiFaqs} />
          </FadeIn>
        </div>
      </section>

      {/* 6. Final CTA */}
      <CTASection
        heading="Start With the Right Question"
        sub="A free 30 minute conversation about where AI fits in your business, and where it does not."
        ctaLabel="Book a Free Consultation"
        ctaHref="/appt"
      />
    </>
  )
}