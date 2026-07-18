import type { Metadata } from 'next'
import {
  Shield, CheckCircle, ArrowRight, FileText,
  ClipboardCheck, AlertCircle, Award,
} from 'lucide-react'
import PageHero from '@/components/corporate/PageHero'
import CTASection from '@/components/ui/CTASection'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'
import FAQAccordion from '@/components/sections/FAQAccordion'

export const metadata: Metadata = {
  title: 'NDIS Compliance and Audit Services | CollabEdge Solutions',
  description:
    'NDIS compliance consulting, audit readiness, and governance frameworks for Australian providers, with transparent pricing from $2,500.',
  openGraph: {
    title: 'NDIS Compliance and Audit | CollabEdge Solutions',
    description:
      'Compliance documentation and audit readiness that holds up under NDIS Commission review.',
    url: 'https://www.collabedgesolutions.com.au/services/ndis-compliance-audit',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'NDIS Compliance and Audit Consulting',
  provider: {
    '@type': 'ProfessionalService',
    name: 'CollabEdge Solutions',
    url: 'https://www.collabedgesolutions.com.au',
  },
  areaServed: 'AU',
  description:
    'NDIS compliance documentation, audit readiness, and governance frameworks for Australian NDIS providers.',
  offers: [
    { '@type': 'Offer', name: 'Tier 1 — Foundation', priceRange: '$2500-$4000', priceCurrency: 'AUD' },
    { '@type': 'Offer', name: 'Tier 2 — Comprehensive', priceRange: '$4500-$6500', priceCurrency: 'AUD' },
    { '@type': 'Offer', name: 'Tier 3 — Enterprise', priceRange: '$8000-$12000', priceCurrency: 'AUD' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does an NDIS compliance engagement take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tier 1 engagements typically take 3-4 weeks. Tier 2 engagements take 6-8 weeks. Tier 3 multi-site engagements are scoped individually based on complexity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to change software or platforms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. CollabEdge Solutions builds compliance frameworks using the Microsoft 365 or Google Workspace environment you already have. We do not require new platform purchases.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I am audited during the engagement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We prioritise the highest-risk documentation first specifically to reduce this risk, and can accelerate timelines if an audit date is already confirmed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is pricing negotiable for smaller providers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tier 1 pricing already reflects a foundation-level scope for smaller and sole trader providers. Contact us to discuss your specific situation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with providers outside Victoria?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. CollabEdge Solutions works with NDIS providers across Australia, with most engagements delivered remotely.',
      },
    },
  ],
}

const features = [
  {
    icon: ClipboardCheck,
    title: 'Compliance Gap Assessment',
    desc: 'A structured review of your current documentation and processes against NDIS Practice Standards.',
  },
  {
    icon: FileText,
    title: 'Documentation Rebuild',
    desc: 'Policies, procedures, and evidence frameworks rebuilt to be clear, current, and audit-ready.',
  },
  {
    icon: AlertCircle,
    title: 'Risk and Incident Frameworks',
    desc: 'Structured incident management and risk registers that meet Commission expectations.',
  },
  {
    icon: Award,
    title: 'Audit Readiness Support',
    desc: 'Direct preparation and support in the lead-up to certification or surveillance audits.',
  },
]

const tier1Features = [
  'Compliance gap assessment',
  'Core policy and procedure set',
  'Basic risk register',
  'Email support during engagement',
]

const tier2Features = [
  'Everything in Tier 1',
  'Full documentation rebuild',
  'Incident management framework',
  'Audit readiness preparation',
  'Direct phone and email support',
]

const tier3Features = [
  'Everything in Tier 2',
  'Multi-site documentation',
  'Custom governance framework',
  'Ongoing advisory retainer option',
  'Priority senior consultant access',
]

const processSteps = [
  { step: '01', title: 'Free Consultation', desc: 'We discuss your current state and confirm the right tier.' },
  { step: '02', title: 'Gap Assessment', desc: 'Existing documentation reviewed against NDIS Practice Standards.' },
  { step: '03', title: 'Rebuild', desc: 'Documentation and frameworks rebuilt to be clear and audit-ready.' },
  { step: '04', title: 'Handover', desc: 'Your team is trained on the new structure, ready for audit.' },
]

