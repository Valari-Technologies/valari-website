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
      staggerChildren: 0.1,
    },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export interface TechCategory {
  category: string;
  items: string[];
}

export interface TechnologiesProps {
  technologies: TechCategory[];
}

export const Technologies: React.FC<TechnologiesProps> = ({ technologies }) => {
  return (
    <section id="technologies" className="bg-[#F8FAFC] py-20 border-b border-slate-100 font-sans">
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
              Stack
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] mb-4">
              Technologies We Use
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
              We employ modern, secure, and production-tested software components to build enterprise platforms.
            </p>
          </div>

          {/* Categories Grid */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto w-full ${
              technologies.length === 3
                ? "lg:grid-cols-3 max-w-5xl"
                : "lg:grid-cols-3 xl:grid-cols-4 max-w-7xl"
            }`}
          >
            {technologies.map((tech, index) => (
              <m.div
                key={index}
                variants={cardReveal}
                className="flex flex-col text-left p-6 bg-white border border-slate-200/60 rounded-3xl shadow-sm"
              >
                {/* Category Header */}
                <h3 className="text-[#0B3D91] text-base font-black uppercase tracking-wider mb-5 pb-2 border-b border-slate-100">
                  {tech.category}
                </h3>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {tech.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200/30 rounded-lg px-3 py-1.5 select-none"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </m.div>
            ))}
          </div>
        </m.div>
      </Container>
    </section>
  );
};

Technologies.displayName = "Technologies";
