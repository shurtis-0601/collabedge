import fs from 'fs'
import path from 'path'
import type { Metadata } from 'next'
import FadeIn from '@/components/FadeIn'
import LeadMagnetSection, { LeadMagnetData } from '@/components/sections/LeadMagnetSection'

export const metadata: Metadata = {
  title: 'Downloads | CollabEdge Solutions',
  description:
    'Free practical resources for NDIS providers, built from real practice. AI prompts, funding trackers, participant summaries, and strategic planning templates.',
  openGraph: {
    title: 'Downloads | CollabEdge Solutions',
    description:
      'Free practical templates for NDIS providers, built from real practice.',
    url: 'https://collabedgesolutions.com.au/resources/downloads',
  },
}

function getLeadMagnets(): LeadMagnetData[] {
  const dir = path.join(process.cwd(), 'content', 'lead-magnets')
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json'))
  const magnets = files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), 'utf-8')
    return JSON.parse(raw) as LeadMagnetData
  })
  return magnets.sort((a, b) => a.order - b.order)
}

export default function DownloadsPage() {
  const magnets = getLeadMagnets()

  return (
    <>
      {/* 1. Hero */}
      <section className="bg-navy py-16 sm:py-20 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="w-9 h-[2px] bg-gold mb-4" />
            <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/80 mb-3 block">
              Downloads
            </span>
            <h1 className="text-[34px] md:text-[44px] font-bold text-white tracking-tight leading-[1.15] mb-5 max-w-[680px]">
              Practical Templates, Ready to Use
            </h1>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-[620px]">
              Practical resources built from real NDIS practice. Enter your details and we will send your chosen resource straight to your inbox.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2 and 3. Lead magnet cards and email capture form */}
      <LeadMagnetSection magnets={magnets} />

      {/* 4. Cross-link to AI Hub and Resources */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto text-center">
          <FadeIn variant="fadeUp">
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-4 leading-snug">
              Want More Like This?
            </h2>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed mb-8 max-w-[520px] mx-auto">
              These templates sit alongside our articles and guides on NDIS productivity, compliance, and data.
            </p>
            <a href="/resources" className="btn-gold">Explore Resources</a>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
