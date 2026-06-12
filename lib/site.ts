export const siteConfig = {
  name: "Smart Finance AI",
  description: "Smart Finance AI helps you track expenses in real time with a focused, privacy-first dashboard.",
  url: "https://smartfinanceai.com",
  ogImage: "/opengraph-image",
  contactEmail: "bharathmalle12@gmail.com"
} as const;

export const navLinks = [{ label: "Tracker", href: "#tracker" }] as const;

export const trustMetrics = [
  { value: "100K+", label: "Users" },
  { value: "INR 500M+", label: "Expenses Tracked" },
  { value: "4.9/5", label: "User Rating" },
  { value: "92%", label: "Improved Saving Habits" }
] as const;

export const painPoints = [
  "You open your bank app and still have no idea where the money went.",
  "Subscriptions, dining, rides, and impulse buys quietly eat into your month.",
  "Your savings goals are aspirational, but not operational.",
  "Spreadsheets feel like homework, not a system you can trust.",
  "Financial stress grows when the numbers only make sense at month-end."
] as const;

export const featureCards = [
  {
    title: "Expense Tracking",
    description: "Automatic categorization and real-time updates keep every rupee accounted for.",
    icon: "receipt-text"
  },
  {
    title: "Budget Planning",
    description: "Monthly budgets, smart alerts, and proactive adjustments before overspending happens.",
    icon: "wallet"
  },
  {
    title: "Savings Goals",
    description: "Set goals, visualize progress, and stay motivated with milestone-based tracking.",
    icon: "target"
  },
  {
    title: "Analytics Dashboard",
    description: "Interactive charts and reports reveal patterns across categories, weeks, and months.",
    icon: "line-chart"
  },
  {
    title: "AI Spending Coach",
    description: "Personalized recommendations help you optimize spending and improve financial habits.",
    icon: "sparkles"
  },
  {
    title: "Smart Notifications",
    description: "Bill reminders, budget alerts, and risk signals keep you ahead of financial surprises.",
    icon: "bell-ring"
  }
] as const;

export const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Product Manager",
    quote:
      "I finally understand where my salary goes. The AI insights caught wasteful subscriptions I had forgotten about."
  },
  {
    name: "Sara Khan",
    role: "Graduate Student",
    quote:
      "The savings goals feel achievable now. I used to track everything in sheets, but this dashboard is effortless."
  },
  {
    name: "Neha Patel",
    role: "Freelance Designer",
    quote:
      "My income fluctuates, so budgeting used to be chaotic. Smart Finance AI helped me stabilize my monthly planning."
  },
  {
    name: "Rohan Verma",
    role: "Parent of Two",
    quote:
      "The spending alerts and family budget view gave us control again. We're saving more without feeling restricted."
  }
] as const;

export const faqs = [
  {
    question: "Can I track expenses every month?",
    answer:
      "Yes. The tracker is organized by month, so you can review spending month by month and compare totals over time."
  },
  {
    question: "Does the app save my data?",
    answer:
      "Yes. It saves your entries in your browser using local storage, so your data stays available when you return."
  },
  {
    question: "Is the tracker dark mode?",
    answer:
      "Yes. The tracker uses a dark-first design with dark cards, inputs, and category chips."
  },
  {
    question: "Can I add and delete expenses?",
    answer:
      "Yes. You can add new expenses, search them, and remove entries instantly from the tracker."
  }
] as const;

export const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    description: "For individuals who want a simple, trustworthy money dashboard.",
    featured: false,
    features: ["Expense tracking", "Monthly budget", "Basic insights", "Mobile access"]
  },
  {
    name: "Pro",
    price: "INR 499/mo",
    description: "For people ready to unlock AI coaching and advanced reporting.",
    featured: true,
    features: ["Everything in Starter", "AI recommendations", "Savings forecasting", "Priority support"]
  },
  {
    name: "Family",
    price: "INR 999/mo",
    description: "For households that want shared budgets and collaborative goals.",
    featured: false,
    features: ["Shared budgets", "Household goals", "Advanced alerts", "Multi-user visibility"]
  }
] as const;