export default function NDISComplianceAuditPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-navy px-5 sm:px-10 pt-6 pb-2">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeIn">
            <div className="flex items-center gap-2 text-[14px] text-[#9CA3AF]">
              <a href="/services" className="hover:text-brand-goldDark transition-colors">Services</a>
              <span>/</span>
              <span className="text-[#D1D5DB]">NDIS Compliance and Audit</span>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Hero */}
      <PageHero
        eyebrow="NDIS Compliance and Audit"
        h1="Compliance that holds up under review."
        answerBlock="CollabEdge Solutions builds NDIS compliance documentation and audit readiness frameworks for Australian providers, structured, practitioner-tested, and built to withstand NDIS Commission scrutiny. Pricing starts from $2,500 with three transparent tiers based on scope."
      />

      {/* What does NDIS compliance support include? */}
      <section className="bg-white py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              What does NDIS compliance and audit support include?
            </h2>
            <p className="text-[16px] text-slate leading-relaxed mb-10 max-w-[680px]">
              CollabEdge Solutions reviews existing documentation and processes against NDIS Practice Standards, identifies compliance gaps, and rebuilds governance frameworks so they are structured, evidence-based, and ready for audit, without introducing new software your team needs to learn.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((item, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 80}>
                <div className="flex items-start gap-4 bg-offwhite rounded-xl p-6 border border-border hover:border-gold/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-text-dark mb-1.5">{item.title}</h3>
                    <p className="text-[14px] text-slate leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn variant="fadeUp" delay={200}>
            <p className="text-[14px] text-slate mt-8">
              Unregistered SIL provider facing the registration deadline?{' '}
              <a
                href="/services/ndis-compliance-audit/sil-registration"
                className="inline-flex items-center gap-1 font-semibold text-brand-goldLight hover:underline underline-offset-2"
              >
                See how we help <ArrowRight size={13} />
              </a>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/80 mb-2 block">
              Transparent Pricing
            </span>
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-4 leading-snug">
              How much does NDIS compliance and audit support cost?
            </h2>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed mb-10 max-w-[680px]">
              Pricing depends on the scope of your current documentation and the size of your organisation. Most providers fall into Tier 2. Every engagement begins with a free consultation to confirm the right scope before any commitment.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Tier 1 */}
            <FadeIn variant="fadeUp" delay={0}>
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-7 h-full flex flex-col">
                <span className="text-[13px] font-bold tracking-[.1em] uppercase text-[#9CA3AF] mb-2 block">
                  Tier 1: Foundation
                </span>
                <div className="mb-5">
                  <span className="text-[26px] font-bold text-white">$2,500</span>
                  <span className="text-[14px] text-[#9CA3AF]"> – $4,000</span>
                </div>
                <p className="text-[14px] text-[#D1D5DB] leading-relaxed mb-6">
                  For sole traders and small providers needing core compliance documentation in place.
                </p>
                <div className="flex flex-col gap-2.5 mb-8 flex-1">
                  {tier1Features.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle size={13} className="text-gold/60 flex-shrink-0 mt-0.5" />
                      <span className="text-[14px] text-[#D1D5DB]">{item}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="/appt"
                  className="block text-center bg-white/[0.08] text-white text-[14px] font-semibold rounded-lg py-3 hover:bg-white/[0.15] transition-colors"
                >
                  Discuss This Tier
                </a>
              </div>
            </FadeIn>

            {/* Tier 2 — Most Popular */}
            <FadeIn variant="fadeUp" delay={100}>
              <div className="bg-gradient-to-b from-gold/15 to-gold/[0.05] border-2 border-gold rounded-xl p-7 h-full flex flex-col relative md:-translate-y-3 md:shadow-2xl">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy text-[13px] font-bold uppercase tracking-wide px-3 py-1 rounded-full">
                  Most Popular
                </span>
                <span className="text-[13px] font-bold tracking-[.1em] uppercase text-brand-goldDark mb-2 block mt-2">
                  Tier 2: Comprehensive
                </span>
                <div className="mb-5">
                  <span className="text-[26px] font-bold text-white">$4,500</span>
                  <span className="text-[14px] text-[#D1D5DB]"> – $6,500</span>
                </div>
                <p className="text-[14px] text-[#D1D5DB] leading-relaxed mb-6">
                  For established providers preparing for certification or surveillance audit.
                </p>
                <div className="flex flex-col gap-2.5 mb-8 flex-1">
                  {tier2Features.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle size={13} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-[14px] text-[#F1F5F9]">{item}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="/appt"
                  className="block text-center bg-gold text-navy text-[14px] font-bold rounded-lg py-3 hover:bg-gold/90 transition-colors"
                >
                  Discuss This Tier
                </a>
              </div>
            </FadeIn>

            {/* Tier 3 */}
            <FadeIn variant="fadeUp" delay={200}>
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-7 h-full flex flex-col">
                <span className="text-[13px] font-bold tracking-[.1em] uppercase text-[#9CA3AF] mb-2 block">
                  Tier 3: Enterprise
                </span>
                <div className="mb-5">
                  <span className="text-[26px] font-bold text-white">$8,000</span>
                  <span className="text-[14px] text-[#9CA3AF]"> – $12,000</span>
                </div>
                <p className="text-[14px] text-[#D1D5DB] leading-relaxed mb-6">
                  For larger providers or multi-site organisations with complex compliance needs.
                </p>
                <div className="flex flex-col gap-2.5 mb-8 flex-1">
                  {tier3Features.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle size={13} className="text-gold/60 flex-shrink-0 mt-0.5" />
                      <span className="text-[14px] text-[#D1D5DB]">{item}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="/appt"
                  className="block text-center bg-white/[0.08] text-white text-[14px] font-semibold rounded-lg py-3 hover:bg-white/[0.15] transition-colors"
                >
                  Discuss This Tier
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn variant="fadeUp" delay={300}>
            <p className="text-[14px] text-[#9CA3AF] text-center mt-8">
              Not sure which tier fits? Every engagement starts with a free 30-minute consultation to confirm scope.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Process */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-10 leading-snug">
              How the engagement works
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((item, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 80}>
                <div>
                  <span className="text-[32px] font-bold text-brand-goldLight/40 block mb-2">{item.step}</span>
                  <h3 className="text-[18px] font-bold text-text-dark mb-2">{item.title}</h3>
                  <p className="text-[14px] text-slate leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-5 sm:px-10">
        <div className="max-w-[760px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-8 leading-snug">
              Frequently asked questions
            </h2>
          </FadeIn>
          <FadeIn variant="fadeUp" delay={100}>
            <FAQAccordion />
          </FadeIn>
        </div>
      </section>

      {/* Related Case Study */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <a
              href="/case-studies/enhance-ability-services"
              className="block bg-white/[0.04] border border-white/10 rounded-xl p-7 hover:border-gold/30 transition-colors group"
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <span className="text-[13px] font-bold tracking-[.12em] uppercase text-brand-goldDark/80 mb-2 block">
                    Case Study
                  </span>
                  <h3 className="text-[18px] font-bold text-white mb-2">
                    See this in action: Enhance Ability Services
                  </h3>
                  <p className="text-[14px] text-[#D1D5DB] max-w-[520px]">
                    How a Geelong NDIS provider moved from overwhelmed to structured, audit-ready operations.
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-goldDark group-hover:gap-3 transition-all duration-200 flex-shrink-0">
                  Read the case study <ArrowRight size={13} />
                </span>
              </div>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Ready to get audit-ready?"
        sub="Free 30-minute consultation. We will confirm the right tier together."
        ctaLabel="Book a Free Consultation"
        ctaHref="/appt"
      />
    </>
  )
}