"use client";

import React from "react";
import Link from "next/link";
import { m } from "framer-motion";
import { Container } from "@/components/common";

export interface CTAProps {
  id?: string;
  title?: string;
  description?: string;
  buttonText?: string;
}

export const CTA: React.FC<CTAProps> = ({
  id = "contact",
  title = "Ready to transform your business with modern technology?",
  description = "Partner with Valari Technologies to build scalable, secure, and future-ready digital solutions.",
  buttonText = "Schedule a Consultation",
}) => {
  return (
    <section id={id} className="bg-white py-16 font-sans relative overflow-hidden">
      <Container>
        <m.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[32px] bg-[#0A2540] text-white py-14 px-8 md:px-16 text-center shadow-xl overflow-hidden z-10"
        >
          {/* Background glows */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[rgba(242,201,76,0.08)] rounded-full blur-3xl pointer-events-none" />

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 leading-tight">
            {title}
          </h2>

          {/* Description */}
          <p className="text-slate-300 max-w-xl mx-auto mb-8 text-sm md:text-base leading-relaxed font-medium">
            {description}
          </p>

          {/* Action Button */}
          <div className="flex justify-center">
            <Link href="/contact">
              <m.div
                whileHover={{
                  scale: 1.03,
                  y: -3,
                  boxShadow: "0 10px 25px rgba(242, 201, 76, 0.25)",
                }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-3.5 bg-[#F2C94C] hover:bg-[#e0b83b] text-[#0A2540] font-bold rounded-full transition-colors shadow-lg hover:shadow-xl cursor-pointer text-center select-none text-sm md:text-base"
              >
                {buttonText}
              </m.div>
            </Link>
          </div>
        </m.div>
      </Container>
    </section>
  );
};

CTA.displayName = "CTA";
