"use client";

import React from "react";
import { m } from "framer-motion";
import { HeroSection } from "@/components/our-process/HeroSection";
import { OverviewSection } from "@/components/our-process/OverviewSection";
import { InteractiveTimeline } from "@/components/our-process/InteractiveTimeline";
import { ToolsSection } from "@/components/our-process/ToolsSection";
import { MarketingFlow } from "@/components/our-process/MarketingFlow";
import { WhyChooseProcess } from "@/components/our-process/WhyChooseProcess";
import { TechnologyMarquee } from "@/components/our-process/TechnologyMarquee";
import { DeliverySection } from "@/components/our-process/DeliverySection";
import { FAQSection } from "@/components/our-process/FAQSection";
import { CTASection } from "@/components/our-process/CTASection";

export const PageWrapper: React.FC = () => {
  return (
    <m.div
      initial={{ opacity: 0, filter: "blur(8px)", scale: 0.985 }}
      animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col w-full"
    >
      <HeroSection />
      <OverviewSection />
      <InteractiveTimeline />
      <ToolsSection />
      <MarketingFlow />
      <WhyChooseProcess />
      <TechnologyMarquee />
      <DeliverySection />
      <FAQSection />
      <CTASection />
    </m.div>
  );
};
