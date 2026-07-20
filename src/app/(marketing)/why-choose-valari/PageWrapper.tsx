"use client";

import React from "react";
import { m } from "framer-motion";
import {
  HeroSection,
  TrustPillars,
  CompetitiveAdvantages,
  SuccessMetrics,
  Industries,
  TechnologyExcellence,
  Testimonials,
  FAQ,
  CTA,
} from "@/components/why-choose-valari";

export const PageWrapper: React.FC = () => {
  return (
    <m.div
      initial={{ opacity: 0, filter: "blur(8px)", scale: 0.985 }}
      animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col w-full"
    >
      <HeroSection />
      <TrustPillars />
      <CompetitiveAdvantages />
      <SuccessMetrics />
      <Industries />
      <TechnologyExcellence />
      <Testimonials />
      <FAQ />
      <CTA />
    </m.div>
  );
};
