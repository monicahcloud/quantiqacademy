// src/components/layout/SearchDialog.tsx
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const searchableItems = [
  { title: "BJC Prep", type: "Test Prep", href: "/test-prep/bjc" },
  { title: "BGCSE Prep", type: "Test Prep", href: "/test-prep/bgcse" },
  { title: "SAT Prep", type: "Test Prep", href: "/test-prep/sat" },
  { title: "ACT Prep", type: "Test Prep", href: "/test-prep/act" },
  { title: "Data Analytics", type: "Course", href: "/courses/data-analytics" },
  { title: "Power BI", type: "Course", href: "/courses/power-bi" },
  { title: "SQL & Databases", type: "Course", href: "/courses/sql" },
  { title: "Python Basics", type: "Course", href: "/courses/python" },
  { title: "AI Literacy", type: "Course", href: "/courses/ai-literacy" },
];

export default function SearchDialog() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) return searchableItems;

    return searchableItems.filter((item) =>
      `${item.title} ${item.type}`.toLowerCase().includes(search),
    );
  }, [query]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="rounded-full border border-white/10 p-3 text-white transition hover:bg-white/10"
          aria-label="Search">
          <Search size={18} />
        </button>
      </DialogTrigger>

      <DialogContent className="border-white/10 bg-[#04142f] p-0 text-white sm:max-w-2xl">
        <div className="border-b border-white/10 p-6">
          <DialogTitle className="text-2xl font-black">
            Search QuantIQ Academy
          </DialogTitle>

          <div className="relative mt-5">
            <Search
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-white/40"
            />

            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search test prep, courses, subjects..."
              autoFocus
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 pl-14 pr-5 text-white outline-none placeholder:text-white/40 focus:border-cyan-400"
            />
          </div>
        </div>

        <div className="max-h-[420px] overflow-y-auto p-4">
          {results.length > 0 ? (
            <div className="space-y-2">
              {results.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between rounded-2xl px-4 py-4 transition hover:bg-white/10">
                  <div>
                    <p className="font-bold">{item.title}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-cyan-400">
                      {item.type}
                    </p>
                  </div>

                  <ArrowRight size={18} className="text-white/40" />
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-10 text-center text-white/60">
              No results found.
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
