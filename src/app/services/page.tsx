"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shirt, Palette, Package, Wand2, ArrowRight, Check, Sparkles, Zap, Clock, MessageSquare } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const services = [
  { icon: Shirt,   title: "Clothing Printing", description: "From DTF and screen printing to embroidery, we handle it all with premium quality. Perfect for events, brands, and bulk orders.", features: ["DTF & Screen Printing", "Embroidery on all fabrics", "Minimum 1 piece", "Bulk order discounts", "Express 48h delivery", "All fabric types"], color: "from-purple-600 to-violet-700", glowColor: "rgba(147,51,234,0.2)", popular: true },
  { icon: Palette, title: "Branding",           description: "We craft complete brand identities from logo design and colour systems to brand guidelines and visual strategy.", features: ["Logo design (3 concepts)", "Full brand guidelines", "Color & typography system", "Business card design", "Social media kit", "Source files included"], color: "from-blue-600 to-cyan-500", glowColor: "rgba(37,99,235,0.15)", popular: false },
  { icon: Package, title: "Merchandise",        description: "Custom branded merchandise for your business, events, and campaigns. Mugs, totes, stickers, keychains, and more.", features: ["Custom mugs & bottles", "Tote bags & backpacks", "Stickers & decals", "Keychains & pins", "Notebooks & pens", "Bulk pricing available"], color: "from-pink-600 to-rose-600", glowColor: "rgba(219,39,119,0.15)", popular: false },
  { icon: Wand2,   title: "Custom Designs",     description: "Bespoke artwork, illustrations, poster design, and unique creative concepts tailored to your exact vision.", features: ["Custom illustrations", "Poster & flyer design", "Digital art creation", "Print-ready file formats", "Unlimited revisions", "Commercial license"], color: "from-amber-500 to-orange-600", glowColor: "rgba(245,158,11,0.15)", popular: false },
];

const process = [
  { step: "01", title: "Submit Request", desc: "Fill out our order form with your project details, references, and goals.", icon: MessageSquare },
  { step: "02", title: "Consultation",   desc: "Our team reviews and reaches out within 24 hours to discuss your vision.", icon: Clock },
  { step: "03", title: "Design",         desc: "We craft your design and share a mockup for review and approval.", icon: Sparkles },
  { step: "04", title: "Production",     desc: "Once approved, we print and produce your order with precision.", icon: Zap },
  { step: "05", title: "Delivery",       desc: "Your finished product is delivered to your doorstep, on time.", icon: Check },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-36 pb-28 relative overflow-hidden">
      <div className="orb orb-purple w-96 h-96 -top-20 -left-20 opacity-30" />
      <div className="orb orb-blue   w-96 h-96 top-60 -right-20 opacity-20" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">

        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-24">
          <span className="section-badge"><Zap className="w-3 h-3" /> Services</span>
          <h1 className="font-display tracking-display text-5xl md:text-6xl font-black mb-6">
            Everything You Need to <span className="gradient-text">Stand Out</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto leading-relaxed">
            Professional creative services delivered with speed, precision, and passion.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
          {services.map((service, i) => (
            <motion.div key={service.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="relative glass-card p-8 lg:p-10 overflow-hidden group hover:scale-[1.012] transition-transform duration-300">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px] pointer-events-none"
                style={{ background: `radial-gradient(circle at 20% 30%, ${service.glowColor}, transparent 65%)` }} />

              {service.popular && (
                <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-[0.68rem] font-semibold px-3 py-1.5 rounded-full shadow-[0_0_16px_rgba(147,51,234,0.4)]">
                  <Sparkles className="w-3 h-3" /> Most Popular
                </div>
              )}

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-7 group-hover:scale-110 transition-transform duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.3)]`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h2 className="font-display text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-7 text-sm">{service.description}</p>

              <ul className="space-y-3 mb-9">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-[var(--text-secondary)] text-sm">
                    <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/order" className="btn-gradient px-6 py-3 rounded-full text-sm inline-flex">
                <span className="flex items-center gap-2">Get Started <ArrowRight className="w-3.5 h-3.5" /></span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
          <span className="section-badge"><Sparkles className="w-3 h-3" /> How It Works</span>
          <h2 className="font-display tracking-display text-4xl md:text-5xl font-bold mb-4">
            Our Simple <span className="gradient-text">5-Step Process</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
            From idea to finished product — seamlessly handled every step of the way.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-20">
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[rgba(147,51,234,0.35)] to-transparent" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {process.map((step, i) => (
              <motion.div key={step.step} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="glass-card p-7 text-center group hover:scale-105 transition-transform duration-300 relative flex flex-col items-center">
                <div className="relative mb-5">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(147,51,234,0.4)] relative z-10">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[var(--bg-base)] border border-[rgba(147,51,234,0.4)] flex items-center justify-center text-[0.6rem] font-bold text-[var(--color-primary-light)]">
                    {i + 1}
                  </span>
                </div>
                <div className="font-display text-3xl font-black gradient-text mb-3 tracking-tight">{step.step}</div>
                <h3 className="font-display text-white font-semibold mb-2 text-sm">{step.title}</h3>
                <p className="text-[var(--text-muted)] text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
          <div className="gradient-border inline-block">
            <div className="gradient-border-inner rounded-[19px] px-12 py-10 text-center">
              <h3 className="font-display text-2xl font-bold mb-3">Ready to get started?</h3>
              <p className="text-[var(--text-secondary)] text-sm mb-7 max-w-sm mx-auto leading-relaxed">
                Submit your project request today and we&apos;ll be in touch within 24 hours.
              </p>
              <Link href="/order" className="btn-gradient px-8 py-3.5 rounded-full text-sm inline-flex">
                <span className="flex items-center gap-2">Request a Quote <ArrowRight className="w-4 h-4" /></span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
