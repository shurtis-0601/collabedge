import type { Metadata } from 'next'
import {
  Shield, ArrowRight, CheckCircle,
  Globe, Users, Star, Lock, ExternalLink, Building2, Home
} from 'lucide-react'
import PageHero from '@/components/corporate/PageHero'
import CTASection from '@/components/ui/CTASection'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'

export const metadata: Metadata = {
  title: 'Partner Solutions | CollabEdge Solutions',
  description:
    'CollabEdge Solutions delivers enterprise technology through a curated bench of specialist partners, deployed only where the relationship on the ground is real. SHIELD, Property Automate, Newgen Consulting.',
  openGraph: {
    title: 'Partner Solutions | CollabEdge Solutions',
    description:
      'Enterprise and SME technology delivered through vetted specialist partners across communication technology, PropTech, and healthcare software.',
    url: 'https://collabedgesolutions.com.au/services/partner-solutions',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Technology Partner Solutions',
  provider: {
    '@type': 'ProfessionalService',
    name: 'CollabEdge Solutions',
    url: 'https://collabedgesolutions.com.au',
  },
  areaServed: ['AU', 'SG'],
  description:
    'CollabEdge Solutions curates and delivers specialist enterprise technology through a vetted partner network across Australia and Asia Pacific.',
}

const philosophyCards = [
  {
    icon: CheckCircle,
    title: 'Vetted, not random',
    desc: 'Every partner in the CollabEdge network has been assessed for capability, delivery track record, and cultural fit. We recommend what we would use ourselves.',
  },
  {
    icon: Globe,
    title: 'Deployed where the relationship is real',
    desc: 'CollabEdge does not list partners for credibility. Every partner on this page represents an active working relationship with confirmed delivery capability in their domain.',
  },
  {
    icon: Users,
    title: 'Two lanes, one advisory',
    desc: 'Enterprise partners serve large-scale telco, property, and technology deployments. SME partners deliver packaged solutions for healthcare providers who want proven software rather than custom builds.',
  },
]

const shieldStats = [
  { value: '$41.8B', label: 'Global telecom voice fraud 2025' },
  { value: '5-15%', label: 'Operator revenue lost annually' },
  { value: '<100ms', label: 'Per-call decision inline' },
]

const dynamicNetFeatures = [
  'dynamicnetsoft.com',
  'propertyautomate.com.au',
]

export default function PartnerSolutionsPage() {
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
            <li className="text-text-dark font-medium">Partner Solutions</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <PageHero
        eyebrow="Partner Solutions"
        h1="The right specialist. Every time."
        answerBlock="CollabEdge Solutions operates as a technology collaborative, curating a bench of vetted specialist partners across selected domains, rather than attempting to build every capability in-house. Every partner is deployed only where the relationship on the ground is real."
      />

      {/* Philosophy */}
      <section className="bg-white py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              How the CollabEdge partner model works
            </h2>
            <p className="text-[16px] text-slate leading-relaxed mb-10 max-w-[680px]">
              Most consulting firms either try to do everything themselves or refer clients to whoever pays them a commission. CollabEdge does neither. We maintain a small, carefully selected network of specialist partners, each with deep expertise in a specific domain, and bring them in only when the client situation genuinely calls for it. No referral fees influence our recommendations.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {philosophyCards.map((card, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 80}>
                <div className="bg-offwhite rounded-xl p-6 border border-border h-full hover:border-gold/30 hover:shadow-sm transition-all duration-200">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <card.icon size={18} className="text-gold" />
                  </div>
                  <h3 className="text-[18px] font-bold text-text-dark mb-2">{card.title}</h3>
                  <p className="text-[14px] text-slate leading-relaxed">{card.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Partner — SHIELD */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="border-2 border-gold/40 rounded-2xl p-8 md:p-10 bg-gradient-to-br from-gold/[0.08] to-transparent relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold/[0.05] rounded-full -translate-y-24 translate-x-24 pointer-events-none" />

              <div className="flex items-center gap-3 mb-2">
                <Star size={14} className="text-gold" fill="currentColor" />
                <span className="text-[13px] font-bold tracking-[.14em] uppercase text-brand-goldDark">
                  Featured Partner
                </span>
              </div>

              <div className="flex items-start gap-4 mb-6 flex-wrap">
                <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center flex-shrink-0">
                  <Lock size={22} className="text-gold" />
                </div>
                <div>
                  <h2 className="text-[26px] font-bold text-white leading-tight">SHIELD by Sekunce</h2>
                  <p className="text-[14px] text-brand-goldDark">Voice Fraud Prevention</p>
                </div>
              </div>

              <p className="text-[16px] text-[#D1D5DB] leading-relaxed mb-6 max-w-[620px]">
                SHIELD is an enterprise-grade inline voice fraud prevention platform developed by Sekunce Global. It sits in the SIP transport path and scores every call before it is accepted, blocking IRSF, CLI spoofing, deepfake voice, robocall, and account takeover attempts in under 100 milliseconds. CollabEdge Solutions is the Australian and Asia Pacific delivery partner.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 border-t border-white/10 pt-6">
                {shieldStats.map((stat, i) => (
                  <div key={i}>
                    <span className="text-[20px] font-bold text-brand-goldDark block">{stat.value}</span>
                    <span className="text-[13px] text-[#9CA3AF] leading-tight">{stat.label}</span>
                  </div>
                ))}
              </div>

              <a
                href="/services/partner-solutions/shield"
                className="inline-flex items-center gap-2 bg-gold text-navy text-[14px] font-bold rounded-lg px-6 py-3 hover:bg-gold/90 transition-colors"
              >
                View SHIELD Details
                <ArrowRight size={14} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Secondary Partners */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-slate mb-2 block">
              Active Partners
            </span>
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-10 leading-snug">
              Specialist partners across two lanes
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Dynamic Netsoft Technologies */}
            <FadeIn variant="slideRight">
              <div id="dynamic-netsoft" className="bg-white rounded-xl p-7 border border-border h-full hover:border-gold/30 hover:shadow-sm transition-all duration-200 scroll-mt-28">
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span className="text-[13px] font-bold tracking-[.12em] uppercase text-brand-goldLight/80">
                    Enterprise Lane
                  </span>
                  <span className="text-[13px] bg-gold/10 text-brand-goldLight font-semibold px-2 py-0.5 rounded-full">
                    Microsoft D365
                  </span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-navy/[0.08] flex items-center justify-center mb-4">
                  <Building2 size={18} className="text-navy" />
                </div>
                <h3 className="text-[18px] font-bold text-text-dark mb-3">
                  Dynamic Netsoft Technologies
                </h3>
                <p className="text-[14px] text-slate leading-relaxed mb-5">
                  Full-suite Microsoft Dynamics 365 Finance and Operations ISV, certified on Microsoft AppSource, focused on real estate and construction. Enterprise-grade property and contract lifecycle management for organisations on the Microsoft stack.
                </p>
                <a
                  href="https://www.dynamicnetsoft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-goldDark hover:gap-3 transition-all duration-200"
                >
                  Visit Dynamic Netsoft
                  <ExternalLink size={12} />
                </a>
              </div>
            </FadeIn>

            {/* Property Automate */}
            <FadeIn variant="fadeUp" delay={80}>
              <div id="property-automate" className="bg-white rounded-xl p-7 border border-border h-full hover:border-gold/30 hover:shadow-sm transition-all duration-200 scroll-mt-28">
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span className="text-[13px] font-bold tracking-[.12em] uppercase text-brand-goldLight/80">
                    Enterprise Lane
                  </span>
                  <span className="text-[13px] bg-gold/10 text-brand-goldLight font-semibold px-2 py-0.5 rounded-full">
                    PropTech
                  </span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-navy/[0.08] flex items-center justify-center mb-4">
                  <Home size={18} className="text-navy" />
                </div>
                <h3 className="text-[18px] font-bold text-text-dark mb-3">
                  Property Automate
                </h3>
                <p className="text-[14px] text-slate leading-relaxed mb-5">
                  Property operations technology for residential, commercial, and facilities management. Purpose-built platforms that digitise property workflows end to end.
                </p>
                <a
                  href="https://propertyautomate.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-goldDark hover:gap-3 transition-all duration-200"
                >
                  Visit Property Automate
                  <ExternalLink size={12} />
                </a>
              </div>
            </FadeIn>

            {/* Newgen Consulting */}
            <FadeIn variant="fadeUp" delay={160}>
              <div id="newgen-consulting" className="bg-white rounded-xl p-7 border border-border h-full hover:border-gold/30 hover:shadow-sm transition-all duration-200 scroll-mt-28">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[13px] font-bold tracking-[.12em] uppercase text-brand-goldLight/80">
                    SME Lane
                  </span>
                  <span className="text-[13px] bg-gold/10 text-brand-goldLight font-semibold px-2 py-0.5 rounded-full">
                    Healthcare Software
                  </span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-navy/[0.08] flex items-center justify-center mb-4">
                  <Users size={18} className="text-navy" />
                </div>
                <h3 className="text-[18px] font-bold text-text-dark mb-3">Newgen Consulting</h3>
                <p className="text-[14px] text-slate leading-relaxed mb-5">
                  Zoho ecosystem specialist working with CollabEdge Solutions to bring healthcare domain expertise to Zoho CRM and operations platforms. For NDIS providers and allied health operators who prefer a packaged software solution over custom builds, CollabEdge provides the healthcare domain knowledge, Newgen provides the Zoho implementation depth.
                </p>
                <a
                  href="https://newgenconsulting.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-goldDark hover:gap-3 transition-all duration-200"
                >
                  Visit Newgen Consulting
                  <ExternalLink size={12} />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Become a Partner — eucalyptus */}
      <section className="py-16 px-5 sm:px-10" style={{ backgroundColor: '#3C6E5E' }}>
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
            <FadeIn variant="slideRight">
              <span className="text-[13px] font-bold tracking-[.14em] uppercase text-[#D1D5DB] mb-2 block">
                Partner Enquiries
              </span>
              <h2 className="text-[26px] font-bold text-white mb-3 leading-snug">
                Interested in partnering with CollabEdge?
              </h2>
              <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-[520px]">
                CollabEdge evaluates new partner relationships on a case-by-case basis. If you have a specialist capability that serves Australian or Asia Pacific enterprises or healthcare providers, we welcome the conversation. Partner enquiries are managed by Raj Purshotham, Strategy and Growth Advisor.
              </p>
            </FadeIn>
            <FadeIn variant="fadeUp" delay={100}>
              <a
                href="/appt"
                className="inline-flex items-center gap-2 bg-white text-[#3C6E5E] text-[14px] font-bold rounded-lg px-7 py-4 hover:bg-white/90 transition-colors whitespace-nowrap"
              >
                Start a Conversation
                <ArrowRight size={14} />
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Not sure which partner solution fits?"
        sub="Start with a free consultation. We will point you in the right direction."
        ctaLabel="Book a Free Consultation"
        ctaHref="/appt"
      />
    </>
  )
}