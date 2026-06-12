"use client";

import { ArrowUpRight, CreditCard, Sparkles, Wallet } from "lucide-react";
import { motion } from "framer-motion";

const spending = [
  { label: "Housing", value: 38, amount: "INR 24,000" },
  { label: "Food", value: 24, amount: "INR 15,300" },
  { label: "Transport", value: 14, amount: "INR 8,900" },
  { label: "Entertainment", value: 10, amount: "INR 6,200" },
  { label: "Savings", value: 28, amount: "INR 18,500" }
];

export function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <motion.div
        className="absolute -inset-8 rounded-[40px] bg-brand-500/10 blur-3xl"
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.03, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="card relative overflow-hidden border-white/60 bg-white/85 p-4 shadow-glow dark:bg-white/5"
        initial={{ opacity: 0, scale: 0.98, y: 18 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="rounded-[28px] border border-slate-200/80 bg-gradient-to-br from-white via-white to-brand-50/60 p-4 dark:border-white/10 dark:from-white/8 dark:via-white/5 dark:to-brand-900/20 sm:p-6">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[24px] bg-brand-900 p-5 text-white shadow-[0_24px_80px_rgba(26,49,44,0.32)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-brand-100/90">Monthly net worth</p>
                  <h3 className="mt-2 text-3xl font-semibold tracking-tight">INR 3,84,200</h3>
                  <p className="mt-2 text-sm text-brand-100/80">+12.4% vs last month</p>
                </div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Sparkles className="h-5 w-5" />
                </span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-100/70">Spending</p>
                  <p className="mt-2 text-xl font-semibold">INR 68,500</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-100/70">Savings rate</p>
                  <p className="mt-2 text-xl font-semibold">28%</p>
                </div>
              </div>
              <div className="mt-6 h-32 rounded-3xl bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.02))] p-4">
                <div className="flex h-full items-end gap-3">
                  {[26, 42, 34, 58, 48, 68, 54].map((bar, index) => (
                    <div key={index} className="flex-1">
                      <div className="rounded-full bg-white/15">
                        <div className="rounded-full bg-gradient-to-t from-brand-200 to-white" style={{ height: `${bar}px` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[24px] border border-slate-200/80 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">AI suggestion</p>
                    <p className="mt-1 font-semibold text-slate-950 dark:text-white">Reduce food delivery spending by 18%</p>
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-900 dark:text-brand-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Based on your last 6 weeks, one weekly meal-prep block could save roughly INR 3,200 per month.
                </p>
              </div>

              <div className="rounded-[24px] border border-slate-200/80 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-brand-900 p-3 text-white">
                    <Wallet className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Savings goal</p>
                    <p className="font-semibold text-slate-950 dark:text-white">Vacation fund</p>
                  </div>
                </div>
                <div className="mt-4 h-3 rounded-full bg-slate-100 dark:bg-white/10">
                  <div className="h-3 w-[72%] rounded-full bg-gradient-to-r from-brand-900 to-brand-500" />
                </div>
                <div className="mt-3 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                  <span>INR 72,000 saved</span>
                  <span>INR 100,000 target</span>
                </div>
              </div>

              <div className="rounded-[24px] border border-slate-200/80 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-brand-500/10 p-3 text-brand-900 dark:text-brand-100">
                      <CreditCard className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Budget allocated</p>
                      <p className="font-semibold text-slate-950 dark:text-white">94% of limits are optimized</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  {spending.map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-300">{item.label}</span>
                        <span className="font-medium text-slate-900 dark:text-white">{item.amount}</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-slate-100 dark:bg-white/10">
                        <div className="h-2 rounded-full bg-gradient-to-r from-brand-900 to-brand-500" style={{ width: `${item.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
