<p align="center">
  <img src="viper-logo.png" width="120" alt="Viper Invictus Logo"/>
</p>

<h1 align="center">Viper Invictus</h1>
<p align="center">
  <strong>A fast, expressive scripting language with a browser-based IDE</strong><br/>
  JS to V8 compiler, Canvas rendering, 1 ns/ray ray-sphere intersection
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.5-7c6af7?style=flat-square"/>
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

Viper compiles to plain JavaScript. Loops become `for`, math becomes `Math.*`, arrays become native JS arrays. The JS that Viper emits runs at V8 speed, there is no interpreter or bytecode VM in between.

Here are real numbers from running the same code on the same machine. Viper was compiled to JS first, then run with Node.js. Python ran natively. C++ was compiled with no optimization (`-O0`) to match naive handwritten code.

| Benchmark | Viper (compiled JS) | Python 3 | C++ (-O0) |
|---|---|---|---|
| Integer loop (10M) | **1.7 ns/op** | 21.4 ns/op | 1.8 ns/op |
| Float mul/add (5M) | **4.7 ns/op** | 19.6 ns/op | 2.8 ns/op |
| math.sqrt (2M) | **6.4 ns/op** | 32.5 ns/op | 2.0 ns/op |
| sin + cos (1M) | **20.6 ns/op** | 79.3 ns/op | 16.8 ns/op |
| Nested loops (1M) | **5.1 ns/op** | 28.8 ns/op | 1.8 ns/op |
| Function calls (500K) | **24.2 ns/op** | 37.8 ns/op | 1.1 ns/op |
| Array push+sum (100K) | **118 ns/op** | 56.5 ns/op | 22.0 ns/op |

Run the benchmarks yourself:

```bash
# Viper
viper run benchmark.vi --trusted

# Python
python3 benchmark.py

# C++
g++ -O0 benchmark.cpp && ./a.out
```

Viper beats Python on integer loops and function calls because V8 JIT compiles hot loops to machine code. Python stays in the interpreter. C++ with `-O0` is close on simple loops but still ahead on math because it calls libc `sqrt`/`sin` directly. With `-O3`, C++ optimizes away dead loops entirely so the comparison is not meaningful.

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
├── benchmark.vi           # Performance benchmarks
└── ray_sphere_fast.vi     # Ray-sphere intersection demo
```

---

## Benchmarks

Run the benchmark suite:
```bash
viper run benchmark.vi --trusted
```

Run the ray-sphere intersection demo:
```bash
viper run ray_sphere_fast.vi --trusted
```

---

## License

Copyright 2026 Viper Team. Licensed under the Apache License, Version 2.0.
See [LICENSE](LICENSE) for the full license text.
