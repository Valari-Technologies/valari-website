"use client";

import React from "react";
import { m } from "framer-motion";
import { Lightbulb, TrendingUp, Target } from "lucide-react";
import { Container, Card } from "@/components/common";
import { VALUE_PROPS_DATA } from "@/data/features";

import { staggerContainer, staggerItem } from "@/lib/animations";

// Icon mapping dictionary
const ICON_MAP = {
  Lightbulb: Lightbulb,
  TrendingUp: TrendingUp,
  Target: Target,
};

// Theme color styling mapping for the icon badges
const THEME_CLASSES = {
  blue: {
    bg: "bg-[rgba(11,94,215,0.08)]",
    text: "text-primary",
  },
  gold: {
    bg: "bg-[rgba(244,197,66,0.12)]",
    text: "text-[#8a6500]",
  },
  purple: {
    bg: "bg-[rgba(99,102,241,0.08)]",
    text: "text-indigo-600",
  },
};

/**
 * ValueProps section below the Hero, conveying core strategic advantages of Valari.
 * Employs clean vector icons, rounded cards, and subtle stagger enter animations.
 */
export const ValueProps: React.FC = () => {
  return (
    <section className="bg-section-alt py-20 md:py-24 border-t border-b border-border/40 font-sans">
      <Container>
        <m.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Centered Heading Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <m.h2
              variants={staggerItem}
              className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4 leading-tight"
            >
              {VALUE_PROPS_DATA.heading}
            </m.h2>
            <m.p
              variants={staggerItem}
              className="text-base md:text-lg text-text-secondary leading-relaxed"
            >
              {VALUE_PROPS_DATA.description}
            </m.p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUE_PROPS_DATA.items.map((item, idx) => {
              const IconComponent = ICON_MAP[item.iconName];
              const theme = THEME_CLASSES[item.theme];

              return (
                <m.div key={idx} variants={staggerItem} className="h-full">
                  <Card
                    variant="default"
                    interactive
                    className="flex flex-col items-start text-left bg-surface h-full p-8"
                  >
                    {/* Icon Indicator Badge */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shrink-0 ${theme.bg} ${theme.text}`}
                    >
                      <IconComponent size={24} aria-hidden="true" />
                    </div>

                    {/* Copy Details */}
                    <h3 className="text-lg font-bold text-text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                </m.div>
              );
            })}
          </div>
        </m.div>
      </Container>
    </section>
  );
};

ValueProps.displayName = "ValueProps";
