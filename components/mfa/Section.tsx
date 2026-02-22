"use client";

import { useEffect, useRef, useState } from "react";

export default function Section({ id, label, title, children }: { id: string; label: string; title?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && setVisible(true));
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={`pt-16 transition duration-700 ease-out motion-reduce:opacity-100 motion-reduce:translate-y-0 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="font-mfa-mono text-[10px] uppercase tracking-[0.22em] text-[rgb(var(--mfa-rust))]">{label}</div>
      {title ? <h2 className="mt-2 border-b border-border pb-4 font-mfa-display text-4xl leading-tight">{title}</h2> : null}
      <div className="mfa-essay-body mt-7 max-w-[65ch] space-y-5 text-[clamp(18px,1.35vw,20px)] leading-[1.72]">{children}</div>
    </section>
  );
}
