export interface ServiceDetail {
  slug: string;
  badge: string;
  title: string;
  iconName: string;
  imageSrc: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
  };
  hero: {
    heading: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  overview: {
    intro: string;
    whyNeeded: string;
    challengesSolved: string[];
    valueProp: string;
  };
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  benefits: {
    title: string;
    value: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  technologies: {
    category: string;
    items: string[];
  }[];
  industries: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const SERVICES_DETAILS_DATA: ServiceDetail[] = [
  {
    slug: "digital-marketing",
    badge: "Marketing",
    title: "Digital Marketing",
    iconName: "Megaphone",
    imageSrc: "/images/digital-marketing.webp",
    seo: {
      title: "Enterprise Digital Marketing & Growth Solutions | Valari Technologies",
      description: "Accelerate your digital growth with Valari Technologies. We provide data-driven enterprise SEO, PPC management, analytics auditing, and custom campaign strategies.",
      keywords: ["digital marketing", "growth marketing", "SEO", "PPC", "analytics auditing", "Valari Technologies"],
      ogTitle: "Enterprise Digital Marketing Solutions by Valari Technologies",
      ogDescription: "Leverage data-driven marketing frameworks. Scale your leads, increase conversions, and optimize campaign ROI with our growth specialists.",
    },
    hero: {
      heading: "Data-Driven Marketing to Power Scale",
      description: "We deploy performance-centric campaigns, advanced search optimization, and end-to-end attribution pipelines designed to generate high-intent pipeline leads.",
      primaryCta: "Grow Your Brand",
      secondaryCta: "View Case Studies",
    },
    overview: {
      intro: "In today's highly saturated digital economy, vanity metrics like impressions and clicks are no longer sufficient to guarantee business success. Valari Technologies delivers comprehensive, performance-driven digital marketing solutions that focus on concrete business outcomes: pipeline growth, customer acquisition cost (CAC) reduction, and lifetime value (LTV) maximization. We integrate engineering precision with creative marketing to build attribution structures that demonstrate exactly where every marketing dollar goes.",
      whyNeeded: "Modern enterprises require a unified marketing strategy that bridges search visibility, paid acquisition, and conversion rate optimization (CRO). Without granular data integration, companies face fragmented attribution, low lead quality, and wasted advertising spend.",
      challengesSolved: [
        "Unreliable lead quality and low sales conversion rates.",
        "Inefficient ad budgets due to weak targeting and bid management.",
        "Lack of direct attribution from marketing campaigns to actual revenue.",
        "Inability to achieve sustainable organic search ranking for high-intent keywords."
      ],
      valueProp: "Our team combines analytical auditing with automated operations, delivering marketing execution that consistently outperforms standard marketing agencies.",
    },
    features: [
      {
        title: "Enterprise SEO",
        description: "Technical SEO audits, semantic search modeling, link profiling, and landing page restructuring built to capture competitive, high-intent organic search terms.",
        icon: "TrendingUp",
      },
      {
        title: "Paid Acquisition (PPC)",
        description: "Meticulous Meta ads, Google ads, and LinkedIn campaign management utilizing automated bidding, custom scripting, and split-testing.",
        icon: "Target",
      },
      {
        title: "Advanced Analytics Auditing",
        description: "Full configuration of Google Tag Manager, GA4 pipelines, and server-side tracking to achieve 100% reliable conversion attribution.",
        icon: "Activity",
      },
      {
        title: "Conversion Optimization (CRO)",
        description: "Deploying behavior heatmaps, A/B testing variations, and content refinements to maximize signups from existing web traffic.",
        icon: "Maximize",
      },
      {
        title: "Lead Nurturing Automations",
        description: "Integrating marketing tools to trigger email sequences, drip campaigns, and lead scoring matrices based on customer behavior.",
        icon: "Cpu",
      },
      {
        title: "Attribution Modeling",
        description: "Multi-touch attribution systems tracking touchpoints from initial click to final conversion to identify high-ROI channels.",
        icon: "Layers",
      }
    ],
    benefits: [
      {
        title: "Conversion Boost",
        value: "+45%",
        description: "Average improvement in web visitor conversion ratios through technical CRO adjustments.",
      },
      {
        title: "Acquisition Savings",
        value: "-30%",
        description: "Reduction in Customer Acquisition Cost (CAC) by refining target audiences and ad bids.",
      },
      {
        title: "Lead Growth",
        value: "3.5x",
        description: "Increase in high-intent lead volume over a 6-month optimized campaign period.",
      }
    ],
    process: [
      {
        step: "01",
        title: "Audit & Analysis",
        description: "We review existing analytics configurations, ad account performance, and competitors to identify immediate opportunities.",
      },
      {
        step: "02",
        title: "Strategy Formulation",
        description: "Developing custom target audiences, keyphrase lists, ad creatives, and performance budget allocations.",
      },
      {
        step: "03",
        title: "Technical Setup",
        description: "Configuring server-side tracking tags, conversion event mappings, and connecting CRM endpoints.",
      },
      {
        step: "04",
        title: "Campaign Launch",
        description: "Activating PPC campaigns and publishing targeted SEO copy tailored to capture high-intent users.",
      },
      {
        step: "05",
        title: "Continuous Tuning",
        description: "Running daily bid adjustments, A/B test variations, keyword exclusions, and landing page iterations.",
      }
    ],
    technologies: [
      {
        category: "Analytics & Tracking",
        items: ["Google Analytics 4 (GA4)", "Google Tag Manager", "Mixpanel", "Segment"],
      },
      {
        category: "Ad Platforms",
        items: ["Google Ads Editor", "Meta Ads Manager", "LinkedIn Campaign Manager", "TikTok Ads"],
      },
      {
        category: "SEO & Content Tools",
        items: ["Semrush", "Ahrefs", "Google Search Console", "Screaming Frog"],
      }
    ],
    industries: ["E-commerce", "SaaS & Tech", "Finance & Banking", "Healthcare & Clinics", "Real Estate"],
    faqs: [
      {
        question: "How long does it take to see results from SEO?",
        answer: "While paid search campaigns (PPC) generate leads instantly upon launch, organic SEO is a long-term strategy. Typically, businesses notice measurable ranking improvements and organic traffic increases within 3 to 6 months, depending on keyword competition and website technical history.",
      },
      {
        question: "Do you configure server-side conversion tracking?",
        answer: "Yes. Due to browser privacy adjustments (like Safari ITP and iOS App Tracking Transparency), standard browser-based tracking pixels lose significant conversion data. We configure server-side tracking via Google Tag Manager and direct API endpoints to ensure 100% accurate conversion attribution.",
      },
      {
        question: "What channels do you recommend for B2B SaaS?",
        answer: "For B2B Software-as-a-Service companies, we highly recommend a combination of high-intent Google Search campaigns, highly target LinkedIn Conversions, and a robust technical content SEO strategy targeting industry bottlenecks and integrations.",
      },
      {
        question: "How do you measure marketing ROI?",
        answer: "We establish multi-touch attribution pipelines that track customer journeys from the first ad interaction to sales CRM completion. We measure success using concrete parameters: cost per lead (CPL), pipeline value generated, and marketing-originated return on ad spend (ROAS).",
      }
    ],
  },
  {
    slug: "social-media-management",
    badge: "Management",
    title: "Social Media Management",
    iconName: "MessageSquare",
    imageSrc: "/images/social-media-management.webp",
    seo: {
      title: "Enterprise Social Media Management | Valari Technologies",
      description: "Build strong brand authority with Valari Technologies. We provide comprehensive social media planning, content design, copywriting, and engagement strategies.",
      keywords: ["social media management", "brand management", "content design", "copywriting", "organic engagement", "Valari Technologies"],
      ogTitle: "Enterprise Social Media Management by Valari Technologies",
      ogDescription: "Enhance your organic social media footprint. Grow brand engagement, publish high-quality visuals, and nurture online communities with our specialists.",
    },
    hero: {
      heading: "Elevate Your Organic Social Presence",
      description: "We build community engagement, create high-impact visual narratives, and design consistent multi-platform posting schedules tailored to establish brand dominance.",
      primaryCta: "Strengthen Your Presence",
      secondaryCta: "Explore Case Studies",
    },
    overview: {
      intro: "Organic social media is the cornerstone of corporate credibility and direct customer loyalty. Valari Technologies provides full-scale, professional Social Media Management services designed to turn passive feeds into high-value digital communities. We combine content curation, custom reels/video creation, professional copywriting, and performance tracking to keep your brand active and top-of-mind across all major platforms.",
      whyNeeded: "Sustaining a consistent, high-quality social presence requires significant time, graphic design, and video editing resources. Modern brands cannot afford visual inconsistencies or silent channels, which directly damage consumer trust.",
      challengesSolved: [
        "Inconsistent posting schedules that limit algorithmic organic visibility.",
        "Unpolished visual styling and poor content formatting.",
        "Slow response rates to customer comments and direct message inquiries.",
        "Lack of alignment between social media posting and overarching marketing goals."
      ],
      valueProp: "Our team handles the heavy lifting—from content planning to asset creation—ensuring your brand speaks with absolute authority on every channel.",
    },
    features: [
      {
        title: "Multi-Platform Planning",
        description: "Structuring cohesive content schedules across LinkedIn, Instagram, Facebook, and Twitter adjusted for platform-specific algorithms.",
        icon: "Calendar",
      },
      {
        title: "Short-Form Video & Reels",
        description: "End-to-end production of engaging short-form video content, reels, and video stories optimized for mobile view formats.",
        icon: "Video",
      },
      {
        title: "Professional Copywriting",
        description: "Drafting platform-tailored copy, engaging hook points, and call-to-actions that drive engagement.",
        icon: "Edit3",
      },
      {
        title: "Custom Creative Assets",
        description: "Designing high-quality social graphics, carousel templates, and brand assets that match corporate style guidelines.",
        icon: "Palette",
      },
      {
        title: "Active Community Management",
        description: "Monitoring daily comments, replying to user messages, and nurturing interactive community groups to boost organic reach.",
        icon: "Heart",
      },
      {
        title: "Performance Reporting",
        description: "Monthly analytics reports tracking engagement rates, audience demographics, profile visits, and click-through metrics.",
        icon: "BarChart",
      }
    ],
    benefits: [
      {
        title: "Audience Growth",
        value: "+85%",
        description: "Average organic follower growth within the first 4 months of consistent management.",
      },
      {
        title: "Engagement Peak",
        value: "4.2x",
        description: "Increase in weekly comments, shares, and profile actions via interactive story sequences.",
      },
      {
        title: "Referral Traffic",
        value: "+60%",
        description: "Growth in social referral clicks to client websites, boosting organic customer acquisition.",
      }
    ],
    process: [
      {
        step: "01",
        title: "Brand Voice Discovery",
        description: "We analyze your brand design, colors, guidelines, target demographic, and tone of voice.",
      },
      {
        step: "02",
        title: "Content Calendar Setup",
        description: "Drafting a 30-day posting schedule containing a mix of value posts, custom graphics, and product promotions.",
      },
      {
        step: "03",
        title: "Creative Development",
        description: "Our copywriters and designers produce the posts, reels, templates, and caption copy.",
      },
      {
        step: "04",
        title: "Review & Approval",
        description: "You review the monthly queue in a shared workspace platform and approve files before launch.",
      },
      {
        step: "05",
        title: "Scheduling & Moderation",
        description: "Publishing posts automatically at high-traffic times and monitoring community discussions.",
      }
    ],
    technologies: [
      {
        category: "Creative Tools",
        items: ["Adobe Creative Suite", "Figma", "Canva Pro", "Premiere Pro"],
      },
      {
        category: "Scheduling & Analytics",
        items: ["Buffer", "Hootsuite", "Loomly", "Sprout Social"],
      },
      {
        category: "Engagement Platforms",
        items: ["Instagram Creator Studio", "LinkedIn Analytics", "Meta Business Suite"],
      }
    ],
    industries: ["Startups & VC", "B2C & Retail", "Education & Courses", "Professional Services", "Entertainment"],
    faqs: [
      {
        question: "How far in advance do we plan the content?",
        answer: "We structure all content, visual assets, captions, and publication schedules exactly 30 days in advance. This gives your team sufficient time to review, refine, and approve the queue, ensuring zero gaps in posting.",
      },
      {
        question: "Do you respond to custom customer inquiries?",
        answer: "We monitor your direct messages and comments daily. We answer standard questions (hours, website links, catalog locations) immediately. For custom technical inquiries, we route the leads directly to your email or designated representative.",
      },
      {
        question: "Do you run paid boost ads for social pages?",
        answer: "While this service covers organic social media management (content design and scheduling), we can integrate paid social campaign boosting (Meta ads) as an add-on to accelerate follower growth.",
      },
      {
        question: "How do you maintain brand voice consistency?",
        answer: "We develop a comprehensive brand voice guideline document during onboarding. This establishes spelling, tone, emojis usage, formatting patterns, and forbidden words to ensure the messaging is identical to your in-house style.",
      }
    ],
  },
  {
    slug: "website-development",
    badge: "Development",
    title: "Website Development",
    iconName: "Code2",
    imageSrc: "/images/website-development.webp",
    seo: {
      title: "Enterprise Custom Website Development | Valari Technologies",
      description: "Build custom high-performance websites with Valari Technologies. We design responsive landing pages, corporate platforms, Next.js sites, and e-commerce stores.",
      keywords: ["web development", "website design", "Next.js", "e-commerce", "responsive web", "Valari Technologies"],
      ogTitle: "Enterprise Web Development by Valari Technologies",
      ogDescription: "Scale your business with lightning-fast Next.js and custom web development. Perfect SEO, modern UI/UX design, and clean codebases.",
    },
    hero: {
      heading: "High-Performance Modern Web Engineering",
      description: "We write clean, optimized TypeScript, utilizing Next.js and headless architectures to build lightning-fast web applications that convert traffic into revenue.",
      primaryCta: "Build Your Website",
      secondaryCta: "Explore Tech Stack",
    },
    overview: {
      intro: "Your corporate website is the digital storefront of your enterprise. Valari Technologies custom-builds modern, fully responsive web platforms that pair sleek, interactive UI design with high-performance server architecture. By developing custom code rather than relying on bloated template builders, we ensure your site achieves near-perfect Lighthouse scores, responsive loading, and optimal search engine positioning.",
      whyNeeded: "Slow-loading websites directly lose customers and face search penalties from Google's Core Web Vitals. Traditional platforms often lack the flexibility required to support complex CRM integrations, advanced SEO schemas, and customizable design systems.",
      challengesSolved: [
        "High bounce rates caused by slow page loading speeds.",
        "Broken responsiveness on mobile and tablet screens.",
        "Inefficient SEO performance due to bad HTML markup and server lag.",
        "Rigid CMS tools that prevent marketing teams from editing layouts easily."
      ],
      valueProp: "We utilize modern technologies like React, Next.js, and headless CMS frameworks to construct secure, scalable, and customizable web products.",
    },
    features: [
      {
        title: "Next.js & React App Router",
        description: "Server-side rendering, static site generation, and client prefetching to achieve instant load speeds.",
        icon: "Layers",
      },
      {
        title: "Headless CMS Integrations",
        description: "Decoupling design from content using Strapi or Contentful, letting your editors update copy without breaking layouts.",
        icon: "Cpu",
      },
      {
        title: "E-Commerce Architectures",
        description: "Secure payment gateways, product feeds, cart logics, and order management dashboards built for scale.",
        icon: "ShoppingBag",
      },
      {
        title: "Responsive Tailwind CSS Layouts",
        description: "Pixel-perfect visual design adjusted perfectly across ultra-wide monitors, laptops, tablets, and mobile screens.",
        icon: "Layout",
      },
      {
        title: "Core Web Vitals Optimization",
        description: "Optimized image loading, code splitting, script deferral, and layout stability to pass all search performance checks.",
        icon: "Zap",
      },
      {
        title: "Secure Server Deployment",
        description: "Continuous deployment via Vercel or AWS, coupled with SSL configurations and custom DNS management.",
        icon: "ShieldAlert",
      }
    ],
    benefits: [
      {
        title: "Page Speed Boost",
        value: "<1.2s",
        description: "Average page load duration achieved via Next.js static asset optimizations.",
      },
      {
        title: "SEO Health Score",
        value: "99+",
        description: "Lighthouse audit score for technical accessibility, SEO, and structural performance.",
      },
      {
        title: "Conversion Growth",
        value: "+35%",
        description: "Increase in call-to-action clicks due to layout simplicity and faster rendering speeds.",
      }
    ],
    process: [
      {
        step: "01",
        title: "System Design Blueprinting",
        description: "Mapping site maps, defining metadata structures, listing integrations, and specifying performance targets.",
      },
      {
        step: "02",
        title: "Figma UI/UX Mockups",
        description: "Designing pixel-perfect mockups for mobile and desktop screens to review the style guidelines before coding.",
      },
      {
        step: "03",
        title: "Clean Code Development",
        description: "Coding the frontend components using React and Tailwind CSS, structured with TypeScript types.",
      },
      {
        step: "04",
        title: "CMS & Database Setup",
        description: "Creating database models and configuring headless content editing dashboards.",
      },
      {
        step: "05",
        title: "Rigorous QA & Launch",
        description: "Testing page responsiveness across multiple physical devices, verifying form fields, and publishing via CI/CD.",
      }
    ],
    technologies: [
      {
        category: "Frontend Stack",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      },
      {
        category: "Headless CMS",
        items: ["Strapi", "Contentful", "Sanity.io", "WordPress (Headless)"],
      },
      {
        category: "Backend Stack",
        items: ["Node.js", "Express", "Django", "PostgreSQL", "Prisma ORM"],
      },
      {
        category: "Hosting & Server",
        items: ["Vercel", "AWS S3/CloudFront", "Netlify", "Docker"],
      }
    ],
    industries: ["SaaS & Tech Platforms", "E-Commerce Stores", "Professional Agencies", "Consulting Firms", "Education Academies"],
    faqs: [
      {
        question: "Can our marketing team edit text without knowing code?",
        answer: "Yes. We integrate headless CMS dashboards (like Strapi or Contentful). Your team can log in, edit text fields, upload images, or add blog posts, and the changes publish automatically, keeping design layouts intact.",
      },
      {
        question: "Do you build custom templates or use WordPress?",
        answer: "We avoid bulky WordPress templates or page builders. We write custom code using Next.js/React. This guarantees complete design freedom, much faster loading times, and significantly higher security.",
      },
      {
        question: "How do you handle mobile responsiveness?",
        answer: "We design websites using a mobile-first responsive layout paradigm. Every element is tested across various physical mobile and tablet viewports to verify that layouts wrap, scale, and function perfectly.",
      },
      {
        question: "Is search engine optimization integrated from day one?",
        answer: "Yes. Technical SEO is built directly into our codebase. We configure semantic HTML5 tags, dynamic sitemaps, robots.txt, metadata structures, prefetching, and fast load speeds to ensure Google indexes your site properly.",
      }
    ],
  },
  {
    slug: "branding",
    badge: "Design",
    title: "Branding & Creative Design",
    iconName: "Palette",
    imageSrc: "/images/branding-creative-design.webp",
    seo: {
      title: "Corporate Identity & UI/UX Creative Design | Valari Technologies",
      description: "Build an outstanding corporate brand with Valari Technologies. We provide premium logo design, color guidelines, branding materials, and high-fidelity UI/UX mockups.",
      keywords: ["branding", "creative design", "logo design", "UI/UX design", "corporate identity", "Valari Technologies"],
      ogTitle: "Corporate Branding & UI/UX Design by Valari Technologies",
      ogDescription: "Establish visual authority. High-fidelity Figma design systems, premium creative assets, and logo packages for modern enterprises.",
    },
    hero: {
      heading: "Visual Identities That Command Respect",
      description: "We design cohesive branding frameworks, custom iconography, and high-fidelity product layouts engineered to deliver visual authority.",
      primaryCta: "Design Your Brand",
      secondaryCta: "Explore Portfolio",
    },
    overview: {
      intro: "Branding is not just a logo; it is the emotional and visual shortcut to customer trust. Valari Technologies provides expert Branding & Creative Design services that establish clear, high-end identity frameworks for modern businesses. We develop complete design guidelines—including typography rules, custom color palettes, marketing collateral, and interactive product UI/UX blueprints—to ensure your brand presents absolute consistency on every screen.",
      whyNeeded: "Inconsistent visual assets across websites, slide decks, and social media confuse customers and dilute brand value. An outdated or generic identity limits your ability to command premium pricing in competitive markets.",
      challengesSolved: [
        "Outdated visual identities that fail to engage modern demographics.",
        "Lack of cohesive design guidelines, leading to color and font mismatch.",
        "Unpolished marketing materials, pitch decks, and digital ads.",
        "Confusing user interfaces (UI) and counter-intuitive navigation paths."
      ],
      valueProp: "Our designers specialize in high-end, clean design systems built in Figma, ensuring your corporate assets are ready for development.",
    },
    features: [
      {
        title: "Logo Design Packages",
        description: "Creation of primary, secondary, and submark logo variants designed to remain clean on mobile tabs and billboards.",
        icon: "Award",
      },
      {
        title: "Design Guidelines",
        description: "Comprehensive documentation detailing corporate typography pairs, primary/secondary colors, and logo spacing guidelines.",
        icon: "BookOpen",
      },
      {
        title: "Figma UI/UX Systems",
        description: "High-fidelity app and website mockups, structural wireframes, and reusable component libraries.",
        icon: "Figma",
      },
      {
        title: "Corporate Stationary",
        description: "Custom layouts for business cards, letterheads, email footers, and official corporate document templates.",
        icon: "FileText",
      },
      {
        title: "Social Media Kits",
        description: "Pre-formatted social banners, profile assets, post layouts, and story templates matching your branding.",
        icon: "Image",
      },
      {
        title: "Advertising Creatives",
        description: "Designing high-conversion visual ad frames, web banners, and flyers optimized for marketing campaigns.",
        icon: "Megaphone",
      }
    ],
    benefits: [
      {
        title: "Visual Trust",
        value: "95%",
        description: "Increase in customer perception score regarding brand reliability and product quality.",
      },
      {
        title: "UI User Flow",
        value: "2.8x",
        description: "Improvement in user task completion speed due to intuitive UI/UX navigation adjustments.",
      },
      {
        title: "Asset Production",
        value: "100%",
        description: "Clean vector layouts supplied in SVG, PDF, and PNG formats, ready for immediate print or digital use.",
      }
    ],
    process: [
      {
        step: "01",
        title: "Creative Discovery Session",
        description: "We analyze your audience, look at competitors, research color psychology, and review brand references.",
      },
      {
        step: "02",
        title: "Moodboards & Tone",
        description: "Developing visual boards to align on the artistic direction before creating the vectors.",
      },
      {
        step: "03",
        title: "Logo & Style Concepts",
        description: "Drafting multiple unique logo designs, color schemes, and font pairings for review.",
      },
      {
        step: "04",
        title: "Figma Asset Detailing",
        description: "Refining the selected concepts into final high-resolution vectors and styling systems.",
      },
      {
        step: "05",
        title: "Full Style Guide Delivery",
        description: "Compiling all visual vectors into a structured brand book with instruction maps for web developers.",
      }
    ],
    technologies: [
      {
        category: "Design Software",
        items: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
      },
      {
        category: "Typography Assets",
        items: ["Google Fonts", "Adobe Fonts", "Custom Type Foundry Assets"],
      },
      {
        category: "Prototyping Tools",
        items: ["Figma Interactive Components", "Principle", "InVision"],
      }
    ],
    industries: ["SaaS & Tech Startups", "Retail Brands", "Finance & Law Consulting", "Real Estate Groups", "Lifestyle Products"],
    faqs: [
      {
        question: "Do I get full ownership of the logo designs?",
        answer: "Yes. Upon project completion and final payment, you obtain 100% intellectual property ownership of the finalized visual assets. We deliver all vector source files directly to your team.",
      },
      {
        question: "What format are the final files delivered in?",
        answer: "We deliver vector source assets in editable format (.AI and .FIGMA), high-resolution print files (.PDF and .EPS), and web-ready raster assets (.PNG with transparency and .SVG).",
      },
      {
        question: "Do you design UI/UX for mobile applications?",
        answer: "Yes. We specialize in structuring high-fidelity Figma user interface (UI) and user experience (UX) layout screens, complete with interactive mockups and component libraries for mobile apps.",
      },
      {
        question: "What is a brand book style guide?",
        answer: "A brand book is the official manual that defines your visual identity. It details font sizes, color codes (HEX, RGB, CMYK), spacing rules, and usage constraints, ensuring your identity remains uniform across all agencies.",
      }
    ],
  },
  {
    slug: "business-automation",
    badge: "Automation",
    title: "Business Automation",
    iconName: "Workflow",
    imageSrc: "/images/business-automation.webp",
    seo: {
      title: "Business Process Automation & CRM Integrations | Valari Technologies",
      description: "Optimize operations with Valari Technologies. We build custom Google Sheets automation, workflow connections, and analytics dashboards.",
      keywords: ["business automation", "workflow automation", "CRM integration", "Google Sheets scripting", "Valari Technologies"],
      ogTitle: "Business Process Automation by Valari Technologies",
      ogDescription: "Automate manual tasks. Connect systems, deploy automated reporting dashboards, and optimize productivity.",
    },
    hero: {
      heading: "Automate Workflows. Maximize Scale.",
      description: "We replace slow manual data tasks with automated script pipelines, app connections, and dashboards built to save hours daily.",
      primaryCta: "Start Automating",
      secondaryCta: "Explore Case Studies",
    },
    overview: {
      intro: "Manual processes and disconnected software systems are major barriers to operational growth. Valari Technologies develops custom Business Automation frameworks that connect your tools, automate data migration, and build real-time monitoring dashboards. By automating repetitive administrative tasks, we let your employees focus on high-value operations: growing sales and supporting clients.",
      whyNeeded: "Copy-pasting data between databases, Google Sheets, and CRMs manually wastes hundreds of hours yearly and increases the risk of input errors. Automated workflow scripts run continuously without downtime, ensuring data accuracy.",
      challengesSolved: [
        "Wasted employee hours spent on manual reporting.",
        "Incorrect data entry across sales pipelines and financial ledgers.",
        "Disconnected CRM platforms that fail to trigger marketing campaigns.",
        "Lack of real-time reporting indicators for management decisions."
      ],
      valueProp: "We utilize cloud pipelines and custom API integrations to design automated systems that require zero maintenance.",
    },
    features: [
      {
        title: "API Integrations",
        description: "Connecting separate software tools (Stripe, HubSpot, Slack, Mailchimp) to sync customer events automatically.",
        icon: "Network",
      },
      {
        title: "Google Workspace Scripting",
        description: "Writing Google Apps Script to automate calculations, send automated reports, and generate custom docs.",
        icon: "Cpu",
      },
      {
        title: "CRM & ERP Connections",
        description: "Deploying automated pipelines that update customer details, score sales leads, and sync invoices.",
        icon: "Layers",
      },
      {
        title: "Automated Reporting",
        description: "Aggregating metrics into Looker Studio or Power BI dashboards, eliminating manual sheet exports.",
        icon: "BarChart2",
      },
      {
        title: "Inventory & Billing Automations",
        description: "Triggering invoice creation and updating logistics records immediately upon checkout.",
        icon: "CreditCard",
      },
      {
        title: "Notification Bots",
        description: "Building custom Slack or Teams bots that alert your staff about critical events and leads.",
        icon: "MessageSquare",
      }
    ],
    benefits: [
      {
        title: "Hours Saved",
        value: "15hr+",
        description: "Average weekly administrative time saved per employee through automated scripts.",
      },
      {
        title: "Data Accuracy",
        value: "99.9%",
        description: "Reduction in human errors across accounting sheets and CRM contact records.",
      },
      {
        title: "Lead Speed",
        value: "<3min",
        description: "Average speed to trigger introductory emails to inbound website leads.",
      }
    ],
    process: [
      {
        step: "01",
        title: "Process Mapping Analysis",
        description: "We audit your manual tasks, identify bottlenecks, and list software API keys.",
      },
      {
        step: "02",
        title: "Pipeline Architecture Plan",
        description: "Drawing schema logic diagrams showing how data will move between endpoints.",
      },
      {
        step: "03",
        title: "API & Script Coding",
        description: "Writing clean automation scripts, setting up Webhooks, and mapping database parameters.",
      },
      {
        step: "04",
        title: "Edge-Case Testing",
        description: "Simulating heavy traffic and bad inputs to verify that error-handling blocks prevent pipeline blockages.",
      },
      {
        step: "05",
        title: "Operations Handoff",
        description: "Activating the automated scripts, setting up monitoring boards, and training your team on usage.",
      }
    ],
    technologies: [
      {
        category: "Integration Engines",
        items: ["Make.com (Integromat)", "Zapier Developer Tools", "n8n (Self-hosted)", "Node-RED"],
      },
      {
        category: "Scripting & APIs",
        items: ["Google Apps Script", "Node.js Serverless Functions", "Python Scripting", "REST/GraphQL Webhooks"],
      },
      {
        category: "Reporting & Dashboards",
        items: ["Looker Studio", "Microsoft Power BI", "Google Sheets (Custom scripts)"],
      }
    ],
    industries: ["Logistics & Shipping", "E-Commerce Brands", "Real Estate Agencies", "SaaS Operations", "Legal & Accounting Firms"],
    faqs: [
      {
        question: "Can we automate legacy software without open APIs?",
        answer: "In most cases, yes. We can utilize browser scripting (Web Scraping / Puppeteer), database replication, or automated RPA (Robotic Process Automation) to extract and push data without a official API.",
      },
      {
        question: "How do you handle API updates that might break things?",
        answer: "We build robust error-monitoring logic into our automation scripts. If an API returns an error or changes its data structure, the pipeline pauses, alert bots ping Slack immediately, and the data is held securely until updated.",
      },
      {
        question: "Are our automated database keys secure?",
        answer: "Yes. We follow strict security practices. All API keys and secret tokens are encrypted and stored in secure environment variables, never hardcoded in scripts, protecting your databases.",
      },
      {
        question: "How long does a standard automation setup take?",
        answer: "Simple Google Sheets scripting or single-point CRM integrations take 1 to 2 weeks. Complex, multi-system enterprise database connections typically require 3 to 5 weeks.",
      }
    ],
  },
  {
    slug: "software-solutions",
    badge: "Solutions",
    title: "Software Solutions",
    iconName: "Layers",
    imageSrc: "/images/software-solutions.webp",
    seo: {
      title: "Custom Software Engineering & SaaS Solutions | Valari Technologies",
      description: "Build custom enterprise software with Valari Technologies. We engineer scalable SaaS platforms, business portals, custom ERP modules, and cloud applications.",
      keywords: ["software solutions", "custom software development", "SaaS platforms", "ERP modules", "cloud app development", "Valari Technologies"],
      ogTitle: "Custom Software Development by Valari Technologies",
      ogDescription: "Scalable enterprise web applications. Custom coding, backend system design, database modeling, and Vercel/AWS hosting.",
    },
    hero: {
      heading: "Enterprise-Grade Custom Software Engineering",
      description: "We build secure web applications, database portals, custom CRM panels, and SaaS prototypes designed to support millions of queries.",
      primaryCta: "Develop Your Platform",
      secondaryCta: "Review Tech Stack",
    },
    overview: {
      intro: "Off-the-shelf software often forces businesses to compromise on features, pricing, or data ownership. Valari Technologies designs, builds, and maintains custom Software Solutions tailored exactly to your unique organizational goals. From private business portals and customer dashboards to complex SaaS product launches and legacy software refactoring, we write high-performance TypeScript and Python code configured to scale indefinitely.",
      whyNeeded: "Pre-built SaaS options charge expensive per-user monthly licenses and lock your data in proprietary databases. Custom platforms give you full IP ownership, custom integration options, and complete control over your product roadmap.",
      challengesSolved: [
        "Inefficient workflows caused by pre-built systems that lack key options.",
        "Expensive monthly per-user software licensing costs.",
        "Data security concerns and lack of control over private databases.",
        "Struggling to scale software when user traffic peaks."
      ],
      valueProp: "We deliver full-stack codebases utilizing modular components, robust databases, and secure hosting setups.",
    },
    features: [
      {
        title: "Full-Stack Development",
        description: "React/Next.js frontends connected securely to Python or Node.js backend microservices.",
        icon: "Cpu",
      },
      {
        title: "Database Architecture",
        description: "Optimized relational (PostgreSQL) and non-relational (MongoDB) databases built for speed.",
        icon: "Database",
      },
      {
        title: "Enterprise Portals",
        description: "Internal dashboards, vendor panels, and customer account centers with granular user role permissions.",
        icon: "Layout",
      },
      {
        title: "SaaS Product Development",
        description: "Developing scalable SaaS prototypes, integrating billing, setting up authentication, and deploying code.",
        icon: "Boxes",
      },
      {
        title: "Secure Auth & OAuth",
        description: "Integrating secure single-sign-on (SSO), Auth0, JWT permissions, and MFA security parameters.",
        icon: "ShieldAlert",
      },
      {
        title: "REST & GraphQL APIs",
        description: "Documenting and building clean, fast API routes designed for external software connections.",
        icon: "GitMerge",
      }
    ],
    benefits: [
      {
        title: "Cost Reductions",
        value: "-60%",
        description: "Reduction in per-user software license fees by utilizing a custom-owned solution.",
      },
      {
        title: "Database Performance",
        value: "8x",
        description: "Increase in data query speeds through relational schema indexing.",
      },
      {
        title: "Platform Scalability",
        value: "100%",
        description: "Cloud setups built to autoscale based on active traffic load.",
      }
    ],
    process: [
      {
        step: "01",
        title: "Specification Scope",
        description: "Writing detailed software blueprints, modeling schemas, and establishing timelines.",
      },
      {
        step: "02",
        title: "System Architecture",
        description: "Designing database structures and mapping backend microservices.",
      },
      {
        step: "03",
        title: "Agile Coding Sprint",
        description: "Developing the platform in 2-week sprints, uploading code to private GitHub repos daily.",
      },
      {
        step: "04",
        title: "Rigorous QA Auditing",
        description: "Automated unit tests, manual load testing, and security auditing.",
      },
      {
        step: "05",
        title: "CI/CD Cloud Deployment",
        description: "Publishing the app to production via AWS or Docker container networks, backed by continuous monitoring.",
      }
    ],
    technologies: [
      {
        category: "Backend & Systems",
        items: ["Node.js / Express", "Python (Django / FastAPI)", "PostgreSQL", "MongoDB"],
      },
      {
        category: "Frontend Frameworks",
        items: ["React", "Next.js", "TypeScript", "Redux Toolkit / Zustand"],
      },
      {
        category: "DevOps & Cloud",
        items: ["AWS (EC2, RDS, Lambda)", "Docker", "GitHub Actions", "Terraform"],
      }
    ],
    industries: ["FinTech", "Healthcare Systems", "Enterprise SaaS", "Logistics & Storage", "Education Networks"],
    faqs: [
      {
        question: "Who owns the software code upon completion?",
        answer: "You do. We assign 100% intellectual property ownership of the codebase and database structures directly to your company upon final milestone payment. We deliver all GitHub repository access keys.",
      },
      {
        question: "Do you build custom mobile apps as well?",
        answer: "Yes. We build responsive web applications that adjust perfectly to mobile formats, and we can develop native mobile apps using React Native or Flutter to target iOS and Android stores.",
      },
      {
        question: "How do you handle software maintenance and updates?",
        answer: "We provide comprehensive support SLAs (Service Level Agreements). We manage security updates, database back-ups, cloud hosting scaling, and release new features as your business expands.",
      },
      {
        question: "Can you upgrade or refactor our existing database systems?",
        answer: "Yes. We audit legacy codebases, rewrite inefficient database queries, migrate data safely to modern PostgreSQL engines, and add new API features without disrupting current operations.",
      }
    ],
  },
];
