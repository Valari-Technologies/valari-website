import { Variants } from "framer-motion";

export const EASE_OUT_TRANSITION = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as const, // Apple/Vercel/Stripe-like custom cubic bezier
};

/**
 * Reusable Page Reveal variant.
 * Animates entire page from opacity 0, y: 15 to opacity 1, y: 0.
 */
export const pageReveal: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * Reusable Stagger Container variant generator.
 * Staggers animations of child items containing staggerItem/fadeUp variants.
 */
export const staggerContainer = (staggerDelay = 0.15): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: staggerDelay,
    },
  },
});

/**
 * Stagger Item variant to be placed inside a staggerContainer.
 */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: EASE_OUT_TRANSITION,
  },
};

/**
 * Hero Sequence Container variant.
 * Staggers children slightly faster for a cinematic reveal flow (0.12 - 0.18s).
 */
export const heroSequence: Variants = staggerContainer(0.12);

/**
 * Scroll Reveal Section variant.
 * Reveals a section's heading/description/cards cleanly once entering viewport.
 */
export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: EASE_OUT_TRANSITION,
  },
};

/**
 * Hero Image Reveal variant.
 * Animates Hero image smoothly with opacity, scale 0.98 -> 1.0, and translateX 20 -> 0.
 */
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.98, x: 20 },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * Card Hover Animation variant.
 * Elevates cards with translateY(-4px) and soft shadow transition.
 */
export const cardHover = {
  hover: {
    y: -4,
    transition: {
      duration: 0.25,
      ease: "easeOut" as const,
    },
  },
};

/**
 * Button Hover Animation variant.
 * Elevates button slightly with translateY(-2px), scaling 1.03, and active scaling 0.98.
 */
export const buttonHover = {
  hover: {
    y: -2,
    scale: 1.03,
    transition: {
      duration: 0.2,
      ease: "easeOut" as const,
    },
  },
  tap: {
    scale: 0.98,
    y: 0,
    transition: {
      duration: 0.1,
      ease: "easeOut" as const,
    },
  },
};
