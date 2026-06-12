"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { ExpenseTrackerSection } from "@/components/expense-tracker";

type ExpenseTrackerPopupProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ExpenseTrackerPopup({ open, onOpenChange }: ExpenseTrackerPopupProps) {

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onOpenChange]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-md">
      <div className="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[32px] border border-white/10 bg-[#07120f] shadow-2xl">
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-brand-500/30 hover:text-white"
          aria-label="Close expense popup"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="p-2 sm:p-4">
          <ExpenseTrackerSection />
        </div>
      </div>
    </div>
  );
}
