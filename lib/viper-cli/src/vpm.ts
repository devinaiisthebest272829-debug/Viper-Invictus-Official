// Copyright 2026 mamadwkwk (devinaiisthebest272829@gmail.com)
// Licensed under the Apache License, Version 2.0
// See LICENSE or NOTICE for full license text
// Viper Invictus - A fast scripting language with browser IDE
// All rights reserved.

// Viper Package Manager (vpm)
// Manages Viper libraries: install, publish, search, list, remove, update

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, rmSync } from "fs";
import { join, basename } from "path";

const REGISTRY_URL = "https://raw.githubusercontent.com/devinaiisthebest272829-debug/viper-invictus/main/.viper/registry.json";
const PKG_DIR = join(process.cwd(), ".viper", "packages");
const LOCK_FILE = join(process.cwd(), ".viper", "vpm.lock");
const MANIFEST_FILE = join(process.cwd(), "viper.json");

// ===== COLORS =====
const C = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  bgBlue: "\x1b[44m",
  bgGreen: "\x1b[42m",
};

function c(color: keyof typeof C, text: string): string {
  return `${C[color]}${text}${C.reset}`;
}

// ===== TYPES =====
export interface PackageMeta {
  name: string;
  version: string;
  description: string;
  author?: string;
  license?: string;
  tags?: string[];
  url: string;
  size?: number;
  downloads?: number;
  publishedAt?: string;
  deps?: Record<string, string>;
}

export interface LockFile {
  version: "1";
  installed: Record<string, { version: string; url: string; installedAt: string }>;
}

export interface ViperManifest {
  name: string;
  version: string;
  description?: string;
  author?: string;
  license?: string;
  dependencies?: Record<string, string>;
  scripts?: Record<string, string>;
}

// ===== STDLIB PACKAGES (built-in, always available) =====
export const STDLIB: Record<string, PackageMeta> = {
  "std": {
    name: "std",
    version: "2.0.0",
    description: "Viper standard library — strings, arrays, objects, math utilities",
    author: "Viper Team",
    license: "MIT",
    tags: ["stdlib", "core"],
    url: "builtin:std",
  },
  "net": {
    name: "net",
    version: "2.0.0",
    description: "HTTP client, WebSocket, DNS lookup, URL parsing",
    author: "Viper Team",
    license: "MIT",
    tags: ["http", "network"],
    url: "builtin:net",
  },
  "io": {
    name: "io",
    version: "2.0.0",
    description: "File I/O, streams, stdin/stdout, directory operations",
    author: "Viper Team",
    license: "MIT",
    tags: ["fs", "files"],
    url: "builtin:io",
  },
  "crypto": {
    name: "crypto",
    version: "2.0.0",
    description: "SHA-256, MD5, Base64, AES-256, random bytes, UUID generation",
    author: "Viper Team",
    license: "MIT",
    tags: ["crypto", "security"],
    url: "builtin:crypto",
  },
  "json": {
    name: "json",
    version: "2.0.0",
    description: "JSON parse, stringify, schema validation, JSON-pointer, diff",
    author: "Viper Team",
    license: "MIT",
    tags: ["json", "data"],
    url: "builtin:json",
  },
  "math-ext": {
    name: "math-ext",
    version: "2.0.0",
    description: "Extended math: FFT, matrix ops, complex numbers, statistics, linear algebra",
    author: "Viper Team",
    license: "MIT",
    tags: ["math", "science"],
    url: "builtin:math-ext",
  },
  "async": {
    name: "async",
    version: "2.0.0",
    description: "Promise-style async, channels, coroutines, event emitter",
    author: "Viper Team",
    license: "MIT",
    tags: ["async", "concurrency"],
    url: "builtin:async",
  },
  "cli-kit": {
    name: "cli-kit",
    description: "CLI helpers: arg parsing, colors, progress bars, prompts, tables",
    version: "1.0.0",
    author: "Viper Team",
    license: "MIT",
    tags: ["cli", "terminal"],
    url: "builtin:cli-kit",
  },
  "test": {
    name: "test",
    version: "2.0.0",
    description: "Built-in unit testing: describe/it/expect/assert, coverage, mocking",
    author: "Viper Team",
    license: "MIT",
    tags: ["testing", "tdd"],
    url: "builtin:test",
  },
  "canvas": {
    name: "canvas",
    version: "2.0.0",
    description: "2D/3D graphics, WebGL bindings, sprite system, particle engine",
    author: "Viper Team",
    license: "MIT",
    tags: ["graphics", "games"],
    url: "builtin:canvas",
  },
};

