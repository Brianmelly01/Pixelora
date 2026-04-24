"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shirt, Palette, Package, Wand2, ArrowRight, Check, Sparkles, Zap } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const services = [
  {
    icon: Shirt,
    title: "Clothing Printing",
    description: "From DTF and screen printing to embroidery, we handle it all with premium quality. Perfect for events, brands, and bulk orders.",
    features: ["DTF & Screen Printing", "Embroidery", "Minimum 1 piece", "Bulk discounts", "Express 48h delivery", "All fabric types"],
    color: "from-purple-500 to-violet-600",
    popular: true,
  },
  {
    icon: Palette,
    title: "Branding",
    description: "We craft complete brand identities from logo design and colour systems to brand guidelines and visual strategy.",
    features: ["Logo design (3 concepts)", "Brand guidelines", "Color & typography system", "Business card design", "Social media kit", "Source files included"],
    color: "from-blue-500 to-cyan-500",
    popular: false,
  },
  {
    icon: Package,
    title: "Merchandise",
    description: "Custom branded merchandise for your business, events, and campaigns. Mugs, totes, stickers, keychains, and more.",
    features: ["Custom mugs & bottles", "Tote bags & backpacks", "Stickers & decals", "Keychains & pins", "Notebooks & pens", "Bulk pricing available"],
    color: "from-pink-500 to-rose-500",
    popular: false,
  },
  {
    icon: Wand2,
    title: "Custom Designs",
    description: "Bespoke artwork, illustrations, poster design, and unique creative concepts tailored to your exact vision.",
    features: ["Custom illustrations", "Poster & flyer design", "Digital art", "Print-ready files", "Unlimited revisions", "Commercial license"],
    color: "from-amber-400 to-orange-500",
    popular: false,
  },
];

const process = [
  { step: "01", title: "Submit Request", desc: "Fill out our order form with your project details." },
  { step: "02", title: "Consultation", desc: "Our team reviews and reaches out within 24 hours." },
  { step: "03", title: "Design", desc: "We craft your design and share a mockup for approval." },
  { step: "04", title: "Production", desc: "Once approved, we print and produce your order." },
  { step: "05", title: "Delivery", desc: "Your finished product is delivered to your doorstep." },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
      <div className="orb orb-purple w-96 h-96 -top-20 -left-20 opacity-30" />
      <div className="orb orb-blue w-96 h-96 top-60 -right-20 opacity-20" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-center mb-20"
        >
          <span className="section-badge">
            <Zap className="w-3.5 h-3.5" /> Services
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-5" style={{ fontFamily: "Outfit, sans-serif" }}>
            Everything You Need to <span className="gradient-text">Stand Out</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Professional creative services delivered with speed, precision, and passion.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative glass-card p-8 overflow-hidden group hover:scale-[1.01] transition-transform"
            >
              {service.popular && (
                <div className="absolute top-5 right-5 flex items-center gap-1.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  <Sparkles className="w-3 h-3" /> Most Popular
                </div>
              )}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>
                {service.title}
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-2.5 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-300 text-sm">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/order" className="btn-gradient px-6 py-3 rounded-full text-sm inline-flex">
                <span className="flex items-center gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-center mb-14"
        >
          <span className="section-badge">
            <Sparkles className="w-3.5 h-3.5" /> How It Works
          </span>
          <h2 className="text-4xl font-bold text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
            Our Simple <span className="gradient-text">5-Step Process</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {process.map((step, i) => (
            <motion.div
              key={step.step}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="glass-card p-6 text-center group hover:scale-105 transition-transform relative"
            >
              {i < process.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-2 z-10 text-purple-500 text-lg">→</div>
              )}
              <div className="text-4xl font-black gradient-text mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>
                {step.step}
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm" style={{ fontFamily: "Outfit, sans-serif" }}>
                {step.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
