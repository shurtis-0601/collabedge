import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'
import CTASection from '@/components/ui/CTASection'
import FAQAccordion, { FAQ } from '@/components/sections/FAQAccordion'

const faqs: FAQ[] = [
  {
    q: 'How much does SIL registration cost?',
    a: 'The NDIS Commission itself charges nothing to submit your registration application. Your independent audit and your insurance are paid separately, directly to those providers. CollabEdge\'s documentation and registration support starts from $2,000, with the exact scope confirmed once we understand your situation.',
  },
  {
    q: 'Why does this cost less than other registration services?',
    a: 'We build efficiently using AI-assisted tools, and we do not pad your documentation with unnecessary paperwork designed to look impressive rather than be useful. You get functional, easy to use documents that meet what an auditor actually needs, not a bloated pack that costs more to produce and is harder for your team to use day to day.',
  },
  {
    q: 'Do I need a consultant to register?',
    a: 'No, engaging support is not mandatory. Most providers find it meaningfully reduces the risk of delays or a failed first audit, and saves far more time than it costs.',
  },
  {
    q: 'Can I keep delivering SIL while my registration application is being processed?',
    a: 'Yes, provided you have submitted your application by 1 October 2026, you can continue delivering SIL while it is being processed.',
  },
]

export const metadata: Metadata = {
  title: 'Get Registered Before the Deadline Closes | CollabEdge Solutions',
  description:
    'SIL registration support for unregistered NDIS providers. AI-assisted documentation, staged and audit ready, starting from $2,000.',
  robots: { index: false, follow: false },
}

export default function SILRegistrationCampaignPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-navy py-16 sm:py-20 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="w-9 h-[2px] bg-gold mb-4" />
            <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/80 mb-3 block">
              For Unregistered SIL Providers
            </span>
            <h1 className="text-[34px] md:text-[44px] font-bold text-white tracking-tight leading-[1.15] mb-5 max-w-[720px]">
              Get Registered Before the Deadline Closes
            </h1>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-[640px] mb-8">
              From 1 July 2026, Supported Independent Living became its own registration group under the NDIS Practice Standards. Providers already delivering SIL unregistered must apply by 1 October 2026 to keep operating. We get you audit ready, from the documents up.
            </p>
            <a href="/appt" className="btn-gold">Book a Free 30 Minute Conversation</a>

            <div className="mt-8 inline-flex flex-col border border-[#E6B85C]/50 rounded-lg px-6 py-5 bg-[#E6B85C]/[0.06]">
              <span className="text-[38px] font-extrabold text-[#E6B85C] leading-none tracking-tight">From $2,000</span>
              <span className="text-[14px] text-[#D1D5DB] mt-2 max-w-[360px] leading-relaxed">
                Registration support and documentation. Exact scope confirmed after we understand your situation.
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. What Getting Registered Looks Like */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-5 leading-snug">
              What Getting Registered Looks Like
            </h2>
            <p className="text-[16px] text-slate leading-relaxed max-w-[680px]">
              We start with where you actually are, not a generic checklist. That means reviewing what documentation exists, identifying every gap against the SIL Practice Standards module, and building what is missing from the ground up. You get a clear, staged plan, what happens first, what we need from you, and what audit ready actually looks like at the end.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 3. Why This Costs Less and Takes Less Time */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-5 leading-snug">
              Why This Costs Less and Takes Less Time
            </h2>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-[680px]">
              Most SIL documentation services still hand you static Word documents, difficult to navigate, harder to keep current, and priced like it. We build your documentation using AI-assisted tools, which means faster turnaround and lower cost without cutting corners on what an auditor actually needs to see. Registration support starts from $2,000, with the exact scope confirmed after we understand your situation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 4. Documents That Are Actually Usable */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-5 leading-snug">
              Documents That Are Actually Usable
            </h2>
            <p className="text-[16px] text-slate leading-relaxed max-w-[680px]">
              As an add on, we can deliver your documentation as fillable PDFs instead of static Word files, easier for your team to complete, update, and keep consistent, without wrestling with formatting every time something changes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 5. Real Work, Not Theory */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-5 leading-snug">
              Real Work, Not Theory
            </h2>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-[680px]">
              We have built full compliance documentation from scratch for a new NDIS provider preparing for registration. We have brought an already SIL registered provider's documents up to the newest Practice Standards. Both engagements moved faster and cost less than a traditional documentation provider would have quoted. This is not new territory for us.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[760px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-8 leading-snug">
              Common Questions
            </h2>
          </FadeIn>
          <FadeIn variant="fadeUp" delay={100}>
            <FAQAccordion faqs={faqs} />
          </FadeIn>
        </div>
      </section>

      {/* 7. Final CTA */}
      <CTASection
        heading="Do Not Wait for the Deadline to Find You"
        sub="A free 30 minute conversation, no obligation, to work out exactly where your documentation stands today."
        ctaLabel="Book a Free Consultation"
        ctaHref="/appt"
      />
    </>
  )
}
