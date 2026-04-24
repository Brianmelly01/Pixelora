"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shirt, Palette, Package, Wand2, ArrowRight, Star,
  Zap, Sparkles, ChevronRight, Users, Award, Clock,
} from "lucide-react";
import { fadeUp } from "@/lib/animations";

const services = [
  {
    icon: Shirt,
    title: "Clothing Printing",
    description: "High-quality DTF, screen printing & embroidery on any fabric. Bulk orders welcome.",
    color: "from-purple-500 to-violet-600",
    glow: "rgba(168,85,247,0.3)",
    tag: "Most Popular",
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Full brand identity — logos, color systems, brand guidelines & visual strategy.",
    color: "from-blue-500 to-cyan-500",
    glow: "rgba(59,130,246,0.3)",
    tag: "End-to-End",
  },
  {
    icon: Package,
    title: "Merchandise",
    description: "Mugs, tote bags, stickers, keychains & more. Custom merch for events & brands.",
    color: "from-pink-500 to-rose-500",
    glow: "rgba(236,72,153,0.3)",
    tag: "Wholesale",
  },
  {
    icon: Wand2,
    title: "Custom Designs",
    description: "Bespoke artwork, illustrations, posters, and one-of-a-kind creative concepts.",
    color: "from-amber-400 to-orange-500",
    glow: "rgba(251,191,36,0.3)",
    tag: "Bespoke",
  },
];

const stats = [
  { value: "500+", label: "Happy Clients", icon: Users },
  { value: "1200+", label: "Projects Done", icon: Award },
  { value: "48h", label: "Avg Turnaround", icon: Clock },
  { value: "4.9★", label: "Client Rating", icon: Star },
];

