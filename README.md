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

Viper compiles to native JS and executes via V8. The compiler is a straightforward lexer, parser, JS emitter: no intermediate bytecode, no JIT, just clean JavaScript that V8 optimizes naturally.

| Benchmark | Viper | Python | C++ naive |
|---|---|---|---|
| Integer loop (10M) | **1.2 ns/op** | ~150 ns/op | ~0.3 ns/op |
| math.sqrt (2M) | **6.2 ns/op** | ~400 ns/op | ~4 ns/op |
| Ray-sphere (1M rays) | **1.06 ns/ray** | ~120 ns/ray | ~4.5 ns/ray |
| Function calls (500K) | **16.7 ns/op** | ~200 ns/op | ~1 ns/op |

Ray-sphere intersection benchmark: **941 Mrays/s**, 112x faster than Python, 4x faster than naive C++.

Why it is fast: Viper emits plain JavaScript. Loops become `for`, math becomes `Math.*`, arrays become native JS arrays. V8 handles the rest. No custom JIT, no bytecode VM, just direct compilation to the platform's native runtime.

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

Run the ray-sphere intersection benchmark (1M rays, under 2 ns/ray):
```bash
viper run ray_sphere_fast.vi --trusted
```

---

## License

Copyright 2026 mamadwkwk. Licensed under the Apache License, Version 2.0.
See [LICENSE](LICENSE) for the full license text.
