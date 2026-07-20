export interface HeroData {
  eyebrow: string;
  heading: {
    normalLine1: string;
    normalLine2: string;
    accentLine1: string;
    accentLine2: string;
  };
  description: string;
  primaryButton: {
    label: string;
    href: string;
  };
  secondaryButton: {
    label: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
  };
  trustBadge: {
    stat: string;
    label: string;
  };
}

export const HERO_DATA: HeroData = {
  eyebrow: "Welcome to Valari Technologies",
  heading: {
    normalLine1: "Smart Digital",
    normalLine2: "Solutions That Help Businesses",
    accentLine1: "Grow Faster",
    accentLine2: "",
  },
  description:
    "We deliver outstanding consulting, software engineering, and cloud solutions to modernize your business operations and accelerate your digital growth.",
  primaryButton: {
    label: "Learn More",
    href: "/contact",
  },
  secondaryButton: {
    label: "Our Services",
    href: "/what-we-do",
  },
  image: {
    src: "/images/bg.webp",
    alt: "Valari Technologies engineering team collaborating on dashboard design layout",
  },
  trustBadge: {
    stat: "95%",
    label: "Client Retention",
  },
};
