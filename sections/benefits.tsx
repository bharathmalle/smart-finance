import { BadgeIndianRupee, ShieldCheck, Sparkles, TrendingUp, Wallet2 } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

const benefits = [
  {
    title: "Save more money",
    description: "Keep more of what you earn with practical recommendations that are easy to follow.",
    icon: BadgeIndianRupee
  },
  {
    title: "Spend smarter",
    description: "Understand the impact of each spending decision before it snowballs.",
    icon: Sparkles
  },
  {
    title: "Reduce financial stress",
    description: "Replace uncertainty with clarity and a system you can trust daily.",
    icon: ShieldCheck
  },
  {
    title: "Reach goals faster",
    description: "Turn abstract ambitions into measurable progress with momentum.",
    icon: TrendingUp
  },
  {
    title: "Better awareness",
    description: "See where money goes and how to improve without adding more work.",
    icon: Wallet2
  }
];

export function BenefitsSection() {
  return (
    <section className="section-gap">
      <Container>
        <SectionHeading
          eyebrow="Benefits"
          title="Outcomes first. Features second."
          description="The best finance products do not just show data. They create better behavior, confidence, and consistency."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="card card-inner">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-900 dark:text-brand-100">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">{benefit.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
