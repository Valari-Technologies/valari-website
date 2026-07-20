"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { m } from "framer-motion";
import { ArrowRight, Megaphone, MessageSquare, Code2, Palette, Workflow, Layers } from "lucide-react";
import { ServiceGridItem } from "./data";

const ICON_MAP = {
  Megaphone: Megaphone,
  MessageSquare: MessageSquare,
  Code2: Code2,
  Palette: Palette,
  Workflow: Workflow,
  Layers: Layers,
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.96, x: 20 },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const tagListStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.35,
    },
  },
};

const tagItemReveal = {
  hidden: { opacity: 0, x: -12 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export interface ServiceCardProps {
  service: ServiceGridItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const router = useRouter();
  const IconComponent = ICON_MAP[service.iconName as keyof typeof ICON_MAP] || Code2;

  const handlePrefetchAndScroll = () => {
    // Save scroll position for smooth scroll restoration when coming back
    sessionStorage.setItem("valari_services_scroll_y", window.scrollY.toString());
  };

  const handleMouseEnter = () => {
    // Prefetch target dynamic detail route on hover for instant navigation
    router.prefetch(`/what-we-do/${service.slug}`);
  };

  return (
    <article className="h-full">
      <Link
        href={`/what-we-do/${service.slug}`}
        onClick={handlePrefetchAndScroll}
        onMouseEnter={handleMouseEnter}
        className="group relative flex flex-col text-left bg-white border border-[#E5E7EB] rounded-[24px] h-[520px] justify-between shadow-sm hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)] hover:border-[#0B5ED7] hover:-translate-y-[8px] hover:scale-[1.015] transition-all duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer overflow-hidden"
        aria-label={`Read more about our ${service.title} service`}
      >
        {/* Top 40%: Image Container */}
        <div className="h-[40%] w-full relative p-4 pb-0 overflow-hidden">
          <div className="relative w-full h-full rounded-[16px] overflow-hidden">
            <m.div variants={imageReveal} className="relative w-full h-full">
              <Image
                src={service.imageSrc}
                alt={service.title}
                fill
                loading="lazy"
                className="object-cover object-center transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08] group-hover:brightness-[108%]"
                sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(180deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.18))",
                }}
              />
            </m.div>
          </div>
        </div>

        {/* Bottom 60%: Content Container */}
        <div className="h-[60%] p-8 pt-5 flex flex-col justify-between">
          <div>
            {/* Header: Icon & Title */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-11 h-11 rounded-full bg-[#0B3D91]/5 text-slate-700 flex items-center justify-center transition-all duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[#0B3D91]/10 group-hover:text-[#0B5ED7] shadow-sm shrink-0">
                <IconComponent
                  size={20}
                  className="transition-transform duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.1] group-hover:rotate-[8deg]"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-lg font-bold text-[#111827] transition-all duration-[220ms] ease-out group-hover:text-[#0B5ED7] group-hover:translate-x-1 transform">
                {service.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-500 leading-relaxed font-medium mb-6">
              {service.description}
            </p>

            {/* Tags / Tech Stack List (Sequential fade/slide animation) */}
            <m.div
              variants={tagListStagger}
              className="flex flex-wrap gap-2"
            >
              {service.tags.map((tag) => (
                <m.span
                  key={tag}
                  variants={tagItemReveal}
                  className="text-[11px] font-bold uppercase tracking-wider text-[#639FAB] bg-slate-100 rounded-md px-2.5 py-1 select-none"
                >
                  {tag}
                </m.span>
              ))}
            </m.div>
          </div>

          {/* CTA Link Action */}
          <div className="inline-flex items-center text-sm font-bold text-[#0B3D91] select-none">
            <span>Learn More</span>
            <ArrowRight
              className="w-4 h-4 ml-1.5 transition-transform duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2"
              aria-hidden="true"
            />
          </div>
        </div>
      </Link>
    </article>
  );
};

ServiceCard.displayName = "ServiceCard";
