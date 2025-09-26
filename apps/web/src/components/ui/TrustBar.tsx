export function TrustBar() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-8 py-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-neutral-200 p-6 text-center hover:shadow-lg transition-shadow">
            <div className="mx-auto mb-2 h-8 w-8 text-blue-600" aria-hidden>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M10.5 3.75a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0z"/><path fillRule="evenodd" d="M4.5 8.25a6 6 0 0112 0v.879a3 3 0 012.25 2.907v4.464a3 3 0 01-1.024 2.279l-1.815 1.547a2.25 2.25 0 01-2.902 0l-1.815-1.547a3 3 0 01-1.024-2.28v-4.463a3 3 0 012.25-2.907V8.25a3.75 3.75 0 10-7.5 0v.879a3 3 0 012.25 2.907v4.464a3 3 0 01-1.024 2.279l-1.815 1.547a2.25 2.25 0 01-2.902 0l-1.815-1.547A3 3 0 011.25 16.5v-4.464a3 3 0 012.25-2.907V8.25z" clipRule="evenodd"/></svg>
            </div>
            <div className="text-sm text-neutral-600">Join 2,847+ creators</div>
          </div>
          <div className="rounded-lg border border-neutral-200 p-6 text-center hover:shadow-lg transition-shadow">
            <div className="mx-auto mb-2 h-8 w-8 text-blue-600" aria-hidden>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M4.5 6.75A2.25 2.25 0 016.75 4.5h10.5A2.25 2.25 0 0119.5 6.75v10.5A2.25 2.25 0 0117.25 19.5H6.75A2.25 2.25 0 014.5 17.25V6.75z"/><path d="M7.5 12h9v1.5h-9V12zM7.5 9h9v1.5h-9V9z"/></svg>
            </div>
            <div className="text-sm text-neutral-600">$127K paid this month</div>
          </div>
          <div className="rounded-lg border border-neutral-200 p-6 text-center hover:shadow-lg transition-shadow">
            <div className="mx-auto mb-2 h-8 w-8 text-blue-600" aria-hidden>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path fillRule="evenodd" d="M19.5 10.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0zM2.25 19.5a9.75 9.75 0 1119.5 0v.75a.75.75 0 01-.75.75h-18a.75.75 0 01-.75-.75v-.75z" clipRule="evenodd"/></svg>
            </div>
            <div className="text-sm text-neutral-600">15,000+ community members</div>
          </div>
        </div>
      </div>
    </section>
  );
}
