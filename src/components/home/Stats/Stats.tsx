"use client";

import React, { useEffect, useState, useRef } from "react";
import { m, useInView } from "framer-motion";
import { Container } from "@/components/common";
import { staggerContainer } from "@/lib/animations";

// Custom count up animation subcomponent
interface CountUpProps {
  target: number;
  suffix?: string;
}

const CountUp: React.FC<CountUpProps> = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView || target === 0) return;

    const duration = 1500; // Count up takes 1.5 seconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Cubic ease-out curve
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeProgress * target);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

import { STATS_DATA } from "@/data/stats";

// Reveal variants for stats columns
const statReveal = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

/**
 * Stats Section displaying corporate metrics and numeric tickers.
 * Integrates dynamic count-up triggers inside a clean 3-column layout.
 */
export const Stats: React.FC = () => {
  return (
    <section className="bg-white py-20 border-b border-slate-200/50 font-sans overflow-hidden">
      <Container>
        <m.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
        >
          {STATS_DATA.map((stat) => (
            <m.div
              key={stat.id}
              variants={statReveal}
              className="flex flex-col items-center"
            >
              {/* Numeric Display Ticker */}
              <div className="text-5xl md:text-6xl font-extrabold text-[#0B3D91] tracking-tight mb-3">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <span className="text-[11px] font-extrabold tracking-widest text-slate-400 uppercase">
                {stat.label}
              </span>
            </m.div>
          ))}
        </m.div>
      </Container>
    </section>
  );
};

Stats.displayName = "Stats";
