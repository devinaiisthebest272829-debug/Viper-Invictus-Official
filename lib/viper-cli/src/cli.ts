// Copyright 2026 mamadwkwk (devinaiisthebest272829@gmail.com)
// Licensed under the Apache License, Version 2.0
// See LICENSE or NOTICE for full license text
// Viper Invictus - A fast scripting language with browser IDE
// All rights reserved.

#!/usr/bin/env node
// Viper Invictus CLI v2.0
// A world-class command-line interface for the Viper programming language

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, statSync, openSync, readSync, closeSync } from "fs";
import { dirname, resolve, join, extname, basename } from "path";
import { spawn, execSync } from "child_process";
import { createInterface } from "readline";
import { cpus, totalmem, hostname } from "os";

import { vpmInstall, vpmSearch, vpmList, vpmRemove, vpmUpdate, vpmPublish, getPackageCode } from "./vpm.js";

// ===== COLORS =====
const C = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  italic: "\x1b[3m",
  underline: "\x1b[4m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  brightRed: "\x1b[91m",
  brightGreen: "\x1b[92m",
  brightYellow: "\x1b[93m",
  brightBlue: "\x1b[94m",
  brightMagenta: "\x1b[95m",
  brightCyan: "\x1b[96m",
  brightWhite: "\x1b[97m",
};

const NO_COLOR = process.env.NO_COLOR || !process.stdout.isTTY;

function c(color: keyof typeof C, text: string): string {
  if (NO_COLOR) return text;
  return `${C[color]}${text}${C.reset}`;
}

function bold(t: string) { return c("bold", t); }
function dim(t: string) { return c("dim", t); }
function green(t: string) { return c("green", t); }
function red(t: string) { return c("red", t); }
function yellow(t: string) { return c("yellow", t); }
function cyan(t: string) { return c("cyan", t); }
function magenta(t: string) { return c("magenta", t); }
function blue(t: string) { return c("blue", t); }

// ===== BANNER =====
function printBanner() {
  if (NO_COLOR) {
    console.log("Viper Invictus v2.0");
    return;
  }
  console.log(`
${C.magenta}${C.bold}  ██╗   ██╗██╗██████╗ ███████╗██████╗ ${C.reset}
${C.magenta}${C.bold}  ██║   ██║██║██╔══██╗██╔════╝██╔══██╗${C.reset}
${C.magenta}${C.bold}  ██║   ██║██║██████╔╝█████╗  ██████╔╝${C.reset}
${C.magenta}${C.bold}  ╚██╗ ██╔╝██║██╔═══╝ ██╔══╝  ██╔══██╗${C.reset}
${C.magenta}${C.bold}   ╚████╔╝ ██║██║     ███████╗██║  ██║${C.reset}
${C.magenta}${C.bold}    ╚═══╝  ╚═╝╚═╝     ╚══════╝╚═╝  ╚═╝${C.reset}
${C.dim}  Invictus CLI v2.0  —  The language that outlasts C++${C.reset}
`);
}

// ===== HELP =====
function printHelp(topic?: string) {
  if (topic === "vpm") {
    printBanner();
    console.log(`${bold("VPM — Viper Package Manager")}\n`);
    console.log(`${bold("Usage:")} viper vpm <command> [args]\n`);
    const cmds = [
      ["install <pkg...>",  "Install package(s). Supports name, URL, or user/repo"],
      ["remove  <pkg...>",  "Uninstall package(s)"],
      ["update  [pkg...]",  "Update all or specific packages"],
      ["search  <query>",   "Search registry and stdlib"],
      ["list",              "List installed packages"],
      ["publish",           "Publish package info (GitHub-based)"],
    ];
    for (const [cmd, desc] of cmds) {
      console.log(`  ${cyan("vpm " + cmd.padEnd(20))} ${dim(desc)}`);
    }
    console.log(`\n${bold("Examples:")}`);
    console.log(`  ${dim("viper vpm install math-ext")}         # Install stdlib math extension`);
    console.log(`  ${dim("viper vpm install user/my-pkg")}      # Install from GitHub`);
    console.log(`  ${dim("viper vpm install https://…/pkg.vi")} # Install from URL`);
    console.log(`  ${dim("viper vpm search http")}              # Search packages`);
    console.log();
    return;
  }

  if (topic === "build") {
    printBanner();
    console.log(`${bold("viper build")} — Compile Viper to JavaScript\n`);
    console.log(`${bold("Usage:")} viper build <file.vi> [options]\n`);
    console.log(`${bold("Options:")}`);
    console.log(`  ${cyan("--target")}  <js>                    Output target (default: js)`);
    console.log(`  ${cyan("--out")}    <file>                  Output file`);
    console.log(`  ${cyan("--stats")}                          Print compilation stats`);
    console.log(`\n${bold("Targets:")}`);
    console.log(`  ${green("js")}        JavaScript (browser/Node.js)`);
    console.log(`\n${bold("Examples:")}`);
    console.log(`  ${dim("viper build main.vi")}                     # Compile to JS`);
    console.log(`  ${dim("viper build main.vi --out dist/main.js")}  # Specify output file`);
    console.log();
    return;
  }

  printBanner();
  console.log(`${bold("Usage:")} ${cyan("viper")} <command> [options] [args]\n`);

  console.log(`${bold("Commands:")}\n`);

  const sections: [string, [string, string][]][] = [
    ["Run & Evaluate", [
      ["run <file.vi>",          "Execute a Viper script file"],
      ["eval <code>",            "Run inline Viper code"],
      ["repl",                   "Start interactive REPL (Read-Eval-Print-Loop)"],
    ]],
    ["Build & Compile", [
      ["build <file.vi>",        "Compile Viper to JavaScript"],
    ]],
    ["Project", [
      ["new [name]",             "Scaffold a new Viper project"],
      ["check <file.vi>",        "Type-check and lint without running"],
      ["fmt <file.vi>",          "Format source code"],
      ["test [file.vi]",         "Run tests using the built-in test library"],
    ]],
    ["Package Manager (vpm)", [
      ["vpm install <pkg>",      "Install a package"],
      ["vpm remove  <pkg>",      "Remove a package"],
      ["vpm search  <query>",    "Search available packages"],
      ["vpm list",               "Show installed packages"],
      ["vpm update",             "Update all packages"],
      ["vpm publish",            "Publish your package"],
    ]],
    ["Threading & Advanced", [
      ["thread <file.vi>",       "Run script in a parallel worker thread"],
      ["info",                   "Show runtime info, versions, and capabilities"],
      ["help [topic]",           "Show help (topics: vpm, build, repl, run)"],
    ]],
  ];

  for (const [section, cmds] of sections) {
    console.log(`  ${bold(section)}`);
    for (const [cmd, desc] of cmds) {
      console.log(`    ${cyan(cmd.padEnd(30))} ${dim(desc)}`);
    }
    console.log();
  }

  console.log(`${bold("Flags:")}`);
  console.log(`  ${cyan("--trusted")}, ${cyan("-t")}     Trust the script (bypass safety limits)`);
  console.log(`  ${cyan("--verbose")}, ${cyan("-v")}     Verbose output`);
  console.log(`  ${cyan("--no-color")}         Disable colored output`);
  console.log(`  ${cyan("--version")}          Print version`);
  console.log();
  console.log(`${bold("Examples:")}`);
  console.log(`  ${dim("viper run hello.vi")}                Run a script`);
  console.log(`  ${dim("viper eval 'print(42 * 42)'")}       Inline eval`);
  console.log(`  ${dim("viper repl")}                        Interactive shell`);
  console.log(`  ${dim("viper build main.vi --target verilog --clock 500")}  FPGA target`);
  console.log(`  ${dim("viper vpm install math-ext crypto")} Install packages`);
  console.log(`  ${dim("viper test suite.vi")}               Run test file`);
  console.log(`  ${dim("viper check main.vi")}               Lint & type check`);
  console.log(`  ${dim("viper new my-project")}              Create project`);
  console.log();
  console.log(dim("  Docs:  https://github.com/devinaiisthebest272829-debug/viper-invictus"));
  console.log(dim("  IDE:   https://viper-invictus.replit.app"));
  console.log();
}

