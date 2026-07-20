import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Technology } from "./technologies";

interface TechnologyCardProps {
  tech: Technology;
}

export const TechnologyCard: React.FC<TechnologyCardProps> = ({ tech }) => {
  return (
    <Link
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
  );
};
