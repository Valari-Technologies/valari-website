"use client";

import React from "react";
import { m } from "framer-motion";
import { Container } from "@/components/common";
import { ShieldCheck, CalendarRange, Workflow, HeartHandshake } from "lucide-react";

export const WhyChooseProcess: React.FC = () => {
  const cards = [
    {
      title: "Transparent Communication",
      desc: "Direct access to our senior engineering leads via dedicated Slack channels, eliminating layers of overhead management.",
      icon: ShieldCheck,
      color: "#0B3D91",
    },
    {
      title: "Weekly Reporting & Demos",
      desc: "Every single week we showcase a live, working demo of the current milestone features, keeping you completely updated.",
      icon: CalendarRange,
      color: "#F4C542",
    },
    {
      title: "Agile Development",
      desc: "Bi-weekly sprint retrospectives allow us to easily pivot project specs to match immediate market demands.",
      icon: Workflow,
      color: "#639FAB",
    },
    {
      title: "Long-Term Partnership",
      desc: "We look beyond immediate contract parameters, advising you on cloud cost optimization, scalability models, and technology roadmaps.",
      icon: HeartHandshake,
      color: "#E25C5C",
    },
  ];

  return (
    <section className="relative bg-white py-24 border-b border-slate-100 font-sans overflow-hidden">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center mb-16">
          <span className="text-[#0B3D91] text-xs font-extrabold tracking-widest uppercase mb-3 block">
            Core Values
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] mb-4">
            Why Our Process Works
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
            We prioritize visibility, predictable delivery, and absolute clarity at every single stage of the engineering cycle.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto w-full">
          {cards.map((card, idx) => {
            const Icon = card.icon;

            return (
              <m.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white border border-slate-150 rounded-[28px] p-8 text-left hover:shadow-[0_20px_40px_rgba(15,23,42,0.06)] hover:border-[#0B3D91]/20 transition-all duration-300 flex flex-col justify-between min-h-[250px]"
              >
                <div>
                  {/* Icon Circle */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: `${card.color}15`, color: card.color }}
                  >
                    <Icon size={18} className="stroke-[2.5]" />
                  </div>

                  <h3 className="text-base font-bold text-[#0A2540] mb-3 group-hover:text-[#0B3D91] transition-colors leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </m.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
