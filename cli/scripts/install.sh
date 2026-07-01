#!/bin/bash
# Viper Invictus CLI Installer
# Works on Linux, macOS, and Windows (via Git Bash / WSL)

set -e

REPO="devinaiisthebest272829-debug/viper-invictus"
INSTALL_DIR="${VIPER_INSTALL_DIR:-$HOME/.viper}"
BIN_DIR="${VIPER_BIN_DIR:-$HOME/.local/bin}"

# Detect OS
OS="$(uname -s)"
ARCH="$(uname -m)"

echo "Installing Viper Invictus CLI..."

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "Node.js is required but not installed."
    echo "Install from https://nodejs.org (LTS recommended)"
    exit 1
fi

NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "Node.js 18+ required. You have $(node --version)"
    exit 1
fi

# Download latest CLI
mkdir -p "$INSTALL_DIR" "$BIN_DIR"

echo "Downloading from GitHub..."
if command -v curl &> /dev/null; then
    curl -sL "https://raw.githubusercontent.com/$REPO/main/lib/viper-cli/dist/viper.cjs" -o "$INSTALL_DIR/viper.cjs"
else
    wget -q "https://raw.githubusercontent.com/$REPO/main/lib/viper-cli/dist/viper.cjs" -O "$INSTALL_DIR/viper.cjs"
fi

chmod +x "$INSTALL_DIR/viper.cjs"

# Create wrapper script
cat > "$BIN_DIR/viper" << 'EOF'
#!/bin/sh
exec node "$HOME/.viper/viper.cjs" "$@"
EOF
chmod +x "$BIN_DIR/viper"

# Add to PATH if needed
if [[ ":$PATH:" != *":$BIN_DIR:"* ]]; then
    SHELL_RC=""
    case "$SHELL" in
        */bash) SHELL_RC="$HOME/.bashrc" ;;
        */zsh) SHELL_RC="$HOME/.zshrc" ;;
        */fish) SHELL_RC="$HOME/.config/fish/config.fish" ;;
    esac

    if [ -n "$SHELL_RC" ] && [ -f "$SHELL_RC" ]; then
        echo "export PATH=\"$BIN_DIR:\$PATH\"" >> "$SHELL_RC"
        echo "Added $BIN_DIR to PATH in $SHELL_RC"
        echo "Run: source $SHELL_RC"
    else
        echo "Add this to your shell profile:"
        echo "  export PATH=\"$BIN_DIR:\$PATH\""
    fi
fi

echo ""
echo "Viper Invictus CLI installed!"
echo ""
echo "  $ viper --version"
echo "  $ viper run hello.vi"
echo "  $ viper repl"
echo ""