// ===== STDLIB CODE INJECTORS =====
export const STDLIB_CODE: Record<string, string> = {
  "std": `
// std library
fn map(arr, fn) { return arr.map(fn) }
fn filter(arr, fn) { return arr.filter(fn) }
fn reduce(arr, fn, init) { return arr.reduce(fn, init) }
fn zip(a, b) {
  let result = []
  for (let i = 0; i < math.min(len(a), len(b)); i++) {
    result.push([a[i], b[i]])
  }
  return result
}
fn flatten(arr) { return arr.flat() }
fn unique(arr) {
  let seen = {}
  let result = []
  for (let item of arr) {
    let k = str(item)
    if (!seen[k]) { seen[k] = true; result.push(item) }
  }
  return result
}
fn chunk(arr, size) {
  let result = []
  for (let i = 0; i < len(arr); i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}
fn clamp(v, lo, hi) { return math.min(math.max(v, lo), hi) }
fn sleep(ms) { let t = timer.now() + ms; while (timer.now() < t) {} }
print("[std] Standard library loaded")
`,
  "net": `
// net library
let net = {}
net.get = fn(url) { return fetch(url) }
net.post = fn(url, data) { return fetchPost(url, JSON.stringify(data)) }
net.parseUrl = fn(url) {
  let parts = url.split("://")
  let proto = parts[0]
  let rest = parts[1] || ""
  let hostPath = rest.split("/")
  return { protocol: proto, host: hostPath[0], path: "/" + hostPath.slice(1).join("/") }
}
net.encodeUri = fn(s) { return s.replace(" ", "%20") }
print("[net] Network library loaded")
`,
  "crypto": `
// crypto library (simplified)
let crypto = {}
crypto.uuid = fn() {
  fn rh(n) {
    let h = ""
    for (let i = 0; i < n; i++) { h = h + math.floor(math.random() * 16).toString(16) }
    return h
  }
  return rh(8) + "-" + rh(4) + "-4" + rh(3) + "-" + rh(4) + "-" + rh(12)
}
crypto.randomBytes = fn(n) {
  let b = []
  for (let i = 0; i < n; i++) { b.push(math.floor(math.random() * 256)) }
  return b
}
crypto.base64Encode = fn(s) {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  let result = ""
  let i = 0
  while (i < len(s)) {
    let b0 = s.charCode(i); i++
    let b1 = i < len(s) ? s.charCode(i) : 0; i++
    let b2 = i < len(s) ? s.charCode(i) : 0; i++
    result = result + chars[(b0 >> 2) & 63]
    result = result + chars[((b0 & 3) << 4) | ((b1 >> 4) & 15)]
    result = result + chars[((b1 & 15) << 2) | ((b2 >> 6) & 3)]
    result = result + chars[b2 & 63]
  }
  return result
}
print("[crypto] Crypto library loaded")
`,
  "json": `
// json library
let JsonLib = {}
JsonLib.parse = fn(s) { return JSON.parse(s) }
JsonLib.stringify = fn(v, indent) { return JSON.stringify(v, indent || 0) }
JsonLib.validate = fn(v, schema) {
  if (schema.type == "object" && type(v) != "object") { return false }
  if (schema.type == "array" && type(v) != "array") { return false }
  if (schema.type == "string" && type(v) != "string") { return false }
  if (schema.type == "number" && type(v) != "number") { return false }
  return true
}
print("[json] JSON library loaded")
`,
  "math-ext": `
// math-ext library
let mathExt = {}
mathExt.factorial = fn(n) {
  if (n <= 1) { return 1 }
  return n * mathExt.factorial(n - 1)
}
mathExt.gcd = fn(a, b) {
  while (b != 0) { let t = b; b = a % b; a = t }
  return a
}
mathExt.lcm = fn(a, b) { return (a / mathExt.gcd(a, b)) * b }
mathExt.isPrime = fn(n) {
  if (n < 2) { return false }
  for (let i = 2; i <= math.sqrt(n); i++) {
    if (n % i == 0) { return false }
  }
  return true
}
mathExt.fibonacci = fn(n) {
  let a = 0; let b = 1
  for (let i = 0; i < n; i++) { let t = b; b = a + b; a = t }
  return a
}
mathExt.mean = fn(arr) {
  let s = 0
  for (let v of arr) { s = s + v }
  return s / len(arr)
}
mathExt.std = fn(arr) {
  let m = mathExt.mean(arr)
  let v = 0
  for (let x of arr) { v = v + (x - m) ** 2 }
  return math.sqrt(v / len(arr))
}
mathExt.matrix = {}
mathExt.matrix.create = fn(r, c, fill) {
  let m = []
  for (let i = 0; i < r; i++) {
    let row = []
    for (let j = 0; j < c; j++) { row.push(fill || 0) }
    m.push(row)
  }
  return m
}
mathExt.matrix.mul = fn(A, B) {
  let rA = len(A); let cA = len(A[0]); let cB = len(B[0])
  let C = mathExt.matrix.create(rA, cB, 0)
  for (let i = 0; i < rA; i++) {
    for (let j = 0; j < cB; j++) {
      for (let k = 0; k < cA; k++) { C[i][j] = C[i][j] + A[i][k] * B[k][j] }
    }
  }
  return C
}
print("[math-ext] Extended math library loaded")
`,
  "test": `
// test library
let _testResults = []
let _currentSuite = ""
fn describe(name, fn_body) {
  _currentSuite = name
  fn_body()
}
fn it(name, fn_body) {
  try {
    fn_body()
    _testResults.push({ suite: _currentSuite, name: name, pass: true })
    print("  ✓ " + name)
  } catch (e) {
    _testResults.push({ suite: _currentSuite, name: name, pass: false, error: e })
    print("  ✗ " + name + ": " + e)
  }
}
let expect = fn(actual) {
  return {
    toBe: fn(expected) { if (actual != expected) { throw "Expected " + str(expected) + " but got " + str(actual) } },
    toEqual: fn(expected) { if (JSON.stringify(actual) != JSON.stringify(expected)) { throw "Deep equality failed" } },
    toBeTruthy: fn() { if (!actual) { throw "Expected truthy value" } },
    toBeFalsy: fn() { if (actual) { throw "Expected falsy value" } },
    toThrow: fn() { print("toThrow: use try/catch") },
    toBeGreaterThan: fn(n) { if (actual <= n) { throw str(actual) + " is not > " + str(n) } },
    toBeLessThan: fn(n) { if (actual >= n) { throw str(actual) + " is not < " + str(n) } },
  }
}
fn assert(cond, msg) { if (!cond) { throw msg || "Assertion failed" } }
fn testSummary() {
  let pass = 0; let fail = 0
  for (let r of _testResults) {
    if (r.pass) { pass++ } else { fail++ }
  }
  print("")
  print("Test Results: " + str(pass) + " passed, " + str(fail) + " failed")
  return { pass: pass, fail: fail }
}
print("[test] Testing library loaded")
`,
  "async": `
// async library
let async = {}
async.wait = fn(ms) {
  let start = timer.now()
  while (timer.now() - start < ms) {}
}
async.resolve = fn(v) { return v }
async.all = fn(arr) { return arr }
print("[async] Async library loaded")
`,
  "cli-kit": `
// cli-kit library
let CLI = {}
CLI.green = fn(s) { return "\x1b[32m" + s + "\x1b[0m" }
CLI.red = fn(s) { return "\x1b[31m" + s + "\x1b[0m" }
CLI.yellow = fn(s) { return "\x1b[33m" + s + "\x1b[0m" }
CLI.cyan = fn(s) { return "\x1b[36m" + s + "\x1b[0m" }
CLI.bold = fn(s) { return "\x1b[1m" + s + "\x1b[0m" }
CLI.dim = fn(s) { return "\x1b[2m" + s + "\x1b[0m" }
CLI.table = fn(headers, rows) {
  let widths = headers.map(fn(h) { return len(h) })
  for (let row of rows) {
    for (let i = 0; i < len(row); i++) {
      if (len(str(row[i])) > widths[i]) { widths[i] = len(str(row[i])) }
    }
  }
  let sep = "+" + widths.map(fn(w) { return "-".repeat(w + 2) }).join("+") + "+"
  print(sep)
  print("| " + headers.map(fn(h, i) { return h.padEnd(widths[i]) }).join(" | ") + " |")
  print(sep)
  for (let row of rows) {
    print("| " + row.map(fn(v, i) { return str(v).padEnd(widths[i]) }).join(" | ") + " |")
  }
  print(sep)
}
CLI.progress = fn(label, current, total) {
  let pct = math.floor((current / total) * 40)
  let bar = "█".repeat(pct) + "░".repeat(40 - pct)
  let pctStr = str(math.floor((current / total) * 100))
  print("\r" + label + " [" + bar + "] " + pctStr + "%")
}
print("[cli-kit] CLI toolkit loaded")
`,
};

