import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/container";
import { DashboardPreview } from "@/components/dashboard-preview";
import { trustMetrics } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(97,135,100,0.18),transparent_40%),radial-gradient(circle_at_top_right,rgba(26,49,44,0.16),transparent_32%)]" />
      <div className="absolute inset-0 -z-10 noise opacity-70" />
      <Container className="section-gap pt-16 sm:pt-20 lg:pt-24">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="eyebrow">
              <ShieldCheck className="h-4 w-4" />
              Privacy-first AI finance dashboard
            </span>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
              Take Control of Every Rupee with AI-Powered Financial Intelligence
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-600 dark:text-slate-300">
              Track expenses, plan budgets, grow savings, and get personalized spending insights in one premium dashboard built for modern financial clarity.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#pricing" className="primary-button">
                Start Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="#tracker" className="secondary-button">
                Track Expenses
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm dark:bg-white/5">
                <Star className="h-4 w-4 text-amber-500" />
                Trusted by 100K+ users
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm dark:bg-white/5">
                <ShieldCheck className="h-4 w-4 text-brand-500" />
                Encrypted and privacy-first
              </div>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {trustMetrics.map((metric) => (
                <div key={metric.label} className="card p-4">
                  <p className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">{metric.value}</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
          <DashboardPreview />
        </div>
      </Container>
    </section>
  );
}
