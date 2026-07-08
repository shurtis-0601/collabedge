import type { Metadata } from 'next'
import {
  Shield, Users, TrendingUp, Cpu, ArrowRight, ExternalLink, PlayCircle
} from 'lucide-react'
import CTASection from '@/components/ui/CTASection'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'

export const metadata: Metadata = {
  title: 'Products | CollabEdge Solutions',
  description:
    'Practical tools built by an active NDIS practitioner. De-identification, staff compliance automation, and funding tracking, built for real caseloads.',
  openGraph: {
    title: 'Products | CollabEdge Solutions',
    description:
      'Practical tools built and used in active NDIS practice before being offered to anyone else.',
    url: 'https://collabedgesolutions.com.au/products',
  },
}

type Product = {
  icon: typeof Shield
  title: string
  status: 'Available Now' | 'In Development'
  desc: string
  ctaLabel: string
  href: string
  external?: boolean
  demoHref?: string
}

const products: Product[] = [
  {
    icon: Shield,
    title: 'MedPrivacy',
    status: 'Available Now',
    desc: 'De-identify participant and client data before it goes anywhere near an AI tool. Built for NDIS and healthcare providers who want to use AI safely and stay compliant with the Privacy Act.',
    ctaLabel: 'Visit MedPrivacy',
    href: 'https://medprivacy.com.au',
    external: true,
    demoHref: '/resources/videos#medprivacy-demo',
  },
  {
    icon: Users,
    title: 'Employee Onboarding Automation',
    status: 'Available Now',
    desc: 'Automated filing and expiry tracking for staff compliance documents, police checks, Working With Children Checks, first aid certificates, and NDIS worker screening checks.',
    ctaLabel: 'See How It Works',
    href: '/products/employee-onboarding-automation',
  },
  {
    icon: TrendingUp,
    title: 'NDIS Funding and Burn Rate Tracker',
    status: 'Available Now',
    desc: 'Track spend against budget for every participant in your caseload, with automatic status alerts. Fully local. No participant data ever leaves your device.',
    ctaLabel: 'See How It Works',
    href: '/products/funding-burn-rate-tracker',
  },
  {
    icon: Cpu,
    title: 'NDIS CRM',
    status: 'In Development',
    desc: 'An AI-powered CRM purpose-built for NDIS providers, replacing legacy case management software with a modern, Microsoft 365 native platform.',
    ctaLabel: 'Register Interest',
    href: '/appt',
  },
]

export default function ProductsPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-navy py-16 sm:py-20 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="w-9 h-[2px] bg-gold mb-4" />
            <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/60 mb-3 block">
              Products
            </span>
            <h1 className="text-[34px] md:text-[44px] font-bold text-white tracking-tight leading-[1.15] mb-5 max-w-[680px]">
              Tools Built From Real Practice
            </h1>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-[620px]">
              Every product here exists because a real NDIS workflow needed it. Built and used in active practice before being offered to anyone else.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Managed Services banner, eucalyptus */}
      <section className="py-12 px-5 sm:px-10" style={{ backgroundColor: '#3C6E5E' }}>
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center">
            <FadeIn variant="slideRight">
              <h2 className="text-[26px] font-bold text-white mb-3 leading-snug">
                Included With Managed Services
              </h2>
              <p className="text-[16px] text-white leading-relaxed max-w-[620px]">
                CollabEdge Managed Services clients get every product on this page included as part of their engagement, including a MedPrivacy licence. No separate subscriptions to manage.
              </p>
            </FadeIn>
            <FadeIn variant="fadeUp" delay={100}>
              <a
                href="/services#engagement-models"
                className="inline-flex items-center gap-2 bg-white text-[#3C6E5E] text-[14px] font-bold rounded-lg px-6 py-4 hover:bg-white/90 transition-colors whitespace-nowrap"
              >
                Learn About Managed Services
                <ArrowRight size={14} />
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. Product cards */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-10 leading-snug">
              Our Products
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 80}>
                <div className="bg-white rounded-xl p-7 border border-border h-full flex flex-col hover:border-gold/30 hover:shadow-md hover:-translate-y-[2px] transition-all duration-200">
                  <div className="flex items-start justify-between mb-4 gap-4">
                    <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <product.icon size={20} className="text-gold" />
                    </div>
                    {product.status === 'Available Now' ? (
                      <span className="text-[13px] font-semibold text-brand-goldLight bg-gold/10 border border-gold/30 rounded-full px-3 py-1 whitespace-nowrap">
                        Available Now
                      </span>
                    ) : (
                      <span className="text-[13px] font-semibold text-slate border border-border rounded-full px-3 py-1 whitespace-nowrap">
                        In Development
                      </span>
                    )}
                  </div>
                  <h3 className="text-[18px] font-bold text-text-dark mb-3">{product.title}</h3>
                  <p className="text-[14px] text-slate leading-relaxed mb-6 flex-1">{product.desc}</p>
                  <div className="mt-auto flex flex-col gap-3">
                    {product.external ? (
                      <a
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-goldLight hover:gap-3 transition-all duration-200"
                      >
                        {product.ctaLabel} <ExternalLink size={13} />
                      </a>
                    ) : (
                      <a
                        href={product.href}
                        className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-goldLight hover:gap-3 transition-all duration-200"
                      >
                        {product.ctaLabel} <ArrowRight size={13} />
                      </a>
                    )}
                    {product.demoHref && (
                      <a
                        href={product.demoHref}
                        className="inline-flex items-center gap-2 text-[13px] font-semibold text-slate hover:text-brand-goldLight transition-colors"
                      >
                        <PlayCircle size={14} /> Watch Demo
                      </a>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <CTASection
        heading="Want to See a Product in Action?"
        sub="A free 30 minute walkthrough of any product on this page, no obligation."
        ctaLabel="Book a Free Consultation"
        ctaHref="/appt"
      />
    </>
  )
}