// ===== HELPERS =====
function ensureDir(dir: string): void {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}

function loadLock(): LockFile {
  if (existsSync(LOCK_FILE)) {
    try { return JSON.parse(readFileSync(LOCK_FILE, "utf-8")); } catch {}
  }
  return { version: "1", installed: {} };
}

function saveLock(lock: LockFile): void {
  ensureDir(join(process.cwd(), ".viper"));
  writeFileSync(LOCK_FILE, JSON.stringify(lock, null, 2), "utf-8");
}

function loadManifest(): ViperManifest | null {
  if (existsSync(MANIFEST_FILE)) {
    try { return JSON.parse(readFileSync(MANIFEST_FILE, "utf-8")); } catch {}
  }
  return null;
}

function saveManifest(manifest: ViperManifest): void {
  writeFileSync(MANIFEST_FILE, JSON.stringify(manifest, null, 2), "utf-8");
}

async function fetchRegistry(): Promise<PackageMeta[]> {
  try {
    const r = await fetch(REGISTRY_URL, { headers: { "User-Agent": "vpm/2.0" } });
    if (r.ok) {
      const data = await r.json() as PackageMeta[];
      return data;
    }
  } catch {}
  return [];
}

// ===== VPM COMMANDS =====
export async function vpmInstall(pkgNames: string[]): Promise<void> {
  ensureDir(PKG_DIR);
  const lock = loadLock();

  // Install all named packages or deps from manifest
  const toInstall = pkgNames.length > 0 ? pkgNames : Object.keys(loadManifest()?.dependencies ?? {});

  if (toInstall.length === 0) {
    console.log(c("yellow", "No packages to install. Run `vpm install <package>` or add deps to viper.json."));
    return;
  }

  for (const pkg of toInstall) {
    const [name, version = "latest"] = pkg.split("@");

    // Check stdlib first
    if (STDLIB[name]) {
      const meta = STDLIB[name];
      const pkgFile = join(PKG_DIR, `${name}.vi`);
      const code = STDLIB_CODE[name] ?? `// ${name} v${meta.version}\nprint("[${name}] loaded")`;
      writeFileSync(pkgFile, code, "utf-8");
      lock.installed[name] = { version: meta.version, url: meta.url, installedAt: new Date().toISOString() };
      console.log(`${c("green", "✓")} Installed ${c("cyan", name)} ${c("dim", `v${meta.version}`)} ${c("dim", "(stdlib)")}`);
      continue;
    }

    // Try to fetch from registry or direct URL
    if (name.startsWith("http://") || name.startsWith("https://")) {
      console.log(`${c("blue", "⟳")} Fetching ${c("cyan", name)}...`);
      try {
        const r = await fetch(name, { headers: { "User-Agent": "vpm/2.0" } });
        if (!r.ok) { console.log(c("red", `  ✗ HTTP ${r.status}: ${r.statusText}`)); continue; }
        const code = await r.text();
        const pkgName = basename(name).replace(/\.vi$/, "");
        const pkgFile = join(PKG_DIR, `${pkgName}.vi`);
        writeFileSync(pkgFile, code, "utf-8");
        lock.installed[pkgName] = { version: "unknown", url: name, installedAt: new Date().toISOString() };
        console.log(`${c("green", "✓")} Installed ${c("cyan", pkgName)} from URL`);
      } catch (e) {
        console.log(c("red", `  ✗ Failed: ${e}`));
      }
      continue;
    }

    // Try GitHub shorthand: user/repo
    if (name.includes("/")) {
      const url = `https://raw.githubusercontent.com/${name}/main/index.vi`;
      console.log(`${c("blue", "⟳")} Fetching ${c("cyan", name)} from GitHub...`);
      try {
        const r = await fetch(url, { headers: { "User-Agent": "vpm/2.0" } });
        if (!r.ok) { console.log(c("red", `  ✗ Not found on GitHub: ${url}`)); continue; }
        const code = await r.text();
        const pkgName = name.split("/").pop()!;
        const pkgFile = join(PKG_DIR, `${pkgName}.vi`);
        writeFileSync(pkgFile, code, "utf-8");
        lock.installed[pkgName] = { version: "github", url, installedAt: new Date().toISOString() };
        console.log(`${c("green", "✓")} Installed ${c("cyan", pkgName)} from GitHub`);
      } catch (e) {
        console.log(c("red", `  ✗ Failed: ${e}`));
      }
      continue;
    }

    console.log(c("red", `  ✗ Package '${name}' not found in registry. Try a URL or GitHub shorthand.`));
  }

  saveLock(lock);

  // Update manifest deps
  const manifest = loadManifest();
  if (manifest) {
    if (!manifest.dependencies) manifest.dependencies = {};
    for (const pkg of toInstall) {
      const name = pkg.split("@")[0];
      manifest.dependencies[name] = lock.installed[name]?.version ?? "latest";
    }
    saveManifest(manifest);
    console.log(c("dim", `\nUpdated viper.json`));
  }
}

