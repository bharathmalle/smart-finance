"use client";

import type { FormEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import { CalendarDays, PlusCircle, Search, TrendingUp, Trash2 } from "lucide-react";
import type { Expense, ExpenseCategory } from "@/types/expense";
import { expenseCategories, formatINR, getMonthKey, getMonthLabel, seedExpenses } from "@/lib/expenses";

const STORAGE_KEY = "smart-finance-ai-expenses";

function loadExpenses(): Expense[] {
  if (typeof window === "undefined") {
    return seedExpenses;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return seedExpenses;
    const parsed = JSON.parse(raw) as Expense[];
    return Array.isArray(parsed) && parsed.length ? parsed : seedExpenses;
  } catch {
    return seedExpenses;
  }
}

export function ExpenseTrackerSection() {
  const [expenses, setExpenses] = useState<Expense[]>(seedExpenses);
  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedMonth, setSelectedMonth] = useState(() => getMonthKey(new Date().toISOString()));
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "Food" as ExpenseCategory,
    note: ""
  });

  useEffect(() => {
    setMounted(true);
    setExpenses(loadExpenses());
  }, []);

  useEffect(() => {
    if (!mounted) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
  }, [expenses, mounted]);

  const visibleExpenses = useMemo(() => {
    const query = search.trim().toLowerCase();
    return [...expenses]
      .sort((a, b) => b.date.localeCompare(a.date))
      .filter((expense) => {
        if (getMonthKey(expense.date) !== selectedMonth) return false;
        if (!query) return true;
        return (
          expense.title.toLowerCase().includes(query) ||
          expense.category.toLowerCase().includes(query) ||
          (expense.note ?? "").toLowerCase().includes(query)
        );
      });
  }, [expenses, search, selectedMonth]);

  const monthOptions = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const allMonths = Array.from({ length: 12 }, (_, index) => {
      const month = String(index + 1).padStart(2, "0");
      return `${currentYear}-${month}`;
    });
    const keys = new Set([...allMonths, ...expenses.map((expense) => getMonthKey(expense.date)), selectedMonth]);
    return Array.from(keys).sort((a, b) => b.localeCompare(a));
  }, [expenses, selectedMonth]);

  const categoryTotals = useMemo(() => {
    const monthExpenses = expenses.filter((expense) => getMonthKey(expense.date) === selectedMonth);
    return expenseCategories.map((category) => {
      const total = monthExpenses.filter((expense) => expense.category === category).reduce((sum, expense) => sum + expense.amount, 0);
      return { category, total };
    });
  }, [expenses, selectedMonth]);

  const monthExpenses = useMemo(() => expenses.filter((expense) => getMonthKey(expense.date) === selectedMonth), [expenses, selectedMonth]);
  const totalSpent = useMemo(() => monthExpenses.reduce((sum, expense) => sum + expense.amount, 0), [monthExpenses]);
  const topCategory = useMemo(() => {
    return [...categoryTotals].sort((a, b) => b.total - a.total)[0];
  }, [categoryTotals]);
  const averageExpense = monthExpenses.length ? totalSpent / monthExpenses.length : 0;
  const activeMonthLabel = getMonthLabel(selectedMonth);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const amount = Number(form.amount);
    if (!form.title.trim() || !Number.isFinite(amount) || amount <= 0) return;

    const nextExpense: Expense = {
      id: crypto.randomUUID(),
      title: form.title.trim(),
      amount,
      category: form.category,
      note: form.note.trim() || undefined,
      date: new Date().toISOString()
    };

    setExpenses((current) => [nextExpense, ...current]);
    setForm({
      title: "",
      amount: "",
      category: "Food",
      note: ""
    });
  }

  function removeExpense(id: string) {
    setExpenses((current) => current.filter((expense) => expense.id !== id));
  }

  return (
    <section className="section-gap">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#0b1714] text-slate-100 shadow-2xl">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="border-b border-white/10 p-6 lg:border-b-0 lg:border-r">
              <span className="inline-flex items-center rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-100">
                Live tracker
              </span>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white">
                Add expenses in real time and see your budget update instantly.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Entries persist in your browser with local storage, so you can keep tracing expenses as you add them.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
                  <CalendarDays className="h-4 w-4 text-brand-500" />
                  Month view
                </div>
                <label htmlFor="month-filter" className="sr-only">
                  Select month
                </label>
                <select
                  id="month-filter"
                  value={selectedMonth}
                  onChange={(event) => setSelectedMonth(event.target.value)}
                  className="mt-3 h-12 w-full rounded-full border border-white/10 bg-[#0f1f1b] px-4 text-sm text-white outline-none transition focus:border-brand-500"
                >
                  {monthOptions.map((monthKey) => (
                    <option key={monthKey} value={monthKey}>
                      {getMonthLabel(monthKey)}
                    </option>
                  ))}
                </select>
                <p className="mt-3 text-sm text-slate-400">
                  Showing expenses for {activeMonthLabel}.
                </p>
              </div>

              <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="expense-title" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                      Expense
                    </label>
                    <input
                      id="expense-title"
                      value={form.title}
                      onChange={(event) => setForm((current) => ({ ...current, title: event.target.value }))}
                      placeholder="e.g. Coffee, rent, fuel"
                      className="h-12 w-full rounded-full border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-brand-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="expense-amount" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                      Amount
                    </label>
                    <input
                      id="expense-amount"
                      type="number"
                      min="1"
                      value={form.amount}
                      onChange={(event) => setForm((current) => ({ ...current, amount: event.target.value }))}
                      placeholder="0"
                      className="h-12 w-full rounded-full border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-brand-500"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="expense-category" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                      Categories
                    </label>
                    <select
                      id="expense-category"
                      value={form.category}
                      onChange={(event) => setForm((current) => ({ ...current, category: event.target.value as ExpenseCategory }))}
                      className="h-12 w-full rounded-full border border-white/10 bg-white px-4 text-sm text-black outline-none transition focus:border-brand-500"
                    >
                      {expenseCategories.map((category) => (
                        <option key={category} value={category} className="text-black">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="expense-note" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                      Note
                    </label>
                    <input
                      id="expense-note"
                      value={form.note}
                      onChange={(event) => setForm((current) => ({ ...current, note: event.target.value }))}
                      placeholder="Optional note"
                      className="h-12 w-full rounded-full border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-brand-500"
                    />
                  </div>
                </div>

                <button type="submit" className="primary-button w-full">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add expense
                </button>
              </form>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Total spent</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{mounted ? formatINR(totalSpent) : "INR 0"}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Average</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{mounted ? formatINR(averageExpense) : "INR 0"}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Top category</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{topCategory?.category ?? "None"}</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Trace spending</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">Your month at a glance</h3>
                </div>
                <label className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <Search className="h-4 w-4 text-slate-400" />
                  <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search expenses"
                    className="w-40 bg-transparent text-sm text-white outline-none placeholder:text-slate-400"
                  />
                </label>
              </div>

              <div className="mt-6 grid gap-4">
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">Live category mix</p>
                      <p className="mt-1 text-lg font-semibold text-white">Updated instantly as you add items</p>
                    </div>
                    <TrendingUp className="h-5 w-5 text-brand-500" />
                  </div>
                  <div className="mt-5 space-y-3">
                    {categoryTotals
                      .filter((item) => item.total > 0)
                      .sort((a, b) => b.total - a.total)
                      .map((item) => {
                        const max = Math.max(...categoryTotals.map((entry) => entry.total), 1);
                        const width = Math.max((item.total / max) * 100, 6);

                        return (
                          <div key={item.category}>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-slate-300">{item.category}</span>
                              <span className="font-medium text-white">{formatINR(item.total)}</span>
                            </div>
                            <div className="mt-2 h-2 rounded-full bg-white/10">
                              <div className="h-2 rounded-full bg-gradient-to-r from-brand-900 to-brand-500" style={{ width: `${width}%` }} />
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">Recent expenses</p>
                      <p className="mt-1 text-lg font-semibold text-white">{visibleExpenses.length} tracked items in {activeMonthLabel}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-[#0f1f1b] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100">
                      Live
                    </span>
                  </div>

                  <div className="mt-5 space-y-3">
                    {visibleExpenses.map((expense) => (
                      <div key={expense.id} className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-semibold text-white">{expense.title}</p>
                            <span className="rounded-full border border-white/10 bg-[#0f1f1b] px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-100">
                              {expense.category}
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-slate-400">
                            {getMonthLabel(expense.date)}
                            {expense.note ? ` - ${expense.note}` : ""}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <p className="text-sm font-semibold text-white">{formatINR(expense.amount)}</p>
                          <button
                            type="button"
                            onClick={() => removeExpense(expense.id)}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-rose-300 hover:text-rose-300 hover:text-white"
                            aria-label={`Remove ${expense.title}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
