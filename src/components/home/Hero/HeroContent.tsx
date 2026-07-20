import React from "react";
import Link from "next/link";
import { m } from "framer-motion";
import { Button } from "@/components/common";
import { heroSequence, staggerItem } from "@/lib/animations";

export interface HeroContentProps {
  eyebrow: string;
  heading: {
    normalLine1: string;
    normalLine2: string;
    accentLine1: string;
    accentLine2: string;
  };
  description: string;
  primaryButton: {
    label: string;
    href: string;
  };
  secondaryButton: {
    label: string;
    href: string;
  };
}

/**
 * Subcomponent rendering the left-side text triggers, headings, and CTAs of the Hero.
 * Implements a premium, sequential fade-and-glide reveal for each typographic line.
 */
export const HeroContent: React.FC<HeroContentProps> = ({
  eyebrow,
  heading,
  description,
  primaryButton,
  secondaryButton,
}) => {
  return (
    <m.div
      variants={heroSequence}
      className="flex flex-col items-start text-left"
    >
      {/* Eyebrow Trigger badge */}
      <m.div
        variants={staggerItem}
        className="inline-flex items-center gap-2 mb-4"
        style={{ textShadow: "0 2px 8px rgba(0,0,0,0.45)" }}
      >
        <span className="text-xs font-bold tracking-widest text-[#F4C542] uppercase">
          {eyebrow}
        </span>
        <span className="w-8 h-px bg-[#F4C542]/30" />
      </m.div>

      {/* Heading Line blocks */}
      <h1
        className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight mb-6"
        style={{ textShadow: "0 2px 8px rgba(0,0,0,0.45)" }}
      >
        {heading.normalLine1 && (
          <m.span variants={staggerItem} className="block text-[#FFFFFF]">
            {heading.normalLine1}
          </m.span>
        )}
        {heading.normalLine2 && (
          <m.span variants={staggerItem} className="block text-[#FFFFFF]">
            {heading.normalLine2}
          </m.span>
        )}
        {heading.accentLine1 && (
          <m.span variants={staggerItem} className="block text-[#F4C542]">
            {heading.accentLine1}
          </m.span>
        )}
        {heading.accentLine2 && (
          <m.span variants={staggerItem} className="block text-[#F4C542]">
            {heading.accentLine2}
          </m.span>
        )}
      </h1>

      {/* Description copy */}
      <m.p
        variants={staggerItem}
        className="text-base md:text-lg leading-relaxed mb-8 max-w-xl"
        style={{
          color: "rgba(255,255,255,0.92)",
          textShadow: "0 2px 8px rgba(0,0,0,0.45)",
        }}
      >
        {description}
      </m.p>

      {/* CTA Button Actions */}
      <m.div
        variants={staggerItem}
        className="flex flex-wrap items-center gap-4"
        style={{ textShadow: "0 2px 8px rgba(0,0,0,0.45)" }}
      >
        <Link href={primaryButton.href} tabIndex={-1}>
          <Button variant="primary" size="lg">
            {primaryButton.label}
          </Button>
        </Link>
        <Link href={secondaryButton.href} tabIndex={-1}>
          <Button variant="secondary" size="lg">
            {secondaryButton.label}
          </Button>
        </Link>
      </m.div>
    </m.div>
  );
};

HeroContent.displayName = "HeroContent";
