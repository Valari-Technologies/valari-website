"use client";

import React from "react";
import { m } from "framer-motion";
import { Container } from "@/components/common";
import { ServiceCard } from "./ServiceCard";
import { SERVICES_DATA, SERVICES_SECTION_DATA } from "@/data/services";
import { staggerContainer } from "@/lib/animations";

// Custom reveal animation parameters specifically matching user specs
const serviceCardReveal = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/**
 * Services section displaying corporate capabilities ("What We Do").
 * Employs a single staggered sequence reveal waterfall, subtle radial gradients,
 * and rounded-[24px] white cards.
 */
export const Services: React.FC = () => {
  return (
    <section className="relative bg-[#F8FAFC] py-28 border-b border-slate-200/60 font-sans overflow-hidden">
      {/* Subtle Decorative Radial Background Gradients */}
      <div className="absolute top-1/4 left-1/12 -z-10 w-[400px] h-[400px] bg-[rgba(11,61,145,0.03)] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/12 -z-10 w-[450px] h-[450px] bg-[rgba(244,197,66,0.02)] rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <m.div
          variants={staggerContainer(0.09)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-16"
        >
          {/* Centered Heading Section */}
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
            <m.span
              variants={serviceCardReveal}
              className="text-[#0B3D91] text-xs font-extrabold tracking-widest uppercase mb-3 block"
            >
              {SERVICES_SECTION_DATA.eyebrow}
            </m.span>
            <m.h2
              variants={serviceCardReveal}
              className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4 leading-tight"
            >
              {SERVICES_SECTION_DATA.heading}
            </m.h2>
            <m.p
              variants={serviceCardReveal}
              className="text-base md:text-lg text-slate-500 leading-relaxed font-medium"
            >
              {SERVICES_SECTION_DATA.description}
            </m.p>
          </div>

          {/* Responsive Services Grid (3 cols desktop, 2 cols tablet, 1 col mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => (
              <m.div key={service.id} variants={serviceCardReveal}>
                <ServiceCard service={service} />
              </m.div>
            ))}
          </div>
        </m.div>
      </Container>
    </section>
  );
};

Services.displayName = "Services";
