import React from "react";
import Image from "next/image";
import { m } from "framer-motion";
import { HeroTrustBadge } from "./HeroTrustBadge";
import { imageReveal } from "@/lib/animations";

export interface HeroImageProps {
  src: string;
  alt: string;
  stat: string;
  label: string;
}

/**
 * Subcomponent rendering the right-side Hero image and trust badge overlays.
 * Implements a premium spatial scale-slide-fade reveal.
 */
export const HeroImage: React.FC<HeroImageProps> = ({ src, alt, stat, label }) => {
  return (
    <m.div
      variants={imageReveal}
      className="relative w-full max-w-xl mx-auto lg:max-w-none"
    >
      <div className="relative">
        <div className="relative rounded-card overflow-hidden shadow-lg border border-border/40 aspect-[4/3] md:aspect-[16/11]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
            priority
            sizes="(max-w-1024px) 100vw, 50vw"
          />
        </div>
        <HeroTrustBadge stat={stat} label={label} />
      </div>
    </m.div>
  );
};

HeroImage.displayName = "HeroImage";
