// Copyright 2026 mamadwkwk (devinaiisthebest272829@gmail.com)
// Licensed under the Apache License, Version 2.0
// See LICENSE or NOTICE for full license text
// Viper Invictus - A fast scripting language with browser IDE
// All rights reserved.

import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight } from "lucide-react";
import { useState } from "react";

const NAV = [
  { path: "/", label: "IDE" },
  { path: "/learn", label: "Learn" },
  { path: "/docs", label: "Docs" },
  { path: "/examples", label: "Examples" },
  { path: "/cheatsheet", label: "Cheatsheet" },
  { path: "/tutorials", label: "Tutorials" },
  { path: "/playground", label: "Playground" },
  { path: "/showcase", label: "Showcase" },
  { path: "/resources", label: "Resources" },
  { path: "/changelog", label: "Changelog" },
  { path: "/about", label: "About" },
];

export function Layout({ children, fullWidth = false }: { children: React.ReactNode; fullWidth?: boolean }) {
  const [location] = useLocation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#08081a] text-white flex flex-col">
      {/* Top navigation */}
      <nav className="border-b border-white/10 bg-[#09091a]/90 backdrop-blur-md sticky top-0 z-50 shadow-[0_1px_12px_rgba(0,0,0,0.4)]">
        <div className="max-w-7xl mx-auto px-4 flex items-center h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 mr-8 shrink-0">
            <img src={`${import.meta.env.BASE_URL}viper-logo.png`} alt="Viper Invictus" className="w-8 h-8 rounded-lg" />
            <span className="font-bold text-sm hidden sm:block">Viper Invictus</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV.map((item) => {
              const isActive = location === item.path || location.startsWith(item.path + "/");
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-all ${
                    isActive
                      ? "bg-[#7c6af7]/15 text-[#b8b0fc]"
                      : "text-white/50 hover:text-white/80 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex-1" />

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="md:hidden p-2 text-white/50 hover:text-white/80"
          >
            {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileNavOpen && (
          <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-1">
            {NAV.map((item) => {
              const isActive = location === item.path || location.startsWith(item.path + "/");
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileNavOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                    isActive
                      ? "bg-[#7c6af7]/15 text-[#b8b0fc]"
                      : "text-white/50 hover:text-white/80 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                  {isActive && <ChevronRight className="w-3 h-3 ml-auto" />}
                </Link>
              );
            })}
          </div>
        )}
      </nav>

      {/* Main content */}
      <main className={`flex-1 ${fullWidth ? "" : "max-w-7xl mx-auto w-full px-4 py-8"}`}>
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#060614] py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          {/* Brand */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <img src={`${import.meta.env.BASE_URL}viper-logo.png`} alt="Viper Invictus" className="w-6 h-6 rounded-md" />
              <span className="font-semibold text-white/70">Viper Invictus</span>
            </div>
            <p className="text-xs text-white/30 leading-relaxed">
              A scripting language for games, art, and interactive programs. Runs in the browser IDE or via the CLI.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-1">
            <div>
              <p className="text-xs font-medium text-white/40 uppercase tracking-wider mb-2">Learn</p>
              <div className="space-y-1">
                <Link href="/learn" className="block text-xs text-white/30 hover:text-white/60 transition-colors">Learn</Link>
                <Link href="/docs" className="block text-xs text-white/30 hover:text-white/60 transition-colors">Docs</Link>
                <Link href="/tutorials" className="block text-xs text-white/30 hover:text-white/60 transition-colors">Tutorials</Link>
              </div>
            </div>
            <div>
              <p className="text-xs font-medium text-white/40 uppercase tracking-wider mb-2">Reference</p>
              <div className="space-y-1">
                <Link href="/cheatsheet" className="block text-xs text-white/30 hover:text-white/60 transition-colors">Cheatsheet</Link>
                <Link href="/examples" className="block text-xs text-white/30 hover:text-white/60 transition-colors">Examples</Link>
                <Link href="/playground" className="block text-xs text-white/30 hover:text-white/60 transition-colors">Playground</Link>
              </div>
            </div>
          </div>

          {/* Credits */}
          <div className="space-y-2">
            <p className="text-xs font-medium text-white/40 uppercase tracking-wider mb-2">Community</p>
            <div className="flex flex-wrap gap-2">
              <a href="https://github.com/devinaiisthebest272829-debug/Viper-Invictus-Official" target="_blank" rel="noopener noreferrer" className="text-xs text-white/30 hover:text-white/60 transition-colors">GitHub</a>
              <Link href="/showcase" className="text-xs text-white/30 hover:text-white/60 transition-colors">Showcase</Link>
              <Link href="/resources" className="text-xs text-white/30 hover:text-white/60 transition-colors">Resources</Link>
            </div>
            <a href="https://discord.gg/P4XDWvGgmt" target="_blank" rel="noopener noreferrer" className="text-xs text-white/30 hover:text-white/60 transition-colors pt-2">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
