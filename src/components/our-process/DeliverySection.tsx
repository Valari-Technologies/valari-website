"use client";

import React, { useEffect, useRef } from "react";
import { m, animate, useInView } from "framer-motion";
import { Container } from "@/components/common";
import { CheckCircle2, Heart, Shield, Zap } from "lucide-react";

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
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1],
        onUpdate(latest) {
          node.textContent = Math.round(latest).toString() + suffix;
        },
      });
      return () => controls.stop();
    }
  }, [inView, value, suffix]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-black text-[#0B3D91] tracking-tight">
      0{suffix}
    </span>
  );
};

export const DeliverySection: React.FC = () => {
  const metrics = [
    {
      value: 5,
      suffix: "+",
      label: "Projects Delivered",
      desc: "Robust enterprise solutions deployed across production server landscapes.",
      icon: CheckCircle2,
      color: "#0B3D91",
    },
    {
      value: 99,
      suffix: "%",
      label: "Client Satisfaction",
      desc: "Consistent quality, regular reporting, and transparent communication protocols.",
      icon: Heart,
      color: "#F4C542",
    },
    {
      value: 24,
      suffix: "/7",
      label: "SLA Support Coverage",
      desc: "Real-time alerts, database tune-ups, and live monitoring pipelines.",
      icon: Shield,
      color: "#639FAB",
    },
    {
      value: 100,
      suffix: "%",
      label: "On-Time Handover",
      desc: "Structured development sprints ensuring project timelines are met.",
      icon: Zap,
      color: "#E25C5C",
    },
  ];

  return (
    <section className="relative bg-white py-24 border-b border-slate-100 font-sans overflow-hidden">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center mb-16">
          <span className="text-[#0B3D91] text-xs font-extrabold tracking-widest uppercase mb-3 block">
            Performance
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] mb-4">
            Our Delivery Metrics
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
            We hold ourselves to rigorous engineering standards to guarantee performance and reliability.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto w-full">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;

            return (
              <m.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-slate-50/50 border border-slate-150 rounded-[28px] p-8 text-left hover:shadow-[0_15px_30px_rgba(15,23,42,0.06)] hover:bg-white hover:border-[#0B3D91]/20 transition-all duration-300 flex flex-col justify-between min-h-[260px]"
              >
                <div>
                  {/* Icon Indicator */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 shrink-0 shadow-sm"
                    style={{ backgroundColor: `${metric.color}15`, color: metric.color }}
                  >
                    <Icon size={18} className="stroke-[2.5]" />
                  </div>

                  {/* Counter */}
                  <div className="mb-2">
                    <Counter value={metric.value} suffix={metric.suffix} />
                  </div>

                  <h3 className="text-sm font-bold text-[#0A2540] mb-2 leading-tight">
                    {metric.label}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed leading-normal">
                    {metric.desc}
                  </p>
                </div>
              </m.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
