import { designTokens } from "@/lib/theme";

export function Hero() {
  return (
    <section className="pt-24" style={{ background: `linear-gradient(180deg, ${designTokens.colors.dark[900]} 0%, ${designTokens.colors.dark[800]} 100%)` }}>
      <div className="mx-auto max-w-[1200px] px-8 py-24">
        <div className="text-center">
          <h1 className="font-bold leading-tight tracking-tight text-[60px]" style={{ color: designTokens.colors.white }}>
            The marketplace where AI prompts earn real money
          </h1>
          <p className="mt-4 text-lg md:text-xl" style={{ color: "#D1D5DB" }}>
            Live output previews. 15% commission. Hidden prompts until purchase.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="/signup" className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors" style={{ background: designTokens.colors.primary[600] }}>
              Start Earning Today
            </a>
            <a href="/community" className="inline-flex items-center justify-center rounded-md border px-6 py-3 text-sm font-semibold text-white transition-colors" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
              Join Community
            </a>
          </div>

          <div className="mt-6 text-sm" style={{ color: "#D1D5DB" }}>
            Join 2,847+ creators • $127K paid this month • 15,000+ community members
          </div>
        </div>
      </div>
    </section>
  );
}
