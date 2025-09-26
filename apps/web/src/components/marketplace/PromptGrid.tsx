"use client";
import { useEffect, useRef, useState } from "react";
import { PremiumPromptCard } from "@/components/marketplace/PremiumPromptCard";
import { SkeletonGrid } from "@/components/marketplace/SkeletonGrid";

export function PromptGrid() {
  const [items, setItems] = useState<number[]>(Array.from({ length: 12 }, (_, i) => i));
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sentinelRef.current) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading) {
        setLoading(true);
        setTimeout(() => {
          setItems((prev) => [...prev, ...Array.from({ length: 12 }, (_, i) => prev.length + i)]);
          setLoading(false);
        }, 800);
      }
    });
    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [loading]);

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <input placeholder="Search prompts..." className="w-full md:w-80 rounded border border-neutral-200 p-2 text-sm" />
        <select className="rounded border border-neutral-200 p-2 text-sm">
          <option>Trending</option>
          <option>Newest</option>
          <option>Highest Rated</option>
          <option>Price: Low to High</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((id) => (
          <PremiumPromptCard key={id} />
        ))}
      </div>

      {loading && <SkeletonGrid />}
      <div ref={sentinelRef} className="h-10" />
    </div>
  );
}
