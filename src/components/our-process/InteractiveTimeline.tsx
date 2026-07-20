"use client";

import React, { useRef, useState } from "react";
import { m, useScroll, useMotionValueEvent } from "framer-motion";
import { Container } from "@/components/common";
import { FileText, Palette, Code2, ShieldAlert, Cloud, HelpCircle } from "lucide-react";

export const InteractiveTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const milestones = [
    {
      title: "Discovery & Requirements",
      desc: "Gathering objectives, user research, audit existing setup.",
      icon: FileText,
    },
    {
      title: "UI/UX & Architecture",
      desc: "Creating high-fidelity Figma mockups, data flow schema.",
      icon: Palette,
    },
    {
      title: "Agile Development",
      desc: "Sprint iterations, high-performance clean codebase setup.",
      icon: Code2,
    },
    {
      title: "Quality Assurance",
      desc: "Automated test suites, security patch validation.",
      icon: ShieldAlert,
    },
    {
      title: "Cloud Deployment",
      desc: "AWS pipeline setup, scaling configurations.",
      icon: Cloud,
    },
    {
      title: "Continuous Support",
      desc: "24/7 post-launch analytics, performance monitoring.",
      icon: HelpCircle,
    },
  ];

  // Track scroll position of the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Calculate active index based on scroll value
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const sectionSize = 1 / milestones.length;
    const index = Math.min(
      Math.floor(latest / sectionSize),
      milestones.length - 1
    );
    if (index >= 0 && index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  return (
    <section
      id="timeline"
      ref={containerRef}
      className="relative bg-white py-28 border-b border-slate-100 font-sans overflow-hidden"
    >
      <Container>
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center mb-20">
          <span className="text-[#0B3D91] text-xs font-extrabold tracking-widest uppercase mb-3 block">
            Milestones
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] mb-4">
            Interactive Timeline
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
            Scroll down to see the step-by-step progress trajectory from start to completion.
          </p>
        </div>

        {/* Milestone Vertical timeline for easy scroll integration */}
        <div className="relative max-w-4xl mx-auto pl-8 sm:pl-16 md:pl-24">
          {/* Vertical scroll progress bar line */}
          <div className="absolute left-6 sm:left-[59px] top-4 bottom-4 w-[4px] bg-slate-100 rounded-full">
            <m.div
              style={{ scaleY: scrollYProgress, originY: 0 }}
              className="w-full h-full bg-[#0B3D91] rounded-full"
            />
          </div>

          {/* Milestone List */}
          <div className="flex flex-col gap-16">
            {milestones.map((milestone, idx) => {
              const Icon = milestone.icon;
              const isActive = activeIndex === idx;
              const isCompleted = idx < activeIndex;

              return (
                <div
                  key={idx}
                  className="relative flex flex-col sm:flex-row gap-6 sm:gap-10 text-left items-start"
                >
                  {/* Floating Milestone Node */}
                  <div className="absolute left-[-26px] sm:left-[-35px] top-1 z-10">
                    <m.div
                      animate={{
                        scale: isActive ? 1.25 : 1,
                        backgroundColor: isActive
                          ? "#0B3D91"
                          : isCompleted
                          ? "#0B3D91"
                          : "#F8FAFC",
                        borderColor: isActive
                          ? "#0B3D91"
                          : isCompleted
                          ? "#0B3D91"
                          : "#E2E8F0",
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-12 h-12 rounded-full border-2 flex items-center justify-center shadow-sm"
                    >
                      <Icon
                        size={18}
                        className={
                          isActive || isCompleted ? "text-white" : "text-slate-400"
                        }
                      />
                    </m.div>
                  </div>

                  {/* Milestone Card Content */}
                  <m.div
                    animate={{
                      opacity: isActive ? 1 : isCompleted ? 0.8 : 0.45,
                      x: isActive ? 10 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col text-left pl-8 sm:pl-4"
                  >
                    <span
                      className={`text-xs font-extrabold uppercase tracking-wider leading-none mb-2 ${
                        isActive ? "text-[#0B3D91]" : "text-slate-400"
                      }`}
                    >
                      Step 0{idx + 1}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] mb-2 leading-tight">
                      {milestone.title}
                    </h3>
                    <p className="text-slate-500 text-sm md:text-[0.95rem] leading-relaxed max-w-xl">
                      {milestone.desc}
                    </p>
                  </m.div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
