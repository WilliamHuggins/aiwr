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
    id: "feb-2026",
    label: "February 2026",
    articles: [
      {
        title:
          "“Novelist” Boasts That Using AI She Can Churn Out a New Book in 45 Minutes, Says Regular Writers Will Never Be Able to Keep Up",
        url: "https://futurism.com/artificial-intelligence/ai-novelist",
        date: "Feb 10, 2026",
        author: "Frank Landymore",
        summary:
          "A profile of romance novelist Coral Hart examines claims of rapid AI-assisted book production and the resulting concerns about marketplace saturation.",
        fullAbstract:
          "The article profiles romance novelist Coral Hart, who says she began using Anthropic’s Claude to rapidly produce and self-publish romance novels on Amazon. Citing a New York Times interview, it reports that Hart claims to have written more than 200 books in a year across 21 pen names, selling about 50,000 copies in total and earning six figures, and that she demonstrated generating a book in roughly 45 minutes during a Zoom interview. It also describes her coaching business, “Plot Prose,” which she says has taught over 1,600 people how to use AI, including techniques for bypassing chatbot guardrails and avoiding repetitive language. The piece notes industry concern about AI “slop” flooding marketplaces and highlights Hart’s use of pseudonyms to avoid stigma.",
        keywords: [
          "romance publishing",
          "generative ai",
          "amazon self-publishing",
          "author coaching",
          "ai-generated content",
        ],
        sourceOverride: "Futurism",
      },
    ],
  },
  {
    id: "jan-2026",
    label: "January 2026",
    articles: [
      {
        title: "Science fiction writers, Comic-Con say goodbye to AI",
        url: "https://techcrunch.com/2026/01/25/science-fiction-writers-comic-con-say-goodbye-to-ai/",
        date: "Jan 25, 2026",
        author: "Anthony Ha",
        summary:
          "SFWA and San Diego Comic-Con tighten rules around generative AI, signaling stronger creative-policy restrictions across science fiction and fan communities.",
        fullAbstract:
          "The article reports that major science-fiction and pop-culture institutions are adopting stricter rules against generative AI. It highlights the Science Fiction and Fantasy Writers Association’s (SFWA) rule changes for the Nebula Awards, beginning with a policy allowing works written entirely by large language models to be ineligible while requiring disclosure of any LLM use. After backlash and an apology from SFWA’s board, the rules were revised again to make works written wholly or partially with generative LLM tools ineligible, with disqualification if LLMs were used at any point. The piece also describes San Diego Comic-Con updating its art show rules after complaints, banning AI-created material entirely. It notes continued debate over how broadly “LLM usage” should be defined as such tools become embedded in everyday software.",
        keywords: ["generative ai", "science fiction", "comic-con", "nebula awards", "creative policy"],
        sourceOverride: "TechCrunch",
      },
    ],
  },
  {
    id: "dec-2025",
    label: "December 2025",
    articles: [
      {
        title: "4 Ways AI Could Change Book Publishing In 2026",
        url: "https://www.forbes.com/sites/tonifitzgerald/2025/12/12/4-ways-ai-could-change-book-publishing-in-2026-experts-weigh-in/",
        date: "Dec 12, 2025",
        author: "Toni Fitzgerald",
        summary:
          "Experts forecast AI-driven shifts in publishing workflows, especially around editing automation, marketing strategy, and self-publishing operations.",
        fullAbstract:
          "The article outlines four ways experts expect artificial intelligence to affect book publishing in 2026, largely through behind-the-scenes workflows rather than blockbuster AI-authored novels. It says major publishers are unlikely to rely on AI to write significant releases soon, partly because human authorship is required for copyright, though smaller presses and self-publishers are experimenting and AI content can saturate markets with repetitive themes. The piece predicts more automated editing, warning that replacing human copy editors can increase factual, continuity, and quality-control problems without oversight. It also argues AI tools will shift branding and marketing power toward authors by enabling them to generate messaging, test positioning, and target audiences with less reliance on publisher marketing teams. Finally, it suggests AI could accelerate self-publishing by helping writers analyze demand, optimize launches, and manage formatting, distribution, and pricing.",
        keywords: ["book publishing", "generative ai", "editing automation", "author marketing", "self-publishing"],
        sourceOverride: "Forbes",
      },
    ],
  },
  {
    id: "oct-2025",
    label: "October 2025",
    articles: [
      {
        title: "President of DC Comics Says It Will Never Use AI",
        url: "https://futurism.com/artificial-intelligence/president-dc-comics-never-use-ai",
        date: "Oct 09, 2025",
        author: "Victor Tangermann",
        summary:
          "DC Comics leadership publicly rejects AI-generated storytelling and art, framing the stance as a commitment to human creative authenticity.",
        fullAbstract:
          "The article describes DC Comics president and publisher Jim Lee’s statement at New York Comic Con that the company will not support AI-generated storytelling or artwork, adding that this position will hold “not now, not ever” while he and SVP/general manager Anne DePies are in charge. Lee argues that audiences can sense authenticity, saying people recoil from what feels fake, and contends that AI “doesn’t dream” or “feel” and instead aggregates existing work. The piece situates his remarks within broader entertainment-industry debates over generative AI, noting that studios and investors continue to push the technology despite early practical headaches. It also points to backlash in comics fandom, citing an AI-powered Stan Lee hologram at a recent convention, and says Lee’s comments drew cheers at the panel.",
        keywords: ["dc comics", "generative ai", "creative industry", "comic conventions", "ai-generated art"],
        sourceOverride: "Futurism",
      },
      {
        title: "I’m a Screenwriter. Is It All Right if I Use A.I.?",
        url: "https://www.nytimes.com/2025/10/04/magazine/magazine-email/screenwriter-ai-ethics.html",
        date: "Oct 04, 2025",
        author: "Kwame Anthony Appiah",
        summary:
          "An Ethicist column explores whether screenwriters can responsibly use AI tools for research and drafting while maintaining professional accountability.",
        fullAbstract:
          "In this Ethicist column, a television and film screenwriter asks whether using ChatGPT for research, script feedback, and even drafting a couple of scenes crosses an ethical line such as plagiarism, theft, or misrepresentation. Kwame Anthony Appiah argues that much scripted TV already relies on familiar tropes and that writers have long produced formulaic dialogue without A.I. He describes how some writers use chatbots for brainstorming, formatting work like treatments, or capturing period cadences, while noting that suspense and long-arc storytelling remain areas where A.I. tends to struggle. Appiah suggests the key ethical issue is transparency and consent within professional arrangements, pointing to Writers Guild of America rules and emphasizing that the writer remains accountable for the final script.",
        keywords: ["screenwriting", "generative ai", "writers guild of america", "creative ethics", "television writing"],
        sourceOverride: "The New York Times Magazine",
      },
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
    id: "aug-2025",
    label: "August 2025",
    articles: [
      {
        title: "Page against the machine",
        url: "https://sf.gazetteer.co/page-against-the-machine",
        date: "Aug 29, 2025",
        author: "Cydney Hayes",
        summary:
          "San Francisco’s expanding zine scene is portrayed as a hands-on response to AI slop, surveillance capitalism, and algorithmic media culture.",
        fullAbstract:
          "The article reports a surge of interest in handmade zines in San Francisco, framed as a pushback against “AI slop,” social media surveillance, and corporate media. Organizers of the San Francisco Zine Fest say they reviewed nearly 500 applications and, due to venue limits at Metreon City View, can accommodate less than half of applicants this year, suggesting rapid growth. They describe zines as a physical alternative to algorithm-driven culture and note that niche, marginal viewpoints have long defined the scene. The piece also highlights how tech culture intersects with zines, including tech workers seeking creative outlet, and argues that print can feel safer and harder to trace online—while raising questions about space constraints for a booming community.",
        keywords: [
          "zines",
          "san francisco zine fest",
          "artificial intelligence",
          "surveillance capitalism",
          "independent publishing",
        ],
        sourceOverride: "Gazetteer SF",
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
      {
        title: "Using AI to Explore Scientific Realism and Build Story Bibles for Fiction Writing",
        url: "https://janefriedman.com/using-ai-to-explore-scientific-realism-and-build-story-bibles-for-fiction-writing/",
        date: "Jul 17, 2025",
        author: "Tuesday Kuykendall",
        summary:
          "A science-fiction author details how she uses AI for plausibility checks, technical research, and story bible maintenance without outsourcing prose.",
        fullAbstract:
          "The article explains how author Tuesday Kuykendall uses generative AI as a support tool for fiction rather than as a substitute for writing. A retired materials scientist who writes science fiction, she says she avoids using AI to draft prose but relies on it during revision and research to test the plausibility of scientific ideas, summarize technical papers in plain language, and suggest realistic terminology for scenes outside her expertise, with subsequent fact-checking. She provides examples of asking ChatGPT to evaluate the feasibility of lunar survival technologies and using Claude to propose medically accurate scenarios. Kuykendall also describes using AI to organize her own notes into “story bibles” that codify world rules, technology, and setting details to maintain consistency. She cautions against depending on free AI tools for nonfiction science due to hallucinations and emphasizes careful prompting, restarting flawed chat sessions, and ethical responsibility in AI use.",
        keywords: ["fiction writing", "story bibles", "scientific realism", "generative ai", "worldbuilding"],
        sourceOverride: "Jane Friedman",
      },
    ],
  },
  {
    id: "undated",
    label: "Date Not Specified",
    articles: [
      {
        title: "Open Questions | Sci-fi writer Liu Cixin on why he’ll be happy if AI surpasses humans",
        url: "https://www.scmp.com/news/china/science/article/3336312/rational-optimist-sci-fi-writer-liu-cixin-why-hell-be-happy-if-ai-surpasses-humans",
        date: "Date not specified",
        author: "Not specified",
        summary:
          "A Q&A with Liu Cixin explores dark forest theory, AI optimism, and his view that science fiction maps possibilities rather than predicts outcomes.",
        fullAbstract:
          "The article presents a Q&A with Chinese science-fiction writer Liu Cixin, conducted with media and students at the Hong Kong University of Science and Technology after he received an honorary doctorate in humanities. It provides brief background on Liu’s career and notes his international recognition for The Three-Body Problem trilogy. In the excerpted exchange, Liu is asked about the “dark forest” theory central to his trilogy and whether humanity should remain silent in the universe. He argues that science fiction is not a form of prophecy but a catalogue of imagined possibilities that can sometimes seem predictive by chance. He describes the dark forest scenario as the bleakest outcome he could conceive for contact among advanced civilisations, while acknowledging other plausible outcomes, including views that technological progress might coincide with rising moral standards and respect for life.",
        keywords: ["liu cixin", "science fiction", "dark forest theory", "artificial intelligence", "hkust"],
        sourceOverride: "South China Morning Post",
      },
      {
        title: "I’m writing a novel without using AI – and I can prove it",
        url: "https://spectator.com/article/im-writing-a-novel-without-using-ai-and-i-can-prove-it/?edition=us",
        date: "Date not specified",
        author: "Gary Dexter",
        summary:
          "An argument for human-authorship verification proposes livestreamed workflows and version histories as AI-generated fiction becomes harder to distinguish.",
        fullAbstract:
          "The article argues that as generative AI becomes faster and more convincing, readers and publishers may soon demand proof of human authorship for fiction. The author describes how AI has progressed from early predictive-text experiments to tools that can quickly imitate distinctive literary styles, and predicts a gradual shift where writers increasingly outsource brainstorming, scenes, chapters, and eventually entire novels to machines. He contends that even if AI novels are not as good as human work, they may be “good enough” to outcompete human writers economically. To preserve a market for demonstrably human-written books, he proposes a “Maximal Human Authorship Protocol” involving livestreamed writing sessions, offline work, and time-stamped version histories to document that no AI assisted the process.",
        keywords: ["fiction writing", "generative ai", "authorship verification", "livestreaming", "publishing ethics"],
        sourceOverride: "The Spectator",
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
