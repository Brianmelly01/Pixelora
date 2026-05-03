import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

// Proper social media SVG icons
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const socials = [
  { Icon: InstagramIcon, href: "#", label: "Instagram" },
  { Icon: TwitterIcon, href: "#", label: "Twitter / X" },
  { Icon: LinkedInIcon, href: "#", label: "LinkedIn" },
];

const navCols = [
  {
    heading: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Services", href: "/services" },
    ],
  },
  {
    heading: "Work With Us",
    links: [
      { label: "Get a Quote", href: "/order" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[rgba(147,51,234,0.12)] bg-[#040010] overflow-hidden">
      {/* Ambient orbs */}
      <div className="orb orb-purple w-[500px] h-[500px] -bottom-60 -left-32 opacity-25" />
      <div className="orb orb-blue w-[400px] h-[400px] -bottom-48 right-0 opacity-15" />

      {/* Noise texture */}
      <div className="noise-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-14">

          {/* ── Brand Column ── */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5 w-fit group">
              <div className="relative w-9 h-9 flex-shrink-0">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-[0_0_20px_rgba(147,51,234,0.4)] group-hover:shadow-[0_0_28px_rgba(147,51,234,0.65)] transition-shadow" />
                <div className="relative w-full h-full flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="3" y="2" width="3" height="14" rx="1.5" fill="white"/>
                    <rect x="6" y="2" width="7" height="2.5" rx="1.25" fill="white"/>
                    <rect x="6" y="7.5" width="6" height="2.5" rx="1.25" fill="white"/>
                    <rect x="11" y="2" width="3" height="8" rx="1.5" fill="white"/>
                  </svg>
                </div>
              </div>
              <span className="font-display text-[1.15rem] font-bold tracking-tight">
                <span className="gradient-text">Pixel</span>
                <span style={{ color: "var(--text-primary)" }}>ora</span>
              </span>
            </Link>

            <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-[280px] mb-6">
              From pixel to product — we craft premium designs that bring your brand to life.
              Custom printing, branding & creative design for modern businesses.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--color-primary-light)] hover:scale-110 transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* ── Nav Columns ── */}
          {navCols.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-[0.12em] font-body">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-[var(--text-secondary)] hover:text-[var(--color-primary-light)] text-sm transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ── Contact Column ── */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-[0.12em] font-body">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[rgba(147,51,234,0.15)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-3.5 h-3.5 text-[var(--color-primary-light)]" />
                </div>
                <a
                  href="mailto:hello@pixelora.com"
                  className="text-[var(--text-secondary)] hover:text-[var(--color-primary-light)] text-sm transition-colors leading-relaxed"
                >
                  hello@pixelora.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[rgba(147,51,234,0.15)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-3.5 h-3.5 text-[var(--color-primary-light)]" />
                </div>
                <a
                  href="tel:+254700000000"
                  className="text-[var(--text-secondary)] hover:text-[var(--color-primary-light)] text-sm transition-colors"
                >
                  +254 700 000 000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[rgba(147,51,234,0.15)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[var(--color-primary-light)]" />
                </div>
                <span className="text-[var(--text-secondary)] text-sm">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="divider mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-muted)] text-xs">
            © {new Date().getFullYear()} Pixelora. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
            <span>Built with Next.js</span>
            <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
            <span>Deployed on Vercel</span>
            <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
            <span>
              Crafted with <span className="gradient-text font-semibold">passion</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
