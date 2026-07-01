import type { Metadata } from 'next'
import {
  Shield, Zap, BookOpen, Brain, Globe,
  Building2, ArrowRight, CheckCircle,
  Stethoscope, Lock, Database, Home as HomeIcon
} from 'lucide-react'
import PageHero from '@/components/corporate/PageHero'
import CTASection from '@/components/ui/CTASection'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'

export const metadata: Metadata = {
  title: 'Services | CollabEdge Solutions',
  description:
    'NDIS compliance, workflow automation, AI advisory, and enterprise technology partnerships. CollabEdge Solutions delivers practitioner-led consulting for Australian businesses.',
  openGraph: {
    title: 'Services | CollabEdge Solutions',
    description:
      'Two service pillars. One senior-led consultant. Real outcomes for NDIS providers and Australian enterprises.',
    url: 'https://collabedgesolutions.com.au/services',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Business Consulting',
  provider: {
    '@type': 'ProfessionalService',
    name: 'CollabEdge Solutions',
    url: 'https://collabedgesolutions.com.au',
  },
  areaServed: 'AU',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'CollabEdge Solutions Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'NDIS Compliance and Audit' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Healthcare Workflow Automation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Document Governance' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Advisory' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Enterprise Partner Solutions' } },
    ],
  },
}

const healthcareServices = [
  {
    icon: Shield,
    title: 'NDIS Compliance and Audit',
    desc: 'Compliance documentation, audit readiness, and governance frameworks built to withstand scrutiny.',
    price: 'From $3,500',
    href: '/services/ndis-compliance-audit',
  },
  {
    icon: Zap,
    title: 'Healthcare Workflow Automation',
    desc: 'Removing manual effort from day-to-day operations using tools you already own.',
    price: 'Custom scope',
    href: '/services/healthcare-workflow',
  },
  {
    icon: BookOpen,
    title: 'Document Governance',
    desc: 'Structured, auditable documentation systems that hold up under NDIS Commission review.',
    price: 'Custom scope',
    href: '/services/document-governance',
  },
  {
    icon: Brain,
    title: 'AI Advisory',
    desc: 'Practical AI tooling for healthcare operators, tested before it reaches your team.',
    price: 'Custom scope',
    href: '/ai-automation',
  },
]

const partnerCards = [
  {
    icon: HomeIcon,
    title: 'Property Automate',
    desc: 'Property management workflow automation for commercial and residential portfolios.',
  },
  {
    icon: Database,
    title: 'DQOps',
    desc: 'Enterprise data quality monitoring that catches issues before they reach decision-makers.',
  },
  {
    icon: Shield,
    title: 'Vanta',
    desc: 'Security and compliance automation for organisations pursuing SOC 2 and ISO certification.',
  },
]

