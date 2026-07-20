"use client";

import React from "react";
import { m } from "framer-motion";
import { Container } from "@/components/common";
import { Briefcase, Calendar, HelpCircle, UserPlus, ArrowRight } from "lucide-react";

export const ContactOptions: React.FC = () => {
  const options = [
    {
      title: "Business Inquiry",
      desc: "Discuss a new project, software requirements, or system integrations.",
      icon: Briefcase,
      actionText: "Start Discussion",
      href: "#inquiry-form",
      color: "#0B3D91",
    },
    {
      title: "Schedule a Meeting",
      desc: "Book a direct video consultation with our senior project architecture leads.",
      icon: Calendar,
      actionText: "Book Consultation",
      href: "#inquiry-form",
      color: "#F4C542",
    },
    {
      title: "Technical Support",
      desc: "Existing clients receive rapid assistance on deployed systems.",
      icon: HelpCircle,
      actionText: "Open Ticket",
      href: "mailto:contact@valari.co.in",
      color: "#639FAB",
    },
    {
      title: "Career Opportunities",
      desc: "Join our remote-first technology engineering and design team.",
      icon: UserPlus,
      actionText: "View Openings",
      href: "mailto:contact@valari.co.in",
      color: "#E25C5C",
    },
  ];

  return (
    <section id="contact-options" className="relative bg-slate-50/50 py-24 border-b border-slate-100 font-sans overflow-hidden">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center mb-16">
          <span className="text-[#0B3D91] text-xs font-extrabold tracking-widest uppercase mb-3 block">
            Channels
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] mb-4">
            Choose How You&apos;d Like to Connect
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
            We provide multiple escalation paths to connect you directly to the correct team members.
          </p>
        </div>

        {/* Option Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto w-full">
          {options.map((option, idx) => {
            const Icon = option.icon;

            return (
              <m.a
                key={option.title}
                href={option.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white border border-slate-200/60 rounded-[28px] p-8 text-left hover:shadow-[0_24px_50px_rgba(11,61,145,0.06)] hover:border-[#0B3D91]/25 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between min-h-[280px] cursor-pointer"
              >
                {/* Background Subtle Blue Glow on Hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,61,145,0.01)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[28px] pointer-events-none" />

                <div>
                  {/* Icon Circle */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-6 shrink-0 shadow-sm transition-all duration-300 group-hover:rotate-6 group-hover:scale-105"
                    style={{ backgroundColor: `${option.color}15`, color: option.color }}
                  >
                    <Icon size={20} className="stroke-[2.5]" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0A2540] group-hover:text-[#0B3D91] transition-colors mb-3 leading-tight">
                    {option.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                    {option.desc}
                  </p>
                </div>

                {/* Bottom Action link */}
                <div className="flex items-center gap-1 text-[#0B3D91] font-bold text-xs group-hover:translate-x-1 transition-transform duration-300">
                  <span>{option.actionText}</span>
                  <ArrowRight size={14} />
                </div>
              </m.a>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
