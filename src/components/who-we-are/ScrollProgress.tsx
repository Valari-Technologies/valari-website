"use client";

import React, { useState, useEffect } from "react";

const SECTIONS = [
  { id: "hero", label: "Hero" },
  { id: "story", label: "Story" },
  { id: "mission", label: "Mission & Vision" },
  { id: "culture", label: "Company Culture" },
  { id: "gallery", label: "Office Gallery" },
  { id: "timeline", label: "Timeline" },
  { id: "trust", label: "Why Trust Valari" },
  { id: "expertise", label: "Tech Expertise" },
  { id: "cta", label: "Get Started" },
];

export const ScrollProgress: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when section occupies the middle 20% of the screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4 select-none">
      {SECTIONS.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group flex items-center justify-end gap-3 cursor-pointer outline-none relative"
            aria-label={`Scroll to ${section.label}`}
          >
            {/* Tooltip Label */}
            <span
              className={`text-[10px] font-bold tracking-wider uppercase bg-slate-900 text-white px-2.5 py-1 rounded-md opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none absolute right-7 shadow-md`}
            >
              {section.label}
            </span>

            {/* Indicator Dot */}
            <span
              className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                isActive
                  ? "bg-[#0B3D91] border-[#0B3D91] scale-125"
                  : "bg-transparent border-slate-300 group-hover:border-slate-500"
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
};

ScrollProgress.displayName = "ScrollProgress";
