"use client";

import React, { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Container } from "@/components/common";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    text: "Valari Technologies transformed our business website into a modern, high-performing platform. The entire process was smooth and professionally managed.",
    author: "Arun K.",
    role: "Founder - Startup",
    rating: 5
  },
  {
    text: "Our e-commerce website was delivered ahead of schedule. The UI is clean, responsive, and our customers love the shopping experience.",
    author: "Divya R.",
    role: "Client - E-commerce",
    rating: 5
  },
  {
    text: "The team developed our final-year project with excellent documentation and guided us throughout every phase. Highly recommended for students.",
    author: "Naveen G",
    role: "Student - Final Year CSE",
    rating: 5
  },
  {
    text: "Valari automated several of our business operations, reducing manual work and improving productivity across departments.",
    author: "Priya M.",
    role: "Client - Healthcare",
    rating: 4
  },
];

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = React.useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  }, []);

  const handleNext = React.useCallback(() => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  }, []);

  // Autoplay loop
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const active = TESTIMONIALS[activeIndex];

  return (
    <section className="relative bg-slate-50/50 py-24 border-b border-slate-100 font-sans overflow-hidden">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center mb-16">
          <span className="text-[#0B3D91] text-xs font-extrabold tracking-widest uppercase mb-3 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] mb-4">
            Client Success Stories
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
            See how our transparent development sprints and quality standards drive value for our enterprise partners.
          </p>
        </div>

        {/* Testimonials Slider Frame */}
        <div className="relative max-w-4xl mx-auto bg-white border border-slate-150 rounded-[32px] p-8 sm:p-12 shadow-md flex flex-col justify-between min-h-[300px] select-none text-left">
          {/* Quote Icon watermark */}
          <div className="absolute right-8 top-8 text-slate-100/80 pointer-events-none">
            <Quote size={80} className="stroke-[1.5]" />
          </div>

          <div className="flex-1 relative">
            <AnimatePresence mode="wait">
              <m.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6"
              >
                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="#F4C542" className="text-[#F4C542]" />
                  ))}
                </div>

                {/* Body Text */}
                <p className="text-slate-700 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                  &quot;{active.text}&quot;
                </p>

                {/* Author Credentials */}
                <div className="flex flex-col border-t border-slate-100 pt-6">
                  <span className="text-sm font-bold text-[#0A2540]">
                    {active.author}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">
                    {active.role}
                  </span>
                </div>
              </m.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 mt-8 relative z-10">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-slate-200 text-slate-400 hover:text-[#0B3D91] hover:border-[#0B3D91] flex items-center justify-center transition-colors duration-300 cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-slate-200 text-slate-400 hover:text-[#0B3D91] hover:border-[#0B3D91] flex items-center justify-center transition-colors duration-300 cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
