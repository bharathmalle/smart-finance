import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security",
  description: "Security overview for Smart Finance AI."
};

export default function SecurityPage() {
  return (
    <main className="section-shell section-gap max-w-3xl">
      <Link href="/" className="text-sm font-semibold text-brand-900 dark:text-brand-100">
        Back home
      </Link>
      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white">Security</h1>
      <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">We use encryption, access controls, and secure-by-default architecture to protect your financial information.</p>
    </main>
  );
}
