import type { CSSProperties } from "react";
import { AuthProvider } from "@/components/AuthProvider";

const writerCircleStyle = {
  "--panel": "239 227 208",
  "--primary": "109 70 43",
  "--primaryText": "249 243 235",
} as CSSProperties;

export default function WriterCirclePublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <section style={writerCircleStyle} className="writers-circle-scope rounded-2xl bg-[#f8f3eb] px-2 py-6 text-[#312419] md:px-4">
        {children}
      </section>
    </AuthProvider>
  );
}
