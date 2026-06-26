import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import type { DrawCommand } from "@/lang";

export interface CanvasHandle {
  handleKey: (key: string) => void;
  handleClick: (x: number, y: number) => void;
  setSize: (w: number, h: number) => void;
}

interface Props {
  commands: DrawCommand[];
  onReady?: () => void;
}

export const ViperCanvas = forwardRef<CanvasHandle, Props>(({ commands, onReady }, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const keyHandlersRef = useRef<((key: string) => void)[]>([]);
  const clickHandlersRef = useRef<((x: number, y: number) => void)[]>([]);

  useImperativeHandle(ref, () => ({
    handleKey: (key: string) => { for (const h of keyHandlersRef.current) h(key); },
    handleClick: (x: number, y: number) => { for (const h of clickHandlersRef.current) h(x, y); },
    setSize: (w: number, h: number) => {
      if (canvasRef.current) {
        canvasRef.current.width = w;
        canvasRef.current.height = h;
      }
    },
  }));

  useEffect(() => { onReady?.(); }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    for (const cmd of commands) {
      const a = cmd.args;
      try {
        switch (cmd.cmd) {
          case "setSize":
            canvas.width = a[0] as number;
            canvas.height = a[1] as number;
            break;
          case "clear":
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if (a[0]) { ctx.fillStyle = a[0] as string; ctx.fillRect(0, 0, canvas.width, canvas.height); }
            break;
          case "rect":
            ctx.fillStyle = a[4] as string;
            ctx.fillRect(a[0] as number, a[1] as number, a[2] as number, a[3] as number);
            break;
          case "roundRect":
            ctx.fillStyle = a[5] as string;
            ctx.beginPath();
            (ctx as CanvasRenderingContext2D & { roundRect?: (x: number, y: number, w: number, h: number, r: number) => void }).roundRect?.(a[0] as number, a[1] as number, a[2] as number, a[3] as number, a[4] as number) ?? ctx.rect(a[0] as number, a[1] as number, a[2] as number, a[3] as number);
            ctx.fill();
            break;
          case "circle":
            ctx.fillStyle = a[3] as string;
            ctx.beginPath();
            ctx.arc(a[0] as number, a[1] as number, Math.max(0, a[2] as number), 0, Math.PI * 2);
            ctx.fill();
            break;
          case "ellipse":
            ctx.fillStyle = a[4] as string;
            ctx.beginPath();
            ctx.ellipse(a[0] as number, a[1] as number, Math.max(0, a[2] as number), Math.max(0, a[3] as number), 0, 0, Math.PI * 2);
            ctx.fill();
            break;
          case "line": {
            const lw = a[4] as number;
            ctx.strokeStyle = a[5] as string;
            ctx.lineWidth = lw || 1;
            ctx.beginPath();
            ctx.moveTo(a[0] as number, a[1] as number);
            ctx.lineTo(a[2] as number, a[3] as number);
            ctx.stroke();
            break;
          }
          case "text": {
            const size = a[3] as number;
            const color = a[4] as string;
            const align = (a[5] as CanvasTextAlign) || "left";
            ctx.font = `${size}px 'JetBrains Mono', monospace`;
            ctx.fillStyle = color;
            ctx.textAlign = align;
            ctx.textBaseline = "alphabetic";
            ctx.fillText(String(a[2]), a[0] as number, a[1] as number);
            ctx.textAlign = "left";
            break;
          }
          case "arc":
            ctx.strokeStyle = a[5] as string;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(a[0] as number, a[1] as number, a[2] as number, a[3] as number, a[4] as number);
            ctx.stroke();
            break;
          case "ringArc": {
            const [rx, ry, inner, outer, start, end] = a as number[];
            const ringColor = a[6] as string;
            ctx.fillStyle = ringColor;
            ctx.beginPath();
            ctx.arc(rx, ry, outer, start, end);
            ctx.arc(rx, ry, inner, end, start, true);
            ctx.closePath();
            ctx.fill();
            break;
          }
          case "polygon": {
            const pts = (a[0] as string).split("|").map(p => p.split(",").map(Number));
            ctx.fillStyle = a[1] as string;
            ctx.beginPath();
            if (pts.length > 0) { ctx.moveTo(pts[0][0], pts[0][1]); for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]); ctx.closePath(); }
            ctx.fill();
            break;
          }
          case "image": {
            const img = new Image();
            img.src = a[0] as string;
            img.onload = () => ctx.drawImage(img, a[1] as number, a[2] as number, a[3] as number, a[4] as number);
            break;
          }
          case "save": ctx.save(); break;
          case "restore": ctx.restore(); break;
          case "translate": ctx.translate(a[0] as number, a[1] as number); break;
          case "rotate": ctx.rotate(a[0] as number); break;
          case "scale": ctx.scale(a[0] as number, a[1] as number); break;
          case "alpha": ctx.globalAlpha = a[0] as number; break;
        }
      } catch { /* ignore individual draw errors */ }
    }
  }, [commands]);

  return (
    <div className="flex items-center justify-center w-full h-full bg-[#050510]">
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        style={{ maxWidth: "100%", maxHeight: "100%", imageRendering: "pixelated" }}
        className="border border-white/10"
        tabIndex={0}
      />
    </div>
  );
});

ViperCanvas.displayName = "ViperCanvas";
