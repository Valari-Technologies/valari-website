"use client";

import React from "react";
import { m } from "framer-motion";
import { Container } from "@/components/common";
import { Palette, GitBranch, Terminal, Cloud, ShieldCheck, Cpu } from "lucide-react";

export const ToolsSection: React.FC = () => {
  const tools = [
    { name: "Figma", desc: "Collaborative design & high-fidelity interactive wireframes.", icon: Palette, color: "#F24E1E" },
    { name: "Jira", desc: "Agile product roadmap scheduling and task board management.", icon: ShieldCheck, color: "#0052CC" },
    { name: "GitHub", desc: "Secure distributed version control and CI/CD pipelines.", icon: GitBranch, color: "#24292F" },
    { name: "VS Code", desc: "High-productivity editor configured with clean linting protocols.", icon: Terminal, color: "#007ACC" },
    { name: "Docker", desc: "Isolated environment virtualization for consistent deployment.", icon: Cpu, color: "#2496ED" },
    { name: "AWS", desc: "Scalable cloud instances, database backups, and file storage.", icon: Cloud, color: "#FF9900" },
  ];

  return (
    <section className="relative bg-slate-50/50 py-24 border-b border-slate-100 font-sans overflow-hidden">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center mb-16">
          <span className="text-[#0B3D91] text-xs font-extrabold tracking-widest uppercase mb-3 block">
            Infrastructure
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] mb-4">
            Tools We Use During Development
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
            We employ industry-vetted tooling to achieve high-performance deployment pipelines.
          </p>
        </div>

        {/* Horizontal tools flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto w-full">
          {tools.map((tool, idx) => {
            const Icon = tool.icon;

            return (
              <m.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col items-center bg-white border border-slate-150 rounded-2xl p-6 text-center hover:shadow-[0_15px_30px_rgba(15,23,42,0.06)] hover:border-[#0B3D91]/20 transition-all duration-300"
              >
                {/* Tool Icon Circle */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${tool.color}10`, color: tool.color }}
                >
                  <Icon size={22} className="stroke-[2]" />
                </div>

                <h3 className="text-sm font-bold text-[#0A2540] mb-1">{tool.name}</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed leading-snug">
                  {tool.desc}
                </p>
              </m.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
