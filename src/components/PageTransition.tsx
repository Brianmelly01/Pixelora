"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/* ─── Page slide/fade variants ─── */
const pageVariants = {
  initial: {
    opacity: 0,
    y: 18,
    scale: 0.985,
    filter: "blur(4px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.52,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.99,
    filter: "blur(2px)",
    transition: {
      duration: 0.28,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/* ─── Progress bar ─── */
function NavigationBar({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="nav-bar"
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
          style={{ transformOrigin: "left center" }}
          className="fixed inset-x-0 top-0 h-[3px] z-[9999] pointer-events-none"
          aria-hidden
        >
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(90deg, #7C3AED 0%, #4F46E5 40%, #06B6D4 80%, #A78BFA 100%)",
              boxShadow: "0 0 20px rgba(124,58,237,0.8), 0 0 40px rgba(124,58,237,0.4)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showBar, setShowBar] = useState(false);
  const [prevPath, setPrevPath] = useState(pathname);

  useEffect(() => {
    if (pathname !== prevPath) {
      setShowBar(true);
      const t = setTimeout(() => {
        setShowBar(false);
        setPrevPath(pathname);
      }, 600);
      return () => clearTimeout(t);
    }
  }, [pathname, prevPath]);

  return (
    <>
      <NavigationBar show={showBar} />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ willChange: "transform, opacity, filter" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
