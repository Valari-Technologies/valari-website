"use client";

import React, { useState, useEffect, useRef } from "react";
import { m } from "framer-motion";
import { Container } from "@/components/common";
import { TEAM_MEMBERS } from "./data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export const TeamCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate dataset to support infinite marquee loop
  const totalOriginal = TEAM_MEMBERS.length;
  const marqueeItems = [...TEAM_MEMBERS, ...TEAM_MEMBERS, ...TEAM_MEMBERS];

  // Drag state
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);

  // Infinite Scroll / Marquee Loop
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animateMarquee = (time: number) => {
      if (!isPaused && !isDraggingRef.current) {
        const delta = time - lastTime;
        // Restores normal slow elegant marquee speed
        const scrollStep = 0.10 * delta;
        container.scrollLeft += scrollStep;

        const cardWidth = 324; // 300px width + 24px gap
        const originalWidth = totalOriginal * cardWidth;

        // Reset seamlessly when scrolled past the first duplicate set
        if (container.scrollLeft >= originalWidth * 2) {
          container.scrollLeft -= originalWidth;
        }
      }
      lastTime = time;
      animationFrameId = requestAnimationFrame(animateMarquee);
    };

    animationFrameId = requestAnimationFrame(animateMarquee);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, totalOriginal]);

  // Track active department tab based on center card scroll position
  // Carousel Controls
  const handlePrev = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.scrollBy({ left: -324 * 2, behavior: "smooth" });
  };

  const handleNext = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.scrollBy({ left: 324 * 2, behavior: "smooth" });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - container.offsetLeft;
    scrollLeftStartRef.current = container.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    e.preventDefault();
    const container = scrollContainerRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    container.scrollLeft = scrollLeftStartRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    isDraggingRef.current = true;
    startXRef.current = e.touches[0].pageX - container.offsetLeft;
    scrollLeftStartRef.current = container.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    const container = scrollContainerRef.current;
    if (!container) return;
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    container.scrollLeft = scrollLeftStartRef.current - walk;
  };

  return (
    <section
      id="team-carousel-section"
      className="relative bg-slate-50/50 py-28 border-b border-slate-100 font-sans overflow-hidden select-none w-full"
    >
      {/* Dynamic Grid Overlay & Soft Mesh Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,61,145,0.02)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <Container>
        {/* Entrance Section Eyebrow & Title */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center mb-16">
          <m.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#0B3D91] text-xs font-extrabold tracking-widest uppercase mb-3 block"
          >
            MEET THE TEAM
          </m.span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] mb-4">
            Our Enterprise Specialists
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
            Collaborating seamlessly in an infinite cycle of innovation. Hover to pause marquee.
          </p>
        </div>



        {/* Outer Marquee Track Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative w-full flex items-center justify-center min-h-[320px]"
        >
          {/* Floating Action Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 z-30 w-12 h-12 rounded-full border border-slate-200 bg-white/90 backdrop-blur-md shadow-sm hover:scale-105 hover:bg-white hover:border-[#0B3D91]/20 transition-all flex items-center justify-center cursor-pointer outline-none"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={20} className="text-slate-600" />
          </button>

          {/* Marquee viewport track with absolute offset scroll bar wrapper */}
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUpOrLeave}
            className="w-full flex items-center gap-6 overflow-x-hidden scrollbar-none py-6 select-none cursor-grab active:cursor-grabbing"
          >
            {marqueeItems.map((member, idx) => (
              <m.div
                key={`${member.name}-${idx}`}
                className="w-[300px] shrink-0 bg-white border border-slate-200/80 rounded-[28px] p-6 shadow-md transition-all duration-300 flex flex-col justify-between hover:shadow-[0_24px_50px_rgba(11,61,145,0.08)] hover:border-[#0B3D91]/25 hover:-translate-y-3"
              >
                <div className="flex flex-col items-center">
                  {/* Circular Photo Box */}
                  <div className="w-32 h-32 rounded-full overflow-hidden relative mb-5 bg-slate-50 border border-slate-150 shadow-inner shrink-0">
                    <Image
                      src={member.imageSrc}
                      alt={member.name}
                      fill
                      loading="lazy"
                      className="object-cover object-center transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  {/* Centered Name and Designation */}
                  <h3 className="text-base sm:text-lg font-bold text-[#0A2540] text-center leading-tight mb-1">
                    {member.name}
                  </h3>
                  <span className="text-xs font-bold text-[#0B3D91] text-center block">
                    {member.designation}
                  </span>
                  {/* <span className="text-xs font-bold text-[#0B3D91] text-center block">
                    {member.experience}
                  </span> */}
                </div>
              </m.div>
            ))}
          </div>

          {/* Floating Action Navigation Buttons */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 z-30 w-12 h-12 rounded-full border border-slate-200 bg-white/90 backdrop-blur-md shadow-sm hover:scale-105 hover:bg-white hover:border-[#0B3D91]/20 transition-all flex items-center justify-center cursor-pointer outline-none"
            aria-label="Scroll Right"
          >
            <ChevronRight size={20} className="text-slate-600" />
          </button>
        </div>


      </Container>
    </section>
  );
};
