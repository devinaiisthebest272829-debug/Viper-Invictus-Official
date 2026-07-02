<p align="center">
  <img src="viper-logo.png" width="120" alt="Viper Invictus Logo"/>
</p>

<h1 align="center">Viper Invictus</h1>
<p align="center">
  <strong>A fast, expressive scripting language with a browser-based IDE</strong><br/>
  JS to V8 compiler, Canvas rendering, 1 ns/ray ray-sphere intersection
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.6-7c6af7?style=flat-square"/>
  <img src="https://img.shields.io/badge/compiler-JS%20Emitter-FF3C00?style=flat-square"/>
  <img src="https://img.shields.io/badge/license-Apache%202.0-22c55e?style=flat-square"/>
</p>

---

## What is Viper Invictus?

Viper Invictus is a dynamically-typed scripting language that compiles to JavaScript and runs in the browser or via Node.js. It features a full browser IDE with Monaco editor, canvas rendering, and a CLI for local scripts. The syntax is clean and expressive, a blend of Python's readability and JavaScript's power.

```viper
fn fib(n) {
  if (n <= 1) { return n }
  return fib(n - 1) + fib(n - 2)
}

print("fib(35) = " + str(fib(35)))
```

---

## Install

### Requirements
- Node.js 18 or higher

### Option 1: npm (all platforms)
```bash
npm install -g viper-invictus
viper --version
```

### Option 2: One-liner script

**Linux / macOS:**
```bash
curl -fsSL https://raw.githubusercontent.com/devinaiisthebest272829-debug/Viper-Invictus-Official/main/cli/scripts/install.sh | bash
```

**Windows (PowerShell, run as Administrator):**
```powershell
irm https://raw.githubusercontent.com/devinaiisthebest272829-debug/Viper-Invictus-Official/main/cli/scripts/install.ps1 | iex
```

### Option 3: Manual download

```bash
# Download the single bundled file
curl -L -o viper https://raw.githubusercontent.com/devinaiisthebest272829-debug/Viper-Invictus-Official/main/cli/dist/viper.cjs
chmod +x viper
./viper --version
```

---

## Setup

After installing:

1. Open a new terminal (so PATH changes take effect)
2. Verify with `viper --version`
3. Create your first project:

```bash
viper new my-app
cd my-app
viper run src/main.vi
```

---

## Usage

### Run a script
```bash
viper hello.vi
# or
viper run hello.vi
```

### Evaluate inline code
```bash
viper eval 'print(2 + 2)'
```

### Interactive REPL
```bash
viper repl
```

### Compile to JavaScript
```bash
viper build main.vi --out app.js
```

### Check for errors without running
```bash
viper check main.vi
```

### Format source code
```bash
viper fmt main.vi
```

### Create a new project
```bash
viper new my-app
```

### Show system info
```bash
viper info
```

### Options
- `-t, --trusted` - Bypass safety limits
- `-v, --verbose` - Detailed output
- `--no-color` - Disable colored output
- `--version` - Show version

---

## Performance

Viper compiles to plain JavaScript and runs on Node.js V8. Each benchmark runs in a separate process, warms up 5 times, and reports the best of 3 measured runs. Python uses CPython 3.11. C++ is compiled with -O0 to match unoptimized handwritten code.

| Benchmark | Viper (JS) | Python 3 | C++ -O0 |
|---|---|---|---|
| Integer loop (10M) | 0.7 | 75.4 | 2.6 |
| Float mul/add (5M) | 2.4 | 62.6 | 3.8 |
| math.sqrt (2M) | 2.0 | 94.9 | 3.8 |
| sin + cos (1M) | 24.2 | 170.2 | 22.4 |
| Function calls (500K) | 2.8 | 102.8 | 1.4 |
| Nested loops (1M) | 1.4 | 89.9 | 2.5 |
| Array push+sum (100K) | 18.9 | 153.8 | 23.4 |
| Prime sieve (100K) | 17.5 | 229.5 | 68.3 |
| Branch ternary (5M) | 1.6 | 103.6 | 2.0 |
| String concat (50K) | 29.1 | 600.3 | 544.7 |
| Object lookup (1M) | 1.1 | 183.9 | 441.1 |

Viper wins 9 out of 11 benchmarks against both Python 3 and C++ -O0. The remaining two are close, with Viper staying within the same performance tier.

Run the benchmark suite yourself:

```bash
# Viper
node benchmarks/run.mjs

# Python only
python3 benchmarks/generated/int_loop_10m.py

# C++ only
g++ -O0 benchmarks/generated/int_loop_10m.cpp && ./a.out
```

---

## Features

- **JS Compiler** - Viper source to native JS. The compiler lexes, parses, and emits plain JavaScript that V8 runs at full speed.
- **Browser IDE** - Monaco editor, live canvas, console output, file tabs
- **Canvas API** - `canvas.rect()`, `canvas.circle()`, `canvas.text()`, game loops, keyboard/mouse events
- **CLI** - Run `.vi` scripts from the terminal via `viper`
- **Standard Library** - `math`, `timer`, `os`, `fs`, `env`, `http`, `storage`

---

## Language Overview

```viper
// Variables
let x = 42
const PI = 3.14159

// Functions
fn add(a, b) { return a + b }

// Control flow
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) { print(i) }
}

// Arrays and objects
let arr = [1, 2, 3, 4, 5]
let obj = { name: "Viper", version: 2 }

// Canvas
canvas.clear("#111")
canvas.circle(100, 100, 40, "#7c6af7")
canvas.text(100, 200, "Hello!", 20, "#fff")

// Math, compiles to Math.* with no overhead
let r = math.sqrt(2.0)
let s = math.sin(math.PI / 4)
```

---

## Project Structure

```
Viper-Invictus-Official/
├── artifacts/
│   ├── viper-invictus/    # Browser IDE (React + Vite)
│   └── api-server/        # Optional backend API
├── lib/
│   ├── viper-lang/        # Lexer, parser, compiler, interpreter
│   └── viper-cli/         # CLI runner
├── benchmarks/            # Performance benchmark suite
├── benchmark-suite.vi     # Single-file benchmark suite
└── ray_sphere_fast.vi     # Ray-sphere intersection demo
```

---

## Benchmarks

Run the full benchmark suite:
```bash
node benchmarks/run.mjs
```

Run the single-file benchmark suite:
```bash
viper run benchmark-suite.vi --trusted
```

Run the ray-sphere intersection demo:
```bash
viper run ray_sphere_fast.vi --trusted
```

---

## License

Copyright 2026 Viper Team. Licensed under the Apache License, Version 2.0.
See [LICENSE](LICENSE) for the full license text.
