import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to Smart Finance AI."
};

export default function SignInPage() {
  return (
    <main className="section-shell section-gap">
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="card card-inner">
          <Link href="/" className="text-sm font-semibold text-brand-900 dark:text-brand-100">
            Back home
          </Link>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white">Sign in to Smart Finance AI</h1>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
            Access your dashboard, budgets, goals, and insights from one secure workspace.
          </p>

          <form className="mt-8 space-y-4">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                className="h-12 w-full rounded-full border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                className="h-12 w-full rounded-full border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
                placeholder="********"
              />
            </div>
            <button type="submit" className="primary-button w-full">
              Continue
            </button>
          </form>
        </section>

        <aside className="card card-inner bg-gradient-to-br from-brand-900 to-brand-700 text-white">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-100/80">Secure access</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">Your money view, always close at hand.</h2>
          <div className="mt-8 space-y-4 text-brand-100/90">
            <p>Encrypted account access</p>
            <p>Privacy-first analytics</p>
            <p>Mobile-ready dashboard</p>
            <p>AI-powered recommendations</p>
          </div>
        </aside>
      </div>
    </main>
  );
}
