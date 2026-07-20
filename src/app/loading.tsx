import React from "react";

/**
 * Global Loading Page.
 * Displays a clean, lightweight, brand-tinted loading spinner during page transitions.
 */
export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center flex-grow py-24 min-h-[50vh] font-sans">
      <div className="relative flex items-center justify-center">
        {/* Animated outer ring */}
        <div className="w-12 h-12 border-2 border-primary/10 border-t-primary rounded-full animate-spin" />
      </div>
    </div>
  );
}
