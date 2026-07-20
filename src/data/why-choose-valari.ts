export interface WhyValariFeature {
  id: string;
  title: string;
  description: string;
  iconName: "Check" | "TrendingUp" | "Network" | "Shield";
}

export const WHY_VALARI_SECTION_DATA = {
  eyebrow: "WHY VALARI",
  heading: "Why Choose Valari Technologies?",
  tagline: "We are not just a service provider. We are a digital growth partner.",
};

export const WHY_VALARI_FEATURES: WhyValariFeature[] = [
  {
    id: "practical-solutions",
    title: "Practical Solutions",
    description: "We focus on solutions that businesses can use immediately and benefit from.",
    iconName: "Check",
  },
  {
    id: "growth-focused",
    title: "Growth-Focused Approach",
    description: "Every service is designed to improve visibility, leads, systems or revenue potential.",
    iconName: "TrendingUp",
  },
  {
    id: "tech-marketing",
    title: "Technology + Marketing",
    description: "We combine software, automation, branding and digital marketing under one roof.",
    iconName: "Network",
  },
  {
    id: "professional-execution",
    title: "Professional Execution",
    description: "We follow systems, approvals, reporting and quality standards for client projects.",
    iconName: "Shield",
  },
];
