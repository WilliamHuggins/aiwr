"use client";

import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

type Article = {
  title: string;
  url: string;
  date: string;
  author: string;
  summary: string;
  fullAbstract: string;
  keywords: string[];
  sourceOverride?: string;
};

type ArticleGroup = {
  id: string;
  label: string;
  articles: Article[];
};

type SortOption = "newest" | "oldest" | "title";

type ArticleRecord = {
  groupId: string;
  groupLabel: string;
  article: Article;
};

const ARTICLE_GROUPS: ArticleGroup[] = [
  {
    id: "oct-2025",
    label: "October 2025",
    articles: [
      {
        title: "Writing with AI turns chaos into clarity",
        url: "https://www.asbmb.org/asbmb-today/opinions/100225/writing-with-ai-turns-chaos-into-clarity",
        date: "Oct 02, 2025",
        author: "Austin Shull",
        summary:
          "An associate professor explains how treating generative AI as a creative whiteboard can improve clarity and coherence without replacing human judgment.",
        fullAbstract:
          "The author, an associate professor who teaches scientific writing, argues that generative A.I. can improve clarity when used as a “creative whiteboard” rather than a shortcut. Framing the core challenge of science writing as shaping nonlinear discovery into clear narrative, he describes using A.I. to test structures, surface options and refine explanations while retaining human judgment over content and voice. An example from a grant draft on cellular stress responses illustrates how conversational prompting helped reveal connections and themes in existing literature, aiding coherence without replacing expertise. Citing Pat Conroy on the rigor of writing, William Zinsser on rewriting, and Melvin Kranzberg’s dictum about technology’s non-neutrality, he contends that the goal is to train scientists to use A.I. ethically and effectively to amplify curiosity and thinking, not to avoid them.",
        keywords: [
          "generative ai",
          "science communication",
          "writing process",
          "education",
          "research proposals",
        ],
        sourceOverride: "ASBMB Today",
      },
    ],
  },
  {
    id: "sep-2025",
    label: "September 2025",
    articles: [
      {
        title: "New fiction course allows writers to incorporate and “resist” AI influence",
        url: "https://ricethresher.org/article/new-fiction-course-allows-writers-to-incorporate-and-resist-ai-influence-20250910",
        date: "Sep 09, 2025",
        author: "Abigail Chiu",
        summary:
          "Rice University’s ENGL 306: AI Fictions course encourages students to experiment with and critique generative AI while tackling ambitious projects.",
        fullAbstract:
          "Rice University is offering “ENGL 306: AI Fictions,” a course taught by associate teaching professor Ian Schimmel that invites writers to both incorporate and resist generative A.I. in their creative process. Schimmel emphasizes critical engagement over speed, positioning classroom use as a way to see the technology’s limits through hands-on dialogue and experiments. The syllabus spans critiques of A.I. and an A.I.-generated poetry collection, while discussions address ethics, including training on copyrighted materials, environmental costs and recent legal actions. With A.I.’s help, students will attempt larger projects, such as outlining books and drafting opening chapters for NaNoWriMo, which closed in spring 2025 after controversy over statements about A.I. in writing. The course evolves as students write, acknowledging fears and uncertainties while encouraging attention, reflection and informed practice.",
        keywords: [
          "creative writing",
          "generative ai",
          "course design",
          "ethics",
          "nanowrimo",
        ],
        sourceOverride: "Rice Thresher",
      },
    ],
  },
  {
    id: "jul-2025",
    label: "July 2025",
    articles: [
      {
        title: "I Teach Creative Writing. This Is What A.I. Is Doing to Students.",
        url: "https://www.nytimes.com/2025/07/18/opinion/ai-chatgpt-school.html",
        date: "Jul 18, 2025",
        author: "Meghan O’Rourke",
        summary:
          "A creative writing professor reflects on how AI tools are reshaping academic work, student engagement, and the experience of teaching writing.",
        fullAbstract:
          "A creative writing professor recounts experimenting with chatbots and finding them inconsistent for literary tasks but highly effective for administrative work and everyday planning, even easing cognitive load from chronic illness and parenting. The systems’ flattering tone and capacity to mirror her voice proved disorienting, raising questions about authorship and agency. She notes rising student use for brainstorming, summarizing and drafting, amid universities’ promotional messaging and ethical concerns over training data and environmental costs. Citing a study linking L.L.M. reliance to “cognitive debt,” she argues that outsourcing composition can weaken engagement, memory and ownership. She proposes shifting assessment toward in-person writing, close reading, clear usage policies and deemphasizing take-home essays and letter grades. Ultimately, she warns that pervasive A.I. may erode attention and the satisfactions of genuine creative effort even as the tools rapidly improve.",
        keywords: [
          "generative ai",
          "higher education",
          "student writing",
          "academic integrity",
          "cognitive effects",
        ],
        sourceOverride: "The New York Times",
      },
    ],
  },
];

