# Viper Invictus

A browser-based scripting language for games, art, and interactive programs. Write code in the IDE and see output instantly — no install, no setup.

## Run & Operate

```bash
pnpm install
pnpm --filter @workspace/viper-invictus run dev   # browser IDE (Vite)
pnpm --filter @workspace/api-server run dev        # backend execution server
pnpm run typecheck                                 # full TypeScript check
pnpm run build                                     # build all packages
```

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- IDE: React + Vite + Monaco Editor + Tailwind CSS
- Routing: Wouter
- Backend: Express 5 (API server for server-side execution)
- Language runtime: custom lexer → parser → AST → JS compiler + tree-walker fallback

## Where things live

- `artifacts/viper-invictus/src/` — IDE frontend (pages, components, language runtime)
- `artifacts/viper-invictus/src/lang/` — Viper lexer, parser, compiler, interpreter, VM
- `artifacts/api-server/src/` — Express backend for server-side code execution
- `lib/` — shared TypeScript packages

## Language features

- Variables: `let`, `const`, `var`
- Functions: `fn name(args) { ... }` or Python-style `def`
- Classes with inheritance: `class Child < Parent`, `self`, `init`
- Arrays: `map`, `filter`, `reduce`, `sort`, `slice`, `push`, `pop`
- Canvas API: `canvas.rect()`, `canvas.circle()`, `canvas.text()`, keyboard/mouse events
- Animation: `timer.loop(fn)` at ~60fps
- Math library: `math.sin`, `math.cos`, `math.sqrt`, `math.randInt`, `math.PI`
- Error reporting: shows all parse errors at once

## User preferences

- Keep the IDE clean — no decorative badges, no gradient buttons, no vibe-coded visual noise
- Features listed on the site should match what's actually implemented in the runtime
