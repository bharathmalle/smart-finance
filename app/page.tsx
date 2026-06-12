import type { Metadata } from "next";
import Script from "next/script";
import { ExpenseDashboard } from "@/components/expense-dashboard";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Smart Finance AI | Expense Tracker",
  description: "Track and manage expenses in real time with Smart Finance AI."
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.name,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  description: "Track and manage expenses in real time with Smart Finance AI."
};

export default function HomePage() {
  return (
    <main>
      <ExpenseDashboard />
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}
