import React, { HTMLAttributes } from "react";
import clsx from "clsx";

export interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The small decorative tag displayed above the main heading (eyebrow).
   * Typically uppercase with spacing.
   */
  eyebrow?: string;
  
  /**
   * The main heading text of the section.
   */
  heading: string;
  
  /**
   * Optional supporting paragraph text beneath the main heading.
   */
  description?: string;
  
  /**
   * Layout alignment of the text content.
   * @default "center"
   */
  align?: "left" | "center" | "right";
}

/**
 * Standardized header component for sections.
 * Establishes typography scale, consistent spacing, and alignment options.
 */
export const SectionTitle: React.FC<SectionTitleProps> = ({
  eyebrow,
  heading,
  description,
  align = "center",
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col mb-12 md:mb-16",
        {
          "items-start text-left": align === "left",
          "items-center text-center": align === "center",
          "items-end text-right": align === "right",
        },
        className
      )}
      {...props}
    >
      {/* Eyebrow Label */}
      {eyebrow && (
        <span className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">
          {eyebrow}
        </span>
      )}

      {/* Main Section Heading */}
      <h2 className="text-2xl md:text-3xl lg:text-[1.875rem] font-sans font-semibold text-text-primary tracking-tight leading-tight max-w-4xl">
        {heading}
      </h2>

      {/* Description Text */}
      {description && (
        <p
          className={clsx(
            "text-sm md:text-base text-text-secondary leading-relaxed mt-4 max-w-2xl",
            {
              "mx-auto": align === "center",
              "ml-auto": align === "right",
            }
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

SectionTitle.displayName = "SectionTitle";
