export function SkeletonGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, idx) => (
        <div key={idx} className="h-48 animate-pulse rounded-lg bg-neutral-100" />
      ))}
    </div>
  );
}
