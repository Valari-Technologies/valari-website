"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import logoImg from "../../../public/images/logo-v3.png";

export interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

/**
 * Reusable brand Logo component.
 * Renders the custom Blue/Gold full horizontal logo mark or V-arrow icon mark.
 * Statically imports the logo image to support automatic hash-based cache busting in Next.js.
 */
export const Logo: React.FC<LogoProps> = ({
  className,
  iconOnly = false,
}) => {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link
      href="/"
      onClick={handleClick}
      className={clsx(
        "inline-flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md",
        className
      )}
      aria-label="Valari Technologies Home"
    >
      {iconOnly ? (
        /* SVG Logomark only */
        <svg
          className="w-9 h-9 shrink-0"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Left gold wing of the V */}
          <path
            d="M15 25 L28 25 L48 75 L35 75 Z"
            fill="url(#goldGradient)"
          />
          {/* Right blue wing of the V */}
          <path
            d="M48 75 L61 75 L82 25 L69 25 Z"
            fill="url(#blueGradient)"
          />
          {/* Right blue arrowhead */}
          <path
            d="M82 25 L70 20 L90 10 L84 32 Z"
            fill="url(#blueGradient)"
          />
          <defs>
            <linearGradient
              id="goldGradient"
              x1="15"
              y1="25"
              x2="48"
              y2="75"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#FFE082" />
              <stop offset="100%" stopColor="#F4C542" />
            </linearGradient>
            <linearGradient
              id="blueGradient"
              x1="48"
              y1="75"
              x2="90"
              y2="10"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#0B3D91" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        /* Full Brand Logo Asset via Static Import */
        <Image
          src={logoImg}
          alt="Valari Technologies Logo"
          className="h-10 w-auto object-contain shrink-0"
          priority
        />
      )}
    </Link>
  );
};

Logo.displayName = "Logo";
