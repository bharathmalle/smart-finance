import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  action?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description, center, action }: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-5 ${center ? "items-center text-center" : ""}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <div className={`flex w-full items-end justify-between gap-6 ${center ? "justify-center" : ""}`}>
        <div className={center ? "max-w-3xl" : "max-w-3xl"}>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">{title}</h2>
          {description ? <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">{description}</p> : null}
        </div>
        {action ? <div className="hidden lg:block">{action}</div> : null}
      </div>
    </div>
  );
}
