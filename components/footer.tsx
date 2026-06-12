import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white dark:border-white/10 dark:bg-[#07120f]">
      <Container className="py-8">
        <div className="flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>{siteConfig.name}</p>
          <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-brand-900 dark:hover:text-white">
            {siteConfig.contactEmail}
          </a>
        </div>
      </Container>
    </footer>
  );
}
