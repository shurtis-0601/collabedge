import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Shield, Zap, BookOpen, Home as HomeIcon,
  Users, TrendingUp, ArrowRight, CheckCircle
} from 'lucide-react'
import CTASection from '@/components/ui/CTASection'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'

export const metadata: Metadata = {
  title: 'CollabEdge Solutions | NDIS Compliance and Enterprise Technology, Melbourne',
  description:
    'CollabEdge Solutions helps Australian NDIS providers and healthcare organisations simplify compliance and automate operations, and delivers enterprise technology with specialist partners across Australia and Asia Pacific.',
  openGraph: {
    title: 'CollabEdge Solutions | NDIS Compliance and Enterprise Technology',
    description:
      'Fortune 500 experience applied to Australian NDIS providers, healthcare organisations, and enterprises across Australia and Asia Pacific.',
    url: 'https://collabedgesolutions.com.au',
  },
}

const trustBadges = [
  'Australian owned',
  'Melbourne based',
  '30+ years experience',
  'Active NDIS practitioner',
]

const pillars = [
  {
    eyebrow: 'For NDIS, Healthcare, and Growing Businesses',
    title: 'Simplify. Streamline. Automate. Grow.',
    body: 'We bring enterprise discipline down to earth. Compliance and audit readiness, AI-powered workflow automation, and document governance, built on the Microsoft 365 or Google Workspace tools you already pay for. Tested by an active NDIS practitioner before we recommend anything.',
    ctaLabel: 'Explore Advisory Services',
    ctaHref: '/services',
  },
  {
    eyebrow: 'For Enterprises',
    title: 'Collaboration. Cutting Edge. Future-Proof.',
    body: 'We bring that same experience forward. Data platform strategy, migration leadership, and niche technology solutions delivered with specialist partners, from voice fraud prevention to property technology, across Australia and Asia Pacific.',
    ctaLabel: 'Explore Partner Solutions',
    ctaHref: '/services/partner-solutions',
  },
]

const differentiators = [
  {
    icon: Users,
    title: 'Practitioner-Led',
    body: 'Sinclair actively coordinates NDIS participants through My Ability Services, testing every solution in a live environment before recommending it to clients.',
  },
  {
    icon: Zap,
    title: 'We Start With What You Have',
    body: 'Most clients already have Microsoft 365 or Google Workspace. We show them how to unlock compliance, automation, and AI capability from tools they are already paying for.',
  },
  {
    icon: TrendingUp,
    title: 'Fortune 500 Depth, Applied at Any Scale',
    body: '30+ years across Citibank Singapore, Singtel, NAB, and the Victorian Department of Health, applied to Australian healthcare providers and growing businesses across Asia Pacific.',
  },
]

const coreServices = [
  {
    icon: Shield,
    title: 'NDIS Compliance and Audit',
    body: 'Audit preparation, registration, and compliance systems that hold up under Commission scrutiny.',
    href: '/services/ndis-compliance-audit',
  },
  {
    icon: Zap,
    title: 'Healthcare Workflow Automation',
    body: 'AI-powered automation that takes repetitive admin off your team, built on your existing tools.',
    href: '/services/healthcare-workflow',
  },
  {
    icon: BookOpen,
    title: 'Document Governance',
    body: 'Structured, findable, compliant documentation systems for growing provider teams.',
    href: '/services/document-governance',
  },
  {
    icon: HomeIcon,
    title: 'SIL Registration',
    body: 'End to end support to achieve SIL registration with confidence.',
    href: '/services/ndis-compliance-audit/sil-registration',
  },
]

