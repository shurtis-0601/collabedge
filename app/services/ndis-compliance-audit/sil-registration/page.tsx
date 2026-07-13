import type { Metadata } from 'next'
import {
  Home, CheckCircle, ArrowRight, Clock,
  Users, AlertTriangle, Shield, FileCheck,
} from 'lucide-react'
import CTASection from '@/components/ui/CTASection'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'
import FAQAccordion, { type FAQ } from '@/components/sections/FAQAccordion'

export const metadata: Metadata = {
  title: 'SIL Registration Support | CollabEdge Solutions',
  description:
    'NDIS SIL Registration support for Australian providers. $2,000 flat fee, 10 spots available. Micro-provider concession available. Senior-led, practitioner-tested.',
  openGraph: {
    title: 'SIL Registration Support | CollabEdge Solutions',
    description: 'Get SIL registered with senior-led support. $2,000. Limited spots.',
    url: 'https://collabedgesolutions.com.au/services/ndis-compliance-audit/sil-registration',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'NDIS SIL Registration Support',
  provider: {
    '@type': 'ProfessionalService',
    name: 'CollabEdge Solutions',
    url: 'https://collabedgesolutions.com.au',
  },
  areaServed: 'AU',
  description:
    'Supported Independent Living (SIL) registration support for NDIS providers, including documentation and audit readiness.',
  offers: {
    '@type': 'Offer',
    price: '2000',
    priceCurrency: 'AUD',
    availability: 'https://schema.org/LimitedAvailability',
  },
}

const silFaqs: FAQ[] = [
  {
    q: 'How long does SIL registration take once documentation is ready?',
    a: 'Once your documentation is complete, submission timelines depend on the NDIS Commission, typically several weeks. CollabEdge Solutions focuses on getting your documentation right so the submission itself goes smoothly.',
  },
  {
    q: 'What if I am not eligible for the micro-provider concession?',
    a: 'The standard $2,000 rate applies. We will confirm your eligibility honestly during the free consultation. There is no obligation either way.',
  },
  {
    q: 'Do you guarantee registration approval?',
    a: 'No registration support provider can guarantee Commission approval, as that decision sits with the NDIS Commission. CollabEdge Solutions ensures your documentation meets the required standard before submission.',
  },
  {
    q: 'What happens after the 10 spots are filled?',
    a: 'Once this round is filled, you can register interest for the next round. Spots are limited to ensure each provider receives direct, senior-led attention.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: silFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

const rightFit = [
  'You are registering for SIL for the first time',
  'You are an existing provider adding SIL to your registration',
  'You want documentation done right the first time',
  'You prefer senior-led support over a generic template',
]

const notFit = [
  'You need general NDIS compliance, not SIL specifically',
  'You are not yet ready to begin the registration process',
  'You are looking for a free template, not guided support',
]

const included = [
  { icon: FileCheck, text: 'SIL-specific policy and procedure documentation' },
  { icon: Shield, text: 'Risk management framework for supported accommodation' },
  { icon: Users, text: 'Staffing and roster compliance guidance' },
  { icon: Home, text: 'Property and environment safety documentation' },
  { icon: CheckCircle, text: 'Direct review and feedback from Sinclair' },
  { icon: Clock, text: 'Structured timeline to registration submission' },
]

const processSteps = [
  { step: '01', title: 'Secure Your Spot', desc: 'Book your free consultation to confirm fit and eligibility.' },
  { step: '02', title: 'Document Build', desc: 'Sinclair builds your SIL-specific documentation directly with you.' },
  { step: '03', title: 'Review', desc: 'Documentation is reviewed and refined before submission.' },
  { step: '04', title: 'Submit', desc: 'You submit registration with confidence and full documentation in hand.' },
]

export default function SILRegistrationPage() {
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
        <div className="max-w-[900px] mx-auto">
          <FadeIn variant="fadeIn">
            <div className="flex items-center gap-2 text-[14px] text-[#9CA3AF] flex-wrap">
              <a href="/services" className="hover:text-brand-goldDark transition-colors">Services</a>
              <span>/</span>
              <a href="/services/ndis-compliance-audit" className="hover:text-brand-goldDark transition-colors">
                NDIS Compliance and Audit
              </a>
              <span>/</span>
              <span className="text-[#D1D5DB]">SIL Registration</span>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Campaign Hero */}
      <section className="bg-navy pt-8 pb-16 px-5 sm:px-10 text-center">
        <div className="max-w-[720px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
              <Clock size={13} className="text-gold" />
              <span className="text-[13px] font-semibold text-brand-goldDark">10 spots available this round</span>
            </div>
            <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/80 mb-3 block">
              SIL Registration Support
            </span>
            <h1 className="text-[26px] md:text-[40px] font-bold text-white tracking-tight leading-[1.1] mb-5">
              Get SIL registered.{' '}
              <span className="text-brand-goldDark">$2,000.</span>
            </h1>
            <p className="text-[15px] text-[#D1D5DB] leading-relaxed max-w-[540px] mx-auto mb-8">
              Senior-led support to get your Supported Independent Living registration documentation right the first time, without the back and forth that usually comes with it.
            </p>
            <a
              href="/appt"
              className="inline-flex items-center gap-2 bg-gold text-navy text-[14px] font-bold rounded-lg px-7 py-3.5 hover:bg-gold/90 transition-colors"
            >
              Secure Your Spot
              <ArrowRight size={14} />
            </a>
            <p className="text-[13px] text-[#9CA3AF] mt-4">
              Micro-provider concession available for providers under 10 participants
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-white py-16 px-5 sm:px-10">
        <div className="max-w-[900px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-8 leading-snug">
              Is SIL registration support right for you?
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Right fit */}
            <FadeIn variant="slideRight">
              <div className="bg-offwhite rounded-xl p-6 border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle size={16} className="text-gold" />
                  <span className="text-[14px] font-bold text-text-dark">This is for you if</span>
                </div>
                <div className="flex flex-col gap-2.5">
                  {rightFit.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle size={13} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-[14px] text-text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Not a fit */}
            <FadeIn variant="fadeUp" delay={100}>
              <div className="bg-white rounded-xl p-6 border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle size={16} className="text-slate" />
                  <span className="text-[14px] font-bold text-text-dark">This may not be for you if</span>
                </div>
                <div className="flex flex-col gap-2.5">
                  {notFit.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-[14px] text-slate leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="/services/ndis-compliance-audit"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-goldLight hover:gap-3 transition-all duration-200 mt-5"
                >
                  See general NDIS compliance support
                  <ArrowRight size={12} />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[900px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              What is included for $2,000?
            </h2>
            <p className="text-[16px] text-slate leading-relaxed mb-10 max-w-[680px]">
              A complete, guided path to SIL registration readiness, not a template you fill in alone.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {included.map((item, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 60}>
                <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-border">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-gold" />
                  </div>
                  <span className="text-[14px] text-text-body leading-relaxed">{item.text}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Micro-Provider Concession */}
      <section className="bg-navy py-12 px-5 sm:px-10">
        <div className="max-w-[900px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="bg-gold/[0.08] border border-gold/25 rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-12 h-12 rounded-lg bg-gold/15 flex items-center justify-center flex-shrink-0">
                <Users size={22} className="text-gold" />
              </div>
              <div className="flex-1">
                <h3 className="text-[18px] font-bold text-white mb-2">Micro-Provider Concession</h3>
                <p className="text-[14px] text-[#D1D5DB] leading-relaxed">
                  If your organisation supports fewer than 10 NDIS participants, a reduced rate applies. This reflects the smaller documentation scope typically required for micro and emerging providers. Confirm eligibility during your free consultation.
                </p>
              </div>
              <a
                href="/appt"
                className="inline-flex items-center gap-2 bg-gold text-navy text-[14px] font-bold rounded-lg px-5 py-3 hover:bg-gold/90 transition-colors whitespace-nowrap flex-shrink-0"
              >
                Check Eligibility
                <ArrowRight size={13} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-white py-16 px-5 sm:px-10">
        <div className="max-w-[900px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-10 leading-snug">
              How SIL registration support works
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
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[760px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-8 leading-snug">
              Frequently asked questions
            </h2>
          </FadeIn>
          <FadeIn variant="fadeUp" delay={100}>
            <FAQAccordion faqs={silFaqs} />
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy py-16 px-5 sm:px-10 text-center">
        <div className="max-w-[600px] mx-auto">
          <FadeIn variant="fadeUp">
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-4 leading-snug">
              10 spots. Senior-led. $2,000.
            </h2>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed mb-8">
              Book your free consultation now to secure your place in this round.
            </p>
            <a
              href="/appt"
              className="inline-flex items-center gap-2 bg-gold text-navy text-[14px] font-bold rounded-lg px-7 py-3.5 hover:bg-gold/90 transition-colors"
            >
              Secure Your Spot
              <ArrowRight size={14} />
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  )
}