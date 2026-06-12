export type ExpenseCategory =
  | "Housing"
  | "Food"
  | "Transport"
  | "Utilities"
  | "Shopping"
  | "Health"
  | "Entertainment"
  | "Savings"
  | "Other";

export type Expense = {
  id: string;
  title: string;
  amount: number;
  category: ExpenseCategory;
  note?: string;
  date: string;
};
