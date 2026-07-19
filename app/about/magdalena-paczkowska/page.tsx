import type { Metadata } from 'next'
import {
  ArrowLeft, Heart, Users, Award,
  CheckCircle, Stethoscope, ArrowRight,
  BookOpen, Star
} from 'lucide-react'
import CTASection from '@/components/ui/CTASection'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'

export const metadata: Metadata = {
  title: 'Magdalena Paczkowska, NDIS Practitioner | CollabEdge Solutions',
  description:
    'Magdalena Paczkowska, Senior Support Coordinator and Early Intervention Key Worker, brings 25+ years across early childhood and special education.',
  openGraph: {
    title: 'Magdalena Paczkowska, NDIS Practitioner and Strategic Advisor',
    description:
      'Frontline NDIS practitioner with 25+ years experience across early childhood, special education, social work and physiotherapy.',
    url: 'https://www.collabedgesolutions.com.au/about/magdalena-paczkowska',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'website',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Magdalena Paczkowska',
  jobTitle: 'NDIS Practitioner and Strategic Advisor',
  worksFor: [
    { '@type': 'Organization', name: 'My Ability Services' },
    {
      '@type': 'Organization',
      name: 'CollabEdge Solutions',
      url: 'https://www.collabedgesolutions.com.au',
    },
  ],
  description:
    'Senior Support Coordinator and Early Intervention Key Worker with 25+ years experience across early childhood, special education, social work and physiotherapy.',
  knowsAbout: [
    'NDIS Support Coordination',
    'Early Childhood Intervention',
    'Special Education',
    'Social Work',
    'Complex Participant Support',
    'Capacity Building',
    'Disability Support',
  ],
}

const philosophyCards = [
  {
    icon: Heart,
    title: 'Participant-Centred',
    body: 'Keenly understands the requirements of individuals with additional needs, their families and carers, supporting them to improve community engagement and lifelong wellbeing.',
  },
  {
    icon: Users,
    title: 'Complex Needs Specialist',
    body: 'Extensive experience working with people with complex needs, empowering them to make their own choices and gain higher levels of independence across as many areas of life as possible.',
  },
  {
    icon: Star,
    title: 'Capacity Building',
    body: 'Demonstrates a contemporary approach to capacity-building, inclusion, personal growth and living skills for people with a disability.',
  },
]

const qualifications = [
  {
    discipline: 'Early Childhood',
    detail: 'Foundation in early childhood development and intervention',
    icon: Heart,
  },
  {
    discipline: 'Special Education',
    detail: 'Deep understanding of learning differences and adaptive support strategies',
    icon: BookOpen,
  },
  {
    discipline: 'Social Work',
    detail: 'Human services and community support frameworks',
    icon: Users,
  },
  {
    discipline: 'Physiotherapy',
    detail: 'Physical rehabilitation and functional capacity assessment',
    icon: Stethoscope,
  },
]

const leadershipItems = [
  'Leadership and management of support teams',
  'Training and mentoring of practitioners',
  'Higher-level NDIS coordination responsibilities',
  'Project outcomes and quality management',
  'Strategic advisory to CollabEdge Solutions',
]

const bioStats = [
  { value: '25+', label: 'Years experience' },
  { value: 'Complex', label: 'Participant focus' },
  { value: 'Active', label: 'NDIS practitioner' },
]

export default function MagdalenaPaczkowskaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-navy px-5 sm:px-10 pt-6 pb-2">
        <div className="max-w-[900px] mx-auto">
          <FadeIn variant="fadeIn">
            <div className="flex items-center gap-2 text-[14px] text-[#9CA3AF]">
              <a href="/about" className="hover:text-brand-goldDark transition-colors">
                About
              </a>
              <span>/</span>
              <a href="/about/team" className="hover:text-brand-goldDark transition-colors">
                Our Team
              </a>
              <span>/</span>
              <span className="text-[#D1D5DB]">Magdalena Paczkowska</span>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bio Hero */}
      <section className="bg-navy pt-8 pb-16 px-5 sm:px-10">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 items-start">

            {/* LEFT — Photo */}
            <FadeIn variant="fadeIn">
              <div className="flex flex-col items-center md:items-start gap-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/team-magda.jpg"
                  alt="Magdalena Paczkowska, NDIS Practitioner and Strategic Advisor"
                  className="w-40 sm:w-48 h-auto md:w-full rounded-2xl"
                />
                <div className="flex flex-col gap-2 w-full items-center md:items-start">
                  <a
                    href="/appt"
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#D1D5DB] hover:text-brand-goldDark transition-colors"
                  >
                    <ArrowRight size={13} />
                    Book a consultation
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* RIGHT — Bio content */}
            <FadeIn variant="fadeUp" delay={100}>
              <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/80 mb-3 block">
                NDIS Practitioner and Strategic Advisor
              </span>
              <h1 className="text-[34px] md:text-[40px] font-bold text-white tracking-tight leading-[1.1] mb-5">
                Magdalena Paczkowska
              </h1>
              <p className="text-[15px] text-[#D1D5DB] leading-relaxed mb-5 border-l-2 border-gold pl-5">
                Magdalena has always been passionate about supporting and empowering people.
                With qualifications and experience across early childhood, special education,
                social work and physiotherapy, she brings over 25 years of relevant industry
                experience to every engagement, working directly with individuals who have complex
                needs, their families, and their carers.
              </p>
              <p className="text-[16px] text-[#D1D5DB] leading-relaxed mb-6">
                As a Senior Support Coordinator and Early Intervention Key Worker at My Ability
                Services, Magdalena navigates the NDIS on behalf of real participants daily.
                That frontline experience is what she brings to CollabEdge Solutions as Strategic
                Advisor, grounding every recommendation in operational reality, not theory.
              </p>
              <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                {bioStats.map((stat, i) => (
                  <div key={i}>
                    <span className="text-[22px] font-bold text-brand-goldDark block">{stat.value}</span>
                    <span className="text-[13px] text-[#9CA3AF] uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[900px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              Empowerment through independence
            </h2>
            <p className="text-[16px] text-slate leading-relaxed mb-10 max-w-[680px]">
              Magdalena believes deeply in the right of every person with a disability to make
              their own choices and achieve the highest possible level of independence across every
              area of their life. Her approach to support coordination reflects this philosophy,
              building capacity rather than creating dependency.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {philosophyCards.map((card, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 80}>
                <div className="bg-white rounded-xl p-6 border border-border h-full hover:border-gold/30 hover:shadow-sm transition-all duration-200 group">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
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

      {/* Experience and Qualifications */}
      <section className="bg-white py-16 px-5 sm:px-10">
        <div className="max-w-[900px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              25 years across four disciplines
            </h2>
            <p className="text-[16px] text-slate leading-relaxed mb-10 max-w-[680px]">
              Magdalena brings a breadth of qualifications that is rare in the NDIS sector.
              Her background spans four distinct disciplines, giving her a uniquely comprehensive
              understanding of participant needs and support frameworks.
            </p>
          </FadeIn>
          <div className="flex flex-col gap-4">
            {qualifications.map((item, i) => (
              <FadeIn key={i} variant="slideRight" delay={i * 80}>
                <div className="flex items-start gap-5 bg-offwhite rounded-xl p-6 border border-border hover:border-gold/30 hover:shadow-sm transition-all duration-200">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-text-dark mb-1">
                      {item.discipline}
                    </h3>
                    <p className="text-[14px] text-slate leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            <FadeIn variant="slideRight">
              <GoldRuleAnimated />
              <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/80 mb-2 block">
                Leadership and Management
              </span>
              <h2 className="text-[26px] font-bold text-white tracking-tight mb-4 leading-snug">
                Leadership, mentoring, and management
              </h2>
              <p className="text-[16px] text-[#D1D5DB] leading-relaxed">
                Beyond direct participant support, Magdalena has extensive experience undertaking
                higher-level responsibilities within support organisations. She has demonstrated
                her skills in leadership, training, mentoring, and management of teams, with a
                consistent focus on delivering key project outcomes and maintaining quality
                standards across complex environments.
              </p>
            </FadeIn>

            <FadeIn variant="fadeUp" delay={150}>
              <div className="flex flex-col gap-3 mt-0 md:mt-12">
                {leadershipItems.map((item, i) => (
                  <FadeIn key={i} variant="fadeUp" delay={i * 60}>
                    <div className="flex items-start gap-3 bg-white/[0.04] border border-white/[0.08] rounded-lg p-4">
                      <CheckCircle size={14} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-[14px] text-[#D1D5DB] leading-relaxed">{item}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Work with a practitioner-led team."
        sub="Every CollabEdge NDIS engagement is informed by active frontline practice."
        ctaLabel="Book a Free Consultation"
        ctaHref="/appt"
      />
    </>
  )
}