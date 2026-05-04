"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { Upload, Send, Sparkles, CheckCircle, Shirt, Palette, Package, Wand2, Shield, Clock, Users, Star } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const schema = z.object({
  name:        z.string().min(2, "Name is required"),
  email:       z.string().email("Valid email required"),
  phone:       z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  description: z.string().min(20, "Please describe your project (at least 20 characters)"),
  budget:      z.string().optional(),
  deadline:    z.string().optional(),
});
type FormData = z.infer<typeof schema>;

const projectTypes = [
  { value: "clothing-printing", label: "Clothing Printing", icon: Shirt,   desc: "T-shirts, hoodies, jerseys" },
  { value: "branding",          label: "Branding",           icon: Palette, desc: "Logos & brand identity" },
  { value: "merchandise",       label: "Merchandise",        icon: Package, desc: "Mugs, bags & more" },
  { value: "custom-design",     label: "Custom Design",      icon: Wand2,   desc: "Bespoke illustrations" },
];

const budgetRanges = ["Under $100", "$100 – $500", "$500 – $1,000", "$1,000 – $5,000", "$5,000+", "Let's discuss"];

const trustPoints = [
  { icon: Shield, text: "100% satisfaction guarantee" },
  { icon: Clock,  text: "24h response time" },
  { icon: Users,  text: "500+ happy clients served" },
  { icon: Star,   text: "4.9★ average client rating" },
];

const faqs = [
  { q: "How long does production take?", a: "Standard turnaround is 5–7 business days. Express 48h options are available for most products." },
  { q: "Can I request a sample first?",  a: "Yes. We offer sample proofs for bulk orders before full production begins." },
  { q: "What file formats do you accept?", a: "We accept PNG, JPG, PDF, AI, PSD, SVG, and ZIP files up to 20MB." },
];

