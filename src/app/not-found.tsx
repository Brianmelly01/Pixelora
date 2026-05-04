"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="orb orb-purple w-[500px] h-[500px] top-0 left-0 opacity-30" />
      <div className="orb orb-blue w-[400px] h-[400px] bottom-0 right-0 opacity-20" />

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center relative z-10 max-w-lg"
      >
        {/* 404 Number */}
        <div className="font-display text-[120px] md:text-[160px] font-black leading-none gradient-text select-none mb-2">
          404
        </div>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
          Oops! The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-gradient px-8 py-4 rounded-full text-sm">
            <span className="flex items-center gap-2">
              <Home className="w-4 h-4" /> Back to Home
            </span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[rgba(168,85,247,0.35)] text-gray-300 hover:text-white hover:border-purple-400 transition-all text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}
