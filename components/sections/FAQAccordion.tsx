'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export type FAQ = { q: string; a: string }

const defaultFaqs: FAQ[] = [
  {
    q: 'How long does an NDIS compliance engagement take?',
    a: 'Tier 1 engagements typically take 3-4 weeks. Tier 2 engagements take 6-8 weeks. Tier 3 multi-site engagements are scoped individually based on complexity.',
  },
  {
    q: 'Do I need to change software or platforms?',
    a: 'No. CollabEdge Solutions builds compliance frameworks using the Microsoft 365 or Google Workspace environment you already have. We do not require new platform purchases.',
  },
  {
    q: 'What happens if I am audited during the engagement?',
    a: 'We prioritise the highest-risk documentation first specifically to reduce this risk, and can accelerate timelines if an audit date is already confirmed.',
  },
  {
    q: 'Is pricing negotiable for smaller providers?',
    a: 'Tier 1 pricing already reflects a foundation-level scope for smaller and sole trader providers. Contact us to discuss your specific situation.',
  },
  {
    q: 'Do you work with providers outside Victoria?',
    a: 'Yes. CollabEdge Solutions works with NDIS providers across Australia, with most engagements delivered remotely.',
  },
]

export default function FAQAccordion({ faqs = defaultFaqs }: { faqs?: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-border rounded-lg overflow-hidden bg-white">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-offwhite transition-colors"
          >
            <span className="text-[14px] font-semibold text-text-dark">{faq.q}</span>
            <ChevronDown
              size={16}
              className={`text-brand-goldLight flex-shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
            />
          </button>
          {openIndex === i && (
            <div className="px-5 pb-5">
              <p className="text-[14px] text-slate leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}