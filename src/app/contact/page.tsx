"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import {
  Mail, Phone, MapPin, Send, MessageSquare,
  Globe, MessageCircle, ExternalLink, Clock, Sparkles
} from "lucide-react";
import { fadeUp } from "@/lib/animations";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
type FormData = z.infer<typeof schema>;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@pixelora.com",
    href: "mailto:hello@pixelora.com",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+254 700 000 000",
    href: "https://wa.me/254700000000",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nairobi, Kenya",
    href: "https://maps.google.com",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon–Fri, 8AM – 6PM EAT",
    href: null,
    color: "from-amber-400 to-orange-500",
  },
];

const socials = [
  { icon: Globe, label: "Instagram", href: "#" },
  { icon: MessageCircle, label: "Twitter / X", href: "#" },
  { icon: ExternalLink, label: "LinkedIn", href: "#" },
];



export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const {
    register, handleSubmit, reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSent(true);
      reset();
      toast.success("Message sent! We'll reply within 24 hours.");
    } catch {
      toast.error("Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Orbs */}
      <div className="orb orb-purple w-96 h-96 -top-20 -left-20 opacity-30" />
      <div className="orb orb-cyan w-80 h-80 bottom-20 right-0 opacity-20" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="section-badge">
            <MessageSquare className="w-3.5 h-3.5" /> Contact
          </span>
          <h1
            className="text-5xl md:text-6xl font-black text-white mb-5"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Let's <span className="gradient-text">Talk</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Have a project in mind? We'd love to hear about it. Reach out and let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — info */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card p-5 flex items-center gap-4 group hover:scale-[1.02] transition-transform"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <info.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-gray-500 text-xs mb-0.5">{info.label}</div>
                  {info.href ? (
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium text-sm hover:text-purple-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-white font-medium text-sm">{info.value}</span>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Socials */}
            <motion.div
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="glass-card p-6"
            >
              <h3
                className="text-white font-semibold mb-4 text-sm uppercase tracking-widest"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Follow Us
              </h3>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-purple-400 hover:scale-110 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Response time badge */}
            <motion.div
              custom={5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="gradient-border"
            >
              <div className="gradient-border-inner rounded-[19px] p-5 text-center">
                <div className="text-3xl font-black gradient-text mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>
                  &lt; 24h
                </div>
                <div className="text-gray-400 text-sm">Average response time</div>
              </div>
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-3 glass-card p-8 md:p-10"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-2xl font-bold text-white mb-2"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  Message Sent!
                </h3>
                <p className="text-gray-400 mb-6">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="btn-gradient px-6 py-3 rounded-full text-sm"
                >
                  <span>Send Another</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-gray-300 mb-2 font-medium">
                      Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      {...register("name")}
                      placeholder="John Doe"
                      className="form-input"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-2 font-medium">
                      Email <span className="text-purple-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      {...register("email")}
                      type="email"
                      placeholder="you@example.com"
                      className="form-input"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2 font-medium">
                    Subject <span className="text-purple-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    {...register("subject")}
                    placeholder="What's this about?"
                    className="form-input"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2 font-medium">
                    Message <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    {...register("message")}
                    rows={6}
                    placeholder="Tell us about your project or ask us anything…"
                    className="form-input resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  id="contact-submit"
                  type="submit"
                  disabled={loading}
                  className="btn-gradient w-full py-4 rounded-full text-base disabled:opacity-60"
                >
                  <span className="flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <Sparkles className="w-4 h-4 animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send Message
                      </>
                    )}
                  </span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
