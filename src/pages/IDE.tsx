// Copyright 2026 mamadwkwk (devinaiisthebest272829@gmail.com)
// Licensed under the Apache License, Version 2.0
// See LICENSE or NOTICE for full license text
// Viper Invictus - A fast scripting language with browser IDE
// All rights reserved.

import { useState, useRef, useCallback, useEffect } from "react";
import { Link } from "wouter";
import Editor from "@monaco-editor/react";
import { Play, Square, RotateCcw, BookOpen, ChevronDown, ChevronRight, Terminal, Monitor, X, Menu, Globe, Download, Package } from "lucide-react";
import { Interpreter, ViperError } from "@/lang";
import type { DrawCommand, ExecutionContext } from "@/lang";
import { ViperCanvas } from "@/components/ViperCanvas";
import type { CanvasHandle } from "@/components/ViperCanvas";
import { Console } from "@/components/Console";
import type { ConsoleLine } from "@/components/Console";
import { EXAMPLES, STARTER_CODE } from "@/lib/examples";
import type { Example } from "@/lib/examples";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

type OutputTab = "console" | "canvas";

function groupExamples(examples: Example[]) {
  const groups: Record<string, Example[]> = {};
  for (const ex of examples) {
    if (!groups[ex.category]) groups[ex.category] = [];
    groups[ex.category].push(ex);
  }
  return groups;
}

