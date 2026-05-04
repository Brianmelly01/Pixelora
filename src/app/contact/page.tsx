"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Sparkles } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const schema = z.object({
  name:    z.string().min(2, "Name is required"),
  email:   z.string().email("Valid email required"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
type FormData = z.infer<typeof schema>;

const contactInfo = [
  { icon: Mail,   label: "Email",            value: "hello@pixelora.com",      href: "mailto:hello@pixelora.com" },
  { icon: Phone,  label: "Phone / WhatsApp", value: "+254 700 000 000",        href: "https://wa.me/254700000000" },
  { icon: MapPin, label: "Location",         value: "Nairobi, Kenya",          href: "https://maps.google.com/?q=Nairobi,Kenya" },
  { icon: Clock,  label: "Business Hours",   value: "Mon–Fri, 8AM – 6PM EAT",  href: null },
];

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const socials = [
  { Icon: InstagramIcon, href: "#", label: "Instagram" },
  { Icon: TwitterIcon,   href: "#", label: "Twitter / X" },
  { Icon: LinkedInIcon,  href: "#", label: "LinkedIn" },
];

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent]       = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

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
    <div className="min-h-screen pt-36 pb-32 relative overflow-hidden">
      <div className="orb orb-purple w-96 h-96 -top-20 -left-20 opacity-30" />
      <div className="orb orb-cyan   w-80 h-80 bottom-20 right-0  opacity-20" />

      <div className="max-w-6xl mx-auto px-8 lg:px-12">

        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-20">
          <span className="section-badge"><MessageSquare className="w-3 h-3" /> Contact</span>
          <h1 className="font-display tracking-display text-5xl md:text-6xl font-black mb-6">
            Let&apos;s <span className="gradient-text">Talk</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto leading-relaxed">
            Have a project in mind? We&apos;d love to hear about it. Reach out and let&apos;s create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* ── Left: Info column ── */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info, i) => (
              <motion.div key={info.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="glass-card p-6 flex items-center gap-5 group hover:scale-[1.015] transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-[0_4px_16px_rgba(147,51,234,0.35)]">
                  <info.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[var(--text-muted)] text-[0.7rem] uppercase tracking-wider mb-1">{info.label}</div>
                  {info.href ? (
                    <a href={info.href} target="_blank" rel="noopener noreferrer"
                      className="text-white font-medium text-sm hover:text-[var(--color-primary-light)] transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-white font-medium text-sm">{info.value}</span>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Socials */}
            <motion.div custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="glass-card p-6">
              <h3 className="text-white font-semibold mb-5 text-xs uppercase tracking-[0.12em] font-display">Follow Us</h3>
              <div className="flex gap-3">
                {socials.map(({ Icon, label, href }) => (
                  <a key={label} href={href} aria-label={label}
                    className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--color-primary-light)] hover:scale-110 transition-all duration-200">
                    <Icon />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Response time */}
            <motion.div custom={5} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="gradient-border">
              <div className="gradient-border-inner rounded-[19px] p-7 text-center">
                <div className="font-display text-5xl font-black gradient-text mb-2 tracking-tight">&lt; 24h</div>
                <div className="text-[var(--text-secondary)] text-sm">Average response time</div>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Form ── */}
          <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="lg:col-span-3 glass-card p-8 md:p-12">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ ease: [0.34, 1.56, 0.64, 1] as const }}>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(147,51,234,0.5)]">
                    <Send className="w-7 h-7 text-white" />
                  </div>
                </motion.div>
                <h3 className="font-display text-2xl font-bold mb-3">Message Sent!</h3>
                <p className="text-[var(--text-secondary)] mb-8 max-w-xs mx-auto text-sm leading-relaxed">
                  Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <button onClick={() => setSent(false)} className="btn-gradient px-7 py-3.5 rounded-full text-sm">
                  <span>Send Another Message</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-[var(--text-secondary)] mb-2.5 font-medium">
                      Name <span className="text-[var(--color-primary-light)]">*</span>
                    </label>
                    <input id="contact-name" {...register("name")} placeholder="John Doe" className="form-input" />
                    {errors.name && <p className="text-red-400 text-xs mt-2">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm text-[var(--text-secondary)] mb-2.5 font-medium">
                      Email <span className="text-[var(--color-primary-light)]">*</span>
                    </label>
                    <input id="contact-email" {...register("email")} type="email" placeholder="you@example.com" className="form-input" />
                    {errors.email && <p className="text-red-400 text-xs mt-2">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[var(--text-secondary)] mb-2.5 font-medium">
                    Subject <span className="text-[var(--color-primary-light)]">*</span>
                  </label>
                  <input id="contact-subject" {...register("subject")} placeholder="What's this about?" className="form-input" />
                  {errors.subject && <p className="text-red-400 text-xs mt-2">{errors.subject.message}</p>}
                </div>

                <div>
                  <label className="block text-sm text-[var(--text-secondary)] mb-2.5 font-medium">
                    Message <span className="text-[var(--color-primary-light)]">*</span>
                  </label>
                  <textarea id="contact-message" {...register("message")} rows={6}
                    placeholder="Tell us about your project or ask us anything…" className="form-input resize-none" />
                  {errors.message && <p className="text-red-400 text-xs mt-2">{errors.message.message}</p>}
                </div>

                <button id="contact-submit" type="submit" disabled={loading}
                  className="btn-gradient w-full py-4 rounded-full text-sm disabled:opacity-60 disabled:cursor-not-allowed">
                  <span className="flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }} className="inline-block">
                          <Sparkles className="w-4 h-4" />
                        </motion.span>
                        Sending…
                      </>
                    ) : (
                      <><Send className="w-4 h-4" /> Send Message</>
                    )}
                  </span>
                </button>

                <p className="text-[var(--text-muted)] text-xs text-center">
                  We respect your privacy. Your information will never be shared.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
