import { BookOpen, MapPin, User, Users } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

const tools = [
  {
    title: "Location Scout",
    description:
      "Generate immersive Writer's Location Dossiers for specific places and eras, with sensory cues and research-ready detail.",
    href: "https://chatgpt.com/share/687d4aa0-90b8-8000-8b0e-39bc6e6e6d9c",
    icon: MapPin,
    tags: ["Research", "Setting", "Worldbuilding"],
  },
  {
    title: "Character-Smith",
    description:
      "Build multidimensional character profiles with motivations, contradictions, and arc pressure points you can revise against.",
    href: "https://chatgpt.com/share/687d4ace-1810-8000-a569-b723f9ee97e9",
    icon: User,
    tags: ["Character", "Backstory", "Revision"],
  },
  {
    title: "Writer's Group",
    description:
      "Simulate a supportive critique circle and receive actionable feedback on pacing, clarity, voice, and scene-level choices.",
    href: "https://chatgpt.com/g/g-6862f670d3a8819192c032cc5a8b3222-ai-writers-retreat-the-perfect-writers-group",
    icon: Users,
    tags: ["Feedback", "Workshop", "Drafts"],
  },
  {
    title: "StrunkSensei",
    description:
      "Use a guided Elements of Style coach for sentence-level polish, punctuation confidence, and cleaner line edits.",
    href: "https://chatgpt.com/g/g-685dd59ed1e88191b2cb4ec3793ff05f-strunksensei",
    icon: BookOpen,
    tags: ["Style", "Grammar", "Line Edit"],
  },
];

export default function ToolsPage() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-ui text-xs uppercase tracking-[0.18em] text-accent">AI Writing Partners</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-text md:text-5xl">Meet your AI writing partners</h1>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            These tools are designed as editorial collaborators—focused assistants for research, drafting, revision,
            and craft refinement. Use them intentionally and keep your voice in control.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Card key={tool.title} className="directory-card flex h-full flex-col p-7">
                <div className="mb-5 flex items-center gap-3">
                  <span className="inline-flex rounded-full border border-accent/25 bg-accent/10 p-2.5 text-accent" aria-hidden>
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="font-display text-2xl font-semibold text-text">{tool.title}</h2>
                </div>
                <p className="text-sm leading-relaxed text-muted">{tool.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {tool.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <a href={tool.href} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex self-start no-underline">
                  <Button className="rounded-full px-5 py-2 text-xs uppercase tracking-[0.14em]">Launch tool</Button>
                </a>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
