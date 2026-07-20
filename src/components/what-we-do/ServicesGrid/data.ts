export interface ServiceGridItem {
  id: string;
  slug: string;
  badge: string;
  title: string;
  description: string;
  iconName: string;
  imageSrc: string;
  tags: string[];
}

export const SERVICES_GRID_DATA: ServiceGridItem[] = [
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    badge: "Marketing",
    title: "Digital Marketing",
    description: "Data-driven campaigns that capture attention, generate high-quality leads, and accelerate digital sales growth.",
    iconName: "Megaphone",
    imageSrc: "/images/digital-marketing.webp",
    tags: ["SEO", "PPC", "Analytics"],
  },
  {
    id: "social-media",
    slug: "social-media-management",
    badge: "Management",
    title: "Social Media Management",
    description: "Building brand authority through consistent, high-value social engagement, custom posts, and organic reach strategy.",
    iconName: "MessageSquare",
    imageSrc: "/images/social-media-management.webp",
    tags: ["Content Strategy", "Community"],
  },
  {
    id: "web-dev",
    slug: "website-development",
    badge: "Development",
    title: "Website Development",
    description: "High-performance, enterprise-grade web platforms designed with robust modern frameworks for maximum speed and scale.",
    iconName: "Code2",
    imageSrc: "/images/website-development.webp",
    tags: ["Next.js", "E-commerce"],
  },
  {
    id: "branding",
    slug: "branding",
    badge: "Design",
    title: "Branding & Creative Design",
    description: "Visual identities that command respect, professional banners, logos, and UI/UX flows engineered to connect with users.",
    iconName: "Palette",
    imageSrc: "/images/branding-creative-design.webp",
    tags: ["Identity", "UI/UX"],
  },
  {
    id: "automation",
    slug: "business-automation",
    badge: "Automation",
    title: "Business Automation",
    description: "Efficiency at scale. We automate complex workflows, CRM integrations, reporting, and dashboard metrics.",
    iconName: "Workflow",
    imageSrc: "/images/business-automation.webp",
    tags: ["Workflow", "CRM/ERP"],
  },
  {
    id: "software-solutions",
    slug: "software-solutions",
    badge: "Solutions",
    title: "Software Solutions",
    description: "Custom software engineering for unique business challenges, SaaS portals, and scalable cloud application development.",
    iconName: "Layers",
    imageSrc: "/images/software-solutions.webp",
    tags: ["SaaS", "Custom Dev"],
  },
];
