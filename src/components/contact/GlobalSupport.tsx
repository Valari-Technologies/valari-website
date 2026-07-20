"use client";

import React, { useRef, useState } from "react";
import { m, useScroll, useMotionValueEvent } from "framer-motion";
import { Container } from "@/components/common";
import { FileText, Calendar, Users, FileCheck, Rocket, Award, HeartHandshake } from "lucide-react";

export const GlobalSupport: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = [
    { name: "Request Submitted", desc: "Your scoping requirements are logged securely in our CRM.", icon: FileText },
    { name: "Consultation Scheduled", desc: "A discovery conference call is arranged with engineering coordinators.", icon: Calendar },
    { name: "Technical Discussion", desc: "Detailed software structures, database logs, and wireframes are evaluated.", icon: Users },
    { name: "Proposal Delivered", desc: "We submit a comprehensive budget scope and timeline estimation roadmap.", icon: FileCheck },
    { name: "Project Kickoff", desc: "Our developers setup GitHub repos and coordinate dedicated Slack channels.", icon: Rocket },
    { name: "Delivery", desc: "Milestones are deployed to production environments on schedule.", icon: Award },
    { name: "Ongoing Support", desc: "We provide SLA cloud optimizations, database backups, and server monitoring.", icon: HeartHandshake },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const sectionSize = 1 / steps.length;
    const index = Math.min(
      Math.floor(latest / sectionSize),
      steps.length - 1
    );
    if (index >= 0 && index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  return (
    <section ref={containerRef} className="relative bg-slate-50/50 py-24 border-b border-slate-100 font-sans overflow-hidden">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center mb-20">
          <span className="text-[#0B3D91] text-xs font-extrabold tracking-widest uppercase mb-3 block">
            Milestones
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] mb-4">
            Global Support Experience
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
            Trace the step-by-step engagement timeline from your first contact submission to continuous post-launch support.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative max-w-3xl mx-auto pl-10 sm:pl-16 md:pl-24">
          {/* Scroll progress connector line */}
          <div className="absolute left-6 sm:left-[59px] top-4 bottom-4 w-[4px] bg-slate-200/50 rounded-full">
            <m.div
              style={{ scaleY: scrollYProgress, originY: 0 }}
              className="w-full h-full bg-[#0B3D91] rounded-full"
            />
          </div>

          <div className="flex flex-col gap-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeIndex === idx;
              const isCompleted = idx < activeIndex;

              return (
                <div key={idx} className="relative flex flex-col sm:flex-row gap-6 text-left items-start">
                  {/* Timeline Node */}
                  <div className="absolute left-[-26px] sm:left-[-35px] top-1 z-10">
                    <m.div
                      animate={{
                        scale: isActive ? 1.25 : 1,
                        backgroundColor: isActive ? "#0B3D91" : isCompleted ? "#0B3D91" : "#F8FAFC",
                        borderColor: isActive ? "#0B3D91" : isCompleted ? "#0B3D91" : "#E2E8F0",
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-12 h-12 rounded-full border-2 flex items-center justify-center shadow-sm"
                    >
                      <Icon
                        size={18}
                        className={isActive || isCompleted ? "text-white" : "text-slate-400"}
                      />
                    </m.div>
                  </div>

                  {/* Node Description Text */}
                  <m.div
                    animate={{
                      opacity: isActive ? 1 : isCompleted ? 0.8 : 0.45,
                      x: isActive ? 10 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col text-left pl-8 sm:pl-4"
                  >
                    <span
                      className={`text-xs font-extrabold uppercase tracking-wider mb-1 ${
                        isActive ? "text-[#0B3D91]" : "text-slate-400"
                      }`}
                    >
                      Step 0{idx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#0A2540] mb-1 leading-tight">
                      {step.name}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-lg">
                      {step.desc}
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
