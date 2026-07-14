import type { Metadata } from 'next'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'
import CTASection from '@/components/ui/CTASection'
import VideoEmbed from '@/components/VideoEmbed'

export const metadata: Metadata = {
  title: 'Video Walkthroughs | CollabEdge Solutions',
  description:
    'Real walkthroughs of the tools we use. MedPrivacy in action, and how NotebookLM builds NDIS Change of Circumstances reports.',
  openGraph: {
    title: 'Video Walkthroughs | CollabEdge Solutions',
    description:
      'Real walkthroughs of the tools we use, recorded from real practice.',
    url: 'https://collabedgesolutions.com.au/resources/videos',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'website',
  },
}

export default function VideoWalkthroughsPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-navy py-16 sm:py-20 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="w-9 h-[2px] bg-gold mb-4" />
            <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/80 mb-3 block">
              Video Walkthroughs
            </span>
            <h1 className="text-[34px] md:text-[44px] font-bold text-white tracking-tight leading-[1.15] mb-5 max-w-[680px]">
              See the Tools in Action
            </h1>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-[620px]">
              Short, practical walkthroughs recorded from real practice. No polish, just the tools actually working.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Video grid */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-10 leading-snug">
              Video Walkthroughs
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn variant="fadeUp" delay={0}>
              <div id="medprivacy-demo" className="scroll-mt-24">
                <VideoEmbed
                  videoId="4egH7q4hG5I"
                  title="MedPrivacy Demo: Safe AI for NDIS and Allied Health Documentation"
                  duration="4:37"
                />
                <p className="text-[14px] text-slate leading-relaxed mt-4">
                  A walkthrough of MedPrivacy de-identifying participant and client documents before they go anywhere near an AI tool, keeping NDIS and allied health documentation safe and compliant.
                </p>
              </div>
            </FadeIn>
            <FadeIn variant="fadeUp" delay={100}>
              <div>
                <VideoEmbed
                  videoId="hRzXPFPidkk"
                  title="How to Use NotebookLM for NDIS Change of Circumstances Reports"
                  duration="7:54"
                />
                <p className="text-[14px] text-slate leading-relaxed mt-4">
                  A walkthrough of building a Change of Circumstances report using NotebookLM, showing how the process comes together from source documents to a finished submission.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. Cross-link to AI Advisory */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto text-center">
          <FadeIn variant="fadeUp">
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-4 leading-snug">
              Want This Set Up for Your Practice?
            </h2>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed mb-8 max-w-[520px] mx-auto">
              These are the same tools and workflows we set up for clients as part of AI Advisory.
            </p>
            <a href="/services/ai-advisory" className="btn-gold">Explore AI Advisory</a>
          </FadeIn>
        </div>
      </section>

      {/* 4. Final CTA */}
      <CTASection
        heading="See It Working for You"
        sub="A free 30 minute walkthrough using your own documents and workflow."
        ctaLabel="Book a Free Consultation"
        ctaHref="/appt"
      />
    </>
  )
}
