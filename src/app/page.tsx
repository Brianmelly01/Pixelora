"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shirt, Palette, Package, Wand2, ArrowRight, Star,
  Zap, Sparkles, Users, Award, Clock, CheckCircle2, ChevronRight, Quote,
} from "lucide-react";
import { fadeUp, heroText, scaleIn } from "@/lib/animations";

const services = [
  { icon: Shirt,   title: "Clothing Printing", description: "DTF, screen printing & embroidery on any fabric. Bulk orders welcome with express 48h turnaround.", color: "from-purple-600 to-violet-700", glowColor: "rgba(147,51,234,0.25)", tag: "Most Popular", tagStyle: "bg-[rgba(147,51,234,0.2)] text-purple-300 border-[rgba(147,51,234,0.3)]" },
  { icon: Palette, title: "Branding",           description: "Full brand identity — logos, color systems, brand guidelines & visual strategy from concept to launch.", color: "from-blue-600 to-cyan-500", glowColor: "rgba(37,99,235,0.2)", tag: "End-to-End", tagStyle: "bg-[rgba(37,99,235,0.15)] text-blue-300 border-[rgba(37,99,235,0.3)]" },
  { icon: Package, title: "Merchandise",        description: "Mugs, tote bags, stickers, keychains & more. Custom merch for events, campaigns & brands.", color: "from-pink-600 to-rose-600", glowColor: "rgba(219,39,119,0.2)", tag: "Wholesale", tagStyle: "bg-[rgba(219,39,119,0.15)] text-pink-300 border-[rgba(219,39,119,0.3)]" },
  { icon: Wand2,   title: "Custom Designs",     description: "Bespoke artwork, illustrations, posters & one-of-a-kind creative concepts tailored to your vision.", color: "from-amber-500 to-orange-600", glowColor: "rgba(245,158,11,0.2)", tag: "Bespoke", tagStyle: "bg-[rgba(245,158,11,0.12)] text-amber-300 border-[rgba(245,158,11,0.25)]" },
];

const stats = [
  { value: "500+",   label: "Happy Clients",        icon: Users, color: "text-purple-400" },
  { value: "1,200+", label: "Projects Completed",   icon: Award, color: "text-blue-400" },
  { value: "48h",    label: "Avg. Turnaround",       icon: Clock, color: "text-cyan-400" },
  { value: "4.9★",   label: "Client Rating",         icon: Star,  color: "text-amber-400" },
];

const whyUs = [
  "Premium materials & professional inks",
  "Express 48–72h turnaround available",
  "Free design consultation included",
  "Bulk discounts for large orders",
  "100% satisfaction guarantee",
  "Dedicated project manager assigned",
];