function normalizeQuery(value: string) {
  return value.trim().toLowerCase();
}

function parseDate(value: string) {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? 0 : parsed.getTime();
}

function articleMatches(article: Article, query: string) {
  if (!query) {
    return true;
  }

  const haystack = [
    article.title,
    article.summary,
    article.fullAbstract,
    article.author,
    ...article.keywords,
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
}

function getSourceName(article: Article) {
  if (article.sourceOverride) {
    return article.sourceOverride;
  }

  try {
    const hostname = new URL(article.url).hostname.replace(/^www\./, "");
    return hostname.split(".")[0]?.replace(/^./, (char) => char.toUpperCase()) ?? "Source";
  } catch (_error) {
    return "Source";
  }
}

export default function AIWritingNewsPage() {
  const [query, setQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("newest");

  const allArticles = useMemo<ArticleRecord[]>(
    () =>
      ARTICLE_GROUPS.flatMap((group) =>
        group.articles.map((article) => ({
          groupId: group.id,
          groupLabel: group.label,
          article,
        }))
      ),
    []
  );

  const allTags = useMemo(
    () => Array.from(new Set(allArticles.flatMap((entry) => entry.article.keywords))).sort(),
    [allArticles]
  );

  const filteredGroups = useMemo(() => {
    const normalized = normalizeQuery(query);

    const filtered = allArticles.filter(({ article }) => {
      const matchesQuery = articleMatches(article, normalized);
      const matchesTag =
        selectedTags.length === 0 || selectedTags.some((tag) => article.keywords.includes(tag));

      return matchesQuery && matchesTag;
    });

    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === "title") {
        return a.article.title.localeCompare(b.article.title);
      }

      const dateDifference = parseDate(b.article.date) - parseDate(a.article.date);
      return sortBy === "newest" ? dateDifference : -dateDifference;
    });

    return sorted.reduce<ArticleGroup[]>((acc, entry) => {
      const existing = acc.find((group) => group.id === entry.groupId);

      if (existing) {
        existing.articles.push(entry.article);
      } else {
        acc.push({ id: entry.groupId, label: entry.groupLabel, articles: [entry.article] });
      }

      return acc;
    }, []);
  }, [allArticles, query, selectedTags, sortBy]);

  const hasResults = filteredGroups.length > 0;

  const toggleTag = (tag: string) => {
    setSelectedTags((current) =>
      current.includes(tag) ? current.filter((item) => item !== tag) : [...current, tag]
    );
  };

  useEffect(() => {
    if (activeArticle) {
      const originalStyle = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [activeArticle]);

  return (
    <div className="bg-gradient-to-b from-canvas to-canvas/60 pb-16 dark:from-canvasDark dark:to-canvasDark/80">
      <div className="mx-auto w-full max-w-6xl px-4 pt-12 md:px-6 md:pt-16">
        <section className="rounded-3xl border border-ink/10 bg-canvas/80 p-8 shadow-sm dark:border-canvas/15 dark:bg-canvasDark/70">
          <span className="inline-flex w-fit items-center rounded-full bg-glow/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-glow">
            Editorial Feed
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink dark:text-text sm:text-4xl md:text-5xl">
            AI + Writing in the News
          </h1>
          <p className="mt-3 max-w-3xl text-base text-ink/75 dark:text-text/80 sm:text-lg">
            Search curated coverage and filter by subject tags to quickly scan how AI is shaping writing, publishing, and creative practice.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-[2fr_1fr]">
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-ink/60 dark:text-text/70">
                Search
              </span>
              <input
                id="news-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search titles, authors, summaries, and tags"
                className="w-full rounded-xl border border-ink/15 bg-white/90 px-4 py-3 text-sm text-ink placeholder:text-ink/50 focus:border-glow focus:outline-none focus:ring-2 focus:ring-glow dark:border-canvas/20 dark:bg-canvasDark/80 dark:text-text dark:placeholder:text-text/50"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-ink/60 dark:text-text/70">
                Sort
              </span>
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value as SortOption)}
                className="w-full rounded-xl border border-ink/15 bg-white/90 px-4 py-3 text-sm text-ink focus:border-glow focus:outline-none focus:ring-2 focus:ring-glow dark:border-canvas/20 dark:bg-canvasDark/80 dark:text-text"
              >
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
                <option value="title">Title (A-Z)</option>
              </select>
            </label>
          </div>

          <div className="mt-6">
            <div className="mb-3 flex items-center justify-between gap-4">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60 dark:text-text/70">
                Filter by subject tags
              </h2>
              {selectedTags.length > 0 ? (
                <button
                  type="button"
                  onClick={() => setSelectedTags([])}
                  className="text-xs font-semibold text-glow transition-colors hover:text-mint"
                >
                  Clear filters
                </button>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => {
                const isActive = selectedTags.includes(tag);

                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    className={cn(
                      "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                      isActive
                        ? "border-glow bg-glow/20 text-glow"
                        : "border-ink/15 bg-white/80 text-ink/75 hover:border-glow/50 hover:text-glow dark:border-canvas/20 dark:bg-canvasDark/70 dark:text-text/75"
                    )}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mt-10">
          {!hasResults ? (
            <div className="rounded-2xl border border-ink/10 bg-canvas p-8 text-center dark:border-canvas/15 dark:bg-canvasDark/70">
              <h2 className="text-2xl font-semibold text-ink dark:text-text">No articles found</h2>
              <p className="mt-2 text-base text-ink/65 dark:text-text/70">
                Try a different search term or remove one of the active subject filters.
              </p>
            </div>
          ) : null}

          {filteredGroups.map((group) => (
            <section key={group.id} id={group.id} className="mt-12 first:mt-0">
              <div className="border-b border-ink/10 pb-4 dark:border-canvas/15">
                <h2 className="text-2xl font-semibold text-ink dark:text-text md:text-3xl">{group.label}</h2>
              </div>

              <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {group.articles.map((article) => (
                  <article
                    key={article.url}
                    className="flex h-full flex-col rounded-2xl border border-ink/10 bg-canvas p-6 shadow-sm transition hover:-translate-y-1 hover:border-glow/50 hover:shadow-lg dark:border-canvas/15 dark:bg-canvasDark"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wide text-coral">{article.date}</span>
                    <h3 className="mt-3 text-xl font-semibold text-ink dark:text-text">
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-glow"
                      >
                        {article.title}
                      </a>
                    </h3>
                    <p className="mt-2 text-sm font-medium text-ink/60 dark:text-text/70">By {article.author}</p>
                    <p className="mt-4 text-sm leading-relaxed text-ink/70 dark:text-text/80">{article.summary}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {article.keywords.map((keyword) => (
                        <button
                          key={keyword}
                          type="button"
                          onClick={() => toggleTag(keyword)}
                          className={cn(
                            "rounded-full border px-2.5 py-1 text-xs font-medium transition-colors",
                            selectedTags.includes(keyword)
                              ? "border-glow bg-glow/20 text-glow"
                              : "border-ink/15 bg-white/80 text-ink/70 hover:border-glow/50 hover:text-glow dark:border-canvas/20 dark:bg-canvasDark/80 dark:text-text/70"
                          )}
                        >
                          {keyword}
                        </button>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setActiveArticle(article)}
                        className="text-sm font-semibold text-glow transition-colors hover:text-mint focus:outline-none focus:ring-2 focus:ring-glow"
                      >
                        Read full abstract →
                      </button>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-ink/70 underline-offset-4 transition-colors hover:text-glow dark:text-text/70"
                      >
                        Visit source
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </section>
      </div>

      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-ink/80 backdrop-blur-sm dark:bg-canvasDark/80"
            onClick={() => setActiveArticle(null)}
          />
          <div
            role="dialog"
            aria-modal="true"
            className="relative flex w-full max-w-3xl flex-col overflow-hidden rounded-xl border border-ink/10 bg-canvas shadow-2xl dark:border-canvas/10 dark:bg-ink/90"
          >
            <div className="flex items-start justify-between border-b border-ink/10 bg-ink/5 p-6 dark:border-canvas/10 dark:bg-canvas/10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-coral">{activeArticle.date}</p>
                <h2 className="mt-2 text-2xl font-bold text-ink dark:text-text">{activeArticle.title}</h2>
                <p className="mt-1 text-sm text-ink/60 dark:text-text/70">By {activeArticle.author}</p>
              </div>
              <button
                type="button"
                className="ml-4 rounded-md p-2 text-ink/60 transition hover:text-coral focus:outline-none focus:ring-2 focus:ring-glow dark:text-text/60"
                onClick={() => setActiveArticle(null)}
              >
                <span className="sr-only">Close modal</span>×
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto px-6 py-6 text-sm leading-relaxed text-ink/80 dark:text-text/80">
              {activeArticle.fullAbstract}
            </div>
            <div className="flex flex-wrap items-center gap-3 border-t border-ink/10 bg-ink/5 px-6 py-4 text-sm font-medium dark:border-canvas/10 dark:bg-canvas/10">
              <span className="text-ink/70 dark:text-text/70">Source: {getSourceName(activeArticle)}</span>
              <a
                href={activeArticle.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-glow transition-colors hover:text-mint"
              >
                Read at publisher →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
