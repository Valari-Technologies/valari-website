"use client";

import React, { useRef, useState } from "react";
import { m } from "framer-motion";
import { Container } from "@/components/common";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const CTASection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <section className="relative py-28 font-sans bg-white overflow-hidden">
      <Container>
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
          className="relative max-w-5xl mx-auto rounded-[40px] bg-gradient-to-br from-[#0A192F] via-[#0B3D91] to-[#0A2540] p-12 sm:p-16 text-center text-white shadow-2xl border border-white/10 overflow-hidden cursor-default select-none"
        >
          {/* Floating background mesh glow responsive to mouse movement */}
          <m.div
            animate={{
              x: mousePosition.x * 45,
              y: mousePosition.y * 45,
            }}
            transition={{ type: "spring", stiffness: 120, damping: 25 }}
            className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] -z-10 bg-[radial-gradient(circle_at_center,rgba(99,159,171,0.25)_0%,transparent_60%)] pointer-events-none filter blur-3xl"
          />

          {/* Floating Geometric Shapes */}
          <m.div
            animate={{
              x: mousePosition.x * -30,
              y: mousePosition.y * -30,
              rotate: mousePosition.x * 20,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 30 }}
            className="absolute top-10 left-10 w-16 h-16 rounded-3xl bg-white/5 border border-white/10 pointer-events-none"
          />
          <m.div
            animate={{
              x: mousePosition.x * 30,
              y: mousePosition.y * -20,
              rotate: mousePosition.y * -20,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 30 }}
            className="absolute bottom-12 right-12 w-24 h-24 rounded-full bg-white/5 border border-white/10 pointer-events-none filter blur-[1px]"
          />

          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 tracking-tight leading-tight max-w-2xl mx-auto"
          >
            Ready to Accelerate Your Digital Transformation?
          </m.h2>

          {/* Paragraph */}
          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/80 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-10"
          >
            Let&apos;s discuss how our refined agile software development process can deliver secure, robust, and scalable solutions for your business.
          </m.p>

          {/* CTAs */}
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center items-center relative z-10"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-[#0B3D91] font-bold text-sm hover:bg-slate-50 hover:shadow-[0_20px_40px_rgba(255,255,255,0.15)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/who-we-are"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white font-bold text-sm hover:bg-white/20 transition-all duration-300"
            >
              <span>About Valari</span>
            </Link>
          </m.div>
        </div>
      </Container>
    </section>
  );
};
