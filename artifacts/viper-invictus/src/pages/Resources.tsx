// Copyright 2026 mamadwkwk (devinaiisthebest272829@gmail.com)
// Licensed under the Apache License, Version 2.0
// See LICENSE or NOTICE for full license text
// Viper Invictus - A fast scripting language with browser IDE
// All rights reserved.

import { useState } from "react";
import { Link } from "wouter";
import { ExternalLink, BookOpen, Code2, FileText, Github, Star } from "lucide-react";

interface Resource {
  title: string;
  url: string;
  description: string;
  icon: React.ReactNode;
  type: string;
}

const RESOURCES: Resource[] = [
  {
    title: "GitHub Repository",
    url: "https://github.com/devinaiisthebest272829-debug/Viper-Invictus-Official",
    description: "Source code, issues, and contributions",
    icon: <Github className="w-4 h-4" />,
    type: "Code",
  },
  {
    title: "Language Reference",
    url: "/docs",
    description: "Complete documentation for all language features",
    icon: <BookOpen className="w-4 h-4" />,
    type: "Docs",
  },
  {
    title: "Interactive IDE",
    url: "/",
    description: "Write and run code instantly in the browser",
    icon: <Code2 className="w-4 h-4" />,
    type: "Tool",
  },
  {
    title: "Quick Reference",
    url: "/cheatsheet",
    description: "Fast lookup for all syntax and APIs",
    icon: <FileText className="w-4 h-4" />,
    type: "Docs",
  },
  {
    title: "Learn Page",
    url: "/learn",
    description: "Guided lessons from beginner to advanced",
    icon: <BookOpen className="w-4 h-4" />,
    type: "Learning",
  },
  {
    title: "Tutorials",
    url: "/tutorials",
    description: "Step-by-step projects you can build",
    icon: <FileText className="w-4 h-4" />,
    type: "Learning",
  },
  {
    title: "Showcase",
    url: "/showcase",
    description: "Examples of what you can build",
    icon: <Star className="w-4 h-4" />,
    type: "Inspiration",
  },
  {
    title: "Playground",
    url: "/playground",
    description: "Quick experimentation space",
    icon: <Code2 className="w-4 h-4" />,
    type: "Tool",
  },
];

const TIPS = [
  {
    title: "print() is your debugger",
    content: "Print intermediate values at each step. It's the fastest way to understand what your code is actually doing.",
  },
  {
    title: "Read the full error list",
    content: "Viper shows all parse errors at once. Fix them top to bottom — earlier errors often cause the ones below them.",
  },
  {
    title: "Start from an example",
    content: "Pick the sidebar example closest to what you want, then modify it. It's faster than building from scratch.",
  },
  {
    title: "Use the canvas tab",
    content: "Any code that calls canvas.setSize() will switch the output panel to Canvas automatically. You don't need to click.",
  },
  {
    title: "Ctrl+Enter to run",
    content: "You don't need to reach for the Run button. Ctrl+Enter (or Cmd+Enter on Mac) runs the current code immediately.",
  },
  {
    title: "Save your code locally",
    content: "The browser doesn't persist editor content between sessions. Copy your code into a local file when you want to keep it.",
  },
];

export default function Resources() {
  const [typeFilter, setTypeFilter] = useState("All");

  const types = ["All", ...Array.from(new Set(RESOURCES.map(r => r.type)))];
  const filtered = typeFilter === "All" ? RESOURCES : RESOURCES.filter(r => r.type === typeFilter);

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Resources</h1>
        <p className="text-sm text-white/50">Links and tips for learning and building with Viper Invictus</p>
      </div>

      {/* Type filter */}
      <div className="flex gap-2 mb-6">
        {types.map(type => (
          <button
            key={type}
            onClick={() => setTypeFilter(type)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
              typeFilter === type
                ? "bg-[#7c6af7]/15 text-[#b8b0fc] border-[#7c6af7]/30"
                : "bg-white/5 text-white/40 border-transparent hover:text-white/60"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Resources grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
        {filtered.map((resource, i) => (
          <a
            key={i}
            href={resource.url}
            target={resource.url.startsWith("http") ? "_blank" : undefined}
            rel={resource.url.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/[0.07] hover:border-white/15 transition-all group"
          >
            <div className="w-9 h-9 rounded-lg bg-[#7c6af7]/10 flex items-center justify-center text-[#7c6af7] group-hover:bg-[#7c6af7]/15 transition-all">
              {resource.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-white/80 group-hover:text-white/90 transition-colors">
                  {resource.title}
                </span>
                {resource.url.startsWith("http") && (
                  <ExternalLink className="w-3 h-3 text-white/20 group-hover:text-white/40 transition-colors" />
                )}
              </div>
              <p className="text-xs text-white/40 mt-0.5">{resource.description}</p>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/30 uppercase tracking-wider shrink-0">
              {resource.type}
            </span>
          </a>
        ))}
      </div>

      {/* Tips */}
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {TIPS.map((tip, i) => (
            <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded bg-[#7c6af7]/10 flex items-center justify-center text-[#7c6af7] text-[10px] font-bold">
                  {i + 1}
                </div>
                <span className="text-sm font-medium text-white/80">{tip.title}</span>
              </div>
              <p className="text-xs text-white/40 leading-relaxed">{tip.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#7c6af7]/10 flex items-center justify-center shrink-0">
            <Code2 className="w-5 h-5 text-[#7c6af7]" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white/90 mb-1">Open the IDE</h3>
            <p className="text-xs text-white/50 mb-3 leading-relaxed">
              The best way to learn is by running code and seeing what happens. Pick an example from
              the sidebar and start changing things.
            </p>
            <div className="flex gap-2">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#7c6af7] hover:bg-[#8d7ff8] text-white text-xs font-medium transition-colors"
              >
                <Code2 className="w-3.5 h-3.5" /> Open IDE
              </Link>
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 text-xs transition-all border border-white/10"
              >
                <BookOpen className="w-3.5 h-3.5" /> Start Learning
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
