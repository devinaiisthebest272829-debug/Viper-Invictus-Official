// Copyright 2026 mamadwkwk (devinaiisthebest272829@gmail.com)
// Licensed under the Apache License, Version 2.0
// See LICENSE or NOTICE for full license text
// Viper Invictus - A fast scripting language with browser IDE
// All rights reserved.

import { useState } from "react";
import { Link } from "wouter";
import { Play, ExternalLink, Star, Eye, Heart, ArrowRight } from "lucide-react";

interface ShowcaseItem {
  id: string;
  title: string;
  description: string;
  category: string;
  code: string;
  tags: string[];
  likes: number;
  featured?: boolean;
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: "snake",
    title: "Classic Snake",
    description: "The iconic snake game with smooth controls, score tracking, and game over screen. Use arrow keys to play!",
    category: "Game",
    code: "snake",
    tags: ["canvas", "keyboard", "game loop"],
    likes: 42,
    featured: true,
  },
  {
    id: "bouncing",
    title: "Bouncing Balls",
    description: "Physics-based ball simulation with gravity, friction, and click-to-spawn interaction.",
    category: "Simulation",
    code: "bouncing",
    tags: ["physics", "canvas", "interaction"],
    likes: 35,
    featured: true,
  },
  {
    id: "clock",
    title: "Analog Clock",
    description: "A real-time analog clock showing hours, minutes, and seconds with smooth hand movement.",
    category: "Art",
    code: "clock",
    tags: ["time", "canvas", "real-time"],
    likes: 28,
  },
  {
    id: "art",
    title: "Generative Spiral",
    description: "Beautiful procedural art generated with sine waves and dynamic color cycling.",
    category: "Art",
    code: "art",
    tags: ["generative", "math", "animation"],
    likes: 31,
    featured: true,
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "A full multi-page website rendered entirely on canvas with navigation, particles, and interactive elements.",
    category: "App",
    code: "portfolio",
    tags: ["UI", "canvas", "multi-page"],
    likes: 25,
  },
  {
    id: "particles",
    title: "Particle Field",
    description: "Interactive particle system with mouse-following behavior and color trails.",
    category: "Simulation",
    code: "particles",
    tags: ["particles", "canvas", "animation"],
    likes: 19,
  },
  {
    id: "rainbow",
    title: "Rainbow Grid",
    description: "Animated color grid that cycles through the spectrum with perlin-noise-like movement.",
    category: "Art",
    code: "rainbow",
    tags: ["colors", "grid", "animation"],
    likes: 22,
  },
  {
    id: "sorting",
    title: "Sorting Visualizer",
    description: "Watch bubble sort and quick sort in action with color-coded bars and speed control.",
    category: "Algorithm",
    code: "sorting",
    tags: ["algorithms", "canvas", "education"],
    likes: 17,
  },
];

const CATEGORIES = ["All", "Game", "Art", "Simulation", "App", "Algorithm"];

export default function Showcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [liked, setLiked] = useState<Set<string>>(new Set());
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = activeCategory === "All"
    ? SHOWCASE_ITEMS
    : SHOWCASE_ITEMS.filter(s => s.category === activeCategory);

  const featured = SHOWCASE_ITEMS.filter(s => s.featured);

  const toggleLike = (id: string) => {
    setLiked(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-1">Showcase</h1>
          <p className="text-sm text-white/50">Projects built with Viper Invictus</p>
        </div>
      </div>

      {/* Featured section */}
      <div className="mb-8">
        <h2 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featured.map(item => (
            <div
              key={item.id}
              className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[#7c6af7]/30 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#7c6af7]/15 text-[#b8b0fc] uppercase tracking-wider">
                  {item.category}
                </span>
                <div className="flex items-center gap-1 text-[10px] text-white/30">
                  <Star className="w-3 h-3 text-yellow-400" fill="currentColor" />
                  {item.likes}
                </div>
              </div>
              <h3 className="font-semibold text-sm text-white/90 mb-1">{item.title}</h3>
              <p className="text-xs text-white/40 mb-3 line-clamp-2">{item.description}</p>
              <div className="flex items-center gap-2">
                <Link
                  href="/"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#7c6af7]/15 hover:bg-[#7c6af7]/25 text-xs text-[#b8b0fc] transition-all"
                >
                  <Play className="w-3 h-3" /> Try it
                </Link>
                <div className="flex flex-wrap gap-1 ml-auto">
                  {item.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-white/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 mb-6">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
              activeCategory === cat
                ? "bg-[#7c6af7]/15 text-[#b8b0fc] border-[#7c6af7]/30"
                : "bg-white/5 text-white/40 border-transparent hover:text-white/60 hover:bg-white/8"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filtered.map(item => (
          <div
            key={item.id}
            className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all group"
          >
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-white/50 uppercase tracking-wider">
                  {item.category}
                </span>
                <button
                  onClick={() => toggleLike(item.id)}
                  className={`transition-colors ${liked.has(item.id) ? "text-red-400" : "text-white/20 hover:text-white/40"}`}
                >
                  <Heart className="w-4 h-4" fill={liked.has(item.id) ? "currentColor" : "none"} />
                </button>
              </div>
              <h3 className="font-medium text-sm text-white/90 mb-1">{item.title}</h3>
              <p className="text-xs text-white/40 mb-3">{item.description}</p>

              <div className="flex items-center gap-2">
                <Link
                  href="/"
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[10px] text-white/50 hover:text-white/70 transition-all"
                >
                  <Play className="w-3 h-3" /> Run
                </Link>
                <button
                  onClick={() => setExpanded(expanded === item.id ? null : item.id)}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[10px] text-white/50 hover:text-white/70 transition-all"
                >
                  <Eye className="w-3 h-3" /> {expanded === item.id ? "Hide" : "Preview"}
                </button>
                <div className="flex items-center gap-1 ml-auto text-[10px] text-white/20">
                  <Eye className="w-3 h-3" /> {item.likes}
                </div>
              </div>
            </div>

            {expanded === item.id && (
              <div className="border-t border-white/10 px-4 py-3 bg-[#0a0a15]">
                <div className="flex flex-wrap gap-1 mb-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-white/30">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/"
                  className="inline-flex items-center gap-1 text-[10px] text-[#b8b0fc] hover:underline"
                >
                  Open in IDE <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