// ===== UTILS =====
function ensureDir(p: string) {
  const d = dirname(p);
  if (!existsSync(d)) mkdirSync(d, { recursive: true });
}

function printError(msg: string, hint?: string) {
  console.error(`\n${red("✗")} ${bold("Error:")} ${msg}`);
  if (hint) console.error(`  ${dim("→")} ${dim(hint)}`);
  console.error();
}

function printSuccess(msg: string) {
  console.log(`${green("✓")} ${msg}`);
}

function printInfo(msg: string) {
  console.log(`${blue("ℹ")} ${msg}`);
}

function printWarn(msg: string) {
  console.log(`${yellow("⚠")} ${msg}`);
}

// ===== LOADER =====
async function loadInterpreter() {
  const { Interpreter, NUM, STR, BOOL, NULL, ARR, OBJ, NATIVE, viperToString,
          Compiler, VM } = await import("@workspace/viper-lang");
  return { Interpreter, NUM, STR, BOOL, NULL, ARR, OBJ, NATIVE, viperToString,
           Compiler, VM };
}

// ===== MAKE CONTEXT =====
function makeCtx(verbose = false) {
  return {
    output: (text: string, kind?: string) => {
      if (kind === "warn") console.warn(yellow("⚠ " + text));
      else if (kind === "error") console.error(red("✗ " + text));
      else console.log(text);
    },
    draw: () => {},
    clearCanvas: () => {},
    clearConsole: () => {},
    getInput: (prompt: string) => {
      process.stdout.write(prompt);
      try {
        const fd = openSync("/dev/stdin", "rs");
        const b = Buffer.alloc(4096);
        const n = readSync(fd, b, 0, 4096);
        closeSync(fd);
        return b.toString("utf-8", 0, n).trimEnd().replace(/\r?\n$/, "");
      } catch {
        return "";
      }
    },
    setTitle: (t: string) => { if (verbose) process.title = t; },
    getTime: () => performance.now(),
    random: () => Math.random(),
    scheduleFrame: () => {},
    cancelFrames: () => {},
  };
}

