import { ServiceItem } from "@/types/service";

export const SERVICES_SECTION_DATA = {
  eyebrow: "OUR SERVICES",
  heading: "What We Do",
  description: "We deliver cutting-edge technology services that empower enterprises to grow, scale, and optimize their business operations.",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "digital-marketing",
    badge: "Marketing",
    title: "Digital Marketing",
    description: "Social media marketing, Meta ads, lead generation, campaign planning and digital growth strategies.",
    href: "/what-we-do/digital-marketing",
    iconName: "Megaphone",
    imageSrc: "/images/digital-marketing.webp",
  },
  {
    id: "social-media",
    badge: "Management",
    title: "Social Media Management",
    description: "Facebook, Instagram and brand page management with posts, reels, captions and monthly planning.",
    href: "/what-we-do/social-media-management",
    iconName: "MessageSquare",
    imageSrc: "/images/social-media-management.webp",
  },
  {
    id: "web-dev",
    badge: "Development",
    title: "Website Development",
    description: "Business websites, landing pages, portfolio websites and responsive web solutions.",
    href: "/what-we-do/website-development",
    iconName: "Code2",
    imageSrc: "/images/website-development.webp",
  },
  {
    id: "branding",
    badge: "Design",
    title: "Branding & Creative Design",
    description: "Logo design, posters, banners, social media creatives and professional marketing materials.",
    href: "/what-we-do/branding",
    iconName: "Palette",
    imageSrc: "/images/branding-creative-design.webp",
  },
  {
    id: "automation",
    badge: "Automation",
    title: "Business Automation",
    description: "Google Sheets automation, CRM workflows, dashboards, reporting systems and productivity solutions.",
    href: "/what-we-do/business-automation",
    iconName: "Workflow",
    imageSrc: "/images/business-automation.webp",
  },
  {
    id: "software-solutions",
    badge: "Solutions",
    title: "Software Solutions",
    description: "Custom software, ERP modules, business portals, SaaS ideas and technology solutions.",
    href: "/what-we-do/software-solutions",
    iconName: "Layers",
    imageSrc: "/images/software-solutions.webp",
  },
];
