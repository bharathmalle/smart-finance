import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/lib/site";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-gap">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="People feel the difference when their money system finally starts working for them."
          description="Built for professionals, students, families, and freelancers who want confidence instead of guesswork."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name} className="card card-inner">
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">"{testimonial.quote}"</p>
              <footer className="mt-6">
                <p className="font-semibold text-slate-950 dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