// ===== INJECT BUILTINS =====
async function injectBuiltins(interp: any, { NUM, STR, BOOL, NULL, ARR, OBJ, NATIVE, viperToString }: any, opts: { verbose?: boolean } = {}) {
  // fs
  const fsObj = OBJ();
  fsObj.props.set("read", NATIVE("fs.read", (args: any[]) => {
    const path = viperToString(args[0] ?? NULL);
    if (!existsSync(path)) throw new Error(`File not found: ${path}`);
    return STR(readFileSync(path, "utf-8"));
  }));
  fsObj.props.set("write", NATIVE("fs.write", (args: any[]) => {
    const path = viperToString(args[0] ?? NULL);
    const content = viperToString(args[1] ?? NULL);
    ensureDir(path);
    writeFileSync(path, content, "utf-8");
    return NULL;
  }));
  fsObj.props.set("exists", NATIVE("fs.exists", (args: any[]) => BOOL(existsSync(viperToString(args[0] ?? NULL)))));
  fsObj.props.set("list", NATIVE("fs.list", (args: any[]) => {
    const dir = viperToString(args[0] ?? NULL);
    if (!existsSync(dir)) return ARR([]);
    return ARR(readdirSync(dir).map(STR));
  }));
  fsObj.props.set("mkdir", NATIVE("fs.mkdir", (args: any[]) => {
    mkdirSync(viperToString(args[0] ?? NULL), { recursive: true });
    return NULL;
  }));
  fsObj.props.set("stat", NATIVE("fs.stat", (args: any[]) => {
    const p = viperToString(args[0] ?? NULL);
    if (!existsSync(p)) return NULL;
    const s = statSync(p);
    const o = OBJ();
    o.props.set("size", NUM(s.size));
    o.props.set("isFile", BOOL(s.isFile()));
    o.props.set("isDir", BOOL(s.isDirectory()));
    o.props.set("mtime", NUM(s.mtimeMs));
    return o;
  }));
  interp.setGlobal("fs", fsObj);

  // env
  const envObj = OBJ();
  envObj.props.set("get", NATIVE("env.get", (args: any[]) => {
    const k = viperToString(args[0] ?? NULL);
    return process.env[k] ? STR(process.env[k]!) : NULL;
  }));
  envObj.props.set("set", NATIVE("env.set", (args: any[]) => {
    process.env[viperToString(args[0] ?? NULL)] = viperToString(args[1] ?? NULL);
    return NULL;
  }));
  envObj.props.set("all", NATIVE("env.all", (_: any[]) => {
    const o = OBJ();
    for (const [k, v] of Object.entries(process.env)) {
      if (v) o.props.set(k, STR(v));
    }
    return o;
  }));
  interp.setGlobal("env", envObj);

  // process
  const procObj = OBJ();
  procObj.props.set("args", ARR(process.argv.slice(2).map(STR)));
  procObj.props.set("cwd", NATIVE("process.cwd", () => STR(process.cwd())));
  procObj.props.set("exit", NATIVE("process.exit", (args: any[]) => {
    process.exit(args[0]?.kind === "number" ? args[0].value : 0);
  }));
  procObj.props.set("pid", NUM(process.pid));
  procObj.props.set("platform", STR(process.platform));
  procObj.props.set("version", STR(process.version));
  interp.setGlobal("process", procObj);

  // storage
  const storagePath = join(process.cwd(), ".viper", "storage.json");
  function loadStorage(): Record<string, string> {
    if (existsSync(storagePath)) {
      try { return JSON.parse(readFileSync(storagePath, "utf-8")); } catch {}
    }
    return {};
  }
  function saveStorage(data: Record<string, string>) {
    ensureDir(storagePath);
    writeFileSync(storagePath, JSON.stringify(data, null, 2), "utf-8");
  }
  const storageObj = OBJ();
  storageObj.props.set("set", NATIVE("storage.set", (args: any[]) => {
    const d = loadStorage();
    d[viperToString(args[0] ?? NULL)] = viperToString(args[1] ?? NULL);
    saveStorage(d);
    return NULL;
  }));
  storageObj.props.set("get", NATIVE("storage.get", (args: any[]) => {
    const d = loadStorage();
    const v = d[viperToString(args[0] ?? NULL)];
    return v === undefined ? NULL : STR(v);
  }));
  storageObj.props.set("delete", NATIVE("storage.delete", (args: any[]) => {
    const d = loadStorage();
    delete d[viperToString(args[0] ?? NULL)];
    saveStorage(d);
    return NULL;
  }));
  storageObj.props.set("keys", NATIVE("storage.keys", () => ARR(Object.keys(loadStorage()).map(STR))));
  interp.setGlobal("storage", storageObj);

  // fetch (native, not curl)
  interp.setGlobal("fetch", NATIVE("fetch", (args: any[]) => {
    const url = viperToString(args[0] ?? NULL);
    try {
      const result = execSync(`curl -s -L --max-time 10 "${url}"`, { encoding: "utf-8" });
      return STR(result);
    } catch {
      return NULL;
    }
  }));
  interp.setGlobal("fetchPost", NATIVE("fetchPost", (args: any[]) => {
    const url = viperToString(args[0] ?? NULL);
    const data = viperToString(args[1] ?? NULL);
    try {
      const result = execSync(`curl -s -L -X POST -H "Content-Type: application/json" -d '${data.replace(/'/g, "'\\''")}' "${url}"`, { encoding: "utf-8" });
      return STR(result);
    } catch {
      return NULL;
    }
  }));

  // http (higher level)
  const httpObj = OBJ();
  httpObj.props.set("get", NATIVE("http.get", (args: any[]) => {
    const url = viperToString(args[0] ?? NULL);
    try {
      const result = execSync(`curl -s -L --max-time 15 "${url}"`, { encoding: "utf-8" });
      return STR(result);
    } catch { return NULL; }
  }));
  httpObj.props.set("post", NATIVE("http.post", (args: any[]) => {
    const url = viperToString(args[0] ?? NULL);
    const body = viperToString(args[1] ?? NULL);
    const ct = args[2]?.kind === "string" ? args[2].value : "application/json";
    try {
      const result = execSync(`curl -s -L -X POST -H "Content-Type: ${ct}" -d '${body.replace(/'/g, "'\\''")}' "${url}"`, { encoding: "utf-8" });
      return STR(result);
    } catch { return NULL; }
  }));
  interp.setGlobal("http", httpObj);

  // thread
  const threadObj = OBJ();
  threadObj.props.set("run", NATIVE("thread.run", (args: any[]) => {
    const path = viperToString(args[0] ?? NULL);
    const child = spawn("npx", ["tsx", resolve(__dirname, "cli.ts"), "run", path], {
      cwd: process.cwd(),
      stdio: "inherit",
      env: process.env,
    });
    child.on("exit", (code) => {
      if (code !== 0) console.error(red(`Thread '${path}' exited with code ${code}`));
    });
    return NULL;
  }));
  interp.setGlobal("thread", threadObj);

  // os
  const osObj = OBJ();
  osObj.props.set("exec", NATIVE("os.exec", (args: any[]) => {
    const cmd = viperToString(args[0] ?? NULL);
    try {
      return STR(execSync(cmd, { encoding: "utf-8" }));
    } catch (e: any) {
      return STR(e.stderr ?? String(e));
    }
  }));
  osObj.props.set("platform", STR(process.platform));
  osObj.props.set("arch", STR(process.arch));
  osObj.props.set("cpus", NUM(cpus().length));
  osObj.props.set("memory", NUM(totalmem()));
  osObj.props.set("hostname", STR(hostname()));
  interp.setGlobal("os", osObj);

  // timer (CLI version)
  const timerObj = OBJ();
  timerObj.props.set("now", NATIVE("timer.now", () => NUM(performance.now())));
  timerObj.props.set("date", NATIVE("timer.date", () => STR(new Date().toISOString())));
  timerObj.props.set("sleep", NATIVE("timer.sleep", (args: any[]) => {
    const ms = args[0]?.kind === "number" ? args[0].value : 0;
    const start = Date.now();
    while (Date.now() - start < ms) {}
    return NULL;
  }));
  interp.setGlobal("timer", timerObj);

  // ── Register compiled-JS (native) equivalents for all CLI globals ──
  // These are injected into compiled JS via __ext so the compiled path
  // has the same capabilities as the tree-walker path.

  interp.registerCompiledGlobal("timer", {
    now:   () => performance.now(),
    date:  () => new Date().toISOString(),
    sleep: (ms: number) => { const t0 = Date.now(); while (Date.now() - t0 < ms) {} },
  });

  interp.registerCompiledGlobal("os", {
    exec:     (cmd: string) => { try { return execSync(cmd, { encoding: "utf-8" }); } catch (e: any) { return String(e.stderr ?? e); } },
    platform: process.platform,
    arch:     process.arch,
    cpus:     cpus().length,
    memory:   totalmem(),
    hostname: hostname(),
  });

  interp.registerCompiledGlobal("env", {
    get: (k: string) => process.env[k] ?? null,
    set: (k: string, v: string) => { process.env[k] = v; },
    all: () => Object.fromEntries(Object.entries(process.env).filter(([, v]) => v !== undefined)),
  });

  interp.registerCompiledGlobal("fs", {
    read:   (p: string) => readFileSync(p, "utf-8"),
    write:  (p: string, c: string) => writeFileSync(p, c, "utf-8"),
    exists: (p: string) => existsSync(p),
    list:   (p: string) => readdirSync(p),
    mkdir:  (p: string) => mkdirSync(p, { recursive: true }),
    stat:   (p: string) => {
      if (!existsSync(p)) return null;
      const s = statSync(p);
      return { size: s.size, isFile: s.isFile(), isDir: s.isDirectory(), mtime: s.mtimeMs };
    },
  });

  interp.registerCompiledGlobal("fetch", (url: string) => {
    try { return execSync(`curl -s -L --max-time 10 "${url}"`, { encoding: "utf-8" }); } catch { return null; }
  });

  interp.registerCompiledGlobal("fetchPost", (url: string, data: string) => {
    try {
      return execSync(`curl -s -L -X POST -H "Content-Type: application/json" -d '${data.replace(/'/g, "'\\''")}' "${url}"`, { encoding: "utf-8" });
    } catch { return null; }
  });

  interp.registerCompiledGlobal("http", {
    get:  (url: string) => { try { return execSync(`curl -s -L --max-time 15 "${url}"`, { encoding: "utf-8" }); } catch { return null; } },
    post: (url: string, body: string) => { try { return execSync(`curl -s -L -X POST -H "Content-Type: application/json" -d '${body.replace(/'/g, "'\\''")}' "${url}"`, { encoding: "utf-8" }); } catch { return null; } },
  });

  const storagePath2 = join(process.cwd(), ".viper", "storage.json");
  const loadSt  = () => { try { return JSON.parse(readFileSync(storagePath2, "utf-8")); } catch { return {}; } };
  const saveSt  = (d: Record<string, string>) => { mkdirSync(join(process.cwd(), ".viper"), { recursive: true }); writeFileSync(storagePath2, JSON.stringify(d, null, 2)); };
  interp.registerCompiledGlobal("storage", {
    get:    (k: string) => { const d = loadSt(); return d[k] ?? null; },
    set:    (k: string, v: string) => { const d = loadSt(); d[k] = v; saveSt(d); },
    delete: (k: string) => { const d = loadSt(); delete d[k]; saveSt(d); },
    keys:   () => Object.keys(loadSt()),
  });

  interp.registerCompiledGlobal("thread", {
    run: (path: string) => {
      const child = spawn("npx", ["tsx", resolve(join(process.cwd(), "lib/viper-cli/src/cli.ts")), "run", path], {
        cwd: process.cwd(), stdio: "inherit", env: process.env,
      });
      child.on("exit", (code) => { if (code !== 0) console.error(`Thread '${path}' exited with ${code}`); });
    },
  });
}

