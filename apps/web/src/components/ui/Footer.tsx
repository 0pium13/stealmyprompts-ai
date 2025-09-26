export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-white" style={{ background: "#111827" }}>
      <div className="mx-auto max-w-[1200px] px-4 py-8 md:py-8 md:px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-sm text-white/80">© {year} StealMyPrompts.ai</div>
          <nav className="flex flex-col items-center gap-3 text-sm text-white/80 md:flex-row md:gap-6">
            <a href="/about" className="hover:text-white">About</a>
            <a href="/terms" className="hover:text-white">Terms</a>
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <a href="/contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
