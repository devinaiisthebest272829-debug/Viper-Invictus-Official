// Copyright 2026 mamadwkwk (devinaiisthebest272829@gmail.com)
// Licensed under the Apache License, Version 2.0
// See LICENSE or NOTICE for full license text
// Viper Invictus - A fast scripting language with browser IDE
// All rights reserved.

import { useState } from "react";
import { Search, Copy, Check, Terminal, Zap, BookOpen, Hash, Braces, Box, Layers, Palette, Clock, Monitor, Globe, Shield } from "lucide-react";

interface CheatItem {
  title: string;
  icon: React.ReactNode;
  items: { label: string; code: string; desc: string }[];
}

const CHEAT_DATA: CheatItem[] = [
  {
    title: "Variables & Types",
    icon: <Hash className="w-4 h-4" />,
    items: [
      { label: "let", code: "let x = 10", desc: "Mutable variable" },
      { label: "const", code: "const PI = 3.14", desc: "Immutable variable" },
      { label: "var", code: "var name = \"Viper\"", desc: "Function-scoped" },
      { label: "number", code: "42, 3.14, -7", desc: "Numeric values" },
      { label: "string", code: '\"hello\", `template`', desc: "Text values" },
      { label: "boolean", code: "true, false", desc: "Logical values" },
      { label: "null", code: "let x = null", desc: "Empty value" },
      { label: "array", code: "[1, 2, 3]", desc: "Ordered list" },
      { label: "object", code: "{a: 1, b: 2}", desc: "Key-value pairs" },
    ],
  },
  {
    title: "Operators",
    icon: <Zap className="w-4 h-4" />,
    items: [
      { label: "Arithmetic", code: "+, -, *, /, %, **", desc: "Math operations" },
      { label: "Comparison", code: "==, !=, >, <, >=, <=", desc: "Compare values" },
      { label: "Logical", code: "&&, ||, !", desc: "And, or, not" },
      { label: "Increment", code: "x++, x--", desc: "Add or subtract 1" },
      { label: "Compound", code: "+=, -=, *=, /=", desc: "Update and assign" },
      { label: "Ternary", code: "x > 0 ? \"yes\" : \"no\"", desc: "Inline if/else" },
    ],
  },
  {
    title: "Control Flow",
    icon: <Box className="w-4 h-4" />,
    items: [
      { label: "if", code: "if (x > 0) { ... }", desc: "Conditional block" },
      { label: "else if", code: "else if (x < 0) { ... }", desc: "Another condition" },
      { label: "else", code: "else { ... }", desc: "Fallback block" },
      { label: "while", code: "while (x < 5) { x++ }", desc: "Loop while true" },
      { label: "do-while", code: "do { ... } while (x < 5)", desc: "Run at least once" },
      { label: "for", code: "for (let i=0; i<5; i++) { ... }", desc: "Counting loop" },
      { label: "for..of", code: "for (let v of arr) { ... }", desc: "Iterate array" },
      { label: "for..in", code: "for (let k in obj) { ... }", desc: "Iterate keys" },
      { label: "switch", code: "switch (x) { case 1: ... default: ... }", desc: "Multi-way branch" },
      { label: "break", code: "break", desc: "Exit loop early" },
      { label: "continue", code: "continue", desc: "Skip to next iteration" },
    ],
  },
  {
    title: "Error Handling",
    icon: <Shield className="w-4 h-4" />,
    items: [
      { label: "try/catch", code: "try { ... } catch (err) { ... }", desc: "Handle errors" },
      { label: "throw", code: "throw \"error!\"", desc: "Raise error" },
    ],
  },
  {
    title: "Functions",
    icon: <Braces className="w-4 h-4" />,
    items: [
      { label: "define", code: "fn add(a, b) { return a + b }", desc: "Create a function" },
      { label: "anonymous", code: "fn(x) { return x * 2 }", desc: "No name function" },
      { label: "call", code: "add(3, 4)", desc: "Invoke a function" },
      { label: "return", code: "return value", desc: "Exit with value" },
      { label: "closure", code: "fn make() { let x = 0; return fn() { x++ } }", desc: "Captures scope" },
      { label: "higher-order", code: "fn apply(f, x) { return f(x) }", desc: "Function as argument" },
    ],
  },
  {
    title: "Classes & OOP",
    icon: <Layers className="w-4 h-4" />,
    items: [
      { label: "class", code: "class Dog { ... }", desc: "Define a class" },
      { label: "init", code: "init(name) { self.name = name }", desc: "Constructor" },
      { label: "new", code: "let d = new Dog(\"Rex\")", desc: "Create instance" },
      { label: "self", code: "self.name", desc: "Current instance" },
      { label: "inheritance", code: "class Pup < Dog { ... }", desc: "Extend class" },
    ],
  },
  {
    title: "Arrays",
    icon: <BookOpen className="w-4 h-4" />,
    items: [
      { label: "push", code: "arr.push(5)", desc: "Add to end" },
      { label: "pop", code: "arr.pop()", desc: "Remove from end" },
      { label: "shift", code: "arr.shift()", desc: "Remove from start" },
      { label: "unshift", code: "arr.unshift(0)", desc: "Add to start" },
      { label: "map", code: "arr.map(fn(x) { return x*2 })", desc: "Transform each" },
      { label: "filter", code: "arr.filter(fn(x) { return x > 0 })", desc: "Keep matching" },
      { label: "reduce", code: "arr.reduce(fn(a,b) { return a+b }, 0)", desc: "Combine to one" },
      { label: "find", code: "arr.find(fn(x) { return x > 5 })", desc: "First match" },
      { label: "sort", code: "arr.sort()", desc: "Sort ascending" },
      { label: "slice", code: "arr.slice(1, 4)", desc: "Extract subarray" },
      { label: "splice", code: "arr.splice(1, 2)", desc: "Remove/insert items" },
      { label: "concat", code: "arr.concat([4, 5])", desc: "Join arrays" },
      { label: "flat", code: "arr.flat()", desc: "Flatten nested arrays" },
      { label: "forEach", code: "arr.forEach(fn(x) { print(x) })", desc: "Run for each item" },
      { label: "findIndex", code: "arr.findIndex(fn(x) { return x > 5 })", desc: "First match index" },
      { label: "reverse", code: "arr.reverse()", desc: "Reverse order" },
      { label: "join", code: "arr.join(\", \")", desc: "Join to string" },
      { label: "includes", code: "arr.includes(3)", desc: "Has value?" },
      { label: "length", code: "arr.length", desc: "Number of items" },
    ],
  },
  {
    title: "Strings",
    icon: <Terminal className="w-4 h-4" />,
    items: [
      { label: "length", code: "s.length", desc: "Character count" },
      { label: "upper", code: "s.upper()", desc: "To uppercase" },
      { label: "lower", code: "s.lower()", desc: "To lowercase" },
      { label: "trim", code: "s.trim()", desc: "Remove whitespace" },
      { label: "contains", code: "s.contains(\"hi\")", desc: "Includes substring?" },
      { label: "startsWith", code: "s.startsWith(\"hi\")", desc: "Starts with?" },
      { label: "endsWith", code: "s.endsWith(\"hi\")", desc: "Ends with?" },
      { label: "split", code: "s.split(\",\")", desc: "Split to array" },
      { label: "replace", code: "s.replace(\"a\", \"b\")", desc: "Replace all" },
      { label: "slice", code: "s.slice(0, 5)", desc: "Extract substring" },
      { label: "indexOf", code: "s.indexOf(\"a\")", desc: "Find position" },
      { label: "substring", code: "s.substring(0, 5)", desc: "Extract substring" },
      { label: "repeat", code: "s.repeat(3)", desc: "Repeat string" },
      { label: "padStart", code: "s.padStart(5, \"0\")", desc: "Pad from start" },
      { label: "padEnd", code: "s.padEnd(5, \"0\")", desc: "Pad from end" },
      { label: "char", code: "s.char(0)", desc: "Character at index" },
      { label: "charCode", code: "s.charCode(0)", desc: "Character code" },
      { label: "toNumber", code: "s.toNumber()", desc: "Convert to number" },
      { label: "toBool", code: "s.toBool()", desc: "Convert to boolean" },
      { label: "template", code: "`Hello ${name}!`", desc: "Embed variables" },
    ],
  },
  {
    title: "Math",
    icon: <Globe className="w-4 h-4" />,
    items: [
      { label: "PI", code: "math.PI", desc: "3.14159..." },
      { label: "sqrt", code: "math.sqrt(16)", desc: "Square root" },
      { label: "abs", code: "math.abs(-5)", desc: "Absolute value" },
      { label: "floor", code: "math.floor(3.7)", desc: "Round down" },
      { label: "ceil", code: "math.ceil(3.2)", desc: "Round up" },
      { label: "round", code: "math.round(3.5)", desc: "Round nearest" },
      { label: "pow", code: "math.pow(2, 10)", desc: "Exponent" },
      { label: "sin/cos/tan", code: "math.sin(0), math.cos(0)", desc: "Trigonometry" },
      { label: "asin/acos/atan", code: "math.asin(1), math.acos(0)", desc: "Inverse trig" },
      { label: "atan2", code: "math.atan2(y, x)", desc: "Angle from coordinates" },
      { label: "random", code: "math.random()", desc: "0 to 1" },
      { label: "randInt", code: "math.randInt(1, 6)", desc: "Random integer" },
      { label: "pow", code: "math.pow(2, 10)", desc: "Exponent" },
      { label: "log/log2/log10", code: "math.log(2), math.log2(8)", desc: "Logarithms" },
      { label: "hypot", code: "math.hypot(3, 4)", desc: "Hypotenuse" },
      { label: "sign", code: "math.sign(-5)", desc: "Sign of number" },
      { label: "trunc", code: "math.trunc(3.7)", desc: "Remove decimals" },
      { label: "clamp", code: "math.clamp(15, 0, 10)", desc: "Constrain range" },
      { label: "lerp", code: "math.lerp(0, 100, 0.5)", desc: "Interpolate" },
    ],
  },
  {
    title: "Canvas",
    icon: <Palette className="w-4 h-4" />,
    items: [
      { label: "setSize", code: "canvas.setSize(400, 300)", desc: "Set dimensions" },
      { label: "clear", code: "canvas.clear(\"#000\")", desc: "Fill with color" },
      { label: "rect", code: "canvas.rect(x, y, w, h, color)", desc: "Rectangle" },
      { label: "roundRect", code: "canvas.roundRect(x, y, w, h, r, color)", desc: "Rounded rectangle" },
      { label: "circle", code: "canvas.circle(x, y, r, color)", desc: "Circle" },
      { label: "ellipse", code: "canvas.ellipse(x, y, rx, ry, color)", desc: "Ellipse" },
      { label: "arc", code: "canvas.arc(x, y, r, start, end, color)", desc: "Arc segment" },
      { label: "ringArc", code: "canvas.ringArc(x, y, r, start, end, w, color)", desc: "Ring arc" },
      { label: "polygon", code: "canvas.polygon(x, y, r, sides, color)", desc: "Regular polygon" },
      { label: "line", code: "canvas.line(x1, y1, x2, y2, w, color)", desc: "Line segment" },
      { label: "text", code: "canvas.text(x, y, txt, size, color, align)", desc: "Draw text" },
      { label: "image", code: "canvas.image(url, x, y, w, h)", desc: "Draw image" },
      { label: "alpha", code: "canvas.alpha(0.5)", desc: "Set global alpha" },
      { label: "getWidth", code: "canvas.getWidth()", desc: "Canvas width" },
      { label: "getHeight", code: "canvas.getHeight()", desc: "Canvas height" },
      { label: "onKey", code: "canvas.onKey(fn(key) { ... })", desc: "Key press handler" },
      { label: "onClick", code: "canvas.onClick(fn(x, y) { ... })", desc: "Click handler" },
      { label: "translate", code: "canvas.translate(x, y)", desc: "Move origin" },
      { label: "rotate", code: "canvas.rotate(angle)", desc: "Rotate canvas" },
      { label: "scale", code: "canvas.scale(sx, sy)", desc: "Scale canvas" },
      { label: "save", code: "canvas.save()", desc: "Push state" },
      { label: "restore", code: "canvas.restore()", desc: "Pop state" },
    ],
  },
  {
    title: "Timer & Animation",
    icon: <Clock className="w-4 h-4" />,
    items: [
      { label: "loop", code: "timer.loop(fn() { ... })", desc: "Run every frame (~60fps)" },
      { label: "now", code: "timer.now()", desc: "Current time in ms" },
      { label: "date", code: "timer.date()", desc: "Date object" },
    ],
  },
  {
    title: "I/O",
    icon: <Monitor className="w-4 h-4" />,
    items: [
      { label: "print", code: "print(\"hello\")", desc: "Output to console" },
      { label: "log", code: "log(\"info\")", desc: "Log to console" },
      { label: "warn", code: "warn(\"caution\")", desc: "Warning output" },
      { label: "error", code: "error(\"oops\")", desc: "Error output" },
      { label: "clear", code: "clear()", desc: "Clear console" },
      { label: "input", code: "input(\"Name?\")", desc: "Prompt dialog" },
      { label: "str", code: "str(42)", desc: "Convert to string" },
      { label: "num", code: "num(\"3.14\")", desc: "Convert to number" },
      { label: "bool", code: "bool(1)", desc: "Convert to boolean" },
      { label: "type", code: "type(x)", desc: "Get type name" },
      { label: "len", code: "len(arr)", desc: "Get length" },
      { label: "range", code: "range(0, 5)", desc: "Generate numbers" },
      { label: "JSON", code: "JSON.stringify(obj)", desc: "Serialize JSON" },
    ],
  },
];

