"use client";

import { useState } from "react";

const promptA = `You are Reader A (Developmental Editor). I will paste my beat journal for a film (timestamps + beat verbs + notes). Task: 1) Identify the film’s core promise in one sentence. Then list 5 pieces of evidence from my notes. 2) Find the “Transmission” moments: name the 3 biggest turns (what changed in plan, stakes, or knowledge?). 3) Evaluate scene function: pick 3 beats that clearly do story work, and 2 beats that seem redundant or unclear. Explain why, using only what’s in my notes. 4) Build a simple map: Beginning (setup + promise), Middle (escalation), End (delivery). Where does pressure increase? 5) Give me 3 actionable journaling upgrades for next time (e.g., better labels, missing questions, clearer consequences). Important constraints: Do NOT write screenplay scenes. Do NOT invent missing plot. Ask up to 5 precise questions if my notes are incomplete.`;

const promptB = `You are Reader B (Resistant First Reader). I will paste my beat journal for a film (timestamps + beat verbs + notes). Task: 1) Tell me where you would get restless, confused, or skeptical if you only had my notes (name 3 specific timestamps or beat areas). 2) Name the Top 3 questions the film makes you ask. Which one is strongest, and which feels underfed? 3) Point out 2 “trust wins” (moments that feel earned) and 2 “trust leaks” (moments that feel convenient), based only on my journal. 4) Describe the film’s vibe in 3 blunt phrases, then translate each phrase into a writer-usable craft note (what caused that feeling?). 5) Give me 3 lessons I should steal for my own project’s Promise of the Premise (without copying story content). Important constraints: Do NOT write screenplay scenes. Do NOT add new plot beats. If my notes are vague, tell me exactly what to re-watch.`;

