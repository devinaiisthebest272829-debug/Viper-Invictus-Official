# Viper Invictus CLI

The command-line interface for Viper Invictus, a fast scripting language with a browser IDE.

## Install

### Option 1: npm (easiest)

```bash
npm install -g viper-invictus
viper --version
```

### Option 2: One-liner install

**Linux / macOS:**
```bash
curl -fsSL https://raw.githubusercontent.com/devinaiisthebest272829-debug/viper-invictus/main/lib/viper-cli/scripts/install.sh | bash
```

**Windows (PowerShell):**
```powershell
irm https://raw.githubusercontent.com/devinaiisthebest272829-debug/viper-invictus/main/lib/viper-cli/scripts/install.ps1 | iex
```

### Option 3: Manual

Requires Node.js 18+.

```bash
# Download the single bundled file
curl -L -o viper https://raw.githubusercontent.com/devinaiisthebest272829-debug/viper-invictus/main/lib/viper-cli/dist/viper.cjs
chmod +x viper
./viper --version
```

## Usage

```bash
# Run a script
viper hello.vi
viper run hello.vi

# Evaluate inline code
viper eval 'print(2 + 2)'

# Interactive REPL
viper repl

# Create a new project
viper new my-app
cd my-app
viper run src/main.vi

# Compile to JavaScript
viper build main.vi --out app.js

# Check for errors (no run)
viper check main.vi

# Format source code
viper fmt main.vi

# Show system info
viper info
```

## Options

- `-t, --trusted` — Bypass safety limits
- `-v, --verbose` — Detailed output
- `--no-color` — Disable colored output
- `--version` — Show version

## Requirements

- Node.js 18 or higher
- Works on Linux, macOS, and Windows
