"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Filter, Sparkles } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const categories = ["All", "Clothing", "Branding", "Merchandise", "Illustration"];

const portfolioItems = [
  { id: 1, title: "Neon Drift Hoodie Collection", category: "Clothing", tags: ["DTF Print", "Streetwear"], gradient: "from-purple-600 via-violet-700 to-indigo-800", emoji: "👕", size: "large" },
  { id: 2, title: "AuraFuel Brand Identity", category: "Branding", tags: ["Logo", "Guidelines"], gradient: "from-cyan-500 via-blue-600 to-indigo-700", emoji: "⚡", size: "small" },
  { id: 3, title: "Summit Gear Merch Pack", category: "Merchandise", tags: ["Caps", "Bags", "Stickers"], gradient: "from-pink-600 via-rose-600 to-red-700", emoji: "🎒", size: "small" },
  { id: 4, title: "Luminos Festival Posters", category: "Illustration", tags: ["Poster", "Event Art"], gradient: "from-amber-500 via-orange-600 to-red-600", emoji: "🎨", size: "small" },
  { id: 5, title: "Vertex Sports Collection", category: "Clothing", tags: ["Jerseys", "Sportswear"], gradient: "from-green-500 via-emerald-600 to-teal-700", emoji: "🏆", size: "small" },
  { id: 6, title: "Bloom Coffee Brand System", category: "Branding", tags: ["Packaging", "Identity"], gradient: "from-rose-400 via-pink-500 to-purple-600", emoji: "☕", size: "large" },
  { id: 7, title: "TechNova Swag Kit", category: "Merchandise", tags: ["Mugs", "Notebooks", "T-Shirts"], gradient: "from-blue-500 via-indigo-600 to-purple-700", emoji: "🎁", size: "small" },
  { id: 8, title: "Celestial Illustration Series", category: "Illustration", tags: ["Art", "Print"], gradient: "from-violet-600 via-purple-700 to-pink-700", emoji: "🌌", size: "small" },
];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === active);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
      <div className="orb orb-purple w-96 h-96 -top-20 -left-20 opacity-30" />
      <div className="orb orb-blue w-80 h-80 top-40 right-0 opacity-20" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-center mb-14"
        >
          <span className="section-badge">
            <Sparkles className="w-3.5 h-3.5" /> Our Work
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-5" style={{ fontFamily: "Outfit, sans-serif" }}>
            Creative <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            A showcase of our finest work across clothing, branding, merchandise, and illustration.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <div className="flex items-center gap-2 text-gray-500 text-sm mr-2">
            <Filter className="w-4 h-4" /> Filter:
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-${cat.toLowerCase()}`}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                  : "border border-[rgba(168,85,247,0.25)] text-gray-400 hover:text-white hover:border-purple-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              custom={i}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                item.size === "large" ? "sm:col-span-2 lg:col-span-2 min-h-[280px]" : "min-h-[240px]"
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80`} />
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)] group-hover:bg-[rgba(0,0,0,0.05)] transition-colors duration-500" />
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="absolute top-6 right-6 text-5xl opacity-30 group-hover:opacity-60 group-hover:scale-125 transition-all duration-500">
                {item.emoji}
              </div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/20 text-white font-medium backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>
                  {item.title}
                </h3>
                <span className="text-white/60 text-sm">{item.category}</span>
                <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-5">Love what you see? Let&apos;s build something together.</p>
          <a href="/order" className="btn-gradient px-10 py-4 rounded-full text-sm inline-flex">
            <span>Start Your Project</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
