"use client";

import React from "react";
import { m } from "framer-motion";
import { Container } from "@/components/common";
import { Check } from "lucide-react";

const sectionReveal = {
  hidden: { opacity: 0, y: 48 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.08,
    },
  },
};

const itemReveal = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export interface IndustriesProps {
  industries: string[];
}

export const Industries: React.FC<IndustriesProps> = ({ industries }) => {
  return (
    <section className="bg-white py-20 border-b border-slate-100 font-sans">
      <Container>
        <m.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col gap-12"
        >
          {/* Centered Heading */}
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
            <span className="text-[#0B3D91] text-xs font-extrabold tracking-widest uppercase mb-3 block">
              Sectors
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] mb-4">
              Industries We Serve
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
              We deploy custom technology solutions tailored specifically for competitive industries.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto w-full">
            {industries.map((industry) => (
              <m.div
                key={industry}
                variants={itemReveal}
                className="flex items-center gap-3 p-4 bg-[#F8FAFC] border border-slate-200/50 rounded-2xl shadow-sm text-left hover:border-[#0B3D91]/20 transition-all select-none"
              >
                <div className="w-6 h-6 rounded-full bg-[#0B3D91]/10 text-[#0B3D91] flex items-center justify-center shrink-0">
                  <Check size={14} className="stroke-[3]" />
                </div>
                <span className="text-sm font-bold text-slate-800">{industry}</span>
              </m.div>
            ))}
          </div>
        </m.div>
      </Container>
    </section>
  );
};

Industries.displayName = "Industries";
