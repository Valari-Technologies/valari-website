"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { m, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Container } from "@/components/common";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GALLERY_ITEMS = [
  {
    title: "Corporate Office Hub",
    description: "Our modern engineering headquarters designed to foster creative collaboration.",
    imageSrc: "/images/corporate-office-hub.webp",
  },
  {
    title: "Team Collaboration Sprint",
    description: "Daily synchronization and design blueprints discussions with team developers.",
    imageSrc: "/images/team-collaboration-sprint.webp",
  },
  {
    title: "Executive Strategic Meeting",
    description: "Formulating digital roadmap strategies for our enterprise consulting partners.",
    imageSrc: "/images/executive-strategic-meeting.webp",
  },
  {
    title: "Full-Stack Development Hub",
    description: "Writing clean, server-side optimized codebases using React, Next.js, and Node.",
    imageSrc: "/images/full-stack-development-hub.webp",
  },
  {
    title: "Practical Training Seminar",
    description: "Continuous learning sessions covering serverless APIs, container systems, and AI models.",
    imageSrc: "/images/practical-training-seminar.webp",
  },
];

const fadeZoomVariants = {
  enter: { opacity: 0, scale: 0.98 },
  center: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const OfficeGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Parallax values
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 28, stiffness: 100, mass: 0.9 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const xOffset = useTransform(smoothX, [0, 1], [-8, 8]);
  const yOffset = useTransform(smoothY, [0, 1], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
    setIsHovered(false);
  };

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1));
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1));
  }, []);

  // Autoplay Effect
  useEffect(() => {
    if (!isHovered) {
      autoplayTimer.current = setInterval(handleNext, 4000);
    }
    return () => {
      if (autoplayTimer.current) {
        clearInterval(autoplayTimer.current);
      }
    };
  }, [isHovered, handleNext]);

  return (
    <section id="gallery" className="bg-white py-24 border-b border-slate-100 font-sans">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Description & Controls */}
          <div className="lg:col-span-5 text-left flex flex-col items-start gap-6">
            <span className="text-[#0B3D91] text-xs font-extrabold tracking-widest uppercase mb-1 block">
              Workspace
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] leading-tight">
              Our Office & Culture Gallery
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
              Take a visual tour inside Valari Technologies. We cultivate an ecosystem designed
              to empower engineering speed, collaboration, and continuous technical training.
            </p>

            {/* Active Item Indicator text */}
            <div className="mt-4 border-l-2 border-[#0B3D91] pl-4">
              <h4 className="text-base font-bold text-slate-800">
                {GALLERY_ITEMS[currentIndex].title}
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                {GALLERY_ITEMS[currentIndex].description}
              </p>
            </div>

            {/* Controls Button Row */}
            <div className="flex items-center gap-3.5 mt-4 select-none">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-slate-50 transition-colors cursor-pointer outline-none shadow-sm"
                aria-label="Previous slide"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-slate-50 transition-colors cursor-pointer outline-none shadow-sm"
                aria-label="Next slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Column: Parallax Autoplay Carousel */}
          <div className="lg:col-span-7 w-full flex flex-col gap-4">
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => setIsHovered(true)}
              className="relative w-full aspect-[16/11] rounded-3xl overflow-hidden shadow-lg bg-slate-100 select-none cursor-pointer"
            >
              <AnimatePresence mode="popLayout" initial={false}>
                <m.div
                  key={currentIndex}
                  variants={fadeZoomVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  style={{
                    x: xOffset,
                    y: yOffset,
                  }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={GALLERY_ITEMS[currentIndex].imageSrc}
                    alt={GALLERY_ITEMS[currentIndex].title}
                    fill
                    loading="lazy"
                    className="object-cover object-center rounded-3xl"
                    sizes="(max-w-1024px) 100vw, 55vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                </m.div>
              </AnimatePresence>
            </div>

            {/* Nav Dots */}
            <div className="flex items-center justify-center gap-2 select-none">
              {GALLERY_ITEMS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="w-2.5 h-2.5 rounded-full transition-all duration-300 outline-none cursor-pointer"
                  style={{
                    backgroundColor: index === currentIndex ? "#0B3D91" : "#E2E8F0",
                    width: index === currentIndex ? "24px" : "10px",
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

OfficeGallery.displayName = "OfficeGallery";
