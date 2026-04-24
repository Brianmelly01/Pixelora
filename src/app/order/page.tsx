"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import {
  Upload, Send, Sparkles, CheckCircle, Shirt, Palette, Package, Wand2
} from "lucide-react";
import { fadeUp } from "@/lib/animations";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  description: z.string().min(20, "Please describe your project (at least 20 characters)"),
  budget: z.string().optional(),
  deadline: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const projectTypes = [
  { value: "clothing-printing", label: "Clothing Printing", icon: Shirt },
  { value: "branding", label: "Branding", icon: Palette },
  { value: "merchandise", label: "Merchandise", icon: Package },
  { value: "custom-design", label: "Custom Design", icon: Wand2 },
];

const budgetRanges = [
  "Under $100",
  "$100 – $500",
  "$500 – $1,000",
  "$1,000 – $5,000",
  "$5,000+",
  "Let's discuss",
];




export default function OrderPage() {
  const [selectedType, setSelectedType] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register, handleSubmit, setValue,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([k, v]) => formData.append(k, v ?? ""));
      if (file) formData.append("file", file);

      const res = await fetch("/api/order", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Request failed");

      setSubmitted(true);
      toast.success("🎉 Your request has been submitted!");
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="orb orb-purple w-96 h-96 top-1/4 left-1/4 opacity-30" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-lg"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-black text-white mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
            Request Received!
          </h2>
          <p className="text-gray-400 text-lg mb-2">
            Thank you for reaching out. Our team will review your project and get back to you within{" "}
            <span className="text-purple-400 font-semibold">24 hours</span>.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            A confirmation has been sent to MellyOS for tracking.
          </p>
          <a href="/" className="btn-gradient px-8 py-3.5 rounded-full text-sm inline-flex">
            <span>Back to Home</span>
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
      <div className="orb orb-purple w-96 h-96 -top-20 -left-20 opacity-30" />
      <div className="orb orb-blue w-80 h-80 bottom-0 right-0 opacity-20" />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden" animate="visible" variants={fadeUp}
          className="text-center mb-12"
        >
          <span className="section-badge">
            <Sparkles className="w-3.5 h-3.5" /> Get a Quote
          </span>
          <h1
            className="text-5xl md:text-6xl font-black text-white mb-5"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Start Your <span className="gradient-text">Project</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Fill in the form below and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial="hidden" animate="visible" custom={1} variants={fadeUp}
          className="glass-card p-8 md:p-10"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-gray-300 mb-2 font-medium">
                  Full Name <span className="text-purple-400">*</span>
                </label>
                <input
                  id="input-name"
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
                  Email Address <span className="text-purple-400">*</span>
                </label>
                <input
                  id="input-email"
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

            {/* Phone */}
            <div>
              <label className="block text-sm text-gray-300 mb-2 font-medium">
                Phone Number (optional)
              </label>
              <input
                id="input-phone"
                {...register("phone")}
                placeholder="+254 700 000 000"
                className="form-input"
              />
            </div>

            {/* Project Type */}
            <div>
              <label className="block text-sm text-gray-300 mb-3 font-medium">
                Project Type <span className="text-purple-400">*</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {projectTypes.map(({ value, label, icon: Icon }) => (
                  <button
                    key={value}
                    type="button"
                    id={`project-type-${value}`}
                    onClick={() => {
                      setSelectedType(value);
                      setValue("projectType", value, { shouldValidate: true });
                    }}
                    className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all text-sm font-medium ${
                      selectedType === value
                        ? "border-purple-500 bg-[rgba(168,85,247,0.15)] text-white"
                        : "border-[rgba(168,85,247,0.2)] text-gray-400 hover:border-purple-400 hover:text-gray-300"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-xs text-center">{label}</span>
                  </button>
                ))}
              </div>
              {errors.projectType && (
                <p className="text-red-400 text-xs mt-1">{errors.projectType.message}</p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm text-gray-300 mb-2 font-medium">
                Project Description <span className="text-purple-400">*</span>
              </label>
              <textarea
                id="input-description"
                {...register("description")}
                rows={5}
                placeholder="Describe your project, goals, style preferences, quantity, and any other details..."
                className="form-input resize-none"
              />
              {errors.description && (
                <p className="text-red-400 text-xs mt-1">{errors.description.message}</p>
              )}
            </div>

            {/* Budget + Deadline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-gray-300 mb-2 font-medium">
                  Budget Range
                </label>
                <select
                  id="input-budget"
                  {...register("budget")}
                  className="form-input appearance-none"
                >
                  <option value="" className="bg-[#0f0020]">Select range…</option>
                  {budgetRanges.map((b) => (
                    <option key={b} value={b} className="bg-[#0f0020]">{b}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2 font-medium">
                  Deadline (optional)
                </label>
                <input
                  id="input-deadline"
                  {...register("deadline")}
                  type="date"
                  className="form-input"
                  style={{ colorScheme: "dark" }}
                />
              </div>
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm text-gray-300 mb-2 font-medium">
                Attach Reference File (optional)
              </label>
              <label
                htmlFor="file-upload"
                className={`flex flex-col items-center justify-center gap-3 border-2 border-dashed rounded-xl p-8 cursor-pointer transition-all ${
                  file
                    ? "border-purple-400 bg-[rgba(168,85,247,0.08)]"
                    : "border-[rgba(168,85,247,0.25)] hover:border-purple-400 hover:bg-[rgba(168,85,247,0.05)]"
                }`}
              >
                <Upload className="w-6 h-6 text-purple-400" />
                {file ? (
                  <span className="text-purple-300 text-sm font-medium">{file.name}</span>
                ) : (
                  <>
                    <span className="text-gray-400 text-sm">
                      Click to upload or drag & drop
                    </span>
                    <span className="text-gray-600 text-xs">PNG, JPG, PDF, AI, PSD up to 20MB</span>
                  </>
                )}
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  accept=".png,.jpg,.jpeg,.pdf,.ai,.psd,.svg,.zip"
                  onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                />
              </label>
            </div>

            {/* Submit */}
            <button
              id="submit-order"
              type="submit"
              disabled={loading}
              className="btn-gradient w-full py-4 rounded-full text-base disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span className="flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="inline-block"
                    >
                      ⚡
                    </motion.span>
                    Sending Request…
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Submit Project Request
                  </>
                )}
              </span>
            </button>

            <p className="text-gray-600 text-xs text-center">
              By submitting, you agree to our Terms of Service. We'll never share your info.
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
