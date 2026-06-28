// Copyright 2026 mamadwkwk (devinaiisthebest272829@gmail.com)
// Licensed under the Apache License, Version 2.0
// See LICENSE or NOTICE for full license text
// Viper Invictus - A fast scripting language with browser IDE
// All rights reserved.

import { Link } from "wouter";
import { Code2, Heart, ExternalLink, Github } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-10 mt-6">
        <img src={`${import.meta.env.BASE_URL}viper-logo.svg`} alt="Viper Invictus" className="w-20 h-20 rounded-2xl mx-auto mb-5" />
        <h1 className="text-3xl font-bold mb-2">Viper Invictus</h1>
        <p className="text-white/50">A scripting language for games, art, and interactive programs.</p>
      </div>

      <div className="space-y-6">
        {/* What is it */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-[#7c6af7]" /> What is Viper Invictus?
          </h2>
          <p className="text-sm text-white/60 leading-relaxed">
            Viper Invictus is a dynamically-typed scripting language that compiles to JavaScript. Use
            the browser IDE for instant creative coding, or run scripts locally with the CLI. The syntax
            sits between Python's readability and JavaScript's expressiveness - no install needed for
            the IDE, `npm install` for the CLI.
          </p>
        </div>

        {/* Features */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">What it includes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { title: "Runs in the browser", desc: "Compiles to JS and executes via V8. No install needed." },
              { title: "Canvas API", desc: "rect, circle, line, text, arc, polygon - full 2D drawing." },
              { title: "Animation loop", desc: "timer.loop() runs at ~60fps. Build games and simulations." },
              { title: "First-class functions", desc: "Pass functions as values, return them, use closures." },
              { title: "Classes and inheritance", desc: "OOP with class, self, init, and the < extends syntax." },
              { title: "Rich arrays", desc: "map, filter, reduce, find, sort, slice, push, pop." },
              { title: "Math library", desc: "sin, cos, sqrt, random, randInt, PI, floor, abs, and more." },
              { title: "Batch error reporting", desc: "Shows all parse errors at once, not just the first one." },
              { title: "Backend execution", desc: "Send code to the Node.js server for server-side runs." },
              { title: "Monaco editor", desc: "Syntax highlighting, line numbers, keyboard shortcuts." },
            ].map(f => (
              <div key={f.title} className="bg-white/5 rounded-lg p-3 border border-white/5">
                <div className="font-medium text-sm text-white/80 mb-1">{f.title}</div>
                <div className="text-xs text-white/40">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Why it exists */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-3">Why it exists</h2>
          <p className="text-sm text-white/60 leading-relaxed">
            Most creative coding tools either require a full development environment or are too limited
            to do anything interesting. Viper Invictus sits in the middle: it's a real language with
            closures, classes, and a canvas API, and it runs instantly in any browser tab. The goal is
            to go from an idea to something visual in under a minute.
          </p>
        </div>

        {/* Tech stack */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-3">Built with</h2>
          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "Vite", "Tailwind CSS", "Monaco Editor", "Wouter", "pnpm", "Express"].map(tech => (
              <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/50">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-3">Links</h2>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/devinaiisthebest272829-debug/Viper-Invictus-Official"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-white/60 hover:text-white/80 transition-all"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href="https://discord.gg/P4XDWvGgmt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#7c6af7]/15 hover:bg-[#7c6af7]/20 border border-[#7c6af7]/20 text-sm text-[#b8b0fc] transition-all"
            >
              Discord
            </a>
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#7c6af7]/15 hover:bg-[#7c6af7]/20 border border-[#7c6af7]/20 text-sm text-[#b8b0fc] transition-all"
            >
              <ExternalLink className="w-4 h-4" /> Open IDE
            </Link>
          </div>
        </div>

        {/* Authors */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Made by</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { name: "soulboundfist", role: "Chief Executive Officer" },
              { name: "themcleanson", role: "Chief Operation Officer" },
              { name: "2wt_clixer", role: "Chief Marketing Officer" },
            ].map(p => (
              <div key={p.name} className="flex items-center gap-3 bg-white/[0.03] rounded-lg p-3 border border-white/5">
                <div className="w-9 h-9 rounded-full bg-[#7c6af7]/20 flex items-center justify-center text-[#b8b0fc] font-bold text-sm shrink-0">
                  {p.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="text-sm text-white/70 font-medium">{p.name}</div>
                  <div className="text-[11px] text-white/30">{p.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center py-6">
          <p className="text-xs text-white/20 flex items-center justify-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-400 fill-current" /> by the Viper team
          </p>
        </div>
      </div>
    </div>
  );
}
