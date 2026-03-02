import { Cormorant_Garamond, EB_Garamond, Inter, Merriweather, Playfair_Display, Space_Mono } from "next/font/google";

const body = EB_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-mfa-body", display: "swap" });
const heading = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "600"], variable: "--font-mfa-display", display: "swap" });
const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mfa-mono", display: "swap" });

const moduleHeading = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-module-heading", display: "swap" });
const moduleBody = Merriweather({ subsets: ["latin"], weight: ["300", "400"], variable: "--font-module-body", display: "swap" });
const moduleUi = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-module-ui", display: "swap" });

export default function DiyMfaLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${body.variable} ${heading.variable} ${mono.variable} ${moduleHeading.variable} ${moduleBody.variable} ${moduleUi.variable} mfa-scope`}>{children}</div>;
}
