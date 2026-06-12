"use client";

import { useState } from "react";
import { BarChart3, PlusCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import { ExpenseTrackerPopup } from "@/components/expense-tracker-popup";

export function ExpenseDashboard() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <ExpenseTrackerPopup open={open} onOpenChange={setOpen} />

      <section id="tracker" className="section-shell section-gap pt-16 sm:pt-20 lg:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="eyebrow">
              <Sparkles className="h-4 w-4" />
              Live expense tracking
            </span>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl dark:text-white">
              Track expenses first. Everything else comes later.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Smart Finance AI now opens as a focused expense tracker with live totals, searchable history, and instant updates.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={() => setOpen(true)} className="primary-button">
                <PlusCircle className="mr-2 h-4 w-4" />
                Open expense popup
              </button>
              <Link href="#tracker" className="secondary-button">
                View tracker on page
              </Link>
            </div>
          </div>

          <div className="card card-inner">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-900 text-white">
                <BarChart3 className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Dashboard focus</p>
                <p className="text-lg font-semibold text-slate-950 dark:text-white">Expenses only, no clutter</p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ["Live totals", "Update instantly"],
                ["Searchable history", "Find old entries fast"],
                ["Local storage", "Your browser remembers"]
              ].map(([title, description]) => (
                <div key={title} className="rounded-2xl border border-slate-200/80 bg-white p-4 dark:border-white/10 dark:bg-white/5">
                  <p className="font-semibold text-slate-950 dark:text-white">{title}</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[24px] border border-brand-500/15 bg-gradient-to-br from-brand-900 to-brand-700 p-5 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-brand-100/80">Tip</p>
              <p className="mt-3 text-lg leading-8 text-brand-100/90">
                Add one expense and watch the totals and category bars update immediately.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
