"use client";

import React, { ReactNode } from "react";
import { LazyMotion, domMax, AnimatePresence, m } from "framer-motion";
import { usePathname } from "next/navigation";

export interface AnimationProviderProps {
  children: ReactNode;
}

/**
 * Client-side animation wrapper using Framer Motion.
 * Utilizes LazyMotion (domMax bundle size optimization) to ensure better Lighthouse scores
 * and handles AnimatePresence for smooth route transitions.
 */
export const AnimationProvider: React.FC<AnimationProviderProps> = ({ children }) => {
  const pathname = usePathname();
  const [loading, setLoading] = React.useState(false);

  // Trigger loading progress line animation on pathname change
  React.useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setLoading(true);
    });
    const timer = setTimeout(() => setLoading(false), 300);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [pathname]);

  return (
    <LazyMotion features={domMax} strict>
      {/* Top progress loading line */}
      <AnimatePresence>
        {loading && (
          <m.div
            initial={{ width: "0%", opacity: 1 }}
            animate={{ width: "100%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 left-0 h-[3px] bg-[#0B5ED7] z-50 pointer-events-none"
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait" initial={true}>
        <m.div
          key={pathname}
          initial={{ opacity: 0, scale: 0.98, y: 40, filter: "blur(8px)" }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          exit={{
            opacity: 0,
            scale: 0.985,
            y: -20,
            filter: "blur(8px)",
            transition: {
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="flex flex-col flex-grow w-full"
        >
          {children}
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  );
};
