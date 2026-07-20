import React from "react";
import { Metadata } from "next";
import { HeroSection } from "@/components/what-we-do/HeroSection";
import { ServicesGrid } from "@/components/what-we-do/ServicesGrid";
import { CTASection } from "@/components/what-we-do/CTASection";

export const metadata: Metadata = {
  title: "Valari Technologies | Powering Digital Growth",
  description: "Learn about the enterprise software engineering, cloud infrastructure, and IT consulting capabilities at Valari Technologies.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <CTASection />
    </>
  );
}
