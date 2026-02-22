"use client";

import { ChevronDown } from "lucide-react";

type AccordionSectionProps = {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  iconClassName?: string;
  open: boolean;
  onToggle: (id: string) => void;
  children: React.ReactNode;
};

export default function AccordionSection({ id, title, subtitle, icon, iconClassName, open, onToggle, children }: AccordionSectionProps) {
  return (
    <section id={id} className="border-t border-border scroll-mt-24">
      <h2>
        <button type="button" aria-expanded={open} aria-controls={`${id}-body`} onClick={() => onToggle(id)} className="group flex min-h-11 w-full items-center justify-between gap-4 py-6 text-left">
          <span className="flex items-center gap-3">
            <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${iconClassName}`}>{icon}</span>
            <span>
              <span className="font-module-heading block text-2xl font-semibold transition-colors group-hover:text-accent">{title}</span>
              <span className="font-module-ui text-xs text-muted">{subtitle}</span>
            </span>
          </span>
          <ChevronDown className={`h-5 w-5 text-muted transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </h2>
      <div id={`${id}-body`} className={open ? "pb-8" : "hidden"}>{children}</div>
    </section>
  );
}
