// Copyright 2026 mamadwkwk (devinaiisthebest272829@gmail.com)
// Licensed under the Apache License, Version 2.0
// See LICENSE or NOTICE for full license text
// Viper Invictus - A fast scripting language with browser IDE
// All rights reserved.

import { useState, useRef, useCallback } from "react";
import { Play, Square, RotateCcw, Copy, Check, Trash2, Sparkles, Zap, Lightbulb, Star, Triangle, Palette, Flame, Dice5 } from "lucide-react";
import { Interpreter } from "@/lang";
import type { ExecutionContext, DrawCommand } from "@/lang";
import { ViperCanvas } from "@/components/ViperCanvas";
import type { CanvasHandle } from "@/components/ViperCanvas";
import { Console } from "@/components/Console";
import type { ConsoleLine } from "@/components/Console";

const SNIPPETS = [
  {
    name: "Hello World",
    icon: <Sparkles className="w-3.5 h-3.5" />,
    code: `print("Hello, World!")
print("Welcome to Viper Invictus!")

let name = "Developer"
print(\`Hey, \${name}!\`)`,
  },
  {
    name: "Math Tricks",
    icon: <Zap className="w-3.5 h-3.5" />,
    code: `print("Math Fun:")
print("PI = " + math.PI)
print("sqrt(16) = " + math.sqrt(16))
print("random() = " + math.random())
print("randInt(1,6) = " + math.randInt(1, 6))

let nums = [3, 1, 4, 1, 5, 9]
print("Sorted: " + nums.sort())`,
  },
  {
    name: "Loop Pattern",
    icon: <Lightbulb className="w-3.5 h-3.5" />,
    code: `print("Counting:")
for (let i = 1; i <= 5; i++) {
  print("  " + i)
}

print("Even numbers:")
for (let i = 0; i <= 10; i = i + 2) {
  print("  " + i)
}

print("Array iteration:")
let colors = ["red", "green", "blue"]
for (let c of colors) {
  print("  - " + c)
}`,
  },
  {
    name: "Bouncing Circle",
    icon: <Sparkles className="w-3.5 h-3.5" />,
    code: `canvas.setSize(300, 200)
let x = 20
let y = 100
let dx = 3
let dy = 2

fn draw() {
  canvas.clear("#0f172a")
  canvas.circle(x, y, 15, "#7c6af7")
  canvas.text(10, 20, "Bouncing Circle", 14, "#fff")

  x = x + dx
  y = y + dy

  if (x > 280 || x < 20) { dx = -dx }
  if (y > 180 || y < 20) { dy = -dy }
}

timer.loop(draw)`,
  },
  {
    name: "Rainbow Grid",
    icon: <Zap className="w-3.5 h-3.5" />,
    code: `canvas.setSize(400, 300)
let t = 0

fn draw() {
  canvas.clear("#050510")
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      let hue = (x + y) * 30 + t * 50
      let color = \`hsl(\${hue % 360}, 80%, 60%)\`
      canvas.rect(x * 40 + 2, y * 30 + 2, 36, 26, color)
    }
  }
  t = t + 0.01
}

timer.loop(draw)`,
  },
  {
    name: "3D Wireframe",
    icon: <Triangle className="w-3.5 h-3.5" />,
    code: `canvas.setSize(500, 400)
let angle = 0
let vertices = [
  [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
  [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]
]
let edges = [
  [0, 1], [1, 2], [2, 3], [3, 0],
  [4, 5], [5, 6], [6, 7], [7, 4],
  [0, 4], [1, 5], [2, 6], [3, 7]
]

fn project(v) {
  let s = 120
  let cx = 250
  let cy = 200
  let x = v[0] * math.cos(angle) - v[2] * math.sin(angle)
  let z = v[0] * math.sin(angle) + v[2] * math.cos(angle)
  let y = v[1]
  let dist = 3.5
  let scale = s / (z + dist)
  return [cx + x * scale, cy + y * scale]
}

fn draw() {
  canvas.clear("#0a0a15")
  for (let e of edges) {
    let a = project(vertices[e[0]])
    let b = project(vertices[e[1]])
    canvas.line(a[0], a[1], b[0], b[1], 2, "#7c6af7")
  }
  angle += 0.02
  canvas.text(250, 30, "3D Wireframe Cube", 18, "#fff", "center")
}

timer.loop(draw)`,
  },
  {
    name: "Particle Fire",
    icon: <Flame className="w-3.5 h-3.5" />,
    code: `canvas.setSize(400, 300)
let particles = []

fn spawn() {
  for (let i = 0; i < 3; i++) {
    particles.push({
      x: 200,
      y: 280,
      vx: (math.random() - 0.5) * 4,
      vy: -math.random() * 5 - 2,
      life: 1.0,
      r: math.random() * 5 + 2,
      color: math.random() > 0.5 ? "#ff6b35" : "#f7c948"
    })
  }
}

fn draw() {
  canvas.clear("#1a0a00")
  spawn()
  let i = 0
  while (i < particles.length) {
    let p = particles[i]
    p.x += p.vx
    p.y += p.vy
    p.vy += 0.1
    p.life -= 0.02
    p.r *= 0.96
    if (p.life <= 0) {
      particles.splice(i, 1)
    } else {
      canvas.alpha(p.life)
      canvas.circle(p.x, p.y, p.r, p.color)
      i += 1
    }
  }
  canvas.alpha(1)
  canvas.text(10, 20, "Particles: " + particles.length, 14, "#fff")
}

timer.loop(draw)`,
  },
  {
    name: "Fractal Tree",
    icon: <Star className="w-3.5 h-3.5" />,
    code: `canvas.setSize(500, 400)
let t = 0

fn branch(x, y, len, angle, depth) {
  if (depth <= 0) {
    canvas.circle(x, y, 3, "#34d399")
    return
  }
  let x2 = x + math.cos(angle) * len
  let y2 = y + math.sin(angle) * len
  let w = math.max(1, depth * 0.8)
  canvas.line(x, y, x2, y2, w, depth > 5 ? "#8b5a2b" : "#a06c35")
  let sway = math.sin(t * 0.02 + depth) * 0.05
  branch(x2, y2, len * 0.7, angle - 0.45 + sway, depth - 1)
  branch(x2, y2, len * 0.7, angle + 0.45 + sway, depth - 1)
}

fn draw() {
  canvas.clear("#0f172a")
  t = t + 1
  branch(250, 380, 80, -math.PI / 2, 9)
  canvas.text(250, 20, "Recursive Fractal Tree", 16, "#fff", "center")
}

timer.loop(draw)`,
  },
  {
    name: "Dice Roll",
    icon: <Dice5 className="w-3.5 h-3.5" />,
    code: `canvas.setSize(300, 200)

fn drawDot(x, y) {
  canvas.circle(x, y, 8, "#333")
}

fn drawDice(x, y, size, value) {
  let r = size / 2
  canvas.roundRect(x - r, y - r, size, size, 8, "#fff")
  let cx = x
  let cy = y
  let off = size / 4

  if (value == 1) { drawDot(cx, cy) }
  else if (value == 2) { drawDot(cx - off, cy - off); drawDot(cx + off, cy + off) }
  else if (value == 3) { drawDot(cx, cy); drawDot(cx - off, cy - off); drawDot(cx + off, cy + off) }
  else if (value == 4) { drawDot(cx - off, cy - off); drawDot(cx + off, cy - off); drawDot(cx - off, cy + off); drawDot(cx + off, cy + off) }
  else if (value == 5) { drawDot(cx, cy); drawDot(cx - off, cy - off); drawDot(cx + off, cy - off); drawDot(cx - off, cy + off); drawDot(cx + off, cy + off) }
  else if (value == 6) { drawDot(cx - off, cy - off); drawDot(cx + off, cy - off); drawDot(cx - off, cy); drawDot(cx + off, cy); drawDot(cx - off, cy + off); drawDot(cx + off, cy + off) }
}

fn draw() {
  canvas.clear("#2d3748")
  let d1 = math.randInt(1, 6)
  let d2 = math.randInt(1, 6)
  drawDice(100, 100, 80, d1)
  drawDice(210, 100, 80, d2)
  canvas.text(150, 180, "Total: " + (d1 + d2), 16, "#fff", "center")
}

draw()

canvas.onClick(fn(x, y) { draw() })`,
  },
  {
    name: "Matrix Rain",
    icon: <Palette className="w-3.5 h-3.5" />,
    code: `canvas.setSize(400, 300)
let cols = 40
let drops = []
for (let i = 0; i < cols; i++) { drops.push(math.random() * 300) }
let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
let t = 0

fn draw() {
  canvas.alpha(0.15)
  canvas.rect(0, 0, 400, 300, "#000")
  canvas.alpha(1)

  for (let i = 0; i < cols; i++) {
    let x = i * 10 + 5
    let y = drops[i]
    let char = chars.char(math.floor(math.random() * chars.length))
    let green = math.floor(100 + math.random() * 155)
    let color = \`rgb(0, \${green}, 0)\`
    canvas.text(x, y, char, 10, color, "center")
    drops[i] += 10
    if (drops[i] > 300) {
      drops[i] = -10
    }
  }
  t += 1
  canvas.text(200, 290, "Matrix Digital Rain", 12, "#0f0", "center")
}

timer.loop(draw)`,
  },
];