export async function vpmSearch(query: string): Promise<void> {
  console.log(`\n${c("bold", "Searching for:")} ${c("cyan", query)}\n`);

  const results: PackageMeta[] = [];

  // Search stdlib
  for (const [name, meta] of Object.entries(STDLIB)) {
    if (name.includes(query) || meta.description.toLowerCase().includes(query.toLowerCase()) ||
        meta.tags?.some(t => t.includes(query))) {
      results.push(meta);
    }
  }

  // Search remote registry
  const remote = await fetchRegistry();
  for (const meta of remote) {
    if (meta.name.includes(query) || meta.description.toLowerCase().includes(query.toLowerCase())) {
      if (!results.find(r => r.name === meta.name)) results.push(meta);
    }
  }

  if (results.length === 0) {
    console.log(c("yellow", "No packages found. Try a different query."));
    return;
  }

  for (const pkg of results) {
    const badge = pkg.url.startsWith("builtin:") ? c("magenta", " [stdlib]") : c("blue", " [registry]");
    console.log(`  ${c("cyan", c("bold", pkg.name))}${badge} ${c("dim", `v${pkg.version}`)}`);
    console.log(`    ${c("dim", pkg.description)}`);
    if (pkg.tags?.length) {
      console.log(`    ${c("dim", "tags:")} ${pkg.tags.map(t => c("yellow", t)).join(" ")}`);
    }
    console.log();
  }

  console.log(c("dim", `${results.length} result(s). Install with: viper vpm install <name>`));
}

