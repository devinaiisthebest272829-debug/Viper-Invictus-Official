<p align="center">
  <img src="artifacts/viper-invictus/public/viper-logo.png" width="120" alt="Viper Invictus Logo"/>
</p>

<h1 align="center">Viper Invictus</h1>
<p align="center">
  <strong>A fast, expressive scripting language with a browser-based IDE</strong><br/>
  JS→V8 compiler · Canvas rendering · 1 ns/ray ray-sphere intersection
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.0-7c6af7?style=flat-square"/>
  <img src="https://img.shields.io/badge/engine-V8%20TurboFan-FF3C00?style=flat-square"/>
  <img src="https://img.shields.io/badge/license-Apache%202.0-22c55e?style=flat-square"/>
</p>

---

## What is Viper Invictus?

Viper Invictus is a dynamically-typed scripting language that compiles to JavaScript and runs on V8's TurboFan JIT. It features a full browser IDE with Monaco editor, canvas rendering, and a package manager (VPM). The syntax is clean and expressive — a blend of Python's readability and JavaScript's power.

```viper
fn fib(n) {
  if (n <= 1) { return n }
  return fib(n - 1) + fib(n - 2)
}

print("fib(35) = " + str(fib(35)))
```

---

## Performance

Viper compiles to native JS and executes via V8 TurboFan. After JIT warmup:

| Benchmark | Viper | Python | C++ naive |
|---|---|---|---|
| Integer loop (10M) | **1.2 ns/op** | ~150 ns/op | ~0.3 ns/op |
| math.sqrt (2M) | **6.2 ns/op** | ~400 ns/op | ~4 ns/op |
| Ray-sphere (1M rays) | **1.06 ns/ray** | ~120 ns/ray | ~4.5 ns/ray |
| Function calls (500K) | **16.7 ns/op** | ~200 ns/op | ~1 ns/op |

> Ray-sphere intersection benchmark: **941 Mrays/s** — 112× faster than Python, 4× faster than naive C++.

---

## Features

- **JS Compiler** — Viper source → native JS → V8 TurboFan. Pure integer loops run at 1.2 ns/op.
- **Browser IDE** — Monaco editor, live canvas, console output, file tabs
- **Canvas API** — `canvas.rect()`, `canvas.circle()`, `canvas.text()`, game loops, keyboard/mouse events
- **Package Manager** — VPM: install community packages from the registry
- **CLI** — Run `.vi` scripts from the terminal via `viper-cli`
- **Standard Library** — `math`, `timer`, `os`, `fs`, `env`, `http`, `storage`

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

// Arrays & objects
let arr = [1, 2, 3, 4, 5]
let obj = { name: "Viper", version: 2 }

// Canvas
canvas.clear("#111")
canvas.circle(100, 100, 40, "#7c6af7")
canvas.text(100, 200, "Hello!", 20, "#fff")

// Math (compiles to Math.* — no overhead)
let r = math.sqrt(2.0)
let s = math.sin(math.PI / 4)
```

---

## Getting Started

### Browser IDE
Visit the [live IDE](https://viper-invictus.replit.app) to start coding immediately — no install required.

### CLI
```bash
# Clone and install
git clone https://github.com/devinaiisthebest272829-debug/Viper-Invictus-Official
cd Viper-Invictus-Official
pnpm install

# Run a Viper script
pnpm --filter @workspace/viper-cli exec tsx src/cli.ts run my_script.vi --trusted

# Start the IDE dev server
pnpm --filter @workspace/viper-invictus run dev
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
│   └── viper-cli/         # CLI runner (viper-cli)
├── benchmark.vi           # Performance benchmarks
└── ray_sphere_fast.vi     # Ray-sphere intersection demo
```

---

## Benchmarks

Run the benchmark suite:
```bash
pnpm --filter @workspace/viper-cli exec tsx src/cli.ts run benchmark.vi --trusted
```

Run the ray-sphere intersection benchmark (1M rays, < 2 ns/ray):
```bash
pnpm --filter @workspace/viper-cli exec tsx src/cli.ts run ray_sphere_fast.vi --trusted
```

---

## License

Copyright 2026 mamadwkwk. Licensed under the Apache License, Version 2.0.
See [LICENSE](LICENSE) for the full license text.