const testimonials = [
  {
    name: "Amara Osei",
    role: "CEO, NovaBrand",
    text: "Pixelora completely transformed our brand identity. The attention to detail and creativity is unmatched.",
    avatar: "AO",
  },
  {
    name: "James Mwangi",
    role: "Event Organiser",
    text: "Ordered 300 custom t-shirts for our festival. Quality was amazing and delivery was on time!",
    avatar: "JM",
  },
  {
    name: "Fatima Al-Rashid",
    role: "Fashion Designer",
    text: "The design team understood my vision perfectly. Will definitely work with Pixelora again.",
    avatar: "FA",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        <div className="orb orb-purple w-[700px] h-[700px] top-[-200px] left-[-200px] opacity-40" />
        <div className="orb orb-blue w-[600px] h-[600px] top-[-100px] right-[-200px] opacity-30" />
        <div className="orb orb-pink w-[400px] h-[400px] bottom-[-100px] left-1/2 -translate-x-1/2 opacity-25" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(168,85,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <span className="section-badge">
              <Sparkles className="w-3.5 h-3.5" />
              Creative Design & Printing Studio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-6"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            From{" "}
            <span className="gradient-text">pixel</span>
            <br />
            to{" "}
            <span className="relative inline-block">
              product
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We transform your boldest ideas into stunning physical products.
            Custom clothing, branding, merch & creative designs — all under one roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/order" className="btn-gradient px-8 py-4 rounded-full text-base">
              <span className="flex items-center gap-2">
                Start Your Project <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/portfolio"
              className="flex items-center gap-2 px-8 py-4 rounded-full border border-[rgba(168,85,247,0.35)] text-gray-300 hover:text-white hover:border-purple-400 transition-all text-base"
            >
              View Portfolio <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {stats.map(({ value, label, icon: Icon }) => (
              <div
                key={label}
                className="glass-card p-5 text-center group hover:scale-105 transition-transform"
              >
                <Icon className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                <div
                  className="text-2xl font-bold gradient-text mb-1"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {value}
                </div>
                <div className="text-gray-500 text-xs">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
          <span className="text-gray-500 text-xs">Scroll</span>
        </motion.div>
      </section>

      {/* ── Services ─────────────────────────────────────────────── */}
      <section id="services" className="relative py-24 px-6 overflow-hidden">
        <div className="orb orb-purple w-96 h-96 -right-20 top-20 opacity-20" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="section-badge">
              <Zap className="w-3.5 h-3.5" /> What We Do
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Services Built for <span className="gradient-text">Creators</span>
            </h2>
            <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto">
              Every service is crafted with pixel-perfect precision and delivered with speed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-8 group relative overflow-hidden cursor-default"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at 30% 40%, ${service.glow}, transparent 70%)`,
                  }}
                />
                <span className="absolute top-5 right-5 text-xs font-semibold px-3 py-1 rounded-full bg-[rgba(168,85,247,0.15)] text-purple-300 border border-[rgba(168,85,247,0.25)]">
                  {service.tag}
                </span>
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-5">{service.description}</p>
                <Link
                  href="/order"
                  className="inline-flex items-center gap-2 text-purple-400 text-sm font-medium hover:gap-3 transition-all"
                >
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ───────────────────────────────────────────────── */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="orb orb-cyan w-96 h-96 -left-20 top-10 opacity-15" />
        <div className="max-w-7xl mx-auto">
          <div className="gradient-border">
            <div className="gradient-border-inner px-8 md:px-16 py-14 rounded-[19px] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="section-badge">
                  <Star className="w-3.5 h-3.5" /> Why Pixelora
                </span>
                <h2
                  className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  We Don&apos;t Just Print.{" "}
                  <span className="gradient-text">We Create.</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  With over 5 years of experience in creative design and printing, we&apos;ve helped
                  hundreds of brands stand out. Our process is collaborative, fast, and pixel-perfect.
                </p>
                <ul className="space-y-4">
                  {[
                    "Premium quality materials & inks",
                    "48h–72h express turnaround",
                    "Free design consultation",
                    "Bulk discounts available",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/order"
                  className="btn-gradient px-8 py-4 rounded-full text-sm mt-8 inline-flex"
                >
                  <span className="flex items-center gap-2">
                    Request a Quote <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="relative w-72 h-72">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-dashed border-[rgba(168,85,247,0.3)]"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-6 rounded-full border border-dashed border-[rgba(59,130,246,0.25)]"
                  />
                  <div className="absolute inset-12 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm flex flex-col items-center justify-center text-center">
                    <Zap className="w-10 h-10 text-purple-400 mb-2" fill="rgba(168,85,247,0.4)" />
                    <span
                      className="text-white font-bold text-lg"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      Pixel Perfect
                    </span>
                    <span className="text-gray-400 text-xs mt-1">Every. Single. Time.</span>
                  </div>
                  {[0, 90, 180, 270].map((deg) => (
                    <motion.div
                      key={deg}
                      className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-purple-500 to-blue-500"
                      style={{
                        top: `calc(50% - 6px + ${Math.sin((deg * Math.PI) / 180) * 130}px)`,
                        left: `calc(50% - 6px + ${Math.cos((deg * Math.PI) / 180) * 130}px)`,
                      }}
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: deg / 360 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="orb orb-pink w-80 h-80 right-0 top-10 opacity-15" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="section-badge">
              <Star className="w-3.5 h-3.5" /> Testimonials
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              What Our <span className="gradient-text-pink">Clients Say</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card p-7 flex flex-col gap-5 group hover:scale-[1.02] transition-transform"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed text-sm italic">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────── */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="orb orb-purple w-96 h-96 left-1/4 -top-20 opacity-30" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2
              className="text-4xl md:text-6xl font-black text-white mb-6"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Ready to bring your <span className="gradient-text">vision</span> to life?
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Submit your project and we&apos;ll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/order" className="btn-gradient px-10 py-4 rounded-full text-base">
                <span className="flex items-center gap-2">
                  Start a Project <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              <Link
                href="/contact"
                className="px-10 py-4 rounded-full border border-[rgba(168,85,247,0.35)] text-gray-300 hover:text-white hover:border-purple-400 transition-all text-base"
              >
                Talk to Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
