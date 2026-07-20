export interface NavItem {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: NavItem[];
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Our Process", href: "/our-process" },
  { label: "Why Choose Valari", href: "/why-choose-valari" },
  { label: "Our People", href: "/our-people" },
];

export const FOOTER_NAV_SECTIONS: FooterSection[] = [
  {
    title: "What We Do",
    links: [
      { label: "Digital Marketing", href: "/what-we-do/digital-marketing" },
      { label: "Social Media Management", href: "/what-we-do/social-media-management" },
      { label: "Website Development", href: "/what-we-do/website-development" },
      { label: "Branding & Creativity Design", href: "/what-we-do/branding" },
      { label: "Business Automation", href: "/what-we-do/business-automation" },
      { label: "Software Solutions", href: "/what-we-do/software-solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "What We Do", href: "/what-we-do" },
      { label: "Who We Are", href: "/who-we-are" },
      { label: "Our Process", href: "/our-process" },
      { label: "Our People", href: "/our-people" },
      // { label: "Careers", href: "/careers" }, // Future proofed
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Why Choose Valari", href: "/why-choose-valari" },
      { label: "Contact Us", href: "/contact" },
      // { label: "Blog & Insights", href: "/blog" }, // Future proofed
    ],
  },
];
