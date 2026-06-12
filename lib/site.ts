export const siteConfig = {
  name: "Smart Finance AI",
  description: "Smart Finance AI helps you track expenses in real time with a focused, privacy-first dashboard.",
  url: "https://smartfinanceai.com",
  ogImage: "/opengraph-image",
  contactEmail: "hello@smartfinanceai.com"
} as const;

export const navLinks = [{ label: "Tracker", href: "#tracker" }] as const;

export const trustMetrics = [
  { value: "100K+", label: "Users" },
  { value: "INR 500M+", label: "Expenses Tracked" },
  { value: "4.9/5", label: "User Rating" },
  { value: "92%", label: "Improved Saving Habits" }
] as const;
