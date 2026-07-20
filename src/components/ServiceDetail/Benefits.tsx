"use client";

import React from "react";
import { m } from "framer-motion";
import { Container } from "@/components/common";

const sectionReveal = {
  hidden: { opacity: 0, y: 48 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.12,
    },
  },
};

const itemReveal = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export interface Benefit {
  title: string;
  value: string;
  description: string;
}

export interface BenefitsProps {
  benefits: Benefit[];
}

export const Benefits: React.FC<BenefitsProps> = ({ benefits }) => {
  return (
    <section id="benefits" className="bg-[#F8FAFC] py-20 border-b border-slate-100 font-sans">
      <Container>
        <m.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-12"
        >
          {/* Centered Heading */}
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
            <span className="text-[#0B3D91] text-xs font-extrabold tracking-widest uppercase mb-3 block">
              Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] mb-4">
              Measurable Business Outcomes
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
              We focus on delivering tangible metrics that directly optimize operations and ROI.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <m.div
                key={index}
                variants={itemReveal}
                className="group flex flex-col text-center p-8 bg-white border border-slate-200/60 rounded-3xl shadow-sm hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)] transition-all duration-300 ease-out"
              >
                {/* Metric Value */}
                <span className="text-4xl md:text-5xl font-extrabold text-[#0B3D91] mb-3 group-hover:scale-105 transition-transform duration-300 block select-none">
                  {benefit.value}
                </span>
                {/* Metric Title */}
                <h3 className="text-base font-extrabold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                {/* Metric Description */}
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </m.div>
            ))}
          </div>
        </m.div>
      </Container>
    </section>
  );
};

Benefits.displayName = "Benefits";
