"use client";

import React from "react";

import { Container } from "@/components/common";
import Link from "next/link";
import Image from "next/image";

export const TechnologyExcellence: React.FC = () => {
  const technologies = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", href: "https://react.dev/" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", href: "https://nextjs.org/" },
    { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", href: "https://spring.io/projects/spring-boot" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", href: "https://nodejs.org/" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", href: "https://aws.amazon.com/" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", href: "https://www.docker.com/" },
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", href: "https://azure.microsoft.com/" },
    { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", href: "https://cloud.google.com/" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", href: "https://www.mysql.com/" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", href: "https://www.mongodb.com/" },
  ];

  const duplicatedTech = [...technologies, ...technologies];

  return (
    <section className="relative bg-white py-24 border-b border-slate-100 font-sans overflow-hidden">
      {/* Dynamic Keyframes Injection */}
      <style>{`
        @keyframes marquee-tech {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-tech-marquee {
          animation: marquee-tech 24s linear infinite;
        }
        .animate-tech-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[700px] h-[300px] bg-[rgba(11,61,145,0.02)] rounded-full blur-[100px] pointer-events-none" />

      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center mb-16">
          <span className="text-[#0B3D91] text-xs font-extrabold tracking-widest uppercase mb-3 block">
            Ecosystem
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] mb-4">
            Technology Excellence
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
            We use premium, industry-standard infrastructure to power your software solutions.
          </p>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden py-6">
          {/* Gradient Masks (Fade Edges) */}
          <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div className="flex w-max gap-6 animate-tech-marquee transition-all duration-300">
            {duplicatedTech.map((tech, idx) => (
              <Link
                key={`${tech.name}-${idx}`}
                href={tech.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Learn more about ${tech.name}`}
                className="group relative flex items-center gap-4 bg-white border border-slate-200/80 rounded-[16px] px-6 py-4 shadow-sm hover:shadow-[0_20px_40px_rgba(11,61,145,0.08)] hover:border-[#0B3D91]/30 hover:-translate-y-1.5 hover:scale-[1.05] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3D91] focus-visible:ring-offset-2 shrink-0 select-none cursor-pointer"
              >
                {/* Background Subtle Blue Glow on Hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,61,145,0.02)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[16px] pointer-events-none" />

                {/* Devicon SVG Icon */}
                <div className="w-8 h-8 flex items-center justify-center shrink-0 relative z-10">
                  <Image
                    src={tech.icon}
                    alt={`${tech.name} logo`}
                    width={28}
                    height={28}
                    className="w-7 h-7 object-contain group-hover:scale-115 group-hover:rotate-3 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    loading="lazy"
                  />
                </div>

                {/* Technology Name */}
                <span className="text-sm font-bold text-slate-700 relative z-10">
                  {tech.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