function Sidebar({ onSelect, activeId, onDocsOpen, mobile, onClose }: {
  onSelect: (ex: Example) => void;
  activeId: string;
  onDocsOpen: () => void;
  mobile?: boolean;
  onClose?: () => void;
}) {
  const groups = groupExamples(EXAMPLES);
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  return (
    <div className={`${mobile ? "w-64" : "w-56"} shrink-0 border-r border-white/8 bg-[#09091a] flex flex-col h-full overflow-hidden z-40`}>
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8">
        <span className="text-sm font-semibold text-white/90">Examples</span>
        {mobile && (
          <button onClick={onClose} className="ml-auto text-white/40 hover:text-white/70">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      <div className="flex-1 overflow-y-auto py-2 overscroll-contain">
        {Object.entries(groups).map(([cat, exs]) => (
          <div key={cat}>
            <button
              onClick={() => setCollapsed(c => ({ ...c, [cat]: !c[cat] }))}
              className="w-full flex items-center gap-2 px-4 py-2 text-[11px] uppercase tracking-widest text-white/30 hover:text-white/50 transition-colors"
            >
              {collapsed[cat] ? <ChevronRight className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              {cat}
            </button>
            {!collapsed[cat] && exs.map(ex => (
              <button
                key={ex.id}
                onClick={() => { onSelect(ex); if (onClose) onClose(); }}
                className={`w-full text-left px-4 py-2 text-xs transition-all flex items-start gap-2 ${
                  activeId === ex.id
                    ? "bg-[#7c6af7]/15 text-[#b8b0fc] border-r-2 border-[#7c6af7]"
                    : "text-white/50 hover:text-white/80 hover:bg-white/5"
                }`}
              >
                <span className="leading-relaxed">{ex.name}</span>
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className="border-t border-white/8 p-3">
        <button
          onClick={() => { onDocsOpen(); if (onClose) onClose(); }}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-white/50 hover:text-white/80 hover:bg-white/8 transition-all"
        >
          <BookOpen className="w-3.5 h-3.5" />
          Language Docs
        </button>
      </div>
    </div>
  );
}

export default function IDE() {
  const [code, setCode] = useState(STARTER_CODE);
  const [activeExId, setActiveExId] = useState("");
  const [isTrusted, setIsTrusted] = useState(false);
  const [consoleLines, setConsoleLines] = useState<ConsoleLine[]>([]);
  const [drawCommands, setDrawCommands] = useState<DrawCommand[]>([]);
  const [outputTab, setOutputTab] = useState<OutputTab>("console");
  const [isRunning, setIsRunning] = useState(false);
  const [errorLine, setErrorLine] = useState<number | undefined>();
  const [showDocs, setShowDocs] = useState(false);
  const [hasCanvas, setHasCanvas] = useState(false);
  const hasCanvasRef = useRef(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [useBackend, setUseBackend] = useState(false);
  const isMobile = useIsMobile();
  const lineId = useRef(0);
  const interpRef = useRef<Interpreter | null>(null);
  const canvasRef = useRef<CanvasHandle>(null);
  const frameRef = useRef<number | null>(null);

  const addLine = useCallback((text: string, kind: ConsoleLine["kind"] = "log") => {
    setConsoleLines(prev => [...prev.slice(-500), { id: lineId.current++, text, kind }]);
  }, []);

  const stopExecution = useCallback(() => {
    interpRef.current?.stop();
    interpRef.current = null;
    if (frameRef.current !== null) { cancelAnimationFrame(frameRef.current); frameRef.current = null; }
    setIsRunning(false);
  }, []);

  const runCode = useCallback(() => {
    if (useBackend) {
      runBackend();
      return;
    }
    stopExecution();
    setConsoleLines([]);
    setDrawCommands([{ cmd: "clear", args: ["#050510"] }]);
    setErrorLine(undefined);
    setHasCanvas(false);
    hasCanvasRef.current = false;

    const pendingDraws: DrawCommand[] = [];
    let flushScheduled = false;
    const flushDraws = () => {
      if (pendingDraws.length > 0) {
        const cmds = [...pendingDraws];
        pendingDraws.length = 0;
        setDrawCommands(cmds);
      }
      flushScheduled = false;
    };

    const ctx: ExecutionContext = {
      output: (text, kind) => addLine(text, kind ?? "log"),
      draw: (cmd) => {
        pendingDraws.push(cmd);
        if (cmd.cmd === "setSize") {
          hasCanvasRef.current = true;
          setHasCanvas(true);
          setOutputTab("canvas");
          const w = cmd.args[0] as number;
          const h = cmd.args[1] as number;
          canvasRef.current?.setSize(w, h);
        }
        if (!flushScheduled) { flushScheduled = true; requestAnimationFrame(flushDraws); }
      },
      clearCanvas: () => setDrawCommands([{ cmd: "clear", args: ["#050510"] }]),
      clearConsole: () => setConsoleLines([]),
      getInput: (prompt) => window.prompt(prompt) ?? "",
      setTitle: () => {},
      getTime: () => performance.now(),
      random: () => Math.random(),
      scheduleFrame: (cb) => { frameRef.current = requestAnimationFrame(cb); },
      cancelFrames: () => { if (frameRef.current !== null) { cancelAnimationFrame(frameRef.current); frameRef.current = null; } },
    };

    const interp = new Interpreter(ctx, isTrusted);
    interpRef.current = interp;
    setIsRunning(true);

    addLine("▶ Running...", "system");

    setTimeout(() => {
      const result = interp.execute(code);
      if (!result.success) {
        if (result.errors && result.errors.length > 0) {
          addLine("═══════════════════════════════════════", "system");
          addLine(`  Found ${result.errors.length} error${result.errors.length > 1 ? 's' : ''}`, "error");
          addLine("═══════════════════════════════════════", "system");
          for (const err of result.errors) {
            addLine(`  ${err.message}${err.line ? ` (line ${err.line})` : ""}`, "error");
          }
          addLine("═══════════════════════════════════════", "system");
          setErrorLine(result.errors[0].line);
        } else {
          addLine(`Error: ${result.error}${result.errorLine ? ` (line ${result.errorLine})` : ""}`, "error");
          setErrorLine(result.errorLine);
        }
        setIsRunning(false);
        interpRef.current = null;
      } else {
        const loopActive = interp.getKeyHandlers().length > 0 || interp.getClickHandlers().length > 0 || hasCanvasRef.current;
        if (!loopActive) {
          addLine("✓ Done", "system");
          setIsRunning(false);
        }
      }
    }, 10);
  }, [code, addLine, stopExecution, hasCanvas, useBackend]);

  const runBackend = useCallback(async () => {
    stopExecution();
    setConsoleLines([]);
    setDrawCommands([]);
    setErrorLine(undefined);
    setHasCanvas(false);
    setIsRunning(true);
    addLine("▶ Running on backend...", "system");
    try {
      const baseUrl = window.location.origin;
      const res = await fetch(`${baseUrl}/api/viper/run`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, trusted: isTrusted }),
      });
      if (!res.ok) {
        addLine(`Backend error: ${res.status} ${res.statusText}`, "error");
        setIsRunning(false);
        return;
      }
      const result = await res.json();
      if (!result.success) {
        if (result.errors && result.errors.length > 0) {
          for (const err of result.errors) {
            addLine(`  ${err.message}${err.line ? ` (line ${err.line})` : ""}`, "error");
          }
        } else {
          addLine(`Error: ${result.error}${result.errorLine ? ` (line ${result.errorLine})` : ""}`, "error");
        }
      } else {
        for (const line of result.output || []) {
          const match = line.match(/^\[(\w+)\]\s(.+)$/);
          if (match) {
            addLine(match[2], match[1] as ConsoleLine["kind"]);
          } else {
            addLine(line, "log");
          }
        }
        addLine("✓ Done (backend)", "system");
      }
      setIsRunning(false);
    } catch (err) {
      addLine(`Network error: ${err instanceof Error ? err.message : String(err)}`, "error");
      setIsRunning(false);
    }
  }, [code, addLine, stopExecution, isTrusted]);

  const handleCanvasClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!interpRef.current) return;
    const canvas = e.currentTarget.querySelector("canvas");
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    for (const h of interpRef.current.getClickHandlers()) h(x, y);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!interpRef.current) return;
      for (const h of interpRef.current.getKeyHandlers()) h(e.key);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    return () => stopExecution();
  }, [stopExecution]);

  const handleExampleSelect = (ex: Example) => {
    stopExecution();
    setCode(ex.code);
    setActiveExId(ex.id);
    setIsTrusted(true);
    setConsoleLines([]);
    setDrawCommands([]);
    setHasCanvas(false);
    setErrorLine(undefined);
  };

  const MONACO_OPTIONS = {
    fontSize: 14,
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
    fontLigatures: true,
    minimap: { enabled: false },
    lineNumbers: "on" as const,
    glyphMargin: true,
    folding: true,
    lineDecorationsWidth: 8,
    renderLineHighlight: "all" as const,
    scrollBeyondLastLine: false,
    padding: { top: 16, bottom: 16 },
    cursorBlinking: "smooth" as const,
    cursorSmoothCaretAnimation: "on" as const,
    smoothScrolling: true,
    bracketPairColorization: { enabled: true },
    wordWrap: "on" as const,
    tabSize: 2,
    automaticLayout: true,
    theme: "viper-dark",
    scrollbar: { alwaysConsumeMouseWheel: false, vertical: "visible" as const, horizontal: "visible" as const, verticalScrollbarSize: 8, horizontalScrollbarSize: 8 },
  };

  return (
    <div className="flex min-h-screen bg-[#08081a] text-white md:flex-row flex-col max-md:min-h-[100dvh]">
      <div className="hidden md:flex">
        <Sidebar onSelect={handleExampleSelect} activeId={activeExId} onDocsOpen={() => setShowDocs(true)} />
      </div>
      {mobileSidebarOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex" onClick={() => setMobileSidebarOpen(false)}>
          <div className="flex" onClick={e => e.stopPropagation()}>
            <Sidebar onSelect={handleExampleSelect} activeId={activeExId} onDocsOpen={() => setShowDocs(true)} mobile onClose={() => setMobileSidebarOpen(false)} />
          </div>
        </div>
      )}

      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/8 bg-[#09091a] shrink-0 flex-wrap">
          <button onClick={() => setMobileSidebarOpen(true)} className="md:hidden text-white/50 hover:text-white/80 p-1 -ml-1">
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex-1" />

          {/* Download CLI button */}
          <a
            href="https://github.com/devinaiisthebest272829-debug/Viper-Invictus-Official/archive/refs/heads/main.zip"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all border bg-white/5 text-white/40 border-white/10 hover:bg-white/8 hover:text-white/60"
            title="Download Viper CLI — run .vi scripts from the terminal"
          >
            <Download className="w-3.5 h-3.5" />
            CLI
          </a>

          <button
            onClick={() => setUseBackend(!useBackend)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
              useBackend
                ? "bg-[#7c6af7]/20 text-[#b8b0fc] border-[#7c6af7]/40"
                : "bg-white/5 text-white/40 border-white/10 hover:bg-white/8 hover:text-white/60"
            }`}
            title={useBackend ? "Running on backend server" : "Running in browser"}
          >
            {useBackend ? <Globe className="w-3.5 h-3.5" /> : <Package className="w-3.5 h-3.5" />}
            {useBackend ? "Backend" : "Browser"}
          </button>
          <button
            onClick={runCode}
            disabled={isRunning}
            className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#7c6af7] hover:bg-[#8d7ff8] text-white text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Play className="w-3.5 h-3.5" />
            Run
          </button>
          {isRunning && (
            <button
              onClick={stopExecution}
              className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-400 text-sm font-medium transition-all border border-red-500/30"
            >
              <Square className="w-3.5 h-3.5" />
              Stop
            </button>
          )}
          <button
            onClick={() => { setCode(STARTER_CODE); setActiveExId(""); setIsTrusted(false); stopExecution(); setConsoleLines([]); setDrawCommands([]); setErrorLine(undefined); setHasCanvas(false); }}
            className="p-1.5 rounded-lg text-white/40 hover:text-white/70 hover:bg-white/8 transition-all"
            title="Reset"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-1 overflow-hidden flex-col md:flex-row">
          <div className="flex-1 flex flex-col overflow-hidden border-b md:border-b-0 md:border-r border-white/8 min-h-0 md:min-h-0 max-md:min-h-[50vh]">
            <div className="flex items-center px-4 py-1.5 border-b border-white/8 bg-[#09091a] shrink-0">
              <span className="text-xs text-white/30 font-mono">main.vi</span>
              {isRunning && (
                <div className="ml-3 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-emerald-400">Running</span>
                </div>
              )}
            </div>
            <div className="flex-1 overflow-hidden min-h-0">
              {isMobile ? (
                <textarea
                  value={code}
                  onChange={(e) => { setCode(e.target.value); setIsTrusted(false); }}
                  className="w-full h-full bg-[#09091a] text-[#e2e8f0] font-mono text-sm p-4 resize-none border-none outline-none"
                  style={{ fontFamily: "'JetBrains Mono', monospace", lineHeight: 1.6, fontSize: 13 }}
                />
              ) : (
                <div className="h-full overflow-hidden">
                  <Editor
                    language="javascript"
                    value={code}
                    onChange={(v) => { setCode(v ?? ""); setIsTrusted(false); }}
                    options={MONACO_OPTIONS}
                    beforeMount={(monaco) => {
                      monaco.editor.defineTheme("viper-dark", {
                        base: "vs-dark",
                        inherit: true,
                        rules: [
                          { token: "keyword", foreground: "a78bfa" },
                          { token: "string", foreground: "86efac" },
                          { token: "number", foreground: "fbbf24" },
                          { token: "comment", foreground: "4a5568", fontStyle: "italic" },
                          { token: "identifier", foreground: "e2e8f0" },
                        ],
                        colors: {
                          "editor.background": "#09091a",
                          "editor.foreground": "#e2e8f0",
                          "editor.lineHighlightBackground": "#ffffff08",
                          "editorLineNumber.foreground": "#334155",
                          "editorLineNumber.activeForeground": "#7c6af7",
                          "editor.selectionBackground": "#7c6af720",
                          "editor.findMatchBackground": "#7c6af740",
                          "editorCursor.foreground": "#7c6af7",
                          "editorWidget.background": "#0f0f1e",
                          "editorSuggestWidget.background": "#0f0f1e",
                          "editorSuggestWidget.border": "#ffffff15",
                          "scrollbarSlider.background": "#ffffff10",
                          "scrollbarSlider.hoverBackground": "#ffffff18",
                        },
                      });
                    }}
                    onMount={(editor, monaco) => {
                      monaco.editor.setTheme("viper-dark");
                      editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => runCode());
                    }}
                  />
                </div>
              )}
            </div>
            {errorLine && (
              <div className="flex items-center gap-2 px-4 py-2 bg-red-900/20 border-t border-red-500/30 text-xs text-red-400 shrink-0">
                <X className="w-3.5 h-3.5 cursor-pointer" onClick={() => setErrorLine(undefined)} />
                Error on line {errorLine}
              </div>
            )}
          </div>

          <div className="w-full md:w-96 flex flex-col shrink-0 overflow-hidden h-48 md:h-auto max-md:overflow-y-auto max-md:min-h-[40vh]">
            <div className="flex border-b border-white/8 bg-[#09091a] shrink-0">
              <button
                onClick={() => setOutputTab("console")}
                className={`flex items-center gap-1.5 px-4 py-2 text-xs font-medium transition-all border-b-2 ${
                  outputTab === "console"
                    ? "text-[#b8b0fc] border-[#7c6af7]"
                    : "text-white/40 border-transparent hover:text-white/60"
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                Console
              </button>
              <button
                onClick={() => setOutputTab("canvas")}
                className={`flex items-center gap-1.5 px-4 py-2 text-xs font-medium transition-all border-b-2 ${
                  outputTab === "canvas"
                    ? "text-[#b8b0fc] border-[#7c6af7]"
                    : "text-white/40 border-transparent hover:text-white/60"
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                Canvas
                {hasCanvas && <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 ml-1" />}
              </button>
            </div>
            <div className={`flex-1 overflow-hidden ${outputTab !== "console" ? "hidden" : ""}`}>
              <Console lines={consoleLines} />
            </div>
            <div
              className={`flex-1 overflow-hidden ${outputTab !== "canvas" ? "hidden" : ""}`}
              onClick={handleCanvasClick}
            >
              <ViperCanvas ref={canvasRef} commands={drawCommands} />
            </div>
          </div>
        </div>
      </div>

      {showDocs && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-8" onClick={() => setShowDocs(false)}>
          <div className="bg-[#08081a] rounded-2xl border border-white/15 w-full max-w-2xl max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="font-bold text-lg">Language Docs</h2>
              <button onClick={() => setShowDocs(false)} className="text-white/40 hover:text-white/70 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 text-sm text-white/60 leading-relaxed">
              <p className="mb-4">Use the sidebar examples to explore the language, or open the full documentation by clicking the link below.</p>
              <Link href="/docs" className="text-[#b8b0fc] hover:underline">Open Full Docs</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
