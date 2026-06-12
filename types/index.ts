export type Stat = {
  value: string;
  label: string;
};

export type FeatureCard = {
  title: string;
  description: string;
  icon: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  featured?: boolean;
  features: string[];
};
