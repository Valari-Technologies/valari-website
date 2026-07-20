"use client";

import React, { useRef, useState } from "react";
import { m } from "framer-motion";
import { Container } from "@/components/common";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const headline = "Let's Build Your Next Digital Success Story Together";
  const words = headline.split(" ");

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
      className="relative bg-white pt-32 pb-24 border-b border-slate-100 font-sans overflow-hidden select-none"
    >
      {/* Background grid pattern & blur circles */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -z-10 w-[600px] h-[600px] bg-[rgba(11,61,145,0.02)] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 -z-10 w-[500px] h-[500px] bg-[rgba(244,197,66,0.03)] rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Animated Mesh Gradient */}
      <m.div
        animate={{
          x: mousePosition.x * 25,
          y: mousePosition.y * 25,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 25 }}
        className="absolute top-[-10%] right-[-10%] w-[80%] h-[80%] -z-10 bg-[radial-gradient(circle_at_center,rgba(11,61,145,0.025)_0%,transparent_60%)] pointer-events-none filter blur-3xl"
      />

      <Container>
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center z-10 relative">
          <m.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0B3D91]/5 border border-[#0B3D91]/10 text-xs font-semibold mb-6 shadow-sm text-slate-500"
          >
            <Link href="/" className="hover:text-[#0B3D91] transition-colors font-bold">Home</Link>
            <span className="text-slate-400 font-normal">/</span>
            <span className="text-[#0B3D91] font-bold">Contact Us</span>
          </m.div>

          {/* Headline Word-by-Word Reveal */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A2540] mb-6 leading-[1.15] text-center">
            {words.map((word, idx) => (
              <m.span
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </m.span>
            ))}
          </h1>

          {/* Subtitle */}
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mb-8 text-center"
          >
            Whether you&apos;re planning a new software product, modernizing existing systems, automating business workflows, or exploring digital transformation, our experts are ready to help.
          </m.p>

          {/* Buttons */}
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4 items-center justify-center"
          >
            <a
              href="#inquiry-form"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#0B3D91] text-white font-bold text-sm shadow-md hover:bg-[#092e6e] hover:shadow-[0_12px_30px_rgba(11,61,145,0.25)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>Start Your Project</span>
              <ArrowRight size={16} />
            </a>
          </m.div>
        </div>
      </Container>
    </div>
  );
};
