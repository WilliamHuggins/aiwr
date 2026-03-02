import RequireAuth from "@/components/RequireAuth";
import NavBar from "@/components/NavBar";
import { Container } from "@/components/ui/Container";

export default function WriterCircleAppLayout({ children }: { children: React.ReactNode }) {
  return (
    <RequireAuth>
      <NavBar />
      <Container className="py-8">{children}</Container>
    </RequireAuth>
  );
}
