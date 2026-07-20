"use client";

import React from "react";
import { m } from "framer-motion";
import { Container } from "@/components/common";
import { Search, Compass, Paintbrush, Braces, ClipboardCheck, Rocket, HelpCircle } from "lucide-react";

export const OverviewSection: React.FC = () => {
  const nodes = [
    { name: "Discover", icon: Search },
    { name: "Plan", icon: Compass },
    { name: "Design", icon: Paintbrush },
    { name: "Develop", icon: Braces },
    { name: "Test", icon: ClipboardCheck },
    { name: "Launch", icon: Rocket },
    { name: "Support", icon: HelpCircle }
  ];

  return (
    <section className="relative bg-slate-50/50 py-24 border-b border-slate-100 font-sans overflow-hidden">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center mb-16">
          <span className="text-[#0B3D91] text-xs font-extrabold tracking-widest uppercase mb-3 block">
            Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] mb-4">
            Process Overview
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
            We follow a structured lifecycle to ensure your digital transformation is scalable, reliable, and secure.
          </p>
        </div>

        {/* Connected Beams Node Grid */}
        <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4 px-4 py-8">
          {/* Animated SVG connecting beam line across the flow */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[3px] bg-slate-200 -z-10 hidden lg:block overflow-hidden">
            <m.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
              className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#0B3D91] to-transparent"
            />
          </div>

          {nodes.map((node, idx) => {
            const Icon = node.icon;
            const delay = idx * 0.15;

            return (
              <m.div
                key={node.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="relative flex flex-col items-center group z-10"
              >
                {/* Pulsing indicator */}
                <m.div
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay
                  }}
                  className="absolute inset-0 rounded-full bg-[#0B3D91]/10 -z-10 pointer-events-none"
                  style={{ width: 88, height: 88 }}
                />

                {/* Glass Node Card */}
                <m.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-[88px] h-[88px] rounded-full bg-white/70 backdrop-blur-md border border-white/60 shadow-[0_12px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_rgba(11,61,145,0.12)] hover:border-[#0B3D91]/30 flex items-center justify-center cursor-pointer transition-all duration-300 relative"
                >
                  {/* Subtle Inner Glow */}
                  <div className="absolute inset-2.5 rounded-full bg-[#0B3D91]/5 group-hover:bg-[#0B3D91]/10 transition-colors" />

                  <Icon
                    size={26}
                    className="text-[#0B3D91] stroke-[2] group-hover:rotate-12 transition-transform duration-300 relative z-10"
                  />
                </m.div>

                {/* Node Name */}
                <span className="mt-4 text-sm font-bold text-[#0A2540] group-hover:text-[#0B3D91] transition-colors">
                  {node.name}
                </span>

                {/* Vertical connection lines on Mobile */}
                {idx < nodes.length - 1 && (
                  <div className="absolute top-[108px] bottom-[-48px] w-[2px] bg-slate-200 lg:hidden overflow-hidden -z-10">
                    <m.div
                      animate={{ y: ["-100%", "100%"] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay }}
                      className="w-full h-10 bg-gradient-to-b from-transparent via-[#0B3D91] to-transparent"
                    />
                  </div>
                )}
              </m.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
