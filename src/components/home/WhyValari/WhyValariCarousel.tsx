"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { WHY_VALARI_CAROUSEL_ITEMS } from "@/data/why-valari-carousel";

const slideVariants = {
  enter: {
    opacity: 0,
    scale: 0.94,
    filter: "blur(4px)",
  },
  center: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    scale: 1.06,
    filter: "blur(4px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const arrowVariants = {
  hidden: (direction: "left" | "right") => ({
    opacity: 0,
    x: direction === "left" ? -16 : 16,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const WhyValariCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % WHY_VALARI_CAROUSEL_ITEMS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? WHY_VALARI_CAROUSEL_ITEMS.length - 1 : prev - 1
    );
  }, []);

  const handleDotClick = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Autoplay handler
  useEffect(() => {
    if (!isHovered) {
      autoplayTimer.current = setInterval(handleNext, 3000);
    }
    return () => {
      if (autoplayTimer.current) {
        clearInterval(autoplayTimer.current);
      }
    };
  }, [isHovered, handleNext]);

  return (
    <div
      className="relative w-full max-w-md lg:max-w-none rounded-[24px] border border-white/10 shadow-[0_24px_50px_rgba(4,18,44,0.6)] aspect-[16/11] bg-slate-900/50 overflow-hidden group select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slide Container Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <m.div
            key={currentIndex}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <m.div
              className="relative w-full h-full transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: isHovered ? "scale(1.03)" : "scale(1)",
                filter: isHovered ? "brightness(1.04)" : "brightness(1)",
              }}
            >
              <Image
                src={WHY_VALARI_CAROUSEL_ITEMS[currentIndex].src}
                alt={WHY_VALARI_CAROUSEL_ITEMS[currentIndex].alt}
                fill
                priority={currentIndex === 0}
                loading={currentIndex === 0 ? undefined : "lazy"}
                className="object-cover object-center"
                sizes="(max-w-1024px) 100vw, 55vw"
              />
              {/* Subtle dark gradient overlay to improve contrast */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </m.div>
          </m.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrow Controls (Slide & Fade in on hover) */}
      <AnimatePresence>
        {isHovered && (
          <>
            {/* Previous Slide Button */}
            <m.button
              custom="left"
              variants={arrowVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/40 hover:bg-slate-950/70 border border-white/10 text-white flex items-center justify-center transition-colors shadow-[0_4px_12px_rgba(0,0,0,0.3)] z-20 outline-none"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={20} />
            </m.button>

            {/* Next Slide Button */}
            <m.button
              custom="right"
              variants={arrowVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/40 hover:bg-slate-950/70 border border-white/10 text-white flex items-center justify-center transition-colors shadow-[0_4px_12px_rgba(0,0,0,0.3)] z-20 outline-none"
              aria-label="Next Slide"
            >
              <ChevronRight size={20} />
            </m.button>
          </>
        )}
      </AnimatePresence>

      {/* Animated Indicators Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20">
        {WHY_VALARI_CAROUSEL_ITEMS.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className="relative h-2 rounded-full transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] outline-none"
              style={{
                width: isActive ? "24px" : "8px",
                backgroundColor: isActive ? "#0B3D91" : "rgba(255, 255, 255, 0.45)",
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
};

WhyValariCarousel.displayName = "WhyValariCarousel";
