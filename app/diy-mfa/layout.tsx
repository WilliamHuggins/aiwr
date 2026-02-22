import { Cormorant_Garamond, EB_Garamond, Space_Mono } from "next/font/google";

const body = EB_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-mfa-body", display: "swap" });
const heading = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "600"], variable: "--font-mfa-display", display: "swap" });
const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mfa-mono", display: "swap" });

export default function DiyMfaLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${body.variable} ${heading.variable} ${mono.variable} mfa-scope`}>{children}</div>;
}
