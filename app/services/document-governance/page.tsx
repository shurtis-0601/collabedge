import type { Metadata } from 'next'
import {
  FolderOpen, Shield, CheckCircle, ArrowRight,
  FileText, Lock, Archive, AlertTriangle,
  Users, Clock, Search, Cpu
} from 'lucide-react'
import PageHero from '@/components/corporate/PageHero'
import CTASection from '@/components/ui/CTASection'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'
import FAQAccordion, { FAQ } from '@/components/sections/FAQAccordion'

export const metadata: Metadata = {
  title: 'Document Governance for NDIS Providers | CollabEdge Solutions',
  description:
    'NDIS document governance, folder structure design, and audit-ready filing systems for Australian providers, built on SharePoint and Google Drive.',
  openGraph: {
    title: 'Document Governance | CollabEdge Solutions',
    description:
      'Stop losing documents before audits. CollabEdge builds staff-friendly, audit-ready document systems for NDIS providers.',
    url: 'https://www.collabedgesolutions.com.au/services/document-governance',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'NDIS Document Governance',
  provider: {
    '@type': 'ProfessionalService',
    name: 'CollabEdge Solutions',
    url: 'https://www.collabedgesolutions.com.au',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Melbourne',
      addressRegion: 'VIC',
      addressCountry: 'AU',
    },
  },
  areaServed: 'AU',
  description:
    'Document governance, folder structure design, access controls, and audit-ready filing systems for NDIS providers using SharePoint and Google Drive.',
}

const docFaqs: FAQ[] = [
  {
    q: 'Do I need to change my document platform to work with CollabEdge?',
    a: 'No. CollabEdge builds document governance systems inside SharePoint (Microsoft 365) or Google Drive — whichever you already use. No new platform is required.',
  },
  {
    q: 'How long does a document governance engagement take?',
    a: 'For a small to medium NDIS provider, the design and build phase typically takes two to four weeks. Staff training is delivered in one to two sessions after the structure is in place.',
  },
  {
    q: 'What is an AI Use Policy and does my organisation need one?',
    a: 'An AI Use Policy governs how staff use AI tools such as ChatGPT or similar in their work, covering what is permitted, what is not, and how participant privacy is protected. NDIS providers who allow staff to use AI tools should have one in place. CollabEdge includes this in every document governance engagement.',
  },
  {
    q: 'What happens to our existing documents?',
    a: 'Existing documents are reviewed, sorted, and placed into the new structure as part of the migration phase. Superseded versions are moved to the archive folder rather than deleted, meeting the seven-year NDIS retention requirement.',
  },
  {
    q: 'Can we maintain the system ourselves after CollabEdge sets it up?',
    a: 'Yes, that is the goal. CollabEdge trains your team on the filing rules and naming conventions so the system runs independently. Ongoing support is available as an optional retainer.',
  },
]

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: docFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

const painPoints = [
  {
    icon: AlertTriangle,
    text: 'Documents stored in personal email or desktop folders rather than a shared system',
  },
  {
    icon: Search,
    text: 'No consistent naming convention — files called "final", "final2", "final-USE-THIS"',
  },
  {
    icon: Users,
    text: 'Staff cannot find what they need without asking someone else who knows where it is',
  },
  {
    icon: Clock,
    text: 'Audit preparation takes days instead of hours because nothing is where it should be',
  },
]

const folderStructure = [
  {
    number: '00',
    name: 'Governance and Operations',
    desc: 'Policies, procedures, registers, and corporate documents. The first folder an auditor navigates to.',
    icon: Shield,
  },
  {
    number: '01',
    name: 'Human Resources',
    desc: 'Staff files, contracts, screening checks, training records, and position descriptions — each worker has their own subfolder.',
    icon: Users,
  },
  {
    number: '02',
    name: 'Participant Services',
    desc: 'All participant-facing documents including service agreements, support plans, consents, and progress records.',
    icon: FileText,
  },
  {
    number: '98',
    name: 'Staff Workspaces',
    desc: 'Private per-worker folders with restricted access — visible only to that worker and management. Solves the confidentiality problem.',
    icon: Lock,
  },
  {
    number: '99',
    name: 'Archive',
    desc: 'Superseded and closed documents organised by year. Meets the NDIS seven-year retention requirement without cluttering active folders.',
    icon: Archive,
  },
  {
    number: 'Rules',
    name: 'General Filing Rules',
    desc: 'Clear naming conventions, version control rules, PDF signing requirements, and template discipline — documented and trained with your team.',
    icon: CheckCircle,
  },
]

