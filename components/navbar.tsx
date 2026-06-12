import Link from "next/link";
import { BarChart3, PlusCircle } from "lucide-react";
import { Container } from "@/components/container";
import { navLinks } from "@/lib/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/75 backdrop-blur-xl dark:border-white/10 dark:bg-[#07120f]/75">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="group inline-flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-900 text-white shadow-glow transition group-hover:-translate-y-0.5">
              <BarChart3 className="h-5 w-5" />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-slate-950 dark:text-white">Smart Finance AI</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">Expense tracker</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-600 transition hover:text-brand-900 dark:text-slate-300 dark:hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href="#tracker" className="primary-button">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Expense
          </Link>
        </div>
      </Container>
    </header>
  );
}
