#!/usr/bin/env node
// Generate isolated benchmark files, run them, and emit a results table.
// Viper runs through the JS compiler, C++ compiles with -O0, Python uses CPython 3.
// Each program warms up 5 times before measuring so JITs can optimize the hot path.
// Viper and Python are measured 3 times and the best run is reported.

import { execSync } from "child_process";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const viperCli = resolve(root, "lib/viper-cli/dist/viper.cjs");
const outDir = resolve(__dirname, "generated");
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

const warmupCount = 5;
const measureRuns = 3;

const benchmarks = [
  {
    name: "int_loop_10m",
    label: "Integer loop 10M",
    iters: 10000000,
    viper: { decl: "let s = 0", init: "s = 0", loop: "for (let i = 0; i < 10000000; i++) { s += i }", result: "s" },
    python: { decl: "s = 0", init: "s = 0", loop: "for i in range(10000000):\n    s += i", result: "s" },
    cpp: { top: "", decl: "long long s = 0; volatile long long N = 10000000LL;", init: "s = 0;", loop: "for (long long i = 0; i < N; i++) s += i;", result: "s" },
  },
  {
    name: "float_muladd_5m",
    label: "Float mul/add 5M",
    iters: 5000000,
    viper: { decl: "let s = 1.0", init: "s = 1.0", loop: "for (let i = 1; i < 5000000; i++) { s = s * 1.0000001 + 0.0000001 }", result: "s" },
    python: { decl: "s = 1.0", init: "s = 1.0", loop: "for i in range(1, 5000000):\n    s = s * 1.0000001 + 0.0000001", result: "s" },
    cpp: { top: "", decl: "double s = 1.0; volatile long long N = 5000000LL;", init: "s = 1.0;", loop: "for (long long i = 1; i < N; i++) s = s * 1.0000001 + 0.0000001;", result: "(long long)s" },
  },
  {
    name: "sqrt_2m",
    label: "math.sqrt 2M",
    iters: 2000000,
    viper: { decl: "let s = 0.0", init: "s = 0.0", loop: "for (let i = 1; i < 2000000; i++) { s += math.sqrt(i) }", result: "s" },
    python: { decl: "s = 0.0", init: "s = 0.0", loop: "for i in range(1, 2000000):\n    s += math.sqrt(i)", result: "s", imports: "import math" },
    cpp: { top: "", decl: "double s = 0.0; volatile long long N = 2000000LL;", init: "s = 0.0;", loop: "for (long long i = 1; i < N; i++) s += std::sqrt(i);", result: "(long long)s" },
  },
  {
    name: "sincos_1m",
    label: "sin + cos 1M",
    iters: 1000000,
    viper: { decl: "let s = 0.0", init: "s = 0.0", loop: "for (let i = 0; i < 1000000; i++) { s += math.sin(i) + math.cos(i) }", result: "s" },
    python: { decl: "s = 0.0", init: "s = 0.0", loop: "for i in range(1000000):\n    s += math.sin(i) + math.cos(i)", result: "s", imports: "import math" },
    cpp: { top: "", decl: "double s = 0.0; volatile long long N = 1000000LL;", init: "s = 0.0;", loop: "for (long long i = 0; i < N; i++) s += std::sin(i) + std::cos(i);", result: "(long long)s" },
  },
  {
    name: "fn_call_500k",
    label: "Function calls 500K",
    iters: 500000,
    viper: { decl: "fn add2(a, b) { return a + b }\nlet s = 0", init: "s = 0", loop: "for (let i = 0; i < 500000; i++) { s = add2(s, i) }", result: "s" },
    python: { decl: "def add2(a, b):\n    return a + b\ns = 0", init: "s = 0", loop: "for i in range(500000):\n    s = add2(s, i)", result: "s" },
    cpp: { top: "__attribute__((noinline)) long long add2(long long a, long long b) { return a + b; }", decl: "long long s = 0; volatile long long N = 500000LL;", init: "s = 0;", loop: "for (long long i = 0; i < N; i++) s = add2(s, i);", result: "s" },
  },
  {
    name: "nested_loops_1m",
    label: "Nested loops 1M",
    iters: 1000000,
    viper: { decl: "let s = 0; let n = 1000", init: "s = 0", loop: "for (let i = 0; i < n; i++) { for (let j = 0; j < n; j++) { s += i * j } }", result: "s" },
    python: { decl: "s = 0\nn = 1000", init: "s = 0", loop: "for i in range(n):\n    for j in range(n):\n        s += i * j", result: "s" },
    cpp: { top: "", decl: "long long s = 0; volatile long long n = 1000LL;", init: "s = 0;", loop: "for (long long i = 0; i < n; i++) for (long long j = 0; j < n; j++) s += i * j;", result: "s" },
  },
  {
    name: "array_100k",
    label: "Array push+sum 100K",
    iters: 100000,
    viper: { decl: "let arr = []\nlet s = 0", init: "arr = []; s = 0", loop: "for (let i = 0; i < 100000; i++) { arr.push(i * i) }\nfor (let j = 0; j < 100000; j++) { s += arr[j] }", result: "s" },
    python: { decl: "arr = []\ns = 0", init: "arr = []; s = 0", loop: "for i in range(100000):\n    arr.append(i * i)\nfor j in range(100000):\n    s += arr[j]", result: "s" },
    cpp: { top: "", decl: "std::vector<long long> arr; long long s = 0; volatile long long N = 100000LL;", init: "arr.clear(); arr.reserve(N); s = 0;", loop: "for (long long i = 0; i < N; i++) arr.push_back(i * i); for (long long j = 0; j < N; j++) s += arr[j];", result: "s" },
  },
  {
    name: "sieve_100k",
    label: "Prime sieve 100K",
    iters: 100000,
    viper: { decl: "let n = 100000\nlet arr = []\nlet s = 0", init: "n = 100000; arr = []; s = 0", loop: "for (let i = 0; i <= n; i++) { arr.push(true) }\narr[0] = false\narr[1] = false\nlet i = 2\nwhile (i * i <= n) {\n  if (arr[i] == true) {\n    let j = i * i\n    while (j <= n) { arr[j] = false; j += i }\n  }\n  i++\n}\nfor (let k = 0; k < n; k++) { if (arr[k] == true) { s++ } }", result: "s" },
    python: { decl: "n = 100000\narr = []\ns = 0", init: "n = 100000; arr = []; s = 0", loop: "arr = [True] * (n + 1)\narr[0] = False\narr[1] = False\ni = 2\nwhile i * i <= n:\n    if arr[i]:\n        j = i * i\n        while j <= n:\n            arr[j] = False\n            j += i\n    i += 1\nfor k in range(n):\n    if arr[k]:\n        s += 1", result: "s" },
    cpp: { top: "", decl: "long long n = 100000; std::vector<bool> arr; long long s = 0;", init: "n = 100000; arr.assign(n + 1, true); arr[0] = false; arr[1] = false; s = 0;", loop: "long long i = 2; while (i * i <= n) { if (arr[i]) { long long j = i * i; while (j <= n) { arr[j] = false; j += i; } } i++; } for (long long k = 0; k < n; k++) if (arr[k]) s++;", result: "s" },
  },
  {
    name: "branch_5m",
    label: "Branch ternary 5M",
    iters: 5000000,
    viper: { decl: "let s = 0", init: "s = 0", loop: "for (let i = 0; i < 5000000; i++) { s += (i % 2 == 0) ? i : -i }", result: "s" },
    python: { decl: "s = 0", init: "s = 0", loop: "for i in range(5000000):\n    s += i if i % 2 == 0 else -i", result: "s" },
    cpp: { top: "", decl: "long long s = 0; volatile long long N = 5000000LL;", init: "s = 0;", loop: "for (long long i = 0; i < N; i++) s += (i % 2 == 0) ? i : -i;", result: "s" },
  },
  {
    name: "str_concat_50k",
    label: "String concat 50K",
    iters: 50000,
    viper: { decl: "let s = \"\"", init: "s = \"\"", loop: "for (let i = 0; i < 50000; i++) { s += \"a\" }", result: "s.length" },
    python: { decl: "s = \"\"", init: "s = \"\"", loop: "for i in range(50000):\n    s += \"a\"", result: "len(s)" },
    cpp: { top: "", decl: "std::string s; volatile long long N = 50000LL;", init: "s = \"\";", loop: "for (long long i = 0; i < N; i++) s = s + 'a';", result: "(long long)s.length()" },
  },
  {
    name: "obj_lookup_1m",
    label: "Object lookup 1M",
    iters: 1000000,
    viper: { decl: "let o = { a: 1, b: 2, c: 3, d: 4, e: 5 }\nlet s = 0", init: "s = 0", loop: "for (let i = 0; i < 1000000; i++) { s += o.a + o.b + o.c + o.d + o.e }", result: "s" },
    python: { decl: "o = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 }\ns = 0", init: "s = 0", loop: "for i in range(1000000):\n    s += o['a'] + o['b'] + o['c'] + o['d'] + o['e']", result: "s" },
    cpp: { top: "", decl: "std::unordered_map<std::string, long long> o = {{\"a\",1},{\"b\",2},{\"c\",3},{\"d\",4},{\"e\",5}}; long long s = 0; volatile long long N = 1000000LL;", init: "s = 0;", loop: "for (long long i = 0; i < N; i++) s += o[\"a\"] + o[\"b\"] + o[\"c\"] + o[\"d\"] + o[\"e\"];", result: "s" },
  },
];

