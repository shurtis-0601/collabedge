'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'
import CTASection from '@/components/ui/CTASection'
import FAQAccordion, { FAQ } from '@/components/sections/FAQAccordion'

const PhysicalRetailDashboard = dynamic(
  () => import('@/components/analytics/retail/PhysicalRetailDashboard'),
  { ssr: false }
)
const OmnichannelRetailDashboard = dynamic(
  () => import('@/components/analytics/retail/OmnichannelRetailDashboard'),
  { ssr: false }
)
const SpecialtyRetailDashboard = dynamic(
  () => import('@/components/analytics/retail/SpecialtyRetailDashboard'),
  { ssr: false }
)
const WholesaleRetailDashboard = dynamic(
  () => import('@/components/analytics/retail/WholesaleRetailDashboard'),
  { ssr: false }
)

type SegmentId = 'physical' | 'omnichannel' | 'specialty' | 'wholesale'

const segmentMeta: { id: SegmentId; name: string; description: string; painPoints: string }[] = [
  {
    id: 'physical',
    name: 'Physical Retail and Multi-Location',
    description: 'Sales performance, shrinkage risk and scheduling efficiency',
    painPoints: 'Sales data by location is consolidated manually, so performance differences between stores are only visible after a spreadsheet is compiled. Shrinkage is tracked at stocktake time rather than as a continuous risk indicator. Scheduling decisions are based on experience rather than actual foot traffic patterns by store and shift.',
  },
  {
    id: 'omnichannel',
    name: 'Omnichannel and E-Commerce',
    description: 'Channel revenue, inventory accuracy and marketing attribution',
    painPoints: 'Online and in-store inventory exist in separate systems and are reconciled manually, creating oversell risk and missed sale opportunities. Digital marketing spend is tracked by platform rather than attributed to actual revenue outcomes. Pricing discrepancies between channels are only discovered when a customer complains.',
  },
  {
    id: 'specialty',
    name: 'Specialty and Independent',
    description: 'GMROI, customer retention and basket value by segment',
    painPoints: 'Gross margin return on inventory is known at the overall level but not broken down by product category or supplier, so buying decisions are made on sales volume rather than margin efficiency. Lapsed customers are not systematically identified until retention has already declined measurably. Basket value is tracked as an average rather than decomposed by customer segment.',
  },
  {
    id: 'wholesale',
    name: 'Wholesale and Supply Chain',
    description: 'Supplier performance, demand forecasting and inventory efficiency',
    painPoints: 'Demand forecasts are built from last year\'s numbers rather than from current sell-through trends, creating a structural bias toward overstock in off-peak periods and understock in peak. Supplier performance across fill rate, on-time delivery and defect rate is assessed informally rather than tracked systematically, so underperforming suppliers are only challenged after damage to the business has already occurred.',
  },
]

const dashboardMap: Record<SegmentId, React.ReactNode> = {
  physical: <PhysicalRetailDashboard />,
  omnichannel: <OmnichannelRetailDashboard />,
  specialty: <SpecialtyRetailDashboard />,
  wholesale: <WholesaleRetailDashboard />,
}

const retailAnalyticsFaqs: FAQ[] = [
  {
    q: 'Does this work with my POS and e-commerce systems?',
    a: 'We start by reviewing the systems you already have, whether that is a POS, e-commerce platform, accounting software, supplier portal, or a combination of spreadsheets. The reporting layer connects what you already use rather than requiring new platforms.',
  },
  {
    q: 'Can this help with inventory and supply chain decisions, not just sales reporting?',
    a: 'Yes, and for many retailers the biggest opportunity sits in inventory and supply chain visibility rather than sales reporting alone. The wholesale and supply chain dashboard specifically shows demand forecasting accuracy, supplier fill rates and inventory carrying cost by category, exactly the view that drives better buying and ranging decisions.',
  },
  {
    q: 'How is this different from the reports my POS or e-commerce platform already generates?',
    a: 'POS and e-commerce platforms report on what happened within their own system. They do not join that data to your other systems, they do not show you patterns across channels or locations simultaneously, and they do not surface the risk signals buried in the data before they become a problem. The reporting layer we build does all three.',
  },
  {
    q: 'Do you work with all retail formats or only specific types?',
    a: 'We work across all four retail formats shown. Physical multi-location chains, omnichannel operators, specialty independents and wholesale-facing retailers each have genuinely different data problems, which is why each sub-segment has its own use case repository and illustrative dashboard rather than a single generic retail pitch.',
  },
]

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: retailAnalyticsFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

const steps = [
  {
    step: '01',
    title: 'Understand the data you have',
    body: 'We review your POS system, inventory records, and supplier data before recommending anything. We map the data you already hold and identify where the gaps are.',
  },
  {
    step: '02',
    title: 'Design for the decisions you make',
    body: 'We build a reporting structure around the questions your business actually needs answered, whether that is category margin, stock turn by supplier, or demand patterns across trading periods.',
  },
  {
    step: '03',
    title: 'Deliver and transfer',
    body: 'You receive dashboards your team can maintain, with a handover that means the insight does not stop when we leave. Ongoing support is available if you would rather we stay close.',
  },
]

export default function RetailPageClient() {
  const [activeId, setActiveId] = useState<SegmentId>('physical')
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
            <li className="text-text-dark font-medium">Retail</li>
          </ol>
        </div>
      </nav>

      {/* 1. Hero */}
      <section className="bg-navy py-16 sm:py-20 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="w-9 h-[2px] bg-gold mb-4" />
            <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/80 mb-3 block">
              Data Analytics for Retail
            </span>
            <h1 className="text-[34px] md:text-[44px] font-bold text-white tracking-tight leading-[1.15] mb-5 max-w-[720px]">
              Your Retail Data, Made Useful
            </h1>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-[620px] mb-8">
              Physical retailers, omnichannel operators, specialty independents and wholesale businesses are all sitting on data that could drive better decisions. The problem is that it lives in the POS, the e-commerce platform, the accounting system and the supplier portal, and nobody has connected it. We build the reporting layer from what you already have.
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
              Where Retail Businesses Get Stuck
            </h2>
            <p className="text-[16px] text-slate leading-relaxed mb-8 max-w-[640px]">
              Most retail businesses are sitting on more data than they use. The problem is that it is scattered across systems and never made visible in a form that supports buying, ranging, or operations decisions. Select your sub-segment to see what we hear most often.
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
              Each dashboard below is built for a specific retail sub-segment. The numbers are illustrative mock data, but the structure is exactly what we build from the data already in your systems.
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
            <FAQAccordion faqs={retailAnalyticsFaqs} />
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
