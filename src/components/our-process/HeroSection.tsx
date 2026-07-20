"use client";

import React from "react";
import { m } from "framer-motion";
import { Container } from "@/components/common";
import Link from "next/link";
import { ArrowRight, MessageSquare, FileText, Palette, Code, ShieldCheck, CheckCircle2, HeartHandshake } from "lucide-react";

export const HeroSection: React.FC = () => {
  const headline = "Our Proven Process for Delivering Digital Excellence";
  const words = headline.split(" ");

  const steps = [
    { label: "Client Inquiry", icon: MessageSquare },
    { label: "Requirement Analysis", icon: FileText },
    { label: "UI/UX Design", icon: Palette },
    { label: "Development", icon: Code },
    { label: "Testing", icon: ShieldCheck },
    { label: "Deployment", icon: CheckCircle2 },
    { label: "Support", icon: HeartHandshake }
  ];

  return (
    <section className="relative bg-white pt-32 pb-24 border-b border-slate-100 font-sans overflow-hidden">
      {/* Decorative Blur Circles */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -z-10 w-[600px] h-[600px] bg-[rgba(11,61,145,0.02)] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 -z-10 w-[500px] h-[500px] bg-[rgba(99,159,171,0.03)] rounded-full blur-[100px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side Content */}
          <div className="lg:col-span-6 flex flex-col text-left items-start">
            {/* OUR PROCESS Badge */}
            <m.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0B3D91]/5 border border-[#0B3D91]/10 text-xs font-semibold mb-6 shadow-sm text-slate-500"
            >
              <Link href="/" className="hover:text-[#0B3D91] transition-colors font-bold">Home</Link>
              <span className="text-slate-400 font-normal">/</span>
              <span className="text-[#0B3D91] font-bold">Our Process</span>
            </m.div>

            {/* Headline Word Reveal */}
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

            {/* Short SEO Paragraph */}
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-xl mb-8"
            >
              Discover how Valari Technologies acts as your strategic technology partner. We align UI/UX design, agile development, and end-to-end IT solutions into a structured software development process that guarantees reliable corporate solutions.
            </m.p>

            {/* CTAs */}
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
                <span>Get Started</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#timeline"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-100 hover:text-[#0B3D91] transition-all duration-300"
              >
                <span>View Timeline</span>
              </Link>
            </m.div>
          </div>

          {/* Right Side Workflow Illustration */}
          <m.div
            initial={{ opacity: 0, scale: 0.96, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 w-full flex justify-center relative min-h-[460px] select-none"
          >
            {/* Real Client Journey Visual Diagram */}
            <div className="relative w-full max-w-lg bg-slate-50/50 border border-slate-100 rounded-[32px] p-8 shadow-inner flex flex-col gap-5 justify-between">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const isLast = idx === steps.length - 1;

                return (
                  <div key={step.label} className="relative flex items-center gap-4 group">
                    {/* Animated Line Connection */}
                    {!isLast && (
                      <div className="absolute left-6 top-10 bottom-[-22px] w-[2px] bg-slate-200 overflow-hidden">
                        <m.div
                          animate={{ y: ["-100%", "100%"] }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "linear",
                            delay: idx * 0.3
                          }}
                          className="w-full h-8 bg-gradient-to-b from-transparent via-[#0B3D91] to-transparent"
                        />
                      </div>
                    )}

                    {/* Step Icon Indicator */}
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-slate-150 flex items-center justify-center shrink-0 shadow-sm group-hover:border-[#0B3D91]/40 group-hover:scale-105 transition-all duration-300 relative z-10">
                      <Icon size={20} className="text-[#0B3D91] stroke-[2]" />
                    </div>

                    {/* Step Description */}
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">
                        STAGE 0{idx + 1}
                      </span>
                      <span className="text-sm font-bold text-[#0A2540] group-hover:text-[#0B3D91] transition-colors leading-tight">
                        {step.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </m.div>
        </div>
      </Container>
    </section>
  );
};
