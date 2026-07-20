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

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ProcessProps {
  steps: ProcessStep[];
}

export const Process: React.FC<ProcessProps> = ({ steps }) => {
  return (
    <section id="process" className="bg-white py-20 border-b border-slate-100 font-sans">
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
              Workflow
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] mb-4">
              Our Development Process
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
              We structure every project into transparent milestones to guarantee precise, on-time delivery.
            </p>
          </div>

          {/* Timeline Steps */}
          <div className="relative flex flex-col gap-8 max-w-4xl mx-auto text-left pl-6 md:pl-8 border-l border-slate-200/80">
            {steps.map((step, index) => (
              <m.div
                key={index}
                variants={itemReveal}
                className="relative flex flex-col md:flex-row gap-4 md:gap-8 items-start pb-8 last:pb-0"
              >
                {/* Timeline Circle Bullet */}
                <div className="absolute -left-[35px] md:-left-[43px] w-[18px] h-[18px] rounded-full bg-white border-4 border-[#0B3D91] z-10" />

                {/* Step Number Badge */}
                <span className="text-sm font-black uppercase text-[#639FAB] bg-slate-100 rounded px-2.5 py-1">
                  Step {step.step}
                </span>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </m.div>
            ))}
          </div>
        </m.div>
      </Container>
    </section>
  );
};

Process.displayName = "Process";
