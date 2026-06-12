import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/container";

export function FinalCtaSection() {
  return (
    <section id="final-cta" className="section-gap">
      <Container>
        <div className="relative overflow-hidden rounded-[36px] bg-brand-900 px-6 py-16 text-white sm:px-10 lg:px-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(97,135,100,0.24),transparent_36%)]" />
          <div className="relative mx-auto max-w-4xl text-center">
            <span className="eyebrow border-white/15 bg-white/10 text-white">
              <Sparkles className="h-4 w-4" />
              Limited early access for beta users
            </span>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              Start Building a Smarter Financial Future Today
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-brand-100/85">
              Join early access, set up in minutes, and start making better financial decisions with zero risk and full control.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="#pricing" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-900 transition hover:-translate-y-0.5">
                Start Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-brand-100/90">
                <ShieldCheck className="h-4 w-4" />
                Bank-level encryption and privacy-first architecture
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
