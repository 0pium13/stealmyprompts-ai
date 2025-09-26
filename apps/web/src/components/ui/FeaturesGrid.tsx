export function FeaturesGrid() {
  const features = [
    { title: "Live Output Previews", desc: "See results before you buy.", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path d="M1.5 12s3.75-7.5 10.5-7.5S22.5 12 22.5 12 18.75 19.5 12 19.5 1.5 12 1.5 12z"/><path d="M12 15.75A3.75 3.75 0 1115.75 12 3.754 3.754 0 0112 15.75z"/></svg>
    )},
    { title: "Better Economics", desc: "15% commission for creators.", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path d="M3 6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v10.5A2.25 2.25 0 0118.75 19.5H5.25A2.25 2.25 0 013 17.25V6.75z"/><path d="M7.5 12h9v1.5h-9V12zM7.5 9h9v1.5h-9V9z"/></svg>
    )},
    { title: "AI-Powered Verification", desc: "Quality checks to reduce low-effort prompts.", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path d="M12 1.5l8.485 8.485a6 6 0 11-8.485 8.485 6 6 0 118.485-8.485L12 1.5z"/></svg>
    )},
    { title: "Community & Collaboration", desc: "Build together with versioning.", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path d="M7.5 8.25a3 3 0 106 0 3 3 0 00-6 0z"/><path d="M2.25 20.25A6.75 6.75 0 0116.5 16.5a6.75 6.75 0 01-14.25 3.75z"/></svg>
    )},
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-8 py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-lg border border-neutral-200 p-6 hover:shadow-lg transition-shadow">
              <div className="mb-3 text-blue-600">{f.icon}</div>
              <h3 className="text-neutral-900 font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-neutral-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
