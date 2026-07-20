"use client";

import React from "react";
import Image from "next/image";
import { m } from "framer-motion";
import { Container } from "@/components/common";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { HERO_DATA } from "@/data/hero";
import { HeroContent } from "./HeroContent";

/**
 * Main Hero layout component that integrates modular subcomponents.
 * Includes slide-in entry animations on mount/reload.
 */
export const Hero: React.FC = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-20
        md:py-28
        lg:py-36
        font-sans
        flex-grow
        flex
        items-center
      "
    >
      {/* Background solid fallback layer */}
      <div className="absolute inset-0 bg-[#050c1c] -z-40" />

      {/* Background Image Layer with Cinematic CSS Filters */}
      <div className="absolute inset-0 -z-30 overflow-hidden">
        <Image
          src="/images/bg.webp"
          alt="Valari Technologies engineering team collaborating on dashboard design layout"
          fill
          priority
          className="object-cover object-center"
          // style={{
          //   filter: "brightness(65%) contrast(105%) saturate(105%)",
          // }}
        />
      </div>

      {/* Layer 1: Linear gradient from left to right */}
      {/* <div
        className="absolute inset-0 -z-20"
        style={{
          background: "linear-gradient(90deg, rgba(5,12,28,0.82) 0%, rgba(5,12,28,0.72) 28%, rgba(5,12,28,0.45) 55%, rgba(5,12,28,0.15) 80%, rgba(5,12,28,0.00) 100%)",
        }}
      /> */}

      {/* Layer 2: Subtle dark overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "rgba(0,0,0,0.18)",
        }}
      />

      <Container>
        <m.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Copy & Actions (Approximately 40% width) */}
          <m.div className="lg:col-span-5 md:col-span-8" variants={staggerItem}>
            <HeroContent
              eyebrow={HERO_DATA.eyebrow}
              heading={HERO_DATA.heading}
              description={HERO_DATA.description}
              primaryButton={HERO_DATA.primaryButton}
              secondaryButton={HERO_DATA.secondaryButton}
            />
          </m.div>

          {/* Right Column: Empty space to balance the grid and preserve background graphics */}
          <div className="hidden lg:block lg:col-span-7" />
        </m.div>
      </Container>
    </section>
  );
};

Hero.displayName = "Hero";
