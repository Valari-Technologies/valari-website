"use client";

import React, { useEffect, useRef } from "react";
import { m, animate, useInView } from "framer-motion";
import { Container } from "@/components/common";
import { Check } from "lucide-react";

const sectionReveal = {
  hidden: { opacity: 0, y: 48 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.1,
    },
  },
};

const itemReveal = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

interface CounterProps {
  value: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ value, suffix = "" }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      const node = ref.current;
      const controls = animate(0, value, {
        duration: 2.0,
        ease: [0.22, 1, 0.36, 1],
        onUpdate(latest) {
          node.textContent = Math.round(latest).toString() + suffix;
        },
      });
      return () => controls.stop();
    }
  }, [inView, value, suffix]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-black text-[#0B3D91] tracking-tight">
      0{suffix}
    </span>
  );
};

const STATS = [
  { value: 5, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Projects Completed" },
  { value: 99 , suffix: "%", label: "Operational Durability" },
];

const BULLET_POINTS = [
  { title: "Modern Technologies", desc: "Engineered using React, Next.js, Django, Node, and secure cloud pipelines." },
  { title: "Custom Solutions", desc: "Crafting bespoke modules tailored specifically to resolve your corporate bottlenecks." },
  { title: "Cloud Ready", desc: "Fully prepared for deployment on AWS, Google Cloud Platform, or hybrid architectures." },
  { title: "Business Focused", desc: "We direct development parameters strictly to drive conversion metrics and speed." },
];

export const TrustSection: React.FC = () => {
  return (
    <section id="trust" className="bg-white py-24 border-b border-slate-100 font-sans">
      <Container>
        <m.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        >
          {/* Left Column: Infographic & Stats counters */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            <m.div variants={itemReveal} className="p-8 rounded-[32px] bg-slate-50 border border-slate-200/60 shadow-sm flex flex-col gap-6">
              <h3 className="text-lg font-bold text-[#0A2540] mb-2">Metrics of Execution</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                {STATS.map((stat, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-1.5">
                    <Counter value={stat.value} suffix={stat.suffix} />
                    <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider leading-tight">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </m.div>

            {/* Graphic card placeholder decoration */}
            <m.div
              variants={itemReveal}
              className="p-8 rounded-[32px] bg-gradient-to-br from-[#0B3D91] to-[#0B5ED7] text-white flex flex-col justify-between h-48 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              <div>
                <span className="text-white/70 text-[10px] font-extrabold uppercase tracking-widest block mb-2">
                  Durability
                </span>
                <h4 className="text-xl font-bold leading-snug max-w-xs">
                  We don&apos;t just write scripts. We engineer platforms.
                </h4>
              </div>
              <span className="text-xs font-bold text-white/95">Valari Technologies Pvt. Ltd.</span>
            </m.div>
          </div>

          {/* Right Column: Values list check marks */}
          <div className="lg:col-span-7 text-left flex flex-col items-start gap-6">
            <m.span
              variants={itemReveal}
              className="text-[#0B3D91] text-xs font-extrabold tracking-widest uppercase mb-1 block"
            >
              Why Trust Us
            </m.span>

            <m.h2
              variants={itemReveal}
              className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] leading-tight"
            >
              Proven execution values businesses depend on
            </m.h2>

            <m.p
              variants={itemReveal}
              className="text-slate-500 text-sm md:text-base leading-relaxed mb-4"
            >
              Valari Technologies bridges abstract strategy with actual implementation.
              We construct systems meant to endure scaling pressures.
            </m.p>

            {/* Bullets grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {BULLET_POINTS.map((bullet) => (
                <m.div key={bullet.title} variants={itemReveal} className="flex gap-3.5 items-start">
                  <div className="w-6 h-6 rounded-full bg-[#0B3D91]/10 text-[#0B3D91] flex items-center justify-center shrink-0 shadow-inner mt-0.5">
                    <Check size={13} className="stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0A2540] mb-1">{bullet.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      {bullet.desc}
                    </p>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </m.div>
      </Container>
    </section>
  );
};

TrustSection.displayName = "TrustSection";
