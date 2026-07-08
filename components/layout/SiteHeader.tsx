"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type MegaColumn = {
  heading: string;
  headingHref?: string;
  links: { label: string; href: string; featured?: boolean }[];
};

type NavCTA = {
  label: string;
  href: string;
};

type NavItem =
  | { kind: "link"; label: string; href: string }
  | { kind: "mega"; label: string; href?: string; columns: MegaColumn[]; cta?: NavCTA };

const NAV: NavItem[] = [
  { kind: "link", label: "Home", href: "/" },
  {
    kind: "mega",
    label: "About",
    href: "/about",
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
    href: "/services",
    columns: [
      {
        heading: "NDIS and Healthcare",
        links: [
          { label: "NDIS Compliance and Audit", href: "/services/ndis-compliance-audit" },
          { label: "Workflow Automation", href: "/services/healthcare-workflow" },
          { label: "Document Governance", href: "/services/document-governance" },
          { label: "Digital Services", href: "/services/digital" },
          { label: "AI Advisory", href: "/services/ai-advisory" },
        ],
      },
      {
        heading: "Enterprise Partners",
        links: [
          { label: "SHIELD: Voice Fraud Prevention", href: "/services/partner-solutions/shield", featured: true },
          { label: "Dynamic Netsoft", href: "/services/partner-solutions#dynamic-netsoft" },
          { label: "Property Automate", href: "/services/partner-solutions#property-automate" },
          { label: "Newgen Consulting", href: "/services/partner-solutions#newgen-consulting" },
        ],
      },
    ],
    cta: { label: "Book Free Consultation", href: "/contact" },
  },
  {
    kind: "mega",
    label: "Products",
    href: "/products",
    columns: [
      {
        heading: "Available Now",
        headingHref: "/products#tab-available",
        links: [
          { label: "MedPrivacy", href: "/products#medprivacy" },
          { label: "Employee Onboarding Automation", href: "/products#employee-onboarding-automation" },
          { label: "Funding and Burn Rate Tracker", href: "/products#funding-burn-rate-tracker" },
        ],
      },
      {
        heading: "In Development",
        headingHref: "/products#tab-development",
        links: [{ label: "NDIS CRM", href: "/products#ndis-crm" }],
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
          { label: "Articles and Guides", href: "/resources" },
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
  const [scrolled, setScrolled] = useState(false);
  const rootRef = useRef<HTMLElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const router = useRouter();

  const handleDesktopEnter = (label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenMenu(label);
  };

  const handleDesktopLeave = () => {
    closeTimeoutRef.current = setTimeout(() => setOpenMenu(null), 150);
  };

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      ref={rootRef}
      className={`sticky top-0 z-50 w-full bg-navy h-[72px] lg:h-[96px] transition-shadow duration-300 ${scrolled ? 'shadow-lg' : ''}`}
    >
      {/* Gold gradient bottom line — desktop only */}
      <div
        className="hidden lg:block absolute bottom-0 left-0 right-0 h-[2px]"
        style={{ background: "linear-gradient(90deg, #C6973F 0%, rgba(198,151,63,0.2) 100%)" }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1200px] h-full flex items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Link href="/">
          <img
            src="/images/logo.png"
            alt="CollabEdge Solutions"
            className="h-12 md:h-14 w-auto"
            style={{ mixBlendMode: 'lighten', background: 'transparent' }}
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
                  className="relative text-[14px] text-[#D1D5DB] px-[11px] py-[6px] rounded hover:text-white transition-colors after:content-[''] after:absolute after:bottom-0 after:left-2 after:right-2 after:h-[1px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
                >
                  {item.label}
                </Link>
              );
            }

            const isOpen = openMenu === item.label;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleDesktopEnter(item.label)}
                onMouseLeave={handleDesktopLeave}
              >
                <button
                  className="relative flex items-center gap-1 text-[14px] text-[#D1D5DB] px-[11px] py-[6px] rounded hover:text-white transition-colors after:content-[''] after:absolute after:bottom-0 after:left-2 after:right-2 after:h-[1px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (item.href) {
                      router.push(item.href);
                      setOpenMenu(null);
                    } else {
                      setOpenMenu(isOpen ? null : item.label);
                    }
                  }}
                  onFocus={() => setOpenMenu(item.label)}
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
                      backgroundColor: "#020A18",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderTop: "2px solid #C6973F",
                      borderLeft: "2px solid #C6973F",
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
                          {col.headingHref ? (
                            <Link
                              href={col.headingHref}
                              onClick={() => setOpenMenu(null)}
                              className="block text-[13px] font-bold tracking-[.16em] uppercase text-[#D1D5DB] mb-3 hover:text-white transition-colors"
                            >
                              {col.heading}
                            </Link>
                          ) : (
                            <p className="text-[13px] font-bold tracking-[.16em] uppercase text-[#D1D5DB] mb-3">
                              {col.heading}
                            </p>
                          )}
                          <ul className="space-y-0.5">
                            {col.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  className={`group block pr-2 py-2 text-[14px] font-medium rounded transition-all border-l-2 ${
                                    link.featured
                                      ? "text-brand-goldDark font-semibold border-transparent hover:border-gold hover:pl-2"
                                      : "text-[#F1F5F9] border-transparent hover:border-gold hover:text-white hover:pl-2"
                                  }`}
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
                        <div className="bg-navy-deep p-5 flex flex-col justify-center gap-0">
                          <p className="text-[14px] text-[#D1D5DB] mb-3">Not sure where to start?</p>
                          <Link
                            href={item.cta.href}
                            className="block w-full bg-gold text-navy font-bold text-[14px] py-3 rounded text-center transition-opacity hover:opacity-90"
                            onClick={() => setOpenMenu(null)}
                          >
                            {item.cta.label}
                          </Link>
                          <p className="text-[13px] text-[#9CA3AF] text-center mt-2">
                            30 min · Free · Senior-led
                          </p>
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
        <div className="hidden lg:block shrink-0">
          <Link href="/appt" className="btn-gold text-[14px] px-5 py-2.5">
            Book Consultation
          </Link>
        </div>

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
                style={{ mixBlendMode: 'lighten', background: 'transparent' }}
              />
            </Link>
            <button
              onClick={() => { setMobileOpen(false); setMobileSection(null); }}
              aria-label="Close menu"
              className="p-2 text-[#D1D5DB] hover:text-white"
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
                        <svg viewBox="0 0 20 20" className="h-4 w-4 text-[#9CA3AF]" fill="none" aria-hidden="true">
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
                  className="flex items-center gap-2 mb-6 text-[14px] uppercase tracking-[.14em] font-semibold text-brand-goldDark"
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
                    {col.headingHref ? (
                      <Link
                        href={col.headingHref}
                        onClick={() => { setMobileOpen(false); setMobileSection(null); }}
                        className="block text-[13px] font-semibold tracking-[.14em] uppercase text-slate-light mb-2 hover:text-white transition-colors"
                      >
                        {col.heading}
                      </Link>
                    ) : (
                      <p className="text-[13px] font-semibold tracking-[.14em] uppercase text-slate-light mb-2">
                        {col.heading}
                      </p>
                    )}
                    <ul className="space-y-1">
                      {col.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={() => { setMobileOpen(false); setMobileSection(null); }}
                            className={`block py-2.5 text-[16px] font-semibold border-b border-white/8 ${
                              link.featured ? "text-brand-goldDark" : "text-white"
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
              href="/appt"
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
