"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavItem =
  | { kind: "link"; label: string; href: string; external?: boolean }
  | { kind: "folder"; label: string; href: string; children: Array<{ label: string; href: string; external?: boolean }> };

const NAV: NavItem[] = [
  { kind: "link", label: "Home", href: "/" },
  {
    kind: "folder",
    label: "About",
    href: "/company",
    children: [
      { label: "Company", href: "/company" },
      { label: "Team", href: "/team" },
    ],
  },
  {
    kind: "folder",
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "All Core Offerings", href: "/core-offerings" },
      { label: "All Specialised Solutions", href: "/specialised-solutions" },
      { label: "MedPrivacy", href: "/medprivacy" },
    ],
  },
  {
    kind: "folder",
    label: "Partners",
    href: "/partners",
    children: [{ label: "All Partners", href: "/partners" }],
  },
  {
    kind: "folder",
    label: "Resources",
    href: "/resources-1",
    children: [
      {
        label: "Blog — Data Security",
        href: "https://www.hurtiscollabedgesolutions.com.au/blog/nu3z35pb4fzq9e7bpxf3tkktyyxn52-z5974",
        external: true,
      },
      { label: "NDIS Blogs", href: "/ndis" },
    ],
  },
  { kind: "link", label: "Book Consultation", href: "/appt" },
];

const LOGO_SRC =
  "https://images.squarespace-cdn.com/content/v1/663abc9bb2142153b3780b43/7e599663-cb8e-42c9-8d62-6791ad97c852/CE+Squarespace+Header+Banner+Gold-White.png?format=1500w";

export default function Header() {
  const [openFolder, setOpenFolder] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileFolder, setMobileFolder] = useState<string | null>(null);
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenFolder(null);
        setMobileOpen(false);
      }
    }
    function onClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpenFolder(null);
      }
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      ref={rootRef}
      className="sticky top-0 z-40 w-full bg-navy/95 backdrop-blur border-b-4 border-gold"
    >
      <div className="mx-auto max-w-container flex items-center justify-between px-5 sm:px-8 py-3 sm:py-4">
        <Link href="/" className="flex items-center" aria-label="CollabEdge Solutions home">
          <Image
            src={LOGO_SRC}
            alt="CollabEdge Solutions"
            width={320}
            height={64}
            priority
            className="h-10 sm:h-14 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => {
            if (item.kind === "link") {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium tracking-wide uppercase hover:text-gold transition-colors"
                >
                  {item.label}
                </Link>
              );
            }
            const isOpen = openFolder === item.label;
            return (
              <div key={item.label} className="relative">
                <button
                  className="flex items-center gap-1.5 text-sm font-medium tracking-wide uppercase hover:text-gold transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenFolder(isOpen ? null : item.label);
                  }}
                  aria-expanded={isOpen}
                >
                  {item.label}
                  <svg
                    viewBox="0 0 20 20"
                    className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5.5 7.5L10 12l4.5-4.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="square" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="absolute right-0 mt-4 min-w-[240px] rounded-md border border-white/10 bg-navy-deep shadow-gold-soft p-2">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        target={c.external ? "_blank" : undefined}
                        rel={c.external ? "noopener noreferrer" : undefined}
                        className="block px-4 py-2.5 text-sm hover:bg-white/5 hover:text-gold rounded"
                        onClick={() => setOpenFolder(null)}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
        >
          <span className="block h-[1.5px] w-7 bg-white" />
          <span className="block h-[1.5px] w-7 bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-navy-deep flex flex-col">
          <div className="flex items-center justify-between px-5 py-4 border-b-4 border-gold">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image
                src={LOGO_SRC}
                alt="CollabEdge Solutions"
                width={280}
                height={56}
                className="h-10 w-auto"
              />
            </Link>
            <button
              onClick={() => {
                setMobileOpen(false);
                setMobileFolder(null);
              }}
              aria-label="Close menu"
              className="p-2"
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="square" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-8">
            {!mobileFolder &&
              NAV.map((item) => {
                if (item.kind === "link") {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-4 text-lg font-serif border-b border-white/10"
                    >
                      {item.label}
                    </Link>
                  );
                }
                return (
                  <button
                    key={item.label}
                    onClick={() => setMobileFolder(item.label)}
                    className="w-full flex items-center justify-between py-4 text-lg font-serif border-b border-white/10"
                  >
                    {item.label}
                    <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
                      <path d="M7 5l6 5-6 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="square" />
                    </svg>
                  </button>
                );
              })}

            {mobileFolder && (
              <>
                <button
                  onClick={() => setMobileFolder(null)}
                  className="flex items-center gap-2 py-4 text-sm uppercase tracking-wider text-gold"
                >
                  <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
                    <path d="M13 5L7 10l6 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="square" />
                  </svg>
                  Back
                </button>
                {NAV.filter(
                  (i): i is Extract<NavItem, { kind: "folder" }> =>
                    i.kind === "folder" && i.label === mobileFolder
                )[0]?.children.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileFolder(null);
                    }}
                    className="block py-4 text-lg font-serif border-b border-white/10"
                  >
                    {c.label}
                  </Link>
                ))}
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
