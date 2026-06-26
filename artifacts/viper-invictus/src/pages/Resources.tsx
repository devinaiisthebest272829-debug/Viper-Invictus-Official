// Copyright 2026 mamadwkwk (devinaiisthebest272829@gmail.com)
// Licensed under the Apache License, Version 2.0
// See LICENSE or NOTICE for full license text
// Viper Invictus - A fast scripting language with browser IDE
// All rights reserved.

import { useState } from "react";
import { Link } from "wouter";
import { ExternalLink, BookOpen, Code2, Youtube, FileText, MessageCircle, Github, Globe, Star, Sparkles } from "lucide-react";

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
    url: "https://github.com/devinaiisthebest272829-debug/viper-invictus",
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
    icon: <Sparkles className="w-4 h-4" />,
    type: "Learning",
  },
  {
    title: "Showcase",
    url: "/showcase",
    description: "See what others have built",
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
    title: "Start Small",
    content: "Begin with a simple print() statement. Then add variables, then functions. Build up gradually.",
  },
  {
    title: "Use the Console",
    content: "print() is your best friend for debugging. Output values at each step to see what's happening.",
  },
  {
    title: "Read Error Messages",
    content: "Viper Invictus shows all errors at once. Don't panic, read them one by one and fix each issue.",
  },
  {
    title: "Experiment",
    content: "The IDE is instant. Change a number, run it, see what happens. That's the fastest way to learn.",
  },
  {
    title: "Copy Examples",
    content: "Start with an example that does something close to what you want. Modify it step by step.",
  },
  {
    title: "Save Your Work",
    content: "Copy your code into a text file on your computer. The browser won't save it automatically.",
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
        <h1 className="text-2xl font-bold mb-2">Resources & Tips</h1>
        <p className="text-sm text-white/50">Everything you need to learn and build with Viper Invictus</p>
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
            <div className="w-9 h-9 rounded-lg bg-[#7c6af7]/10 flex items-center justify-center text-[#7c6af7] group-hover:bg-[#7c6af7]/20 transition-all">
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

      {/* Learning Tips */}
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">Learning Tips</h2>
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

      {/* Getting Started CTA */}
      <div className="bg-gradient-to-r from-[#7c6af7]/10 to-[#e94560]/10 border border-white/10 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7c6af7] to-[#e94560] flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white/90 mb-1">Ready to start coding?</h3>
            <p className="text-xs text-white/50 mb-3 leading-relaxed">
              The best way to learn is by doing. Open the IDE, pick an example, and start modifying it.
              Every expert was once a beginner.
            </p>
            <div className="flex gap-2">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#7c6af7] to-[#6b5de4] hover:from-[#8d7ff8] hover:to-[#7c6af7] text-white text-xs font-medium transition-all"
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
