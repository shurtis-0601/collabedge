import type { Metadata } from 'next'
import {
  Stethoscope, Users, ArrowRight, CheckCircle,
  Globe, GraduationCap
} from 'lucide-react'
import PageHero from '@/components/corporate/PageHero'
import CTASection from '@/components/ui/CTASection'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'

export const metadata: Metadata = {
  title: 'Our Team | CollabEdge Solutions Melbourne',
  description:
    'Meet the CollabEdge Solutions team — senior consultants, NDIS specialists, and strategic advisors delivering practitioner-led consulting across Australia.',
  openGraph: {
    title: 'Our Team | CollabEdge Solutions',
    description:
      'Senior-led. Practitioner-tested. Meet the people behind every CollabEdge engagement.',
    url: 'https://collabedgesolutions.com.au/about/team',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Our Team — CollabEdge Solutions',
  url: 'https://collabedgesolutions.com.au/about/team',
  description:
    'The CollabEdge Solutions team includes founder Sinclair Hurtis, NDIS advisor Magdalena Paczkowska, and strategy advisor Raj Purshotham.',
  mainEntity: {
    '@type': 'Organization',
    name: 'CollabEdge Solutions',
    member: [
      {
        '@type': 'OrganizationRole',
        member: {
          '@type': 'Person',
          name: 'Sinclair Hurtis',
          jobTitle: 'Founder and Principal Consultant',
          url: 'https://collabedgesolutions.com.au/about/sinclair-hurtis',
        },
        roleName: 'Founder and Principal Consultant',
      },
      {
        '@type': 'OrganizationRole',
        member: {
          '@type': 'Person',
          name: 'Magdalena Paczkowska',
          jobTitle: 'NDIS Practitioner and Strategic Advisor',
        },
        roleName: 'NDIS Practitioner and Strategic Advisor',
      },
      {
        '@type': 'OrganizationRole',
        member: {
          '@type': 'Person',
          name: 'Raj Purshotham',
          jobTitle: 'Strategy, Growth and International Advisory',
        },
        roleName: 'Strategy, Growth and International Advisory',
      },
    ],
  },
}

const sinclairSkills = [
  'NDIS Compliance and Audit',
  'Workflow Automation and AI',
  'Enterprise Technology',
  'Data Analytics',
]

const magdalenaSkills = [
  'Complex Participant Support',
  'NDIS Commission Navigation',
  'Support Coordination',
  'Practitioner Advocacy',
]

const rajSkills = [
  'Go-to-Market Strategy',
  'Commercial Growth',
  'Enterprise Partnerships',
  'International Network',
]

const networkCards = [
  {
    icon: Globe,
    heading: 'Technology Specialists',
    body: 'Developers, data engineers and cloud architects engaged for implementation work requiring dedicated technical resource.',
  },
  {
    icon: Stethoscope,
    heading: 'Healthcare Practitioners',
    body: 'Allied health and NDIS specialists engaged for complex compliance and clinical governance engagements.',
  },
  {
    icon: Users,
    heading: 'Monash University Network',
    body: 'Masters IT students supervised by Sinclair in his Adjunct Lecturer role, contributing to analytics and research projects under direct oversight.',
  },
]

function SkillList({ skills }: { skills: string[] }) {
  return (
    <div className="flex flex-col gap-2 mb-6">
      {skills.map((skill, i) => (
        <div key={i} className="flex items-center gap-2">
          <CheckCircle size={12} className="text-gold/60 flex-shrink-0" />
          <span className="text-[13px] text-[#D1D5DB]">{skill}</span>
        </div>
      ))}
    </div>
  )
}

export default function TeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* 2. Hero */}
      <PageHero
        eyebrow="Our Team"
        h1="Senior-led. Every engagement."
        answerBlock="CollabEdge Solutions is built around a small team of senior practitioners and strategic advisors. Every client engagement is led by the same person who assessed your situation, Sinclair Hurtis, supported by specialists drawn in when the work requires it."
      />

      {/* 3. AEO — Who leads CollabEdge engagements? */}
      <section className="bg-white py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              Who leads every CollabEdge Solutions engagement?
            </h2>
            <p className="text-[16px] text-slate leading-relaxed mb-4 max-w-[680px]">
              Every CollabEdge Solutions engagement is led by Sinclair Hurtis, founder and principal consultant. There are no hand-offs to junior staff. Sinclair is supported by a small team of strategic advisors and a vetted specialist network drawn in based on the specific requirements of each engagement.
            </p>
            <p className="text-[16px] text-slate leading-relaxed max-w-[680px]">
              This model gives clients Fortune 500 depth and accountability without the overhead of a large consulting firm.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 4. Core Team Cards */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/60 mb-2 block">
              Core Team
            </span>
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-10 leading-snug">
              Who are the people behind CollabEdge Solutions?
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sinclair */}
            <FadeIn variant="fadeUp" delay={0}>
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-7 hover:border-gold/40 hover:shadow-lg hover:-translate-y-[3px] transition-all duration-200 h-full flex flex-col group">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gold/30 mb-5 flex-shrink-0 group-hover:border-gold/60 transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/team-sinclair.jpg" alt="Sinclair Hurtis" className="w-full h-full object-cover" />
                </div>
                <span className="text-[13px] font-bold tracking-[.14em] uppercase text-brand-goldDark/60 mb-1 block">
                  Founder and Principal
                </span>
                <h3 className="text-[18px] font-bold text-white mb-1 leading-snug">Sinclair Hurtis</h3>
                <p className="text-[14px] text-brand-goldDark mb-4">NDIS, Healthcare and Enterprise</p>
                <p className="text-[14px] text-[#D1D5DB] leading-relaxed mb-6 flex-1">
                  30+ years across Citibank, Singtel, NAB, and the Victorian Department of Health. Active NDIS Support Coordinator at My Ability Services. Adjunct Lecturer at Monash University teaching Masters IT students. Leads every CollabEdge engagement.
                </p>
                <SkillList skills={sinclairSkills} />
                <a
                  href="/about/sinclair-hurtis"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-goldDark hover:gap-3 transition-all duration-200 mt-auto"
                >
                  Full bio <ArrowRight size={12} />
                </a>
              </div>
            </FadeIn>

            {/* Magdalena */}
            <FadeIn variant="fadeUp" delay={100}>
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-7 hover:border-gold/40 hover:shadow-lg hover:-translate-y-[3px] transition-all duration-200 h-full flex flex-col group">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gold/30 mb-5 flex-shrink-0 group-hover:border-gold/60 transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/team-magda.jpg" alt="Magdalena Paczkowska" className="w-full h-full object-cover" />
                </div>
                <span className="text-[13px] font-bold tracking-[.14em] uppercase text-brand-goldDark/60 mb-1 block">
                  NDIS Practitioner and Strategic Advisor
                </span>
                <h3 className="text-[18px] font-bold text-white mb-1 leading-snug">Magdalena Paczkowska</h3>
                <p className="text-[14px] text-brand-goldDark mb-4">Complex Participant Support and Advocacy</p>
                <p className="text-[14px] text-[#D1D5DB] leading-relaxed mb-6 flex-1">
                  Magdalena works directly with complex NDIS participants at My Ability Services every day, navigating the system at its most demanding level. That frontline knowledge is what she brings to CollabEdge, grounding every recommendation in what actually works for real participants and providers. She is the practitioner who empowered Sinclair to become a Support Coordinator, and her daily contact with the NDIS Commission and complex participants keeps CollabEdge&apos;s advice connected to ground-level reality.
                </p>
                <SkillList skills={magdalenaSkills} />
                <a
                  href="/about/magdalena-paczkowska"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-goldDark hover:gap-3 transition-all duration-200 mt-auto"
                >
                  Full bio <ArrowRight size={12} />
                </a>
              </div>
            </FadeIn>

            {/* Raj */}
            <FadeIn variant="fadeUp" delay={200}>
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-7 hover:border-gold/40 hover:shadow-lg hover:-translate-y-[3px] transition-all duration-200 h-full flex flex-col group">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gold/30 mb-5 flex-shrink-0 group-hover:border-gold/60 transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/team-raj.jpg" alt="Raj Purshotham" className="w-full h-full object-cover" />
                </div>
                <span className="text-[13px] font-bold tracking-[.14em] uppercase text-brand-goldDark/60 mb-1 block">
                  Strategy, Growth and International Advisory
                </span>
                <h3 className="text-[18px] font-bold text-white mb-1 leading-snug">Raj Purshotham</h3>
                <p className="text-[14px] text-brand-goldDark mb-4">Strategy, Growth and International</p>
                <p className="text-[14px] text-[#D1D5DB] leading-relaxed mb-6 flex-1">
                  Fractional Consultant and Growth Advisor to CollabEdge Solutions. Raj brings go-to-market strategy, commercial growth, and enterprise partnership expertise, with a strong personal network across international markets that complements CollabEdge&apos;s Australian and Asia Pacific focus.
                </p>
                <SkillList skills={rajSkills} />
                <a
                  href="/about/raj-purshotham"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-goldDark hover:gap-3 transition-all duration-200 mt-auto"
                >
                  Full bio <ArrowRight size={12} />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. Extended Network */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              Does CollabEdge Solutions use contractors or subcontractors?
            </h2>
            <p className="text-[16px] text-slate leading-relaxed mb-8 max-w-[680px]">
              For engagements requiring specialist capability beyond the core team, CollabEdge Solutions draws on a vetted network of contractors and specialists. Every specialist brought into a client engagement is personally approved by Sinclair and operates under the same standards and confidentiality obligations as the core team.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {networkCards.map((card, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 100}>
                <div className="bg-white rounded-xl p-6 border border-border h-full hover:border-gold/30 hover:shadow-sm hover:-translate-y-[2px] transition-all duration-200 group">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <card.icon size={16} className="text-gold" />
                  </div>
                  <h3 className="text-[18px] font-bold text-text-dark mb-2">{card.heading}</h3>
                  <p className="text-[14px] text-slate leading-relaxed">{card.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Monash Teaching Strip */}
      <section className="bg-white py-12 px-5 sm:px-10 border-t border-border">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="slideRight">
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={22} className="text-gold" />
              </div>
              <div className="flex-1">
                <h3 className="text-[18px] font-bold text-text-dark mb-1">
                  Adjunct Lecturer, Monash University
                </h3>
                <p className="text-[14px] text-slate leading-relaxed max-w-[580px]">
                  Sinclair teaches soft skills and real-world business practice to Masters of Information Technology students at Monash University, mentoring the next generation of technology professionals across communication, collaboration, and applied consulting.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-[13px] font-semibold text-brand-goldLight uppercase tracking-wider">
                  Monash University · Melbourne
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. CTA Band */}
      <CTASection
        heading="Work with a team that stays accountable."
        sub="Senior-led from first conversation to final delivery."
        ctaLabel="Book a Free Consultation"
        ctaHref="/appt"
      />
    </>
  )
}
