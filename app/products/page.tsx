import type { Metadata } from 'next'
import {
  Shield, Users, TrendingUp, Cpu, ArrowRight
} from 'lucide-react'
import CTASection from '@/components/ui/CTASection'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'
import ProductTabs, { Product } from '@/components/products/ProductTabs'

export const metadata: Metadata = {
  title: 'Products | CollabEdge Solutions',
  description:
    'Practical tools built by an active NDIS practitioner. De-identification, staff compliance automation, and funding tracking, built for real caseloads.',
  openGraph: {
    title: 'Products | CollabEdge Solutions',
    description:
      'Practical tools built and used in active NDIS practice before being offered to anyone else.',
    url: 'https://collabedgesolutions.com.au/products',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'website',
  },
}

const products: Product[] = [
  {
    slug: 'medprivacy',
    icon: <Shield size={20} className="text-gold" />,
    title: 'MedPrivacy',
    status: 'Available Now',
    desc: 'De-identify participant and client data before it goes anywhere near an AI tool. Built for NDIS and healthcare providers who want to use AI safely and stay compliant with the Privacy Act.',
    ctaLabel: 'Visit MedPrivacy',
    href: 'https://medprivacy.com.au',
    external: true,
    demoHref: '/resources/videos#medprivacy-demo',
  },
  {
    slug: 'employee-onboarding-automation',
    icon: <Users size={20} className="text-gold" />,
    title: 'Employee Onboarding Automation',
    status: 'Available Now',
    desc: 'Automated filing and expiry tracking for staff compliance documents, police checks, Working With Children Checks, first aid certificates, and NDIS worker screening checks.',
    ctaLabel: 'See How It Works',
    href: '/products/employee-onboarding-automation',
  },
  {
    slug: 'funding-burn-rate-tracker',
    icon: <TrendingUp size={20} className="text-gold" />,
    title: 'NDIS Funding and Burn Rate Tracker',
    status: 'Available Now',
    desc: 'Forecasts total committed spend against remaining budget for every participant, rate multiplied by sessions remaining added to spend to date, catching a shortfall while there is still time to act. Fully local. No participant data ever leaves your device.',
    ctaLabel: 'See How It Works',
    href: '/products/funding-burn-rate-tracker',
  },
  {
    slug: 'ndis-crm',
    icon: <Cpu size={20} className="text-gold" />,
    title: 'NDIS CRM',
    status: 'In Development',
    desc: 'An AI-powered CRM purpose-built for NDIS providers, replacing legacy case management software with a modern, Microsoft 365 native platform.',
    statusNote: 'More details coming soon.',
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
            <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/80 mb-3 block">
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
      <section className="bg-navy py-12 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center">
            <FadeIn variant="slideRight">
              <h2 className="text-[26px] font-bold text-white mb-3 leading-snug">
                Included With Managed Services
              </h2>
              <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-[620px]">
                CollabEdge Managed Services clients get every product on this page included as part of their engagement, including a MedPrivacy licence. No separate subscriptions to manage.
              </p>
            </FadeIn>
            <FadeIn variant="fadeUp" delay={100}>
              <a
                href="/services#engagement-models"
                className="inline-flex items-center gap-2 bg-gold text-navy text-[14px] font-bold rounded-lg px-6 py-4 hover:bg-brand-goldDark transition-colors whitespace-nowrap"
              >
                Learn About Managed Services
                <ArrowRight size={14} />
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. Product tabs */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-10 leading-snug">
              Our Products
            </h2>
          </FadeIn>
          <ProductTabs products={products} />
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