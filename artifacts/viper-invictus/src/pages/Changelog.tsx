// Copyright 2026 mamadwkwk (devinaiisthebest272829@gmail.com)
// Licensed under the Apache License, Version 2.0
// See LICENSE or NOTICE for full license text
// Viper Invictus - A fast scripting language with browser IDE
// All rights reserved.

import { GitCommit, Plus, Bug, ArrowUp, Shield, Globe, Code2, Terminal } from "lucide-react";

interface Change {
  type: "feature" | "fix" | "improvement" | "security";
  text: string;
}

interface Version {
  version: string;
  date: string;
  changes: Change[];
}

const CHANGELOG: Version[] = [
  {
    version: "2.0",
    date: "June 2026",
    changes: [
      { type: "feature", text: "Compile cache: source is hashed on every execute() call; if the hash matches the last run, the lex/parse/compile pipeline is skipped entirely for a near-instant repeat run" },
      { type: "feature", text: "Frame count batching: the interpreter loop overhead check now fires every 512 frames instead of every frame, cutting animation loop overhead by roughly 500×" },
      { type: "feature", text: "Backend execution mode: send code to the Node.js API server instead of the browser VM ;  useful for code that uses fs, env, or http" },
      { type: "feature", text: "CLI download: grab the full Viper CLI package directly from the IDE toolbar" },
      { type: "feature", text: "Mobile layout: responsive sidebar and editor with touch-friendly controls and a full-screen editor on small screens" },
      { type: "improvement", text: "VM function calls now look up compiled bytecode from the program table and push proper call frames, fixing incorrect NULL returns" },
      { type: "improvement", text: "Error banner in the editor shows the exact line number of the first error and can be dismissed with one click" },
      { type: "improvement", text: "Backend/browser toggle in the toolbar lets you switch execution targets without leaving the editor" },
      { type: "improvement", text: "Console output is capped at 500 lines to keep the UI responsive during long or looping runs" },
      { type: "fix", text: "Canvas click handler now maps event coordinates correctly relative to canvas bounds" },
      { type: "fix", text: "Trusted mode bypass: the infinite loop guard is disabled for built-in examples and applied only to user-written code" },
    ],
  },
  {
    version: "1.3",
    date: "June 2026",
    changes: [
      { type: "improvement", text: "Viper-to-JavaScript compiler: lex, parse, then emit JS that runs at native speed through V8" },
      { type: "improvement", text: "Compiler handles all language constructs: variables, functions, classes, loops, conditionals, arrays, objects" },
      { type: "improvement", text: "Mandelbrot Explorer now renders in real-time with the compiled JS backend (was unusably slow with the tree-walker)" },
      { type: "improvement", text: "Automatic fallback to the tree-walker interpreter if the compiler hits an edge case" },
      { type: "improvement", text: "Compute-intensive examples now approach Python speed on loops, fractals, and sorting" },
    ],
  },
  {
    version: "1.2",
    date: "June 2026",
    changes: [
      { type: "feature", text: "Python syntax support: def, elif, pass, True/False/None, and/or/not, is, in" },
      { type: "feature", text: "JavaScript syntax support: function, this, undefined, ===/!== operators" },
      { type: "feature", text: "Backend API server with /api/viper/run for server-side code execution" },
      { type: "feature", text: "fs module for file operations (read, write, exists, list) in backend mode" },
      { type: "feature", text: "env module for environment variables (get, set) in backend mode" },
      { type: "feature", text: "http module for web requests (get, post) in backend mode" },
      { type: "feature", text: "IDE mode toggle: run code in browser or send to backend server" },
      { type: "improvement", text: "Updated examples and cheatsheet with Python & JS syntax examples" },
    ],
  },
  {
    version: "1.1",
    date: "June 2026",
    changes: [
      { type: "feature", text: "try/catch error handling with throw support" },
      { type: "feature", text: "switch/case/default multi-way branching" },
      { type: "feature", text: "do-while loops for at-least-once iteration" },
      { type: "feature", text: "Smart infinite loop protection: trusted examples bypass limit, user code strictly enforced" },
      { type: "improvement", text: "Added Error Handling section to cheatsheet and docs" },
    ],
  },
  {
    version: "1.0",
    date: "June 2026",
    changes: [
      { type: "feature", text: "Initial release of Viper Invictus" },
      { type: "feature", text: "Browser-based IDE with Monaco editor and custom viper-dark theme" },
      { type: "feature", text: "Canvas graphics API: rect, roundRect, circle, ellipse, line, arc, ringArc, polygon, image, text, transforms" },
      { type: "feature", text: "Animation system with timer.loop() at ~60fps and timer.now() / timer.date()" },
      { type: "feature", text: "Full language support: let, const, var, functions, classes, arrays, objects, closures" },
      { type: "feature", text: "OOP with inheritance: class Child < Parent, init constructors, self keyword" },
      { type: "feature", text: "Interactive examples: Snake, Bouncing Balls, Generative Art, Clock, Sorting Visualizer, 3D Wireframe, Game of Life, Fractal Tree, Fireworks, Pong, Mandelbrot" },
      { type: "feature", text: "Learn page with 10 guided lessons and progress tracking" },
      { type: "feature", text: "Comprehensive documentation with search and copy-to-clipboard" },
      { type: "improvement", text: "Error reporting shows all parse errors at once, not just the first one" },
      { type: "improvement", text: "Syntax highlighting for the Viper language in Monaco editor" },
      { type: "fix", text: "Fixed keyboard input handling for canvas games with global key listener" },
    ],
  },
];

