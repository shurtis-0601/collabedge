import type { Metadata } from 'next'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'
import CTASection from '@/components/ui/CTASection'

export const metadata: Metadata = {
  title: 'Data Analytics for SMEs | CollabEdge Solutions',
  description:
    'CollabEdge builds the reporting layer from the data your business already has. Practical, senior-led data analytics for health providers, property businesses and retailers.',
}

const industries = [
  {
    label: 'Health Providers',
    description:
      'NDIS providers, allied health practices and aged care operators. Workforce cost, client outcomes, funding utilisation and compliance visibility.',
    href: '/services/analytics/health',
  },
  {
    label: 'Proptech',
    description:
      'Property managers, mortgage brokers, builders and conveyancers. Portfolio performance, compliance tracking, financial reconciliation and workflow analytics.',
    href: '/services/analytics/proptech',
  },
  {
    label: 'Retail',
    description:
      'Physical retailers, omnichannel operators and specialty independents. Sales performance, inventory analytics, customer retention and margin visibility.',
    href: '/services/analytics/retail',
  },
]

const steps = [
  {
    step: '01',
    title: 'Understand the data you have',
    body: 'We review your existing systems before recommending anything new. The answer is often already in what you have.',
  },
  {
    step: '02',
    title: 'Design for the decisions you make',
    body: 'We build reporting around the questions your business actually needs answered, not generic dashboards.',
  },
  {
    step: '03',
    title: 'Deliver and transfer',
    body: 'You receive a reporting structure your team can maintain. Ongoing support is available if you would rather we stay close.',
  },
]

export default function AnalyticsHubPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-border px-5 sm:px-10 py-3">
        <div className="max-w-[1000px] mx-auto">
          <ol className="flex items-center gap-2 text-[14px] text-slate">
            <li><a href="/services" className="hover:text-brand-goldLight transition-colors">Services</a></li>
            <li className="text-slate-light">/</li>
            <li><a href="/services/digital" className="hover:text-brand-goldLight transition-colors">Digital Services</a></li>
            <li className="text-slate-light">/</li>
            <li className="text-text-dark font-medium">Data Analytics</li>
          </ol>
        </div>
      </nav>

      {/* 1. Hero */}
      <section className="bg-navy py-16 sm:py-20 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="w-9 h-[2px] bg-gold mb-4" />
            <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/80 mb-3 block">
              Data Analytics for SMEs
            </span>
            <h1 className="text-[34px] md:text-[44px] font-bold text-white tracking-tight leading-[1.15] mb-5 max-w-[760px]">
              Your Data Is Already There. Most Businesses Just Cannot See It.
            </h1>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-[620px] mb-8">
              CollabEdge builds the reporting layer from the systems you already use. No new platforms unless they are genuinely needed. No dashboards for the sake of dashboards. Just the visibility that helps you make better decisions.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/appt" className="btn-gold">Book a Free Consultation</a>
              <a href="/services/digital" className="btn-ghost">About Our Digital Services</a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Three industries */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-3 leading-snug">
              Three Industries. One Approach.
            </h2>
            <p className="text-[16px] text-slate leading-relaxed mb-10 max-w-[640px]">
              We have built specific, practitioner-tested use cases for three industries. Select your sector to see the problems we solve and the reporting structures we build.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {industries.map((industry, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 80}>
                <a
                  href={industry.href}
                  className="block bg-white rounded-xl p-6 border border-border h-full hover:border-gold/40 hover:shadow-md hover:-translate-y-[2px] transition-all duration-200 group"
                >
                  <h3 className="text-[18px] font-bold text-text-dark mb-3 group-hover:text-brand-goldLight transition-colors">
                    {industry.label}
                  </h3>
                  <p className="text-[15px] text-slate leading-relaxed mb-4">{industry.description}</p>
                  <span className="text-[14px] font-semibold text-brand-goldLight group-hover:underline underline-offset-2">
                    See use cases &rarr;
                  </span>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How we work */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-10 leading-snug">
              How We Work
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((item, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 90}>
                <div>
                  <span className="text-[32px] font-bold text-brand-goldDark/40 block mb-3 font-serif">
                    {item.step}
                  </span>
                  <h3 className="text-[18px] font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-[16px] text-[#D1D5DB] leading-relaxed">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <CTASection
        heading="Start With a Conversation"
        sub="A free 30 minute session to look at the data you have and where the biggest reporting gaps are."
        ctaLabel="Book a Free Consultation"
        ctaHref="/appt"
      />
    </>
  )
}
