"use client";

import React, { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Container } from "@/components/common";
import Image from "next/image";

const sectionReveal = {
  hidden: { opacity: 0, y: 48 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.08,
    },
  },
};

const cardReveal = {
  hidden: { opacity: 0, scale: 0.95, y: 16 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const TECH_ITEMS = [
  {
    name: "React",
    category: "Frontend Library",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    glow: "rgba(97, 218, 251, 0.25)",
    url: "https://react.dev/",
  },
  {
    name: "Next.js",
    category: "Production Framework",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    glow: "rgba(0, 0, 0, 0.1)",
    url: "https://nextjs.org/",
  },
  {
    name: "Django",
    category: "Backend Python Framework",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    glow: "rgba(9, 46, 32, 0.25)",
    url: "https://www.djangoproject.com/",
  },
  {
    name: "Node.js",
    category: "JavaScript Runtime",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    glow: "rgba(51, 153, 51, 0.25)",
    url: "https://nodejs.org/",
  },
  {
    name: "AWS",
    category: "Cloud Infrastructure",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    glow: "rgba(255, 153, 0, 0.25)",
    url: "https://aws.amazon.com/",
  },
  {
    name: "Google Cloud",
    category: "Serverless Hosting",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    glow: "rgba(66, 133, 244, 0.25)",
    url: "https://cloud.google.com/",
  },
  {
    name: "Docker",
    category: "Container Engine",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    glow: "rgba(36, 150, 237, 0.25)",
    url: "https://www.docker.com/",
  },
  {
    name: "PostgreSQL",
    category: "Relational Database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    glow: "rgba(65, 105, 225, 0.25)",
    url: "https://www.postgresql.org/",
  },
];

export const TechExpertise: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="expertise" className="relative bg-[#F8FAFC] py-24 border-b border-slate-100 font-sans overflow-hidden">
      <Container>
        <m.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-16"
        >
          {/* Centered Heading */}
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
            <span className="text-[#0B3D91] text-xs font-extrabold tracking-widest uppercase mb-3 block">
              Stack
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] mb-4">
              Our Core Technology Stack
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
              We construct all platforms on secure, scalable, and industry-vetted components.
            </p>
          </div>

          {/* Premium Logo Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto w-full select-none">
            {TECH_ITEMS.map((tech, index) => {
              const bobDuration = 3.5 + (index % 3) * 0.5;
              const bobDelay = (index % 4) * 0.45;

              return (
                <m.a
                  key={tech.name}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={cardReveal}
                  animate={{
                    y: hoveredIndex === index ? -10 : [0, -6, 0],
                  }}
                  transition={{
                    y: hoveredIndex === index
                      ? { duration: 0.25, ease: "easeOut" }
                      : {
                          duration: bobDuration,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: bobDelay,
                        },
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative flex flex-col items-center justify-center p-6 bg-white border border-slate-200/80 rounded-[28px] shadow-sm hover:shadow-[0_24px_50px_rgba(15,23,42,0.12)] hover:border-[#0B5ED7]/30 transition-all duration-300 cursor-pointer h-36 focus:outline-none"
                  style={{
                    boxShadow: hoveredIndex === index ? `0 20px 40px ${tech.glow}` : undefined,
                  }}
                >
                  {/* Tooltip Overlay */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <m.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: -48, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-md pointer-events-none whitespace-nowrap z-30"
                      >
                        {tech.category}
                        {/* Tooltip Arrow */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-t-4 border-t-slate-900 border-x-4 border-x-transparent" />
                      </m.div>
                    )}
                  </AnimatePresence>

                  {/* Logo Representation */}
                  <div className="w-12 h-12 flex items-center justify-center mb-3 shrink-0 relative">
                    <Image
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Tech Name */}
                  <span className="text-sm font-bold text-slate-800 tracking-tight group-hover:text-[#0B3D91] transition-colors">
                    {tech.name}
                  </span>
                </m.a>
              );
            })}
          </div>
        </m.div>
      </Container>
    </section>
  );
};

TechExpertise.displayName = "TechExpertise";