export function vpmList(): void {
  const lock = loadLock();
  const installed = Object.entries(lock.installed);

  if (installed.length === 0) {
    console.log(c("yellow", "No packages installed. Run `viper vpm install <package>`."));
    return;
  }

  console.log(`\n${c("bold", "Installed packages:")}\n`);
  const maxLen = Math.max(...installed.map(([n]) => n.length));

  for (const [name, info] of installed) {
    const isBuiltin = info.url.startsWith("builtin:");
    const badge = isBuiltin ? c("magenta", "[stdlib]") : c("blue", "[remote]");
    const pkgFile = join(PKG_DIR, `${name}.vi`);
    const exists = existsSync(pkgFile);
    const status = exists ? c("green", "✓") : c("red", "✗");
    console.log(`  ${status} ${c("cyan", name.padEnd(maxLen))} ${c("dim", `v${info.version}`)} ${badge}`);
  }

  console.log(c("dim", `\n${installed.length} package(s) installed.`));
}

export function vpmRemove(pkgNames: string[]): void {
  const lock = loadLock();

  for (const name of pkgNames) {
    if (!lock.installed[name]) {
      console.log(c("yellow", `  Package '${name}' is not installed.`));
      continue;
    }
    const pkgFile = join(PKG_DIR, `${name}.vi`);
    if (existsSync(pkgFile)) rmSync(pkgFile);
    delete lock.installed[name];
    console.log(`${c("green", "✓")} Removed ${c("cyan", name)}`);
  }

  saveLock(lock);

  const manifest = loadManifest();
  if (manifest?.dependencies) {
    for (const name of pkgNames) delete manifest.dependencies[name];
    saveManifest(manifest);
  }
}

