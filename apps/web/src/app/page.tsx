import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/ui/Hero";

export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <main>
        <Hero />
        {/* Trust Bar and Features Grid will be added here */}
      </main>
    </div>
  );
}
