import type { Metadata } from 'next'
import {
  Users, Award, BookOpen, Zap,
  Shield, TrendingUp, CheckCircle,
  ArrowRight, Building2, GraduationCap,
  Stethoscope, Globe
} from 'lucide-react'
import PageHero from '@/components/corporate/PageHero'
import CTASection from '@/components/ui/CTASection'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export const metadata: Metadata = {
  title: 'About CollabEdge Solutions | Melbourne Consulting Firm',
  description:
    'CollabEdge Solutions is a Melbourne-based operational consulting firm founded by Sinclair Hurtis. 30+ years Fortune 500 experience. NDIS compliance, automation, and enterprise technology for Australian businesses.',
  openGraph: {
    title: 'About CollabEdge Solutions',
    description:
      'Practitioner-led consulting for NDIS providers and Australian enterprises. We start with what you already have.',
    url: 'https://collabedgesolutions.com.au/about',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About CollabEdge Solutions',
  url: 'https://collabedgesolutions.com.au/about',
  description:
    'CollabEdge Solutions is a Melbourne-based operational consulting and digital transformation firm founded by Sinclair Hurtis. We simplify, streamline, automate and help Australian businesses grow.',
  mainEntity: {
    '@type': 'ProfessionalService',
    name: 'CollabEdge Solutions',
    founder: {
      '@type': 'Person',
      name: 'Sinclair Hurtis',
      jobTitle: 'Founder and Principal Consultant',
      alumniOf: ['Citibank', 'Singtel', 'NAB', 'Victorian Department of Health'],
    },
    areaServed: 'AU',
    url: 'https://collabedgesolutions.com.au',
  },
}

const services = [
  { icon: Shield, label: 'NDIS Compliance and Audit' },
  { icon: Zap, label: 'Workflow Automation' },
  { icon: BookOpen, label: 'Document Governance' },
  { icon: Globe, label: 'Digital Services' },
  { icon: TrendingUp, label: 'AI Advisory' },
  { icon: Building2, label: 'Enterprise Partner Solutions' },
]

const checklist = [
  'Every engagement is senior-led, with no hand-offs',
  'We start with what you already have',
  'Practitioner-tested before it reaches you',
  'Transparent pricing, published on our site',
  'Honest recommendations backed by cost benefit analysis, not sales pitches',
  'Active NDIS coordinator, not just a consultant',
  'Fortune 500 methods applied to SME budgets',
  'Melbourne-based, Australia-wide delivery',
  'Victorian Government registered supplier',
]

const team = [
  {
    name: 'Sinclair Hurtis',
    role: 'Founder and Principal',
    bio: '30+ years Fortune 500. Active NDIS coordinator. Leads every engagement.',
    icon: Award,
    href: '/about/sinclair-hurtis',
  },
  {
    name: 'Magdalena Paczkowska',
    role: 'NDIS Strategic Advisor',
    bio: 'Support Coordinator at My Ability Services. Deep NDIS operations expertise.',
    icon: Stethoscope,
    href: '/about/team',
  },
  {
    name: 'Raj Purshotham',
    role: 'Strategy and Growth',
    bio: 'CMO at Property Automate. Go-to-market and growth strategy advisor.',
    icon: TrendingUp,
    href: '/about/team',
  },
  {
    name: 'Extended Network',
    role: 'Specialist Capability',
    bio: 'Vetted specialists drawn in for engagements needing additional depth.',
    icon: Users,
    href: '/about/team',
  },
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* 2. Hero */}
      <PageHero
        eyebrow="About Us"
        h1="Built by a practitioner. Tested in the field."
        answerBlock="CollabEdge Solutions is a Melbourne-based operational consulting and digital transformation firm. We work with NDIS providers, healthcare operators, and Australian enterprises to simplify operations, automate workflows, and implement technology that actually fits."
      />

      {/* 3. AEO — Who is CollabEdge Solutions? */}
      <section className="bg-white py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              Who is CollabEdge Solutions?
            </h2>
            <p className="text-[16px] text-slate leading-relaxed mb-8 max-w-[680px]">
              CollabEdge Solutions is an Australian-based operational consulting and technology firm founded by Sinclair Hurtis, operating across two complementary missions.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <FadeIn variant="fadeUp">
              <div className="border-l-2 border-gold pl-6 h-full">
                <span className="font-serif text-[40px] leading-none text-gold/40 block mb-3">01</span>
                <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-slate block mb-2">
                  Healthcare &amp; NDIS
                </span>
                <p className="text-[16px] text-slate leading-relaxed">
                  We support NDIS providers and healthcare organisations with compliance, AI-powered workflow automation, and practical advisory.
                </p>
              </div>
            </FadeIn>
            <FadeIn variant="fadeUp" delay={120}>
              <div className="border-l-2 border-gold pl-6 h-full">
                <span className="font-serif text-[40px] leading-none text-gold/40 block mb-3">02</span>
                <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-slate block mb-2">
                  Enterprise Transformation
                </span>
                <p className="text-[16px] text-slate leading-relaxed">
                  We deliver enterprise transformation for larger organisations, from data platform strategy and migration leadership to specialised implementations through a curated network of technology partners across Australia and Asia Pacific.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn variant="fadeUp" delay={200}>
            <p className="text-[16px] font-medium text-text-dark leading-relaxed mb-6 max-w-[680px]">
              Every engagement is senior-led, practitioner-tested, and built around what is right for your organisation.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-border mt-8">
            {[
              {
                icon: Users,
                title: 'Practitioner-Led',
                body: 'Sinclair actively coordinates NDIS participants through My Ability Services, testing every solution in a live environment before recommending it to clients.',
              },
              {
                icon: Zap,
                title: 'We Start With What You Have',
                body: "Most clients already have Microsoft 365 or Google Workspace. We show them how to unlock compliance, automation, and AI capability from tools they are already paying for, including AI agents that take repetitive work off your team's plate.",
              },
              {
                icon: TrendingUp,
                title: 'Fortune 500 Depth, Applied at Any Scale',
                body: '30+ years across Citibank Singapore, Singtel, NAB, and the Victorian Department of Health, delivered from within global System Integrators and end client environments alike. That dual perspective, business and IT, functional and technical, is applied to the specific challenges of Australian healthcare providers and growing businesses across Asia Pacific.',
              },
            ].map((card, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 100}>
                <div className="bg-white p-6 h-full group hover:-translate-y-[2px] hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <card.icon size={20} className="text-gold" />
                  </div>
                  <h3 className="text-[18px] font-bold text-text-dark mb-2">{card.title}</h3>
                  <p className="text-[14px] text-slate leading-relaxed">{card.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AEO — What does CollabEdge Solutions do? */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeIn variant="slideRight">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-4 leading-snug">
              Our Services
            </h2>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed mb-6">
              CollabEdge Solutions delivers operational consulting, NDIS compliance support, workflow automation, AI advisory, digital services, and enterprise technology implementation. We serve NDIS providers, allied health operators, and Australian enterprises across two service pillars: healthcare and SME solutions, and enterprise technology partnerships.
            </p>
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-brand-goldDark font-semibold text-[14px] hover:gap-3 transition-all duration-200"
            >
              View all services <ArrowRight size={14} />
            </a>
          </FadeIn>

          <FadeIn variant="fadeUp" delay={150}>
            <div className="flex flex-col gap-3">
              {services.map((item, i) => (
                <FadeIn key={i} variant="fadeUp" delay={i * 60}>
                  <div className="flex items-center gap-3 py-3 border-b border-white/[0.08] hover:border-gold/30 transition-colors group">
                    <div className="w-8 h-8 rounded bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <item.icon size={14} className="text-gold" />
                    </div>
                    <span className="text-[14px] font-medium text-[#F1F5F9] group-hover:text-white transition-colors">
                      {item.label}
                    </span>
                    <ArrowRight size={12} className="text-gold/40 ml-auto group-hover:text-gold group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. Stats Strip */}
      <section className="bg-gold py-10 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter value="30+" label="Years experience" dark={false} />
          <AnimatedCounter value="100%" label="Senior-led" dark={false} />
          <AnimatedCounter value="2" label="Service pillars" dark={false} />
          <AnimatedCounter value="Active" label="NDIS practitioner" dark={false} />
        </div>
      </section>

      {/* 6. AEO — Why choose CollabEdge Solutions? */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="slideRight">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              Boutique Accountability, Fortune 500 Depth
            </h2>
            <p className="text-[16px] text-slate leading-relaxed mb-8 max-w-[680px]">
              CollabEdge Solutions combines Fortune 500 experience with boutique accountability. Every engagement is led by the same senior practitioner who assessed your situation, with no hand-offs to junior staff. We recommend what simplifies your operation, not what pays us the most.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {checklist.map((item, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 60}>
                <div className="flex items-start gap-3 bg-white rounded-lg p-4 border border-border hover:border-gold/30 hover:shadow-sm transition-all duration-200">
                  <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-[14px] text-text-body leading-relaxed">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6b. Recommendations Grounded in Cost and Fit */}
      <section className="bg-white py-16 px-5 sm:px-10 border-t border-border">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              Recommendations Grounded in Cost and Fit
            </h2>
            <p className="text-[16px] text-slate leading-relaxed mb-4 max-w-[680px]">
              Many of our clients already run third-party applications such as ShiftCare, their own CRM, or established practice management systems. Our job is not to replace what works. It is to reduce cost and lift capability across what you already have.
            </p>
            <p className="text-[16px] text-slate leading-relaxed mb-4 max-w-[680px]">
              After understanding your challenges, we assess all options: your existing platforms, custom-built solutions using your current infrastructure, or third-party providers where they genuinely fit. When a third-party provider makes sense, we recommend it with a full cost benefit analysis and a roadmap strategy, so you can see exactly what the change delivers before you commit.
            </p>
            <p className="text-[16px] text-slate leading-relaxed max-w-[680px]">
              Our advice is based solely on what is right for your specific situation, not on reseller margins or sales quotas. You get honest, unbiased guidance focused on your outcomes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 7. Team Preview Strip */}
      <section className="bg-white py-16 px-5 sm:px-10 border-t border-border">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-slate mb-2 block">
              Our Team
            </span>
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-2 leading-snug">
              The Team Behind Every Engagement
            </h2>
            <p className="text-[14px] text-slate mb-8 max-w-[540px]">
              CollabEdge Solutions is senior-led and supported by a small team of specialists and strategic advisors, not a large agency where you never know who you will work with.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {team.map((member, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 100}>
                <a
                  href={member.href}
                  className="block border border-border rounded-lg p-5 hover:border-gold/40 hover:shadow-md hover:-translate-y-[2px] transition-all duration-200 group h-full"
                >
                  <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center mb-3 group-hover:bg-gold/20 transition-colors">
                    <member.icon size={16} className="text-gold" />
                  </div>
                  <h3 className="text-[18px] font-bold text-text-dark mb-1">{member.name}</h3>
                  <span className="text-[13px] font-semibold text-brand-goldLight uppercase tracking-wider block mb-3">
                    {member.role}
                  </span>
                  <p className="text-[13px] text-slate leading-relaxed">{member.bio}</p>
                </a>
              </FadeIn>
            ))}
          </div>

          <FadeIn variant="fadeUp" delay={400}>
            <div className="mt-8 text-center">
              <a
                href="/about/team"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-navy hover:text-brand-goldLight transition-colors"
              >
                Meet the full team <ArrowRight size={14} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. Dual Mission */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/60 mb-2 block">
              Our Dual Mission
            </span>
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-10 leading-snug">
              Our Dual Mission
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn variant="slideRight">
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-7 hover:border-gold/30 transition-colors h-full">
                <div className="w-10 h-10 rounded-lg bg-gold/[0.15] flex items-center justify-center mb-5">
                  <Stethoscope size={20} className="text-gold" />
                </div>
                <span className="text-[13px] font-bold tracking-[.14em] uppercase text-brand-goldDark/60 mb-3 block">
                  Give Back
                </span>
                <h3 className="text-[18px] font-bold text-white mb-3 leading-snug">
                  Healthcare and NDIS Solutions
                </h3>
                <p className="text-[14px] text-[#D1D5DB] leading-relaxed mb-5">
                  Supporting NDIS providers and healthcare operators with compliance, workflow automation, document governance, and AI-powered tools, built on the systems they already have.
                </p>
                <a
                  href="/services/ndis-compliance-audit"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-goldDark hover:gap-3 transition-all duration-200"
                >
                  NDIS services <ArrowRight size={12} />
                </a>
              </div>
            </FadeIn>

            <FadeIn variant="fadeUp" delay={150}>
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-7 hover:border-gold/30 transition-colors h-full">
                <div className="w-10 h-10 rounded-lg bg-gold/[0.15] flex items-center justify-center mb-5">
                  <Building2 size={20} className="text-gold" />
                </div>
                <span className="text-[13px] font-bold tracking-[.14em] uppercase text-brand-goldDark/60 mb-3 block">
                  Transform Forward
                </span>
                <h3 className="text-[18px] font-bold text-white mb-3 leading-snug">
                  Enterprise Partnerships
                </h3>
                <p className="text-[14px] text-[#D1D5DB] leading-relaxed mb-5">
                  Delivering specialist enterprise technology through selected partnerships, including SHIELD voice fraud prevention, Dynamic Netsoft for Microsoft Dynamics 365 property solutions, Property Automate for property operations technology, and Newgen Consulting for the Zoho ecosystem, with advisory and implementation included across Australia and Asia Pacific.
                </p>
                <a
                  href="/services/partner-solutions"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-goldDark hover:gap-3 transition-all duration-200"
                >
                  Partner solutions <ArrowRight size={12} />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 9. Case Studies Teaser */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-slate mb-2 block">
              Proof
            </span>
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              Documented Client Outcomes
            </h2>
            <p className="text-[16px] text-slate leading-relaxed mb-8 max-w-[580px]">
              We document real client outcomes with named organisations, specific results, and honest accounts of what was delivered. No anonymous case studies or vague claims.
            </p>
          </FadeIn>

          <FadeIn variant="fadeUp" delay={100}>
            <div className="bg-navy rounded-xl p-8 border border-gold/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold/[0.05] rounded-full -translate-y-20 translate-x-20 pointer-events-none" />
              <span className="text-[13px] font-bold tracking-[.14em] uppercase text-brand-goldDark/60 mb-4 block">
                Case Study: NDIS Provider
              </span>
              <blockquote className="font-serif italic text-[17px] text-white leading-relaxed mb-6 max-w-[620px]">
                &ldquo;Transformed what once felt overwhelming into something{' '}
                <em className="text-brand-goldDark not-italic font-medium">clear, structured, and exciting.</em>{' '}
                He did not just implement. He guided us with mentorship that made all the difference.&rdquo;
              </blockquote>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <Award size={16} className="text-gold" />
                </div>
                <div>
                  <span className="text-[14px] font-semibold text-white block">Rebecca Delaney</span>
                  <span className="text-[13px] text-brand-goldDark block mt-0.5">
                    Director, Enhance Ability Services · Geelong VIC
                  </span>
                </div>
                <a
                  href="/case-studies"
                  className="sm:ml-auto inline-flex items-center gap-2 text-[14px] font-semibold text-brand-goldDark hover:gap-3 transition-all duration-200"
                >
                  Read case studies <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 10. CTA Band */}
      <CTASection
        heading="Ready to talk about your situation?"
        sub="30 minutes. Free. Senior-led. No pitch."
        ctaLabel="Book a Free Consultation"
        ctaHref="/appt"
      />
    </>
  )
}
