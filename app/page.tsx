import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Shield, Zap, BookOpen,
  Users, ArrowRight, CheckCircle, LayoutGrid, Layers, Brain, GraduationCap
} from 'lucide-react'
import CTASection from '@/components/ui/CTASection'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'

export const metadata: Metadata = {
  title: 'NDIS Compliance and Data Security in Wyndham | CollabEdge',
  description:
    'NDIS audit preparation, data security, AI automation and ongoing Managed Services for providers in Wyndham, Melbourne and Geelong, from a Support Coordinator.',
  openGraph: {
    title: 'NDIS Compliance and Data Security in Wyndham | CollabEdge Solutions',
    description:
      'NDIS compliance, carefully managed by someone active with participants every day. Based in Wyndham, with 30 years of large enterprise and government health experience.',
    url: 'https://www.collabedgesolutions.com.au',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'website',
  },
}

const pillars = [
  {
    eyebrow: 'For NDIS, Healthcare, and Growing Businesses',
    title: 'Simplify. Streamline. Automate. Grow.',
    body: 'We bring enterprise discipline down to earth. Compliance and audit readiness, AI-powered workflow automation, and document governance, built on the Microsoft 365 or Google Workspace tools you already pay for. Built and used in live NDIS operations before we recommend anything.',
    ctaLabel: 'Start Simplifying Your Operations',
    ctaHref: '/services',
    isEnterprise: false,
  },
  {
    eyebrow: 'For Enterprises',
    title: 'Collaborative. Cutting Edge. Future-Proof.',
    body: 'We bring that same experience forward. Data platform strategy, migration leadership, and niche technology solutions delivered with specialist partners, from voice fraud prevention to property technology, across Australia and Asia Pacific.',
    ctaLabel: 'Explore Partner Solutions',
    ctaHref: '/services/partner-solutions',
    isEnterprise: true,
  },
]

const differentiators = [
  {
    icon: Users,
    title: 'Active in NDIS Every Day',
    body: 'I coordinate NDIS participants through My Ability Services, and I test every solution with real participants before I recommend it to a client. Privacy and data security are part of how I evaluate every tool, because I handle participant information myself.',
  },
  {
    icon: Zap,
    title: 'We Start With What You Have',
    body: 'Most clients already have Microsoft 365 or Google Workspace. We show them how to unlock compliance, automation, and AI capability from tools they are already paying for.',
  },
  {
    icon: GraduationCap,
    title: 'Teaching at Monash University',
    body: 'Since 2025 I have taught Professional Practice to IT masters students at Monash University as a sessional academic, covering ethics, governance, and quality and reliability. I bring the same clear, plain-spoken approach to your operations.',
  },
]

const trustRows = [
  {
    label: 'Experience built at',
    names: ['Citibank Singapore', 'Singtel', 'NAB', 'Tech Mahindra', 'Victorian Department of Health', 'Business Victoria'],
  },
  {
    label: 'Delivered projects for',
    names: ['DBS', 'DTAC', 'M1', 'DFS', 'Singapore Department of Statistics', 'Integral Energy'],
  },
]

const coreServices = [
  {
    icon: Shield,
    title: 'NDIS Compliance and Audit',
    body: 'Audit preparation, registration support including SIL mandatory registration, and compliance systems that hold up under Commission scrutiny.',
    href: '/services/ndis-compliance-audit',
  },
  {
    icon: BookOpen,
    title: 'Document Governance',
    body: 'Structured, findable, compliant documentation systems for growing provider teams, including SIL document suite delivery.',
    href: '/services/document-governance',
  },
  {
    icon: Zap,
    title: 'Healthcare Workflow Automation',
    body: 'AI-powered automation that takes repetitive admin off your team, built on your existing tools. For NDIS providers and healthcare organisations.',
    href: '/services/healthcare-workflow',
  },
]

const managedServices = {
  icon: Layers,
  title: 'Managed Services',
  body: 'One ongoing relationship instead of a string of separate projects. Managed Services brings compliance, document governance and workflow automation together, complemented by AI where it helps, so you stay audit ready through the year and always know where you stand.',
  href: '/services',
  ctaLabel: 'See how Managed Services works',
}

