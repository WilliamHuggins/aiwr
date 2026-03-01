import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "@/styles/globals.css";

const ui = Inter({ subsets: ["latin"], variable: "--font-ui" });
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "AIWR Writer's Circle",
  description: "A moderated, members-only writing community.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${ui.variable} ${serif.variable} bg-bg text-text`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
