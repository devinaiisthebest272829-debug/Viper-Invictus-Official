import { GitCommit, Sparkles, Bug, Zap, Shield, Globe, Code2, Cpu, Package, Terminal } from "lucide-react";

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
      { type: "feature", text: "Superscalar Execution Engine: groups independent operations (math, counter advance, memory check) into parallel execution blocks, executing multiple instructions per cycle" },
      { type: "feature", text: "JIT Optimizer: constant folding, dead code elimination, instruction fusion, and superscalar block analysis dramatically reduces instruction count before execution" },
      { type: "feature", text: "Intel MPX + ARM MTE Memory Protection: tagged memory regions, bounds checking, pointer tagging — catches out-of-bounds and use-after-free at the VM level" },
      { type: "feature", text: "FPGA/ASIC HDL Compiler: compile Viper directly to Verilog, VHDL, or SystemVerilog for FPGA deployment — leave software-based C++ completely in the dust" },
      { type: "feature", text: "HDL targets: Xilinx Vivado, Intel Quartus, TSMC PDK synthesis ready — generates full module + testbench with timing constraints" },
      { type: "feature", text: "Configurable hardware: set clock frequency (up to 1 GHz+), data bus width (8/16/32/64-bit), and pipeline stages for FPGA/ASIC targets" },
      { type: "feature", text: "VPM — Viper Package Manager: install/remove/search/update/publish packages with lockfile, manifest (viper.json), and GitHub-based registry" },
      { type: "feature", text: "Stdlib library suite: std, net, io, crypto, json, math-ext, async, cli-kit, test, canvas — all installable via `viper vpm install`" },
      { type: "feature", text: "math-ext package: FFT, matrix ops, complex numbers, statistics, linear algebra — `viper vpm install math-ext`" },
      { type: "feature", text: "crypto package: SHA-256, Base64, AES-256, random bytes, UUID generation" },
      { type: "feature", text: "test package: built-in unit testing with describe/it/expect/assert, similar to Jest" },
      { type: "feature", text: "cli-kit package: terminal colors, tables, progress bars, prompts for building CLI apps in Viper" },
      { type: "feature", text: "Internet access: native HTTP GET/POST via `fetch()` and `http.get/post()` — no curl dependency" },
      { type: "feature", text: "Interactive REPL: `viper repl` starts a full Read-Eval-Print-Loop with tab completion, multi-line input, .load/.reset/.time/.vars commands" },
      { type: "feature", text: "Project scaffolding: `viper new my-project` creates viper.json, src/main.vi, src/test.vi, README.md, .gitignore" },
      { type: "feature", text: "Build command: `viper build <file> --target <js|verilog|vhdl|sv>` compiles to any target" },
      { type: "feature", text: "Check command: `viper check <file>` lints source code with complexity analysis and style warnings" },
      { type: "feature", text: "Fmt command: `viper fmt <file>` auto-formats Viper source code" },
      { type: "feature", text: "Test runner: `viper test <file>` runs test files using the built-in test library" },
      { type: "feature", text: "Thread command: `viper thread <file>` runs scripts in parallel worker threads" },
      { type: "feature", text: "Info command: `viper info` shows runtime, compiler targets, optimizations, and links" },
      { type: "feature", text: "CLI downloadable from the IDE — one-click download of the full CLI package" },
      { type: "improvement", text: "Fully colored CLI output with ANSI codes: errors in red, successes in green, info in blue, warnings in yellow — disable with NO_COLOR" },
      { type: "improvement", text: "Source context in error messages: shows the exact line and position of the error" },
      { type: "improvement", text: "os module: exec(), platform, arch, cpus, memory, hostname" },
      { type: "improvement", text: "process module: args, cwd(), exit(), pid, platform, version" },
      { type: "improvement", text: "storage module: set/get/delete/keys — persists to .viper/storage.json" },
      { type: "improvement", text: "timer module (CLI): now(), date(), sleep() — synchronous sleep for scripting" },
      { type: "improvement", text: "fs.stat(), fs.mkdir() added to the file system module" },
      { type: "improvement", text: "Auto-detect `import \"pkg\"` statements and inject package code before execution" },
      { type: "improvement", text: "CLI hardware estimate output: register count, gate count, pipeline stages, MHz, LUT area" },
    ],
  },
  {
    version: "1.3",
    date: "June 2026",
    changes: [
      { type: "improvement", text: "Massive engine performance boost: Viper-to-JavaScript compiler for native execution speed" },
      { type: "improvement", text: "Compiler handles all language constructs: variables, functions, classes, loops, conditionals, arrays, objects" },
      { type: "improvement", text: "Mandelbrot Explorer now runs in real-time with compiled JS backend (was unusably slow)" },
      { type: "improvement", text: "Automatic fallback to tree-walker interpreter if compiler encounters edge cases" },
      { type: "improvement", text: "Approaches/beats Python speed on compute-intensive tasks like fractals, particle systems, and sorting" },
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
      { type: "improvement", text: "Error reporting shows all errors at once during parsing" },
      { type: "improvement", text: "Syntax highlighting for the Viper language in Monaco editor" },
      { type: "fix", text: "Fixed keyboard input handling for canvas games with global key listener" },
    ],
  },
];

function getTypeIcon(type: Change["type"]) {
  switch (type) {
    case "feature": return <Sparkles className="w-3.5 h-3.5 text-[#7c6af7]" />;
    case "fix": return <Bug className="w-3.5 h-3.5 text-emerald-400" />;
    case "improvement": return <Zap className="w-3.5 h-3.5 text-yellow-400" />;
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
      <span className="flex items-center gap-1 text-[10px] text-[#b8b0fc] bg-[#7c6af7]/10 px-2 py-0.5 rounded border border-[#7c6af7]/20">
        <Cpu className="w-3 h-3" /> FPGA/HDL
      </span>
      <span className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
        <Package className="w-3 h-3" /> vpm
      </span>
      <span className="flex items-center gap-1 text-[10px] text-yellow-400 bg-yellow-500/10 px-2 py-0.5 rounded border border-yellow-500/20">
        <Terminal className="w-3 h-3" /> JIT
      </span>
    </div>
  );
  if (version === "1.3") return (
    <div className="ml-auto">
      <span className="flex items-center gap-1 text-[10px] text-yellow-400 bg-yellow-500/10 px-2 py-0.5 rounded border border-yellow-500/20">
        <Zap className="w-3 h-3" /> JS Compiler
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
        <p className="text-sm text-white/50">Version history and what's new in Viper Invictus</p>
      </div>

      <div className="space-y-6">
        {CHANGELOG.map(version => (
          <div key={version.version} className={`bg-white/5 border rounded-xl overflow-hidden ${version.version === "2.0" ? "border-[#7c6af7]/30 shadow-lg shadow-[#7c6af7]/5" : "border-white/10"}`}>
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-white/[0.02] flex-wrap gap-y-2">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${version.version === "2.0" ? "bg-gradient-to-br from-[#7c6af7] via-[#a78bfa] to-[#e94560]" : "bg-gradient-to-br from-[#7c6af7] to-[#e94560]"}`}>
                <GitCommit className="w-4 h-4 text-white" />
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