export default function OrderPage() {
  const [selectedType, setSelectedType] = useState("");
  const [file, setFile]         = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);
  const [charCount, setCharCount] = useState(0);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([k, v]) => formData.append(k, v ?? ""));
      if (file) formData.append("file", file);
      const res = await fetch("/api/order", { method: "POST", body: formData });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
      toast.success("🎉 Your request has been submitted!");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="orb orb-purple w-96 h-96 top-1/4 left-1/4 opacity-30" />
        <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ ease: [0.34, 1.56, 0.64, 1] as const }} className="text-center max-w-lg">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mx-auto mb-7 shadow-[0_0_40px_rgba(147,51,234,0.5)]">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="font-display tracking-display text-4xl font-black mb-5">Request Received!</h2>
          <p className="text-[var(--text-secondary)] text-lg mb-3 leading-relaxed">
            Thank you for reaching out. Our team will review your project and get back to you within{" "}
            <span className="text-[var(--color-primary-light)] font-semibold">24 hours</span>.
          </p>
          <p className="text-[var(--text-muted)] text-sm mb-10">A confirmation has been sent to MellyOS for tracking.</p>
          <a href="/" className="btn-gradient px-8 py-4 rounded-full text-sm inline-flex"><span>Back to Home</span></a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-28 relative overflow-hidden">
      <div className="orb orb-purple w-96 h-96 -top-20 -left-20 opacity-30" />
      <div className="orb orb-blue   w-80 h-80 bottom-0 right-0   opacity-20" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-20">
          <span className="section-badge"><Sparkles className="w-3 h-3" /> Get a Quote</span>
          <h1 className="font-display tracking-display text-5xl md:text-6xl font-black mb-6">
            Start Your <span className="gradient-text">Project</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto leading-relaxed">
            Fill in the details below and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* ── Left: Trust sidebar ── */}
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp} className="lg:col-span-2 space-y-5">
            <div className="glass-card p-7">
              <h3 className="font-display font-semibold text-white text-xs mb-6 uppercase tracking-[0.12em]">Why Work With Us</h3>
              <ul className="space-y-5">
                {trustPoints.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-xl bg-[rgba(147,51,234,0.15)] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-[var(--color-primary-light)]" />
                    </div>
                    <span className="text-[var(--text-secondary)] text-sm">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="gradient-border">
              <div className="gradient-border-inner rounded-[19px] p-7 text-center">
                <div className="font-display text-5xl font-black gradient-text mb-2 tracking-tight">&lt; 24h</div>
                <div className="text-[var(--text-secondary)] text-sm">Average response time</div>
              </div>
            </div>

            <div className="glass-card p-7">
              <h3 className="font-display font-semibold text-white text-xs mb-6 uppercase tracking-[0.12em]">Quick FAQs</h3>
              <div className="space-y-6">
                {faqs.map(({ q, a }) => (
                  <div key={q}>
                    <p className="text-white text-sm font-medium mb-1.5">{q}</p>
                    <p className="text-[var(--text-muted)] text-xs leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 px-5 py-4 rounded-xl border border-[rgba(147,51,234,0.15)] bg-[rgba(147,51,234,0.05)]">
              <Shield className="w-4 h-4 text-[var(--color-primary-light)] flex-shrink-0" />
              <p className="text-[var(--text-muted)] text-xs leading-relaxed">Your information is private and will never be shared with third parties.</p>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div initial="hidden" animate="visible" custom={1} variants={fadeUp} className="lg:col-span-3 glass-card p-8 md:p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-[var(--text-secondary)] mb-2.5 font-medium">
                    Full Name <span className="text-[var(--color-primary-light)]">*</span>
                  </label>
                  <input id="input-name" {...register("name")} placeholder="John Doe" className="form-input" />
                  {errors.name && <p className="text-red-400 text-xs mt-2">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm text-[var(--text-secondary)] mb-2.5 font-medium">
                    Email Address <span className="text-[var(--color-primary-light)]">*</span>
                  </label>
                  <input id="input-email" {...register("email")} type="email" placeholder="you@example.com" className="form-input" />
                  {errors.email && <p className="text-red-400 text-xs mt-2">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm text-[var(--text-secondary)] mb-2.5 font-medium">
                  Phone Number <span className="text-[var(--text-muted)] font-normal">(optional)</span>
                </label>
                <input id="input-phone" {...register("phone")} placeholder="+254 700 000 000" className="form-input" />
              </div>

              <div>
                <label className="block text-sm text-[var(--text-secondary)] mb-3.5 font-medium">
                  Project Type <span className="text-[var(--color-primary-light)]">*</span>
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {projectTypes.map(({ value, label, icon: Icon, desc }) => (
                    <button key={value} type="button" id={`project-type-${value}`}
                      onClick={() => { setSelectedType(value); setValue("projectType", value, { shouldValidate: true }); }}
                      className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all text-sm font-medium ${
                        selectedType === value
                          ? "border-[var(--color-primary)] bg-[rgba(147,51,234,0.12)] text-white shadow-[0_0_16px_rgba(147,51,234,0.25)]"
                          : "border-[rgba(147,51,234,0.18)] text-[var(--text-muted)] hover:border-[rgba(147,51,234,0.4)] hover:text-[var(--text-secondary)]"
                      }`}>
                      <Icon className={`w-5 h-5 ${selectedType === value ? "text-[var(--color-primary-light)]" : "text-[var(--text-muted)]"} transition-colors`} />
                      <span className="text-xs text-center font-semibold leading-tight">{label}</span>
                      <span className="text-[0.65rem] text-center text-[var(--text-muted)] leading-tight hidden sm:block">{desc}</span>
                    </button>
                  ))}
                </div>
                {errors.projectType && <p className="text-red-400 text-xs mt-2">{errors.projectType.message}</p>}
              </div>

              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label className="text-sm text-[var(--text-secondary)] font-medium">
                    Project Description <span className="text-[var(--color-primary-light)]">*</span>
                  </label>
                  <span className="text-[var(--text-muted)] text-xs">{charCount}/500</span>
                </div>
                <textarea id="input-description"
                  {...register("description", { onChange: (e) => setCharCount(e.target.value.length) })}
                  rows={5} maxLength={500}
                  placeholder="Describe your project, goals, style preferences, quantity, and any other details..."
                  className="form-input resize-none" />
                {errors.description && <p className="text-red-400 text-xs mt-2">{errors.description.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-[var(--text-secondary)] mb-2.5 font-medium">Budget Range</label>
                  <select id="input-budget" {...register("budget")} className="form-input appearance-none cursor-pointer">
                    <option value="" className="bg-[#0a001c]">Select range…</option>
                    {budgetRanges.map((b) => <option key={b} value={b} className="bg-[#0a001c]">{b}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-[var(--text-secondary)] mb-2.5 font-medium">
                    Deadline <span className="text-[var(--text-muted)] font-normal">(optional)</span>
                  </label>
                  <input id="input-deadline" {...register("deadline")} type="date" className="form-input" style={{ colorScheme: "dark" }} />
                </div>
              </div>

              <div>
                <label className="block text-sm text-[var(--text-secondary)] mb-2.5 font-medium">
                  Attach Reference File <span className="text-[var(--text-muted)] font-normal">(optional)</span>
                </label>
                <label htmlFor="file-upload"
                  className={`flex flex-col items-center justify-center gap-3 border-2 border-dashed rounded-xl p-8 cursor-pointer transition-all ${
                    file ? "border-[var(--color-primary)] bg-[rgba(147,51,234,0.08)]"
                         : "border-[rgba(147,51,234,0.2)] hover:border-[rgba(147,51,234,0.45)] hover:bg-[rgba(147,51,234,0.04)]"
                  }`}>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${file ? "bg-[rgba(147,51,234,0.2)]" : "bg-[rgba(255,255,255,0.04)]"}`}>
                    <Upload className={`w-5 h-5 ${file ? "text-[var(--color-primary-light)]" : "text-[var(--text-muted)]"}`} />
                  </div>
                  {file ? (
                    <span className="text-[var(--color-primary-light)] text-sm font-medium">{file.name}</span>
                  ) : (
                    <>
                      <span className="text-[var(--text-secondary)] text-sm">Click to upload or drag &amp; drop</span>
                      <span className="text-[var(--text-muted)] text-xs">PNG, JPG, PDF, AI, PSD up to 20MB</span>
                    </>
                  )}
                  <input id="file-upload" type="file" className="hidden" accept=".png,.jpg,.jpeg,.pdf,.ai,.psd,.svg,.zip" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
                </label>
              </div>

              <button id="submit-order" type="submit" disabled={loading}
                className="btn-gradient w-full py-4 rounded-full text-sm disabled:opacity-60 disabled:cursor-not-allowed">
                <span className="flex items-center justify-center gap-2">
                  {loading ? (
                    <>
                      <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }} className="inline-block">
                        <Sparkles className="w-4 h-4" />
                      </motion.span>
                      Sending Request…
                    </>
                  ) : (
                    <><Send className="w-4 h-4" /> Submit Project Request</>
                  )}
                </span>
              </button>

              <p className="text-[var(--text-muted)] text-xs text-center">
                By submitting, you agree to our Terms of Service. We&apos;ll never share your info.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