// ===== INJECT PACKAGES =====
function injectPackages(interp: any, source: string) {
  // Auto-detect `import "pkg"` or `use "pkg"` patterns in source
  const importRe = /(?:import|use)\s+"([^"]+)"/g;
  const packages = new Set<string>();
  let m;
  while ((m = importRe.exec(source)) !== null) {
    packages.add(m[1]);
  }
  for (const pkg of packages) {
    const code = getPackageCode(pkg);
    if (code) {
      // Pre-execute package code to inject globals
      try {
        interp.execute(code);
      } catch {}
    } else {
      console.warn(yellow(`⚠ Package '${pkg}' not installed. Run: viper vpm install ${pkg}`));
    }
  }
}

// ===== RUN FILE =====
async function runFile(filePath: string, opts: { trusted?: boolean; jit?: boolean; verbose?: boolean } = {}) {
  const absPath = resolve(filePath);
  if (!existsSync(absPath)) {
    printError(`File not found: ${filePath}`, "Make sure the file path is correct.");
    process.exit(1);
  }
  if (!filePath.endsWith(".vi") && !filePath.endsWith(".viper")) {
    printWarn(`File '${filePath}' doesn't have a .vi extension. Proceeding anyway...`);
  }

  const src = readFileSync(absPath, "utf-8");
  const lib = await loadInterpreter();
  const { Interpreter, NUM, STR, BOOL, NULL, ARR, OBJ, NATIVE, viperToString } = lib;

  if (opts.verbose) {
    printInfo(`Running ${cyan(filePath)} ${opts.trusted ? magenta("(trusted)") : ""}`);
  }

  const ctx = makeCtx(opts.verbose);
  const interp = new Interpreter(ctx, opts.trusted ?? false);

  await injectBuiltins(interp, { NUM, STR, BOOL, NULL, ARR, OBJ, NATIVE, viperToString }, opts);
  injectPackages(interp, src);

  const t0 = performance.now();
  const result = interp.execute(src);
  const elapsed = (performance.now() - t0).toFixed(2);

  if (!result.success) {
    if (result.errors && result.errors.length > 0) {
      console.error(`\n${red("✗")} ${bold(`${result.errors.length} error(s) found in ${filePath}:`)}\n`);
      for (const err of result.errors) {
        const loc = err.line ? ` ${dim(`(line ${err.line})`)}` : "";
        console.error(`  ${red("•")} ${err.message}${loc}`);
        // Show source context
        if (err.line && err.line > 0) {
          const lines = src.split("\n");
          const lineIdx = err.line - 1;
          if (lines[lineIdx]) {
            console.error(`\n    ${dim(String(err.line).padStart(4))} │ ${lines[lineIdx]}`);
            console.error(`         │ ${red("^".repeat(Math.min(lines[lineIdx].trim().length, 20)))}`);
          }
        }
        console.error();
      }
      process.exit(1);
    } else {
      const loc = result.errorLine ? ` ${dim(`(line ${result.errorLine})`)}` : "";
      console.error(`\n${red("✗")} ${bold("Runtime error:")} ${result.error}${loc}\n`);
      process.exit(1);
    }
  }

  if (opts.verbose) {
    printSuccess(`Finished in ${cyan(elapsed + "ms")}`);
  }
}