const aiAutomation = {
  icon: Brain,
  title: 'AI and Automation, Used with Care',
  body: 'I show providers how to get more from the software they already own, complemented by AI and automation where it genuinely lifts the admin, and where it is better to leave things alone. Participant privacy is part of every decision.',
  href: '/ai-automation',
  ctaLabel: 'Explore AI and automation',
}

const viewAllServices = {
  icon: LayoutGrid,
  title: 'View All Services',
  body: 'See everything we offer, including digital services, AI advisory, enterprise partnerships and how Managed Services brings it all together.',
  href: '/services',
}

const partners = ['SHIELD', 'Dynamic Netsoft', 'Property Automate', 'NewGen Consulting']

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-navy">
        {/* Desktop: photo right (absolute, gradient overlay), content left. Unchanged from prior layout. */}
        <div className="hidden lg:flex lg:items-center lg:min-h-[560px] lg:relative">
          <div className="absolute inset-y-0 right-0 w-[55%]">
            <Image
              src="/images/Sinclair-hero.jpeg"
              alt="Sinclair Hurtis, Founder of CollabEdge Solutions"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 1023px) 0vw, 55vw"
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

          <div className="relative z-10 w-[58%] pr-6 py-16 lg:py-20 pl-[max(2.5rem,calc((100%_-_1000px)/2))] lg:mr-auto">
            <FadeIn variant="fadeUp">
              <div className="w-9 h-[2px] bg-gold mb-4" />
              <h1 className="text-[36px] sm:text-[44px] font-bold text-white leading-tight tracking-[-0.035em] mb-5 max-w-[560px]">
                NDIS compliance, carefully managed by someone{' '}
                <em className="not-italic text-brand-goldDark">active with participants every day.</em>
              </h1>
              <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-[520px] mb-8">
                I bring 30 years of large enterprise and government health experience to the daily reality of NDIS operations. Based in Wyndham, I help providers across Melbourne, Geelong and beyond stay audit ready, take on the admin with the software you already own complemented by AI, and handle participant data with care, through ongoing Managed Services or a single project.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/appt" className="btn-gold">Book a Free Consultation</a>
                <a href="/services" className="btn-ghost">Explore Our Services</a>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Mobile: sequential layout. Photo full width at full brightness, then a solid navy panel with the text below it. No overlay. */}
        <div className="lg:hidden">
          <div className="relative w-full aspect-[4/5] sm:aspect-[16/10]">
            <Image
              src="/images/Sinclair-hero.jpeg"
              alt="Sinclair Hurtis, Founder of CollabEdge Solutions"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 1023px) 100vw, 0vw"
            />
          </div>

          <div className="px-5 sm:px-6 pt-12 pb-10 mx-auto max-w-[640px]">
            <FadeIn variant="fadeUp">
              <div className="w-9 h-[2px] bg-gold mb-4" />
              <h1 className="text-[36px] sm:text-[44px] font-bold text-white leading-tight tracking-[-0.035em] mb-5 max-w-[560px]">
                NDIS compliance, carefully managed by someone{' '}
                <em className="not-italic text-brand-goldDark">active with participants every day.</em>
              </h1>
              <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-[520px] mb-8">
                I bring 30 years of large enterprise and government health experience to the daily reality of NDIS operations. Based in Wyndham, I help providers across Melbourne, Geelong and beyond stay audit ready, take on the admin with the software you already own complemented by AI, and handle participant data with care, through ongoing Managed Services or a single project.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/appt" className="btn-gold">Book a Free Consultation</a>
                <a href="/services" className="btn-ghost">Explore Our Services</a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 1b. Trust banner */}
      <section className="bg-navy border-t border-white/10 py-8 md:py-10 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <p className="text-[16px] text-[#F1F5F9] font-normal md:font-medium leading-relaxed max-w-[720px] mb-6">
              30 years across banking, telecommunications, government and consulting in Australia and Asia Pacific.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trustRows.map((row) => (
                <div key={row.label}>
                  <span className="text-[13px] font-bold tracking-[.14em] uppercase text-brand-goldDark mb-2 block">
                    {row.label}
                  </span>
                  <div className="flex flex-wrap items-center gap-x-5 md:gap-x-6 gap-y-0.5 md:gap-y-1">
                    {row.names.map((name) => (
                      <span key={name} className="text-[16px] font-medium md:font-semibold text-[#D1D5DB]">
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
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
                <div className={pillar.isEnterprise
                  ? 'bg-eucalyptus rounded-xl p-8 hover:shadow-xl transition-all duration-300 h-full flex flex-col'
                  : 'bg-white/[0.04] border border-white/10 rounded-xl p-8 hover:border-gold/30 transition-colors h-full flex flex-col'
                }>
                  <span className="text-[13px] font-bold tracking-[.14em] uppercase text-brand-goldDark/80 mb-3 block">
                    {pillar.eyebrow}
                  </span>
                  <h3 className="text-[20px] font-bold text-white mb-4 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className={pillar.isEnterprise
                    ? 'text-[16px] text-white/85 leading-relaxed mb-6 flex-1'
                    : 'text-[16px] text-[#D1D5DB] leading-relaxed mb-6 flex-1'
                  }>
                    {pillar.body}
                  </p>
                  <a
                    href={pillar.ctaHref}
                    className={pillar.isEnterprise
                      ? 'inline-flex items-center gap-2 text-[14px] font-semibold text-white hover:gap-3 transition-all duration-200'
                      : 'inline-flex items-center gap-2 text-[14px] font-semibold text-brand-goldDark hover:gap-3 transition-all duration-200'
                    }
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
                  <p className="text-[16px] text-slate leading-relaxed">{card.body}</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {[managedServices, aiAutomation].map((card, i) => (
              <FadeIn key={card.title} variant="fadeUp" delay={i * 80}>
                <a
                  href={card.href}
                  className="block bg-white/[0.04] border border-gold/40 rounded-xl p-6 h-full hover:border-gold/70 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <card.icon size={18} className="text-gold" />
                  </div>
                  <h3 className="text-[18px] font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-[16px] text-[#D1D5DB] leading-relaxed mb-4">{card.body}</p>
                  <span className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-goldDark group-hover:gap-3 transition-all duration-200">
                    {card.ctaLabel} <ArrowRight size={13} />
                  </span>
                </a>
              </FadeIn>
            ))}
          </div>
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
                  <p className="text-[16px] text-[#D1D5DB] leading-relaxed mb-4">{service.body}</p>
                  <span className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-goldDark group-hover:gap-3 transition-all duration-200">
                    Learn more <ArrowRight size={13} />
                  </span>
                </a>
              </FadeIn>
            ))}
            <FadeIn variant="fadeUp" delay={coreServices.length * 80}>
              <a
                href={viewAllServices.href}
                className="flex flex-col items-start justify-center bg-transparent border border-dashed border-white/25 rounded-xl p-6 h-full hover:border-gold/50 hover:bg-white/[0.02] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center mb-4 group-hover:border-gold/40 transition-colors">
                  <viewAllServices.icon size={18} className="text-[#D1D5DB]" />
                </div>
                <h3 className="text-[18px] font-bold text-white mb-2">{viewAllServices.title}</h3>
                <p className="text-[16px] text-[#D1D5DB] leading-relaxed mb-4">{viewAllServices.body}</p>
                <span className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-goldDark group-hover:gap-3 transition-all duration-200">
                  View Services <ArrowRight size={13} />
                </span>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 6. Featured testimonials */}
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
                  <Image
                    src="/images/enhance-ability-logo.webp"
                    alt="Enhance Ability Services"
                    width={178}
                    height={144}
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
                  <Image
                    src="/images/safe-star-logo.jpg"
                    alt="Safe Star Supports"
                    width={640}
                    height={197}
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

      {/* 7. Partner strip, eucalyptus */}
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