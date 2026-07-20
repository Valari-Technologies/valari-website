"use client";

import React from "react";
import { m } from "framer-motion";
import { Container } from "@/components/common";
import { CheckCircle2 } from "lucide-react";

const revealVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export interface OverviewProps {
  intro: string;
  whyNeeded: string;
  challengesSolved: string[];
  valueProp: string;
}

export const Overview: React.FC<OverviewProps> = ({
  intro,
  whyNeeded,
  challengesSolved,
  valueProp,
}) => {
  return (
    <section id="overview" className="bg-[#F8FAFC] py-20 border-b border-slate-100 font-sans">
      <Container>
        <m.div
          variants={revealVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
        >
          {/* Left Column: Intro & Strategy */}
          <div className="lg:col-span-7 text-left">
            <span className="text-[#0B3D91] text-xs font-extrabold tracking-widest uppercase mb-3 block">
              Overview
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] mb-6">
              Why Businesses Choose This Service
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6 font-medium">
              {intro}
            </p>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6">
              {whyNeeded}
            </p>
            <div className="p-5 bg-white border border-slate-200/60 rounded-2xl shadow-sm">
              <p className="text-[#0B3D91] font-bold text-sm md:text-base leading-relaxed">
                {valueProp}
              </p>
            </div>
          </div>

          {/* Right Column: Challenges Solved Box */}
          <div className="lg:col-span-5 text-left h-full">
            <div className="bg-[#0A2540] text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <h3 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-4">
                  Core Bottlenecks We Solve
                </h3>
                <ul className="flex flex-col gap-5">
                  {challengesSolved.map((challenge, idx) => (
                    <li key={idx} className="flex gap-3.5 items-start text-slate-300">
                      <CheckCircle2 size={18} className="text-[#F2C94C] shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base leading-relaxed font-medium">
                        {challenge}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </m.div>
      </Container>
    </section>
  );
};

Overview.displayName = "Overview";
