"use client";

import React, { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Container } from "@/components/common";
import { ChevronDown } from "lucide-react";

export const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "How quickly will you respond?",
      a: "Our sales coordinators and engineering directors evaluate inbound scoping tickets within 15 minutes. Detailed proposals are drafted within 1 business day.",
    },
    {
      q: "Do you sign NDAs (Non-Disclosure Agreements)?",
      a: "Yes. We enforce strict privacy guidelines. We routinely execute NDAs before discovery conference calls to secure your proprietary logic parameters.",
    },
    {
      q: "Can you work with international clients?",
      a: "Absolutely. We support customers across diverse geographical regions, structuring development workflows and meeting timelines to match international time zones.",
    },
    {
      q: "Do you provide post-launch maintenance?",
      a: "Yes. Every client contract includes continuous scaling support option levels, monitoring server logs (Sentry/Datadog), and deploying regular software package updates.",
    },
    {
      q: "What industries do you support?",
      a: "We engineer customized software solutions across Healthcare (HIPAA), Education, Retail & E-commerce, Manufacturing, Finance, Logistical systems, and Real Estate sectors.",
    },
    {
      q: "How long does estimation take?",
      a: "Initial scoping guidelines are determined during stage 2 (Planning). A finalized project blueprint budget is generally submitted within 2 business days after scoping calls.",
    },
    {
      q: "Do you offer cloud migration services?",
      a: "Yes. We routinely orchestrate AWS and Azure setups, migrating slow legacy infrastructures into robust, cost-effective serverless pipelines.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-white py-24 border-b border-slate-100 font-sans overflow-hidden">
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
                      className="overflow-hidden border-t border-slate-55"
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
