"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface SectionItem {
  id: string;
  label: string;
}

export const ScrollProgress: React.FC = () => {
  const pathname = usePathname();
  const [sections, setSections] = useState<SectionItem[]>([]);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let isMounted = true;

    // Query all sections with an id on the page
    const elements = document.querySelectorAll("section[id]");
    const items = Array.from(elements).map((el) => {
      const id = el.id;
      // Use custom data-label if specified, otherwise format the id string nicely
      const rawLabel = el.getAttribute("data-label") || id;
      const label = rawLabel
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      return { id, label };
    });

    // Update state asynchronously in the next animation frame
    requestAnimationFrame(() => {
      if (!isMounted) return;
      setSections(items);
      if (items.length > 0) {
        setActiveSection(items[0].id);
      }
    });

    // Set up intersection observer
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when section occupies the middle 20% of the screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && isMounted) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    elements.forEach((el) => observer.observe(el));

    return () => {
      isMounted = false;
      observer.disconnect();
    };
  }, [pathname]); // Re-run when route changes to scan new page sections

  // Only display if page has 3 or more sections
  if (sections.length < 3) return null;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4 select-none">
      {sections.map((section) => {
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
              className="text-[10px] font-bold tracking-wider uppercase bg-slate-900 text-white px-2.5 py-1 rounded-md opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none absolute right-7 shadow-md whitespace-nowrap"
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
