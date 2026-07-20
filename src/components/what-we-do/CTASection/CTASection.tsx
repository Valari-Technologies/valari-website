"use client";

import React from "react";
import Link from "next/link";
import { m } from "framer-motion";
import { Container } from "@/components/common";

const sectionReveal = {
  hidden: { opacity: 0, y: 48 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const CTASection: React.FC = () => {
  return (
    <section className="bg-white py-24 font-sans relative overflow-hidden">
      {/* Subtle radial gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[700px] h-[400px] bg-[rgba(11,61,145,0.02)] rounded-full blur-[100px] pointer-events-none" />

      <Container>
        <m.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative rounded-[32px] bg-[#0A2540] text-white py-16 px-8 md:px-16 text-center shadow-2xl overflow-hidden"
        >
          {/* Subtle overlay glow */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[rgba(242,201,76,0.08)] rounded-full blur-3xl pointer-events-none" />

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight mb-4 leading-tight">
            Ready to scale your digital presence?
          </h2>

          {/* Subheading */}
          <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed font-medium">
            Let&apos;s discuss how our smart digital solutions can help your business reach its
            full potential. Our experts are ready to build your roadmap to success.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            {/* Primary Button */}
            <Link href="/contact" className="w-full sm:w-auto">
              <m.div
                whileHover={{
                  scale: 1.03,
                  y: -3,
                  boxShadow: "0 10px 25px rgba(242, 201, 76, 0.25)",
                }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto px-8 py-4 bg-[#F2C94C] hover:bg-[#e0b83b] text-[#0A2540] font-bold rounded-full transition-colors shadow-lg hover:shadow-xl cursor-pointer text-center select-none"
              >
                Get a Free Consultation
              </m.div>
            </Link>

            {/* Secondary Button */}
            <Link href="/who-we-are" className="w-full sm:w-auto">
              <m.div
                whileHover={{
                  scale: 1.03,
                  y: -3,
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  boxShadow: "0 10px 25px rgba(255, 255, 255, 0.05)",
                }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto px-8 py-4 border border-white/30 hover:border-white/50 bg-white/5 text-white font-bold rounded-full transition-all shadow-md cursor-pointer text-center select-none"
              >
                View Case Studies
              </m.div>
            </Link>
          </div>
        </m.div>
      </Container>
    </section>
  );
};

CTASection.displayName = "CTASection";