// ===== REPL =====
async function startREPL(opts: { trusted?: boolean; verbose?: boolean } = {}) {
  const lib = await loadInterpreter();
  const { Interpreter, NUM, STR, BOOL, NULL, ARR, OBJ, NATIVE, viperToString } = lib;

  if (!NO_COLOR) {
    printBanner();
  }
  console.log(`${bold("Viper REPL v2.0")} — Type ${cyan(".help")} for commands, ${cyan(".exit")} to quit\n`);

  const ctx = makeCtx(opts.verbose);
  const interp = new Interpreter(ctx, opts.trusted ?? true);
  await injectBuiltins(interp, { NUM, STR, BOOL, NULL, ARR, OBJ, NATIVE, viperToString }, opts);

  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: `${NO_COLOR ? "viper> " : `${C.magenta}${C.bold}viper${C.reset}${C.cyan}❯${C.reset} `}`,
    completer: (line: string) => {
      const completions = ["print", "let", "const", "fn", "class", "for", "while", "if", "return",
                           "math.", "JSON.", "timer.", "fs.", "http.", "env.", "process.", "os.", "storage."];
      const hits = completions.filter(c => c.startsWith(line));
      return [hits.length ? hits : completions, line];
    },
  });

  let multilineBuffer = "";
  let depth = 0;

  rl.prompt();

  rl.on("line", (line: string) => {
    const trimmed = line.trim();

    // REPL commands
    if (trimmed.startsWith(".")) {
      const [cmd, ...args] = trimmed.slice(1).split(" ");
      switch (cmd) {
        case "exit": case "quit":
          console.log(dim("Goodbye!"));
          process.exit(0);
        case "help":
          console.log(`\n${bold("REPL Commands:")}`);
          console.log(`  ${cyan(".help")}               Show this help`);
          console.log(`  ${cyan(".exit")} / ${cyan(".quit")}    Exit the REPL`);
          console.log(`  ${cyan(".clear")}              Clear the screen`);
          console.log(`  ${cyan(".load <file>")}       Load and execute a .vi file`);
          console.log(`  ${cyan(".reset")}              Reset the interpreter state`);
          console.log(`  ${cyan(".pkg <name>")}        Install and load a package`);
          console.log(`  ${cyan(".vars")}               Show defined variables`);
          console.log(`  ${cyan(".time <expr>")}       Time an expression`);
          console.log();
          break;
        case "clear":
          process.stdout.write("\x1b[2J\x1b[H");
          break;
        case "reset":
          console.log(dim("Resetting interpreter..."));
          // Create new interpreter
          break;
        case "load":
          if (args[0] && existsSync(args[0])) {
            const src = readFileSync(args[0], "utf-8");
            const r = interp.execute(src);
            if (!r.success) console.error(red(`Error: ${r.error}`));
            else console.log(green(`✓ Loaded ${args[0]}`));
          } else {
            console.log(red(`File not found: ${args[0]}`));
          }
          break;
        case "vars":
          console.log(dim("(Variable inspection requires trusted mode)"));
          break;
        case "time": {
          const code = args.join(" ");
          const t = performance.now();
          const r = interp.execute(code);
          const ms = (performance.now() - t).toFixed(3);
          if (!r.success) console.error(red(r.error ?? "Error"));
          else console.log(dim(`Completed in ${ms}ms`));
          break;
        }
        default:
          console.log(yellow(`Unknown command: .${cmd}. Type .help for commands.`));
      }
      rl.prompt();
      return;
    }

    // Track brace depth for multi-line input
    for (const ch of line) {
      if (ch === "{" || ch === "(" || ch === "[") depth++;
      if (ch === "}" || ch === ")" || ch === "]") depth--;
    }

    multilineBuffer += (multilineBuffer ? "\n" : "") + line;

    if (depth <= 0 && multilineBuffer.trim()) {
      const code = multilineBuffer;
      multilineBuffer = "";
      depth = 0;

      try {
        const result = interp.execute(code);
        if (!result.success) {
          if (result.errors?.length) {
            for (const e of result.errors) {
              console.error(`${red("✗")} ${e.message}${e.line ? dim(` (line ${e.line})`) : ""}`);
            }
          } else {
            console.error(`${red("✗")} ${result.error}`);
          }
        }
      } catch (e) {
        console.error(`${red("✗")} ${e}`);
      }

      rl.setPrompt(`${NO_COLOR ? "viper> " : `${C.magenta}${C.bold}viper${C.reset}${C.cyan}❯${C.reset} `}`);
    } else if (depth > 0) {
      rl.setPrompt(`${NO_COLOR ? "  ... " : `${C.dim}  ...${C.reset} `}`);
    }

    rl.prompt();
  });

  rl.on("close", () => {
    console.log(dim("\nGoodbye!"));
    process.exit(0);
  });
}

