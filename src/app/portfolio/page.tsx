"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Filter, Sparkles, ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const categories = ["All", "Clothing", "Branding", "Merchandise", "Illustration"];

const portfolioItems = [
  { id: 1, title: "Neon Drift Hoodie Collection", category: "Clothing",       tags: ["DTF Print", "Streetwear"],          gradient: "from-purple-700 via-violet-800 to-indigo-900",   accentColor: "#a855f7", size: "large",  shape: "circles" },
  { id: 2, title: "AuraFuel Brand Identity",      category: "Branding",       tags: ["Logo Design", "Guidelines"],         gradient: "from-cyan-600 via-blue-700 to-indigo-800",       accentColor: "#06b6d4", size: "small",  shape: "grid" },
  { id: 3, title: "Summit Gear Merch Pack",        category: "Merchandise",    tags: ["Caps", "Tote Bags", "Stickers"],     gradient: "from-pink-700 via-rose-700 to-red-800",          accentColor: "#ec4899", size: "small",  shape: "diagonal" },
  { id: 4, title: "Luminos Festival Posters",      category: "Illustration",   tags: ["Poster Art", "Event Branding"],      gradient: "from-amber-600 via-orange-700 to-red-700",       accentColor: "#f59e0b", size: "small",  shape: "hexagon" },
  { id: 5, title: "Vertex Sports Collection",      category: "Clothing",       tags: ["Jerseys", "Sportswear"],             gradient: "from-emerald-600 via-teal-700 to-cyan-800",      accentColor: "#10b981", size: "small",  shape: "circles" },
  { id: 6, title: "Bloom Coffee Brand System",     category: "Branding",       tags: ["Packaging", "Brand Identity"],       gradient: "from-rose-500 via-pink-600 to-purple-700",       accentColor: "#f43f5e", size: "large",  shape: "diagonal" },
  { id: 7, title: "TechNova Swag Kit",             category: "Merchandise",    tags: ["Mugs", "Notebooks", "T-Shirts"],     gradient: "from-blue-600 via-indigo-700 to-purple-800",     accentColor: "#3b82f6", size: "small",  shape: "grid" },
  { id: 8, title: "Celestial Illustration Series", category: "Illustration",   tags: ["Digital Art", "Print Series"],       gradient: "from-violet-700 via-purple-800 to-pink-800",     accentColor: "#8b5cf6", size: "small",  shape: "hexagon" },
];

function CardPattern({ shape, color }: { shape: string; color: string }) {
  const c = color + "50";
  if (shape === "circles") return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <circle cx="80%" cy="20%" r="110" fill="none" stroke={c} strokeWidth="28" />
      <circle cx="20%" cy="80%" r="70"  fill="none" stroke={c} strokeWidth="20" />
      <circle cx="60%" cy="55%" r="45"  fill="none" stroke={c} strokeWidth="14" />
    </svg>
  );
  if (shape === "grid") return (
    <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
      <defs><pattern id={`g-${shape}-${color.slice(1)}`} x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
        <path d="M 32 0 L 0 0 0 32" fill="none" stroke={c} strokeWidth="1.2"/>
      </pattern></defs>
      <rect width="100%" height="100%" fill={`url(#g-${shape}-${color.slice(1)})`} />
    </svg>
  );
  if (shape === "diagonal") return (
    <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
      {[...Array(12)].map((_, i) => <line key={i} x1={i * 44 - 80} y1="0" x2={i * 44 + 120} y2="450" stroke={c} strokeWidth="1.5" />)}
    </svg>
  );
  if (shape === "hexagon") return (
    <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
      <polygon points="85,0 170,42 170,126 85,168 0,126 0,42" fill="none" stroke={c} strokeWidth="1.5" transform="translate(50,20)" />
      <polygon points="60,0 120,30 120,90 60,120 0,90 0,30" fill="none" stroke={c} strokeWidth="1" transform="translate(180,90)" />
      <polygon points="40,0 80,20 80,60 40,80 0,60 0,20" fill="none" stroke={c} strokeWidth="0.8" transform="translate(0,140)" />
    </svg>
  );
  return null;
}

export default function PortfolioPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === active);

  return (
    <div className="min-h-screen pt-36 pb-28 relative overflow-hidden">
      <div className="orb orb-purple w-96 h-96 -top-20 -left-20 opacity-30" />
      <div className="orb orb-blue   w-80 h-80 top-40 right-0  opacity-20" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">

        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
          <span className="section-badge"><Sparkles className="w-3 h-3" /> Our Work</span>
          <h1 className="font-display tracking-display text-5xl md:text-6xl font-black mb-6">
            Creative <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto leading-relaxed">
            A showcase of our finest work across clothing, branding, merchandise, and illustration.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm mr-1">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </div>
          {categories.map((cat) => (
            <button key={cat} id={`filter-${cat.toLowerCase()}`} onClick={() => setActive(cat)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-250 overflow-hidden ${
                active === cat
                  ? "text-white shadow-[0_0_20px_rgba(147,51,234,0.4)]"
                  : "border border-[rgba(147,51,234,0.2)] text-[var(--text-secondary)] hover:text-white hover:border-[rgba(147,51,234,0.45)]"
              }`}>
              {active === cat && (
                <motion.span layoutId="filter-pill" className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" style={{ zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }} />
              )}
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <motion.div key={item.id} layout custom={i} initial="hidden" animate="visible" variants={fadeUp}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${item.size === "large" ? "sm:col-span-2 lg:col-span-2 min-h-[320px]" : "min-h-[260px]"}`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
              <CardPattern shape={item.shape} color={item.accentColor} />
              <div className="portfolio-card-overlay" />
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-400" />

              <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 border border-white/30">
                <ExternalLink className="w-3.5 h-3.5 text-white" />
              </div>

              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[0.68rem] px-2.5 py-1 rounded-full bg-white/15 text-white font-medium backdrop-blur-sm border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-1.5 leading-snug">{item.title}</h3>
                <span className="text-white/55 text-xs uppercase tracking-wider">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mt-20">
          <p className="text-[var(--text-secondary)] mb-6 text-lg">Love what you see? Let&apos;s build something together.</p>
          <Link href="/order" className="btn-gradient px-10 py-4 rounded-full text-sm inline-flex">
            <span className="flex items-center gap-2">Start Your Project <ArrowRight className="w-4 h-4" /></span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
