import React from "react";
import { Metadata } from "next";
import { HeroSection } from "@/components/who-we-are/HeroSection";
import { StorySection } from "@/components/who-we-are/StorySection";
import { MissionSection } from "@/components/who-we-are/MissionSection";
import { CultureSection } from "@/components/who-we-are/CultureSection";
import { OfficeGallery } from "@/components/who-we-are/OfficeGallery";
import { TrustSection } from "@/components/who-we-are/TrustSection";
import { TechExpertise } from "@/components/who-we-are/TechExpertise";
import { CTASection } from "@/components/who-we-are/CTASection";
export const metadata: Metadata = {
  title: "Valari Technologies | Powering Digital Growth",
  description: "Learn about the mission, values, and journey behind Valari Technologies.",
};

export default function WhoWeArePage() {
  return (
    <div className="relative flex flex-col w-full min-h-screen">

      {/* Structured Sections */}
      <HeroSection />
      <StorySection />
      <MissionSection />
      <CultureSection />
      <OfficeGallery />
      <TrustSection />
      <TechExpertise />
      <CTASection />
    </div>
  );
}
