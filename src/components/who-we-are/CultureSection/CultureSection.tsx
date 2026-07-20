"use client";

import React from "react";
import { m } from "framer-motion";
import { Container } from "@/components/common";
import { Lightbulb, Users2, GraduationCap, Eye, Heart } from "lucide-react";

const sectionReveal = {
  hidden: { opacity: 0, y: 48 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.08,
    },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const CULTURE_CARDS = [
  {
    title: "Innovation",
    description: "Bypassing rigid legacy templates to engineer unique, modern, and high-performance digital tools.",
    icon: Lightbulb,
    color: "rgba(242, 201, 76, 0.12)", // gold tint
    iconColor: "#B58900",
  },
  {
    title: "Collaboration",
    description: "Integrating as an extension of your internal teams to solve operational bottlenecks together.",
    icon: Users2,
    color: "rgba(11, 94, 215, 0.1)", // blue tint
    iconColor: "#0B5ED7",
  },
  {
    title: "Continuous Learning",
    description: "Proactively researching and adopting next-gen languages, cloud pipelines, and AI structures.",
    icon: GraduationCap,
    color: "rgba(139, 92, 246, 0.1)", // purple tint
    iconColor: "#8B5CF6",
  },
  {
    title: "Transparency",
    description: "Maintaining clear project scopes, direct communication channels, and hourly development reports.",
    icon: Eye,
    color: "rgba(16, 185, 129, 0.1)", // green tint
    iconColor: "#10B981",
  },
  {
    title: "Customer First",
    description: "Prioritizing your business outcomes and long-term tech durability over generic vanity milestones.",
    icon: Heart,
    color: "rgba(239, 68, 68, 0.1)", // red tint
    iconColor: "#EF4444",
  },
];

export const CultureSection: React.FC = () => {
  return (
    <section id="culture" className="bg-[#F8FAFC] py-24 border-b border-slate-100 font-sans">
      <Container>
        <m.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-16"
        >
          {/* Centered Heading */}
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
            <span className="text-[#0B3D91] text-xs font-extrabold tracking-widest uppercase mb-3 block">
              Culture
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] mb-4">
              Our Core Company Values
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
              We build systems modeled on these central cultural pillars to guarantee execution quality.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-6xl mx-auto w-full">
            {CULTURE_CARDS.map((card) => {
              const IconComponent = card.icon;
              return (
                <m.div
                  key={card.title}
                  variants={cardReveal}
                  className="group relative flex flex-col text-left p-8 bg-white border border-slate-200/80 rounded-[32px] shadow-sm hover:shadow-[0_30px_60px_rgba(15,23,42,0.15)] hover:border-[#0B5ED7]/20 hover:-translate-y-[8px] hover:scale-[1.015] transition-all duration-[300ms] ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden cursor-pointer"
                >
                  {/* Hover Background Glow */}
                  <div
                    className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ backgroundColor: card.color }}
                  />

                  {/* Icon Container */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-6 shrink-0 transition-colors"
                    style={{ backgroundColor: card.color }}
                  >
                    <IconComponent
                      size={20}
                      className="transition-transform duration-[400ms] group-hover:scale-110 group-hover:rotate-[5deg]"
                      style={{ color: card.iconColor }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#0A2540] mb-3 group-hover:text-[#0B5ED7] transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {card.description}
                  </p>
                </m.div>
              );
            })}
          </div>
        </m.div>
      </Container>
    </section>
  );
};

CultureSection.displayName = "CultureSection";
