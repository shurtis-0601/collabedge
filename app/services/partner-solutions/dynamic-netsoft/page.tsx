import type { Metadata } from 'next'
import {
  Database, Workflow, Wrench, ClipboardCheck, ArrowRight, ExternalLink,
  Building2, HardHat, ShoppingCart, Landmark, Globe2, CheckCircle
} from 'lucide-react'
import PageHero from '@/components/corporate/PageHero'
import CTASection from '@/components/ui/CTASection'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'

export const metadata: Metadata = {
  title: 'Dynamic Netsoft Technologies | CollabEdge Solutions',
  description:
    'Dynamic Netsoft Technologies, a Microsoft Dynamics 365 partner for real estate, construction, retail, and finance, coordinated by CollabEdge Solutions.',
  openGraph: {
    title: 'Dynamic Netsoft Technologies | CollabEdge Solutions',
    description:
      'Microsoft Dynamics 365 ERP, CRM, and industry-specific solutions, coordinated by CollabEdge across Australia and Asia Pacific.',
    url: 'https://www.collabedgesolutions.com.au/services/partner-solutions/dynamic-netsoft',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'website',
  },
}

const capabilities = [
  {
    icon: Database,
    title: 'Dynamics 365 Implementation',
    desc: 'Plan and deploy Finance, Operations, Sales, Service, Commerce, and HR capabilities, from business analysis through go-live support.',
  },
  {
    icon: Building2,
    title: 'Industry-Specific ISV Solutions',
    desc: 'Preconfigured capabilities for real estate, construction, treasury, investment, and payroll, reducing custom development and accelerating delivery.',
  },
  {
    icon: Workflow,
    title: 'Upgrade and Modernisation',
    desc: 'Move legacy Dynamics environments toward current cloud-based operating models, with assessment, remediation, and cloud transition support.',
  },
  {
    icon: Wrench,
    title: 'Application Support',
    desc: 'Incident support, hotfixes, regulatory updates, and continuous improvement to sustain performance and adoption after go-live.',
  },
]

const isvSolutions = [
  { name: 'RealEstatePro', tag: 'Real Estate and Property', desc: 'Centralise property sales, leasing, maintenance, finance, and management reporting on Microsoft Dynamics 365.' },
  { name: 'Bid Management', tag: 'Construction and Projects', desc: 'Control tender preparation, estimates, approvals, procurement inputs, and bid performance with structured workflows.' },
  { name: 'Contract Management', tag: 'Contracts and Subcontracts', desc: 'Manage construction subcontracts, milestones, transactions, and progress visibility.' },
  { name: 'Treasury Management', tag: 'Treasury and Finance', desc: 'Improve visibility over loans, disbursements, repayments, renewals, forecasts, and payables.' },
  { name: 'Investment Portfolio Management', tag: 'Investment Operations', desc: 'Track investment transactions, holdings, allocation, valuation, and risk.' },
  { name: 'AxOnePay', tag: 'Payroll and HR', desc: 'Manage employee compensation, payroll administration, and benefits within the Dynamics ecosystem.' },
]

const methodology = [
  { step: '01', title: 'Diagnostic', desc: 'Assess business needs, current systems, stakeholders, and transformation priorities.' },
  { step: '02', title: 'Analysis', desc: 'Define requirements, delivery plan, responsibilities, costs, and programme timeline.' },
  { step: '03', title: 'Design', desc: 'Document the target solution, integrations, reports, testing, and training approach.' },
  { step: '04', title: 'Development', desc: 'Configure the platform, build extensions, and validate the solution against requirements.' },
  { step: '05', title: 'Deployment', desc: 'Migrate data, complete user testing, train teams, and execute a controlled go-live.' },
  { step: '06', title: 'Operation', desc: 'Provide support, updates, maintenance, and continuous improvement after launch.' },
]

const industries = [
  { icon: Building2, name: 'Real Estate', desc: 'Property sales, leasing, customer operations, maintenance, finance, and portfolio reporting.' },
  { icon: HardHat, name: 'Construction', desc: 'Bids, tenders, subcontract management, and project-related transactions and milestone controls.' },
  { icon: ShoppingCart, name: 'Retail', desc: 'Connected sales, service, finance, operations, and commerce for responsive retail execution.' },
  { icon: Landmark, name: 'Finance and Investment', desc: 'Treasury, investment portfolios, reporting, analytics, and financial control.' },
]

