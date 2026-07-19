'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'
import CTASection from '@/components/ui/CTASection'
import FAQAccordion, { FAQ } from '@/components/sections/FAQAccordion'

const PropertyManagerDashboard = dynamic(
  () => import('@/components/analytics/proptech/PropertyManagerDashboard'),
  { ssr: false }
)
const MortgageBrokerDashboard = dynamic(
  () => import('@/components/analytics/proptech/MortgageBrokerDashboard'),
  { ssr: false }
)
const BuilderDeveloperDashboard = dynamic(
  () => import('@/components/analytics/proptech/BuilderDeveloperDashboard'),
  { ssr: false }
)
const ConveyancerDashboard = dynamic(
  () => import('@/components/analytics/proptech/ConveyancerDashboard'),
  { ssr: false }
)
const RealEstateAgentDashboard = dynamic(
  () => import('@/components/analytics/proptech/RealEstateAgentDashboard'),
  { ssr: false }
)

type SegmentId = 'property-manager' | 'mortgage-broker' | 'builder-developer' | 'conveyancer' | 'real-estate-agent'

const segmentMeta: { id: SegmentId; name: string; description: string; painPoints: string }[] = [
  {
    id: 'property-manager',
    name: 'Property Manager',
    description: 'Arrears, compliance notices and lease renewal pipeline',
    painPoints: 'Rent roll data lives across multiple systems and pulling it together for a single report takes most of a day. Maintenance spend is tracked at the invoice level, not the portfolio level. Arrears follow-up relies on manually checking individual tenancies rather than a ranked risk view.',
  },
  {
    id: 'mortgage-broker',
    name: 'Mortgage Broker',
    description: 'Deal pipeline, pre-approval expiry and commission reconciliation',
    painPoints: 'CRM and lender portal data is entered twice because the systems do not connect. Pre-approval expiry windows are tracked manually per deal. Referral partner value is assessed informally rather than from a settled deal conversion view.',
  },
  {
    id: 'builder-developer',
    name: 'Builder and Developer',
    description: 'Construction milestones vs financier drawdown and lot sales',
    painPoints: 'Construction progress and financier drawdown claims exist in different places and reconciling them requires manual cross-checking. Subcontractor SWMS and licence status is chased by phone before mobilisation rather than tracked systematically. Sunset clause exposure across the lot sales pipeline is not visible in one place.',
  },
  {
    id: 'conveyancer',
    name: 'Conveyancer',
    description: 'Matter pipeline, cooling-off deadlines and trust reconciliation',
    painPoints: 'Cooling-off deadlines are calculated manually from contract dates. VOI completion status is tracked per matter rather than across the full pipeline. Trust account reconciliation is done at end of day rather than surfaced in real time.',
  },
  {
    id: 'real-estate-agent',
    name: 'Real Estate Agent',
    description: 'Enquiry to offer conversion and underquoting compliance',
    painPoints: 'Enquiry follow-up rates vary by agent but there is no structured view of where leads drop off between portal enquiry and inspection. Underquoting compliance documentation is assembled retrospectively rather than recorded at the time of each price quote. Vendor campaign reporting is compiled manually from portal analytics.',
  },
]

const dashboardMap: Record<SegmentId, React.ReactNode> = {
  'property-manager': <PropertyManagerDashboard />,
  'mortgage-broker': <MortgageBrokerDashboard />,
  'builder-developer': <BuilderDeveloperDashboard />,
  'conveyancer': <ConveyancerDashboard />,
  'real-estate-agent': <RealEstateAgentDashboard />,
}

const proptechAnalyticsFaqs: FAQ[] = [
  {
    q: 'Does this integrate with my property management software?',
    a: 'We start by reviewing the data and systems you already have, whether that is a property management platform, a CRM, accounting software, or a combination of spreadsheets. The reporting layer is built to connect what you already use rather than require new platforms.',
  },
  {
    q: 'Can this track compliance and maintenance obligations, not just financial performance?',
    a: 'Yes, and for most proptech businesses compliance tracking is where the biggest risk sits. Each sub-segment has specific regulatory obligations, from Residential Tenancies Act 1997 notice periods for property managers to cooling-off deadline tracking for conveyancers to underquoting documentation for real estate agents. The reporting structures we build surface these obligations before they become a problem rather than after.',
  },
  {
    q: 'How is this different from the reporting already built into my practice management system?',
    a: 'Most PM, CRM and practice management systems report on individual records rather than across the portfolio or pipeline as a whole. They show you one tenant, one deal, one matter. The reporting layer we build shows you patterns across all of them at once, ranked by risk, with compliance obligations surfaced before deadlines pass. We work with the data already in your existing system rather than replacing it.',
  },
  {
    q: 'Do you work across all the sub-segments shown, or specialise in one area?',
    a: 'We work across all five sub-segments shown. Each engagement starts with understanding the specific data stack and decision-making needs of that business type. A property management firm and a conveyancing practice have almost nothing in common operationally, which is why each sub-segment has its own use case repository and illustrative dashboard rather than a generic proptech pitch.',
  },
]

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: proptechAnalyticsFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

