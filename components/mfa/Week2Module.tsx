"use client";

import Link from "next/link";
import { Check, CheckCheck, Clock3, Lock, PenLine } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import ModuleHeader from "@/components/mfa/ModuleHeader";
import ModuleSidebar from "@/components/mfa/ModuleSidebar";
import AccordionSection from "@/components/mfa/AccordionSection";

const sectionIds = ["lecture", "reading", "grammar", "tip", "exercise", "journal", "ai"] as const;
const initialOpen = { lecture: true, reading: true, grammar: false, tip: false, exercise: true, journal: false, ai: false };
const storageKey = "mfa:y1:w2";

export default function Week2Module() {
  const [open, setOpen] = useState<Record<string, boolean>>(initialOpen);
  const [completed, setCompleted] = useState<Record<string, boolean>>({ lecture: false, reading: false, grammar: false, tip: false, exercise: false, journal: false, ai: false });
  const [readingChecks, setReadingChecks] = useState([false, false, false]);
  const [draft, setDraft] = useState("");
  const [dyslexia, setDyslexia] = useState(false);
  const [celebrate, setCelebrate] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(storageKey);
    const pref = localStorage.getItem(`${storageKey}:dyslexia`) === "true";
    setDyslexia(pref);
    if (!raw) return;
    const parsed = JSON.parse(raw) as { completed?: Record<string, boolean>; readingChecks?: boolean[]; draft?: string };
    if (parsed.completed) setCompleted((prev) => ({ ...prev, ...parsed.completed }));
    if (parsed.readingChecks?.length === 3) setReadingChecks(parsed.readingChecks);
    if (parsed.draft) setDraft(parsed.draft);
  }, []);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify({ completed, readingChecks, draft }));
  }, [completed, readingChecks, draft]);

  useEffect(() => {
    localStorage.setItem(`${storageKey}:dyslexia`, String(dyslexia));
  }, [dyslexia]);

  const doneCount = sectionIds.filter((id) => completed[id]).length;
  const percent = (doneCount / sectionIds.length) * 8.3;
  const readCount = readingChecks.filter(Boolean).length;
  const words = useMemo(() => (draft.trim() ? draft.trim().split(/\s+/).length : 0), [draft]);

  const markSection = (name: (typeof sectionIds)[number], value: boolean) => setCompleted((prev) => ({ ...prev, [name]: value }));

  const completeWeek = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const next = Object.fromEntries(sectionIds.map((id) => [id, true])) as Record<string, boolean>;
    setCompleted(next);
    if (!reduced) {
      setCelebrate(true);
      setTimeout(() => setCelebrate(false), 350);
    }
  };

  return (
    <div className={`mfa-module-scope ${dyslexia ? "dyslexia-mode" : ""}`}>
      <a href="#main-content" className="font-module-ui sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-0 focus:z-[100] focus:rounded-b-md focus:bg-accent focus:px-4 focus:py-2 focus:text-white">Skip to content</a>
      <ModuleHeader percent={percent} />

      <div className="mx-auto flex max-w-[1200px] gap-8 px-4 md:px-6">
        <ModuleSidebar completed={completed} dyslexia={dyslexia} onToggleDyslexia={() => setDyslexia((v) => !v)} />

        <main id="main-content" className="flex-1 min-w-0 py-8">
          <header className="mb-10 border-b border-border pb-8">
            <p className="font-module-ui mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent">Year 1 · Week 2 · Craft Focus</p>
            <h1 className="font-module-heading content-max mb-4 text-4xl font-bold leading-tight text-ink">Image &amp; Sensory Detail</h1>
            <p className="content-max text-lg italic font-light text-muted">The image is the fundamental unit of literary art — not the idea, not the theme, but the concrete thing seen, heard, smelled, tasted, touched.</p>
            <div className="font-module-ui mt-5 flex flex-wrap gap-3 text-xs text-muted">
              <span className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-3"><Clock3 className="h-3 w-3" />~14–16 hours this week</span>
              <span className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-3"><PenLine className="h-3 w-3" />700–900 words</span>
            </div>
          </header>

          <section id="lecture" className="scroll-mt-24 border-t border-border pt-6">
            <h2 className="font-module-heading mb-5 text-3xl font-semibold">Craft Lecture</h2>
            <div className="content-max space-y-5 leading-8">
              <p>Richard Hugo called the image the &quot;triggering subject&quot; — the concrete thing that unlocks a piece of writing from the inside. Flaubert spent entire mornings searching for <em>le mot juste</em>, the exact word, and what he meant, almost always, was the exact sensory detail. This is not coincidence. The image has a biological hold on the reader that the idea, however brilliant, simply cannot match.</p>
              <p>Why? Because images engage the body. Neuroscience has confirmed what writers knew instinctively: reading vivid sensory description activates the same neural regions as actual sensory experience. When you write &quot;the smell of frying onions leaked under the apartment door,&quot; your reader does not merely understand onions — they briefly <em>smell</em> them. This is the mechanism of literary immersion, and it works at the level of the word, not the paragraph.</p>
              <blockquote className="border-l-4 border-accent bg-surface-2 px-5 py-4 font-module-heading text-2xl italic">&quot;Not the idea, not the theme — the image: the thing seen, heard, smelled, tasted, touched. This is the irreducible unit of literary art.&quot;</blockquote>
              <p>The writer&apos;s eye is a trained instrument. Beginning writers tend to reach for generalities because they are faster and feel safer — &quot;it was beautiful,&quot; &quot;the room felt heavy.&quot; Expert writers resist the generalizing impulse and instead ask: what <em>specifically</em> did I see? What was the particular quality of that light at 4pm? What did that particular silence sound like?</p>
              <p>Eudora Welty, in &quot;Place in Fiction,&quot; argued that place is the first teacher of the imagination — that precise setting creates not just verisimilitude but emotional permission. The reader who believes in your place will believe in everything that happens inside it. But place is built image by image, sense by sense.</p>
              <p>This week you will train your senses as artistic instruments. You will learn to spend time in each sensory mode separately — the smell of a room before the sight of it, the texture of an object before its color — because the senses we neglect in writing (smell, touch, taste) are often the ones with the most associative power over memory and feeling.</p>
              <div className="rounded-lg border border-border bg-surface-2 p-5 italic"><p className="font-module-ui mb-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-muted not-italic">From Flaubert — Madame Bovary, Part One, Chapter 1 (trans. Davis)</p><p>Notice how Flaubert builds an entire character through physical specificity: the cap with its layers, its brim, its odor of fresh leather. We know nothing abstract about this boy yet. We know his cap.</p></div>
              <p>The practical principle: before reaching for an abstraction, ask yourself which of the five senses is the most direct path into this moment. Then ask which of those senses you have been neglecting in your writing. Almost universally, writers over-deploy sight and under-deploy smell, touch, and taste — precisely the senses that most powerfully unlock memory and emotional association.</p>
              <div className="space-y-2 text-[15px]">
                <p className="rounded-r-md border-l-4 border-accent bg-indigo-50 px-3 py-2"><strong className="font-module-ui mr-2 text-xs uppercase tracking-[0.06em] text-accent">Literary Fiction</strong>Figurative imagery (metaphor, simile) works alongside literal sensory detail to create depth. The literal grounds the world in reality; the figurative opens it toward meaning. Both must be specific: a vague metaphor is as inert as a vague fact.</p>
                <p className="rounded-r-md border-l-4 border-amber-700 bg-amber-50 px-3 py-2"><strong className="font-module-ui mr-2 text-xs uppercase tracking-[0.06em] text-amber-700">Screenwriting &amp; Playwriting</strong>The script must create images that a camera can capture or an audience can see from twenty rows back. Abstract, interior, or purely emotional description fails on the script page. Every important story beat should have a corresponding visible action or specific detail.</p>
                <p className="rounded-r-md border-l-4 border-emerald-700 bg-emerald-50 px-3 py-2"><strong className="font-module-ui mr-2 text-xs uppercase tracking-[0.06em] text-emerald-700">Creative Nonfiction &amp; Memoir</strong>Precision of sensory recall is the memoirist&apos;s primary credibility signal. The smell of a hospital room, the texture of a grandmother&apos;s coat — these details say <em>I was there, I remember this, you can trust me.</em> The reconstructed sensory detail earns the reader&apos;s faith in the larger truth you&apos;re telling.</p>
              </div>
              <label className="font-module-ui inline-flex min-h-11 items-center gap-2 text-sm text-muted"><input type="checkbox" checked={completed.lecture} onChange={(e) => markSection("lecture", e.target.checked)} className="h-4 w-4 accent-[rgb(var(--success))]" />Mark lecture as read</label>
            </div>
          </section>

          <AccordionSection id="reading" title="Core Reading" subtitle="3 texts · 2–3 hours" icon="📚" iconClassName="bg-orange-50" open={open.reading} onToggle={(id) => setOpen((p) => ({ ...p, [id]: !p[id] }))}>
            <div className="content-max">
              <p className="font-module-ui mb-3 inline-flex items-center gap-2 text-xs text-success"><Check className="h-3 w-3" />{readCount} of 3 readings completed</p>
              {["The Triggering Town|Richard Hugo — First essay|Hugo's concept of the \"triggering subject\" is the essential theoretical frame for this week. A poet's wisdom that belongs equally to fiction and memoir writers.|Purchase required|~40 min","Madame Bovary — Part One, Chapter 1|Gustave Flaubert — trans. Lydia Davis|Read for sensory precision and the way a character's most private inner life is rendered entirely through external physical description. The cap in the first paragraph alone could anchor a semester's study.|Free — Project Gutenberg|~25 min",'"Place in Fiction"|Eudora Welty|Welty\'s argument that place is the ground on which all fiction stands — that precise sensory setting creates not just verisimilitude but emotional permission. Available widely online.|Free online|~45 min'].map((item, i) => {
                const [title, author, note, badge, time] = item.split("|");
                return <label key={title} className="mb-3 flex min-h-11 cursor-pointer gap-3 rounded-lg border border-border bg-white p-4 hover:border-accent"><input type="checkbox" checked={readingChecks[i]} onChange={(e) => {
                  const next = [...readingChecks];
                  next[i] = e.target.checked;
                  setReadingChecks(next);
                  markSection("reading", next.every(Boolean));
                }} className="mt-1 h-4 w-4 accent-[rgb(var(--success))]" /><span><span className="block font-semibold">{title}</span><span className="font-module-ui mb-1 block text-xs text-muted">{author}</span><span className="block text-sm italic text-muted">{note}</span><span className="font-module-ui mt-2 flex gap-2 text-[10px] uppercase"><span className="rounded-full bg-amber-100 px-2 py-1">{badge}</span><span className="rounded-full bg-slate-100 px-2 py-1">{time}</span></span></span></label>;
              })}
            </div>
          </AccordionSection>

          <AccordionSection id="grammar" title="Grammar Lesson" subtitle="Phase 1, Topic 4 — Left-Branching Sentences" icon="✍️" iconClassName="bg-emerald-50" open={open.grammar} onToggle={(id) => setOpen((p) => ({ ...p, [id]: !p[id] }))}>
            <div className="content-max rounded-lg border border-border bg-surface-2 p-5">
              <p className="mb-3 rounded-r-md border-l-4 border-accent bg-indigo-50 px-3 py-2 text-[15px]"><strong>The Rule:</strong> A left-branching sentence front-loads its modification before the main clause arrives. The modification comes first; the subject and verb come last. This creates anticipation — the reader holds a growing set of conditions in mind before the main event resolves.</p>
              <p>Last week you studied kernel sentences — the irreducible subject-verb core. This week you learn how sentences grow <em>leftward</em> from that core. A right-branching sentence extends after the main clause (the most natural English pattern); a left-branching sentence builds before it.</p>
              <div className="my-4 grid gap-3 sm:grid-cols-2"><div className="rounded bg-red-50 p-3 italic"><p className="font-module-ui mb-1 text-[10px] font-bold uppercase tracking-[0.08em] text-red-800 not-italic">Right-branching (natural, fast)</p>&quot;She finally sat down, exhausted and shaking.&quot;</div><div className="rounded bg-emerald-50 p-3 italic"><p className="font-module-ui mb-1 text-[10px] font-bold uppercase tracking-[0.08em] text-emerald-800 not-italic">Left-branching (anticipatory, elevated)</p>&quot;Exhausted and shaking, she finally sat down.&quot;</div></div>
              <div className="rounded-md border border-dashed border-gray-400 bg-white p-3"><p className="font-module-ui mb-2 text-[10px] font-bold uppercase tracking-[0.08em] text-muted">Practice Exercise</p><p>Write five left-branching sentences about your protagonist or about the scene you&apos;re currently working on. Let the modification be sensory: start with what the body feels, sees, or hears before arriving at the subject who feels, sees, or hears it.</p></div>
              <label className="font-module-ui mt-3 inline-flex min-h-11 items-center gap-2 text-sm text-muted"><input type="checkbox" checked={completed.grammar} onChange={(e) => markSection("grammar", e.target.checked)} className="h-4 w-4 accent-[rgb(var(--success))]" />Mark grammar complete</label>
            </div>
          </AccordionSection>

          <AccordionSection id="tip" title="Editorial Tip" subtitle="Circle Every Abstract Word" icon="🖊️" iconClassName="bg-pink-50" open={open.tip} onToggle={(id) => setOpen((p) => ({ ...p, [id]: !p[id] }))}>
            <div className="content-max rounded-r-lg border-l-4 border-accent2 bg-rose-50 p-5">
              <p>Go through this week&apos;s writing — and ideally, your Week 1 freewrite — and circle every abstract noun: <em>beauty, sadness, love, tension, importance, significance, loneliness, grief.</em> Don&apos;t edit yet. Just circle.</p>
              <p className="mt-3">Now count them. If you&apos;re like most beginning writers, you will find more than you expected, clustered around the moments of highest emotional intensity. This is the opposite of what you want. Abstract nouns are the writer&apos;s retreat from the hard work of finding the image that <em>earns</em> the emotion.</p>
              <p className="mt-3 italic text-muted">&quot;Write with nouns and verbs, not with adjectives and adverbs.&quot; — William Strunk Jr.</p>
              <label className="font-module-ui mt-3 inline-flex min-h-11 items-center gap-2 text-sm text-muted"><input type="checkbox" checked={completed.tip} onChange={(e) => markSection("tip", e.target.checked)} className="h-4 w-4 accent-[rgb(var(--success))]" />Mark tip complete</label>
            </div>
          </AccordionSection>

          <AccordionSection id="exercise" title="Writing Exercise" subtitle="The Sensory Inventory" icon="✏️" iconClassName="bg-blue-50" open={open.exercise} onToggle={(id) => setOpen((p) => ({ ...p, [id]: !p[id] }))}>
            <div className="content-max rounded-lg border border-border shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 bg-indigo-50 px-5 py-4"><h3 className="font-module-heading text-xl font-semibold text-accent">The Sensory Inventory</h3><span className="font-module-ui rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs font-semibold text-accent">Target: 700–900 words</span></div>
              <div className="space-y-4 bg-white p-5">
                <p>Choose a real or imagined room. It might be a childhood bedroom, a waiting room, a kitchen you love, a basement you fear. Spend five minutes in each sensory mode separately, writing one paragraph per sense. Then write a final synthesis paragraph.</p>
                <textarea value={draft} onChange={(e) => setDraft(e.target.value)} className="min-h-[160px] w-full rounded-lg border border-border bg-bg p-4 focus-ring" placeholder="Begin writing your sensory inventory here…" aria-label="Writing exercise draft area" />
                <div className="font-module-ui flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className={words >= 700 && words <= 900 ? "text-success" : "text-muted"}>{words} words</span>
                  <label className="inline-flex min-h-11 items-center gap-2 text-sm text-muted"><input type="checkbox" checked={completed.exercise} onChange={(e) => markSection("exercise", e.target.checked)} className="h-4 w-4 accent-[rgb(var(--success))]" />Mark exercise as complete</label>
                </div>
              </div>
            </div>
          </AccordionSection>

          <AccordionSection id="journal" title="Journal Prompt" subtitle="Private — not submitted" icon="📓" iconClassName="bg-amber-50" open={open.journal} onToggle={(id) => setOpen((p) => ({ ...p, [id]: !p[id] }))}>
            <div className="content-max rounded-lg border border-amber-200 bg-amber-50 p-6">
              <p className="font-module-heading text-2xl italic">What is a place from your past that your body remembers? Not what you remember <em>about</em> it — what your body remembers: the temperature, the quality of the light, the smell, the way the floor felt under your feet.</p>
              <p className="mt-3 text-sm italic text-muted">Write for 15 minutes without stopping. Let yourself go to one specific time in that place — not the place in general, but one particular afternoon or morning. Let the physical memory lead.</p>
              <p className="font-module-ui mt-3 inline-flex items-center gap-1 text-xs text-muted"><Lock className="h-3 w-3" />This entry is private and will not be submitted or shared.</p>
              <textarea className="mt-3 min-h-[120px] w-full rounded-lg border border-border bg-bg p-4 focus-ring" placeholder="Write freely for 15 minutes…" aria-label="Private journal entry" />
              <div className="mt-2 flex justify-end"><label className="font-module-ui inline-flex min-h-11 items-center gap-2 text-sm text-muted"><input type="checkbox" checked={completed.journal} onChange={(e) => markSection("journal", e.target.checked)} className="h-4 w-4 accent-[rgb(var(--success))]" />Mark as complete</label></div>
            </div>
          </AccordionSection>

          <AccordionSection id="ai" title="AI Workshop" subtitle="Sensory Detail Enrichment — Sudowrite or Claude" icon="🤖" iconClassName="bg-violet-50" open={open.ai} onToggle={(id) => setOpen((p) => ({ ...p, [id]: !p[id] }))}>
            <div className="content-max overflow-hidden rounded-lg border border-border">
              <div className="flex items-center gap-3 bg-gradient-to-r from-violet-50 to-indigo-50 px-5 py-4"><span className="font-module-ui rounded-full bg-violet-600 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-white">AI Exercise #2</span><span className="font-module-ui text-sm text-muted">Recommended: Sudowrite&apos;s Describe feature, or Claude</span></div>
              <div className="space-y-3 bg-white p-5">
                <p>The goal of this exercise is to discover what the AI sees that you didn&apos;t — not to replace your sensory imagination, but to identify your sensory blind spots.</p>
                <div className="rounded-lg bg-indigo-950 p-4"><p className="font-module-ui mb-2 text-[10px] uppercase tracking-[0.1em] text-indigo-300">Prompt to try with Claude</p><p className="text-sm italic text-indigo-100">&quot;Enrich this passage with sensory detail. The tone should be [your genre: literary fiction / memoir / screenplay]. Add smell and touch especially — these are the most underused senses in fiction. Do not add more than three additional details; make them precise and unexpected. Do not change my sentences — insert detail into them or add short phrases.&quot;</p></div>
                <div className="rounded border border-amber-200 bg-amber-50 p-3 text-sm"><strong className="font-module-ui mb-1 block text-xs uppercase tracking-[0.06em] text-amber-800">Ethical note</strong>The AI functions here as a first reader and sensory brainstorm partner — not as a ghost writer. Any detail you take from the AI&apos;s response should be flagged in your process notes.</div>
                <label className="font-module-ui inline-flex min-h-11 items-center gap-2 text-sm text-muted"><input type="checkbox" checked={completed.ai} onChange={(e) => markSection("ai", e.target.checked)} className="h-4 w-4 accent-[rgb(var(--success))]" />Mark AI workshop complete</label>
              </div>
            </div>
          </AccordionSection>

          <footer className="content-max mt-12 border-t border-border pt-8">
            <p className="font-module-ui mb-2 text-sm text-muted">Week 2 completion</p>
            <div className="font-module-ui mb-6 flex flex-wrap gap-3 text-xs text-muted">{sectionIds.map((id) => <span key={id} className="inline-flex items-center gap-1"><span className={`h-2 w-2 rounded-full ${completed[id] ? "bg-success" : "bg-border"}`} />{id === "ai" ? "AI Workshop" : id.charAt(0).toUpperCase() + id.slice(1)}</span>)}</div>
            <button type="button" onClick={completeWeek} className={`font-module-ui mb-6 inline-flex min-h-11 items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white ${celebrate ? "motion-safe:animate-[pop_.3s_ease]" : ""} ${doneCount === sectionIds.length ? "bg-success" : ""}`}><CheckCheck className="h-4 w-4" />{doneCount === sectionIds.length ? "Week 2 Complete!" : "Mark Week 2 as Complete"}</button>
            <div className="font-module-ui flex justify-between gap-4 text-sm"><Link href="/diy-mfa/year-one/week-1" className="inline-flex min-h-11 items-center rounded-md border border-accent px-4 no-underline">← Week 1: The Writing Practice</Link><Link href="/diy-mfa/year-one/week-3" className="inline-flex min-h-11 items-center rounded-md border border-accent px-4 no-underline">Week 3: Showing vs. Telling →</Link></div>
          </footer>
        </main>
      </div>
    </div>
  );
}
