"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { m, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/common";

const sectionReveal = {
  hidden: { opacity: 0, y: 48 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const lineReveal = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const StorySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Hook into viewport scroll to zoom the image container slowly
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section
      id="story"
      ref={containerRef}
      className="relative bg-[#F8FAFC] py-28 border-b border-slate-100 font-sans overflow-hidden"
    >
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] bg-[size:2rem_2rem] opacity-60 pointer-events-none" />

      <Container>
        <m.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        >
          {/* Left Column: Office Gallery / Story Image with Scroll Zoom */}
          <div className="lg:col-span-6 w-full relative overflow-hidden rounded-3xl shadow-lg aspect-[16/11]">
            <m.div style={{ scale: imageScale }} className="w-full h-full relative">
              <Image
                src="/images/founded-with-a-vision-to-simplify-digital-transformation.webp"
                alt="Founded with a vision to simplify digital transformation"
                fill
                loading="lazy"
                className="object-cover object-center rounded-3xl"
                sizes="(max-w-1024px) 100vw, 45vw"
              />
            </m.div>
          </div>

          {/* Right Column: Copy Text Line-by-Line Reveal */}
          <div className="lg:col-span-6 text-left flex flex-col items-start gap-6">
            <m.span
              variants={lineReveal}
              className="text-[#0B3D91] text-xs font-extrabold tracking-widest uppercase mb-1 block"
            >
              Our History
            </m.span>

            <m.h2
              variants={lineReveal}
              className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] leading-tight"
            >
              Founded with a vision to simplify digital transformation
            </m.h2>

            <m.p
              variants={lineReveal}
              className="text-slate-600 text-sm md:text-base leading-relaxed font-medium"
            >
              Valari Technologies helps organizations embrace modern software, cloud
              infrastructure, automation, and digital innovation. We work closely with
              businesses to understand their goals, engineer scalable solutions, and deliver
              measurable outcomes through technology.
            </m.p>

            <m.p
              variants={lineReveal}
              className="text-slate-500 text-sm md:text-base leading-relaxed"
            >
              Instead of simply delivering software, we become long-term technology partners—supporting
              growth, modernization, and operational excellence for startups, SMEs, and corporate
              enterprises.
            </m.p>
          </div>
        </m.div>
      </Container>
    </section>
  );
};

StorySection.displayName = "StorySection";
