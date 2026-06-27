<p align="center">
  <img src="artifacts/viper-invictus/public/viper-logo.png" width="120" alt="Viper Invictus Logo"/>
</p>

<h1 align="center">Viper Invictus</h1>
<p align="center">
  <strong>A fast, expressive scripting language with a browser-based IDE</strong><br/>
  JS compiler · Canvas rendering · REPL · Package manager
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.0-7c6af7?style=flat-square"/>
  <img src="https://img.shields.io/badge/license-Apache%202.0-22c55e?style=flat-square"/>
</p>

---

## What is Viper Invictus?

Viper Invictus is a dynamically-typed scripting language that compiles to JavaScript and runs in the browser. It has a full IDE with Monaco editor, canvas rendering, and a CLI with REPL, package manager, and build tooling.

The syntax sits between Python's readability and JavaScript's expressiveness. No install required — open the IDE and write code.

```viper
fn fib(n) {
  if (n <= 1) { return n }
  return fib(n - 1) + fib(n - 2)
}

print("fib(35) = " + str(fib(35)))
```

---

## Features

- **JS Compiler** — Viper source → AST → JavaScript, executed by the browser's V8 engine. Includes a tree-walker interpreter fallback for edge cases.
- **Browser IDE** — Monaco editor, live canvas output, console, error highlighting, 20+ built-in examples
- **Canvas API** — `canvas.rect()`, `canvas.circle()`, `canvas.text()`, keyboard/mouse events, game loops
- **Package Manager** — VPM installs packages from GitHub URLs, manages lockfiles and manifests (`viper.json`)
- **CLI** — `viper run`, `viper repl`, `viper build`, `viper check`, `viper fmt`, `viper test`, `viper vpm`
- **HDL compilation** — `viper build --target verilog` generates Verilog/VHDL from Viper source (experimental)
- **Backend execution** — IDE can send code to the Express API server for server-side runs with `fs`, `env`, `http`
- **Standard library** — `math`, `timer`, `os`, `fs`, `env`, `http`, `storage`

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

// Math (compiles to Math.*)
let r = math.sqrt(2.0)
let s = math.sin(math.PI / 4)
```

---

## Getting Started

### Browser IDE
Visit the [live IDE](https://viper-invictus.replit.app) to start coding immediately.

### CLI
```bash
# Clone and install
git clone https://github.com/devinaiisthebest272829-debug/Viper-Invictus-Official
cd Viper-Invictus-Official
pnpm install

# Run a Viper script
pnpm --filter @workspace/viper-cli exec tsx src/cli.ts run hello.vi --trusted

# Start the IDE dev server
pnpm --filter @workspace/viper-invictus run dev
```

---

## Project Structure

```
Viper-Invictus-Official/
├── artifacts/
│   ├── viper-invictus/    # Browser IDE (React + Vite)
│   └── api-server/        # Optional backend API (Express)
├── lib/
│   ├── viper-lang/        # Lexer, parser, compiler, interpreter, VM
│   └── viper-cli/         # CLI runner, REPL, VPM, build
├── benchmark.vi             # Performance benchmark suite
└── ray_sphere_fast.vi       # Ray-sphere intersection demo
```

---

## License

Copyright 2026 mamadwkwk. Licensed under the Apache License, Version 2.0.
See [LICENSE](LICENSE) for the full license text.
