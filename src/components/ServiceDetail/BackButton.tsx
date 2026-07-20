"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { m } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export const BackButton: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    // Record scroll state context if needed before routing
    router.push("/what-we-do");
  };

  return (
    <m.button
      onClick={handleBack}
      whileTap={{ scale: 0.96 }}
      className="group flex items-center gap-2.5 px-5 py-2.5 bg-white border border-slate-200/80 rounded-full text-sm font-bold text-[#0B3D91] shadow-sm hover:shadow-lg hover:bg-[#F8FAFC] transition-all duration-[220ms] cursor-pointer outline-none select-none z-30"
    >
      <ArrowLeft
        size={16}
        className="transition-transform duration-[220ms] ease-out group-hover:-translate-x-1.5"
      />
      <span className="transition-transform duration-[220ms] ease-out group-hover:translate-x-0.5">
        Back to Services
      </span>
    </m.button>
  );
};

BackButton.displayName = "BackButton";