// ===== BUILD =====
async function buildFile(filePath: string, opts: {
  target?: string;
  out?: string;
  clock?: number;
  width?: number;
  jit?: boolean;
  stats?: boolean;
  verbose?: boolean;
}) {
  if (!existsSync(filePath)) {
    printError(`File not found: ${filePath}`);
    process.exit(1);
  }

  const src = readFileSync(filePath, "utf-8");
  const target = opts.target ?? "js";
  const outFile = opts.out ?? filePath.replace(/\.vi(per)?$/, `.${target === "verilog" ? "v" : target === "vhdl" ? "vhd" : target === "sv" ? "sv" : "js"}`);
  const moduleName = basename(filePath).replace(/\.vi(per)?$/, "").replace(/[^a-zA-Z0-9]/g, "_");

  console.log(`\n${bold("Viper Build")}`);
  console.log(`  ${dim("Source:")}  ${cyan(filePath)}`);
  console.log(`  ${dim("Target:")}  ${green(target)}`);
  console.log(`  ${dim("Output:")}  ${cyan(outFile)}`);
  console.log();

  const lib = await loadInterpreter();
  const { Compiler } = lib;
  const { lex } = await import("@workspace/viper-lang");
  const { parse } = await import("@workspace/viper-lang");

  const t0 = performance.now();

  try {
    const tokens = lex(src);
    const ast = parse(tokens);

    if (target === "js" || !target) {
      const { compileToJS } = await import("@workspace/viper-lang");
      let jsCode = compileToJS(ast, src);
      writeFileSync(outFile, jsCode, "utf-8");
      const elapsed = (performance.now() - t0).toFixed(2);
      printSuccess(`Compiled to JavaScript in ${cyan(elapsed + "ms")}`);
      printSuccess(`Output: ${cyan(outFile)}`);

      if (opts.stats) {
        const lines = jsCode.split("\n").length;
        console.log(`\n  ${dim("Lines:")}  ${lines}`);
        console.log(`  ${dim("Size:")}   ${jsCode.length} bytes`);
      }
    } else {
      printError(`Unknown target: ${target}. Only 'js' is supported.`);
      process.exit(1);
    }
  } catch (e: any) {
    printError(`Compilation failed: ${e.message ?? e}`);
    process.exit(1);
  }
}