export default function Cheatsheet() {
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const filtered = CHEAT_DATA.filter(section =>
    section.items.some(item =>
      item.label.toLowerCase().includes(search.toLowerCase()) ||
      item.code.toLowerCase().includes(search.toLowerCase()) ||
      item.desc.toLowerCase().includes(search.toLowerCase())
    ) || section.title.toLowerCase().includes(search.toLowerCase())
  ).map(section => ({
    ...section,
    items: search
      ? section.items.filter(item =>
          item.label.toLowerCase().includes(search.toLowerCase()) ||
          item.code.toLowerCase().includes(search.toLowerCase()) ||
          item.desc.toLowerCase().includes(search.toLowerCase())
        )
      : section.items,
  }));

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Quick Reference</h1>
        <p className="text-sm text-white/50">Everything you need to know at a glance</p>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a keyword, function, or concept..."
          className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#7c6af7]/50"
        />
      </div>

      {/* Quick nav */}
      <div className="flex flex-wrap gap-2 mb-6">
        {CHEAT_DATA.map(section => (
          <button
            key={section.title}
            onClick={() => setActiveSection(activeSection === section.title ? null : section.title)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
              activeSection === section.title
                ? "bg-[#7c6af7]/15 text-[#b8b0fc] border-[#7c6af7]/30"
                : "bg-white/5 text-white/50 hover:text-white/70 border-transparent"
            }`}
          >
            {section.icon}
            {section.title}
          </button>
        ))}
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map(section => (
          <div
            key={section.title}
            className={`bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all ${
              activeSection && activeSection !== section.title ? "opacity-40" : ""
            }`}
          >
            {/* Section header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
              <span className="text-[#7c6af7]">{section.icon}</span>
              <span className="text-sm font-semibold text-white/80">{section.title}</span>
              <span className="ml-auto text-[10px] text-white/30 px-2 py-0.5 rounded-full bg-white/5">
                {section.items.length} items
              </span>
            </div>

            {/* Items */}
            <div className="divide-y divide-white/5">
              {section.items.map((item, i) => (
                <div key={i} className="group px-4 py-2.5 hover:bg-white/[0.02] transition-colors">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-[#b8b0fc]">{item.label}</span>
                        <span className="text-[10px] text-white/30">{item.desc}</span>
                      </div>
                      <code className="block text-xs font-mono text-emerald-300/80 bg-[#0a0a15] rounded px-2 py-1 truncate">
                        {item.code}
                      </code>
                    </div>
                    <button
                      onClick={() => copyCode(item.code)}
                      className="shrink-0 p-1 rounded text-white/20 hover:text-white/50 hover:bg-white/5 transition-all opacity-0 group-hover:opacity-100"
                    >
                      {copied === item.code ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-white/30">No results found for "{search}"</p>
        </div>
      )}
    </div>
  );
}
