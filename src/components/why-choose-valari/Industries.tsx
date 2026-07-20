"use client";

import React from "react";
import { m } from "framer-motion";
import { Container } from "@/components/common";
import { Stethoscope, GraduationCap, ShoppingBag, Factory, Landmark, Lightbulb, Truck, Home } from "lucide-react";

export const Industries: React.FC = () => {
  const industries = [
    { name: "Healthcare", desc: "Patient portals, HIPAA auditing compliance, medical records systems.", icon: Stethoscope, color: "#0B3D91" },
    { name: "Education", desc: "Interactive student portals, course schedulers, school backend portals.", icon: GraduationCap, color: "#F4C542" },
    { name: "Retail & E-commerce", desc: "Transaction gateways, client databases, stock inventory syncs.", icon: ShoppingBag, color: "#639FAB" },
    { name: "Manufacturing", desc: "Factory flow metrics, pipeline coordination, hardware tracking.", icon: Factory, color: "#E25C5C" },
    { name: "Finance", desc: "Auditable accounting workflows, client databases, secure payment portals.", icon: Landmark, color: "#8B5CF6" },
    { name: "Startups", desc: "MVP rapid loops, cloud deployments, highly responsive scaling setups.", icon: Lightbulb, color: "#EC4899" },
    { name: "Logistics", desc: "Real-time fleet maps, route optimizations, invoice management.", icon: Truck, color: "#10B981" },
    { name: "Real Estate", desc: "Interactive map listings, client consultation schedulers, document signing.", icon: Home, color: "#3B82F6" },
  ];

  return (
    <section className="relative bg-slate-50/50 py-24 border-b border-slate-100 font-sans overflow-hidden">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center mb-16">
          <span className="text-[#0B3D91] text-xs font-extrabold tracking-widest uppercase mb-3 block">
            Domain Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] mb-4">
            Industries We Empower
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
            We adapt our engineering standards to resolve critical business bottleneck challenges across diverse sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto w-full">
          {industries.map((item, idx) => {
            const Icon = item.icon;

            return (
              <m.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white border border-slate-150 rounded-[28px] p-6 hover:shadow-[0_15px_30px_rgba(15,23,42,0.06)] hover:border-[#0B3D91]/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[220px] text-left cursor-default overflow-hidden"
              >
                {/* Subtle Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#0B3D91]/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none" />

                <div>
                  {/* Icon Indicator */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    <Icon size={18} className="stroke-[2.5]" />
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[#0A2540] mb-2 group-hover:text-[#0B3D91] transition-colors leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed leading-normal">
                    {item.desc}
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
