#!/usr/bin/env node
// Benchmark harness: Viper vs Python vs C++
// Runs each suite and prints a markdown table.

import { execSync } from "child_process";
import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const viperCli = resolve("lib/viper-cli/dist/viper.cjs");

function run(cmd, label) {
  console.log(`\n--- ${label} ---`);
  try {
    const out = execSync(cmd, { encoding: "utf8", timeout: 300000 });
    console.log(out.trim());
    return out.trim();
  } catch (e) {
    console.error(`FAILED ${label}:`, e.stderr || e.message);
    return "";
  }
}

function parseCsv(text) {
  const lines = text.split("\n").filter(l => l.trim() && !l.startsWith("benchmark,"));
  const map = new Map();
  for (const line of lines) {
    const parts = line.split(",");
    if (parts.length >= 5) {
      map.set(parts[0], {
        ns: parseFloat(parts[1]),
        mops: parseFloat(parts[2]),
        ms: parseFloat(parts[3]),
        result: parts[4],
      });
    }
  }
  return map;
}

const viperOut = run(`node ${viperCli} run benchmark-suite.vi --trusted`, "Viper");
const pythonOut = run("python3 benchmark-suite.py", "Python");
const cppO0Out = run("g++ -O0 -o benchmark-suite-o0 benchmark-suite.cpp && ./benchmark-suite-o0", "C++ -O0");
const cppO3Out = run("g++ -O3 -o benchmark-suite-o3 benchmark-suite.cpp && ./benchmark-suite-o3", "C++ -O3");

const viper = parseCsv(viperOut);
const python = parseCsv(pythonOut);
const cppO0 = parseCsv(cppO0Out);
const cppO3 = parseCsv(cppO3Out);

const names = [
  "int_loop_10m",
  "float_muladd_5m",
  "sqrt_2m",
  "sincos_1m",
  "fn_call_500k",
  "nested_loops_1m",
  "array_100k",
  "sieve_100k",
  "branch_5m",
];

const labels = {
  int_loop_10m: "Integer loop (10M)",
  float_muladd_5m: "Float mul/add (5M)",
  sqrt_2m: "math.sqrt (2M)",
  sincos_1m: "sin + cos (1M)",
  fn_call_500k: "Function calls (500K)",
  nested_loops_1m: "Nested loops (1M)",
  array_100k: "Array push+sum (100K)",
  sieve_100k: "Prime sieve (100K)",
  branch_5m: "Branch ternary (5M)",
};

let md = "# Benchmark Results\n\n";
md += "Times in nanoseconds per operation. Lower is better.\n\n";
md += "| Benchmark | Viper (JS) | Python 3 | C++ -O0 | C++ -O3 |\n";
md += "|---|---|---|---|---|\n";

for (const name of names) {
  const v = viper.get(name);
  const p = python.get(name);
  const c0 = cppO0.get(name);
  const c3 = cppO3.get(name);
  const fmt = (x) => x ? x.ns.toFixed(1) : "n/a";
  md += `| ${labels[name]} | ${fmt(v)} | ${fmt(p)} | ${fmt(c0)} | ${fmt(c3)} |\n`;
}

md += "\n## Notes\n\n";
md += "Viper uses the JavaScript compiler and runs on Node.js V8.\n";
md += "Python uses CPython 3.11.\n";
md += "C++ -O0 is unoptimized, matching naive handwritten code.\n";
md += "C++ -O3 is fully optimized and shown for reference only.\n";
md += "Each benchmark runs a warmup of 3 iterations, then measures the next run.\n";

writeFileSync("BENCHMARK_RESULTS.md", md);
console.log("\n" + md);
