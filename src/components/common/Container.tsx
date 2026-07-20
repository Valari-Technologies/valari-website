import React, { HTMLAttributes, ElementType } from "react";
import clsx from "clsx";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The width variant of the container.
   * - 'default': max-w-7xl (1280px) for standard page sections
   * - 'wide': max-w-screen-2xl (1536px) for media galleries or data tables
   * - 'narrow': max-w-3xl (768px) for blog posts and article content
   * @default "default"
   */
  width?: "default" | "wide" | "narrow";
  
  /**
   * The HTML element type to render.
   * @default "div"
   */
  as?: ElementType;
}

/**
 * Reusable layout wrapper that centers content, limits max-width,
 * and applies consistent horizontal gutters.
 */
export const Container: React.FC<ContainerProps> = ({
  width = "default",
  as: Component = "div",
  className,
  children,
  ...props
}) => {
  const widthClasses = {
    default: "max-w-7xl",
    wide: "max-w-screen-2xl",
    narrow: "max-w-3xl",
  };

  return (
    <Component
      className={clsx(
        "mx-auto w-full px-4 md:px-8 lg:px-12",
        widthClasses[width],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

Container.displayName = "Container";
