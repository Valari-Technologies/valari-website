"use client";

import React, { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Container } from "@/components/common";
import { Plus, Minus } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps {
  faqs: FAQItem[];
}

export const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Structured FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="bg-[#F8FAFC] py-20 border-b border-slate-100 font-sans">
      {/* Inject FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Container>
        <div className="max-w-3xl mx-auto flex flex-col gap-12">
          {/* Centered Heading */}
          <div className="text-center flex flex-col items-center">
            <span className="text-[#0B3D91] text-xs font-extrabold tracking-widest uppercase mb-3 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
              Find answers to common questions about our technical execution and delivery metrics.
            </p>
          </div>

          {/* Accordion List */}
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden text-left transition-all"
                  style={{
                    borderColor: isOpen ? "#0B5ED7" : "rgba(226, 232, 240, 0.8)",
                  }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 font-bold text-slate-800 text-base md:text-lg hover:text-[#0B3D91] transition-colors outline-none cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <div
                      className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 transition-transform duration-300"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      {isOpen ? <Minus size={14} className="stroke-[3]" /> : <Plus size={14} className="stroke-[3]" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <m.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: { height: { duration: 0.25 }, opacity: { duration: 0.2 } },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: { height: { duration: 0.2 }, opacity: { duration: 0.15 } },
                        }}
                      >
                        <div className="px-6 pb-6 pt-1 text-sm md:text-base text-slate-500 leading-relaxed font-medium border-t border-slate-50">
                          {faq.answer}
                        </div>
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

FAQ.displayName = "FAQ";
