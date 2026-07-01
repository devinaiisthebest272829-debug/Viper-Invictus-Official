# Viper Invictus CLI Installer for Windows PowerShell
$ErrorActionPreference = "Stop"

$repo = "devinaiisthebest272829-debug/viper-invictus"
$installDir = "$env:USERPROFILE\.viper"
$binDir = "$env:USERPROFILE\.viper\bin"

Write-Host "Installing Viper Invictus CLI..." -ForegroundColor Cyan

# Check Node.js
try {
    $nodeVersion = node --version 2>$null
    if (-not $nodeVersion) { throw "Node.js not found" }
    $major = [int]($nodeVersion -replace 'v','').Split('.')[0]
    if ($major -lt 18) {
        Write-Error "Node.js 18+ required. You have $nodeVersion"
        exit 1
    }
} catch {
    Write-Error "Node.js is required. Install from https://nodejs.org"
    exit 1
}

# Download
New-Item -ItemType Directory -Force -Path $installDir | Out-Null
New-Item -ItemType Directory -Force -Path $binDir | Out-Null

$url = "https://raw.githubusercontent.com/$repo/main/lib/viper-cli/dist/viper.cjs"
$outFile = "$installDir\viper.cjs"

Write-Host "Downloading..." -ForegroundColor Yellow
Invoke-WebRequest -Uri $url -OutFile $outFile

# Create wrapper
$wrapper = @"
@echo off
node "$installDir\viper.cjs" %*
"@
$wrapper | Out-File -FilePath "$binDir\viper.cmd" -Encoding ASCII

# Add to PATH
$userPath = [Environment]::GetEnvironmentVariable("Path", "User")
if ($userPath -notlike "*$binDir*") {
    [Environment]::SetEnvironmentVariable("Path", "$userPath;$binDir", "User")
    Write-Host "Added $binDir to your PATH" -ForegroundColor Green
    Write-Host "Restart your terminal for changes to take effect." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Viper Invictus CLI installed!" -ForegroundColor Green
Write-Host "  viper --version" -ForegroundColor Cyan
Write-Host "  viper run hello.vi" -ForegroundColor Cyan
Write-Host "  viper repl" -ForegroundColor Cyan
