import Link from "next/link";

type GrammarData = {
  title: string;
  intro: string[];
  rule: string;
  examples: { label: string; text: string }[];
  outro: string[];
  exercise: string;
};

type ReadingItem = {
  number: string;
  title: string;
  href: string;
  author: string;
  note: string;
};

type AiWorkshopData = {
  tool: string;
  intro: string;
  prompt: string;
  questions: string[];
  note: string;
};

export function PullQuote({ quote, cite }: { quote: string; cite: string }) {
  return (
    <figure className="my-10 border-l-4 border-[rgb(var(--mfa-rust))] pl-7">
      <blockquote className="font-mfa-display text-4xl font-light italic leading-[1.4]">{quote}</blockquote>
      <figcaption className="mt-3 font-mfa-mono text-[10px] uppercase tracking-[0.16em] text-muted">{cite}</figcaption>
    </figure>
  );
}

export function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-8 rounded-sm bg-surface-2 px-6 py-7 md:px-9">
      <div className="mb-4 font-mfa-mono text-[10px] uppercase tracking-[0.2em] text-[rgb(var(--mfa-rust))]">{title}</div>
      <div className="space-y-4 text-lg">{children}</div>
    </div>
  );
}

export function GrammarBox({ data }: { data: GrammarData }) {
  return (
    <div className="my-9 rounded-sm bg-text px-6 py-7 text-bg md:px-10">
      <div className="mb-4 font-mfa-mono text-[10px] uppercase tracking-[0.2em] text-[rgb(var(--mfa-gold))]">{data.title}</div>
      {data.intro.map((p) => (
        <p key={p} className="mb-4 text-[rgb(232,224,212)]">
          {p}
        </p>
      ))}
      <p className="my-5 border-l-4 border-[rgb(var(--mfa-gold))] pl-5 font-mfa-display text-3xl italic">{data.rule}</p>
      {data.examples.map((ex) => (
        <div key={ex.label} className="my-3 rounded-sm bg-white/5 p-4 text-lg">
          <span className="mb-1 block font-mfa-mono text-[9px] uppercase tracking-[0.2em] text-[rgb(var(--mfa-gold))]">{ex.label}</span>
          {ex.text}
        </div>
      ))}
      {data.outro.map((p) => (
        <p key={p} className="mt-4 text-[rgb(232,224,212)]">
          {p}
        </p>
      ))}
      <p className="mt-5 text-base italic text-[#c9b89a]">{data.exercise}</p>
    </div>
  );
}

