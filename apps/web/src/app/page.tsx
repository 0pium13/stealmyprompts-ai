import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/ui/Hero";
import { TrustBar } from "@/components/ui/TrustBar";
import { FeaturesGrid } from "@/components/ui/FeaturesGrid";

export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <FeaturesGrid />
      </main>
    </div>
  );
}
