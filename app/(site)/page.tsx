import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { LatestPostsTeaser } from "@/components/blog/BlogPostListings";

const aiTools = [
  {
    title: "Digital Typewriter",
    description:
      "A free, distraction-free digital typewriter for drafting prose the old-fashioned way — one word at a time, no backspace allowed.",
    href: "https://digital-typewriter.vercel.app/",
    image: "https://i.postimg.cc/Zn4Wb6mn/Chat-GPT-Image-Mar-14-2026-08-12-25-PM.png",
  },
];

const HERO_VIDEO_SOURCES = [
  "https://i.imgur.com/ZCoy6Wi.mp4",
  "https://qhdrtygne7pnc3mj.public.blob.vercel-storage.com/AIWR%20Hero%20Vid.mp4",
] as const;

const retreatMenu = [
  {
    title: "Meet Your AI Writing Partners",
    description: "Custom-built AI tools designed to assist, not replace, your creative process across research, critique, and revision.",
    href: "/tools",
  },
  {
    title: "AI + Writing in the News",
    description: "Track AI + writing coverage with editorial context, searchable tags, and practical takeaways.",
    href: "/ai-writing-news",
  },
  {
    title: "Resources",
    description: "Explore handpicked references, tools, and guides to strengthen your writing workflow.",
    href: "/resources",
  },
  {
    title: "Books on Writing",
    description: "Browse a curated reading list of foundational books on style, story, and professional practice.",
    href: "/reading-list",
  },
  {
    title: "Reading Like A Writer",
    description: "Practice close reading techniques that sharpen scene craft, voice, structure, and revision instincts.",
    href: "/reading-like-a-writer",
  },
  {
    title: "Publishing Standards",
    description: "Use practical standards for attribution, ethics, and quality control in AI-assisted writing.",
    href: "/publishing-standards",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-studio" aria-labelledby="hero-studio-title">
        {/* Keep this as a native <video> background (not an <iframe>) to avoid JSX mismatch regressions and embedded play UI. */}
        <div className="heroVideoWrap" aria-label="Decorative ambient alpine night video background">
          <video
            className="heroVideo"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            controlsList="nodownload noplaybackrate noremoteplayback"
            tabIndex={-1}
            aria-hidden="true"
          >
            {HERO_VIDEO_SOURCES.map((sourceUrl) => (
              <source key={sourceUrl} src={sourceUrl} type="video/mp4" />
            ))}
            Calm nighttime alpine landscape used as a decorative background video.
          </video>
          <div className="heroVideoShield" aria-hidden="true" />
        </div>
        <Container className="hero-studio__container">
          <header className="hero-studio__inner">
            <h1 id="hero-studio-title" className="hero-studio__headline">
              The Writer&apos;s Studio for the AI Era.
            </h1>
            <div className="hero-studio__divider" aria-hidden="true" />
            <p className="hero-studio__subhead">
              Build voice, structure, and story with tools designed for thinking authors — not content farms.
            </p>
            <Link href="#home-essentials" className="hero-studio__cta" aria-label="Enter the Studio">
              Enter the Studio
            </Link>
          </header>
        </Container>
      </section>

      <section id="home-essentials" className="bg-surface-2/70 py-16 md:py-24">
        <Container>
          <div className="mb-10 text-center">
            <h2 className="font-display text-3xl font-semibold text-text">Start with the essentials</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              Begin in the DIY MFA, then bring in focused AI partners when you need research, critique, and revision support.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="directory-card flex flex-col p-8">
              <p className="font-ui text-xs uppercase tracking-[0.16em] text-accent">Featured Path</p>
              <h3 className="mt-3 font-display text-3xl font-semibold text-text">Lessons &amp; DIY MFA</h3>
              <p className="mt-4 flex-grow text-sm leading-relaxed text-muted">
                Follow the core curriculum to build durable writing habits, stronger craft instincts, and deliberate editorial control.
              </p>
              <Link href="/diy-mfa" className="mt-7 inline-flex self-start no-underline">
                <Button className="rounded-full px-6 py-3 text-xs uppercase tracking-[0.14em]">Explore DIY MFA</Button>
              </Link>
            </Card>
            <Card className="directory-card flex flex-col p-8">
              <p className="font-ui text-xs uppercase tracking-[0.16em] text-accent">New Course</p>
              <h3 className="mt-3 font-display text-3xl font-semibold text-text">The Cinema Writing Studio</h3>
              <p className="mt-1 font-ui text-xs uppercase tracking-[0.14em] text-muted">With AI as a Thought Partner</p>
              <p className="mt-4 flex-grow text-sm leading-relaxed text-muted">
                Enter a dedicated screenwriting track with a new landing page, then open Week 1 on film language, beats, and turns.
              </p>
              <Link href="/cinema-writing-studio" className="mt-7 inline-flex self-start no-underline">
                <Button className="rounded-full px-6 py-3 text-xs uppercase tracking-[0.14em]">Open Course</Button>
              </Link>
            </Card>
            <Card className="directory-card flex flex-col p-8">
              <p className="font-ui text-xs uppercase tracking-[0.16em] text-accent">New</p>
              <h3 className="mt-3 font-display text-3xl font-semibold text-text">AI Tutorials</h3>
              <p className="mt-4 flex-grow text-sm leading-relaxed text-muted">
                Step-by-step walkthroughs for using AI in your writing practice with practical workflows, examples, and clear guardrails.
              </p>
              <Link href="/ai-basics" className="mt-7 inline-flex self-start no-underline">
                <Button className="rounded-full px-6 py-3 text-xs uppercase tracking-[0.14em]">Explore Tutorials</Button>
              </Link>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="mb-10 text-center">
            <h2 className="font-display text-3xl font-semibold text-text">Writing Tools Built With AI</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              Free AI-powered tools built for writers who want to sharpen their craft.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {aiTools.map((tool) => (
              <Link key={tool.title} href={tool.href} target="_blank" rel="noopener noreferrer" className="group no-underline">
                <Card className="directory-card flex h-full flex-col overflow-hidden">
                  <div className="relative aspect-square w-full bg-white">
                    <Image
                      src={tool.image}
                      alt={tool.title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="flex flex-grow flex-col p-7">
                    <h3 className="font-display text-xl font-semibold text-text">{tool.title}</h3>
                    <p className="mt-3 flex-grow text-sm leading-relaxed text-muted">{tool.description}</p>
                    <span className="mt-6 inline-flex items-center gap-2 font-ui text-xs uppercase tracking-[0.14em] text-accent">
                      Try it free
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-2/70 py-16 md:py-24">
        <Container>
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl rounded-2xl border border-border/70 bg-surface-1/85 p-6 shadow-soft backdrop-blur-sm md:p-8">
              <p className="font-ui text-xs uppercase tracking-[0.16em] text-accent">From the blog</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-text md:text-4xl">AI &amp; The Craft</h2>
              <p className="mt-4 max-w-2xl text-muted">
                Essays on writing with judgment in the age of AI—practical notes on process, voice, revision, and craft.
              </p>
            </div>
            <Link href="/blog" className="font-ui text-xs uppercase tracking-[0.14em] text-accent no-underline">
              Read All Posts →
            </Link>
          </div>
          <LatestPostsTeaser />
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-semibold text-text">Explore the Retreat</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              A calm, practical directory for finding courses, tools, editorial guidance, and writing resources.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {retreatMenu.map((item) => (
              <Link key={item.title} href={item.href} className="group no-underline">
                <Card className="directory-card flex h-full flex-col p-7">
                  <h3 className="font-display text-xl font-semibold text-text">{item.title}</h3>
                  <p className="mt-3 flex-grow text-sm leading-relaxed text-muted">{item.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-ui text-xs uppercase tracking-[0.14em] text-accent">
                    Explore section
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
