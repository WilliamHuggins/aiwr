import { AuthProvider } from "@/components/AuthProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function WriterCirclePublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
      </ThemeProvider>
    </AuthProvider>
  );
}
