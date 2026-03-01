import { AuthProvider } from "@/components/AuthProvider";
import RequireAuth from "@/components/RequireAuth";
import NavBar from "@/components/NavBar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <RequireAuth>
        <NavBar />
        <div className="mx-auto max-w-6xl px-4 py-8">{children}</div>
        <footer className="mx-auto max-w-6xl px-4 pb-10 text-sm text-muted">
          <a href="/terms">Rules &amp; Data</a>
        </footer>
      </RequireAuth>
    </AuthProvider>
  );
}
