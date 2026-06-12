import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    title: "Connect your finances",
    description: "Import your accounts, transactions, and cash flow sources in a guided setup."
  },
  {
    title: "Track and analyze spending",
    description: "Watch categories, budgets, and trends update in real time as you spend."
  },
  {
    title: "Receive AI recommendations and grow savings",
    description: "Get personalized next steps that help you save more without adding complexity."
  }
];

export function HowItWorksSection() {
  return (
    <section className="section-gap">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="A simple three-step flow that removes friction and builds financial momentum."
          description="Designed to feel guided, not overwhelming."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="card card-inner">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-900 text-white">
                0{index + 1}
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">{step.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
