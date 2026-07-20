"use client";

import React from "react";
import { m } from "framer-motion";
import { Container } from "@/components/common";
import { Compass, Users, GitBranch, ShieldCheck, HeartHandshake, Lightbulb } from "lucide-react";

export const TrustPillars: React.FC = () => {
  const pillars = [
    {
      title: "Business-Focused Solutions",
      desc: "We understand business objectives before writing code. Every solution is aligned with measurable outcomes and long-term growth.",
      icon: Compass,
      color: "#0B3D91",
    },
    {
      title: "Experienced Technology Team",
      desc: "Our developers specialize in modern frameworks, scalable architecture, cloud infrastructure, and enterprise software development.",
      icon: Users,
      color: "#F4C542",
    },
    {
      title: "Transparent Communication",
      desc: "Clients receive regular updates, milestone tracking, documentation, and complete project visibility throughout development.",
      icon: GitBranch,
      color: "#639FAB",
    },
    {
      title: "Quality Without Compromise",
      desc: "Every project undergoes multiple rounds of testing, performance optimization, and security validation before deployment.",
      icon: ShieldCheck,
      color: "#E25C5C",
    },
    {
      title: "Long-Term Partnership",
      desc: "Our relationship continues after launch through maintenance, enhancements, monitoring, and continuous support.",
      icon: HeartHandshake,
      color: "#EC4899",
    },
    {
      title: "Innovation Driven",
      desc: "We continuously adopt modern technologies and industry best practices to keep businesses ahead of the competition.",
      icon: Lightbulb,
      color: "#8B5CF6",
    },
  ];

  return (
    <section className="relative bg-slate-50/50 py-24 border-b border-slate-100 font-sans overflow-hidden">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center mb-20">
          <span className="text-[#0B3D91] text-xs font-extrabold tracking-widest uppercase mb-3 block">
            Differentiators
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] mb-4">
            Six Reasons Clients Choose Valari
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
            We structure our team alignment and deployment phases to guarantee maximum engineering performance.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;

            return (
              <m.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group relative bg-white border border-slate-200/60 rounded-[28px] p-8 text-left hover:shadow-[0_24px_50px_rgba(11,61,145,0.06)] hover:border-[#0B3D91]/25 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between min-h-[260px] cursor-default"
              >
                {/* Background Subtle Blue Glow on Hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,61,145,0.01)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[28px] pointer-events-none" />

                <div>
                  {/* Icon Wrapper */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-6 shrink-0 shadow-sm transition-all duration-300 group-hover:rotate-6 group-hover:scale-105"
                    style={{ backgroundColor: `${pillar.color}15`, color: pillar.color }}
                  >
                    <Icon size={20} className="stroke-[2.5]" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0A2540] group-hover:text-[#0B3D91] transition-colors mb-3 leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </m.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
