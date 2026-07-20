"use client";

import React, { useState, useEffect } from "react";
import { ServiceDetail } from "@/data/services/services";
import {
  Hero,
  StickyNav,
  Overview,
  Features,
  Benefits,
  Process,
  Technologies,
  Industries,
  FAQ,
  CTA,
} from "@/components/ServiceDetail";

export interface ServiceDetailClientProps {
  service: ServiceDetail;
}

export const ServiceDetailClient: React.FC<ServiceDetailClientProps> = ({ service }) => {
  const [scrollPercent, setScrollPercent] = useState(0);

  // Monitor reading scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollPercent(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Restore scroll positions when mounting
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full flex flex-col">
      {/* Reading Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-slate-100 z-50 pointer-events-none">
        <div
          className="h-full bg-[#0B5ED7] transition-all duration-[80ms] ease-out"
          style={{ width: `${scrollPercent}%` }}
        />
      </div>

      {/* Detail Page Layout Sections */}
      <Hero
        title={service.title}
        badge={service.badge}
        description={service.hero.description}
        imageSrc={service.imageSrc}
      />
      <StickyNav />
      <Overview
        intro={service.overview.intro}
        whyNeeded={service.overview.whyNeeded}
        challengesSolved={service.overview.challengesSolved}
        valueProp={service.overview.valueProp}
      />
      <Features features={service.features} />
      <Benefits benefits={service.benefits} />
      
      {/* Mid-page Inline Conversion CTA */}
      <CTA
        id="inline-cta"
        title="Need this service?"
        description="Let's discuss how our custom software solutions fits your project roadmap."
        buttonText="Get in Touch"
      />

      <Process steps={service.process} />
      <Technologies technologies={service.technologies} />
      <Industries industries={service.industries} />
      <FAQ faqs={service.faqs} />
      
      {/* Final Conversion CTA */}
      <CTA />
    </div>
  );
};

ServiceDetailClient.displayName = "ServiceDetailClient";
