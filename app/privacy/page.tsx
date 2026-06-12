import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Smart Finance AI."
};

export default function PrivacyPage() {
  return (
    <main className="section-shell section-gap max-w-3xl">
      <Link href="/" className="text-sm font-semibold text-brand-900 dark:text-brand-100">
        Back home
      </Link>
      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white">Privacy Policy</h1>
      <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
        Smart Finance AI is designed with privacy-first principles. Your data remains yours, and we only use it to provide budgeting, analytics, and AI insights.
      </p>
      <h2 id="cookies" className="mt-10 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
        Cookies
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">We use essential cookies and privacy-preserving analytics where permitted.</p>
    </main>
  );
}