const steps = [
  {
    step: '01',
    title: 'Understand the data you have',
    body: 'We review your existing property management system, accounting software, and any spreadsheets your team currently relies on. We map the data you already hold before recommending anything new.',
  },
  {
    step: '02',
    title: 'Design for the decisions you make',
    body: 'We build a reporting structure around the questions your business actually needs answered, whether that is vacancy trends by property type, rent roll movement, or maintenance cost by portfolio segment.',
  },
  {
    step: '03',
    title: 'Deliver and transfer',
    body: 'You receive dashboards your team can maintain, with a handover that means the insight does not stop when we leave. Ongoing support is available if you would rather we stay close.',
  },
]

export default function ProptechPageClient() {
  const [activeId, setActiveId] = useState<SegmentId>('property-manager')
  const active = segmentMeta.find((s) => s.id === activeId)!

  return (
    <>
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
            <li><a href="/services/digital" className="hover:text-brand-goldLight transition-colors">Digital Services</a></li>
            <li className="text-slate-light">/</li>
            <li><a href="/services/analytics" className="hover:text-brand-goldLight transition-colors">Data Analytics</a></li>
            <li className="text-slate-light">/</li>
            <li className="text-text-dark font-medium">Proptech</li>
          </ol>
        </div>
      </nav>

      {/* 1. Hero */}
      <section className="bg-navy py-16 sm:py-20 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="w-9 h-[2px] bg-gold mb-4" />
            <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/80 mb-3 block">
              Data Analytics for PropTech
            </span>
            <h1 className="text-[34px] md:text-[44px] font-bold text-white tracking-tight leading-[1.15] mb-5 max-w-[720px]">
              Your Portfolio Data, Made Actionable
            </h1>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-[620px] mb-8">
              Property managers, mortgage brokers, builders, conveyancers and real estate agents who want clear insight into portfolio risk, pipeline performance and compliance obligations. CollabEdge builds the reporting layer from the data you already have.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/appt" className="btn-gold">Book a Free Consultation</a>
              <a href="/services/digital" className="btn-ghost">About Our Digital Services</a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Pain points with card grid selector */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-3 leading-snug">
              Where Property Businesses Get Stuck
            </h2>
            <p className="text-[16px] text-slate leading-relaxed mb-8 max-w-[640px]">
              The data is usually there. The problem is that it is scattered, manually assembled, and presented too late to be useful. Select your sub-segment to see what we hear most often.
            </p>
          </FadeIn>

          <FadeIn variant="fadeUp" delay={100}>
            <div
              className="grid gap-3 mb-6"
              style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}
            >
              {segmentMeta.map((seg) => (
                <button
                  key={seg.id}
                  onClick={() => setActiveId(seg.id)}
                  className={[
                    'rounded-xl p-4 text-left transition-all border-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-goldLight',
                    activeId === seg.id
                      ? 'border-navy bg-navy/5'
                      : 'border-border bg-white hover:border-navy/30',
                  ].join(' ')}
                >
                  <p className={['text-[14px] font-semibold mb-1', activeId === seg.id ? 'text-navy' : 'text-text-dark'].join(' ')}>
                    {seg.name}
                  </p>
                  <p className="text-[12px] text-slate leading-snug">{seg.description}</p>
                </button>
              ))}
            </div>

            <div className="bg-white rounded-xl border border-border p-5">
              <p className="text-[15px] text-slate leading-relaxed">{active.painPoints}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. Interactive dashboards */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-3 leading-snug">
              This Is What Clear Looks Like
            </h2>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed mb-8 max-w-[640px]">
              Each dashboard below is built for a specific proptech sub-segment. The numbers are illustrative mock data, but the structure is exactly what we build from the data already in your systems.
            </p>
          </FadeIn>
          <FadeIn variant="fadeUp" delay={100}>
            {dashboardMap[activeId]}
          </FadeIn>
        </div>
      </section>

      {/* 4. How we work */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-10 leading-snug">
              How We Work
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((item, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 90}>
                <div>
                  <span className="text-[32px] font-bold text-brand-goldLight/40 block mb-3 font-serif">
                    {item.step}
                  </span>
                  <h3 className="text-[18px] font-bold text-text-dark mb-2">{item.title}</h3>
                  <p className="text-[15px] text-slate leading-relaxed">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
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
            <FAQAccordion faqs={proptechAnalyticsFaqs} />
          </FadeIn>
        </div>
      </section>

      {/* 6. Final CTA */}
      <CTASection
        heading="Start With a Conversation"
        sub="A free 30 minute session to look at the data you have and where the biggest reporting gaps are."
        ctaLabel="Book a Free Consultation"
        ctaHref="/appt"
      />
    </>
  )
}
