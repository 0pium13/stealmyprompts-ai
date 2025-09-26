export function Hero() {
  return (
    <section
      className="pt-24"
      style={{ background: "linear-gradient(180deg, #111827 0%, #1f2937 100%)" }}
    >
      <div className="mx-auto max-w-[1200px] px-8 py-24">
        <div className="text-center">
          <h1 className="text-white font-bold leading-tight tracking-tight text-[60px]">
            The marketplace where AI prompts earn real money
          </h1>
          <p className="mt-4 text-gray-300 text-lg md:text-xl">
            Live output previews. 15% commission. Hidden prompts until purchase.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="/signup"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
            >
              Start Earning Today
            </a>
            <a
              href="/community"
              className="inline-flex items-center justify-center rounded-md border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Join Community
            </a>
          </div>

          <div className="mt-6 text-gray-300 text-sm">
            Join 2,847+ creators • $127K paid this month • 15,000+ community members
          </div>
        </div>
      </div>
    </section>
  );
}