export function ReadingList({ items }: { items: ReadingItem[] }) {
  return (
    <div className="my-6">
      {items.map((item) => (
        <div key={item.number} className="flex items-start gap-5 border-b border-border py-5 last:border-b-0">
          <span className="mt-1 w-6 shrink-0 font-mfa-mono text-[10px] text-[rgb(var(--mfa-rust))]">{item.number}</span>
          <div className="flex-1">
            <h3 className="font-mfa-display text-3xl italic">
              <a href={item.href} target="_blank" rel="noopener" className="text-inherit underline decoration-border underline-offset-4">
                {item.title}
              </a>
            </h3>
            <p className="mb-2 font-mfa-mono text-[10px] uppercase tracking-[0.12em] text-muted">{item.author}</p>
            <p className="text-base text-muted">{item.note}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ExerciseBox({ paragraphs, target }: { paragraphs: string[]; target: string }) {
  return (
    <div className="relative my-9 rounded-sm border border-[rgb(var(--mfa-rust))] px-6 py-8 md:px-10">
      <span className="absolute left-7 top-0 -translate-y-1/2 bg-[rgb(var(--mfa-rust))] px-2.5 py-1 font-mfa-mono text-[9px] uppercase tracking-[0.2em] text-bg">Exercise</span>
      {paragraphs.map((p) => (
        <p key={p} className="mb-3">
          {p}
        </p>
      ))}
      <div className="mt-5 border-t border-border pt-4 font-mfa-mono text-[10px] uppercase tracking-[0.14em] text-[rgb(var(--mfa-rust))]">{target}</div>
    </div>
  );
}

export function AiWorkshopBox({ data }: { data: AiWorkshopData }) {
  return (
    <div className="my-9 rounded-sm border border-[#D4B896] bg-[#F2EBE0] px-6 py-8 text-[#2f261b] md:px-10">
      <div className="mb-4 font-mfa-mono text-[10px] uppercase tracking-[0.2em] text-[rgb(var(--mfa-rust))]">{data.tool}</div>
      <p>{data.intro}</p>
      <div className="my-5 border-l-4 border-[rgb(var(--mfa-gold))] bg-white px-5 py-4 italic text-[#3a2e22]">{data.prompt}</div>
      {data.questions.map((q, i) => (
        <p key={q} className="mt-2">
          {i + 1}. {q}
        </p>
      ))}
      <p className="mt-5 text-base italic text-[#7A6A55]">{data.note}</p>
    </div>
  );
}

export function TipBox({ icon, name, paragraphs }: { icon: string; name: string; paragraphs: string[] }) {
  return (
    <div className="my-9 flex gap-6 rounded-sm bg-[#F0E8D8] px-6 py-7 text-[#2f261b] md:px-8">
      <div className="text-3xl text-[#9A8F7A]">{icon}</div>
      <div>
        <div className="mb-2 font-mfa-mono text-[10px] uppercase tracking-[0.18em] text-[rgb(var(--mfa-rust))]">{name}</div>
        {paragraphs.map((p) => (
          <p key={p} className="mt-3">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}

export function JournalBox({ title, question }: { title: string; question: string }) {
  return (
    <div className="my-9 border-y-4 border-double border-text py-8 text-center">
      <div className="mb-5 font-mfa-mono text-[10px] uppercase tracking-[0.2em] text-[rgb(var(--mfa-rust))]">{title}</div>
      <p className="mx-auto max-w-[540px] font-mfa-display text-4xl font-light italic leading-[1.45]">{question}</p>
    </div>
  );
}

export function GenreGrid({ items }: { items: { badge: string; variant: "lf" | "sp" | "cnf"; text: string }[] }) {
  return (
    <div className="my-7 grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.badge}
          className={`rounded-sm border-t-4 bg-surface-2 p-6 ${item.variant === "lf" ? "border-[rgb(var(--mfa-rust))]" : item.variant === "sp" ? "border-[rgb(var(--mfa-gold))]" : "border-[#4A7A6A]"}`}
        >
          <div className="mb-2 font-mfa-mono text-[9px] uppercase tracking-[0.2em] text-muted">{item.badge}</div>
          <p className="text-base leading-relaxed">{item.text}</p>
        </article>
      ))}
    </div>
  );
}

export function DividerOrnament() {
  return (
    <>
      <hr className="mt-16 border-border" />
      <div className="my-12 text-center text-xl tracking-[0.5em] text-border">· · ·</div>
    </>
  );
}

export function WeekFooterNav({ center, nextLabel }: { center: string; nextLabel: string }) {
  return (
    <footer className="mx-auto flex max-w-[860px] flex-wrap items-center justify-between gap-4 border-t border-text/50 px-5 py-10 md:px-8">
      <Link href="/diy-mfa" className="font-mfa-mono text-[10px] uppercase tracking-[0.14em] text-muted no-underline hover:text-[rgb(var(--mfa-rust))]">
        ← Program Home
      </Link>
      <div className="text-center font-mfa-display text-base italic text-muted">{center}</div>
      <Link href="/diy-mfa/year-one/week-2" className="font-mfa-mono text-[10px] uppercase tracking-[0.14em] text-muted no-underline hover:text-[rgb(var(--mfa-rust))]">
        {nextLabel} →
      </Link>
    </footer>
  );
}