const partners = ['SHIELD', 'Dynamic Netsoft', 'Property Automate', 'Newgen Consulting']

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative min-h-[560px] flex items-center overflow-hidden bg-navy">
        {/* Photo, right side on desktop */}
        <div className="absolute inset-y-0 right-0 w-[55%] hidden lg:block">
          <Image
            src="/images/Sinclair-hero.jpeg"
            alt="Sinclair Hurtis, Founder of CollabEdge Solutions"
            fill
            className="object-cover object-center"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(270deg, transparent 0%, rgba(3,15,35,0.2) 30%, rgba(3,15,35,0.75) 55%, rgba(3,15,35,0.97) 75%, rgba(3,15,35,1) 100%)',
            }}
            aria-hidden="true"
          />
        </div>

        {/* Photo behind with overlay on mobile */}
        <div className="absolute inset-0 lg:hidden">
          <Image
            src="/images/Sinclair-hero.jpeg"
            alt="Sinclair Hurtis, Founder of CollabEdge Solutions"
            fill
            className="object-cover object-top"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(3,15,35,1) 0%, rgba(3,15,35,0.92) 50%, rgba(3,15,35,0.6) 100%)',
            }}
            aria-hidden="true"
          />
        </div>

        {/* Content, left side */}
        <div className="relative z-10 w-full lg:w-[52%] px-6 py-16 lg:py-20 lg:pl-10 max-w-[640px] lg:max-w-none lg:mr-auto mx-auto">
          <FadeIn variant="fadeUp">
            <div className="w-9 h-[2px] bg-gold mb-4" />
            <h1 className="text-[36px] sm:text-[44px] font-bold text-white leading-tight tracking-[-0.035em] mb-5 max-w-[560px]">
              Fortune 500 experience.{' '}
              <em className="font-serif not-italic text-brand-goldDark">Applied to your business.</em>
            </h1>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-[520px] mb-8">
              CollabEdge Solutions helps Australian NDIS providers and healthcare organisations simplify compliance and automate operations, and delivers enterprise technology solutions with specialist partners across Australia and Asia Pacific. Every engagement is senior-led and practitioner-tested.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a href="/appt" className="btn-gold">Book a Free Consultation</a>
              <a href="/services" className="btn-ghost">Explore Our Services</a>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-6 border-t border-white/15">
              {trustBadges.map((badge, i) => (
                <span key={i} className="flex items-center gap-3 text-[14px] text-[#D1D5DB]">
                  {i > 0 && <span className="text-brand-goldDark" aria-hidden="true">|</span>}
                  {badge}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Problem and promise */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <p className="text-[18px] text-text-dark leading-relaxed max-w-[720px] font-medium mb-4">
              Compliance pressure, audit stress, manual admin, and technology costs that keep creeping up.
            </p>
            <p className="text-[16px] text-slate leading-relaxed max-w-[720px]">
              Most providers and growing businesses do not need more software. They need someone who has run operations at scale to simplify what they already have, automate the repetitive work, and recommend change only where the cost benefit stacks up.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 3. Two pillars, one foundation */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-3 leading-snug">
              One Foundation. Two Ways We Help.
            </h2>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed mb-10 max-w-[680px]">
              Three decades inside Fortune 500 transformations, now working in two directions.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 120}>
                <div className="bg-white/[0.04] border border-white/10 rounded-xl p-8 hover:border-gold/30 transition-colors h-full flex flex-col">
                  <span className="text-[13px] font-bold tracking-[.14em] uppercase text-brand-goldDark/60 mb-3 block">
                    {pillar.eyebrow}
                  </span>
                  <h3 className="text-[20px] font-bold text-white mb-4 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-[16px] text-[#D1D5DB] leading-relaxed mb-6 flex-1">
                    {pillar.body}
                  </p>
                  <a
                    href={pillar.ctaHref}
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-goldDark hover:gap-3 transition-all duration-200"
                  >
                    {pillar.ctaLabel} <ArrowRight size={14} />
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why CollabEdge */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-10 leading-snug">
              Why Organisations Choose CollabEdge
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {differentiators.map((card, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 100}>
                <div className="bg-white rounded-xl p-6 border border-border h-full hover:border-gold/30 hover:shadow-sm transition-all duration-200">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <card.icon size={18} className="text-gold" />
                  </div>
                  <h3 className="text-[18px] font-bold text-text-dark mb-2">{card.title}</h3>
                  <p className="text-[14px] text-slate leading-relaxed">{card.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Core services snapshot */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-10 leading-snug">
              What We Do
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {coreServices.map((service, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 80}>
                <a
                  href={service.href}
                  className="block bg-white/[0.04] border border-white/10 rounded-xl p-6 h-full hover:border-gold/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <service.icon size={18} className="text-gold" />
                  </div>
                  <h3 className="text-[18px] font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-[14px] text-[#D1D5DB] leading-relaxed mb-4">{service.body}</p>
                  <span className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-goldDark group-hover:gap-3 transition-all duration-200">
                    Learn more <ArrowRight size={13} />
                  </span>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Partner strip, eucalyptus */}
      <section className="py-16 px-5 sm:px-10" style={{ backgroundColor: '#3C6E5E' }}>
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-3 leading-snug">
              Specialist Technology, Delivered Through Partners
            </h2>
            <p className="text-[16px] text-white leading-relaxed mb-8 max-w-[640px]">
              Carefully selected partners extend what we deliver, from voice fraud prevention to property technology and the Zoho ecosystem.
            </p>
          </FadeIn>
          <div className="flex flex-wrap items-center gap-4 mb-10">
            {partners.map((partner, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 70}>
                <span className="inline-block bg-white/10 border border-white/25 rounded-lg px-5 py-3 text-[16px] font-semibold text-white">
                  {partner}
                </span>
              </FadeIn>
            ))}
          </div>
          <FadeIn variant="fadeUp" delay={300}>
            <a
              href="/services/partner-solutions"
              className="inline-flex items-center gap-2 bg-white text-[#3C6E5E] text-[14px] font-bold rounded-lg px-6 py-3 hover:bg-white/90 transition-colors"
            >
              View Partner Solutions
              <ArrowRight size={14} />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* 7. Featured testimonials */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-8 leading-snug">
              Trusted by Providers
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn variant="fadeUp" delay={100}>
              <div className="bg-white rounded-xl p-8 border border-border h-full flex flex-col">
                <blockquote className="font-serif italic text-[17px] text-text-dark leading-relaxed mb-6 flex-1">
                  Working with Sinclair has transformed what once felt overwhelming into something clear, structured, and exciting. He did not just implement solutions. He taught me along the way.
                </blockquote>
                <div className="flex items-center gap-4 flex-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/enhance-ability-logo.webp"
                    alt="Enhance Ability Services"
                    className="h-12 w-auto"
                  />
                  <div>
                    <span className="text-[14px] font-semibold text-text-dark block">Rebecca Delaney</span>
                    <span className="text-[14px] text-slate">Director, Enhance Ability Services · Geelong VIC</span>
                  </div>
                </div>
                <a
                  href="/case-studies/enhance-ability-services"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-goldLight hover:gap-3 transition-all duration-200 mt-6"
                >
                  Read the full case study <ArrowRight size={13} />
                </a>
              </div>
            </FadeIn>
            <FadeIn variant="fadeUp" delay={200}>
              <div className="bg-white rounded-xl p-8 border border-border h-full flex flex-col">
                <blockquote className="font-serif italic text-[17px] text-text-dark leading-relaxed mb-6 flex-1">
                  As a new business owner, the stress was quite overwhelming for me, but Sinclair&apos;s expertise has been incredibly reassuring and supportive. His professionalism, integrity, and genuine care for his clients and service delivery outweighs the rest. I am extremely grateful to have him in my corner.
                </blockquote>
                <div className="flex items-center gap-4 flex-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/safe-star-logo.jpg"
                    alt="Safe Star Supports"
                    className="h-12 w-auto"
                  />
                  <div>
                    <span className="text-[14px] font-semibold text-text-dark block">Katelyn Leighton</span>
                    <span className="text-[14px] text-slate">Founder, Safe Star Supports · Perth WA</span>
                  </div>
                </div>
                <a
                  href="/case-studies#safe-star-supports"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-goldLight hover:gap-3 transition-all duration-200 mt-6"
                >
                  Read the full case study <ArrowRight size={13} />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <CTASection
        heading="Ready to Get Started?"
        sub="A free 30 minute conversation about where you are and what would make the biggest difference."
        ctaLabel="Book a Free Consultation"
        ctaHref="/appt"
      />
    </>
  )
}