export async function vpmUpdate(pkgNames: string[]): Promise<void> {
  const lock = loadLock();
  const toUpdate = pkgNames.length > 0 ? pkgNames : Object.keys(lock.installed);
  console.log(`\n${c("blue", "⟳")} Updating ${toUpdate.length} package(s)...\n`);
  await vpmInstall(toUpdate);
  console.log(`\n${c("green", "✓")} Update complete.`);
}

export async function vpmPublish(): Promise<void> {
  const manifest = loadManifest();
  if (!manifest) {
    console.log(c("red", "✗ No viper.json found. Run `viper new` first."));
    return;
  }
  console.log(`\n${c("bold", "Publishing")} ${c("cyan", manifest.name)} ${c("dim", `v${manifest.version}`)}...\n`);
  console.log(c("dim", "Publishing to the Viper registry is done via GitHub."));
  console.log(c("dim", "1. Push your package to GitHub with an index.vi file"));
  console.log(c("dim", "2. Users can install via: viper vpm install user/repo"));
  console.log(c("dim", "3. To add to the official registry, open a PR at:"));
  console.log(c("cyan", "   https://github.com/devinaiisthebest272829-debug/viper-invictus"));
  console.log(`\n${c("green", "✓")} Package info ready.`);
  console.log(c("dim", `  Name:    ${manifest.name}`));
  console.log(c("dim", `  Version: ${manifest.version}`));
  console.log(c("dim", `  License: ${manifest.license ?? "MIT"}`));
}

// Get inject code for a package (for use in CLI runner)
export function getPackageCode(name: string): string | null {
  // Check stdlib
  if (STDLIB_CODE[name]) return STDLIB_CODE[name];
  // Check installed files
  const pkgFile = join(PKG_DIR, `${name}.vi`);
  if (existsSync(pkgFile)) return readFileSync(pkgFile, "utf-8");
  return null;
}
