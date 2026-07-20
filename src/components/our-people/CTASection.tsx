"use client";

import React, { useRef, useState } from "react";
import { m } from "framer-motion";
import { Container } from "@/components/common";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const CTASection: React.FC = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ctaRef.current) return;
    const rect = ctaRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <section className="py-24 font-sans bg-white relative w-full overflow-hidden select-none">
      <Container>
        <m.div
          ref={ctaRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full rounded-[40px] px-8 py-20 text-center flex flex-col items-center justify-center overflow-hidden border border-[#0B3D91]/15 shadow-2xl bg-gradient-to-br from-[#0B3D91] to-[#0A2540] text-white"
        >
          {/* Shimmer sweep effect */}
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[linear-gradient(45deg,transparent_45%,rgba(255,255,255,0.06)_50%,transparent_55%)] -z-10 animate-sweep pointer-events-none" />

          {/* Mouse reactive glow overlay */}
          <m.div
            animate={{
              x: mousePosition.x * 60,
              y: mousePosition.y * 60,
            }}
            transition={{ type: "spring", stiffness: 80, damping: 25 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12)_0%,transparent_50%)] -z-10 opacity-70 pointer-events-none filter blur-xl"
          />

          {/* Content */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 max-w-2xl leading-[1.15]">
            Great Technology Starts With Great People
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mb-10 opacity-90">
            Behind every successful digital transformation is a passionate team committed to innovation, collaboration, and excellence. Let&apos;s build something extraordinary together.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-white text-[#0B3D91] font-bold text-sm shadow-md hover:bg-slate-50 hover:shadow-[0_12px_30px_rgba(255,255,255,0.15)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>Start Your Project</span>
              <ArrowRight size={16} />
            </Link>
            {/* <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-[#0B3D91]/30 border border-white/20 text-white font-bold text-sm hover:bg-[#0B3D91]/50 hover:border-white/45 transition-all duration-300"
            >
              <span>Contact Our Experts</span>
            </Link> */}
          </div>
        </m.div>
      </Container>
    </section>
  );
};
