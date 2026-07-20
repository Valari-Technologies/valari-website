import React from "react";
import { Hero } from "@/components/home/Hero";
import { ValueProps } from "@/components/home/ValueProps";
import { Services } from "@/components/home/Services";
import { WhyValari } from "@/components/home/WhyValari";
import { Stats } from "@/components/home/Stats";
import { CTA } from "@/components/home/CTA";

/**
 * Homepage.
 * Renders the modular Hero layout, the follow-up Value Propositions section, the Services grid, Why Valari, Stats, and CTA.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyValari />
      <ValueProps />
      <Stats />
      <CTA />
    </>
  );
}
