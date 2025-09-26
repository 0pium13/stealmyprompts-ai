import "@/app/globals.css";
import { Navbar } from "@/components/ui/Navbar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  );
}