const differentiators = [
  {
    icon: Users,
    title: 'Staff-first design',
    desc: 'Every folder, naming rule, and access control is designed around how staff actually work — not how an auditor thinks they should work. If staff find it confusing, they will not use it.',
  },
  {
    icon: Shield,
    title: 'Audit-ready by default',
    desc: 'The structure maps directly to NDIS Quality and Safeguards Commission audit requirements. Auditors can navigate the system independently without a staff member guiding them through it.',
  },
  {
    icon: Lock,
    title: 'Access controls built in',
    desc: 'Participant files are accessible only to their support workers and management. Staff workspaces are private. Archive folders are management-only. Access is structured from day one.',
  },
  {
    icon: Cpu,
    title: 'AI Use Policy included',
    desc: 'Every document system CollabEdge builds now includes an AI Use Policy, governing how staff use AI tools, what is permitted, and how participant privacy is protected. Most providers have not addressed this yet.',
  },
]

const platforms = [
  {
    platform: 'Microsoft SharePoint',
    suite: 'Microsoft 365',
    features: [
      'Document libraries with permission inheritance',
      'Metadata tagging for fast search and retrieval',
      'Version history and document recovery',
      'Integration with Teams, Outlook and Power Automate',
      'Compliance features built into the Microsoft 365 suite',
    ],
  },
  {
    platform: 'Google Drive',
    suite: 'Google Workspace',
    features: [
      'Shared drives with team-based access controls',
      'Folder-level permission management',
      'Version history and file recovery',
      'Integration with Google Docs, Sheets and Forms',
      'Simple to train and quick to adopt',
    ],
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Audit existing state',
    desc: 'We review where your documents currently live and identify the gaps, duplicates, and access problems.',
  },
  {
    step: '02',
    title: 'Design the structure',
    desc: 'A numbered folder architecture is designed for your specific organisation, mapped to NDIS audit requirements.',
  },
  {
    step: '03',
    title: 'Build and migrate',
    desc: 'The new structure is built in SharePoint or Google Drive. Existing documents are sorted and placed correctly.',
  },
  {
    step: '04',
    title: 'Train your team',
    desc: 'Staff are trained on the naming conventions, filing rules, and access controls, so the system is actually used.',
  },
]

