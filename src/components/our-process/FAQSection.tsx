"use client";

import React, { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Container } from "@/components/common";
import { ChevronDown } from "lucide-react";

export const FAQSection: React.FC = () => {
  const faqs = [
    {
      q: "What is your typical project timeline?",
      a: "Depending on system complexity, discovery & UX design occupies 3-4 weeks, engineering takes 4-12 weeks, and QA validation takes 1-2 weeks. We map exact delivery milestones in stage 2.",
    },
    {
      q: "How do we track progress during development?",
      a: "We maintain weekly live feature demos, direct Slack communication channels, and bi-weekly sprint backlog evaluations so you are fully informed.",
    },
    {
      q: "Can you collaborate with our existing in-house team?",
      a: "Absolutely. We routinely integrate with customer design systems, coordinate Github branches, align linting protocols, and host hybrid sprint planning sessions.",
    },
    {
      q: "What post-launch support guarantees do you offer?",
      a: "We provide comprehensive SLA agreements detailing database backup routines, real-time alert logs, patch configurations, and DevOps support packages.",
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

        {/* FAQs Accordion List */}
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
