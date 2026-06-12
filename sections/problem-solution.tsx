import { ArrowRight, TriangleAlert } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { painPoints } from "@/lib/site";

export function ProblemSolutionSection() {
  return (
    <section id="solutions" className="section-gap">
      <Container>
        <SectionHeading
          eyebrow="The problem"
          title="Money anxiety grows when your financial life is scattered across apps, notes, and spreadsheets."
          description="Most people do not have a spending problem first. They have a visibility problem. Without a clear system, it is almost impossible to make confident decisions."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="card card-inner">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-300">
                <TriangleAlert className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Pain points</p>
                <p className="text-lg font-semibold text-slate-950 dark:text-white">Why money feels harder than it should</p>
              </div>
            </div>
            <ul className="mt-6 space-y-4">
              {painPoints.map((point) => (
                <li key={point} className="flex gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card card-inner relative overflow-hidden">
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-brand-500/10 blur-3xl" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-900 dark:text-brand-100">AI-powered solution</p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
              One system that categorizes, predicts, and guides your next best money move.
            </h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Automatic expense categorization",
                "Budget recommendations",
                "Savings goal tracking",
                "AI spending analysis",
                "Personalized financial suggestions",
                "Real-time financial awareness"
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200/80 bg-white p-4 text-sm font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[24px] border border-brand-500/15 bg-gradient-to-br from-brand-900 to-brand-700 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-brand-100/80">Workflow</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {["Connect", "Analyze", "Act"].map((step, index) => (
                  <div key={step} className="rounded-2xl bg-white/10 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-100/70">0{index + 1}</p>
                    <p className="mt-2 text-lg font-semibold">{step}</p>
                    <p className="mt-2 text-sm leading-6 text-brand-100/80">
                      {index === 0 && "Sync your transactions and budgeting sources in minutes."}
                      {index === 1 && "Let AI identify patterns, leaks, and savings opportunities."}
                      {index === 2 && "Follow clear recommendations and watch confidence grow."}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
