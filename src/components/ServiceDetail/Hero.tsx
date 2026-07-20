"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { m, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { BackButton } from "./BackButton";

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

// Premium image reveal animation
const imageRevealVariants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    rotate: -2,
    clipPath: "inset(15% 15% 15% 15% rounded 24px)",
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    clipPath: "inset(0% 0% 0% 0% rounded 24px)",
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export interface HeroProps {
  title: string;
  badge: string;
  description: string;
  imageSrc: string;
}

export const Hero: React.FC<HeroProps> = ({ title, badge, description, imageSrc }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax motion values
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Interpolate deltas to max 8px shift and max 2° rotation
  const xTranslation = useTransform(smoothX, [0, 1], [-8, 8]);
  const yTranslation = useTransform(smoothY, [0, 1], [-8, 8]);
  const rotation = useTransform(smoothX, [0, 1], [-2, 2]);

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
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-white pt-10 pb-20 md:pb-24 border-b border-slate-100 font-sans overflow-hidden"
    >
      {/* Page Background Motion: Two large floating blurred radial gradients */}
      <m.div
        animate={{
          x: [0, 35, -30, 0],
          y: [0, -25, 25, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-10 -z-10 w-[500px] h-[500px] bg-[rgba(11,61,145,0.06)] rounded-full blur-[100px] pointer-events-none opacity-[0.12]"
      />
      <m.div
        animate={{
          x: [0, -35, 30, 0],
          y: [0, 25, -25, 0],
          scale: [1, 1.06, 0.97, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-10 -z-10 w-[550px] h-[550px] bg-[rgba(244,197,66,0.04)] rounded-full blur-[120px] pointer-events-none opacity-[0.12]"
      />

      <div className="max-w-7xl mx-auto px-8">
        {/* Back Button Container */}
        <div className="mb-10 flex items-center justify-start">
          <BackButton />
        </div>

        <m.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        >
          {/* Left Column: Sequential Copy Text */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Breadcrumb Navigation */}
            <m.div
              variants={fadeUpItem}
              className="flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#639FAB] uppercase mb-4"
            >
              <Link href="/" className="hover:text-[#0B3D91] transition-colors">
                Home
              </Link>
              <ChevronRight size={12} className="text-[#639FAB]" />
              <Link href="/what-we-do" className="hover:text-[#0B3D91] transition-colors">
                What We Do
              </Link>
              <ChevronRight size={12} className="text-[#639FAB]" />
              <span className="text-[#0B3D91]">{title}</span>
            </m.div>

            {/* Service Badge */}
            <m.span
              variants={fadeUpItem}
              className="px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#0B3D91] bg-[#0B3D91]/10 rounded-full mb-5"
            >
              {badge}
            </m.span>

            {/* Service Heading H1 */}
            <m.h1
              variants={fadeUpItem}
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight text-[#0A2540] mb-6"
            >
              {title}
            </m.h1>

            {/* Supporting Paragraph */}
            <m.p
              variants={fadeUpItem}
              className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl font-medium"
            >
              {description}
            </m.p>

            {/* Primary & Secondary CTA Buttons */}
            <m.div variants={fadeUpItem} className="flex items-center gap-4 w-full sm:w-auto">
              <Link href="/contact" className="w-full sm:w-auto">
                <m.div
                  whileHover={{
                    scale: 1.03,
                    y: -3,
                    boxShadow: "0 10px 25px rgba(11, 94, 215, 0.25)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="w-full sm:w-auto px-7 py-3.5 bg-[#0B5ED7] hover:bg-[#0a52be] text-white font-bold rounded-full transition-colors shadow-lg cursor-pointer text-center select-none text-sm"
                >
                  Schedule a Consultation
                </m.div>
              </Link>
            </m.div>
          </div>

          {/* Right Column: Hero Image with Mouse Parallax & Reveal */}
          <m.div
            variants={fadeUpItem}
            className="lg:col-span-6 w-full flex items-center justify-center"
          >
            <m.div
              variants={imageRevealVariants}
              className="relative w-full aspect-[16/11] bg-slate-900/5 hover:shadow-[0_30px_80px_rgba(15,23,42,0.18)] transition-shadow duration-[600ms] rounded-[24px]"
              style={{
                x: xTranslation,
                y: yTranslation,
                rotate: rotation,
              }}
            >
              <Image
                src={imageSrc}
                alt={title}
                fill
                priority
                className="object-cover object-center rounded-[24px] transition-all duration-[600ms] ease-out hover:scale-[1.03] hover:brightness-[105%]"
                sizes="(max-w-1024px) 100vw, 45vw"
              />
            </m.div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
};

Hero.displayName = "Hero";
