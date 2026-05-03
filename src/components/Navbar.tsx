"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/order", label: "Order" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl bg-[rgba(5,0,16,0.85)] border-b border-[rgba(147,51,234,0.18)] py-2 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 lg:px-12 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo.png"
            alt="Pixelora"
            width={180}
            height={60}
            className="h-11 w-auto group-hover:opacity-90 transition-opacity"
            priority
          />
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-[var(--text-secondary)] hover:text-white hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-white/8 border border-white/10"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* ── Desktop CTA ── */}
        <div className="hidden md:flex items-center">
          <Link href="/order" className="btn-gradient px-5 py-2.5 rounded-full text-sm">
            <span className="flex items-center gap-1.5">
              Start a Project
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </Link>
        </div>

        {/* ── Mobile Toggle ── */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-[rgba(147,51,234,0.25)] text-[var(--text-secondary)] hover:text-white hover:border-[rgba(147,51,234,0.5)] transition-all"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 backdrop-blur-2xl bg-[rgba(5,0,16,0.97)] border-b border-[rgba(147,51,234,0.18)]"
          >
            <nav className="max-w-6xl mx-auto px-8 py-5 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      isActive
                        ? "text-white bg-white/6 border border-[rgba(147,51,234,0.2)]"
                        : "text-[var(--text-secondary)] hover:text-white hover:bg-white/4"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-3 mt-1 border-t border-[rgba(147,51,234,0.12)]">
                <Link href="/order" className="btn-gradient w-full py-3 rounded-xl text-sm text-center block">
                  <span>Start a Project →</span>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
