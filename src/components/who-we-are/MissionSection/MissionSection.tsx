"use client";

import React from "react";
import { m } from "framer-motion";
import { Container } from "@/components/common";
import { Target, Eye, Cpu } from "lucide-react";

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

export const MissionSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const pillars = [
    {
      number: "01",
      tag: "Our Foundation",
      title: "Our Foundation",
      headline: "Helping businesses grow confidently",
      content:
        "Founded on the principle of \"Execution Excellence,\" Valari Technologies emerged to bridge the gap between abstract digital strategy and tangible market results. We don't just provide services; we build the technological infrastructure that allows brands to scale without friction.",
      icon: Cpu,
      color: "#F4C542",
    },
    {
      number: "02",
      tag: "Our Vision",
      title: "Our Vision",
      headline: "Trusted technology partner",
      content:
        "To be the most trusted technology partner for visionary enterprises worldwide, pushing the boundaries of what is possible through clean code and scalable architecture.",
      icon: Eye,
      color: "#0B3D91",
    },
    {
      number: "03",
      tag: "Our Mission",
      title: "Our Mission",
      headline: "Innovative & scalable solutions",
      content:
        "Delivering innovative solutions that solve complex challenges and drive exponential growth, empowering our clients to lead their respective industries with confidence.",
      icon: Target,
      color: "#639FAB",
    },
  ];

  return (
    <section
      id="mission"
      className="relative bg-white py-24 border-b border-slate-100 font-sans overflow-hidden"
    >
      {/* Premium radial glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[700px] h-[500px] bg-[rgba(11,61,145,0.03)] rounded-full blur-[110px] pointer-events-none" />

      <Container>
        <m.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-16"
        >
          {/* Centered Heading */}
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
            <span className="text-[#0B3D91] text-xs font-extrabold tracking-widest uppercase mb-3 block">
              Pillars
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] mb-4">
              Our Core Pillars
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
              We anchor our enterprise services to core goals centered on business success and technological durability.
            </p>
          </div>

          {/* Desktop/Tablet Horizontal Expanding Cards Accordion */}
          <div 
            onMouseLeave={() => setActiveIndex(null)}
            className="hidden md:flex flex-row gap-4 h-[420px] w-full max-w-5xl mx-auto items-stretch"
          >
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isActive = activeIndex === idx;

              return (
                <div
                  key={pillar.number}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`relative rounded-[24px] overflow-hidden transition-all duration-500 ease-in-out cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? "flex-[3.5] bg-white border-2 border-slate-100 shadow-[0_30px_60px_rgba(15,23,42,0.08)] p-8"
                      : "flex-1 bg-white border border-slate-100/80 hover:bg-slate-50/50 py-8 items-center"
                  }`}
                >
                  {isActive ? (
                    // Expanded Horizontal Layout
                    <m.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      className="flex flex-col justify-between h-full w-full"
                    >
                      <div className="flex justify-between items-start w-full">
                        <div className="flex flex-col text-left">
                          <span 
                            className="text-[10px] font-extrabold uppercase tracking-widest mb-1"
                            style={{ color: pillar.color }}
                          >
                            {pillar.tag}
                          </span>
                          <h3 className="text-2xl font-bold text-[#0A2540]">
                            {pillar.headline}
                          </h3>
                        </div>
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm"
                          style={{ backgroundColor: `${pillar.color}15`, color: pillar.color }}
                        >
                          <Icon size={22} className="stroke-[2.5]" />
                        </div>
                      </div>

                      <div className="text-left pr-4">
                        <p className="text-slate-600 text-sm md:text-[0.95rem] leading-relaxed">
                          {pillar.content}
                        </p>
                      </div>

                      <div className="text-left text-xs font-bold text-slate-300">
                        {pillar.number}
                      </div>
                    </m.div>
                  ) : (
                    // Collapsed Vertical Layout
                    <>
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${pillar.color}08`, color: pillar.color }}
                      >
                        <Icon size={18} className="stroke-[2.5]" />
                      </div>
                      
                      <h3 className="text-base font-bold text-slate-700 tracking-wide [writing-mode:vertical-rl] rotate-180 whitespace-nowrap my-auto">
                        {pillar.title}
                      </h3>
                      
                      <span className="text-xs font-bold text-slate-300">
                        {pillar.number}
                      </span>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Vertical Accordion Layout */}
          <div className="flex md:hidden flex-col gap-4 w-full">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isActive = activeIndex === idx;

              return (
                <div
                  key={pillar.number}
                  onClick={() => setActiveIndex(idx)}
                  className={`rounded-2xl border transition-all duration-300 flex flex-col ${
                    isActive
                      ? "bg-white border-slate-100 shadow-[0_15px_30px_rgba(15,23,42,0.06)] p-6"
                      : "bg-white/80 border-slate-100 p-5 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center justify-between w-full cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${pillar.color}15`, color: pillar.color }}
                      >
                        <Icon size={18} className="stroke-[2.5]" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                          {pillar.number}
                        </span>
                        <h3 className="text-sm font-bold text-[#0A2540]">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                    <span 
                      className="text-xs font-bold transition-transform duration-300"
                      style={{ color: pillar.color, transform: isActive ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                      ▼
                    </span>
                  </div>

                  <m.div
                    initial={false}
                    animate={{
                      height: isActive ? "auto" : 0,
                      opacity: isActive ? 1 : 0,
                      marginTop: isActive ? 16 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden text-left"
                  >
                    <h4 className="text-sm font-bold text-slate-800 mb-2">
                      {pillar.headline}
                    </h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                      {pillar.content}
                    </p>
                  </m.div>
                </div>
              );
            })}
          </div>
        </m.div>
      </Container>
    </section>
  );
};

MissionSection.displayName = "MissionSection";
