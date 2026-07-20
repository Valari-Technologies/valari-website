"use client";

import React from "react";
import { m } from "framer-motion";
import { Container } from "@/components/common";
import * as Icons from "lucide-react";

const sectionReveal = {
  hidden: { opacity: 0, y: 48 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.1,
    },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface FeaturesProps {
  features: Feature[];
}

export const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <section id="features" className="bg-white py-20 border-b border-slate-100 font-sans">
      <Container>
        <m.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-col gap-12"
        >
          {/* Centered Heading */}
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
            <span className="text-[#0B3D91] text-xs font-extrabold tracking-widest uppercase mb-3 block">
              Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] mb-4">
              Comprehensive Service Features
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
              We deliver engineered, custom-coded features designed to ensure absolute quality.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              // Dynamically map icon name from Lucide
              const IconComponent = (Icons[feature.icon as keyof typeof Icons] || Icons.Cpu) as React.ComponentType<{ size: number; className?: string }>;

              return (
                <m.div
                  key={index}
                  variants={cardReveal}
                  className="group flex flex-col text-left p-7 bg-white border border-slate-200/80 rounded-[20px] shadow-sm hover:shadow-[0_20px_40px_rgba(15,23,42,0.06)] hover:border-[#0B5ED7]/30 transition-all duration-300 ease-out"
                >
                  <div className="w-11 h-11 rounded-full bg-[#0B3D91]/5 text-[#0B3D91] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#0B3D91]/10 group-hover:text-[#0B5ED7] shrink-0">
                    <IconComponent size={20} className="transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#0B3D91] transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </m.div>
              );
            })}
          </div>
        </m.div>
      </Container>
    </section>
  );
};

Features.displayName = "Features";
