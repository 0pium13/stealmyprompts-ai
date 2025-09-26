"use client";
import { useState } from "react";
import { Heading, Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

export default function CreatePromptPage() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const creatorEarning = Math.max(0, Math.round(price - price * 0.15));

  return (
    <div className="mx-auto max-w-[900px] px-4 py-8">
      <Heading level={2}>Create a Premium Prompt</Heading>
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">
        <div className="space-y-4">
          <label className="block text-sm">Title
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 w-full rounded border border-neutral-200 p-2 text-sm" />
          </label>
          <label className="block text-sm">Category
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1 w-full rounded border border-neutral-200 p-2 text-sm">
              <option value="">Select…</option>
              <option>Business</option>
              <option>Creative</option>
              <option>Technical</option>
            </select>
          </label>
          <label className="block text-sm">Price (₹)
            <input type="number" value={price} onChange={(e) => setPrice(parseInt(e.target.value || "0", 10))} className="mt-1 w-full rounded border border-neutral-200 p-2 text-sm" />
          </label>
          <label className="block text-sm">Description (Markdown supported)
            <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={10} className="mt-1 w-full rounded border border-neutral-200 p-2 text-sm" placeholder="Describe your prompt, usage tips, and expected outcomes…" />
          </label>
          <div className="flex items-center gap-3">
            <Button size="md">Preview</Button>
            <Button size="md">Save Draft</Button>
            <Button size="md">Publish</Button>
          </div>
        </div>
        <aside className="space-y-3 rounded border border-neutral-200 p-4">
          <Heading level={4}>Earnings</Heading>
          <Text muted>Platform commission: 15%</Text>
          <div className="text-sm">Creator takes home: <span className="font-semibold">₹{creatorEarning}</span></div>
          <div className="h-px bg-neutral-200" />
          <Heading level={4}>Assets</Heading>
          <Text muted>Drag-and-drop images coming soon</Text>
        </aside>
      </div>
    </div>
  );
}
