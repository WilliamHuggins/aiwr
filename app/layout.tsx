import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "@/styles/globals.css";

const ui = Inter({ subsets: ["latin"], variable: "--font-ui" });
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "AI Writers' Retreat",
  description: "The writer's studio for the AI era.",
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