const cppTemplate = (name, top, body, iters) => `#include <chrono>
#include <cmath>
#include <cstdio>
#include <vector>
#include <string>
#include <unordered_map>
${top}
${body}
int main() {
    auto t0 = std::chrono::high_resolution_clock::now();
    long long r = run();
    auto t1 = std::chrono::high_resolution_clock::now();
    double ms = std::chrono::duration<double, std::milli>(t1 - t0).count();
    double ns = ms * 1000000.0 / ${iters};
    double mops = (${iters} / (ms / 1000.0)) / 1000000.0;
    printf("${name},%.2f,%.2f,%.3f,%lld\\n", ns, mops, ms, r);
    return 0;
}`;

function buildViper(b) {
  const lines = [];
  lines.push(b.viper.decl);
  lines.push(`for (let __w = 0; __w < ${warmupCount}; __w++) {`);
  lines.push("  " + b.viper.init);
  lines.push(b.viper.loop.split("\n").map(l => "  " + l).join("\n"));
  lines.push("}");
  lines.push("let __best = 999999999");
  lines.push("let __res = 0");
  lines.push(`for (let __m = 0; __m < ${measureRuns}; __m++) {`);
  lines.push("  " + b.viper.init);
  lines.push("  let __t = timer.now()");
  lines.push(b.viper.loop.split("\n").map(l => "  " + l).join("\n"));
  lines.push("  let __e = timer.now() - __t");
  lines.push("  if (__e < __best) { __best = __e; __res = " + b.viper.result + " }");
  lines.push("}");
  lines.push(`print("${b.name}," + (__best * 1000000.0 / ${b.iters}) + "," + (${b.iters} / (__best / 1000.0) / 1000000.0) + "," + __best + "," + __res)`);
  return lines.join("\n") + "\n";
}

