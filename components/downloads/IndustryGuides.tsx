import fs from 'fs'
import path from 'path'
import { FileText, ArrowRight } from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'
import { industryGuides, FULL_GUIDE_HREF } from '@/lib/industry-guides'
import DeepLinkHighlight from './DeepLinkHighlight'

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold'

function fileSize(publicPath: string): string {
  try {
    const bytes = fs.statSync(path.join(process.cwd(), 'public', publicPath)).size
    if (bytes >= 1_000_000) return `${(bytes / 1_000_000).toFixed(1)} MB`
    return `${Math.round(bytes / 1000)} KB`
  } catch {
    return ''
  }
}

/** Pick your industry row */
export function IndustryPicker() {
  return (
    <section className="bg-offwhite pt-10 px-5 sm:px-10" aria-labelledby="pick-industry">
      <div className="max-w-[1000px] mx-auto">
        <p id="pick-industry" className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldLight mb-4">
          Pick your industry
        </p>
        <nav aria-labelledby="pick-industry">
          <ul className="flex flex-wrap gap-3">
            {industryGuides.map((g) => (
              <li key={g.id}>
                <a
                  href={`#${g.id}`}
                  className={`inline-flex items-center justify-center min-h-[44px] px-5 rounded-lg bg-navy text-white text-[14px] font-semibold hover:bg-navy-mid transition-colors ${focusRing}`}
                >
                  {g.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={FULL_GUIDE_HREF}
                className={`inline-flex items-center justify-center min-h-[44px] px-2 text-[14px] font-semibold text-brand-goldLight underline underline-offset-4 hover:text-navy ${focusRing}`}
              >
                Not sure? Get the full guide
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

/** Featured full guide plus the five industry cards */
export function IndustryGuidesSection() {
  return (
    <section className="bg-offwhite py-12 px-5 sm:px-10">
      <DeepLinkHighlight />
      <div className="max-w-[1000px] mx-auto">
        <FadeIn variant="fadeUp">
          <GoldRuleAnimated />
          <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-6 leading-snug">
            What Is Your Data Telling You?
          </h2>
          <div className="bg-navy rounded-xl p-7 sm:p-8 mb-14 flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-[18px] font-bold text-white mb-3">
                The full guide: 25 questions across five industries
              </h3>
              <p className="text-[16px] text-[#D1D5DB] leading-relaxed">
                Five questions for each of five industries, written in plain English so you can start with the data you already have.
              </p>
            </div>
            <a href={FULL_GUIDE_HREF} className={`btn-gold justify-center ${focusRing}`}>
              Get the full guide
            </a>
          </div>
        </FadeIn>

        <FadeIn variant="fadeUp">
          <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-8 leading-snug">
            By industry
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industryGuides.map((g, i) => {
            const size = fileSize(g.file)
            return (
              <FadeIn key={g.id} variant="fadeUp" delay={i * 80}>
                <div
                  id={g.id}
                  className="scroll-mt-[168px] lg:scroll-mt-[184px] bg-white rounded-xl p-6 border border-border h-full flex flex-col hover:border-gold/30 hover:shadow-md hover:-translate-y-[2px] transition-all duration-200 ring-offset-offwhite"
                >
                  <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <FileText size={20} className="text-gold" aria-hidden="true" />
                  </div>
                  <h3 className="text-[18px] font-bold text-text-dark mb-2">{g.title}</h3>
                  <p className="text-[14px] text-slate leading-relaxed mb-3">{g.audience}</p>
                  <p className="text-[14px] font-semibold text-text-dark mb-1">5 questions to ask your data</p>
                  <p className="text-[14px] text-slate leading-relaxed mb-6 flex-1">
                    PDF, {g.pages} pages{size ? `, ${size}` : ''}
                  </p>
                  <a
                    href={g.file}
                    className={`inline-flex items-center justify-center gap-2 bg-navy text-white text-[14px] font-semibold rounded-lg px-5 min-h-[44px] hover:bg-navy-mid transition-colors mt-auto ${focusRing}`}
                  >
                    Download PDF
                  </a>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/** Final section */
export function MoreOnTheWay() {
  return (
    <section className="bg-offwhite pb-16 px-5 sm:px-10">
      <div className="max-w-[1000px] mx-auto">
        <FadeIn variant="fadeUp">
          <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
            More on the way
          </h2>
          <p className="text-[16px] text-slate leading-relaxed mb-6 max-w-[620px]">
            New checklists and tools will be added over time.
          </p>
          <a
            href="mailto:info@collabedgesolutions.com.au?subject=Resource%20suggestion"
            className={`inline-flex items-center justify-center gap-2 bg-navy text-white text-[14px] font-semibold rounded-lg px-5 min-h-[44px] hover:bg-navy-mid transition-colors ${focusRing}`}
          >
            Suggest a resource for your industry
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
