export interface FeatureItem {
  title: string;
  description: string;
  iconName: "Lightbulb" | "TrendingUp" | "Target";
  theme: "blue" | "gold" | "purple";
}

export interface ValuePropsData {
  heading: string;
  description: string;
  items: FeatureItem[];
}

export const VALUE_PROPS_DATA: ValuePropsData = {
  heading: "Driven by Practicality, Focused on Results",
  description:
    "At Valari Technologies, we don't just build software or run ads. We create ecosystem-driven solutions that are practical, affordable, and meticulously designed to solve your specific business bottlenecks.",
  items: [
    {
      title: "Practical Thinking",
      description:
        "We bypass the buzzwords to deliver tools and strategies that work in the real world, starting from day one.",
      iconName: "Lightbulb",
      theme: "blue",
    },
    {
      title: "Affordable Scale",
      description:
        "Enterprise-grade solutions optimized for cost-efficiency, ensuring your growth remains sustainable.",
      iconName: "TrendingUp",
      theme: "gold",
    },
    {
      title: "Result-Oriented",
      description:
        "Every line of code and marketing campaign is measured against your primary business objectives.",
      iconName: "Target",
      theme: "purple",
    },
  ],
};
