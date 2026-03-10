/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";

export default function CinemaWritingStudioWeekOnePage() {
  const [copiedPrompt, setCopiedPrompt] = useState<"prompt1" | "prompt2" | null>(null);

  const copyPromptBlock = async (id: "prompt1" | "prompt2") => {
    const element = document.getElementById(id);
    if (!element) return;

    const text = element.innerText || element.textContent || "";
    await navigator.clipboard.writeText(text);
    setCopiedPrompt(id);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;1,8..60,300;1,8..60,400&family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap');

        :root {
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
          --check-green: #2d6a4f;
          --check-bg: #e8f5e9;
        }

        .movie-on-the-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .movie-on-the-page {
          background: var(--cream);
          color: var(--ink);
          font-family: 'Source Serif 4', serif;
          font-size: 19px;
          line-height: 1.8;
        }

        .movie-on-the-page::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 1000;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
        }

        .movie-on-the-page .masthead {
          background: var(--ink);
          color: var(--parchment);
          text-align: center;
          padding: 16px 24px 12px;
          font-family: 'Courier Prime', monospace;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          border-bottom: 3px double var(--gold);
        }

        .movie-on-the-page .hero {
          background: var(--parchment);
          border-bottom: 3px double var(--ink);
          padding: 60px 24px 50px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .movie-on-the-page .hero::before {
          content: '≠';
          position: absolute;
          font-size: 460px;
          color: rgba(0, 0, 0, 0.025);
          top: -60px;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          pointer-events: none;
        }

        .movie-on-the-page .issue-tag {
          font-family: 'Courier Prime', monospace;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--rust);
          margin-bottom: 20px;
          display: block;
        }

        .movie-on-the-page h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(42px, 7vw, 80px);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -1px;
          margin-bottom: 16px;
        }

        .movie-on-the-page h1 em {
          font-style: italic;
          color: var(--rust);
        }

        .movie-on-the-page .deck {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: clamp(18px, 2.5vw, 24px);
          color: var(--faded);
          max-width: 620px;
          margin: 0 auto 28px;
          line-height: 1.5;
        }

        .movie-on-the-page .byline {
          font-family: 'Courier Prime', monospace;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--faded);
          border-top: 1px solid var(--faded);
          border-bottom: 1px solid var(--faded);
          display: inline-block;
          padding: 8px 24px;
        }

        .movie-on-the-page .post-date {
          font-family: 'Courier Prime', monospace;
          font-size: 11px;
          letter-spacing: 2px;
          color: var(--faded);
          margin-top: 16px;
          display: block;
        }

        .movie-on-the-page .article-wrapper {
          max-width: 760px;
          margin: 0 auto;
          padding: 50px 32px 90px;
        }

        .movie-on-the-page .drop-cap::first-letter {
          font-family: 'Playfair Display', serif;
          font-size: 92px;
          font-weight: 900;
          float: left;
          line-height: 0.75;
          margin: 8px 12px 0 -4px;
          color: var(--rust);
        }

        .movie-on-the-page p {
          margin-bottom: 1.2em;
        }

        .movie-on-the-page h2 {
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          font-weight: 700;
          margin: 2.2em 0 0.8em;
          line-height: 1.2;
        }

        .movie-on-the-page .pull-quote {
          margin: 2.2em -32px;
          padding: 32px 48px;
          background: var(--ink);
          color: var(--parchment);
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 26px;
          line-height: 1.4;
          text-align: center;
          position: relative;
        }

        .movie-on-the-page .pull-quote::before,
        .movie-on-the-page .pull-quote::after {
          content: '\\201C';
          font-size: 80px;
          color: var(--gold);
          position: absolute;
          line-height: 1;
          font-style: normal;
        }

        .movie-on-the-page .pull-quote::before {
          top: 12px;
          left: 16px;
        }

        .movie-on-the-page .pull-quote::after {
          content: '\\201D';
          bottom: -16px;
          right: 16px;
        }

        .movie-on-the-page .ornament {
          text-align: center;
          color: var(--gold);
          font-size: 28px;
          margin: 2.2em 0;
          letter-spacing: 12px;
        }

        .movie-on-the-page .block {
          margin: 2em 0;
          background: var(--parchment);
          border: 2px solid var(--ink);
          padding: 26px 30px;
          box-shadow: 6px 6px 0 var(--ink);
        }

        .movie-on-the-page .block-label {
          font-family: 'Courier Prime', monospace;
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--faded);
          margin-bottom: 12px;
        }

        .movie-on-the-page .meta-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          border: 2px solid var(--ink);
          box-shadow: 6px 6px 0 var(--ink);
          overflow: hidden;
          margin: 2em 0;
        }

        .movie-on-the-page .meta-cell {
          padding: 16px 18px;
          background: var(--parchment);
          border-right: 2px solid var(--ink);
          border-bottom: 2px solid var(--ink);
        }

        .movie-on-the-page .meta-cell:nth-child(3n) {
          border-right: none;
        }

        .movie-on-the-page .meta-key {
          font-family: 'Courier Prime', monospace;
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--faded);
          margin-bottom: 6px;
        }

        .movie-on-the-page .meta-val {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.2;
        }

        .movie-on-the-page .principle {
          margin: 2em 0;
          padding: 22px 26px;
          background: var(--highlight);
          border-left: 5px solid var(--gold);
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 20px;
          line-height: 1.6;
        }

        .movie-on-the-page .mini-example {
          font-family: 'Courier Prime', monospace;
          font-size: 13px;
          line-height: 1.85;
          background: white;
          border: 2px dashed rgba(0, 0, 0, 0.18);
          padding: 14px 16px;
          margin: 1.2em 0;
          white-space: pre-wrap;
        }

        .movie-on-the-page .reader-intro {
          display: grid;
          grid-template-columns: 1fr 1fr;
          margin: 2.2em 0;
          border: 2px solid var(--ink);
          box-shadow: 6px 6px 0 var(--ink);
        }

        .movie-on-the-page .reader-card {
          padding: 24px;
        }

        .movie-on-the-page .reader-card:first-child {
          border-right: 2px solid var(--ink);
          background: var(--reader-a-light);
        }

        .movie-on-the-page .reader-card:last-child {
          background: var(--reader-b-light);
        }

        .movie-on-the-page .reader-name {
          font-family: 'Courier Prime', monospace;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .movie-on-the-page .reader-card:first-child .reader-name {
          color: var(--reader-a);
        }

        .movie-on-the-page .reader-card:last-child .reader-name {
          color: var(--reader-b);
        }

        .movie-on-the-page .reader-title {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .movie-on-the-page .reader-desc {
          font-size: 15px;
          line-height: 1.7;
          color: var(--faded);
        }

        .movie-on-the-page .prompt-pair {
          margin: 2.2em 0;
          border: 2px solid var(--ink);
          box-shadow: 6px 6px 0 var(--ink);
        }

        .movie-on-the-page .prompt-pair-header {
          padding: 16px 24px;
          background: var(--ink);
          font-family: 'Courier Prime', monospace;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gold);
          border-bottom: 2px solid var(--ink);
        }

        .movie-on-the-page .prompt-half {
          padding: 22px 26px;
          border-bottom: 2px solid var(--ink);
        }

        .movie-on-the-page .prompt-half:last-child {
          border-bottom: none;
        }

        .movie-on-the-page .prompt-half-label {
          font-family: 'Courier Prime', monospace;
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .movie-on-the-page .prompt-text {
          font-family: 'Courier Prime', monospace;
          font-size: 13px;
          line-height: 1.9;
          background: var(--parchment);
          border-left: 4px solid var(--gold);
          padding: 14px 18px;
          white-space: pre-wrap;
          color: var(--ink);
        }

        .movie-on-the-page .copy-btn {
          font-family: 'Courier Prime', monospace;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 8px 16px;
          border: 2px solid var(--ink);
          background: var(--parchment);
          cursor: pointer;
          transition: all 0.15s;
          border-radius: 2px;
          display: inline-block;
          margin-top: 10px;
        }

        .movie-on-the-page .copy-btn:hover {
          background: var(--ink);
          color: var(--parchment);
        }

        .movie-on-the-page .copy-btn.copied {
          background: var(--gold);
          border-color: var(--gold);
          color: white;
        }

        .movie-on-the-page .self-check {
          margin: 2em 0;
          background: var(--check-bg);
          border: 2px solid var(--check-green);
          padding: 26px 30px;
          box-shadow: 6px 6px 0 var(--check-green);
        }

        .movie-on-the-page .self-check-label {
          font-family: 'Courier Prime', monospace;
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--check-green);
          margin-bottom: 12px;
        }

        .movie-on-the-page .self-check-item {
          font-size: 17px;
          line-height: 1.7;
          margin-bottom: 8px;
          padding-left: 28px;
          position: relative;
        }

        .movie-on-the-page .self-check-item::before {
          content: '□';
          position: absolute;
          left: 0;
          color: var(--check-green);
          font-weight: bold;
        }

        .movie-on-the-page .portfolio {
          margin: 2em 0;
          background: var(--parchment);
          border: 2px solid var(--faded);
          padding: 26px 30px;
        }

        .movie-on-the-page .portfolio-label {
          font-family: 'Courier Prime', monospace;
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--faded);
          margin-bottom: 12px;
        }

        .movie-on-the-page .portfolio-item {
          font-family: 'Courier Prime', monospace;
          font-size: 13px;
          line-height: 2;
          color: var(--faded);
        }

        .movie-on-the-page .portfolio-item.done::before {
          content: '✓ ';
          color: var(--check-green);
        }

        .movie-on-the-page .portfolio-item.current {
          color: var(--ink);
          font-weight: bold;
        }

        .movie-on-the-page .portfolio-item.current::before {
          content: '→ ';
          color: var(--rust);
        }

        .movie-on-the-page .portfolio-item.upcoming::before {
          content: '○ ';
          color: var(--faded);
        }

        .movie-on-the-page footer {
          background: var(--ink);
          color: var(--parchment);
          text-align: center;
          padding: 40px 24px;
          font-family: 'Courier Prime', monospace;
          font-size: 12px;
          letter-spacing: 2px;
          border-top: 3px double var(--gold);
        }

        .movie-on-the-page footer p {
          margin-bottom: 0;
          font-size: 12px;
        }

        @media (max-width: 700px) {
          .movie-on-the-page .meta-grid {
            grid-template-columns: 1fr;
          }

          .movie-on-the-page .meta-cell {
            border-right: none;
          }

          .movie-on-the-page .reader-intro {
            grid-template-columns: 1fr;
          }

          .movie-on-the-page .reader-card:first-child {
            border-right: none;
            border-bottom: 2px solid var(--ink);
          }

          .movie-on-the-page .pull-quote {
            margin: 2.2em 0;
          }
        }
      `}</style>

      <main className="movie-on-the-page">
        <div className="masthead">THE MOVIE ON THE PAGE · WEEK 1 OF 32 · CINEMA FOUNDATIONS</div>

        <div className="hero">
          <span className="issue-tag">SCREENWRITING STUDIO</span>
          <h1>
            Film Language
            <br />
            <em>for Writers</em>
          </h1>
          <p className="deck">
            Before you write a single scene heading, learn to see stories the way a camera does — in beats, turns, and promises.
          </p>
          <span className="byline">The Movie on the Page</span>
          <span className="post-date">Phase 0 · Cinema Foundations · Week 1 of 4</span>
        </div>

        <div className="article-wrapper">
          <div className="meta-grid">
            <div className="meta-cell">
              <div className="meta-key">Commitment</div>
              <div className="meta-val">6–8 hours</div>
            </div>
            <div className="meta-cell">
              <div className="meta-key">Craft Focus</div>
              <div className="meta-val">Beats, Turns &amp; the Promise of the Premise</div>
            </div>
            <div className="meta-cell">
              <div className="meta-key">Cinema Lens</div>
              <div className="meta-val">What the audience tracks without knowing it</div>
            </div>
            <div className="meta-cell">
              <div className="meta-key">Page Craft</div>
              <div className="meta-val">Slug lines: master scenes vs. secondary scenes</div>
            </div>
            <div className="meta-cell">
              <div className="meta-key">Exercise Output</div>
              <div className="meta-val">2 beat journals + premise notes (4–6 pages handwritten or typed)</div>
            </div>
            <div className="meta-cell">
              <div className="meta-key">Budget Dial</div>
              <div className="meta-val">All tiers (pre-project)</div>
            </div>
          </div>

          <p className="drop-cap">
            Most writing courses start with words. This one starts with pictures. For the next four weeks, you won&apos;t write a
            single screenplay page. You&apos;ll watch films — but not the way you&apos;ve been watching them. You&apos;ll watch them the way a
            writer watches: counting beats, tracking turns, measuring the distance between what a film promises in its first ten
            minutes and what it delivers in its last ten. This is the foundation everything else rests on. If you can&apos;t see
            structure in a finished film, you have no chance of building it in a blank document.
          </p>

          <div className="pull-quote">
            A beat is the smallest unit of change in a story. If nothing changes — in knowledge, in power, in feeling — no beat
            has occurred, and the audience is waiting.
          </div>

          <h2>Craft Lecture</h2>
          <p>
            Three terms will organize your thinking for the rest of this curriculum: <strong>beats</strong>, <strong>turns</strong>,
            and <strong>the promise of the premise</strong>. They operate at different scales — beats are micro, turns are
            structural, and the promise is the macro contract between the film and its audience — but they all answer the same
            question: <em>why does the audience stay in the chair?</em>
          </p>
          <p>
            <strong>Beats.</strong> A beat is the smallest measurable unit of narrative change. Not a line of dialogue. Not a
            camera move. A shift. Something was one way; now it is different. A character who didn&apos;t know something now knows it.
            A person who had power just lost it. An emotion that was buried just surfaced. Every scene is made of beats, stacked
            in sequence, each one tilting the ground slightly so the next one lands differently. When you watch a scene that feels
            "flat" or "dead," the problem is almost always that the beats aren&apos;t progressing — they&apos;re circling. The same
            information is being restated, the same emotion re-performed, without anything actually changing.
          </p>
          <p>
            Count the beats in any scene that grips you, and you&apos;ll find a specific pattern: each one raises the stakes or shifts
            the dynamic by a small but measurable increment. A scene with three beats moves faster than a scene with twelve, but
            the twelve-beat scene can feel faster if every beat escalates. Pace isn&apos;t about clock time. It&apos;s about the rate of
            change per unit of audience attention.
          </p>
          <p>
            <strong>Turns.</strong> A turn is a beat with structural consequences. Regular beats shift the dynamics within a scene.
            A turn shifts the trajectory of the story itself. After a turn, the character cannot go back to the way things were —
            not because of willpower, but because the ground has moved. The most common structural turns in feature films occur at
            the end of Act I (the character enters a new situation they can&apos;t easily leave), the midpoint (the rules of the game
            change), and the climax (the central question gets answered). But turns can happen anywhere. The hallmark of a turn is
            irreversibility: if you could remove it and the story would continue on its previous path, it wasn&apos;t a turn. It was
            just a loud beat.
          </p>
          <p>
            The difference matters because turns are what audiences remember. Beats create the texture of a scene. Turns create
            the shape of a story. When someone tells you about a film over dinner, they&apos;re recounting the turns. When a critic
            says a film "sagged in the middle," they&apos;re saying the middle lacked turns — the beats kept moving, but the story&apos;s
            trajectory didn&apos;t change.
          </p>
          <p>
            <strong>The Promise of the Premise.</strong> Every film, in its opening minutes, makes a contract with the audience.
            This contract isn&apos;t stated. It&apos;s felt. The tone, the genre signals, the world rules, the central character&apos;s
            situation — all of these combine into a promise: <em>this is the kind of experience you&apos;re going to have.</em> A film
            that opens with a wisecracking detective finding a body in a locked room is promising a certain kind of pleasure. A
            film that opens with a child walking alone through a war-ruined city is promising a different one. Neither promise is
            better. But breaking the promise — delivering a slapstick comedy after the war-ruined city, or a grueling tragedy
            after the wisecracking detective — is the fastest way to lose an audience&apos;s trust.
          </p>
          <p>
            The promise of the premise isn&apos;t just about genre. It&apos;s about the specific question the film is raising. What is the
            central tension that makes the audience lean forward? A film about a surgeon who discovers she&apos;s been operating on the
            wrong patients promises an investigation — of the system, of her own complicity, of how deep the error goes. A film
            about a teenager who can hear other people&apos;s thoughts promises an exploration — of intimacy, of isolation, of what
            happens when the boundary between self and other dissolves. The premise doesn&apos;t just tell you what the movie is about.
            It tells you what kind of satisfaction the ending must deliver.
          </p>
          <p>
            Your job, this week, is to develop the habit of identifying these three elements while watching. Not after watching —
            while. You need to train your perception so that you&apos;re tracking beats in real time, recognizing turns as they happen,
            and articulating the promise within the first fifteen minutes. This is the screenwriter&apos;s version of ear training.
            Musicians learn to hear intervals before they learn to write melodies. You&apos;re going to learn to see structure before
            you learn to build it.
          </p>
          <p>
            One warning: this will temporarily ruin your ability to watch movies for pleasure. You&apos;ll start noticing the
            machinery. A scene that used to make you cry will now make you think, "That&apos;s a three-beat escalation landing on a
            status reversal." This is normal. The pleasure comes back — but it comes back deeper, because you&apos;ll start
            appreciating not just what a film makes you feel, but <em>how</em> it engineers that feeling. That&apos;s the difference
            between being an audience member and being a craftsperson.
          </p>

          <div className="principle">
            <strong>Craft Principle:</strong> A scene without a beat is dead air; a story without a turn is a treadmill; a film
            without a kept promise is a betrayal.
          </div>

          <p>Here are two micro-examples to anchor the concepts before you start watching.</p>

          <div className="mini-example">
            <strong>MICRO-EXAMPLE 1: BEATS IN A TWO-PERSON SCENE</strong>
            {`\n\nINT. HOSPITAL CORRIDOR - NIGHT\n\nA doctor stops a woman outside the ICU. He holds a clipboard.\n\nBeat 1 (Information): He tells her the surgery went well.\n   → She exhales. Tension drops.\n\nBeat 2 (Complication): He adds there was unexpected damage to the surrounding tissue.\n   → She stiffens. Tension rises past its original level.\n\nBeat 3 (Status shift): She asks if he's the one who caused it. He doesn't answer.\n   → Power transfers. She now controls the conversation.\n\nBeat 4 (Turn): She tells him she's his supervisor's wife.\n   → Irreversible. The scene can't go back to a routine post-op briefing.\n\nThree beats built pressure. The fourth was a turn — it changed\nnot just the scene, but what happens next in the story.`}
          </div>

          <div className="mini-example">
            <strong>MICRO-EXAMPLE 2: PROMISE OF THE PREMISE — TWO OPENINGS</strong>
            {`\n\nOPENING A:\nA woman in a rumpled suit sits in an idling car outside a\ncourthouse at dawn. She's rehearsing testimony into a recorder,\nstopping, rewinding, changing words. The recorder clicks. She\nlights a cigarette with shaking hands.\n\nPROMISE: Precision under pressure. Legal jeopardy. A character\nwho edits herself. The audience expects a procedural unraveling\n— they'll be watching for every word she chooses and why.\n\nOPENING B:\nA teenager sits cross-legged on the roof of a moving freight\ntrain, drawing in a sketchbook. The landscape is desert. She\nhasn't looked up in twenty miles. The drawing is of a face she\nkeeps erasing and redrawing.\n\nPROMISE: Freedom and obsession. A character in motion who is\nemotionally stuck. The audience expects a journey narrative\n— but the real movement will be internal, not geographic.`}
          </div>

          <h2>Page Craft</h2>
          <div className="block">
            <div className="block-label">The Micro-Skill: Slug Lines — Master Scenes vs. Secondary Scenes</div>
            <p>
              A slug line (also called a scene heading) tells the reader three things: whether we&apos;re inside or outside, where we
              are, and when it is. The standard format is <strong>INT.</strong> or <strong>EXT.</strong>, followed by the
              location, followed by the time of day, all in caps. That&apos;s it. No camera directions, no mood descriptions, no music
              cues.
            </p>
            <p>
              But there&apos;s a distinction most beginners miss: the difference between a <strong>master scene heading</strong> and a
              <strong> secondary scene heading</strong> (sometimes called a "sub-slug"). A master heading establishes a new
              location. A secondary heading moves the reader within an already-established location without implying a full scene
              break. Use a master heading when you&apos;re moving the audience to a genuinely new space. Use a secondary heading —
              just the sub-location in caps, no INT./EXT. — when you&apos;re shifting attention within the same space.
            </p>

            <div className="mini-example">
              <strong>MASTER HEADING — new location:</strong>
              {`\n\nINT. GRAND CENTRAL TERMINAL - MAIN CONCOURSE - DAY\n\nThousands of commuters flow beneath the painted ceiling.\n\n`}<strong>SECONDARY HEADING — movement within the same location:</strong>
              {`\n\nINFORMATION BOOTH\n\nA clerk peers over half-moon glasses at a woman with no luggage.\n\nTRACK 17\n\nThe woman runs. Her shoes echo off tile.`}
            </div>

            <p>
              The secondary headings don&apos;t repeat INT. or the time of day — that information hasn&apos;t changed. They just reorient
              the reader within the established space. This keeps the page lean and maintains visual flow. A common amateur
              mistake is writing a full master heading every time the camera would move, which clutters the page and signals to a
              reader that the writer is thinking in shots rather than scenes.
            </p>
            <p>
              <strong>10-minute drill:</strong> Pick any public space you know well (a grocery store, a gym, a library, an
              airport terminal). Write one master scene heading for the overall location, then write four secondary headings for
              distinct areas within it. Under each secondary heading, write one sentence of action — just enough to establish
              who&apos;s there and what they&apos;re doing. Total output: five slug lines, five action sentences. Time yourself. Stop at
              ten minutes regardless of quality.
            </p>
          </div>

          <h2>Core Reading</h2>
          <div className="block">
            <div className="block-label">Film Viewing — Week 1</div>
            <p>
              <strong>Assignment:</strong> Watch 2 feature films this week. Choose from the curated list below. Watch each one
              twice if possible — once for the experience, once with a notebook.
            </p>
            <p>
              <strong>Curated Film List (choose 2):</strong> <em>Rear Window</em> (1954), <em>The Silence of the Lambs</em>
              (1991), <em>Moonlight</em> (2016), <em>Parasite</em> (2019), <em>No Country for Old Men</em> (2007), <em>Get Out</em>
              (2017), <em>The Apartment</em> (1960), <em>Arrival</em> (2016), <em>Do the Right Thing</em> (1989), <em>Pan&apos;s
              Labyrinth</em> (2006).
            </p>
            <p>
              These films were chosen because each one makes its structural machinery visible if you know where to look. They span
              genres, decades, and tonal registers, but every one of them has clearly identifiable beats, unmistakable turns, and
              a promise of the premise that&apos;s established within the first ten minutes.
            </p>
            <p>
              <strong>Reading Lens</strong> (track these while watching):
            </p>
            <p>
              1. Where do you feel the first major turn? What changed that can&apos;t be undone? 2. Identify the promise of the
              premise: what experience is the film selling in its opening minutes? 3. Pick one scene that gripped you and count
              its beats — how many shifts in information, power, or emotion occur? 4. Notice the pacing: where does the film
              speed up (shorter beats, faster cuts) and where does it slow down (longer beats, held shots)?
            </p>
            <p>
              <strong>Journal Prompts:</strong>
            </p>
            <p>
              1. What did the first five minutes promise you? Did the film keep that promise? 2. Identify the three biggest turns.
              For each: what was true before the turn, and what became true after? 3. Find a scene where you lost interest. What
              was happening at the beat level — were beats repeating rather than progressing? 4. If you had to describe the
              film&apos;s premise in one sentence that captures the central tension (not the plot), what would it be? 5. Compare the
              two films: which one kept its promise more consistently? Which one had sharper turns? 6. Where did the filmmaker
              surprise you by violating your expectations — and did that violation feel earned or cheap?
            </p>
          </div>

          <h2>Writing Exercise</h2>
          <div className="block">
            <div className="block-label">Your Project Progress</div>
            <p>
              <strong>Deliverable:</strong> Beat journal for 2 films + "promise of the premise" notes.
            </p>
            <p>
              <strong>Constraints:</strong> For each film, produce: (a) a beat journal covering at least 5 key scenes,
              identifying the beats within each scene and marking which beats are turns with story-level consequences; (b) a
              "promise of the premise" paragraph — 100–200 words describing what the film promises in its opening, whether and how
              it delivers, and where (if anywhere) it breaks the contract. Total output: 4–6 pages handwritten or 2–3 pages
              typed, per film.
            </p>
            <p>
              <strong>Quality bar:</strong> Each scene entry names the specific shift (not just "tension rises" — what information
              changed? whose status moved? what emotion surfaced or was suppressed?). The promise paragraph identifies a specific
              tension or question, not just a genre label. "It&apos;s a thriller" is not a premise. "A man who prides himself on
              control discovers the one thing he can&apos;t control is already inside his house" is a premise.
            </p>
            <p>
              <strong>Estimated time:</strong> 2–3 hours per film (including viewing and journaling).
            </p>
            <p>
              <strong>Human Draft Reminder:</strong> You write the pages. AI helps you think, test, and decide.
            </p>
          </div>

          <h2>AI Workshop</h2>
          <div className="block">
            <div className="block-label">Phase 0: Learning to Ask</div>
            <p>
              This is Week 1. You don&apos;t have screenplay pages yet — you don&apos;t even have a premise. So your relationship with AI
              this month is purely observational: you&apos;re learning to use AI as a thinking partner for film analysis, not as a
              writing tool. The goal is to build the habit of asking precise questions about craft, so that when you do start
              writing, your AI prompts will be sharp enough to produce useful feedback.
            </p>
            <p>
              This week&apos;s focus: using AI to pressure-test your own observations about the films you watched. You&apos;ve written your
              beat journal. Now use these prompts to see if AI identifies the same structural moments you did — and where it
              disagrees, figure out who&apos;s right and why.
            </p>
          </div>

          <div className="prompt-pair">
            <div className="prompt-pair-header">Observation Prompt 1: Beat Identification Check</div>
            <div className="prompt-half">
              <div className="prompt-half-label">Prompt</div>
              <div className="prompt-text" id="prompt1">{`I just watched [FILM TITLE] and I'm studying scene construction. Here's a scene I analyzed — I identified [X] beats in it:\n\n[Paste your beat breakdown of one scene from your journal.]\n\nTwo questions:\n1. Did I miss any beats — moments where information, power, or emotion shifted that I didn't catch?\n2. Which of these beats would you classify as a TURN (a beat with irreversible story-level consequences) versus a regular beat (a shift that stays contained within the scene)?\n\nDon't summarize the film for me. Just evaluate my analysis.`}</div>
              <button
                className={`copy-btn ${copiedPrompt === "prompt1" ? "copied" : ""}`}
                onClick={() => copyPromptBlock("prompt1")}
                type="button"
              >
                {copiedPrompt === "prompt1" ? "Copied ✓" : "Copy Prompt"}
              </button>
            </div>
          </div>

          <div className="prompt-pair">
            <div className="prompt-pair-header">Observation Prompt 2: Promise of the Premise Test</div>
            <div className="prompt-half">
              <div className="prompt-half-label">Prompt</div>
              <div className="prompt-text" id="prompt2">{`I watched [FILM TITLE] and I'm trying to articulate its "promise of the premise" — the contract the film makes with the audience in its opening minutes. Here's my attempt:\n\n[Paste your promise-of-the-premise paragraph.]\n\nThree questions:\n1. Is my description specific enough, or am I just naming a genre? (If I wrote something like "it's a tense thriller," push me to be more precise about what specific tension drives the film.)\n2. Based on how the film actually unfolds, does the ending deliver on the promise I identified? Or did the film actually promise something different than what I described?\n3. Was there a moment where the film risked breaking its promise? What happened?\n\nDon't write my analysis for me. Challenge what I wrote.`}</div>
              <button
                className={`copy-btn ${copiedPrompt === "prompt2" ? "copied" : ""}`}
                onClick={() => copyPromptBlock("prompt2")}
                type="button"
              >
                {copiedPrompt === "prompt2" ? "Copied ✓" : "Copy Prompt"}
              </button>
            </div>
          </div>

          <div className="block">
            <div className="block-label">How to Use These Prompts</div>
            <p>
              Write your beat journal and premise notes <em>first</em>, by hand or in a document, before opening any AI tool. The
              point is to develop your own perceptual muscles. Only after you&apos;ve committed your observations to paper should you
              use the prompts above to check your work. Treat the AI&apos;s response as a second opinion, not an answer key. If it
              disagrees with your analysis, don&apos;t automatically defer — examine whether its reasoning is stronger than yours, and
              note the disagreement in your journal. These disagreements are where you learn the most.
            </p>
          </div>

          <h2>Student Self-Check</h2>
          <div className="self-check">
            <div className="self-check-label">Before You Move On</div>
            <div className="self-check-item">
              For each scene in your beat journal, did you name the <em>specific</em> shift (information, power, emotion) — or did
              you write vague labels like "tension builds"?
            </div>
            <div className="self-check-item">
              Can you point to at least one turn per film that is genuinely irreversible — where the story could not continue on
              its prior trajectory?
            </div>
            <div className="self-check-item">
              Does your "promise of the premise" paragraph identify a specific tension or question, not just a genre category?
            </div>
            <div className="self-check-item">
              Did you write your journal entries before consulting AI — using the prompts to check your work, not to generate it?
            </div>
            <div className="self-check-item">
              Could you explain, in conversation, why you chose these two films and what you learned by watching them back-to-back?
            </div>
          </div>

          <h2>Budget Dial</h2>
          <div className="block">
            <div className="block-label">Production Reality Check</div>
            <p>
              <strong>Budget tier this week:</strong> All tiers. You haven&apos;t chosen a budget tier yet — that&apos;s Week 4&apos;s
              deliverable. But start noticing production cost while you watch.
            </p>
            <p>
              <strong>Top 3 cost drivers to notice this week:</strong> 1. Number of locations (every new location costs money to
              secure, dress, and light). 2. Cast size (how many speaking roles appear on screen). 3. Time of day — night shoots
              cost more than day shoots, every time, everywhere.
            </p>
            <p>
              <strong>Cheaper equivalent:</strong> A scene set in a crowded restaurant with 40 extras and a live band can deliver
              the same narrative beat as a scene set in a quiet diner with one waitress — if the beats are doing the work instead
              of the production design.
            </p>
            <p>
              <strong>Worth-it spend:</strong> One perfect location that appears in multiple scenes throughout the film. A single,
              evocative space that the audience returns to is cheaper per minute than five forgettable locations used once each —
              and it builds visual continuity that strengthens the story.
            </p>
          </div>

          <h2>Editorial Tip</h2>
          <div className="block">
            <div className="block-label">The Reader&apos;s Eye</div>
            <p>
              When a professional script reader picks up your screenplay, they will read the first page in about thirty seconds.
              In that time, they&apos;re making three unconscious judgments: does this writer understand formatting (are the slug lines
              clean?), does this writer understand economy (is the action description lean?), and does this writer understand
              momentum (does something change on page one?). You can lose a reader on any of these three counts before your story
              even begins. The first page is an audition. Treat it as one.
            </p>
          </div>

          <h2>Journal Prompt</h2>
          <div className="block">
            <div className="block-label">Reflection</div>
            <p>
              When you watched these films with a writer&apos;s eye — tracking beats, looking for turns, articulating the promise —
              what part of your normal viewing experience did you lose? Was there a moment where the analytical lens made you see
              something you&apos;d never noticed before, and a moment where it made you stop feeling something you usually would have
              felt? Write about both. This tension between seeing and feeling is one you&apos;ll navigate for the entire course.
            </p>
          </div>

          <h2>Week Summary</h2>
          <div className="block">
            <div className="block-label">What You&apos;ve Built</div>
            <p>By the end of this week you should have:</p>
            <p>
              • Watched 2 films from the curated list with a screenwriter&apos;s analytical lens
              <br />• Completed a beat journal for each film covering at least 5 key scenes, with beats labeled by type
              (information, power, emotion) and turns marked
              <br />• Written a "promise of the premise" paragraph (100–200 words) for each film
              <br />• Completed the slug line drill (5 slug lines + 5 action sentences, 10 minutes)
              <br />• Used at least one AI observation prompt to pressure-test your analysis
              <br />• Reflected on the experience of analytical viewing in your journal
            </p>
          </div>

          <h2>Looking Ahead</h2>
          <div className="block">
            <div className="block-label">Next Week</div>
            <p>
              Week 2 focuses on <strong>editing, rhythm, and scene purpose</strong> — the question of why scenes end when they end.
              You&apos;ve been tracking beats within scenes; next week, you&apos;ll zoom out and examine how scenes function within a
              sequence. You&apos;ll build a 10-scene purpose map for each of your films, identifying what each scene accomplishes that
              no other scene does. The concept of "earning your place" — the idea that every scene must justify its existence or
              be cut — will become central to how you think about structure for the rest of this curriculum.
            </p>
          </div>

          <div className="portfolio">
            <div className="portfolio-label">Your Portfolio So Far</div>
            <div className="portfolio-item current">Week 1: Beat journals (2 films) + promise of the premise notes (THIS WEEK)</div>
            <div className="portfolio-item upcoming">Week 2: 10-scene purpose maps for 2 films</div>
            <div className="portfolio-item upcoming">Week 3: Genre promise list + delivery scenes for 2 films</div>
          </div>

          <div className="ornament">✦ ✦ ✦</div>
        </div>

        <footer>
          <p>THE MOVIE ON THE PAGE · SCREENWRITING STUDIO</p>
          <p style={{ marginTop: 8, opacity: 0.5 }}>Cinema craft. Human pages. Clean decisions.</p>
        </footer>
      </main>
    </>
  );
}
