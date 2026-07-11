import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-navy-deep border-t border-white/5">
      <div className="mx-auto max-w-container px-5 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Col 1: Brand */}
          <div>
            <p className="text-[14px] text-[#D1D5DB] leading-relaxed">
              ABN 38 557 169 242
              <br />
              Melbourne, Victoria
              <br />
              <a
                href="mailto:info@collabedgesolutions.com.au"
                className="hover:text-brand-goldDark transition-colors"
              >
                info@collabedgesolutions.com.au
              </a>
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#D1D5DB]">
              <li><Link href="/services/ndis-compliance-audit" className="hover:text-white transition-colors">NDIS Compliance and Audit</Link></li>
              <li><Link href="/services/healthcare-workflow" className="hover:text-white transition-colors">Healthcare Workflow Automation</Link></li>
              <li><Link href="/services/document-governance" className="hover:text-white transition-colors">Document Governance</Link></li>
              <li><Link href="/services/digital" className="hover:text-white transition-colors">Digital Services</Link></li>
              <li><Link href="/services/ai-advisory" className="hover:text-white transition-colors">AI Advisory</Link></li>
            </ul>
            <div className="my-4 h-px bg-white/10" />
            <ul className="space-y-2.5 text-[14px]">
              <li><Link href="/services/partner-solutions/shield" className="text-brand-goldDark hover:text-brand-goldDark/80 transition-colors">SHIELD Voice Fraud Prevention</Link></li>
              <li><Link href="/services/partner-solutions#dynamic-netsoft" className="text-brand-goldDark hover:text-brand-goldDark/80 transition-colors">Dynamic Netsoft</Link></li>
              <li><Link href="/services/partner-solutions#property-automate" className="text-brand-goldDark hover:text-brand-goldDark/80 transition-colors">Property Automate</Link></li>
              <li><Link href="/services/partner-solutions#newgen-consulting" className="text-brand-goldDark hover:text-brand-goldDark/80 transition-colors">Newgen Consulting</Link></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#D1D5DB]">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/about/team" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="/about/sinclair-hurtis" className="hover:text-white transition-colors">Sinclair Hurtis</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/services/partner-solutions" className="hover:text-white transition-colors">Partner Ecosystem</Link></li>
            </ul>
          </div>

          {/* Col 4: Learn */}
          <div>
            <h4 className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark mb-4">
              Learn
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#D1D5DB]">
              <li><Link href="/ai-automation" className="hover:text-white transition-colors">AI and Automation Hub</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Articles and Guides</Link></li>
              <li><Link href="/resources/downloads" className="hover:text-white transition-colors">Downloads</Link></li>
              <li><Link href="/resources/videos" className="hover:text-white transition-colors">Video Walkthroughs</Link></li>
            </ul>
            <div className="my-4 h-px bg-white/10" />
            <ul className="space-y-2.5 text-[14px] text-[#D1D5DB]">
              <li><a href="https://medprivacy.com.au" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">MedPrivacy</a></li>
              <li><Link href="/products/employee-onboarding-automation" className="hover:text-white transition-colors">Employee Onboarding Automation</Link></li>
              <li><Link href="/products/funding-burn-rate-tracker" className="hover:text-white transition-colors">Funding and Burn Rate Tracker</Link></li>
              <li><Link href="/products#ndis-crm" className="hover:text-white transition-colors">NDIS CRM (Coming Soon)</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/5 py-5 text-center">
        <p className="text-[14px] text-[#9CA3AF]">
          © {new Date().getFullYear()} CollabEdge Solutions Pty Ltd. All rights reserved. ABN 38 557 169 242.
        </p>
      </div>
    </footer>
  );
}
