"use client";

import React from "react";
import { m } from "framer-motion";
import { Container } from "@/components/common";
import { Clock, ShieldCheck, Cpu, MessageSquare, Handshake, Shield } from "lucide-react";

export const WhyContactUs: React.FC = () => {
  const cards = [
    {
      title: "Fast Response Time",
      desc: "Our sales team and technical coordinators evaluate incoming inquiry tickets within 15 minutes.",
      icon: Clock,
      color: "#0B3D91",
    },
    {
      title: "Business-First Consultation",
      desc: "We understand your monetization structures and long-term business goals before sketching any wireframes.",
      icon: ShieldCheck,
      color: "#F4C542",
    },
    {
      title: "Experienced Engineers",
      desc: "You will collaborate directly with our senior full-stack engineers, bypassing sales coordinators.",
      icon: Cpu,
      color: "#639FAB",
    },
    {
      title: "Transparent Communication",
      desc: "Get real-time updates and weekly live feature demonstrations to monitor development progress.",
      icon: MessageSquare,
      color: "#E25C5C",
    },
    {
      title: "Long-Term Partnership",
      desc: "We support you post-launch with cloud optimizations, database logs, and scalable server checkups.",
      icon: Handshake,
      color: "#8B5CF6",
    },
    {
      title: "Enterprise Security",
      desc: "Every interaction is protected under strictly enforced non-disclosure agreements (NDAs) and cloud tokens.",
      icon: Shield,
      color: "#EC4899",
    },
  ];

  return (
    <section className="relative bg-white py-24 border-b border-slate-100 font-sans overflow-hidden">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center mb-16">
          <span className="text-[#0B3D91] text-xs font-extrabold tracking-widest uppercase mb-3 block">
            Values
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] mb-4">
            Why Contact Valari
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
            We structure our support pipelines to maximize clarity and technical responsiveness.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
          {cards.map((card, idx) => {
            const Icon = card.icon;

            return (
              <m.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-slate-50/50 border border-slate-150 rounded-[28px] p-8 text-left hover:shadow-[0_24px_50px_rgba(11,61,145,0.06)] hover:bg-white hover:border-[#0B3D91]/25 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between min-h-[250px] cursor-default"
              >
                {/* Background Subtle Blue Glow on Hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,61,145,0.01)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[28px] pointer-events-none" />

                <div>
                  {/* Icon Circle */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-6 shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6"
                    style={{ backgroundColor: `${card.color}15`, color: card.color }}
                  >
                    <Icon size={20} className="stroke-[2.5]" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0A2540] mb-3 group-hover:text-[#0B3D91] transition-colors leading-tight">
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
