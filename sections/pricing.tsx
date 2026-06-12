import { Check } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { pricingPlans } from "@/lib/site";

export function PricingSection() {
  return (
    <section id="pricing" className="section-gap">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Start free, upgrade when you want more intelligence."
          description="Simple plans with a low-friction path to value. No complexity, no clutter."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div key={plan.name} className={`card card-inner relative ${plan.featured ? "ring-2 ring-brand-500 shadow-glow" : ""}`}>
              {plan.featured ? (
                <span className="absolute right-6 top-6 rounded-full bg-brand-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  Most popular
                </span>
              ) : null}
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{plan.name}</p>
              <div className="mt-4 flex items-end gap-2">
                <p className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white">{plan.price}</p>
              </div>
              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{plan.description}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-500/10 text-brand-900 dark:text-brand-100">
                      <Check className="h-3 w-3" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="#final-cta" className={`mt-8 inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-semibold ${plan.featured ? "bg-brand-900 text-white" : "border border-slate-300 bg-white text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white"}`}>
                Choose {plan.name}
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
