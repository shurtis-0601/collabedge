"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type MegaColumn = {
  heading: string;
  links: { label: string; href: string; featured?: boolean }[];
};

type NavCTA = {
  label: string;
  href: string;
};

type NavItem =
  | { kind: "link"; label: string; href: string }
  | { kind: "mega"; label: string; columns: MegaColumn[]; cta?: NavCTA };

const NAV: NavItem[] = [
  { kind: "link", label: "Home", href: "/" },
  {
    kind: "mega",
    label: "About",
    columns: [
      {
        heading: "Company",
        links: [
          { label: "About Us", href: "/about" },
          { label: "Our Team", href: "/about/team" },
          { label: "Sinclair Hurtis", href: "/about/sinclair-hurtis" },
        ],
      },
      {
        heading: "Proof",
        links: [
          { label: "Case Studies", href: "/case-studies" },
          { label: "Partner Ecosystem", href: "/services/partner-solutions" },
        ],
      },
    ],
  },
  {
    kind: "mega",
    label: "Services",
    columns: [
      {
        heading: "NDIS and Healthcare",
        links: [
          { label: "NDIS Compliance and Audit", href: "/services/ndis-compliance-audit" },
          { label: "Workflow Automation", href: "/services/healthcare-workflow" },
          { label: "Document Governance", href: "/services/document-governance" },
          { label: "AI Advisory", href: "/ai-automation" },
        ],
      },
      {
        heading: "Enterprise Partners",
        links: [
          { label: "SHIELD — Voice Fraud", href: "/services/partner-solutions/shield", featured: true },
          { label: "Property Automate", href: "/services/partner-solutions/property-automate" },
          { label: "DQOps — Data Quality", href: "/services/partner-solutions/dqops" },
          { label: "Vanta — Security", href: "/services/partner-solutions/vanta" },
        ],
      },
    ],
    cta: { label: "Book Free Consultation", href: "/contact" },
  },
  {
    kind: "mega",
    label: "Products",
    columns: [
      {
        heading: "Live",
        links: [{ label: "MedPrivacy", href: "/products/medprivacy" }],
      },
      {
        heading: "Coming Soon",
        links: [{ label: "NDIS Compliance Checker", href: "/products/ndis-compliance-checker" }],
      },
    ],
  },
  {
    kind: "mega",
    label: "Resources",
    columns: [
      {
        heading: "Learn",
        links: [
          { label: "AI and Automation Hub", href: "/ai-automation" },
          { label: "Articles and Guides", href: "/resources/articles" },
        ],
      },
      {
        heading: "Tools",
        links: [
          { label: "Downloads", href: "/resources/downloads" },
          { label: "Video Walkthroughs", href: "/resources/videos" },
        ],
      },
    ],
  },
  { kind: "link", label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }
    function onOutsideClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("click", onOutsideClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("click", onOutsideClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      ref={rootRef}
      className="sticky top-0 z-50 w-full bg-navy"
      style={{ height: "68px" }}
    >
      {/* Gold gradient bottom line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{ background: "linear-gradient(90deg, #C6973F 0%, rgba(198,151,63,0.2) 100%)" }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1200px] h-full flex items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <Link href="/" aria-label="CollabEdge Solutions home" className="flex items-center shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.png"
            alt="CollabEdge Solutions"
            style={{ height: "44px", width: "auto" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {NAV.map((item) => {
            if (item.kind === "link") {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[13px] text-white/70 px-[11px] py-[6px] rounded hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              );
            }

            const isOpen = openMenu === item.label;
            return (
              <div key={item.label} className="relative">
                <button
                  className="flex items-center gap-1 text-[13px] text-white/70 px-[11px] py-[6px] rounded hover:text-white transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenMenu(isOpen ? null : item.label);
                  }}
                  aria-expanded={isOpen}
                >
                  {item.label}
                  <svg
                    viewBox="0 0 12 12"
                    className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>

                {isOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 rounded-lg shadow-2xl overflow-hidden"
                    style={{
                      minWidth: item.cta ? "640px" : "380px",
                      backgroundColor: "#0A1628",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderTop: "2px solid #C6973F",
                    }}
                  >
                    <div
                      className={`grid gap-0 ${
                        item.cta
                          ? "grid-cols-[1fr_1fr_180px]"
                          : "grid-cols-2"
                      }`}
                    >
                      {item.columns.map((col) => (
                        <div key={col.heading} className="p-5 border-r border-white/10 last:border-r-0">
                          <p className="text-[10px] font-semibold tracking-[.14em] uppercase mb-3"
                            style={{ color: "rgba(255,255,255,0.4)" }}>
                            {col.heading}
                          </p>
                          <ul className="space-y-0.5">
                            {col.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  className={`block pl-3 pr-2 py-2 text-[13px] rounded transition-all border-l-2 ${
                                    link.featured
                                      ? "text-gold font-semibold border-transparent hover:border-gold hover:bg-white/5"
                                      : "border-transparent hover:border-gold hover:bg-white/5 hover:text-white"
                                  }`}
                                  style={link.featured ? undefined : { color: "rgba(255,255,255,0.85)" }}
                                  onClick={() => setOpenMenu(null)}
                                >
                                  {link.featured && <span className="mr-1">⭐</span>}
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {item.cta && (
                        <div className="p-5 flex flex-col items-start justify-center gap-3"
                          style={{ backgroundColor: "#072638" }}>
                          <p className="text-[11px] text-white/60 leading-snug">Not sure where to start?</p>
                          <Link
                            href={item.cta.href}
                            className="btn-gold text-[12px] px-4 py-2.5 w-full text-center"
                            onClick={() => setOpenMenu(null)}
                          >
                            {item.cta.label}
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Book Consultation CTA */}
        <Link
          href="/contact"
          className="hidden lg:inline-flex btn-gold text-[13px] px-5 py-2.5 shrink-0"
        >
          Book Consultation
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden flex flex-col gap-[5px] p-2"
          aria-label="Open navigation menu"
          aria-expanded={mobileOpen}
        >
          <span className="block h-[2px] w-6 bg-white rounded" />
          <span className="block h-[2px] w-6 bg-white rounded" />
          <span className="block h-[2px] w-6 bg-white rounded" />
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-navy-deep flex flex-col" role="dialog" aria-modal="true" aria-label="Navigation menu">
          {/* Overlay header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <Link href="/" onClick={() => setMobileOpen(false)} aria-label="Home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.png"
                alt="CollabEdge Solutions"
                className="h-11 w-auto"
              />
            </Link>
            <button
              onClick={() => { setMobileOpen(false); setMobileSection(null); }}
              aria-label="Close menu"
              className="p-2 text-white/70 hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Overlay body */}
          <nav className="flex-1 overflow-y-auto px-5 py-6">
            {!mobileSection ? (
              <ul className="space-y-1">
                {NAV.map((item) => {
                  if (item.kind === "link") {
                    return (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-3.5 text-[18px] font-semibold text-white border-b border-white/8"
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  }
                  return (
                    <li key={item.label}>
                      <button
                        onClick={() => setMobileSection(item.label)}
                        className="w-full flex items-center justify-between py-3.5 text-[18px] font-semibold text-white border-b border-white/8"
                      >
                        {item.label}
                        <svg viewBox="0 0 20 20" className="h-4 w-4 text-white/40" fill="none" aria-hidden="true">
                          <path d="M7 5l6 5-6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </button>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <>
                <button
                  onClick={() => setMobileSection(null)}
                  className="flex items-center gap-2 mb-6 text-[12px] uppercase tracking-[.14em] font-semibold text-gold"
                >
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
                    <path d="M13 5L7 10l6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  Back
                </button>
                {NAV.filter(
                  (i): i is Extract<NavItem, { kind: "mega" }> =>
                    i.kind === "mega" && i.label === mobileSection
                )[0]?.columns.map((col) => (
                  <div key={col.heading} className="mb-6">
                    <p className="text-[10px] font-semibold tracking-[.14em] uppercase text-slate-light mb-2">
                      {col.heading}
                    </p>
                    <ul className="space-y-1">
                      {col.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={() => { setMobileOpen(false); setMobileSection(null); }}
                            className={`block py-2.5 text-[16px] font-semibold border-b border-white/8 ${
                              link.featured ? "text-gold" : "text-white"
                            }`}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </>
            )}
          </nav>

          {/* Gold CTA at bottom */}
          <div className="px-5 pb-8 pt-4 border-t border-white/10">
            <Link
              href="/contact"
              className="btn-gold w-full text-center text-[15px] py-4"
              onClick={() => setMobileOpen(false)}
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
