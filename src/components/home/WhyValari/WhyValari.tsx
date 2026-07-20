"use client";

import React from "react";
import { m } from "framer-motion";
import { Check, TrendingUp, Network, Shield } from "lucide-react";
import { Container } from "@/components/common";
import { WHY_VALARI_FEATURES, WHY_VALARI_SECTION_DATA } from "@/data/why-choose-valari";
import { staggerContainer } from "@/lib/animations";
import { WhyValariCarousel } from "./WhyValariCarousel";

// Lucide icon mapping
const ICON_MAP = {
  Check: Check,
  TrendingUp: TrendingUp,
  Network: Network,
  Shield: Shield,
};

const featureReveal = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

/**
 * Why Choose Valari section.
 * Renders the capability checklist alongside an enterprise image carousel wrapper.
 */
export const WhyValari: React.FC = () => {
  return (
    <section className="relative bg-[#051126] py-28 border-b border-slate-800/50 font-sans overflow-hidden z-10">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/3 left-1/4 -z-10 w-[450px] h-[450px] bg-[rgba(11,61,145,0.03)] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 -z-10 w-[500px] h-[500px] bg-[rgba(255,255,255,0.02)] rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <m.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        >
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-5 flex flex-col items-start text-left self-center">
            <m.span
              variants={featureReveal}
              className="text-[#F4C542] text-xs font-bold tracking-widest uppercase mb-3 block"
            >
              {WHY_VALARI_SECTION_DATA.eyebrow}
            </m.span>
            <m.h2
              variants={featureReveal}
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] tracking-tight text-white mb-4 max-w-xl"
            >
              {WHY_VALARI_SECTION_DATA.heading}
            </m.h2>
            <m.p
              variants={featureReveal}
              className="text-slate-300 text-base md:text-lg leading-relaxed mb-10 max-w-xl"
            >
              {WHY_VALARI_SECTION_DATA.tagline}
            </m.p>

            {/* Features List */}
            <div className="flex flex-col gap-8 w-full max-w-2xl">
              {WHY_VALARI_FEATURES.map((feature) => {
                const IconComponent = ICON_MAP[feature.iconName] || Check;

                return (
                  <m.div
                    key={feature.id}
                    variants={featureReveal}
                    className="flex gap-5 items-start"
                  >
                    {/* Gold Circular Icon Container */}
                    <div className="w-10 h-10 rounded-full border border-[#F4C542] text-[#F4C542] flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(244,197,66,0.15)] mt-0.5">
                      <IconComponent size={18} aria-hidden="true" />
                    </div>

                    {/* Feature Copy */}
                    <div className="flex flex-col text-left">
                      <h3 className="text-white text-lg font-bold mb-1.5">
                        {feature.title}
                      </h3>
                      <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </m.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: High-fidelity mockup frame with Image Carousel */}
          <m.div
            variants={featureReveal}
            className="lg:col-span-7 w-full flex items-center lg:justify-end justify-center self-center lg:translate-x-6 lg:translate-y-8"
          >
            <WhyValariCarousel />
          </m.div>
        </m.div>
      </Container>
    </section>
  );
};

WhyValari.displayName = "WhyValari";
