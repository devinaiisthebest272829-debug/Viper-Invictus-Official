// Copyright 2026 mamadwkwk (devinaiisthebest272829@gmail.com)
// Licensed under the Apache License, Version 2.0
// See LICENSE or NOTICE for full license text
// Viper Invictus - A fast scripting language with browser IDE
// All rights reserved.

import { Link, useLocation } from "wouter";
import { BookOpen, Code2, Home, Play, Terminal, HelpCircle, Menu, X, ChevronRight, Zap, Sparkles, FileText, Layers, History } from "lucide-react";
import { useState } from "react";

const NAV = [
  { path: "/", label: "IDE", icon: Code2 },
  { path: "/learn", label: "Learn", icon: BookOpen },
  { path: "/docs", label: "Docs", icon: Terminal },
  { path: "/examples", label: "Examples", icon: Play },
  { path: "/cheatsheet", label: "Cheat", icon: FileText },
  { path: "/tutorials", label: "Tutorials", icon: Zap },
  { path: "/playground", label: "Play", icon: Sparkles },
  { path: "/showcase", label: "Showcase", icon: Layers },
  { path: "/resources", label: "Resources", icon: BookOpen },
  { path: "/changelog", label: "Changelog", icon: History },
  { path: "/about", label: "About", icon: HelpCircle },
];

export function Layout({ children, fullWidth = false }: { children: React.ReactNode; fullWidth?: boolean }) {
  const [location] = useLocation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#08081a] text-white flex flex-col">
      {/* Top navigation */}
      <nav className="border-b border-white/10 bg-[#09091a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 mr-8 shrink-0">
            <img src="/viper-logo.png" alt="Viper Invictus" className="w-8 h-8 rounded-lg" />
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
                  <item.icon className="w-4 h-4" />
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
                  <item.icon className="w-4 h-4" />
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
      <footer className="border-t border-white/10 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/30">
          <span>Viper Invictus v2.0 - JIT · FPGA/HDL · Superscalar · VPM</span>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link href="/docs" className="hover:text-white/60 transition-colors">Docs</Link>
            <Link href="/learn" className="hover:text-white/60 transition-colors">Learn</Link>
            <Link href="/cheatsheet" className="hover:text-white/60 transition-colors">Cheatsheet</Link>
            <Link href="/tutorials" className="hover:text-white/60 transition-colors">Tutorials</Link>
            <Link href="/showcase" className="hover:text-white/60 transition-colors">Showcase</Link>
            <Link href="/resources" className="hover:text-white/60 transition-colors">Resources</Link>
            <Link href="/changelog" className="hover:text-white/60 transition-colors">Changelog</Link>
            <a href="https://github.com/devinaiisthebest272829-debug/viper-invictus" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