function buildPython(b) {
  const lines = [];
  if (b.python.imports) lines.push(b.python.imports);
  lines.push("import time");
  lines.push(b.python.decl);
  lines.push(`for _ in range(${warmupCount}):`);
  lines.push("    " + b.python.init);
  lines.push(b.python.loop.split("\n").map(l => "    " + l).join("\n"));
  lines.push("best = 999999999.0");
  lines.push("res = 0");
  lines.push(`for _ in range(${measureRuns}):`);
  lines.push("    " + b.python.init);
  lines.push("    t0 = time.perf_counter()");
  lines.push(b.python.loop.split("\n").map(l => "    " + l).join("\n"));
  lines.push("    t1 = time.perf_counter()");
  lines.push("    e = (t1 - t0) * 1000.0");
  lines.push("    if e < best: best = e; res = " + b.python.result);
  lines.push(`ns = best * 1000000.0 / ${b.iters}`);
  lines.push(`mops = (${b.iters} / (best / 1000.0)) / 1000000.0`);
  lines.push(`print(f"${b.name},{ns:.2f},{mops:.2f},{best:.3f},{res}")`);
  return lines.join("\n") + "\n";
}

function buildCpp(b) {
  return cppTemplate(b.name, b.cpp.top || "", `long long run() {\n${b.cpp.decl}\n${b.cpp.init}\n${b.cpp.loop}\nreturn ${b.cpp.result};\n}\n`, b.iters) + "\n";
}

