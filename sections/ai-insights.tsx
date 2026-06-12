import { AlertTriangle, BrainCircuit, ChartSpline, ShieldAlert, Sparkles } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

const insights = [
  {
    title: "Spending predictions",
    description: "Estimate end-of-month totals before overspending becomes a problem.",
    icon: ChartSpline
  },
  {
    title: "Budget optimization",
    description: "Shift unused allowance into categories that matter more to your goals.",
    icon: Sparkles
  },
  {
    title: "Savings forecasting",
    description: "See how today's decisions affect your future savings trajectory.",
    icon: BrainCircuit
  },
  {
    title: "Personalized recommendations",
    description: "Get advice based on your actual habits, not generic finance theory.",
    icon: ShieldAlert
  },
  {
    title: "Risk detection",
    description: "Catch unusual patterns and financial leaks early.",
    icon: AlertTriangle
  }
];

export function AIInsightsSection() {
  return (
    <section className="section-gap">
      <Container>
        <div className="card relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(97,135,100,0.2),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(26,49,44,0.18),transparent_30%)]" />
          <div className="relative card-inner">
            <SectionHeading
              eyebrow="AI insights"
              title="A futuristic AI layer that turns raw transaction data into action."
              description="The system continuously analyzes your patterns and surfaces the next best move with precision."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
              <div className="rounded-[28px] border border-white/40 bg-white/80 p-6 dark:border-white/10 dark:bg-white/5">
                <div className="grid gap-4 sm:grid-cols-2">
                  {insights.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="rounded-2xl border border-slate-200/80 bg-white p-4 dark:border-white/10 dark:bg-white/5">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-900 dark:text-brand-100">
                          <Icon className="h-4 w-4" />
                        </span>
                        <h3 className="mt-4 text-lg font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-[28px] bg-brand-900 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.2em] text-brand-100/80">AI report</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">This month's recommendation</h3>
                <div className="mt-6 space-y-4">
                  {[
                    "Cap discretionary spending at INR 12,000 for the next 14 days.",
                    "Move INR 4,500 from dining to savings to hit your target faster.",
                    "Set a bill reminder for the upcoming credit card cycle.",
                    "Your utility category is trending 11% above your baseline."
                  ].map((line) => (
                    <div key={line} className="rounded-2xl bg-white/10 p-4 text-sm leading-6 text-brand-100/90">
                      {line}
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-100/70">Forecast</p>
                  <p className="mt-2 text-sm leading-6 text-brand-100/90">
                    At your current pace, you could save an extra INR 18,000 over the next 90 days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
