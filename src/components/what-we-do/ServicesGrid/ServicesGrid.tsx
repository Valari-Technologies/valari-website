"use client";

import React from "react";
import { m } from "framer-motion";
import { Container } from "@/components/common";
import { ServiceCard } from "./ServiceCard";
import { SERVICES_GRID_DATA } from "./data";

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

const titleReveal = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const ServicesGrid: React.FC = () => {
  React.useEffect(() => {
    const savedScrollY = sessionStorage.getItem("valari_services_scroll_y");
    if (savedScrollY) {
      sessionStorage.removeItem("valari_services_scroll_y");
      const timer = setTimeout(() => {
        window.scrollTo({
          top: parseInt(savedScrollY, 10),
          behavior: "smooth",
        });
      }, 350);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <section className="relative bg-[#F4F6F8] py-28 border-b border-slate-200/50 font-sans overflow-hidden">
      {/* Subtle radial decor styling to match enterprise standards */}
      <div className="absolute bottom-0 right-0 -z-10 w-[500px] h-[500px] bg-[rgba(11,61,145,0.02)] rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <m.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-col gap-16"
        >
          {/* Centered Heading Block */}
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
            <m.span
              variants={titleReveal}
              className="text-[#0B3D91] text-xs font-extrabold tracking-widest uppercase mb-3 block"
            >
              Our Expertise
            </m.span>
            <m.h2
              variants={titleReveal}
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] tracking-tight text-[#0A2540] mb-4"
            >
              Comprehensive Digital Excellence
            </m.h2>
            <m.p
              variants={titleReveal}
              className="text-[#639FAB] text-base md:text-lg leading-relaxed max-w-2xl font-medium"
            >
              We deliver cutting-edge technology services that empower enterprises to grow, scale,
              and optimize their business operations.
            </m.p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_GRID_DATA.map((service) => (
              <m.div key={service.id} variants={titleReveal}>
                <ServiceCard service={service} />
              </m.div>
            ))}
          </div>
        </m.div>
      </Container>
    </section>
  );
};

ServicesGrid.displayName = "ServicesGrid";
