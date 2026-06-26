// Copyright 2026 mamadwkwk (devinaiisthebest272829@gmail.com)
// Licensed under the Apache License, Version 2.0
// See LICENSE or NOTICE for full license text
// Viper Invictus - A fast scripting language with browser IDE
// All rights reserved.

import { useState } from "react";
import { Link } from "wouter";
import { Play, ExternalLink, Search, Tag, Star, Copy, Check } from "lucide-react";
import { EXAMPLES } from "@/lib/examples";
import type { Example } from "@/lib/examples";

const CATEGORIES = Array.from(new Set(EXAMPLES.map(e => e.category)));

export default function Examples() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [copied, setCopied] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = EXAMPLES.filter(e => {
    const matchesSearch = e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || e.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Example Gallery</h1>
        <p className="text-sm text-white/50">Explore {EXAMPLES.length} ready-to-run examples. Click any to see the code, then copy it to the IDE to try it yourself.</p>
      </div>

      {/* Search & filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search examples..."
            className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#7c6af7]/50"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {["All", ...CATEGORIES].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-2 rounded-lg text-xs font-medium transition-all border ${
                activeCategory === cat
                  ? "bg-[#7c6af7]/15 text-[#b8b0fc] border-[#7c6af7]/30"
                  : "bg-white/5 text-white/40 border-white/10 hover:bg-white/8 hover:text-white/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className="text-xs text-white/30 mb-4">
        Showing {filtered.length} of {EXAMPLES.length} examples
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(example => (
          <ExampleCard
            key={example.id}
            example={example}
            isExpanded={expanded === example.id}
            onToggle={() => setExpanded(expanded === example.id ? null : example.id)}
            onCopy={() => copyCode(example.code, example.id)}
            copied={copied === example.id}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-white/30">No examples match your search</p>
        </div>
      )}
    </div>
  );
}

function ExampleCard({ example, isExpanded, onToggle, onCopy, copied }: {
  example: Example;
  isExpanded: boolean;
  onToggle: () => void;
  onCopy: () => void;
  copied: boolean;
}) {
  const [starred, setStarred] = useState(false);

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all">
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-white/50 uppercase tracking-wider">
              {example.category}
            </span>
          </div>
          <button
            onClick={() => setStarred(!starred)}
            className={`transition-colors ${starred ? "text-yellow-400" : "text-white/20 hover:text-white/40"}`}
          >
            <Star className="w-4 h-4" fill={starred ? "currentColor" : "none"} />
          </button>
        </div>
        <h3 className="font-medium text-sm text-white/90 mb-1">{example.name}</h3>
        <p className="text-xs text-white/40 mb-3">{example.description}</p>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggle}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-white/50 hover:text-white/70 transition-all"
          >
            <Tag className="w-3 h-3" /> {isExpanded ? "Hide" : "Show"} Code
          </button>
          <button
            onClick={onCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-white/50 hover:text-white/70 transition-all"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            {copied ? "Copied!" : "Copy"}
          </button>
          <Link
            href="/"
            className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#7c6af7]/15 hover:bg-[#7c6af7]/25 text-xs text-[#b8b0fc] transition-all"
          >
            <Play className="w-3 h-3" /> Try
          </Link>
        </div>
      </div>

      {isExpanded && (
        <div className="border-t border-white/10">
          <pre className="p-4 text-xs font-mono text-emerald-300 leading-relaxed overflow-x-auto max-h-80 overflow-y-auto">
            {example.code}
          </pre>
        </div>
      )}
    </div>
  );
}
