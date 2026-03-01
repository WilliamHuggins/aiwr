import type { CSSProperties } from "react";
import { AuthProvider } from "@/components/AuthProvider";
import RequireAuth from "@/components/RequireAuth";
import NavBar from "@/components/NavBar";

const writerCircleStyle = {
  "--panel": "239 227 208",
  "--primary": "109 70 43",
  "--primaryText": "249 243 235",
} as CSSProperties;

export default function WriterCircleAppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <RequireAuth>
        <section style={writerCircleStyle} className="writers-circle-scope rounded-2xl bg-[#f8f3eb] px-2 py-6 text-[#312419] md:px-4">
          <NavBar />
          <div className="mx-auto max-w-6xl px-4 py-8">{children}</div>
          <footer className="mx-auto max-w-6xl px-4 pb-10 text-sm text-muted">
            <a href="/writers-circle/terms">Rules &amp; Data</a>
          </footer>
        </section>
      </RequireAuth>
    </AuthProvider>
  );
}
