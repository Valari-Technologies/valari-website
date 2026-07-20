"use client";

import React, { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Overview", targetId: "overview" },
  { label: "Features", targetId: "features" },
  { label: "Benefits", targetId: "benefits" },
  { label: "Process", targetId: "process" },
  { label: "Technology", targetId: "technologies" },
  { label: "FAQ", targetId: "faq" },
  { label: "Contact", targetId: "contact" },
];

export const StickyNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180; // offset for sticky bar height

      for (const item of NAV_ITEMS) {
        const element = document.getElementById(item.targetId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.targetId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = element.offsetTop - 140; // offset to align content nicely below sticky nav
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="sticky top-[88px] left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 z-20 shadow-sm select-none overflow-x-auto scrollbar-none">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-start md:justify-center gap-8 overflow-x-auto whitespace-nowrap scrollbar-none">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.targetId;
          return (
            <button
              key={item.targetId}
              onClick={() => scrollToSection(item.targetId)}
              className="relative text-xs md:text-sm font-bold transition-colors py-1 cursor-pointer outline-none shrink-0"
              style={{
                color: isActive ? "#0B3D91" : "#64748B",
              }}
            >
              {item.label}
              {isActive && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0B3D91] rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

StickyNav.displayName = "StickyNav";
