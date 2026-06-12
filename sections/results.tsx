import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

const results = [
  {
    title: "Increased savings",
    before: "Saved whatever was left.",
    after: "Set aside money automatically every month."
  },
  {
    title: "Reduced unnecessary spending",
    before: "Leaking money into subscriptions and delivery.",
    after: "Identified recurring waste and corrected behavior."
  },
  {
    title: "Better budgeting accuracy",
    before: "Budgets were guesses with no follow-through.",
    after: "Budgets now reflect actual trends and habits."
  }
];

export function ResultsSection() {
  return (
    <section className="section-gap">
      <Container>
        <SectionHeading
          eyebrow="Results"
          title="See the financial impact of better visibility and smarter guidance."
          description="When the system is clear, decisions get easier. That means more progress, less stress, and stronger long-term outcomes."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {results.map((result) => (
            <div key={result.title} className="card card-inner">
              <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">{result.title}</h3>
              <div className="mt-6 grid gap-3">
                <div className="rounded-2xl border border-rose-200/80 bg-rose-50 p-4 dark:border-rose-500/20 dark:bg-rose-500/10">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-600 dark:text-rose-200">Before</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">{result.before}</p>
                </div>
                <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50 p-4 dark:border-emerald-500/20 dark:bg-emerald-500/10">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-200">After</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">{result.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
