"use client";

import React, { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Container } from "@/components/common";
import { Globe, Users, Database, MailOpen, TrendingUp, Sparkles } from "lucide-react";

export const MarketingFlow: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      title: "Traffic Generation",
      desc: "Attracting high-intent prospective buyers through SEO optimization, PPC ads, and organic social positioning.",
      metric: "+125% Traffic Growth",
      icon: Globe,
      color: "#0B3D91",
      data: ["SEO Optimization", "PPC Google Ads", "LinkedIn Campaigns"],
    },
    {
      title: "Lead Acquisition",
      desc: "Converting traffic into contacts via interactive mock landing pages, value forms, and whitepapers.",
      metric: "18.4% Conversion Rate",
      icon: Users,
      color: "#F4C542",
      data: ["Smart Forms", "Lead Magnets", "Interactive Portals"],
    },
    {
      title: "CRM Database Integration",
      desc: "Securing lead attributes inside unified CRM logs (Salesforce/HubSpot) to enable tracking pipelines.",
      metric: "100% Data Integrity",
      icon: Database,
      color: "#639FAB",
      data: ["CRM Syncing", "Lead Scoring", "Engagement Audits"],
    },
    {
      title: "Automated Nurturing",
      desc: "Delivering segmented newsletters, bi-weekly emails, and behavioral retargeting campaigns.",
      metric: "45.2% Email Open Rate",
      icon: MailOpen,
      color: "#E25C5C",
      data: ["Drip Sequences", "Dynamic Ad Audiences", "A/B Testing"],
    },
    {
      title: "Sales Conversion",
      desc: "Tracking sales milestones and turning qualified prospects into long-term subscribers.",
      metric: "32% Closed Won Increase",
      icon: TrendingUp,
      color: "#8B5CF6",
      data: ["Pipeline Automation", "Uptime Schedulers", "ROI Analysis Reports"],
    },
  ];

  return (
    <section className="relative bg-slate-900 py-24 border-b border-slate-950 font-sans overflow-hidden">
      {/* Dark Backdrop Noise & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,61,145,0.18)_0%,transparent_70%)] pointer-events-none" />

      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center mb-16">
          <m.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-semibold mb-4 shadow-sm"
          >
            <Sparkles size={12} className="text-[#639FAB]" />
            <span>ACQUISITION PIPELINE</span>
          </m.div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Digital Marketing Flows
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl">
            Explore how we structure traffic channels, CRM database pipelines, and automated lead nurturing to accelerate sales growth.
          </p>
        </div>

        {/* Visual Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto w-full">
          {/* Left: Animated Nodes List */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeStage === idx;

              return (
                <button
                  key={stage.title}
                  onClick={() => setActiveStage(idx)}
                  className={`w-full flex items-start gap-4 p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-white/10 border-white/20 shadow-lg scale-[1.02]"
                      : "bg-white/5 border-white/5 hover:bg-white/8 hover:border-white/10 opacity-70"
                  }`}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
                    style={{ backgroundColor: `${stage.color}20`, color: stage.color }}
                  >
                    <Icon size={18} className="stroke-[2.5]" />
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-sm font-bold text-white">{stage.title}</span>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2 py-0.5 rounded bg-white/5 border border-white/10">
                        {stage.metric}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 leading-relaxed font-normal">
                      {stage.desc.substring(0, 95)}...
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Rich Interactive Visual Card */}
          <div className="lg:col-span-6 w-full flex justify-center relative min-h-[380px]">
            <AnimatePresence mode="wait">
              {stages.map((stage, idx) => {
                if (idx !== activeStage) return null;
                const Icon = stage.icon;

                return (
                  <m.div
                    key={idx}
                    initial={{ opacity: 0, x: 20, scale: 0.96 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -20, scale: 0.96 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 bg-white/5 border border-white/10 rounded-[32px] p-8 shadow-2xl flex flex-col justify-between"
                  >
                    <div>
                      {/* Badge info */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                        <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                          STAGE 0{idx + 1}
                        </span>
                        <span
                          className="text-xs font-bold px-3 py-1 rounded-full text-white/90"
                          style={{ backgroundColor: `${stage.color}25` }}
                        >
                          {stage.metric}
                        </span>
                      </div>

                      {/* Header details */}
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                          style={{ backgroundColor: `${stage.color}30`, color: stage.color }}
                        >
                          <Icon size={24} className="stroke-[2.5]" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{stage.title}</h3>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 text-sm leading-relaxed mb-6">
                        {stage.desc}
                      </p>
                    </div>

                    {/* Stage Deliverables/Data List */}
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">
                        Acquisition Touchpoints
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                        {stage.data.map((item) => (
                          <div
                            key={item}
                            className="bg-white/5 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-slate-300 text-left font-bold"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </m.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
};
