import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-navy-deep border-t border-white/5">
      <div className="mx-auto max-w-container px-5 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Col 1: Brand */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="CollabEdge Solutions"
              className="h-11 w-auto mb-4"
            />
            <p className="text-[12px] text-white/50 tracking-[.12em] uppercase mb-5">
              Simplify · Streamline · Automate · Grow
            </p>
            <p className="text-[13px] text-white/60 leading-relaxed">
              ABN 38 557 169 242
              <br />
              Point Cook VIC 3030
              <br />
              <a
                href="mailto:info@collabedgesolutions.com.au"
                className="hover:text-gold transition-colors"
              >
                info@collabedgesolutions.com.au
              </a>
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[.16em] uppercase text-gold mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-[13px] text-white/70">
              <li><Link href="/services/ndis-compliance-audit" className="hover:text-white transition-colors">NDIS Compliance and Audit</Link></li>
              <li><Link href="/services/healthcare-workflow" className="hover:text-white transition-colors">Workflow Automation</Link></li>
              <li><Link href="/services/document-governance" className="hover:text-white transition-colors">Document Governance</Link></li>
              <li><Link href="/ai-automation" className="hover:text-white transition-colors">AI Advisory</Link></li>
            </ul>
            <div className="my-4 h-px bg-white/10" />
            <ul className="space-y-2.5 text-[13px]">
              <li><Link href="/services/partner-solutions/shield" className="text-gold hover:text-gold/80 transition-colors">SHIELD — Voice Fraud</Link></li>
              <li><Link href="/services/partner-solutions/property-automate" className="text-gold hover:text-gold/80 transition-colors">Property Automate</Link></li>
              <li><Link href="/services/partner-solutions/dqops" className="text-gold hover:text-gold/80 transition-colors">DQOps — Data Quality</Link></li>
              <li><Link href="/services/partner-solutions/vanta" className="text-gold hover:text-gold/80 transition-colors">Vanta — Security</Link></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[.16em] uppercase text-gold mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-[13px] text-white/70">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/about/team" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="/about/sinclair-hurtis" className="hover:text-white transition-colors">Sinclair Hurtis</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/services/partner-solutions" className="hover:text-white transition-colors">Partner Ecosystem</Link></li>
            </ul>
          </div>

          {/* Col 4: Learn */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[.16em] uppercase text-gold mb-4">
              Learn
            </h4>
            <ul className="space-y-2.5 text-[13px] text-white/70">
              <li><Link href="/ai-automation" className="hover:text-white transition-colors">AI and Automation Hub</Link></li>
              <li><Link href="/resources/articles" className="hover:text-white transition-colors">Articles and Guides</Link></li>
              <li><Link href="/resources/downloads" className="hover:text-white transition-colors">Downloads</Link></li>
              <li><Link href="/resources/videos" className="hover:text-white transition-colors">Video Walkthroughs</Link></li>
            </ul>
            <div className="my-4 h-px bg-white/10" />
            <ul className="space-y-2.5 text-[13px] text-white/70">
              <li><Link href="/products/medprivacy" className="hover:text-white transition-colors">MedPrivacy</Link></li>
              <li><Link href="/products/ndis-compliance-checker" className="hover:text-white transition-colors">NDIS Compliance Checker</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/5 py-5 text-center">
        <p className="text-[12px] text-white/40">
          © {new Date().getFullYear()} CollabEdge Solutions Pty Ltd. All rights reserved. ABN 38 557 169 242.
        </p>
      </div>
    </footer>
  );
}
