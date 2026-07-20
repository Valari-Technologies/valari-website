"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Megaphone, MessageSquare, Code2, Palette, Workflow, Layers } from "lucide-react";
import { ServiceItem } from "@/types/service";
import Image from "next/image";
import { m } from "framer-motion";

// Icon mapping dictionary
const ICON_MAP = {
  Megaphone: Megaphone,
  MessageSquare: MessageSquare,
  Code2: Code2,
  Palette: Palette,
  Workflow: Workflow,
  Layers: Layers,
};

const imageReveal = {
  hidden: { scale: 0.96 },
  show: {
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export interface ServiceCardProps {
  service: ServiceItem;
}

/**
 * ServiceCard Component representing an individual service card.
 * Employs rounded-[24px] corners, hover elevation shifts, and custom icon/arrow transitions.
 */
export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = ICON_MAP[service.iconName as keyof typeof ICON_MAP] || Code2;

  return (
    <article className="h-full">
      <Link
        href={service.href}
        className="group relative flex flex-col text-left bg-white border border-slate-200/80 rounded-[24px] h-[480px] justify-between shadow-sm hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)] hover:border-[#0B5ED7] hover:-translate-y-[6px] hover:scale-[1.01] transition-all duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer overflow-hidden"
        aria-label={`Read more about our ${service.title} service`}
      >
        {/* Top 40%: Image Area */}
        <div className="h-[40%] w-full relative p-4 pb-0 overflow-hidden">
          <div className="relative w-full h-full rounded-[16px] overflow-hidden">
            <m.div variants={imageReveal} className="relative w-full h-full">
              <Image
                src={service.imageSrc || "/images/placeholder.jpg"}
                alt={service.title}
                fill
                priority
                className="object-cover object-center transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] group-hover:brightness-[108%]"
                sizes="(max-w-768px) 100vw, 33vw"
              />
              {/* Premium gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(180deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.18))",
                }}
              />
            </m.div>
          </div>
        </div>

        {/* Bottom 60%: Content Area */}
        <div className="h-[60%] p-8 pt-5 flex flex-col justify-between">
          <div>
            {/* Circular Brand-Colored Icon Container */}
            <div className="w-12 h-12 rounded-full bg-[#0B3D91]/5 text-slate-700 flex items-center justify-center mb-5 transition-colors duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[#0B3D91]/10 group-hover:text-[#0B5ED7] shadow-sm shrink-0">
              <IconComponent
                size={22}
                className="transition-transform duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08] group-hover:rotate-[4deg]"
                aria-hidden="true"
              />
            </div>

            {/* Service Title */}
            <h3 className="text-xl font-bold text-[#111827] mb-3 transition-colors duration-[220ms] ease-out group-hover:text-[#0B5ED7] group-hover:translate-x-1 transform transition-transform">
              {service.title}
            </h3>

            {/* Service Description (Static) */}
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              {service.description}
            </p>
          </div>

          {/* CTA Link Action */}
          <div className="inline-flex items-center text-sm font-bold text-[#0B3D91] select-none">
            <span>Learn More</span>
            <ArrowRight
              className="w-4 h-4 ml-1.5 transition-transform duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5"
              aria-hidden="true"
            />
          </div>
        </div>
      </Link>
    </article>
  );
};

ServiceCard.displayName = "ServiceCard";
