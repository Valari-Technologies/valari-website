"use client";

import React from "react";
import Link from "next/link";
import { m } from "framer-motion";
import { Container } from "@/components/common";

const ctaReveal = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const CTA: React.FC = () => {
  return (
    <section className="bg-white py-20 font-sans">
      <Container>
        <m.div
          variants={ctaReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative rounded-[32px] bg-[#0B3D91] text-white py-16 px-8 md:px-16 text-center shadow-2xl overflow-hidden z-10"
        >
          {/* Subtle Aesthetic Radial Light Background Decors */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[rgba(244,197,66,0.08)] rounded-full blur-3xl pointer-events-none" />

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight mb-4 leading-tight">
            Ready to Power Your Digital Growth?
          </h2>

          {/* Subheading */}
          <p className="text-slate-200/90 max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed font-medium">
            Let&apos;s discuss how our smart digital solutions can help your business reach its
            full potential. Our experts are ready to build your roadmap to success.
          </p>

          {/* Buttons */}
          <div className="flex justify-center">
            {/* Primary Button */}
            <Link href="/contact" className="w-full sm:w-auto">
              <m.div
                whileHover={{ scale: 1.025, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 bg-[#F4C542] hover:bg-[#e0b433] text-[#051126] font-bold rounded-full transition-colors shadow-lg hover:shadow-xl cursor-pointer text-center select-none"
              >
                Get a Free Consultation
              </m.div>
            </Link>
          </div>
        </m.div>
      </Container>
    </section>
  );
};

CTA.displayName = "CTA";
