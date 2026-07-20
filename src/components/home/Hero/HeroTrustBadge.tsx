import React from "react";

export interface HeroTrustBadgeProps {
  stat: string;
  label: string;
}

/**
 * Subcomponent rendering the overlapping trust badge in the Hero section.
 */
export const HeroTrustBadge: React.FC<HeroTrustBadgeProps> = ({ stat, label }) => {
  return (
    <div className="absolute -bottom-4 -left-4 bg-surface border border-border/50 shadow-md p-4 rounded-xl flex items-center gap-3.5 max-w-[220px]">
      <div className="w-10 h-10 rounded-full bg-[rgba(244,197,66,0.12)] flex items-center justify-center shrink-0">
        <svg
          className="w-5 h-5 text-[#8a6500]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      </div>
      <div>
        <div className="text-xl font-bold text-text-primary leading-none">{stat}</div>
        <div className="text-[10px] uppercase tracking-wider font-semibold text-text-secondary mt-1 select-none">
          {label}
        </div>
      </div>
    </div>
  );
};

HeroTrustBadge.displayName = "HeroTrustBadge";
