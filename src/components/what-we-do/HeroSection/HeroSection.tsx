"use client";

import React from "react";
import { m } from "framer-motion";
import { Container } from "@/components/common";
import { HERO_DATA } from "./data";
import Link from "next/link";

const pageEntryVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const textLineReveal = {
  hidden: { opacity: 0, y: 16 },
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
  return (
    <m.section
      variants={pageEntryVariants}
      initial="hidden"
      animate="show"
      className="relative bg-white py-24 md:py-32 border-b border-slate-100 font-sans overflow-hidden"
    >
      {/* Premium subtle light blue radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[600px] h-[600px] bg-[rgba(11,61,145,0.02)] rounded-full blur-[100px] pointer-events-none" />

      <Container>
        <m.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          {/* Breadcrumbs */}
          <m.div
            variants={textLineReveal}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0B3D91]/5 border border-[#0B3D91]/10 text-xs font-semibold mb-6 shadow-sm text-slate-500"
          >
            <Link href="/" className="hover:text-[#0B3D91] transition-colors font-bold">Home</Link>
            <span className="text-slate-400 font-normal">/</span>
            <span className="text-[#0B3D91] font-bold">What We Do</span>
          </m.div>

          {/* Sequential Heading Lines */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A2540] leading-[1.1] mb-6 select-none flex flex-wrap justify-center gap-x-3">
            <m.span variants={textLineReveal}>
              {HERO_DATA.heading.line1}
            </m.span>
            <m.span variants={textLineReveal} className="text-[#0B3D91]">
              {HERO_DATA.heading.line2}
            </m.span>
          </h1>

          {/* Description Subtitle */}
          <m.p
            variants={textLineReveal}
            className="text-slate-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl font-medium"
          >
            {HERO_DATA.subtitle}
          </m.p>
        </m.div>
      </Container>
    </m.section>
  );
};

HeroSection.displayName = "HeroSection";
