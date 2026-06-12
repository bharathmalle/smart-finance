import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white dark:border-white/10 dark:bg-[#07120f]">
      <Container className="py-8">
        <div className="flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>{siteConfig.name}</p>
          <div className="flex flex-col gap-2 sm:items-end">
            <a href="https://www.linkedin.com/in/bharath-malle-a10260241/" target="_blank" rel="noreferrer" className="hover:text-brand-900 dark:hover:text-white">
              LinkedIn
            </a>
            <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-brand-900 dark:hover:text-white">
              {siteConfig.contactEmail}
            </a>
          </div>
        </div>
        <p className="mt-6 border-t border-slate-200/80 pt-6 text-xs text-slate-400 dark:border-white/10 dark:text-slate-500">
          Copyright (c) 2026 Bharath Malle. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
