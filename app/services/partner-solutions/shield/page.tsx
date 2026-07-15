import type { Metadata } from 'next'
import {
  Shield, ArrowRight, CheckCircle,
  Users, Lock, Zap, Building2
} from 'lucide-react'
import PageHero from '@/components/corporate/PageHero'
import CTASection from '@/components/ui/CTASection'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'

export const metadata: Metadata = {
  title: 'SHIELD Voice Fraud Prevention | CollabEdge Solutions',
  description:
    'SHIELD by Sekunce, carrier-grade inline voice fraud prevention. Blocks IRSF, CLI spoofing, robocall traffic, and account takeover in under 100ms per call, with behavioural signaling analysis flagging suspected synthetic-voice campaigns. CollabEdge Solutions is the Australian and APAC delivery partner.',
  openGraph: {
    title: 'SHIELD Voice Fraud Prevention | CollabEdge Solutions',
    description:
      'Stop voice fraud before the call is accepted. $41.8B global problem. Sub-100ms inline defence.',
    url: 'https://www.collabedgesolutions.com.au/services/partner-solutions/shield',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'website',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'SHIELD by Sekunce',
  description:
    'Carrier-grade inline voice fraud prevention platform. Scores every call before acceptance, blocking IRSF, CLI spoofing, robocall, and ATO attempts in under 100 milliseconds, with behavioural signaling analysis flagging suspected synthetic-voice campaigns.',
  brand: { '@type': 'Brand', name: 'Sekunce' },
  offers: {
    '@type': 'Offer',
    seller: { '@type': 'Organization', name: 'CollabEdge Solutions' },
    areaServed: ['AU', 'SG', 'IN'],
  },
}

const globalStats = [
  { value: '$41.8B', label: 'Global telecom fraud 2025 (CFCA)' },
  { value: '+$2.9B', label: 'Increase in losses 2023→2025 (CFCA)' },
  { value: '1,633%', label: 'Deepfake vishing growth, Q1 2025 vs Q4 2024' },
]

const attackVectors = [
  {
    icon: Lock,
    title: 'IRSF / Premium-Rate Fraud',
    desc: 'Revenue leaking at $50,000 or more overnight per incident. SHIELD blocks pre-completion, before settlement disputes arise.',
  },
  {
    icon: Shield,
    title: 'CLI Spoofing',
    desc: 'Bank impersonation causing reputational damage across the operator brand. SHIELD applies reputation scoring, with STIR/SHAKEN attestation where carrier support exists.',
  },
  {
    icon: Zap,
    title: 'Robocall and Spam',
    desc: 'Network capacity consumed by unwanted traffic. SHIELD applies layered signaling controls to cut spam traffic before it terminates.',
  },
  {
    icon: Users,
    title: 'Deepfake Voice Campaigns',
    desc: 'Targeted vishing of enterprise and retail subscribers. Today, SHIELD identifies suspected synthetic-voice campaigns through signaling-layer behavioural patterns and risk scoring.',
    roadmapNote: 'Roadmap Q3–Q4 2026: media-path audio analysis',
  },
  {
    icon: Building2,
    title: 'Account Takeover via Voice',
    desc: 'A majority of account takeovers begin with a phone call. SHIELD applies its risk score and three-lane routing before the call ever reaches an agent.',
  },
]

const carrierResult = [
  { value: 'EUR 575K', label: 'Annual revenue leak closed' },
  { value: '-35%', label: 'Failed calls' },
  { value: '8.1 mo', label: 'Payback period' },
]

const finServResult = [
  { value: '-35%', label: 'Per-call cost with 100% coverage' },
  { value: '+11%', label: 'Fraudulent attempt identification' },
  { value: '-15%', label: 'Telecom-based fraud' },
]

const capabilities = [
  'Carrier-grade inline B2BUA in the SIP transport path',
  'Carrier origin verification, with STIR/SHAKEN attestation where carrier support exists',
  'Risk score 0 to 1000 delivered in the X-Shield-Score SIP header',
  '510 calls per second per node (benchmarked), 25 million or more calls per day in production',
]

const sectors = [
  {
    name: 'Financial Services',
    desc: 'Highest regulated fraud spend. Complements voice biometrics with carrier-trunk blocking before the call connects.',
  },
  {
    name: 'BPO and Outsourcing',
    desc: 'Multi-tenant SIP exposure with client-driven security mandates flowing upstream.',
  },
  {
    name: 'Healthcare',
    desc: 'Rising PHI voice exposure. Pre-call screening before HIPAA-governed conversations begin.',
  },
  {
    name: 'Government',
    desc: 'Caller-authentication compliance posture. Durable multi-year contracts.',
  },
  {
    name: 'Retail and E-commerce',
    desc: 'Loyalty and brand-line impersonation growing faster than current budgets.',
  },
]

export default function ShieldPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-border px-5 sm:px-10 py-3">
        <div className="max-w-[1000px] mx-auto">
          <ol className="flex items-center gap-2 text-[14px] text-slate">
            <li><a href="/services" className="hover:text-brand-goldLight transition-colors">Services</a></li>
            <li className="text-slate-light">/</li>
            <li><a href="/services/partner-solutions" className="hover:text-brand-goldLight transition-colors">Partner Solutions</a></li>
            <li className="text-slate-light">/</li>
            <li className="text-text-dark font-medium">SHIELD</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <PageHero
        eyebrow="Sekunce SHIELD"
        h1="Stop the call before it costs you."
        answerBlock="SHIELD is a carrier-grade inline voice fraud prevention platform that scores every call before it is accepted, blocking IRSF, CLI spoofing, robocall traffic, and account takeover attempts in under 100 milliseconds. Behavioural signaling analysis flags suspected synthetic-voice (deepfake) campaigns in real time. CollabEdge Solutions delivers SHIELD across Australia and Asia Pacific."
      />

      {/* Problem section */}
      <section className="bg-white py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              Why voice fraud is the fastest-growing threat operators face
            </h2>
            <p className="text-[16px] text-slate leading-relaxed mb-10 max-w-[680px]">
              Global telecom fraud reached $41.8 billion in 2025 (CFCA Global Fraud Loss Survey), up nearly $3 billion from 2023 as generative AI makes voice and text scams harder to detect. The voice channel is the largest, fastest-growing, and least-defended revenue surface in modern telecoms.
            </p>
          </FadeIn>

          {/* Stat strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch">
            {globalStats.map((stat, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 80} className="h-full">
                <div className="bg-gold rounded-xl p-6 text-center h-full flex flex-col justify-center">
                  <span className="text-[28px] font-bold text-navy block mb-1">{stat.value}</span>
                  <span className="text-[14px] text-navy/70 leading-snug">{stat.label}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Attack vectors */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-4 leading-snug">
              Five threats. One inline defence.
            </h2>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed mb-10 max-w-[680px]">
              SHIELD handles every major voice fraud attack vector inline on the same B2BUA, under one risk score, no microservice overhead, no batch lag, under 100 milliseconds per call.
            </p>
          </FadeIn>
          <div className="flex flex-col gap-4">
            {attackVectors.map((vector, i) => (
              <FadeIn key={i} variant="slideRight" delay={i * 70}>
                <div className="flex items-start gap-5 bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-gold/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <vector.icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-white mb-1">{vector.title}</h3>
                    <p className="text-[14px] text-[#D1D5DB] leading-relaxed">{vector.desc}</p>
                    {vector.roadmapNote && (
                      <p className="text-[12.5px] text-brand-goldDark/80 italic leading-relaxed mt-2">
                        {vector.roadmapNote}
                      </p>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Proven results */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-10 leading-snug">
              Documented outcomes from live deployments
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* European Tier-2 Carrier */}
            <FadeIn variant="slideRight">
              <div className="bg-white rounded-xl p-7 border border-border h-full">
                <span className="text-[13px] font-bold tracking-[.12em] uppercase text-brand-goldLight/80 mb-2 block">
                  Live Deployment
                </span>
                <h3 className="text-[18px] font-bold text-text-dark mb-3">
                  European Tier-2 Carrier
                </h3>
                <p className="text-[14px] text-slate leading-relaxed mb-6">
                  A carrier with EUR 25 million annual revenue deployed SHIELD drop-in alongside an existing SBC with zero CapEx. Results: EUR 575,000 annual revenue leak closed, 35 percent reduction in failed calls, 84 percent reduction in partner penalties, 8.1 month payback.
                </p>
                <div className="grid grid-cols-3 gap-3 border-t border-border pt-5">
                  {carrierResult.map((r, i) => (
                    <div key={i}>
                      <span className="text-[16px] font-bold text-brand-goldLight block">{r.value}</span>
                      <span className="text-[13px] text-slate leading-tight">{r.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Financial Services Operator */}
            <FadeIn variant="fadeUp" delay={100}>
              <div className="bg-white rounded-xl p-7 border border-border h-full">
                <span className="text-[13px] font-bold tracking-[.12em] uppercase text-brand-goldLight/80 mb-2 block">
                  Live Deployment
                </span>
                <h3 className="text-[18px] font-bold text-text-dark mb-3">
                  Financial Services Operator
                </h3>
                <p className="text-[14px] text-slate leading-relaxed mb-6">
                  Real-time per-call scoring replaced batch updates. Every call scored in flight against origination network and behavioural stack. Results: 35 percent per-call cost reduction with 100 percent coverage, 11 percent lift in fraudulent attempt identification, 15 percent reduction in telecom-based fraud.
                </p>
                <div className="grid grid-cols-3 gap-3 border-t border-border pt-5">
                  {finServResult.map((r, i) => (
                    <div key={i}>
                      <span className="text-[16px] font-bold text-brand-goldLight block">{r.value}</span>
                      <span className="text-[13px] text-slate leading-tight">{r.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-16 px-5 sm:px-10 border-t border-border">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              Before the call is accepted
            </h2>
            <p className="text-[16px] text-slate leading-relaxed mb-8 max-w-[680px]">
              SHIELD sits as an inline B2BUA in the SIP transport path. Every call is scored before SIP 200 OK, the call can be refused, redirected, or passed with a risk score attached in the SIP header. The decision happens in under 100 milliseconds. The call never reaches an agent if it should not.
            </p>
          </FadeIn>
          <FadeIn variant="fadeUp" delay={100}>
            <div className="bg-offwhite rounded-xl p-7 border border-border">
              <div className="flex flex-col gap-3">
                {capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-[14px] text-text-body leading-relaxed">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-10 leading-snug">
              Where SHIELD has the strongest fit
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sectors.map((sector, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 70}>
                <div className="bg-white/[0.04] border border-white/10 rounded-xl p-5 hover:border-gold/30 transition-colors h-full">
                  <h3 className="text-[18px] font-bold text-white mb-2">{sector.name}</h3>
                  <p className="text-[14px] text-[#D1D5DB] leading-relaxed">{sector.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CollabEdge delivery note — eucalyptus */}
      <section className="py-12 px-5 sm:px-10" style={{ backgroundColor: '#3C6E5E' }}>
        <div className="max-w-[900px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-[18px] font-bold text-white mb-2">
                  CollabEdge Solutions, Australian and Asia Pacific Delivery Partner
                </h3>
                <p className="text-[14px] text-[#D1D5DB] leading-relaxed">
                  CollabEdge Solutions brings SHIELD to Australian and Asia Pacific operators, carriers, and enterprises, providing local advisory, implementation support, and ongoing account management. Enquiries for SHIELD deployments in this region are handled directly by CollabEdge.
                </p>
              </div>
              <a
                href="/appt"
                className="inline-flex items-center gap-2 bg-white text-[#3C6E5E] text-[14px] font-bold rounded-lg px-6 py-3 hover:bg-white/90 transition-colors whitespace-nowrap flex-shrink-0"
              >
                Discuss SHIELD
                <ArrowRight size={14} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Roadmap disclosure */}
      <section className="bg-white py-6 px-5 sm:px-10 border-t border-border">
        <div className="max-w-[900px] mx-auto">
          <p className="text-[12.5px] text-slate leading-relaxed">
            SHIELD is developed by Sekunce. Media-path audio analysis capabilities are on the product roadmap for Q3–Q4 2026; all detection described in the present tense operates at the signaling layer today.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Ready to stop voice fraud before it costs you?"
        sub="Speak with CollabEdge Solutions about SHIELD deployment in Australia and Asia Pacific."
        ctaLabel="Book a Free Consultation"
        ctaHref="/appt"
      />
    </>
  )
}
