"use client";

import React from "react";
import { m } from "framer-motion";
import { Container } from "@/components/common";
import { TECHNOLOGIES } from "./technologies";
import { TechnologyCard } from "./TechnologyCard";

export const TechnologyMarquee: React.FC = () => {
  // Duplicate for mathematically seamless infinite scroll looping
  const duplicatedTechnologies = [...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <section className="relative bg-[#F8FAFC] py-24 border-b border-slate-100 font-sans overflow-hidden">
      {/* Dynamic Keyframes Injection */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-infinite-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Subtle Radial Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[700px] h-[300px] bg-[rgba(11,61,145,0.02)] rounded-full blur-[100px] pointer-events-none" />

      <Container>
        {/* Section Heading */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto flex flex-col items-center mb-16"
        >
          <span className="text-[#0B3D91] text-xs font-extrabold tracking-widest uppercase mb-3 block">
            Ecosystem
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] mb-4">
            Technologies We Master
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
            We use premium, industry-standard infrastructure to power your software solutions.
          </p>
        </m.div>

        {/* Seamless Marquee Container */}
        <m.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full overflow-hidden py-6"
        >
          {/* Gradient Masks (Fade Edges) */}
          <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div className="flex w-max gap-6 animate-infinite-marquee transition-all duration-300">
            {duplicatedTechnologies.map((tech, idx) => (
              <TechnologyCard key={`${tech.slug}-${idx}`} tech={tech} />
            ))}
          </div>
        </m.div>
      </Container>
    </section>
  );
};
