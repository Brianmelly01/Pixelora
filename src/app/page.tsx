"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Star, Zap, Users, Award, Clock, CheckCircle2, ChevronRight, Quote, Shirt, Palette, Package, Wand2 } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const services = [
  { icon: Shirt,   title: "Clothing Printing", desc: "DTF, screen printing & embroidery on any fabric. Bulk orders with express 48h turnaround.", color: "from-violet-600 to-purple-700", glow: "rgba(124,58,237,0.3)",  tag: "Most Popular" },
  { icon: Palette, title: "Branding",           desc: "Full brand identity — logos, color systems, guidelines & visual strategy from concept to launch.", color: "from-blue-600 to-indigo-600",   glow: "rgba(37,99,235,0.25)",  tag: "End-to-End" },
  { icon: Package, title: "Merchandise",        desc: "Custom merch for events, campaigns & brands. Mugs, totes, stickers, keychains & more.", color: "from-pink-600 to-rose-600",    glow: "rgba(236,72,153,0.25)", tag: "Wholesale" },
  { icon: Wand2,   title: "Custom Designs",     desc: "Bespoke artwork, illustrations & creative concepts tailored to your exact vision.", color: "from-amber-500 to-orange-600", glow: "rgba(245,158,11,0.25)", tag: "Bespoke" },
];

const stats = [
  { value: "500+",   label: "Happy Clients",   icon: Users, color: "text-violet-400" },
  { value: "1,200+", label: "Projects Done",    icon: Award, color: "text-blue-400" },
  { value: "48h",    label: "Avg. Turnaround",  icon: Clock, color: "text-cyan-400" },
  { value: "4.9★",   label: "Client Rating",    icon: Star,  color: "text-amber-400" },
];

const whyUs = [
  "Premium materials & professional inks",
  "Express 48–72h turnaround available",
  "Free design consultation included",
  "Bulk order discounts for teams",
  "100% satisfaction guarantee",
  "Dedicated project manager on every order",
];

