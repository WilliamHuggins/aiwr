import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Writer's Complete Guide to NotebookLM in 2026 | AI Writers' Retreat",
  description:
    "Most of the writing community is barely scratching NotebookLM's surface. Learn practical workflows for fiction, nonfiction, journalism, and screenwriting with cited, source-grounded AI.",
};

const tutorialHtml = `
<nav>
  <a class="nav-logo" href="#">NotebookLM for Writers</a>
  <ul class="nav-links">
    <li><a href="#what-is">The Basics</a></li>
    <li><a href="#workspace">Setup</a></li>
    <li><a href="#fiction">Fiction</a></li>
    <li><a href="#other-writers">Journalists &amp; More</a></li>
    <li><a href="#studio">Studio</a></li>
    <li><a href="#prompts">Prompts</a></li>
    <li><a href="#limits">Limits</a></li>
    <li><a href="#tutorials">Tutorials</a></li>
  </ul>
</nav>

<div class="hero">
  <div class="hero-label">Updated February 2026</div>
  <h1>The Writer's Complete<br/>Guide to <em>NotebookLM</em></h1>
  <p class="hero-sub">Most of the writing community is barely scratching its surface. Here's how to use the most powerful AI research tool available — without losing your own voice.</p>
  <a class="hero-cta" href="https://notebooklm.google.com" target="_blank" rel="noopener noreferrer">Open NotebookLM ↗</a>
  <div class="hero-rule"></div>
</div>

<section id="what-is">
  <div class="wrapper">
    <div class="section-label">The Big Idea</div>
    <h2>It's not a writing tool.<br/>That's the point.</h2>
    <p>The single most important thing to understand about NotebookLM is what it <em>refuses</em> to do: it will not generate content from its general training data. Ask it to "write me a short story about dragons" and it will decline. Ask it to "identify every scene where my dragon character appears and summarize their emotional arc across all three acts," and it will deliver a cited, passage-linked response in seconds.</p>
    <p>NotebookLM generates responses grounded <strong>exclusively in documents you upload</strong>, with inline citations pointing to exact passages in your sources. This architecture dramatically reduces the likelihood of the AI inventing details about your work that don't exist. For writers managing sprawling research, multi-book series, or complex narratives, this transforms NotebookLM into something no other AI tool currently offers — a continuity editor, research librarian, and first-pass beta reader that never sleeps, never forgets, and always cites its work.</p>

    <div class="screenshot-block">
      <img src="https://qhdrtygne7pnc3mj.public.blob.vercel-storage.com/Notebook%20LM/Screenshot%202026-02-27%20at%209.37.28%E2%80%AFPM.png" alt="NotebookLM three-panel interface — Sources, Chat, and Studio panels" />
      <div class="screenshot-caption">NotebookLM's three-panel layout: Sources (left), Chat (center), Studio (right)</div>
    </div>

    <p>The three-panel interface: a <strong>Sources Panel</strong> (left) for managing uploaded documents, a <strong>Chat Panel</strong> (center) for conversational queries with inline citations, and a <strong>Studio Panel</strong> (right) for one-click generation of audio podcasts, video overviews, mind maps, reports, flashcards, quizzes, slide decks, infographics, and data tables.</p>
    <p>Each notebook holds up to 50 sources on the free tier (each up to 500,000 words). The <a href="https://blog.google/innovation-and-ai/models-and-research/google-labs/notebooklm-new-features-december-2024/" target="_blank" rel="noopener noreferrer">December 2025 Gemini 3 upgrade</a> brought significant improvements in reasoning about complex narrative structures. The <a href="https://blog.google/innovation-and-ai/models-and-research/google-labs/notebooklm-custom-personas-engine-upgrade/" target="_blank" rel="noopener noreferrer">February 2026 update</a> expanded conversation memory by 6×, enabled saved chat history, and introduced custom goals — persona prompts up to 10,000 characters — so you can instruct the AI to act as a "developmental editor," "harsh critic," or "genre-specific beta reader."</p>

    <h3>What does it cost?</h3>
    <p>Per <a href="https://support.google.com/notebooklm/answer/16213268" target="_blank" rel="noopener noreferrer">Google's current pricing page</a>:</p>
    <table class="pricing-table">
      <thead>
        <tr><th>Tier</th><th>Price</th><th>Notebooks</th><th>Sources / notebook</th><th>Daily queries</th><th>Audio Overviews / day</th></tr>
      </thead>
      <tbody>
        <tr><td>Free</td><td>$0</td><td>100</td><td>50</td><td>50</td><td>3</td></tr>
        <tr><td>Pro (Google AI Pro)</td><td>$19.99/mo</td><td>500</td><td>300</td><td>500</td><td>20</td></tr>
        <tr><td>Ultra</td><td>$249.99/mo</td><td colspan="4">Enterprise-scale; most individual writers won't need it</td></tr>
      </tbody>
    </table>
    <p>The free tier is more than sufficient for most individual writers. Pro bundles Gemini Advanced and 2TB Google storage — worth considering if you're managing multiple large projects simultaneously.</p>
  </div>
</section>

<section id="workspace">
  <div class="wrapper">
    <div class="section-label">Getting Organized</div>
    <h2>Build your writer's workspace before you start querying</h2>
    <p>How you organize your notebooks determines how useful the tool becomes. Experienced writers converge on a consistent structure: <strong>one notebook per major project</strong>, plus specialized reference notebooks that serve across projects.</p>
    <p>For a fiction writer working on a trilogy: a dedicated notebook per book (manuscript draft, character profiles, chapter outlines, book-specific research), a separate <strong>"Series Bible" notebook</strong> for world-building and cross-book timelines, and a <strong>"Craft &amp; Technique" notebook</strong> with writing guides and genre conventions. <a href="https://adjacentpossible.substack.com/p/introducing-notebooklm" target="_blank" rel="noopener noreferrer">Steven Johnson</a>, NotebookLM's co-creator and author of 14 books, also advocates an <strong>"everything notebook"</strong> — a loosely curated collection of quotes, brainstorming fragments, and reference material for serendipitous connection-making.</p>

    <div class="callout">
      <div class="callout-label">Source Management Tips</div>
      <p>Only ~20 characters of each source name display in the sidebar — name files clearly. Combine multiple short research articles into single PDFs to conserve source slots. Upload finalized, clean documents whenever possible. <strong>Non-linear narratives with flashbacks can confuse NotebookLM</strong> — create a separate chronological version of your manuscript to upload alongside the original.</p>
    </div>

    <h3>What file types can you upload?</h3>
    <div style="display:flex;flex-wrap:wrap;gap:.32rem;margin:1rem 0 1.4rem;">
      <span class="tag">Google Docs / Slides</span>
      <span class="tag">PDF</span>
      <span class="tag new">Word .docx ✦ Nov 2025</span>
      <span class="tag new">Google Sheets ✦ Nov 2025</span>
      <span class="tag">Website URLs</span>
      <span class="tag">YouTube transcripts</span>
      <span class="tag">Audio files (transcribed)</span>
      <span class="tag">Text / Markdown</span>
      <span class="tag new">Photographed notes ✦ Dec 2025</span>
    </div>
    <p><strong>Notable gaps:</strong> ePub files, paywalled web content, and copy-protected PDFs are not currently supported. Web URLs extract text only — images and embedded media within pages are ignored.</p>
  </div>
</section>

<section id="fiction">
  <div class="wrapper">
    <div class="section-label">For Fiction Writers</div>
    <h2>From worldbuilding to simulated beta readers</h2>
    <p>Fiction writers have discovered the deepest, most creative applications of NotebookLM. Their real-world experiences reveal capabilities that go far beyond what Google markets.</p>

    <h3>The continuity editor that never forgets</h3>
    <p>Fantasy author <a href="https://www.robbwallace.co.uk/news/google-notebooklm-for-authors/" target="_blank" rel="noopener noreferrer">Robb Wallace</a>, writing his epic series "The Silence In The Song," uploaded his 150,000-word first novel, 85,000-word work-in-progress, and approximately 25,000 words of notes into a single notebook. NotebookLM identified two aspects of an initial prophecy established in book one that Wallace had "veered away from" in book two — gaps at 85,000 words deep that would normally surface only with beta readers or a developmental editor.</p>

    <div class="pull-quote">
      <blockquote>"I would have found these gaps eventually, but hopefully this way it will be far stronger by the time it gets to them."</blockquote>
      <cite>— Robb Wallace, fantasy author, on finding continuity gaps with NotebookLM</cite>
    </div>

    <p>YA fantasy novelist <a href="https://mattkelland.substack.com/p/notebooklm-for-writers" target="_blank" rel="noopener noreferrer">Matt Kelland</a> maintains separate notebooks for three novels in progress. For his Welsh-set fantasy <em>Yellow Flowers</em>, he uploaded three different drafts alongside Welsh place name databases, 13th-century castle construction references, narrative style guides, and YA fantasy trope lists. He queries with prompts like:</p>
    <div class="prompt-box"><p>"Suggest some names for rivers that sound Welsh and evoke a feeling of grandeur — tell me their meaning, and indicate if these names are from real places or from a fictional source."</p></div>

    <p>For plot hole detection, Kelland uses targeted prompts:</p>
    <div class="prompt-box"><p>"Which bits of Part 1 feel rushed?"</p></div>
    <div class="prompt-box"><p>"Does the relationship between X and Y develop in a believable way?"</p></div>
    <p>Uploading a previous draft outline alongside a revised one and asking NotebookLM to compare them reveals exactly which scenes were moved, removed, or added — a revision roadmap that previously required manual side-by-side comparison.</p>

    <h3>Simulating beta readers before your beta readers</h3>
    <div class="screenshot-block">
      <img src="https://qhdrtygne7pnc3mj.public.blob.vercel-storage.com/Notebook%20LM/Screenshot%202026-02-27%20at%209.58.19%E2%80%AFPM.png" alt="NotebookLM custom persona goals interface" />
      <div class="screenshot-caption">The Custom Goals panel — define a critical persona with up to 10,000 characters of instructions</div>
    </div>

    <p>The <a href="https://blog.google/innovation-and-ai/models-and-research/google-labs/notebooklm-custom-personas-engine-upgrade/" target="_blank" rel="noopener noreferrer">expanded 10,000-character custom goals feature</a> lets you instruct the AI to adopt specific critical perspectives. Wallace asks NotebookLM to analyze "from the perspective of a fantasy author's critic," then separately as "a harsh book reviewer," then as "a developmental editor" — receiving substantively different feedback each time.</p>

    <div class="screenshot-block">
      <img src="https://qhdrtygne7pnc3mj.public.blob.vercel-storage.com/Notebook%20LM/Screenshot%202026-02-27%20at%2010.00.53%E2%80%AFPM.png" alt="NotebookLM audio overview and studio features" />
      <div class="screenshot-caption">The Studio panel — Audio Overviews include Critique and Debate formats, added September 2025</div>
    </div>

    <p>The <a href="https://support.google.com/notebooklm/answer/16212820" target="_blank" rel="noopener noreferrer">Audio Overview feature</a> takes this further. Wallace generated a podcast-style discussion where two AI hosts debated his novel's strengths and weaknesses, calling it "very refreshing and a great way to make improvements." The <strong>Critique format</strong> (added September 2025) is specifically designed for constructive evaluation, while the <strong>Debate format</strong> stages formal back-and-forth arguments.</p>

    <div class="callout warn">
      <div class="callout-label">⚠ Positive Bias Warning</div>
      <p>NotebookLM exhibits a consistent positive bias when evaluating creative writing. <a href="https://www.royalroad.com/forums/thread/145828" target="_blank" rel="noopener noreferrer">Writers on Royal Road forums</a> reported that self-described "daft stories about superheroes" were praised for "satirical commentary on power dynamics and morality." Kelland emphasizes this is "not a substitute for having actual beta readers or a critical writers' group, but it is a useful first cut." Explicitly instructing the AI to be harsh or to focus on weaknesses helps counteract this tendency.</p>
    </div>

    <h3>Character tracking across sprawling narratives</h3>
    <p>Comic adaptation writer <a href="https://dennismfrancis.medium.com/try-notebooklm-as-a-productivity-engine-for-writing-and-research-839da819f216" target="_blank" rel="noopener noreferrer">Dennis Francis</a> built a complete character database in Google Sheets — personality traits, motivations, reactions to key events, relationships, power dynamics, and thematic function — and uploaded it as a NotebookLM source (Google Sheets support added November 2025). When he pastes drafted scenes back into the notebook, he asks whether they maintain consistency with established character arcs, thematic frameworks, and historical accuracy.</p>
    <div class="prompt-box"><p>"Pull out every reference to [character name] throughout the entire manuscript."</p></div>
    <p>This produces a comprehensive character audit — every appearance, every dialogue line, every description — with citations linking back to exact locations. This alone can save hours of manual searching during revision.</p>
  </div>
</section>

<section id="other-writers">
  <div class="wrapper">
    <div class="section-label">Other Writer Types</div>
    <h2>Screenwriters, journalists, and nonfiction authors each get distinct advantages</h2>

    <div class="card-grid">
      <div class="card lf">
        <div class="card-genre">Literary &amp; Genre Fiction</div>
        <div class="card-icon">🎬</div>
        <h4>Screenwriters</h4>
        <p>Instant chronology breakdowns, continuity queries by character/scene, and "Previously On" recap generation from uploaded scripts.</p>
      </div>
      <div class="card sp">
        <div class="card-genre">Journalism</div>
        <div class="card-icon">📰</div>
        <h4>Journalists</h4>
        <p>Synthesize document dumps while maintaining citation integrity. Mind Maps visualize entity connections in complex investigations.</p>
      </div>
      <div class="card cnf">
        <div class="card-genre">Creative Nonfiction</div>
        <div class="card-icon">📚</div>
        <h4>Nonfiction Authors</h4>
        <p>Transform scattered sources into structured understanding. Cluster themes, surface contradictions, and track citations during drafting.</p>
      </div>
    </div>

    <h3>Screenwriters: script analysis that used to take weeks</h3>
    <p>Professional film editor <a href="https://shanewozere.substack.com/p/notebook-lm-vs-nda?utm_campaign=post&amp;utm_medium=web" target="_blank" rel="noopener noreferrer">Shane Woods</a>, who worked on Apple TV+'s <em>Constellation</em>, documented how NotebookLM transformed his script analysis workflow. For projects with complex jumping timelines, the tool provides instant chronology breakdowns and answers precise continuity queries:</p>
    <div class="prompt-box"><p>"Where is Tommy when Polly is first talking to Reuben?"</p></div>
    <p>Scene-by-scene breakdowns, character appearance spreadsheets, and key data extraction — work that previously required weeks — now generate in seconds.</p>

    <h3>Journalists: from document dumps to sourced stories</h3>
    <p>Upload court filings, archived interviews, official documents, and audio recordings for an investigation, then ask targeted questions and receive citation-backed responses. The Mind Map feature helps visualize connections between entities. Journalist Clare Spencer (<a href="https://generative-ai-newsroom.com/experimenting-with-notebooklm-use-cases-c82b68fc75c4" target="_blank" rel="noopener noreferrer">Generative AI in the Newsroom</a>) found the tool particularly effective for retrieving exact quotes when there's a dispute over what was said. The <a href="https://blog.google/innovation-and-ai/models-and-research/google-labs/notebooklm-deep-research-file-types/" target="_blank" rel="noopener noreferrer">Deep Research feature</a> (launched November 2025) acts as an autonomous research agent — creating a research plan, browsing hundreds of websites, and generating organized reports.</p>

    <h3>Nonfiction authors: research synthesis at scale</h3>
    <p>Upload all research papers, interview transcripts, and articles, then ask the AI to cluster sources into themes, identify recurring arguments, or surface contradictions. Every claim links back to specific source passages, making citation tracking during drafting significantly faster. Dennis Francis <a href="https://dennismfrancis.medium.com/try-notebooklm-as-a-productivity-engine-for-writing-and-research-839da819f216" target="_blank" rel="noopener noreferrer">documented measurable productivity gains</a> across his workflow: research phases dropped from 12–15 hours to 6–8 hours, scene scripting fell from 2–3 hours to 45–60 minutes per scene, and revision cycles decreased from 4–5 passes to 2–3 passes.</p>
  </div>
</section>

<section id="studio">
  <div class="wrapper">
    <div class="section-label">The Studio Panel</div>
    <h2>Audio overviews, mind maps, and outputs most tutorials overlook</h2>

    <div class="screenshot-block">
      <img src="https://qhdrtygne7pnc3mj.public.blob.vercel-storage.com/Notebook%20LM/Screenshot%202026-02-27%20at%2010.07.39%E2%80%AFPM.png" alt="NotebookLM Studio panel showing all output options" />
      <div class="screenshot-caption">The Studio panel — nine output types, all generated from your sources</div>
    </div>

    <div class="studio-grid">
      <div class="studio-item"><span>🎙</span>Audio Overview</div>
      <div class="studio-item"><span>🎞</span>Video Overview</div>
      <div class="studio-item"><span>🗺</span>Mind Map</div>
      <div class="studio-item"><span>📋</span>Reports</div>
      <div class="studio-item"><span>🃏</span>Flashcards</div>
      <div class="studio-item"><span>📊</span>Data Table</div>
      <div class="studio-item"><span>📑</span>Slide Deck</div>
      <div class="studio-item"><span>🖼</span>Infographic</div>
      <div class="studio-item"><span>❓</span>Quiz</div>
    </div>

    <h3>Audio Overviews — the standout feature for writers</h3>
    <p>Per <a href="https://support.google.com/notebooklm/answer/16212820" target="_blank" rel="noopener noreferrer">Google's Audio Overview documentation</a>, four formats are available: <strong>Deep Dive</strong> (two hosts, 8–10 minutes), <strong>Brief</strong> (single speaker, under 2 minutes), <strong>Critique</strong> (two hosts, constructive evaluation — added September 2025), and <strong>Debate</strong> (formal back-and-forth). All support 80+ languages. The <strong>Interactive Mode</strong> lets you join the conversation by voice. For writers, generating an Audio Overview of your draft chapter and listening during a commute reveals structural and tonal issues that reading on screen can miss.</p>

    <h3>Mind Maps — for worldbuilders especially</h3>
    <p>Mind Maps provide one-click visual representations of how topics, characters, settings, and themes connect across your sources. One historical fiction writer uploaded plans for three Viking-era novels; the Mind Map automatically organized everything hierarchically — individual book outlines branching to chapter summaries, connecting to character arcs, linking to historical context.</p>

    <h3>Other Studio outputs worth knowing</h3>
    <p><a href="https://blog.google/innovation-and-ai/models-and-research/google-labs/notebooklm-video-overviews-studio-upgrades/" target="_blank" rel="noopener noreferrer"><strong>Video Overviews</strong></a> (launched August 2025) create narrated visual presentations — useful for pitch materials or visual story bibles. <a href="https://9to5google.com/2025/12/19/notebooklm-gemini-3-data-tables/" target="_blank" rel="noopener noreferrer"><strong>Data Tables</strong></a> (December 2025) extract structured information from unstructured documents into comparison tables exportable to Google Sheets. <strong>Reports</strong> auto-generate in formats including Study Guides, Briefing Documents, FAQs, Timelines, and Blog Posts — the <strong>Timeline</strong> format is particularly useful for writers managing complex chronologies.</p>
  </div>
</section>

<section id="prompts">
  <div class="wrapper">
    <div class="section-label">Prompting Strategies</div>
    <h2>The prompts that published authors actually use</h2>
    <p>Vague queries produce generic responses. Hyper-specific prompts unlock genuinely useful analysis.</p>

    <h3>Finding unexpected connections (via <a href="https://www.joelkelly.ca/creative-prompts-for-notebooklm/" target="_blank" rel="noopener noreferrer">Joel Kelly</a>)</h3>
    <div class="prompt-box"><p>"Please synthesize the connection, however abstract, between these topics: {TOPIC A} and {TOPIC B}. Ground all main points in specific quotes from the sources."</p></div>

    <h3>Gap analysis during revision</h3>
    <div class="prompt-box"><p>"Review all the uploaded documents together and identify what is missing — not what is already covered."</p></div>
    <p>This surfaces dropped plot threads, unresolved questions, and missing connective tissue.</p>

    <h3>Contradiction detection across drafts</h3>
    <div class="prompt-box"><p>"Review all uploaded documents and find all contradicting information, making both sides of the coin clear."</p></div>

    <h3>The 360-Degree Feedback Report</h3>
    <div class="prompt-box"><p>"Create a '360-Degree Feedback Report' for this manuscript. Present the report in separate sections:<br/>(1) The Strict Editor's View — point out the 3 weakest passages;<br/>(2) The Reader's View — what's confusing or loses engagement;<br/>(3) The Genre Expert's View — how well does this meet genre expectations?"</p></div>

    <div class="callout">
      <div class="callout-label">Pro Workflow Tip</div>
      <p><strong>Use source checkboxes strategically.</strong> Before querying, select only the specific sources relevant to your question. Asking about character consistency? Select only your manuscript and character profiles, deselecting research materials. Also: <strong>save important responses as Notes immediately</strong> — Notes persist across sessions and can later be converted into sources themselves.</p>
    </div>
  </div>
</section>

<section id="limits">
  <div class="wrapper">
    <div class="section-label">Honest Limitations</div>
    <h2>What writers must know before relying on this tool</h2>
    <p>NotebookLM's source-grounded design substantially reduces hallucination compared to general-purpose AI tools, but does not eliminate fabrication entirely. Per <a href="https://arxiv.org/html/2509.25498v1" target="_blank" rel="noopener noreferrer">research on LLM overconfidence in document-based queries</a>, errors tend toward "interpretive overconfidence" — the AI editorializes beyond what sources support or generates plausible but unsupported characterizations. Writers on <a href="https://www.royalroad.com/forums/thread/145828" target="_blank" rel="noopener noreferrer">Royal Road forums</a> report specific fabrications: one user's logging-camp story prompted the AI to invent "giant sentient woodlice" as a plot explanation, while another found the AI insisting characters were romantically involved with zero textual evidence.</p>

    <div class="limit-item">
      <div class="limit-icon">🔞</div>
      <div>
        <div class="limit-title">Content safety filters block mature fiction</div>
        <div class="limit-desc">Material containing violence, sexuality, or obscenity — even in historical or literary contexts — may trigger safety flags that block Audio Overview generation or limit chat responses. Writers working in thriller, horror, romance, or literary fiction should expect occasional friction. Academic or historical framing in prompts can sometimes help.</div>
      </div>
    </div>
    <div class="limit-item">
      <div class="limit-icon">🔒</div>
      <div>
        <div class="limit-title">Notebooks are completely siloed</div>
        <div class="limit-desc">Notebooks cannot reference each other and there is no cross-notebook search. If your series bible lives in one notebook and your current manuscript in another, you cannot query across both simultaneously. The workaround is duplicating critical sources, which consumes source slots.</div>
      </div>
    </div>
    <div class="limit-item">
      <div class="limit-icon">🔄</div>
      <div>
        <div class="limit-title">No auto-sync with Google Drive</div>
        <div class="limit-desc">When you update a manuscript in Google Docs, you must manually re-upload it to NotebookLM for the changes to reflect.</div>
      </div>
    </div>
    <div class="limit-item">
      <div class="limit-icon">🔌</div>
      <div>
        <div class="limit-title">No integrations with popular writing tools</div>
        <div class="limit-desc">NotebookLM has no native integrations with Scrivener, Obsidian, Notion, or other popular writing tools — everything flows through Google's ecosystem or manual upload.</div>
      </div>
    </div>
    <div class="limit-item">
      <div class="limit-icon">🔐</div>
      <div>
        <div class="limit-title">Privacy: a nuance worth knowing</div>
        <div class="limit-desc">Google confirms your data is not used to train AI models. However, if you click feedback buttons on a personal Google account, human reviewers might see your queries and responses. Writers with sensitive unpublished work should avoid providing feedback or use a Google Workspace account, which guarantees data will not be reviewed by humans regardless of feedback interactions.</div>
      </div>
    </div>
  </div>
</section>

<section id="tutorials">
  <div class="wrapper">
    <div class="section-label">Go Deeper</div>
    <h2>Official tutorials &amp; community resources</h2>
    <p>The fastest way to level up is to go straight to the source. Here are Google's own guides plus the best writer-specific breakdowns:</p>

    <div class="tut-grid">
      <a class="tut-card" href="https://notebooklm.google.com" target="_blank" rel="noopener noreferrer">
        <div class="tut-source">Google</div>
        <h4>NotebookLM — Start Here</h4>
        <p>The main interface. Free to use with a Google account.</p>
      </a>
      <a class="tut-card" href="https://blog.google/innovation-and-ai/products/notebooklm-beginner-tips/" target="_blank" rel="noopener noreferrer">
        <div class="tut-source">Google Blog</div>
        <h4>8 Expert Tips for Getting Started</h4>
        <p>Google's own beginner guide covering key workflows.</p>
      </a>
      <a class="tut-card" href="https://blog.google/innovation-and-ai/models-and-research/google-labs/notebooklm-student-features/" target="_blank" rel="noopener noreferrer">
        <div class="tut-source">Google Blog</div>
        <h4>6 Ways to Use NotebookLM to Master Any Subject</h4>
        <p>Covers Audio Overviews, mind maps, and chat strategies in depth.</p>
      </a>
      <a class="tut-card" href="https://support.google.com/notebooklm/" target="_blank" rel="noopener noreferrer">
        <div class="tut-source">Google Support</div>
        <h4>NotebookLM Help Center</h4>
        <p>Official documentation for all features, limits, and FAQs.</p>
      </a>
      <a class="tut-card" href="https://blog.google/innovation-and-ai/models-and-research/google-labs/notebooklm-custom-personas-engine-upgrade/" target="_blank" rel="noopener noreferrer">
        <div class="tut-source">Google Blog</div>
        <h4>Custom Personas &amp; the Chat Engine</h4>
        <p>Essential reading for setting up critical personas as a writer.</p>
      </a>
      <a class="tut-card" href="https://blog.google/innovation-and-ai/models-and-research/google-labs/notebooklm-deep-research-file-types/" target="_blank" rel="noopener noreferrer">
        <div class="tut-source">Google Blog</div>
        <h4>Deep Research + New Source Types</h4>
        <p>Covers the autonomous research agent and new file type support added in late 2025.</p>
      </a>
      <a class="tut-card" href="https://mattkelland.substack.com/p/notebooklm-for-writers" target="_blank" rel="noopener noreferrer">
        <div class="tut-source">Substack — Matt Kelland</div>
        <h4>NotebookLM for Writers</h4>
        <p>A working novelist's deep-dive into practical fiction workflows.</p>
      </a>
      <a class="tut-card" href="https://www.robbwallace.co.uk/news/google-notebooklm-for-authors/" target="_blank" rel="noopener noreferrer">
        <div class="tut-source">Robb Wallace</div>
        <h4>Google NotebookLM for Authors</h4>
        <p>Continuity checking and beta reader simulation in practice.</p>
      </a>
      <a class="tut-card" href="https://shanewozere.substack.com/p/interrogating-the-script-practical" target="_blank" rel="noopener noreferrer">
        <div class="tut-source">Substack — Shane Wozere</div>
        <h4>Interrogating the Script: Practical Use Cases</h4>
        <p>A professional film editor's guide to script analysis workflows.</p>
      </a>
    </div>

    <div class="pull-quote" style="margin-top:3rem;">
      <blockquote>"Obsidian is where I think out loud. NotebookLM is where I verify I'm thinking straight."</blockquote>
      <cite>— <a href="https://dennismfrancis.medium.com/try-notebooklm-as-a-productivity-engine-for-writing-and-research-839da819f216" target="_blank" rel="noopener noreferrer" style="color:rgb(var(--muted));">Dennis Francis</a>, comic adaptation writer</cite>
    </div>

    <p style="text-align:center;color:rgb(var(--muted));margin-top:1.8rem;font-style:italic;font-family:var(--font-display);">NotebookLM is not an AI that writes for you. It's an AI that helps you understand what you've already written — and what you still need to write next.</p>
  </div>
</section>

<footer>
  <p>Guide researched and compiled February 2026 · Feature dates sourced from <a href="https://blog.google/products/notebooklm/" target="_blank" rel="noopener noreferrer">Google's NotebookLM blog</a> and <a href="https://support.google.com/notebooklm/" target="_blank" rel="noopener noreferrer">Help Center</a>.</p>
  <p>NotebookLM is a product of Google. This guide is an independent writer's resource.</p>
</footer>
`;

export default function NotebookLMTutorialPage() {
  return (
    <div className="notebooklm-guide" dangerouslySetInnerHTML={{ __html: tutorialHtml }} />
  );
}
