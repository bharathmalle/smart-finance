import { BellRing, LineChart, ReceiptText, Sparkles, Target, Wallet } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { featureCards } from "@/lib/site";

const icons = {
  "receipt-text": ReceiptText,
  wallet: Wallet,
  target: Target,
  "line-chart": LineChart,
  sparkles: Sparkles,
  "bell-ring": BellRing
} as const;

export function FeaturesSection() {
  return (
    <section id="features" className="section-gap">
      <Container>
        <SectionHeading
          eyebrow="Core features"
          title="Everything you need to run your money with clarity, precision, and confidence."
          description="Each feature is designed to reduce friction, increase awareness, and turn financial intent into a repeatable system."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featureCards.map((card, index) => {
            const Icon = icons[card.icon as keyof typeof icons];
            return (
              <article key={card.title} className="card card-inner group transition duration-300 hover:-translate-y-1 hover:shadow-glow">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-900 transition group-hover:scale-105 dark:text-brand-100">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium text-slate-400">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">{card.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">{card.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
