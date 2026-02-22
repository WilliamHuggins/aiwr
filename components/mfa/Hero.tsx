export default function Hero({ label, title, emphasis, deck, meta }: { label: string; title: string; emphasis: string; deck: string; meta: { label: string; value: string }[] }) {
  const [before] = title.split(`& ${emphasis}`);
  return (
    <div className="mx-auto max-w-[860px] border-b border-border px-5 pb-14 pt-16 md:px-8 md:pt-20">
      <span className="block font-mfa-mono text-[11px] uppercase tracking-[0.22em] text-[rgb(var(--mfa-rust))] animate-[fadeUp_.6s_.1s_forwards] opacity-0 motion-reduce:opacity-100">{label}</span>
      <h1 className="mt-5 font-mfa-display text-[clamp(42px,6vw,72px)] font-light leading-[1.08] tracking-tight animate-[fadeUp_.7s_.2s_forwards] opacity-0 motion-reduce:opacity-100">{before}& <em className="text-[rgb(var(--mfa-rust))]">{emphasis}</em></h1>
      <p className="mt-7 max-w-[600px] text-[21px] leading-relaxed text-muted animate-[fadeUp_.7s_.35s_forwards] opacity-0 motion-reduce:opacity-100">{deck}</p>
      <div className="mt-9 flex flex-wrap gap-7 animate-[fadeUp_.7s_.45s_forwards] opacity-0 motion-reduce:opacity-100">{meta.map((item) => <div key={item.label} className="border-l-2 border-[rgb(var(--mfa-rust))] pl-2.5 font-mfa-mono text-[10px] uppercase tracking-[0.14em] text-muted">{item.label}<strong className="mt-1 block text-[11px] text-text">{item.value}</strong></div>)}</div>
    </div>
  );
}
