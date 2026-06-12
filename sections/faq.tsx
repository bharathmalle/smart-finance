import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { faqs } from "@/lib/site";

export function FAQSection() {
  return (
    <section id="faq" className="section-gap">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions answered clearly and without jargon."
          description="Reduce hesitation with simple answers around trust, pricing, AI, privacy, and support."
        />

        <div className="mt-12 grid gap-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="card group overflow-hidden px-6 py-5 open:shadow-glow">
              <summary className="cursor-pointer list-none text-left text-lg font-semibold tracking-tight text-slate-950 marker:hidden dark:text-white">
                {faq.question}
              </summary>
              <p className="mt-4 max-w-4xl text-base leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
