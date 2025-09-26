import { Suspense } from "react";
import { SidebarFilters } from "@/components/marketplace/SidebarFilters";
import { PromptGrid } from "@/components/marketplace/PromptGrid";
import { SkeletonGrid } from "@/components/marketplace/SkeletonGrid";

export default function BrowsePage() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-8 grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
      <aside>
        <SidebarFilters />
      </aside>
      <section>
        <Suspense fallback={<SkeletonGrid />}> 
          <PromptGrid />
        </Suspense>
      </section>
    </div>
  );
}
