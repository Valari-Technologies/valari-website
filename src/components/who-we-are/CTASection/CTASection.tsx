"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { m } from "framer-motion";
import { Container } from "@/components/common";

const sectionReveal = {
  hidden: { opacity: 0, y: 32 },
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
    <section id="cta" className="relative py-28 font-sans overflow-hidden bg-[#0A2540] text-white">
      {/* Background Image with Readability Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/growth.webp"
          alt="Growth background"
          fill
          className="object-cover object-center pointer-events-none"
        />
        <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px]" />
      </div>

      {/* Floating Particles/Shapes */}
      {[...Array(6)].map((_, i) => (
        <m.div
          key={i}
          animate={{
            x: [0, Math.sin(i) * 35, Math.cos(i) * -35, 0],
            y: [0, Math.cos(i) * -45, Math.sin(i) * 45, 0],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-20 h-20 bg-white/5 rounded-full blur-xl pointer-events-none"
          style={{
            top: `${20 + i * 12}%`,
            left: `${15 + i * 14}%`,
          }}
        />
      ))}

      <Container className="relative z-10">
        <m.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto text-center flex flex-col items-center p-12 md:p-16 rounded-[40px] bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl relative overflow-hidden"
        >
          {/* Glass Reflection Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none" />

          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-2xl leading-relaxed mb-10 font-medium">
            Build scalable software, automate operations, and accelerate digital growth with Valari Technologies.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto select-none">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-[#F4C542] hover:bg-[#e0b533] text-slate-900 font-bold rounded-full transition-all shadow-lg text-sm text-center transform hover:scale-[1.015] hover:-translate-y-0.5"
            >
              Start Your Project
            </Link>
            {/* <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-full transition-all shadow-md text-sm text-center transform hover:scale-[1.015] hover:-translate-y-0.5"
            >
              Schedule a Consultation
            </Link> */}
          </div>
        </m.div>
      </Container>
    </section>
  );
};

CTASection.displayName = "CTASection";
