"use client";

import React from "react";
import { m } from "framer-motion";
import { Container } from "@/components/common";
import { Check, X, Minus } from "lucide-react";

export const CompetitiveAdvantages: React.FC = () => {
  const rows = [
    { feature: "Planning & Scoping", agency: "Template timelines", freelancers: "Minimal scope documentation", valari: "Detailed milestones & WBS" },
    { feature: "Proactive Communication", agency: "Account manager delays", freelancers: "Unpredictable responsive times", valari: "Direct Slack with Tech Leads" },
    { feature: "Scalable Codebase Architecture", agency: "Often copy-paste frameworks", freelancers: "Inconsistent structures", valari: "Bespoke clean code standards" },
    { feature: "Security & Vulnerability Scans", agency: "Generic checks at end", freelancers: "Rarely included", valari: "Continuous dependency checks" },
    { feature: "Post-Launch SLA Support", agency: "High retainers, slow support", freelancers: "No long-term availability", valari: "Flexible support monitoring contracts" },
    { feature: "System Documentation", agency: "Basic readme scripts", freelancers: "Rarely documented", valari: "Comprehensive API docs" },
    { feature: "Quality Assurance & Testing", agency: "Manual checks only", freelancers: "Omitted due to speed", valari: "Jest, Cypress automated suites" },
    { feature: "Cloud DevOps Deployments", agency: "Standard shared hosting", freelancers: "Manual cloud setups", valari: "CI/CD AWS pipelines" },
    { feature: "Ongoing System Maintenance", agency: "Ad-hoc billing cycles", freelancers: "Hard to reach post-launch", valari: "Regular security patches" },
    { feature: "Uptime & Metrics Monitoring", agency: "Reactive to reports", freelancers: "No logging configurations", valari: "Sentry & Datadog alerts" },
  ];

  return (
    <section className="relative bg-white py-24 border-b border-slate-100 font-sans overflow-hidden">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center mb-16">
          <span className="text-[#0B3D91] text-xs font-extrabold tracking-widest uppercase mb-3 block">
            Comparison
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] mb-4">
            Why Valari Stands Apart
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
            See how our transparent communication and engineering standards compare against typical market alternatives.
          </p>
        </div>

        {/* Comparison Table Container */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-5xl mx-auto overflow-x-auto rounded-3xl border border-slate-200/80 shadow-md bg-white select-none"
        >
          <table className="w-full border-collapse text-left text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-150 text-slate-500 font-bold uppercase tracking-wider">
                <th className="p-5 font-extrabold text-[#0A2540]">Feature / Advantage</th>
                <th className="p-5">Typical Agency</th>
                <th className="p-5">Freelancers</th>
                <th className="p-5 text-[#0B3D91] font-extrabold bg-[#0B3D91]/5">Valari Technologies</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600 font-medium">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-5 font-bold text-[#0A2540]">{row.feature}</td>
                  <td className="p-5 flex items-center gap-1.5 text-slate-400">
                    <Minus size={14} className="text-slate-400" />
                    <span>{row.agency}</span>
                  </td>
                  <td className="p-5 text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <X size={14} className="text-red-400 shrink-0" />
                      <span>{row.freelancers}</span>
                    </div>
                  </td>
                  <td className="p-5 text-[#0B3D91] font-semibold bg-[#0B3D91]/5">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center shrink-0">
                        <Check size={12} className="stroke-[3]" />
                      </div>
                      <span>{row.valari}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </m.div>
      </Container>
    </section>
  );
};
