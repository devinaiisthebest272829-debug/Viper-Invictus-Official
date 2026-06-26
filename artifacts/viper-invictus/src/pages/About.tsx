// Copyright 2026 mamadwkwk (devinaiisthebest272829@gmail.com)
// Licensed under the Apache License, Version 2.0
// See LICENSE or NOTICE for full license text
// Viper Invictus - A fast scripting language with browser IDE
// All rights reserved.

import { Link } from "wouter";
import { Code2, Heart, ExternalLink, Github, Star, GitFork } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-10 mt-6">
        <img src="/viper-logo.png" alt="Viper Invictus" className="w-20 h-20 rounded-2xl mx-auto mb-5" />
        <h1 className="text-3xl font-bold mb-2">Viper Invictus</h1>
        <p className="text-white/50">A programming language for games, art, and apps.</p>
      </div>

      <div className="space-y-6">
        {/* What is it */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-[#7c6af7]" /> What is Viper Invictus?
          </h2>
          <p className="text-sm text-white/60 leading-relaxed">
            Viper Invictus is a modern, multi-paradigm programming language designed to run entirely in the browser. 
            It is built for creative coding, game development, simulations, and interactive art.
          </p>
        </div>

        {/* Features */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-3">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Runs in Browser", desc: "No install, no server, instant execution" },
              { title: "Canvas Graphics", desc: "2D drawing, animations, and games" },
              { title: "First-Class Functions", desc: "Pass functions as values, closures" },
              { title: "Classes & Inheritance", desc: "Object-oriented programming with <" },
              { title: "Rich Arrays", desc: "map, filter, reduce, find, sort, slice" },
              { title: "Math Library", desc: "sin, cos, sqrt, random, PI, and more" },
              { title: "Timer & Animation", desc: "Loop at ~60fps for smooth animations" },
              { title: "Error Reporting", desc: "See all errors at once, not just one" },
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
          <h2 className="text-lg font-semibold mb-3">Why It Exists</h2>
          <p className="text-sm text-white/60 leading-relaxed">
            Most programming languages require complex setup, compilers, or heavy runtimes. 
            Viper Invictus was built to remove all barriers to entry. 
            It is a teaching tool, an art platform, and a game engine all in one. 
            The goal is to let anyone go from zero to creating something visual in minutes.
          </p>
        </div>

        {/* Tech stack */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-3">Built With</h2>
          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "Vite", "Tailwind CSS", "Monaco Editor", "Wouter", "pnpm"].map(tech => (
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
              href="https://github.com/devinaiisthebest272829-debug/viper-invictus"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-white/60 hover:text-white/80 transition-all"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#7c6af7]/15 hover:bg-[#7c6af7]/25 border border-[#7c6af7]/20 text-sm text-[#b8b0fc] transition-all"
            >
              <ExternalLink className="w-4 h-4" /> Open IDE
            </Link>
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center py-6">
          <p className="text-xs text-white/20 flex items-center justify-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-400 fill-current" /> by devinaiisthebest272829-debug
          </p>
        </div>
      </div>
    </div>
  );
}