export default function Playground() {
  const [code, setCode] = useState(SNIPPETS[0].code);
  const [isTrusted, setIsTrusted] = useState(true);
  const [consoleLines, setConsoleLines] = useState<ConsoleLine[]>([]);
  const [drawCommands, setDrawCommands] = useState<DrawCommand[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [hasCanvas, setHasCanvas] = useState(false);
  const [outputTab, setOutputTab] = useState<"console" | "canvas">("console");
  const [copied, setCopied] = useState(false);
  const lineId = useRef(0);
  const interpRef = useRef<Interpreter | null>(null);
  const canvasRef = useRef<CanvasHandle>(null);
  const frameRef = useRef<number | null>(null);

  const addLine = useCallback((text: string, kind: ConsoleLine["kind"] = "log") => {
    setConsoleLines(prev => [...prev.slice(-200), { id: lineId.current++, text, kind }]);
  }, []);

  const stopExecution = useCallback(() => {
    interpRef.current?.stop();
    interpRef.current = null;
    if (frameRef.current !== null) { cancelAnimationFrame(frameRef.current); frameRef.current = null; }
    setIsRunning(false);
  }, []);

  const runCode = useCallback(() => {
    stopExecution();
    setConsoleLines([]);
    setDrawCommands([{ cmd: "clear", args: ["#050510"] }]);
    setHasCanvas(false);

    const pendingDraws: DrawCommand[] = [];
    let flushScheduled = false;
    const flushDraws = () => {
      if (pendingDraws.length > 0) {
        const cmds = [...pendingDraws];
        pendingDraws.length = 0;
        setDrawCommands(cmds);
      }
      flushScheduled = false;
    };

    const ctx: ExecutionContext = {
      output: (text, kind) => addLine(text, kind ?? "log"),
      draw: (cmd) => {
        pendingDraws.push(cmd);
        if (cmd.cmd === "setSize") {
          setHasCanvas(true);
          setOutputTab("canvas");
          const w = cmd.args[0] as number;
          const h = cmd.args[1] as number;
          canvasRef.current?.setSize(w, h);
        }
        if (!flushScheduled) { flushScheduled = true; requestAnimationFrame(flushDraws); }
      },
      clearCanvas: () => setDrawCommands([{ cmd: "clear", args: ["#050510"] }]),
      clearConsole: () => setConsoleLines([]),
      getInput: (prompt) => window.prompt(prompt) ?? "",
      setTitle: () => {},
      getTime: () => performance.now(),
      random: () => Math.random(),
      scheduleFrame: (cb) => { frameRef.current = requestAnimationFrame(cb); },
      cancelFrames: () => { if (frameRef.current !== null) { cancelAnimationFrame(frameRef.current); frameRef.current = null; } },
    };

    const interp = new Interpreter(ctx, isTrusted);
    interpRef.current = interp;
    setIsRunning(true);
    addLine("Running...", "system");

    setTimeout(() => {
      const result = interp.execute(code);
      if (!result.success) {
        if (result.errors && result.errors.length > 0) {
          addLine("Found " + result.errors.length + " error(s):", "error");
          for (const err of result.errors) {
            addLine("  " + err.message + (err.line ? " (line " + err.line + ")" : ""), "error");
          }
        } else {
          addLine("Error: " + result.error + (result.errorLine ? " (line " + result.errorLine + ")" : ""), "error");
        }
        setIsRunning(false);
        interpRef.current = null;
      } else {
        const loopActive = interp.getKeyHandlers().length > 0 || hasCanvas;
        if (!loopActive) {
          addLine("Done", "system");
          setIsRunning(false);
        }
      }
    }, 10);
  }, [code, addLine, stopExecution, hasCanvas]);

  const loadSnippet = (snippet: typeof SNIPPETS[0]) => {
    stopExecution();
    setCode(snippet.code);
    setIsTrusted(true);
    setConsoleLines([]);
    setDrawCommands([]);
    setHasCanvas(false);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-4">
        <h1 className="text-2xl font-bold mb-1">Quick Playground</h1>
        <p className="text-sm text-white/50">Experiment with code instantly. Pick a snippet or write your own.</p>
      </div>

      {/* Snippets */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hide">
        {SNIPPETS.map(snippet => (
          <button
            key={snippet.name}
            onClick={() => loadSnippet(snippet)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-xs text-white/60 hover:text-white/80 transition-all shrink-0"
          >
            {snippet.icon}
            {snippet.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Editor */}
        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden flex flex-col min-h-[400px]">
          <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/[0.02] shrink-0">
            <span className="text-xs text-white/30 font-mono">playground.vi</span>
            <div className="flex items-center gap-2">
              <button
                onClick={copyCode}
                className="p-1.5 rounded text-white/30 hover:text-white/60 hover:bg-white/5 transition-all"
                title="Copy code"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => { setCode(""); stopExecution(); }}
                className="p-1.5 rounded text-white/30 hover:text-white/60 hover:bg-white/5 transition-all"
                title="Clear"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
          <textarea
            value={code}
            onChange={(e) => { setCode(e.target.value); setIsTrusted(false); }}
            className="flex-1 w-full bg-[#0a0a15] text-[#e2e8f0] font-mono text-sm p-4 resize-none border-none outline-none min-h-[300px]"
            style={{ fontFamily: "'JetBrains Mono', monospace", lineHeight: 1.6, fontSize: 13 }}
            spellCheck={false}
          />
          <div className="flex items-center gap-2 px-4 py-2 border-t border-white/10 bg-white/[0.02] shrink-0">
            <button
              onClick={runCode}
              disabled={isRunning}
              className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#7c6af7] to-[#6b5de4] hover:from-[#8d7ff8] hover:to-[#7c6af7] text-white text-xs font-medium transition-all disabled:opacity-60"
            >
              <Play className="w-3 h-3" /> Run
            </button>
            {isRunning && (
              <button
                onClick={stopExecution}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-500/15 hover:bg-red-500/25 text-red-400 text-xs font-medium transition-all border border-red-500/20"
              >
                <Square className="w-3 h-3" /> Stop
              </button>
            )}
            <button
              onClick={() => { setCode(""); setConsoleLines([]); setDrawCommands([]); setHasCanvas(false); stopExecution(); }}
              className="ml-auto p-1.5 rounded text-white/20 hover:text-white/40 hover:bg-white/5 transition-all"
              title="Reset"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Output */}
        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden flex flex-col min-h-[400px]">
          <div className="flex border-b border-white/10 bg-white/[0.02] shrink-0">
            <button
              onClick={() => setOutputTab("console")}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-medium transition-all border-b-2 ${
                outputTab === "console"
                  ? "text-[#b8b0fc] border-[#7c6af7]"
                  : "text-white/40 border-transparent hover:text-white/60"
              }`}
            >
              <Zap className="w-3.5 h-3.5" /> Console
            </button>
            <button
              onClick={() => setOutputTab("canvas")}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-medium transition-all border-b-2 ${
                outputTab === "canvas"
                  ? "text-[#b8b0fc] border-[#7c6af7]"
                  : "text-white/40 border-transparent hover:text-white/60"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" /> Canvas
              {hasCanvas && <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 ml-1" />}
            </button>
          </div>
          <div className={`flex-1 overflow-hidden ${outputTab !== "console" ? "hidden" : ""}`}>
            <Console lines={consoleLines} />
          </div>
          <div className={`flex-1 overflow-hidden ${outputTab !== "canvas" ? "hidden" : ""}`}>
            <ViperCanvas ref={canvasRef} commands={drawCommands} />
          </div>
        </div>
      </div>
    </div>
  );
}