export default function CinemaWritingStudioPage() {
  const [copied, setCopied] = useState<"a" | "b" | null>(null);

  const copyPrompt = async (key: "a" | "b") => {
    await navigator.clipboard.writeText(key === "a" ? promptA : promptB);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;1,8..60,300;1,8..60,400&family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap');

        .cinema-studio-page {
          --ink: #1a1208;
          --parchment: #f5f0e8;
          --cream: #faf7f2;
          --rust: #c0392b;
          --gold: #b8860b;
          --faded: #7a6f5e;
          --highlight: #fff3cd;
          --reader-a: #2c4a6e;
          --reader-a-light: #e8f0f8;
          --reader-b: #4a2c2c;
          --reader-b-light: #f8e8e8;
          background-color: var(--cream);
          color: var(--ink);
          font-family: 'Source Serif 4', serif;
          font-size: 19px;
          line-height: 1.8;
        }

        .cinema-studio-page *, .cinema-studio-page *::before, .cinema-studio-page *::after { box-sizing: border-box; }
        .cinema-studio-page .masthead { background: var(--ink); color: var(--parchment); text-align: center; padding: 16px 24px 12px; font-family: 'Courier Prime', monospace; font-size: 11px; letter-spacing: 4px; text-transform: uppercase; border-bottom: 3px double var(--gold); }
        .cinema-studio-page .hero { background: var(--parchment); border-bottom: 3px double var(--ink); padding: 60px 24px 50px; text-align: center; }
        .cinema-studio-page .issue-tag { font-family: 'Courier Prime', monospace; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: var(--rust); margin-bottom: 20px; display: block; }
        .cinema-studio-page h1 { font-family: 'Playfair Display', serif; font-size: clamp(42px, 7vw, 80px); font-weight: 900; line-height: 1.05; letter-spacing: -1px; margin-bottom: 16px; }
        .cinema-studio-page .deck { font-family: 'Playfair Display', serif; font-style: italic; font-size: clamp(18px, 2.5vw, 24px); color: var(--faded); max-width: 580px; margin: 0 auto 32px; line-height: 1.5; }
        .cinema-studio-page .byline, .cinema-studio-page .post-date { font-family: 'Courier Prime', monospace; font-size: 12px; letter-spacing: 2px; color: var(--faded); text-transform: uppercase; }
        .cinema-studio-page .byline { border-top: 1px solid var(--faded); border-bottom: 1px solid var(--faded); display: inline-block; padding: 8px 24px; }
        .cinema-studio-page .post-date { margin-top: 16px; display: block; }
        .cinema-studio-page .article-wrapper { max-width: 720px; margin: 0 auto; padding: 60px 32px 80px; }
        .cinema-studio-page p { margin-bottom: 1.5em; }
        .cinema-studio-page h2 { font-family: 'Playfair Display', serif; font-size: 32px; margin: 2.5em 0 0.8em; line-height: 1.2; }
        .cinema-studio-page .pull-quote { padding: 24px 28px; background: var(--ink); color: var(--parchment); font-family: 'Playfair Display', serif; font-style: italic; font-size: 26px; margin: 2.5em 0; }
        .cinema-studio-page .scene-block, .cinema-studio-page .assignment-block, .cinema-studio-page .prompt-pair { margin: 2em 0; background: var(--parchment); border: 2px solid var(--ink); padding: 24px; box-shadow: 6px 6px 0 var(--ink); }
        .cinema-studio-page .block-label, .cinema-studio-page .prompt-pair-header, .cinema-studio-page .prompt-half-label { font-family: 'Courier Prime', monospace; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; }
        .cinema-studio-page .prompt-pair-header { background: var(--ink); color: var(--gold); margin: -24px -24px 24px; padding: 16px 24px; }
        .cinema-studio-page .prompt-text { font-family: 'Courier Prime', monospace; font-size: 13px; line-height: 1.8; white-space: pre-wrap; background: #fff; border-left: 4px solid var(--gold); padding: 14px; }
        .cinema-studio-page .copy-btn { margin-top: 10px; font-family: 'Courier Prime', monospace; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; padding: 8px 16px; border: 2px solid var(--ink); background: var(--parchment); cursor: pointer; }
        .cinema-studio-page .reader-intro { margin: 2em 0; display: grid; grid-template-columns: 1fr 1fr; border: 2px solid var(--ink); box-shadow: 6px 6px 0 var(--ink); }
        .cinema-studio-page .reader-card { padding: 20px; }
        .cinema-studio-page .reader-card:first-child { border-right: 2px solid var(--ink); background: var(--reader-a-light); }
        .cinema-studio-page .reader-card:last-child { background: var(--reader-b-light); }
        .cinema-studio-page .checklist { margin: 2em 0; padding: 22px; background: white; border: 2px dashed rgba(0,0,0,0.25); font-family: 'Courier Prime', monospace; font-size: 12px; line-height: 1.9; }
        .cinema-studio-page footer { background: var(--ink); color: var(--parchment); text-align: center; padding: 40px 24px; font-family: 'Courier Prime', monospace; font-size: 12px; letter-spacing: 2px; border-top: 3px double var(--gold); }
        @media (max-width: 600px) { .cinema-studio-page .reader-intro { grid-template-columns: 1fr; } .cinema-studio-page .reader-card:first-child { border-right: none; border-bottom: 2px solid var(--ink); } }
      `}</style>
      <main className="cinema-studio-page">
        <div className="masthead">AI &amp; THE CRAFT · FEATURE LAB · WEEK 1 OF 36</div>
        <div className="hero">
          <span className="issue-tag">FEATURE LAB</span>
          <h1>Film Language for Writers</h1>
          <p className="deck">Learn to watch like a craftsperson: track beats, turns, and the movie’s promises—without writing a single screenplay page.</p>
          <span className="byline">By AI &amp; The Craft — Feature Lab</span>
          <span className="post-date">March 3, 2026</span>
        </div>
        <div className="article-wrapper">
          <p>This week you’re not “watching movies.” You’re reverse-engineering them. You’ll treat each film like a machine built to move an audience: what it shows you, when it shows you, what it hides, what it repeats, and what it dares you to expect.</p>
          <div className="pull-quote">The law of Week 1: <strong>Every choice is a sentence.</strong> Framing, cutting, sound, and performance are all writing—just in a different alphabet.</div>
          <h2>The Objective</h2>
          <div className="assignment-block"><div className="block-label">This Week’s Win Condition</div><ul><li><strong>Primary outcome:</strong> Beat journal for two films + “promise of the premise” notes for each.</li><li><strong>Secondary outcome:</strong> Name the film-language tool that creates each effect.</li><li><strong>Upgrade outcome (optional):</strong> A one-scene micro-map showing where attention shifts and why.</li></ul></div>
          <h2>AI &amp; The Craft — The Two Readers</h2>
          <div className="reader-intro"><div className="reader-card"><div className="block-label">Reader A</div><strong>The Developmental Editor</strong><p>Craft-focused. Reads for structure, function, coherence, and story mechanics.</p></div><div className="reader-card"><div className="block-label">Reader B</div><strong>The Resistant First Reader</strong><p>Experience-focused. Reads for momentum, attention, trust, and emotional clarity.</p></div></div>
          <div className="prompt-pair"><div className="prompt-pair-header">The Two Prompts — Paste Your Film Journal Before Each One</div><div className="prompt-half"><div className="prompt-half-label">Reader A — Developmental Editor</div><div className="prompt-text">{promptA}</div><button type="button" className="copy-btn" onClick={() => copyPrompt("a")}>{copied === "a" ? "Copied ✓" : "Copy Prompt A"}</button></div><div className="prompt-half"><div className="prompt-half-label">Reader B — Resistant First Reader</div><div className="prompt-text">{promptB}</div><button type="button" className="copy-btn" onClick={() => copyPrompt("b")}>{copied === "b" ? "Copied ✓" : "Copy Prompt B"}</button></div></div>
          <h2>Deliverables &amp; Checklist</h2>
          <div className="checklist">[ ] I completed the writing deliverable.<br/>[ ] I watched two films and journaled with the lens.<br/>[ ] I ran Two Readers and made at least one conscious decision based on disagreement.<br/>[ ] I did a Budget Dial pass (reduce cost or justify cost).<br/>[ ] I saved a new version (date + draft number).</div>
        </div>
        <footer><p>AI &amp; THE CRAFT · FEATURE LAB</p><p style={{ marginTop: 8, opacity: 0.5 }}>Write it human. Use AI for thinking.</p></footer>
      </main>
    </>
  );
}
