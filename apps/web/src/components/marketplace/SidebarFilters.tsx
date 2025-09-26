"use client";
import { useState } from "react";
import { Heading, Text } from "@/components/ui/typography";

export function SidebarFilters() {
  const [category, setCategory] = useState<string>("");
  const [price, setPrice] = useState<[number, number]>([0, 100]);
  const [model, setModel] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [verified, setVerified] = useState<boolean>(false);

  return (
    <div className="space-y-6">
      <Heading level={4}>Filters</Heading>
      <div className="space-y-2">
        <Text muted>Category</Text>
        <select className="w-full rounded border border-neutral-200 p-2 text-sm">
          <option value="">All</option>
          <option>Business</option>
          <option>Creative</option>
          <option>Technical</option>
        </select>
      </div>
      <div className="space-y-2">
        <Text muted>Price Range</Text>
        <input type="range" min={0} max={100} className="w-full" />
      </div>
      <div className="space-y-2">
        <Text muted>Model</Text>
        <select className="w-full rounded border border-neutral-200 p-2 text-sm">
          <option value="">Any</option>
          <option>GPT-4</option>
          <option>Claude</option>
          <option>Gemini</option>
        </select>
      </div>
      <div className="space-y-2">
        <Text muted>Rating</Text>
        <select className="w-full rounded border border-neutral-200 p-2 text-sm">
          <option value="0">Any</option>
          <option value="4">4+ stars</option>
          <option value="4.5">4.5+ stars</option>
        </select>
      </div>
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" /> Verified only
      </label>
    </div>
  );
}