const testimonials = [
  { name: "Amara Osei",       role: "CEO, NovaBrand",   text: "Pixelora completely transformed our brand identity. The attention to detail and speed of delivery is absolutely unmatched.",         grad: "from-violet-600 to-blue-600",  av: "AO" },
  { name: "James Mwangi",     role: "Event Organiser",  text: "Ordered 300 custom t-shirts for our festival. Quality was incredible, delivery was on time, and the team was a joy to work with.",   grad: "from-blue-600 to-cyan-500",    av: "JM" },
  { name: "Fatima Al-Rashid", role: "Fashion Designer", text: "They understood my vision perfectly on the first try. Their creative instinct is rare. I will be working with Pixelora again and again.", grad: "from-pink-600 to-violet-600",  av: "FA" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden">

      {/* ══ HERO ══ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6 pt-32 pb-20">
        <div className="orb orb-violet  w-[700px] h-[700px] top-[-250px] left-[-180px] opacity-35" />
        <div className="orb orb-blue   w-[550px] h-[550px] top-[-150px] right-[-160px] opacity-25" />
        <div className="orb orb-pink   w-[350px] h-[350px] bottom-[-80px] left-1/2 -translate-x-1/2 opacity-20" />
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 30%, var(--surface-base) 100%)" }} />
        <div className="noise" />

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="flex justify-center">
            <span className="section-badge">
              <Sparkles className="w-3 h-3" />
              Creative Design & Printing Studio · Nairobi
            </span>
          </motion.div>

          <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="font-display text-[3.2rem] sm:text-[4.8rem] md:text-[6rem] lg:text-[7rem] font-extrabold leading-[0.95] tracking-[-0.04em] mb-8 text-balance">
            From{" "}
            <span className="gradient-text">Pixel</span>
            <br />to Product
          </motion.h1>

          <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="text-[var(--text-muted)] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-body">
            We transform your boldest ideas into stunning physical products.
            Custom clothing, branding, merch & creative designs — all under one roof.
          </motion.p>

          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link href="/order" className="btn-gradient px-10 py-4 rounded-full text-[0.95rem]">
              <span className="flex items-center gap-2">Start Your Project <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link href="/portfolio" className="btn-outline px-10 py-4 rounded-full text-[0.95rem]">
              View Portfolio <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map(({ value, label, icon: Icon, color }) => (
              <div key={label} className="glass-card px-5 py-7 flex flex-col items-center text-center group hover:scale-[1.04] cursor-default">
                <Icon className={`w-5 h-5 ${color} mb-4`} />
                <span className="font-display text-3xl font-extrabold gradient-text tracking-[-0.03em] mb-1">{value}</span>
                <span className="text-[var(--text-faint)] text-xs font-body">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}>
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-[rgba(124,58,237,0.7)] to-transparent" />
          <span className="text-[var(--text-faint)] text-[0.6rem] tracking-[0.2em] uppercase">Scroll</span>
        </motion.div>
      </section>

      {/* ══ SERVICES ══ */}
      <section className="relative py-28 overflow-hidden">
        <div className="orb orb-blue w-[400px] h-[400px] -right-20 top-20 opacity-18" />
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">

          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-18">
            <span className="section-badge"><Zap className="w-3 h-3" /> What We Do</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] mb-5">
              Services Built for <br className="hidden sm:block" />
              <span className="gradient-text">Creators</span>
            </h2>
            <p className="text-[var(--text-muted)] text-lg max-w-lg mx-auto leading-relaxed">
              Every service is crafted with pixel-perfect precision and delivered with speed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="glass-card p-8 lg:p-10 relative overflow-hidden group cursor-default">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[18px]"
                  style={{ background: `radial-gradient(circle at 25% 35%, ${s.glow}, transparent 65%)` }} />
                <span className="absolute top-6 right-6 text-[0.68rem] font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70">
                  {s.tag}
                </span>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-7 group-hover:scale-110 transition-transform duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.4)]`}>
                  <s.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-[var(--text-muted)] leading-relaxed text-sm mb-7">{s.desc}</p>
                <Link href="/order" className="inline-flex items-center gap-2 text-[var(--brand-purple-soft)] text-sm font-semibold hover:gap-3 transition-all duration-200">
                  Get a Quote <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY US ══ */}
      <section className="relative py-28 overflow-hidden">
        <div className="orb orb-cyan w-[380px] h-[380px] -left-20 top-0 opacity-15" />
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="gradient-border">
            <div className="gradient-border-inner rounded-[17px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-[17px] overflow-hidden">
                <div className="p-10 lg:p-14">
                  <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <span className="section-badge"><Star className="w-3 h-3" /> Why Pixelora</span>
                    <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-[-0.04em] mb-5 leading-tight">
                      We Don&apos;t Just Print.
                      <br /><span className="gradient-text">We Create.</span>
                    </h2>
                    <p className="text-[var(--text-muted)] text-base leading-relaxed mb-8">
                      5+ years delivering pixel-perfect results for brands across Africa and beyond.
                      Fast, collaborative, and obsessively quality-focused.
                    </p>
                    <ul className="space-y-3.5 mb-9">
                      {whyUs.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                          <CheckCircle2 className="w-4 h-4 text-[var(--brand-purple-soft)] flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link href="/order" className="btn-gradient px-8 py-3.5 rounded-full text-sm inline-flex">
                      <span className="flex items-center gap-2">Request a Quote <ArrowRight className="w-4 h-4" /></span>
                    </Link>
                  </motion.div>
                </div>
                {/* Right — decorative */}
                <div className="relative hidden md:flex items-center justify-center bg-[rgba(124,58,237,0.04)] border-l border-white/5 p-12">
                  <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="relative w-64 h-64">
                    <motion.div className="absolute inset-0 rounded-full border border-dashed border-[rgba(124,58,237,0.2)]"
                      animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
                    <motion.div className="absolute inset-10 rounded-full border border-dashed border-[rgba(37,99,235,0.18)]"
                      animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
                    <div className="absolute inset-20 rounded-full bg-gradient-to-br from-violet-600/20 to-blue-600/20 flex flex-col items-center justify-center border border-[rgba(124,58,237,0.25)] backdrop-blur-sm">
                      <Sparkles className="w-8 h-8 text-violet-400 mb-1" />
                      <span className="font-display text-white text-xs font-bold text-center leading-tight">Pixel<br/>Perfect</span>
                    </div>
                    {[0, 90, 180, 270].map((deg) => (
                      <motion.div key={deg}
                        className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-violet-500 to-blue-500"
                        style={{
                          top: `calc(50% - 6px + ${Math.sin((deg * Math.PI) / 180) * 112}px)`,
                          left: `calc(50% - 6px + ${Math.cos((deg * Math.PI) / 180) * 112}px)`,
                          boxShadow: "0 0 12px rgba(124,58,237,0.8)",
                        }}
                        animate={{ scale: [1, 1.6, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: deg / 400 }} />
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="relative py-28 overflow-hidden">
        <div className="orb orb-pink w-[350px] h-[350px] right-0 top-0 opacity-15" />
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16">
            <span className="section-badge"><Star className="w-3 h-3" /> Testimonials</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em]">
              What Our <span className="gradient-text-warm">Clients Say</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="glass-card p-8 flex flex-col gap-5 relative overflow-hidden group">
                <Quote className="absolute top-7 right-7 w-10 h-10 text-[rgba(124,58,237,0.12)] group-hover:text-[rgba(124,58,237,0.25)] transition-colors" fill="currentColor" />
                <div className="flex gap-1 mb-1">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-amber-400" fill="currentColor" />)}
                </div>
                <p className="text-[var(--text-muted)] leading-relaxed text-[0.9rem] italic flex-1">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-5 border-t border-[rgba(255,255,255,0.06)]">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.grad} flex items-center justify-center text-white text-xs font-bold font-display flex-shrink-0 ring-2 ring-[rgba(124,58,237,0.35)]`}>{t.av}</div>
                  <div>
                    <p className="font-display text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-[var(--text-faint)] text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="relative py-28 overflow-hidden">
        <div className="orb orb-violet w-[600px] h-[600px] left-1/4 -top-48 opacity-25" />
        <div className="orb orb-blue   w-[300px] h-[300px] right-1/4 bottom-0 opacity-15" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex justify-center mb-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center shadow-[0_0_40px_rgba(124,58,237,0.5)]" style={{ animation: "pulse-glow 3s ease-in-out infinite" }}>
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] mb-7 text-balance leading-tight">
              Ready to bring your<br />
              <span className="gradient-text">vision</span> to life?
            </h2>
            <p className="text-[var(--text-muted)] text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              Submit your project and our team will respond within 24 hours with a tailored quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/order" className="btn-gradient px-12 py-4 rounded-full text-[0.95rem]">
                <span className="flex items-center gap-2">Start a Project <ArrowRight className="w-4 h-4" /></span>
              </Link>
              <Link href="/contact" className="btn-outline px-12 py-4 rounded-full text-[0.95rem]">
                Talk to Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
