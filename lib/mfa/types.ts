export type InlineText = { text: string; emphasized?: boolean; highlight?: boolean };

export type ParagraphBlock = {
  type: "paragraph";
  content: (string | InlineText)[];
  className?: string;
};

export type HeadingBlock = { type: "heading"; content: string; level?: 3 };
export type PullQuoteBlock = { type: "pullquote"; quote: string; cite: string };
export type CardBlock = { type: "card"; title: string; paragraphs: string[] };
export type GrammarBlock = {
  type: "grammar";
  title: string;
  intro: string[];
  rule: string;
  examples: { label: string; text: string }[];
  outro: string[];
  exercise: string;
};
export type ReadingListBlock = {
  type: "readingList";
  items: { number: string; title: string; href: string; author: string; note: string; badge: "Purchase" | "Free Online" | "Free / Purchase" | "Purchase / Library" }[];
};
export type ExerciseBlock = { type: "exercise"; paragraphs: string[]; target: string };
export type AiBlock = { type: "ai"; tool: string; intro: string; prompt: string; questions: string[]; note: string };
export type TipBlock = { type: "tip"; icon: string; name: string; paragraphs: string[] };
export type JournalBlock = { type: "journal"; title: string; question: string };
export type GenreGridBlock = { type: "genreGrid"; items: { badge: string; variant: "lf" | "sp" | "cnf"; text: string }[] };
export type DividerBlock = { type: "divider" };

export type WeekBlock =
  | ParagraphBlock
  | HeadingBlock
  | PullQuoteBlock
  | CardBlock
  | GrammarBlock
  | ReadingListBlock
  | ExerciseBlock
  | AiBlock
  | TipBlock
  | JournalBlock
  | GenreGridBlock
  | DividerBlock;

export type WeekSection = { id: string; label: string; title: string; blocks: WeekBlock[] };

export type WeekData = {
  weekNumber: number;
  totalWeeks: number;
  semesterLabel: string;
  phaseLabel: string;
  title: string;
  emphasizedWord: string;
  deck: string;
  meta: { label: string; value: string }[];
  sections: WeekSection[];
};