function getTypeIcon(type: Change["type"]) {
  switch (type) {
    case "feature": return <Plus className="w-3.5 h-3.5 text-[#7c6af7]" />;
    case "fix": return <Bug className="w-3.5 h-3.5 text-emerald-400" />;
    case "improvement": return <ArrowUp className="w-3.5 h-3.5 text-yellow-400" />;
    case "security": return <Shield className="w-3.5 h-3.5 text-red-400" />;
  }
}

function getTypeLabel(type: Change["type"]) {
  switch (type) {
    case "feature": return "bg-[#7c6af7]/10 text-[#b8b0fc] border-[#7c6af7]/20";
    case "fix": return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    case "improvement": return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
    case "security": return "bg-red-500/10 text-red-400 border-red-500/20";
  }
}

function getVersionBadges(version: string) {
  if (version === "2.0") return (
    <div className="ml-auto flex items-center gap-2 flex-wrap">
      <span className="flex items-center gap-1 text-[10px] text-yellow-400 bg-yellow-500/10 px-2 py-0.5 rounded border border-yellow-500/20">
        <Terminal className="w-3 h-3" /> Compiler
      </span>
      <span className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
        <Globe className="w-3 h-3" /> Backend
      </span>
    </div>
  );
  if (version === "1.3") return (
    <div className="ml-auto">
      <span className="flex items-center gap-1 text-[10px] text-yellow-400 bg-yellow-500/10 px-2 py-0.5 rounded border border-yellow-500/20">
        <Terminal className="w-3 h-3" /> JS Compiler
      </span>
    </div>
  );
  if (version === "1.2") return (
    <div className="ml-auto flex items-center gap-2">
      <span className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
        <Globe className="w-3 h-3" /> Frontend + Backend
      </span>
      <span className="flex items-center gap-1 text-[10px] text-[#b8b0fc] bg-[#7c6af7]/10 px-2 py-0.5 rounded border border-[#7c6af7]/20">
        <Code2 className="w-3 h-3" /> Python + JS
      </span>
    </div>
  );
  return null;
}

export default function Changelog() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Changelog</h1>
        <p className="text-sm text-white/50">Version history and release notes for Viper Invictus</p>
      </div>

      <div className="space-y-6">
        {CHANGELOG.map(version => (
          <div key={version.version} className={`bg-white/5 border rounded-xl overflow-hidden ${version.version === "2.0" ? "border-[#7c6af7]/30" : "border-white/10"}`}>
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-white/[0.02] flex-wrap gap-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#7c6af7]/15 flex items-center justify-center shrink-0">
                <GitCommit className="w-4 h-4 text-[#7c6af7]" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-white/90 flex items-center gap-2">
                  v{version.version}
                  {version.version === "2.0" && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#7c6af7]/20 text-[#b8b0fc] border border-[#7c6af7]/30 font-normal">Latest</span>
                  )}
                </h2>
                <p className="text-[11px] text-white/30">{version.date}</p>
              </div>
              {getVersionBadges(version.version)}
            </div>
            <div className="p-5">
              <ul className="space-y-3">
                {version.changes.map((change, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="shrink-0 mt-0.5">{getTypeIcon(change.type)}</span>
                    <div className="flex-1">
                      <span className={`text-[10px] px-1.5 py-0.5 rounded border mr-2 ${getTypeLabel(change.type)}`}>
                        {change.type}
                      </span>
                      <span className="text-sm text-white/60">{change.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