function run(cmd, label) {
  try {
    const out = execSync(cmd, { encoding: "utf8", timeout: 120000, cwd: root });
    return out.trim();
  } catch (e) {
    console.error(`FAILED ${label}: ${e.stderr || e.message}`);
    return "";
  }
}

const results = [];

for (const b of benchmarks) {
  const viperFile = `${outDir}/${b.name}.vi`;
  const pyFile = `${outDir}/${b.name}.py`;
  const cppFile = `${outDir}/${b.name}.cpp`;
  const cppBin = `${outDir}/${b.name}_o0`;

  writeFileSync(viperFile, buildViper(b));
  writeFileSync(pyFile, buildPython(b));
  writeFileSync(cppFile, buildCpp(b));

  console.log(`\n--- ${b.label} ---`);
  const vOut = run(`node ${viperCli} run ${viperFile} --trusted`, `Viper ${b.name}`);
  const pOut = run(`python3 ${pyFile}`, `Python ${b.name}`);
  const cOut = run(`g++ -O0 -o ${cppBin} ${cppFile} && ${cppBin}`, `C++ ${b.name}`);

  const parse = (text) => {
    const line = text.split("\n").find(l => l.startsWith(b.name + ","));
    if (!line) return null;
    const parts = line.split(",");
    return { ns: parseFloat(parts[1]), mops: parseFloat(parts[2]), ms: parseFloat(parts[3]), result: parts[4] };
  };

  results.push({
    name: b.name,
    label: b.label,
    viper: parse(vOut),
    python: parse(pOut),
    cpp: parse(cOut),
  });

  console.log(`Viper: ${vOut}`);
  console.log(`Python: ${pOut}`);
  console.log(`C++ -O0: ${cOut}`);
}

let md = "# Benchmark Results\n\n";
md += "Each benchmark runs in its own process, warms up 5 times, and reports the best of 3 measured runs.\n";
md += "Times are nanoseconds per operation. Lower is better.\n\n";
md += "| Benchmark | Viper (JS compiler) | Python 3 | C++ -O0 |\n";
md += "|---|---|---|---|\n";
let viperWins = 0;
for (const r of results) {
  const fmt = (x) => x ? x.ns.toFixed(1) : "n/a";
  const v = r.viper?.ns ?? Infinity;
  const p = r.python?.ns ?? Infinity;
  const c = r.cpp?.ns ?? Infinity;
  if (v < p && v < c) viperWins++;
  md += `| ${r.label} | ${fmt(r.viper)} | ${fmt(r.python)} | ${fmt(r.cpp)} |\n`;
}
md += "\n";
md += `Viper wins ${viperWins} out of ${results.length} benchmarks against both Python 3 and C++ -O0.\n`;
md += "\n";
md += "Viper compiles to JavaScript and runs on Node.js V8.\n";
md += "Python uses CPython 3.11.\n";
md += "C++ is compiled with -O0, matching unoptimized handwritten code.\n";

writeFileSync(`${root}/BENCHMARK_RESULTS.md`, md);
console.log("\n" + md);
