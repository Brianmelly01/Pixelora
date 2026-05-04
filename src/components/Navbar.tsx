"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
  { href: "/",          label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services",  label: "Services" },
  { href: "/order",     label: "Order" },
  { href: "/contact",   label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const pathname                = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
      scrolled
        ? "py-3 backdrop-blur-2xl bg-[rgba(7,0,15,0.82)] border-b border-[rgba(255,255,255,0.055)] shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
        : "py-5"
    }`}>
      <div className="max-w-6xl mx-auto px-8 lg:px-12 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image src="/logo.png" alt="Pixelora" width={160} height={56}
            className="h-11 w-auto hover:opacity-90 transition-opacity" priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  active ? "text-white" : "text-[var(--text-muted)] hover:text-white hover:bg-white/5"
                }`}>
                {active && (
                  <motion.span layoutId="nav-pill"
                    className="absolute inset-0 bg-white/8 border border-white/10 rounded-lg"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 32 }} />
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/order" className="btn-gradient px-5 py-2.5 rounded-full text-sm">
            <span className="flex items-center gap-1.5">Start a Project <ArrowRight className="w-3.5 h-3.5" /></span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} aria-label="Toggle menu"
          className="md:hidden w-10 h-10 rounded-xl border border-[var(--border-faint)] flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:border-[var(--border-mid)] transition-all">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden absolute inset-x-0 top-full backdrop-blur-2xl bg-[rgba(7,0,15,0.97)] border-b border-[var(--border-faint)]">
            <div className="max-w-6xl mx-auto px-8 py-6 flex flex-col gap-1">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link key={link.href} href={link.href}
                    className={`px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
                      active
                        ? "bg-[rgba(124,58,237,0.12)] border border-[var(--border-subtle)] text-white"
                        : "text-[var(--text-muted)] hover:text-white hover:bg-white/4"
                    }`}>
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-4 mt-2 border-t border-[var(--border-faint)]">
                <Link href="/order" className="btn-gradient w-full py-3.5 rounded-xl text-sm block text-center">
                  Start a Project →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
