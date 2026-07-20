"use client";

import React, { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Container } from "@/components/common";
import { ChevronDown } from "lucide-react";

export const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "Why should I choose Valari Technologies?",
      a: "We act as your strategic technology partner. We align development metrics strictly to business outcomes, deliver weekly working demos, and provide direct access to senior engineering leads without layers of overhead managers.",
    },
    {
      q: "How does your development process work?",
      a: "We follow an agile development process comprised of 8 distinct standard stages: Discovery, Planning, Architecture, UI/UX Design, Development, Testing, Deployment, and SLA Support.",
    },
    {
      q: "Do you provide post-launch support?",
      a: "Yes. Every client relationship continues post-launch through flexible SLA contracts detailing database backup checks, server configuration adjustments, and real-time monitoring updates.",
    },
    {
      q: "Which industries do you serve?",
      a: "We engineer customized software solutions across diverse domains, including Healthcare (HIPAA), Education, Retail & E-commerce, Manufacturing, Finance, Startups, Logistics, and Real Estate.",
    },
    {
      q: "Can you modernize existing legacy software?",
      a: "Absolutely. We specialize in digital transformation services, refactoring slow monolithic scripts into fast, scalable next-gen applications.",
    },
    {
      q: "How long does a project take?",
      a: "Depending on complexity, typical initial platforms are scoped at 6 to 14 weeks. Stage 2 (Planning) maps precise timelines and resource parameters.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-slate-50/50 py-24 border-b border-slate-100 font-sans overflow-hidden">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center mb-16">
          <span className="text-[#0B3D91] text-xs font-extrabold tracking-widest uppercase mb-3 block">
            Information
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
            Everything you need to know about our project planning, agile development sprints, and post-launch SLAs.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4 max-w-3xl mx-auto w-full">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white border border-slate-150 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#0B3D91]/20 shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer select-none"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0A2540] hover:text-[#0B3D91] transition-colors pr-4">
                    {faq.q}
                  </span>
                  <m.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 text-slate-400 group-hover:text-[#0B3D91]"
                  >
                    <ChevronDown size={18} className="stroke-[2.5]" />
                  </m.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden border-t border-slate-50"
                    >
                      <div className="p-6 text-slate-500 text-xs sm:text-sm leading-relaxed text-left">
                        {faq.a}
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
