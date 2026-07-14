import type { Metadata } from 'next'
import {
  Users, Lightbulb, Handshake, Stethoscope, ArrowRight, ExternalLink,
  Workflow, ShieldCheck, UsersRound, Sparkles
} from 'lucide-react'
import PageHero from '@/components/corporate/PageHero'
import CTASection from '@/components/ui/CTASection'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'

export const metadata: Metadata = {
  title: 'NewGen Consulting | CollabEdge Solutions',
  description:
    'NewGen Consulting, a Zoho ecosystem specialist, working alongside CollabEdge Solutions for organisations that prefer a packaged software platform over a custom build. The NewGen NDIS and Healthcare Accelerator delivers a pre-configured Zoho platform purpose-built for NDIS providers and allied health operators.',
  openGraph: {
    title: 'NewGen Consulting | CollabEdge Solutions',
    description:
      'For NDIS and healthcare operators who prefer a packaged Zoho platform over a custom build, with CollabEdge bringing domain expertise to the table.',
    url: 'https://collabedgesolutions.com.au/services/partner-solutions/newgen-consulting',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
}

const points = [
  {
    icon: Stethoscope,
    title: 'Real NDIS and Healthcare Domain Expertise',
    desc: (
      <>
        Sinclair Hurtis and{' '}
        <a href="/about/magdalena-paczkowska" className="text-brand-goldDark hover:underline">
          Magdalena Paczkowska
        </a>
        , NDIS Practitioner and Strategic Advisor with 25 or more years of frontline experience, bring the operational reality of NDIS and allied health work to the conversation, not a generic CRM configuration exercise.
      </>
    ),
  },
  {
    icon: Lightbulb,
    title: 'Grounded in What Actually Happens on the Ground',
    desc: 'The insight CollabEdge contributes comes from active practice, support coordination, compliance work, and the day-to-day pain points providers describe, not from a features checklist.',
  },
  {
    icon: Handshake,
    title: 'A Packaged Alternative to a Custom Build',
    desc: 'For organisations that would rather stand up a known platform than commission bespoke software, NewGen brings the Zoho implementation depth. Exactly how CollabEdge involvement is structured for a given engagement, whether as advisory input, configuration guidance, or something else, is worked out per organisation.',
  },
]

const acceleratorAreas = [
  {
    icon: Workflow,
    title: 'Service Delivery',
    desc: 'Pre-configured workflows for participant intake, service agreements, shift scheduling, and progress note capture, built around how NDIS and allied health service delivery actually operates.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance',
    desc: 'Audit-ready record structures and document management aligned to NDIS Practice Standards and Quality and Safeguards Commission requirements. Compliance is built in, not bolted on.',
  },
  {
    icon: UsersRound,
    title: 'Workforce Management',
    desc: 'Staff and contractor onboarding, credential tracking, rostering, and HR workflows in a single Zoho environment, connected to participant scheduling so availability and compliance status are always visible together.',
  },
  {
    icon: Sparkles,
    title: 'AI-Driven Innovation',
    desc: 'Zoho-native AI capabilities applied to provider workflows, including intelligent document classification, automated reminders, and data-driven reporting that surfaces the information managers actually need.',
  },
]

export default function NewGenConsultingPage() {
  return (
    <>
      <PageHero
        eyebrow="NewGen Consulting"
        h1="A packaged Zoho platform, informed by real NDIS and healthcare experience."
        answerBlock="NewGen Consulting is a Zoho ecosystem specialist. For NDIS providers and healthcare operators who would rather work with a known platform than commission a custom build, CollabEdge Solutions brings NDIS and healthcare domain expertise to the conversation, so the platform reflects what actually happens on the ground."
      />

      {/* Why this matters */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              Not Every Organisation Wants a Custom Build
            </h2>
            <p className="text-[16px] text-slate leading-relaxed max-w-[680px] mb-10">
              Bespoke, AI-assisted automation is the core of what CollabEdge builds directly. Some providers reasonably prefer a packaged platform instead, faster to stand up, familiar to support, and already proven across many organisations. NewGen and CollabEdge working together is for that second group.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {points.map((p, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 80}>
                <div className="bg-white rounded-xl p-6 border border-border h-full">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <p.icon size={18} className="text-gold" />
                  </div>
                  <h3 className="text-[16px] font-bold text-text-dark mb-2">{p.title}</h3>
                  <p className="text-[14px] text-slate leading-relaxed">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Accelerator section */}
      <section className="bg-navy-deep py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <span className="text-[13px] font-bold tracking-[.14em] uppercase text-brand-goldDark mb-2 block">
              NewGen Product
            </span>
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-4 leading-snug">
              The NDIS and Healthcare Accelerator
            </h2>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-[680px] mb-10">
              The Accelerator is a pre-configured Zoho platform purpose-built for NDIS providers and allied health operators. Rather than starting from a blank CRM, organisations get a working system already shaped around the four domains that matter most in this sector.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {acceleratorAreas.map((area, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 80}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-full hover:border-brand-goldDark/30 hover:bg-white/[0.07] transition-all duration-200">
                  <div className="w-10 h-10 rounded-lg bg-brand-goldDark/10 flex items-center justify-center mb-4">
                    <area.icon size={18} className="text-brand-goldDark" />
                  </div>
                  <h3 className="text-[16px] font-bold text-white mb-2">{area.title}</h3>
                  <p className="text-[14px] text-[#D1D5DB] leading-relaxed">{area.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Honest framing note */}
      <section className="bg-white py-12 px-5 sm:px-10 border-t border-border">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Users size={18} className="text-gold" />
              </div>
              <div>
                <h3 className="text-[16px] font-bold text-text-dark mb-1.5">Where This Stands Today</h3>
                <p className="text-[14px] text-slate leading-relaxed max-w-[680px]">
                  The Accelerator is NewGen's platform, built and delivered by NewGen. CollabEdge involvement in a given engagement, whether as advisory input into configuration, domain requirements scoping, or something else, is worked out per organisation. If you are weighing a packaged platform against a custom build, the conversation is worth having either way.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* External link to partner site */}
      <section className="bg-offwhite py-10 px-5 sm:px-10">
        <div className="max-w-[900px] mx-auto text-center">
          <FadeIn variant="fadeUp">
            <p className="text-[14px] text-slate mb-3">
              To explore NewGen Consulting directly, visit their site.
            </p>
            <a
              href="https://newgenconsulting.au"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-goldDark hover:gap-3 transition-all duration-200"
            >
              Visit newgenconsulting.au
              <ExternalLink size={13} />
            </a>
          </FadeIn>
        </div>
      </section>

      <CTASection
        heading="Weighing a Packaged Platform Against a Custom Build?"
        sub="Talk through what would actually fit your organisation before deciding either way."
        ctaLabel="Book a Free Consultation"
        ctaHref="/appt"
      />
    </>
  )
}
