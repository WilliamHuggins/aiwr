import type { WeekData, WeekBlock } from "@/lib/mfa/types";
import Masthead from "@/components/mfa/Masthead";
import Hero from "@/components/mfa/Hero";
import Section from "@/components/mfa/Section";
import { AiWorkshopBox, Card, DividerOrnament, ExerciseBox, GenreGrid, GrammarBox, JournalBox, PullQuote, ReadingList, TipBox, WeekFooterNav } from "@/components/mfa/blocks";

function renderParagraphContent(content: any[]) {
  return content.map((part, i) => {
    if (typeof part === "string") return <span key={i}>{part}</span>;
    if (part.highlight) return <span key={i} className="inline-highlight">{part.text}</span>;
    if (part.emphasized) return <strong key={i}>{part.text}</strong>;
    return <span key={i}>{part.text}</span>;
  });
}

function renderBlock(block: WeekBlock) {
  switch (block.type) {
    case "paragraph": return <p className={block.className}>{renderParagraphContent(block.content)}</p>;
    case "heading": return <h3 className="pt-4 font-mfa-display text-[33px] leading-tight">{block.content}</h3>;
    case "pullquote": return <PullQuote quote={block.quote} cite={block.cite} />;
    case "card": return <Card title={block.title}>{block.paragraphs.map((p) => <p key={p}>{p}</p>)}</Card>;
    case "grammar": return <GrammarBox data={block} />;
    case "readingList": return <ReadingList items={block.items} />;
    case "exercise": return <ExerciseBox paragraphs={block.paragraphs} target={block.target} />;
    case "ai": return <AiWorkshopBox data={block} />;
    case "tip": return <TipBox {...block} />;
    case "journal": return <JournalBox title={block.title} question={block.question} />;
    case "genreGrid": return <GenreGrid items={block.items} />;
    case "divider": return <DividerOrnament />;
    default: return null;
  }
}

type WeekShellProps = {
  week?: WeekData;
  prevHref?: string;
  nextHref?: string;
  nextLabel?: string;
  variant?: "essay" | "module";
  moduleContent?: React.ReactNode;
  yearLabel?: string;
};

export default function WeekShell({ week, prevHref = "/diy-mfa", nextHref = "/diy-mfa/year-one/week-2", nextLabel = "Week 2: Sustainable Practice", variant = "essay", moduleContent, yearLabel = "Year One" }: WeekShellProps) {
  if (variant === "module") {
    return <>{moduleContent}</>;
  }

  if (!week) {
    throw new Error("WeekShell requires week data for variant='essay'.");
  }

  return (
    <div>
      <Masthead weekNumber={week.weekNumber} totalWeeks={week.totalWeeks} subtitle={`MFA ${yearLabel} · ${week.semesterLabel}`} prevHref={prevHref} nextHref={nextHref} />
      <Hero label={`Week ${week.weekNumber} of ${week.totalWeeks} · ${week.semesterLabel} · ${week.phaseLabel}`} title={week.title} emphasis={week.emphasizedWord} deck={week.deck} meta={week.meta} />
      <main className="mx-auto max-w-[860px] px-5 pb-24 md:px-8" aria-label={`Week ${week.weekNumber} content`}>
        {week.sections.map((section) => <Section key={section.id} id={section.id} label={section.label} title={section.title}>{section.blocks.map((b, i) => <div key={i}>{renderBlock(b)}</div>)}</Section>)}
      </main>
      <WeekFooterNav center={`${yearLabel} · Week ${week.weekNumber} of ${week.totalWeeks}
${week.title}`} nextLabel={nextLabel} nextHref={nextHref} />
    </div>
  );
}
