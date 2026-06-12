import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Smart Finance AI."
};

export default function TermsPage() {
  return (
    <main className="section-shell section-gap max-w-3xl">
      <Link href="/" className="text-sm font-semibold text-brand-900 dark:text-brand-100">
        Back home
      </Link>
      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white">Terms of Service</h1>
      <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">These terms describe the rules for using Smart Finance AI and related services.</p>
    </main>
  );
}
