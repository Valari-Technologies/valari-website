"use client";

import { useState, useEffect } from "react";

/**
 * Custom React hook to monitor scroll offset.
 * Returns true if the window has been scrolled past the specified threshold.
 * Re-evaluates when the dependency changes (e.g., path transitions).
 * 
 * @param threshold Scroll offset in pixels before triggering active state
 * @param dependency Optional dependency triggers to force re-evaluation (e.g. pathname)
 * @default 20
 */
export const useScroll = (threshold = 20, dependency?: unknown): boolean => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold, dependency]);

  return scrolled;
};
