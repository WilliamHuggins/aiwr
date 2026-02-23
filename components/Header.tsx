"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { cn } from "@/lib/utils";

const primaryNavLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/diy-mfa", label: "DIY MFA" },
  { href: "/ai-writing-news", label: "AI Writing News" },
];

const secondaryNavLinks = [
  { href: "/reading-list", label: "Books on Writing" },
  { href: "/reading-like-a-writer", label: "Reading Like A Writer" },
  { href: "/resources", label: "Resources" },
  { href: "/publishing-standards", label: "Publishing Standards" },
];

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setMoreMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMoreMenuOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const isSecondaryActive = secondaryNavLinks.some((link) => pathname === link.href);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-bg/90 backdrop-blur-sm">
      <Container className="flex h-24 items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="rounded-md p-2 text-text hover:bg-surface-2 focus-ring md:hidden"
            aria-label="Toggle main menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link href="/" className="rounded-md focus-ring">
            <Image
              src="https://qhdrtygne7pnc3mj.public.blob.vercel-storage.com/AIWR%20AI%20Writers%27%20Retreat.png"
              alt="AI Writers Retreat Logo"
              width={220}
              height={220}
              className="h-16 w-auto md:h-20"
              priority
              unoptimized
            />
          </Link>
        </div>

        <nav className="hidden items-center gap-1 rounded-full border border-border/70 bg-surface-1/70 p-1 text-sm font-ui shadow-soft md:flex" aria-label="Primary">
          {primaryNavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 no-underline transition-colors focus-ring",
                  isActive ? "bg-surface-2 text-text" : "text-muted hover:text-text",
                )}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="relative">
            <button
              onClick={() => setMoreMenuOpen((open) => !open)}
              className={cn(
                "flex items-center gap-1 rounded-full px-4 py-2 text-sm transition-colors focus-ring",
                isSecondaryActive || isMoreMenuOpen ? "bg-surface-2 text-text" : "text-muted hover:text-text",
              )}
              aria-haspopup="true"
              aria-expanded={isMoreMenuOpen}
            >
              More
              <ChevronDown className={cn("h-4 w-4 transition-transform", isMoreMenuOpen && "rotate-180")} />
            </button>

            {isMoreMenuOpen && (
              <div className="absolute right-0 top-[calc(100%+0.5rem)] w-64 rounded-2xl border border-border/70 bg-bg/95 p-2 shadow-soft backdrop-blur">
                {secondaryNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "block rounded-xl px-3 py-2 text-sm no-underline transition-colors focus-ring",
                      pathname === link.href ? "bg-surface-2 text-text" : "text-muted hover:bg-surface-2 hover:text-text",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a href="https://coff.ee/aiwritersretreat" target="_blank" rel="noopener noreferrer" className="no-underline">
            <Button variant="primary" className="rounded-full px-4 py-2 text-xs uppercase tracking-wide">
              Donate
            </Button>
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </Container>

      {isMobileMenuOpen && (
        <div id="mobile-nav" className="border-t bg-surface-1 md:hidden">
          <Container>
            <nav className="space-y-1 py-3" aria-label="Mobile primary">
              {[...primaryNavLinks, ...secondaryNavLinks].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block rounded-md px-3 py-2 font-ui text-sm no-underline focus-ring",
                    pathname === link.href ? "bg-surface-2 text-text" : "text-muted hover:bg-surface-2 hover:text-text",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://coff.ee/aiwritersretreat"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block rounded-md bg-accent px-3 py-2 text-center font-ui text-sm text-bg no-underline focus-ring"
              >
                Donate
              </a>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
