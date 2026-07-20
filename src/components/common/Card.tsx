"use client";

import React from "react";
import clsx from "clsx";
import { m, HTMLMotionProps } from "framer-motion";
import { cardHover } from "@/lib/animations";

export interface CardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  /**
   * The style variant of the card.
   * - 'default': standard solid surface background with thin slate borders
   * - 'glass': translucent backdrop blur styled for rich dark overlays
   * @default "default"
   */
  variant?: "default" | "glass";
  
  /**
   * Configure the internal padding spacing of the card.
   * @default "md"
   */
  padding?: "none" | "sm" | "md" | "lg";
  
  /**
   * Enables transition effects (translate Y shift and deeper drop-shadows)
   * when mouse cursor hovers over the element.
   * @default false
   */
  interactive?: boolean;
}

/**
 * Reusable Card layout container. 
 * Standardizes elevations, border radii, and visual hover interaction behaviors.
 */
export const Card: React.FC<CardProps> = ({
  variant = "default",
  padding = "md",
  interactive = false,
  className,
  children,
  ...props
}) => {
  const baseClasses = "rounded-card overflow-hidden transition-all duration-300 ease-in-out";

  const variantClasses = {
    default: "bg-surface border border-border shadow-sm",
    glass: "backdrop-blur-md bg-white/70 border border-border/80 shadow-sm",
  };

  const paddingClasses = {
    none: "p-0",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const interactiveClasses = interactive
    ? "hover:shadow-lg hover:border-slate-300"
    : "";

  return (
    <m.div
      variants={interactive ? cardHover : undefined}
      whileHover={interactive ? "hover" : undefined}
      className={clsx(
        baseClasses,
        variantClasses[variant],
        paddingClasses[padding],
        interactiveClasses,
        className
      )}
      {...props}
    >
      {children}
    </m.div>
  );
};

Card.displayName = "Card";
