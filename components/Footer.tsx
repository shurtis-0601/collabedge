import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gold/30 bg-navy-deep mt-24">
      <div className="mx-auto max-w-container px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 text-center">
          <div>
            <h4 className="text-gold tracking-[0.25em] text-sm mb-6">SOLUTIONS</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link className="hover:text-gold" href="/core-offerings">
                  Core Offerings
                </Link>
              </li>
              <li>
                <Link className="hover:text-gold" href="/specialised-solutions">
                  Specialised Solutions
                </Link>
              </li>
              <li>
                <Link className="hover:text-gold" href="/company">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-gold" href="/appt">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold tracking-[0.25em] text-sm mb-6">CONNECT</h4>
            <ul className="space-y-3 text-sm">
              <li>
                📧{" "}
                <a className="hover:text-gold" href="mailto:info@collabedgesolutions.com.au">
                  info@collabedgesolutions.com.au
                </a>
              </li>
              <li>📞 (61) 426 464 442</li>
              <li>
                💼{" "}
                <a
                  className="hover:text-gold"
                  href="https://www.linkedin.com/company/collabedge-solutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow us on LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-16 text-center text-xs text-white/60">
          © 2026 CollabEdge Solutions. All Rights Reserved | ABN — 38 557 169 242
        </p>
      </div>
    </footer>
  );
}