export default function DynamicNetsoftPage() {
  return (
    <>
      <PageHero
        eyebrow="Dynamic Netsoft Technologies"
        h1="Microsoft Dynamics 365, shaped around your industry."
        answerBlock="Dynamic Netsoft Technologies combines Microsoft Dynamics 365 implementation expertise with industry-specific ERP solutions for real estate, construction, retail, and finance. CollabEdge Solutions coordinates Dynamic Netsoft engagements for Australian and Asia Pacific enterprises."
      />

      {/* Capabilities */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              End to End Dynamics 365 Capability
            </h2>
            <p className="text-[16px] text-slate leading-relaxed max-w-[680px] mb-10">
              One partner across the complete application lifecycle, from business analysis and solution design through implementation, upgrades, adoption, and continuous support.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {capabilities.map((cap, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 70}>
                <div className="bg-white rounded-xl p-6 border border-border h-full">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <cap.icon size={18} className="text-gold" />
                  </div>
                  <h3 className="text-[16px] font-bold text-text-dark mb-2">{cap.title}</h3>
                  <p className="text-[14px] text-slate leading-relaxed">{cap.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship ISV solutions */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-4 leading-snug">
              Flagship Industry Solutions
            </h2>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-[680px] mb-10">
              Dynamic Netsoft extends Microsoft Dynamics 365 with vertical-specific capabilities, reducing custom development and accelerating deployment.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {isvSolutions.map((sol, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 60}>
                <div className="bg-white/[0.04] border border-white/10 rounded-xl p-5 h-full">
                  <span className="text-[11px] font-bold uppercase tracking-wide text-brand-goldDark/80 mb-2 block">
                    {sol.tag}
                  </span>
                  <h3 className="text-[15px] font-bold text-white mb-2">{sol.name}</h3>
                  <p className="text-[13px] text-[#D1D5DB] leading-relaxed">{sol.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-white py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              A Structured Delivery Path
            </h2>
            <p className="text-[16px] text-slate leading-relaxed max-w-[680px] mb-10">
              Organised around clear phases, stakeholder alignment, controlled delivery, and measurable readiness for go-live.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {methodology.map((m, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 60}>
                <div className="flex gap-4">
                  <span className="text-[13px] font-bold text-brand-goldLight flex-shrink-0 mt-0.5">{m.step}</span>
                  <div>
                    <h3 className="text-[15px] font-bold text-text-dark mb-1">{m.title}</h3>
                    <p className="text-[13.5px] text-slate leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Industry expertise */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              Industry Expertise
            </h2>
            <p className="text-[16px] text-slate leading-relaxed max-w-[680px] mb-10">
              Vertical expertise connects Microsoft technology to the processes, controls, and reporting requirements that matter to each sector.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 70}>
                <div className="bg-white rounded-xl p-5 border border-border h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center mb-3">
                    <ind.icon size={16} className="text-gold" />
                  </div>
                  <h3 className="text-[14.5px] font-bold text-text-dark mb-1.5">{ind.name}</h3>
                  <p className="text-[13px] text-slate leading-relaxed">{ind.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Global reach */}
      <section className="bg-white py-12 px-5 sm:px-10 border-t border-border">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Globe2 size={18} className="text-gold" />
              </div>
              <div>
                <h3 className="text-[16px] font-bold text-text-dark mb-1.5">Regional and Global Delivery</h3>
                <p className="text-[14px] text-slate leading-relaxed max-w-[680px]">
                  Dynamic Netsoft supports customers through delivery and operating locations serving India, the Middle East, North America, Southeast Asia, ANZ, Europe, the Levant, and Africa. CollabEdge Solutions coordinates delivery specifically for Australian and Asia Pacific engagements.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CollabEdge delivery note — eucalyptus */}
      <section className="bg-eucalyptus py-12 px-5 sm:px-10">
        <div className="max-w-[900px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-[18px] font-bold text-white mb-2">
                  CollabEdge Solutions, Coordinating Partner
                </h3>
                <p className="text-[14px] text-white/85 leading-relaxed">
                  CollabEdge Solutions coordinates Dynamic Netsoft engagements for organisations in Australia and Asia Pacific, providing the initial conversation and connecting you with the Dynamic Netsoft delivery team for the Microsoft Dynamics 365 programme itself.
                </p>
              </div>
              <a
                href="/appt"
                className="inline-flex items-center gap-2 bg-white text-eucalyptus text-[14px] font-bold rounded-lg px-6 py-3 hover:bg-white/90 transition-colors whitespace-nowrap flex-shrink-0"
              >
                Discuss Dynamic Netsoft
                <ArrowRight size={14} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* External link to partner site */}
      <section className="bg-offwhite py-10 px-5 sm:px-10">
        <div className="max-w-[900px] mx-auto text-center">
          <FadeIn variant="fadeUp">
            <p className="text-[14px] text-slate mb-3">
              To explore Dynamic Netsoft directly, visit their site.
            </p>
            <a
              href="https://dnetsoft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-goldDark hover:gap-3 transition-all duration-200"
            >
              Visit dnetsoft.com
              <ExternalLink size={13} />
            </a>
          </FadeIn>
        </div>
      </section>

      <CTASection
        heading="Considering a Dynamics 365 Transformation?"
        sub="Talk through your current systems, industry requirements, and objectives with CollabEdge before the conversation moves to Dynamic Netsoft."
        ctaLabel="Book a Free Consultation"
        ctaHref="/appt"
      />
    </>
  )
}