// ===== CHECK =====
async function checkFile(filePath: string, opts: { verbose?: boolean } = {}) {
  if (!existsSync(filePath)) {
    printError(`File not found: ${filePath}`);
    process.exit(1);
  }

  const src = readFileSync(filePath, "utf-8");
  console.log(`\n${bold("Viper Check")} — ${cyan(filePath)}\n`);

  const { lex, parse } = await import("@workspace/viper-lang");

  let hasErrors = false;

  try {
    const tokens = lex(src);
    const ast = parse(tokens);

    // Basic lint rules
    const warnings: string[] = [];
    const errors: string[] = [];

    // Check for common patterns
    const lines = src.split("\n");
    lines.forEach((line, i) => {
      const ln = i + 1;
      // Check for var (prefer let/const)
      if (/\bvar\b/.test(line) && !line.trim().startsWith("//")) {
        warnings.push(`Line ${ln}: Prefer ${cyan("let")} or ${cyan("const")} over ${yellow("var")}`);
      }
      // Check for eval-like patterns
      if (/eval\s*\(/.test(line)) {
        warnings.push(`Line ${ln}: Avoid ${red("eval()")} — use functions instead`);
      }
      // Check for magic numbers
      if (/[^a-zA-Z]\d{4,}[^a-zA-Z]/.test(line) && !line.includes("//")) {
        warnings.push(`Line ${ln}: Consider naming magic number as a ${cyan("const")}`);
      }
    });

    // Count constructs
    const fnCount = (src.match(/\bfn\b|\bfunction\b|\bdef\b/g) ?? []).length;
    const classCount = (src.match(/\bclass\b/g) ?? []).length;
    const lines_count = lines.length;
    const complexity = (src.match(/\bif\b|\bwhile\b|\bfor\b|\bswitch\b/g) ?? []).length;

    if (errors.length > 0) {
      hasErrors = true;
      console.log(`${red("Errors:")}`);
      errors.forEach(e => console.log(`  ${red("✗")} ${e}`));
    }

    if (warnings.length > 0) {
      console.log(`${yellow("Warnings:")}`);
      warnings.forEach(w => console.log(`  ${yellow("⚠")} ${w}`));
    }

    if (errors.length === 0 && warnings.length === 0) {
      printSuccess("No issues found.");
    }

    console.log(`\n${bold("Summary:")}`);
    console.log(`  ${dim("Lines:")}      ${lines_count}`);
    console.log(`  ${dim("Functions:")}  ${fnCount}`);
    console.log(`  ${dim("Classes:")}    ${classCount}`);
    console.log(`  ${dim("Complexity:")} ${complexity} branch point(s)`);
    console.log(`  ${dim("Status:")}     ${hasErrors ? red("✗ Errors found") : warnings.length > 0 ? yellow("⚠ Warnings") : green("✓ Clean")}`);
    console.log();

  } catch (e: any) {
    printError(`Parse error: ${e.message ?? e}`);
    hasErrors = true;
  }

  if (hasErrors) process.exit(1);
}

// ===== FORMAT =====
async function fmtFile(filePath: string, opts: { write?: boolean; check?: boolean } = {}) {
  if (!existsSync(filePath)) {
    printError(`File not found: ${filePath}`);
    process.exit(1);
  }

  const src = readFileSync(filePath, "utf-8");
  console.log(`${bold("Viper Fmt")} — ${cyan(filePath)}`);

  // Basic formatter: normalize indentation and spacing
  const lines = src.split("\n");
  let indent = 0;
  const formatted = lines.map(line => {
    const trimmed = line.trim();
    if (!trimmed) return "";
    // Decrease indent for closing braces
    if (trimmed.startsWith("}") || trimmed.startsWith("]") || trimmed.startsWith(")")) {
      indent = Math.max(0, indent - 1);
    }
    const result = "  ".repeat(indent) + trimmed;
    // Increase indent for opening braces
    if (trimmed.endsWith("{") || trimmed.endsWith("[") || trimmed.endsWith("(")) {
      indent++;
    }
    return result;
  }).join("\n");

  if (opts.check) {
    if (formatted === src) {
      printSuccess("Already formatted.");
    } else {
      printWarn(`${filePath} is not formatted. Run ${cyan("viper fmt")} to fix.`);
      process.exit(1);
    }
    return;
  }

  if (opts.write || true) {
    writeFileSync(filePath, formatted, "utf-8");
    printSuccess(`Formatted ${cyan(filePath)}`);
  } else {
    console.log(formatted);
  }
}

// ===== NEW PROJECT =====
async function newProject(name: string) {
  const dir = resolve(name || "my-viper-project");
  if (existsSync(dir)) {
    printError(`Directory already exists: ${dir}`);
    process.exit(1);
  }

  mkdirSync(dir, { recursive: true });
  mkdirSync(join(dir, "src"), { recursive: true });
  mkdirSync(join(dir, ".viper"), { recursive: true });

  // viper.json
  const manifest = {
    name: basename(dir),
    version: "0.1.0",
    description: "A Viper Invictus project",
    author: "",
    license: "MIT",
    dependencies: {},
    scripts: {
      start: `viper run src/main.vi`,
      test: `viper test src/test.vi`,
      build: `viper build src/main.vi`,
    },
  };
  writeFileSync(join(dir, "viper.json"), JSON.stringify(manifest, null, 2), "utf-8");

  // main.vi
  writeFileSync(join(dir, "src", "main.vi"), `// ${basename(dir)} — Viper Invictus Project
// Generated by Viper CLI v2.0

fn greet(name) {
  print(\`Hello, \${name}! Welcome to Viper Invictus.\`)
}

greet("World")

let nums = [1, 2, 3, 4, 5]
let sum = nums.reduce(fn(acc, x) { return acc + x }, 0)
print(\`Sum: \${sum}\`)
`, "utf-8");

  // test.vi
  writeFileSync(join(dir, "src", "test.vi"), `// Test file for ${basename(dir)}
// Use: viper test src/test.vi

use "test"

describe("Math", fn() {
  it("adds numbers", fn() {
    expect(2 + 2).toBe(4)
    expect(10 * 5).toBe(50)
  })
  it("string concatenation", fn() {
    expect("Hello" + " " + "World").toBe("Hello World")
  })
})

testSummary()
`, "utf-8");

  // README.md
  writeFileSync(join(dir, "README.md"), `# ${basename(dir)}

A [Viper Invictus](https://viper-invictus.replit.app) project.

## Getting Started

\`\`\`bash
viper run src/main.vi      # Run the project
viper test src/test.vi     # Run tests
viper build src/main.vi    # Compile to JavaScript
viper build src/main.vi --out dist/main.js  # Specify output file
\`\`\`

## Package Management

\`\`\`bash
viper vpm install math-ext   # Install a package
viper vpm list               # List installed packages
\`\`\`
`, "utf-8");

  // .gitignore
  writeFileSync(join(dir, ".gitignore"), `.viper/storage.json
.viper/packages/
node_modules/
dist/
`, "utf-8");

  printBanner();
  console.log(`${green("✓")} Created new Viper project: ${bold(cyan(basename(dir)))}\n`);
  console.log(`  ${dim("Files created:")}`);
  console.log(`    ${dim("•")} viper.json`);
  console.log(`    ${dim("•")} src/main.vi`);
  console.log(`    ${dim("•")} src/test.vi`);
  console.log(`    ${dim("•")} README.md`);
  console.log(`    ${dim("•")} .gitignore`);
  console.log();
  console.log(`  ${bold("Get started:")}`);
  console.log(`    ${dim("$")} ${cyan(`cd ${name || "my-viper-project"}`)}`);
  console.log(`    ${dim("$")} ${cyan("viper run src/main.vi")}`);
  console.log(`    ${dim("$")} ${cyan("viper repl")}`);
  console.log();
}

// ===== INFO =====
async function printInfo_cmd() {
  printBanner();
  const { Interpreter } = await loadInterpreter();

  console.log(`${bold("Runtime Information")}\n`);
  const items = [
    ["CLI Version",    "2.0.0"],
    ["Language",       "Viper Invictus v2.0"],
    ["Node.js",        process.version],
    ["Platform",       `${process.platform} ${process.arch}`],
    ["CPUs",           String(cpus().length)],
    ["Memory",         `${Math.round(totalmem() / 1024 / 1024)} MB`],
    ["Working dir",    process.cwd()],
  ];
  for (const [k, v] of items) {
    console.log(`  ${dim(k.padEnd(16))} ${cyan(v)}`);
  }

  console.log(`\n${bold("Compiler:")}`);
  console.log(`  ${green("✓")} ${cyan("js".padEnd(14))} ${dim("JavaScript (browser/Node.js)")}`);
  console.log(`  ${dim("Lexer → Parser → JS Emitter. No bytecode, no JIT.")}`);

  console.log(`\n${bold("Links:")}`);
  console.log(`  ${dim("IDE:")}      ${cyan("https://viper-invictus.replit.app")}`);
  console.log(`  ${dim("Docs:")}     ${cyan("https://viper-invictus.replit.app/#/docs")}`);
  console.log(`  ${dim("GitHub:")}   ${cyan("https://github.com/devinaiisthebest272829-debug/viper-invictus")}`);
  console.log();
}

// ===== TEST =====
async function runTests(filePath: string, opts: { trusted?: boolean; verbose?: boolean } = {}) {
  if (!existsSync(filePath)) {
    printError(`Test file not found: ${filePath}`);
    process.exit(1);
  }

  console.log(`\n${bold("Viper Test")} — ${cyan(filePath)}\n`);
  const testLib = getPackageCode("test") ?? "";
  const src = readFileSync(filePath, "utf-8");
  const fullSrc = testLib + "\n" + src;

  const lib = await loadInterpreter();
  const { Interpreter, NUM, STR, BOOL, NULL, ARR, OBJ, NATIVE, viperToString } = lib;
  const ctx = makeCtx(opts.verbose);
  const interp = new Interpreter(ctx, opts.trusted ?? true);
  await injectBuiltins(interp, { NUM, STR, BOOL, NULL, ARR, OBJ, NATIVE, viperToString });

  const t0 = performance.now();
  const result = interp.execute(fullSrc);
  const elapsed = (performance.now() - t0).toFixed(2);

  if (!result.success) {
    printError(`Test execution failed: ${result.error}`);
    process.exit(1);
  }

  console.log(dim(`\nFinished in ${elapsed}ms`));
}

// ===== MAIN =====
async function main() {
  const argv = process.argv.slice(2);

  // Global flags
  const trusted = argv.includes("--trusted") || argv.includes("-t");
  const jit = argv.includes("--jit") || argv.includes("-j");
  const verbose = argv.includes("--verbose") || argv.includes("-v");
  const noColor = argv.includes("--no-color");
  if (noColor) (process.env as any).NO_COLOR = "1";

  // Filter flags from positional args
  const positional = argv.filter(a => !a.startsWith("-"));
  const cmd = positional[0];

  if (!cmd || cmd === "help" || argv.includes("--help") || argv.includes("-h")) {
    printHelp(positional[1]);
    process.exit(0);
  }

  if (argv.includes("--version") || cmd === "version") {
    console.log("Viper Invictus CLI v2.0.0");
    process.exit(0);
  }

  if (cmd === "run") {
    const file = positional[1];
    if (!file) { printError("Missing file path", "Usage: viper run <file.vi>"); process.exit(1); }
    await runFile(file, { trusted, jit, verbose });
    return;
  }

  if (cmd === "eval") {
    const code = positional.slice(1).join(" ") || argv.find(a => !a.startsWith("-") && a !== "eval") || "";
    if (!code) { printError("Missing code", "Usage: viper eval '<code>'"); process.exit(1); }
    const lib = await loadInterpreter();
    const { Interpreter, NUM, STR, BOOL, NULL, ARR, OBJ, NATIVE, viperToString } = lib;
    const ctx = makeCtx(verbose);
    const interp = new Interpreter(ctx, trusted);
    await injectBuiltins(interp, { NUM, STR, BOOL, NULL, ARR, OBJ, NATIVE, viperToString });
    const result = interp.execute(code);
    if (!result.success) {
      printError(result.error ?? "Unknown error");
      process.exit(1);
    }
    return;
  }

  if (cmd === "repl") {
    await startREPL({ trusted, verbose });
    return;
  }

  if (cmd === "build") {
    const file = positional[1];
    if (!file) {
      printHelp("build");
      process.exit(1);
    }
    const targetIdx = argv.indexOf("--target");
    const outIdx = argv.indexOf("--out");
    const clockIdx = argv.indexOf("--clock");
    const widthIdx = argv.indexOf("--width");
    await buildFile(file, {
      target: targetIdx >= 0 ? argv[targetIdx + 1] : "js",
      out: outIdx >= 0 ? argv[outIdx + 1] : undefined,
      clock: clockIdx >= 0 ? parseInt(argv[clockIdx + 1]) : 200,
      width: widthIdx >= 0 ? parseInt(argv[widthIdx + 1]) : 32,
      jit,
      stats: argv.includes("--stats"),
      verbose,
    });
    return;
  }

  if (cmd === "check") {
    const file = positional[1];
    if (!file) { printError("Missing file path", "Usage: viper check <file.vi>"); process.exit(1); }
    await checkFile(file, { verbose });
    return;
  }

  if (cmd === "fmt") {
    const file = positional[1];
    if (!file) { printError("Missing file path", "Usage: viper fmt <file.vi>"); process.exit(1); }
    await fmtFile(file, { write: true, check: argv.includes("--check") });
    return;
  }

  if (cmd === "new") {
    await newProject(positional[1] || "my-viper-project");
    return;
  }

  if (cmd === "test") {
    const file = positional[1] || "test.vi";
    await runTests(file, { trusted, verbose });
    return;
  }

  if (cmd === "info") {
    await printInfo_cmd();
    return;
  }

  if (cmd === "thread") {
    const file = positional[1];
    if (!file) { printError("Missing file path", "Usage: viper thread <file.vi>"); process.exit(1); }
    console.log(`${blue("⟳")} Spawning thread: ${cyan(file)}`);
    const child = spawn("npx", ["tsx", resolve(__dirname, "cli.ts"), "run", file], {
      cwd: process.cwd(),
      stdio: "inherit",
      env: process.env,
    });
    child.on("exit", (code) => {
      if (code !== 0) console.error(red(`Thread exited with code ${code}`));
      else printSuccess("Thread finished.");
    });
    return;
  }

  if (cmd === "vpm") {
    const sub = positional[1];
    const rest = positional.slice(2);

    if (!sub || sub === "help") { printHelp("vpm"); process.exit(0); }

    if (sub === "install" || sub === "i") {
      await vpmInstall(rest);
      return;
    }
    if (sub === "remove" || sub === "rm" || sub === "uninstall") {
      vpmRemove(rest);
      return;
    }
    if (sub === "search" || sub === "s") {
      await vpmSearch(rest.join(" "));
      return;
    }
    if (sub === "list" || sub === "ls") {
      vpmList();
      return;
    }
    if (sub === "update" || sub === "up") {
      await vpmUpdate(rest);
      return;
    }
    if (sub === "publish") {
      await vpmPublish();
      return;
    }
    printError(`Unknown vpm command: ${sub}`, "Run `viper vpm help` for usage.");
    process.exit(1);
  }

  // If it looks like a file, run it directly
  if (cmd.endsWith(".vi") || cmd.endsWith(".viper")) {
    await runFile(cmd, { trusted, jit, verbose });
    return;
  }

  printError(`Unknown command: ${cmd}`, "Run `viper help` to see available commands.");
  process.exit(1);
}

main().catch(err => {
  console.error(`\n${red("✗")} ${bold("Fatal error:")} ${err}`);
  process.exit(1);
});
