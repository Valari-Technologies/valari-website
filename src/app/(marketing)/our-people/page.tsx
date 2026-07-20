"use client";

import React from "react";
import { HeroSection, TeamCarousel, CTASection } from "@/components/our-people";

export default function OurPeoplePage() {
  return (
    <div className="relative w-full flex flex-col bg-white">
      <HeroSection />
      <TeamCarousel />
      <CTASection />
    </div>
  );
}
