import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { trustMetrics } from "@/lib/site";

const logos = ["Northstar", "Vertex", "Summit", "Keystone", "Ledgerly", "Pinnacle"];

export function SocialProofSection() {
  return (
    <section className="section-gap">
      <Container>
        <SectionHeading
          eyebrow="Social proof"
          title="Trusted by thousands of people who want better control over their finances."
          description="Clear numbers, visible outcomes, and a product built to feel credible from the first interaction."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="card card-inner">
            <div className="grid grid-cols-2 gap-4">
              {trustMetrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-slate-200/80 bg-white p-4 dark:border-white/10 dark:bg-white/5">
                  <p className="text-2xl font-semibold text-slate-950 dark:text-white">{metric.value}</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card card-inner">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Client logos</p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {logos.map((logo) => (
                <div key={logo} className="flex h-20 items-center justify-center rounded-2xl border border-slate-200/80 bg-white text-sm font-semibold text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