export default function DocumentGovernancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-border px-5 sm:px-10 py-3">
        <div className="max-w-[1000px] mx-auto">
          <ol className="flex items-center gap-2 text-[14px] text-slate">
            <li><a href="/services" className="hover:text-brand-goldLight transition-colors">Services</a></li>
            <li className="text-slate-light">/</li>
            <li className="text-text-dark font-medium">Document Governance</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <PageHero
        eyebrow="Document Governance"
        h1="Find every document. Every time."
        answerBlock="CollabEdge Solutions designs and implements staff-friendly document governance systems for NDIS providers, built on SharePoint or Google Drive, structured for audit readiness, and simple enough that staff actually use them. No more searching for documents when the auditor arrives."
      />

      {/* Pain Section */}
      <section className="bg-white py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              Why do NDIS providers struggle with document management?
            </h2>
            <p className="text-[16px] text-slate leading-relaxed mb-6 max-w-[680px]">
              Most NDIS providers have the right documents somewhere. The problem is that nobody can find them when it matters, during an audit, a staff handover, or a participant review. Documents live in email threads, desktop folders, shared drives with no structure, and personal devices. When an auditor asks for a specific policy or participant file, the whole team stops work to search for it.
            </p>
            <p className="text-[16px] text-slate leading-relaxed max-w-[680px]">
              CollabEdge Solutions has seen this in every provider engagement. The fix is not more documents, it is a clear, consistent system that staff understand and actually follow.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            {painPoints.map((item, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 70}>
                <div className="flex items-start gap-3 bg-offwhite rounded-lg p-5 border border-border">
                  <item.icon size={16} className="text-slate flex-shrink-0 mt-0.5" />
                  <span className="text-[14px] text-slate leading-relaxed">{item.text}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/80 mb-2 block">
              The CollabEdge Approach
            </span>
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-4 leading-snug">
              A document system built for staff, not just auditors
            </h2>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed mb-10 max-w-[680px]">
              CollabEdge Solutions designs a numbered folder architecture inside your existing SharePoint or Google Drive, structured so that every document has one correct location, every staff member knows where to look, and every auditor can navigate independently without a guide.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {folderStructure.map((folder, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 70}>
                <div className="bg-white/[0.04] border border-white/10 rounded-xl p-5 hover:border-gold/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[14px] font-bold text-brand-goldDark font-mono">{folder.number}</span>
                    <div className="w-7 h-7 rounded-lg bg-gold/10 flex items-center justify-center">
                      <folder.icon size={14} className="text-gold" />
                    </div>
                  </div>
                  <h3 className="text-[18px] font-bold text-white mb-2">{folder.name}</h3>
                  <p className="text-[14px] text-[#D1D5DB] leading-relaxed">{folder.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn variant="fadeUp" delay={400}>
            <p className="text-[14px] text-[#9CA3AF] border-l-2 border-gold/30 pl-4">
              This structure is implemented inside SharePoint (Microsoft 365) or Google Drive, the platform your team already uses. No new software required.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              What makes a CollabEdge document system different?
            </h2>
            <p className="text-[16px] text-slate leading-relaxed mb-10 max-w-[680px]">
              Most document systems are built for compliance on paper but ignored in practice. CollabEdge builds systems that staff actually use, because they are simple, logical, and trained properly from day one.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {differentiators.map((item, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 80}>
                <div className="bg-white rounded-xl p-6 border border-border h-full hover:border-gold/30 hover:shadow-sm transition-all duration-200">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <item.icon size={18} className="text-gold" />
                  </div>
                  <h3 className="text-[18px] font-bold text-text-dark mb-2">{item.title}</h3>
                  <p className="text-[14px] text-slate leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="bg-white py-16 px-5 sm:px-10 border-t border-border">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              Built on the platform you already have
            </h2>
            <p className="text-[16px] text-slate leading-relaxed mb-10 max-w-[680px]">
              CollabEdge implements document governance inside SharePoint (Microsoft 365) or Google Drive, whichever your organisation already uses. No new platform to purchase, no migration required.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platforms.map((item, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 100}>
                <div className="bg-navy rounded-xl p-7 border border-white/10 h-full">
                  <span className="text-[13px] font-bold tracking-[.12em] uppercase text-brand-goldDark/80 mb-2 block">
                    {item.suite}
                  </span>
                  <h3 className="text-[18px] font-bold text-white mb-5">{item.platform}</h3>
                  <div className="flex flex-col gap-2.5">
                    {item.features.map((f, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <CheckCircle size={13} className="text-gold/60 flex-shrink-0 mt-0.5" />
                        <span className="text-[14px] text-[#D1D5DB]">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-10 leading-snug">
              How a document governance engagement works
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((item, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 80}>
                <div>
                  <span className="text-[32px] font-bold text-brand-goldLight/40 block mb-2">{item.step}</span>
                  <h3 className="text-[18px] font-bold text-text-dark mb-2">{item.title}</h3>
                  <p className="text-[14px] text-slate leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Reference — Safe Star Supports */}
      <section className="bg-navy py-12 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="bg-white/[0.04] border border-white/10 rounded-xl p-7 hover:border-gold/30 transition-colors">
              <div className="flex items-start justify-between flex-wrap gap-6">
                <div>
                  <span className="text-[13px] font-bold tracking-[.12em] uppercase text-brand-goldDark/80 mb-2 block">
                    Real Engagement
                  </span>
                  <h3 className="text-[18px] font-bold text-white mb-2">
                    Safe Star Supports — Perth, WA
                  </h3>
                  <p className="text-[14px] text-[#D1D5DB] max-w-[560px] leading-relaxed">
                    CollabEdge Solutions designed and implemented a complete document governance system for Safe Star Supports, a registered NDIS provider in Perth. The system included a five-folder numbered architecture, staff workspace privacy controls, a seven-year archive structure, general filing rules, and an AI Use Policy, all built inside their existing platform.
                  </p>
                </div>
                <a
                  href="/appt"
                  className="inline-flex items-center gap-2 bg-gold text-navy text-[14px] font-bold rounded-lg px-5 py-3 hover:bg-gold/90 transition-colors flex-shrink-0 self-start"
                >
                  Discuss Your Situation
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[760px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-8 leading-snug">
              Frequently asked questions
            </h2>
          </FadeIn>
          <FadeIn variant="fadeUp" delay={100}>
            <FAQAccordion faqs={docFaqs} />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Ready to sort your documents once and for all?"
        sub="Free 30-minute consultation. We will assess your current state and tell you exactly what needs to change."
        ctaLabel="Book a Free Consultation"
        ctaHref="/appt"
      />
    </>
  )
}