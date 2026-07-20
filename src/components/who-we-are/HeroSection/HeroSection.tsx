"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { m } from "framer-motion";
import { Container } from "@/components/common";
import Link from "next/link";

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const headingWord = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    const storySection = document.getElementById("story");
    if (storySection) {
      storySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative bg-white pt-24 pb-20 md:pb-28 border-b border-slate-100 font-sans overflow-hidden select-none"
    >
      {/* Static Background Image with Exact Multi-Layer Readability Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden [mask-image:linear-gradient(to_bottom,black_75%,transparent_98%)] pointer-events-none">
        <Image
          src="/images/growth-hero.webp"
          alt="Building Technology That Drives Business Growth background"
          fill
          priority
          className="object-cover object-[70%_center] md:object-[75%_center] scale-[1.05]"
        />

        {/* Multi-layer readability overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, rgba(255,255,255,0.99) 0%, rgba(255,255,255,0.98) 35%, rgba(255,255,255,0.92) 55%, rgba(255,255,255,0.78) 72%, rgba(255,255,255,0.35) 88%, rgba(255,255,255,0.02) 100%)"
          }}
        />

        {/* Extra readability overlay on Mobile/Tablet */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/85 to-white/40 md:hidden" />
      </div>

      {/* Floating Radial Background Blobs */}
      <m.div
        animate={{
          x: [0, 30, -35, 0],
          y: [0, -20, 20, 0],
          scale: [1, 1.06, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-10 -z-10 w-[550px] h-[550px] bg-[rgba(11,61,145,0.06)] rounded-full blur-[100px] pointer-events-none opacity-[0.12]"
      />

      <Container className="relative z-10">
        <m.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        >
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-7 text-left flex flex-col items-start">
            {/* Small Label */}
            <m.div
              variants={fadeUpItem}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0B3D91]/5 border border-[#0B3D91]/10 text-xs font-semibold mb-6 shadow-sm text-slate-500"
            >
              <Link href="/" className="hover:text-[#0B3D91] transition-colors font-bold">Home</Link>
              <span className="text-slate-400 font-normal">/</span>
              <span className="text-[#0B3D91] font-bold">Who We Areee</span>
            </m.div>

            {/* Split-Word Heading */}
            <m.h1
              variants={fadeUpItem}
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight text-[#0A2540] mb-6"
            >
              {"Building Technology That Drives Business Growth".split(" ").map((word, idx) => (
                <m.span
                  key={idx}
                  variants={headingWord}
                  className="inline-block mr-2.5 last:mr-0"
                >
                  {word}
                </m.span>
              ))}
            </m.h1>

            {/* Description */}
            <m.p
              variants={fadeUpItem}
              className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl font-medium"
            >
              Valari Technologies partners with businesses to build scalable software, cloud
              solutions, automation systems, and digital experiences that accelerate growth and
              long-term success.
            </m.p>

            {/* Buttons */}
            <m.div variants={fadeUpItem} className="flex items-center gap-4 w-full sm:w-auto">
              <button
                onClick={scrollNext}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#0B5ED7] hover:bg-[#0a52be] text-white font-bold rounded-full transition-colors shadow-lg cursor-pointer text-center select-none text-sm"
              >
                Our Journey
              </button>
            </m.div>
          </div>

          {/* Right Column Spacer: Preserves layout grid alignment precisely */}
          <div className="lg:col-span-5 hidden lg:block opacity-0 pointer-events-none h-[400px]" />
        </m.div>
      </Container>
    </section>
  );
};

HeroSection.displayName = "HeroSection";
