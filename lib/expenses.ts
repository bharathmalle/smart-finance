import type { Expense, ExpenseCategory } from "@/types/expense";

export const expenseCategories: ExpenseCategory[] = [
  "Housing",
  "Food",
  "Transport",
  "Utilities",
  "Shopping",
  "Health",
  "Entertainment",
  "Savings",
  "Other"
];

export const seedExpenses: Expense[] = [
  {
    id: "seed-1",
    title: "Monthly rent",
    amount: 24000,
    category: "Housing",
    note: "Paid through UPI",
    date: "2026-06-01"
  },
  {
    id: "seed-2",
    title: "Groceries",
    amount: 5800,
    category: "Food",
    note: "Weekly grocery run",
    date: "2026-06-03"
  },
  {
    id: "seed-3",
    title: "Metro passes",
    amount: 2200,
    category: "Transport",
    note: "Commuting for the month",
    date: "2026-06-05"
  },
  {
    id: "seed-4",
    title: "Emergency savings",
    amount: 10000,
    category: "Savings",
    note: "Auto transfer",
    date: "2026-06-06"
  }
];

export function formatINR(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
}

export function getMonthKey(date: string) {
  return date.slice(0, 7);
}

export function getMonthLabel(monthKey: string) {
  const [year, month] = monthKey.split("-");
  const date = new Date(Number(year), Number(month) - 1, 1);

  return new Intl.DateTimeFormat("en-IN", {
    month: "long",
    year: "numeric"
  }).format(date);
}
