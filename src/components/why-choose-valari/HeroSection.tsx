"use client";

import React, { useRef, useState } from "react";
import { m } from "framer-motion";
import { Container } from "@/components/common";
import Link from "next/link";
import { ArrowRight, Star, Shield, Cpu, HeartHandshake } from "lucide-react";

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

  const headline = "Why Businesses Choose Valari Technologies";
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side Content */}
          <div className="lg:col-span-6 flex flex-col text-left items-start z-10">
            {/* WHY CHOOSE VALARI Badge */}
            <m.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0B3D91]/5 border border-[#0B3D91]/10 text-xs font-semibold mb-6 shadow-sm text-slate-500"
            >
              <Link href="/" className="hover:text-[#0B3D91] transition-colors font-bold">Home</Link>
              <span className="text-slate-400 font-normal">/</span>
              <span className="text-[#0B3D91] font-bold">Why Choose Valari</span>
            </m.div>

            {/* Headline Word-by-Word Reveal */}
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0A2540] mb-6 leading-[1.15]">
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
              className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-xl mb-8"
            >
              Partner with a technology company focused on quality, innovation, transparency, and long-term business success. We build scalable software solutions that solve real business challenges while delivering measurable value.
            </m.p>

            {/* Buttons */}
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4 items-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#0B3D91] text-white font-bold text-sm shadow-md hover:bg-[#092e6e] hover:shadow-[0_12px_30px_rgba(11,61,145,0.25)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Start Your Project</span>
                <ArrowRight size={16} />
              </Link>
            </m.div>
          </div>

          {/* Right Side Illustration with Mouse Parallax */}
          <m.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-6 w-full flex justify-center relative min-h-[440px]"
          >
            {/* Visual Glass Platform */}
            <m.div
              animate={{
                x: mousePosition.x * -25,
                y: mousePosition.y * -25,
                rotateX: mousePosition.y * 8,
                rotateY: mousePosition.x * -8,
              }}
              style={{ transformStyle: "preserve-3d" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="relative w-full max-w-md bg-gradient-to-br from-slate-50/70 to-slate-100/50 border border-slate-200/60 rounded-[32px] p-8 shadow-2xl flex flex-col justify-between h-[380px]"
            >
              {/* Dynamic light sweep effect */}
              <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[linear-gradient(45deg,transparent_45%,rgba(255,255,255,0.45)_50%,transparent_55%)] -z-10 animate-sweep pointer-events-none" />

              {/* Floating UI Elements inside platform */}
              <div className="flex justify-between items-start">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex items-center gap-1 text-[#F4C542]">
                  <Star size={14} fill="#F4C542" />
                  <span className="text-[10px] font-bold text-slate-500">PRO GRADE</span>
                </div>
              </div>

              {/* Central Floating Metric Badge */}
              <div className="my-auto flex flex-col items-center gap-3">
                <m.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-white border border-slate-150 rounded-2xl p-5 shadow-lg flex items-center gap-4 max-w-xs relative z-10"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0B3D91]/10 text-[#0B3D91] flex items-center justify-center shrink-0">
                    <Shield size={20} className="stroke-[2.5]" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest leading-none mb-1">
                      SECURITY FIRST
                    </span>
                    <span className="text-xs font-bold text-[#0A2540] leading-tight">
                      Enterprise Encryption Protocols Enabled
                    </span>
                  </div>
                </m.div>

                {/* Sub Floating Card */}
                <m.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="bg-white border border-slate-150 rounded-2xl p-4 shadow-lg flex items-center gap-3 max-w-[220px] relative z-10 self-end mr-[-20px]"
                >
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 text-green-600 flex items-center justify-center shrink-0">
                    <Cpu size={16} className="stroke-[2.5]" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[8px] font-extrabold text-slate-400 uppercase tracking-widest leading-none mb-0.5">
                      DURABILITY
                    </span>
                    <span className="text-[11px] font-bold text-[#0A2540]">
                      99.9% Uptime Architecture
                    </span>
                  </div>
                </m.div>
              </div>

              <div className="flex justify-between items-center text-xs font-bold text-slate-400 border-t border-slate-200/50 pt-4">
                <span>VALARI TECHNOLOGIES</span>
                <span className="flex items-center gap-1 text-[#0B3D91]">
                  <HeartHandshake size={14} />
                  <span>Your Partner</span>
                </span>
              </div>
            </m.div>
          </m.div>
        </div>
      </Container>
    </div>
  );
};
