import { useEffect, useRef } from "react";
import { Terminal, AlertCircle, AlertTriangle, Info } from "lucide-react";

export interface ConsoleLine {
  id: number;
  text: string;
  kind: "log" | "error" | "warn" | "info" | "system";
}

interface Props {
  lines: ConsoleLine[];
}

export function Console({ lines }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  return (
    <div className="flex flex-col h-full bg-[#0a0a12] font-mono text-sm overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10 bg-[#0f0f1a] shrink-0">
        <Terminal className="w-3.5 h-3.5 text-[#7c6af7]" />
        <span className="text-xs text-white/50 uppercase tracking-widest font-sans">Console</span>
        <span className="ml-auto text-[10px] text-white/20">{lines.filter(l => l.kind !== "system").length} lines</span>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-0.5 scrollbar-thin">
        {lines.length === 0 && (
          <div className="flex flex-col items-center justify-center h-32 text-white/20 text-xs font-sans">
            <Terminal className="w-6 h-6 mb-2" />
            <p>Run your code to see output here</p>
          </div>
        )}
        {lines.map((line) => (
          <div key={line.id} className={`flex gap-2 items-start leading-relaxed py-0.5 ${
            line.kind === "error" ? "text-red-400" :
            line.kind === "warn" ? "text-yellow-400" :
            line.kind === "info" ? "text-blue-400" :
            line.kind === "system" ? "text-[#7c6af7]/70 text-xs" :
            "text-emerald-300"
          }`}>
            <span className="shrink-0 mt-0.5">
              {line.kind === "error" ? <AlertCircle className="w-3 h-3" /> :
               line.kind === "warn" ? <AlertTriangle className="w-3 h-3" /> :
               line.kind === "info" ? <Info className="w-3 h-3" /> :
               line.kind === "system" ? <span className="text-[10px]">›</span> :
               <span className="text-white/20 text-[10px]">›</span>}
            </span>
            <pre className="whitespace-pre-wrap break-all text-[13px] leading-relaxed">{line.text}</pre>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