const testimonials = [
  { name: "Amara Osei",       role: "CEO, NovaBrand",    text: "Pixelora completely transformed our brand identity. The attention to detail and creativity is unmatched. Every deliverable exceeded our expectations.",           avatar: "AO", grad: "from-purple-600 to-blue-600" },
  { name: "James Mwangi",     role: "Event Organiser",   text: "Ordered 300 custom t-shirts for our festival. Quality was incredible and delivery was on time. The team was responsive and professional throughout.",           avatar: "JM", grad: "from-blue-600 to-cyan-500" },
  { name: "Fatima Al-Rashid", role: "Fashion Designer",  text: "The design team understood my vision perfectly — first try. Their creative instinct is rare. I will definitely be working with Pixelora again.",              avatar: "FA", grad: "from-pink-600 to-purple-600" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">
        <div className="orb orb-purple w-[800px] h-[800px] top-[-300px] left-[-250px] opacity-30" />
        <div className="orb orb-blue   w-[650px] h-[650px] top-[-200px] right-[-220px] opacity-22" />
        <div className="orb orb-pink   w-[450px] h-[450px] bottom-[-100px] left-1/2 -translate-x-1/2 opacity-18" />
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 90% 70% at 50% 45%, transparent 35%, var(--bg-base) 100%)" }} />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-10 text-center">
          <motion.div custom={0} variants={heroText} initial="hidden" animate="visible" className="flex justify-center mb-8">
            <span className="section-badge"><Sparkles className="w-3 h-3" /> Creative Design &amp; Printing Studio</span>
          </motion.div>

          <motion.h1 custom={1} variants={heroText} initial="hidden" animate="visible"
            className="font-display tracking-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.05] mb-8 text-balance">
            From <span className="gradient-text">pixel</span>
            <br className="hidden sm:block" />
            {" "}to{" "}
            <span className="relative inline-block">
              product
              <motion.span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }} />
            </span>
          </motion.h1>

          <motion.p custom={2} variants={heroText} initial="hidden" animate="visible"
            className="text-[var(--text-secondary)] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            We transform your boldest ideas into stunning physical products.
            Custom clothing, branding, merch &amp; creative designs — all under one roof.
          </motion.p>

          <motion.div custom={3} variants={heroText} initial="hidden" animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24">
            <Link href="/order" className="btn-gradient px-9 py-4 rounded-full text-sm">
              <span className="flex items-center gap-2">Start Your Project <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link href="/portfolio" className="btn-outline px-9 py-4 rounded-full text-sm flex items-center gap-1">
              View Portfolio <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div custom={4} variants={heroText} initial="hidden" animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map(({ value, label, icon: Icon, color }) => (
              <div key={label} className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300">
                <Icon className={`w-5 h-5 ${color} mx-auto mb-3`} />
                <div className="font-display text-2xl md:text-3xl font-extrabold gradient-text mb-1 tracking-tight">{value}</div>
                <div className="text-[var(--text-muted)] text-xs leading-snug">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2.2 }}>
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-[rgba(147,51,234,0.6)] to-transparent" />
          <span className="text-[var(--text-muted)] text-[0.65rem] uppercase tracking-widest">Scroll</span>
        </motion.div>
      </section>

      {/* ══ SERVICES ══════════════════════════════════════════════ */}
      <section id="services" className="relative py-32 overflow-hidden">
        <div className="orb orb-blue w-96 h-96 -right-24 top-24 opacity-15" />
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-20">
            <span className="section-badge"><Zap className="w-3 h-3" /> What We Do</span>
            <h2 className="font-display tracking-display text-4xl md:text-5xl font-bold mb-5">
              Services Built for <span className="gradient-text">Creators</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto leading-relaxed">
              Every service is crafted with pixel-perfect precision and delivered with speed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div key={service.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                whileHover={{ scale: 1.015 }} className="glass-card p-8 lg:p-10 group relative overflow-hidden cursor-default">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px] pointer-events-none"
                  style={{ background: `radial-gradient(circle at 30% 40%, ${service.glowColor}, transparent 65%)` }} />
                <span className={`absolute top-6 right-6 text-[0.68rem] font-semibold px-3 py-1 rounded-full border ${service.tagStyle}`}>
                  {service.tag}
                </span>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-7 group-hover:scale-110 transition-transform duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.3)]`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6 text-sm">{service.description}</p>
                <Link href="/order" className="inline-flex items-center gap-2 text-[var(--color-primary-light)] text-sm font-semibold hover:gap-3 transition-all duration-200">
                  Get a Quote <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY US ════════════════════════════════════════════════ */}
      <section className="relative py-32 overflow-hidden">
        <div className="orb orb-cyan w-96 h-96 -left-24 top-10 opacity-12" />
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="gradient-border">
            <div className="gradient-border-inner px-8 md:px-16 py-16 rounded-[19px] grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <span className="section-badge"><Star className="w-3 h-3" /> Why Pixelora</span>
                <h2 className="font-display tracking-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  We Don&apos;t Just Print.{" "}<span className="gradient-text">We Create.</span>
                </h2>
                <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-10">
                  With over 5 years of experience in creative design and printing, we&apos;ve helped hundreds of brands stand out.
                  Our process is collaborative, fast, and pixel-perfect.
                </p>
                <ul className="space-y-4 mb-10">
                  {whyUs.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[var(--text-secondary)] text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-primary-light)] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/order" className="btn-gradient px-8 py-4 rounded-full text-sm inline-flex">
                  <span className="flex items-center gap-2">Request a Quote <ArrowRight className="w-4 h-4" /></span>
                </Link>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}
                className="relative flex items-center justify-center">
                <div className="relative w-72 h-72">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-dashed border-[rgba(147,51,234,0.25)]" />
                  <motion.div animate={{ rotate: -360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-8 rounded-full border border-dashed border-[rgba(37,99,235,0.2)]" />
                  <div className="absolute inset-16 rounded-full bg-gradient-to-br from-purple-500/15 to-blue-500/15 backdrop-blur-sm flex flex-col items-center justify-center text-center border border-[rgba(147,51,234,0.2)]">
                    <Zap className="w-9 h-9 text-purple-400 mb-2" fill="rgba(147,51,234,0.3)" />
                    <span className="font-display text-white font-bold text-sm leading-tight">Pixel<br />Perfect</span>
                    <span className="text-[var(--text-muted)] text-[0.65rem] mt-1">Every. Time.</span>
                  </div>
                  {[0, 90, 180, 270].map((deg) => (
                    <motion.div key={deg} className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-purple-500 to-blue-500"
                      style={{ top: `calc(50% - 6px + ${Math.sin((deg * Math.PI) / 180) * 128}px)`, left: `calc(50% - 6px + ${Math.cos((deg * Math.PI) / 180) * 128}px)`, boxShadow: "0 0 12px rgba(147,51,234,0.7)" }}
                      animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: deg / 360 }} />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══════════════════════════════════════════ */}
      <section className="relative py-32 overflow-hidden">
        <div className="orb orb-pink w-80 h-80 right-0 top-8 opacity-12" />
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <span className="section-badge"><Star className="w-3 h-3" /> Testimonials</span>
            <h2 className="font-display tracking-display text-4xl md:text-5xl font-bold">
              What Our <span className="gradient-text-warm">Clients Say</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="glass-card p-8 flex flex-col gap-5 group hover:scale-[1.015] transition-transform duration-300 relative overflow-hidden">
                <Quote className="absolute top-7 right-7 w-8 h-8 text-[rgba(147,51,234,0.15)] group-hover:text-[rgba(147,51,234,0.28)] transition-colors" fill="currentColor" />
                <div className="flex gap-1">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-amber-400" fill="currentColor" />)}</div>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm italic flex-1">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[rgba(147,51,234,0.1)]">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.grad} flex items-center justify-center text-white text-xs font-bold flex-shrink-0 ring-2 ring-[rgba(147,51,234,0.3)]`}>{t.avatar}</div>
                  <div>
                    <div className="text-white text-sm font-semibold font-display">{t.name}</div>
                    <div className="text-[var(--text-muted)] text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════ */}
      <section className="relative py-32 overflow-hidden">
        <div className="orb orb-purple w-[500px] h-[500px] left-1/4 -top-32 opacity-25" />
        <div className="orb orb-blue   w-[300px] h-[300px] right-1/4 bottom-0 opacity-15" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex justify-center mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(147,51,234,0.5)]">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
            </div>
            <h2 className="font-display tracking-display text-4xl md:text-6xl font-black mb-6 leading-tight text-balance">
              Ready to bring your <span className="gradient-text">vision</span> to life?
            </h2>
            <p className="text-[var(--text-secondary)] text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              Submit your project details and our team will get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/order" className="btn-gradient px-10 py-4 rounded-full text-sm">
                <span className="flex items-center gap-2">Start a Project <ArrowRight className="w-4 h-4" /></span>
              </Link>
              <Link href="/contact" className="btn-outline px-10 py-4 rounded-full text-sm">Talk to Us</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
