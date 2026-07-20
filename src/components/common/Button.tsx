"use client";

import React, { ReactNode } from "react";
import clsx from "clsx";
import { m, HTMLMotionProps } from "framer-motion";
import { buttonHover } from "@/lib/animations";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  /**
   * The visual variant of the button.
   * - 'primary': Solid brand blue background with white text
   * - 'secondary': Transparent background with primary brand blue border and text
   * @default "primary"
   */
  variant?: "primary" | "secondary";
  
  /**
   * The sizing tier of the button.
   * @default "md"
   */
  size?: "sm" | "md" | "lg";
  
  /**
   * Forces the button to take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Renders a loading spinner and disables click interactions.
   * @default false
   */
  isLoading?: boolean;
  
  /**
   * An optional icon to display inside the button.
   */
  icon?: ReactNode;
  
  /**
   * Defines whether the icon appears before or after the button text.
   * @default "left"
   */
  iconPosition?: "left" | "right";
  children?: ReactNode;
}

/**
 * Reusable Button component styled according to the approved Valari Design System.
 * Fully accessible with focus indicators, state transitions, and responsive behavior.
 */
export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  isLoading = false,
  icon,
  iconPosition = "left",
  className,
  disabled,
  children,
  ...props
}) => {
  const baseClasses = clsx(
    "inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-200 ease-in-out rounded-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary select-none cursor-pointer",
    (disabled || isLoading) && "opacity-60 cursor-not-allowed pointer-events-none"
  );

  const variantClasses = {
    primary: "bg-primary text-white hover:bg-[#0a58ca] active:bg-[#084ab2] shadow-sm hover:shadow-md",
    secondary: "bg-surface border border-primary text-primary hover:bg-[rgba(11,94,215,0.05)] active:bg-[rgba(11,94,215,0.1)] hover:shadow-sm",
  };

  const sizeClasses = {
    sm: "h-9 px-4 text-xs gap-1.5",
    md: "h-11 px-5 text-sm gap-2",
    lg: "h-12 px-6 text-base gap-2.5",
  };

  return (
    <m.button
      disabled={disabled || isLoading}
      variants={buttonHover}
      whileHover="hover"
      whileTap="tap"
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {/* Loading Spinner */}
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}

      {/* Render Left Icon if not loading */}
      {!isLoading && icon && iconPosition === "left" && (
        <span className="inline-flex shrink-0">{icon}</span>
      )}

      {/* Button Content */}
      <span>{children}</span>

      {/* Render Right Icon if not loading */}
      {!isLoading && icon && iconPosition === "right" && (
        <span className="inline-flex shrink-0">{icon}</span>
      )}
    </m.button>
  );
};

Button.displayName = "Button";
