import React, { HTMLAttributes } from "react";
import clsx from "clsx";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The visual color variant of the badge.
   * Matches the semantic theme color tokens.
   * @default "primary"
   */
  variant?: "primary" | "secondary" | "accent" | "success" | "warning" | "error";
}

/**
 * Reusable Badge/Tag component.
 * Displays brief category labels, status indicators, or eyebrows.
 */
export const Badge: React.FC<BadgeProps> = ({
  variant = "primary",
  className,
  children,
  ...props
}) => {
  const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wider uppercase border font-sans select-none";

  const variantClasses = {
    primary: "bg-[rgba(11,94,215,0.08)] text-primary border-[rgba(11,94,215,0.15)]",
    secondary: "bg-[rgba(37,99,235,0.08)] text-secondary border-[rgba(37,99,235,0.15)]",
    accent: "bg-[rgba(244,197,66,0.12)] text-[#8a6500] border-[rgba(244,197,66,0.25)]",
    success: "bg-success/8 text-success border-success/20",
    warning: "bg-warning/8 text-warning border-warning/20",
    error: "bg-error/8 text-error border-error/20",
  };

  return (
    <span
      className={clsx(
        baseClasses,
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

Badge.displayName = "Badge";