const pillars = [
  'Senior-led, with no hand-offs to junior staff',
  'We start with what you already have',
  'Transparent, published pricing where possible',
]

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <PageHero
        eyebrow="Services"
        h1="Two pillars. One senior consultant."
        answerBlock="CollabEdge Solutions delivers services across two areas: healthcare and NDIS operational consulting, and enterprise technology partnerships. Every engagement, regardless of size, is led directly by the same senior consultant from first conversation to final delivery."
      />

      {/* Pillar Selector */}
      <section className="bg-white py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Healthcare / NDIS Pillar */}
            <FadeIn variant="slideRight">
              <a
                href="#healthcare-services"
                className="block bg-navy rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/[0.05] rounded-full -translate-y-16 translate-x-16 pointer-events-none" />
                <div className="w-12 h-12 rounded-lg bg-gold/15 flex items-center justify-center mb-6 group-hover:bg-gold/25 transition-colors">
                  <Stethoscope size={22} className="text-gold" />
                </div>
                <span className="text-[10px] font-bold tracking-[.14em] uppercase text-gold/60 mb-2 block">
                  Give Back
                </span>
                <h2 className="text-[20px] font-bold text-white mb-3 leading-snug">
                  Healthcare and NDIS Solutions
                </h2>
                <p className="text-[13px] text-white/55 leading-relaxed mb-6">
                  Compliance, automation, document governance, and AI advisory for NDIS providers and healthcare operators, built on what you already have.
                </p>
                <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-gold group-hover:gap-3 transition-all duration-200">
                  View healthcare services <ArrowRight size={13} />
                </span>
              </a>
            </FadeIn>

            {/* Enterprise Pillar */}
            <FadeIn variant="fadeUp" delay={150}>
              <a
                href="#enterprise-services"
                className="block bg-offwhite rounded-2xl p-8 h-full border border-border hover:shadow-xl hover:border-gold/30 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <Building2 size={22} className="text-navy" />
                </div>
                <span className="text-[10px] font-bold tracking-[.14em] uppercase text-slate mb-2 block">
                  Transform Forward
                </span>
                <h2 className="text-[20px] font-bold text-text-dark mb-3 leading-snug">
                  Enterprise Partnerships
                </h2>
                <p className="text-[13px] text-slate leading-relaxed mb-6">
                  Specialist enterprise technology delivered through selected partnerships: security, data quality, and property automation.
                </p>
                <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-navy group-hover:gap-3 group-hover:text-gold transition-all duration-200">
                  View enterprise solutions <ArrowRight size={13} />
                </span>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Healthcare Services Section */}
      <section id="healthcare-services" className="bg-offwhite py-16 px-5 sm:px-10 scroll-mt-24">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <span className="text-[11px] font-semibold tracking-[.16em] uppercase text-slate mb-2 block">
              Healthcare and NDIS Solutions
            </span>
            <h2 className="text-[22px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              What healthcare and NDIS services does CollabEdge Solutions offer?
            </h2>
            <p className="text-[14px] text-slate leading-relaxed mb-10 max-w-[680px]">
              CollabEdge Solutions supports NDIS providers and healthcare operators across four core areas: compliance and audit readiness, workflow automation, document governance, and AI advisory. Every service is delivered using infrastructure you already have, not new platforms you need to learn.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {healthcareServices.map((service, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 80}>
                <a
                  href={service.href}
                  className="block bg-white rounded-xl p-6 border border-border h-full hover:border-gold/40 hover:shadow-md hover:-translate-y-[2px] transition-all duration-200 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <service.icon size={18} className="text-gold" />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-light uppercase tracking-wide mt-1">
                      {service.price}
                    </span>
                  </div>
                  <h3 className="text-[15px] font-bold text-text-dark mb-2 group-hover:text-navy transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[12px] text-slate leading-relaxed mb-4">{service.desc}</p>
                  <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-gold group-hover:gap-3 transition-all duration-200">
                    Learn more <ArrowRight size={12} />
                  </span>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Services Section */}
      <section id="enterprise-services" className="bg-navy py-16 px-5 sm:px-10 scroll-mt-24">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <span className="text-[11px] font-semibold tracking-[.16em] uppercase text-gold/60 mb-2 block">
              Enterprise Partnerships
            </span>
            <h2 className="text-[22px] font-bold text-white tracking-tight mb-4 leading-snug">
              Enterprise technology, delivered through selected partnerships
            </h2>
            <p className="text-[14px] text-white/60 leading-relaxed mb-10 max-w-[680px]">
              CollabEdge Solutions is the Australian and Asia Pacific delivery partner for a small number of carefully selected enterprise technology providers. We recommend based on fit, not financial relationships.
            </p>
          </FadeIn>

          {/* SHIELD — Featured */}
          <FadeIn variant="fadeUp" delay={0}>
            <a
              href="/services/partner-solutions/shield"
              className="block bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-xl p-7 mb-5 hover:border-gold/50 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Lock size={22} className="text-gold" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-[.12em] uppercase text-gold mb-1 block">
                      Featured Partner
                    </span>
                    <h3 className="text-[17px] font-bold text-white">SHIELD: Voice Fraud Prevention</h3>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-gold group-hover:gap-3 transition-all duration-200">
                  View partner page <ArrowRight size={13} />
                </span>
              </div>
              <p className="text-[13px] text-white/50 leading-relaxed mt-4 max-w-[680px]">
                Enterprise-grade voice authentication protecting call centres and customer-facing operations from synthetic voice fraud, delivered by CollabEdge Solutions as Sekunce&apos;s Australian and APAC delivery partner.
              </p>
            </a>
          </FadeIn>

          {/* Three Secondary Partner Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {partnerCards.map((partner, i) => (
              <FadeIn key={i} variant="fadeUp" delay={150 + i * 80}>
                <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6 h-full hover:border-gold/30 transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <partner.icon size={16} className="text-gold" />
                  </div>
                  <h3 className="text-[14px] font-bold text-white mb-2">{partner.title}</h3>
                  <p className="text-[12px] text-white/45 leading-relaxed">{partner.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Services Strip */}
      <section className="bg-white py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="slideRight">
            <div className="bg-offwhite rounded-2xl p-8 md:p-10 border border-border">
              <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 items-center">
                <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center flex-shrink-0">
                  <Globe size={24} className="text-gold" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-[.12em] uppercase text-slate mb-1 block">
                    For Any Australian Business
                  </span>
                  <h2 className="text-[18px] font-bold text-text-dark mb-2 leading-snug">Digital Services</h2>
                  <p className="text-[13px] text-slate leading-relaxed max-w-[480px]">
                    Websites, branding, and digital marketing for growing businesses, not limited to healthcare. From $1,500.
                  </p>
                </div>
                <a
                  href="/services/digital"
                  className="inline-flex items-center gap-2 bg-navy text-white text-[12px] font-semibold rounded-lg px-5 py-3 hover:bg-navy-mid transition-colors whitespace-nowrap"
                >
                  View Digital Services <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Two Pillars */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[20px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              Why we work across two service pillars
            </h2>
            <p className="text-[14px] text-slate leading-relaxed mb-8 max-w-[680px]">
              Operating across healthcare consulting and enterprise technology partnerships keeps CollabEdge Solutions connected to both ends of the market: the practical realities of NDIS providers, and the technology standards expected by larger enterprises. Each pillar makes the other better.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pillars.map((item, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 80}>
                <div className="flex items-start gap-3 bg-white rounded-lg p-4 border border-border">
                  <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-[13px] text-text-body leading-relaxed">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Not sure which service fits your situation?"
        sub="30 minutes. Free. We will point you in the right direction."
        ctaLabel="Book a Free Consultation"
        ctaHref="/appt"
      />
    </>
  )
}