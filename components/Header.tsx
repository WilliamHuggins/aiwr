"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/diy-mfa", label: "DIY MFA" },
  { href: "/ai-writing-news", label: "AI Writing News" },
  { href: "/reading-list", label: "Reading List" },
  { href: "/resources", label: "Resources" },
  { href: "/publishing-standards", label: "Publishing Standards" },
];

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-bg/90 backdrop-blur-sm">
      <Container className="flex h-20 items-center justify-between gap-4">
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
            <Image src="/Logo.png" alt="AI Writers Retreat Logo" width={90} height={90} className="h-14 w-auto" priority />
          </Link>
        </div>

        <nav className="hidden items-center gap-5 text-sm font-ui md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-sm no-underline transition-colors focus-ring",
                  isActive ? "text-text" : "text-muted hover:text-text",
                )}
              >
                <span className={cn("border-b pb-1", isActive ? "border-accent" : "border-transparent")}>{link.label}</span>
              </Link>
            );
          })}
          <a href="https://coff.ee/aiwritersretreat" target="_blank" rel="noopener noreferrer" className="no-underline">
            <Button variant="primary" className="px-3 py-1.5 text-xs uppercase tracking-wide">
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
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block rounded-md px-3 py-2 font-ui text-sm no-underline focus-ring",
                    pathname === link.href ? "bg-surface-2 text-text" : "text-muted hover:bg-surface-2 hover:text-text",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
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
