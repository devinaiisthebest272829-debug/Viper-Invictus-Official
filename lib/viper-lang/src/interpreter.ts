import {
  AstNode, ViperValue, ViperNumber, ViperString, ViperBool, ViperNull,
  ViperArray, ViperObject, ViperFunction, ViperNative, ViperClass, ViperInstance,
  Environment, ViperError, ReturnSignal, BreakSignal, ContinueSignal,
  ExecutionContext, ExecutionResult,
} from "./types";
import { lex } from "./lexer";
import { parse } from "./parser";
import { compileToJS } from "./compiler-js";
import { Compiler } from "./compiler";
import { VM } from "./vm";

export const NUM = (v: number): ViperNumber => ({ kind: "number", value: v });
export const STR = (v: string): ViperString => ({ kind: "string", value: v });
export const BOOL = (v: boolean): ViperBool => ({ kind: "bool", value: v });
export const NULL: ViperNull = { kind: "null" };
export const ARR = (items: ViperValue[]): ViperArray => ({ kind: "array", items });
export const OBJ = (props?: Map<string, ViperValue>): ViperObject => ({ kind: "object", props: props ?? new Map() });
export const NATIVE = (name: string, call: ViperNative["call"]): ViperNative => ({ kind: "native", name, call });

export function isTruthy(v: ViperValue): boolean {
  switch (v.kind) {
    case "null": return false;
    case "bool": return v.value;
    case "number": return v.value !== 0 && !isNaN(v.value);
    case "string": return v.value.length > 0;
    default: return true;
  }
}

function viperToJS(v: ViperValue): unknown {
  switch (v.kind) {
    case "number": return v.value;
    case "string": return v.value;
    case "bool": return v.value;
    case "null": return null;
    case "array": return v.items.map(viperToJS);
    case "object": {
      const o: Record<string, unknown> = {};
      v.props.forEach((val, key) => { o[key] = viperToJS(val); });
      return o;
    }
    case "function": return `<fn ${v.name}>`;
    case "native": return `<native ${v.name}>`;
    case "class": return `<class ${v.name}>`;
    case "instance": return `<instance of ${v.cls.name}>`;
  }
}

export function viperToString(v: ViperValue): string {
  switch (v.kind) {
    case "null": return "null";
    case "bool": return v.value ? "true" : "false";
    case "number": return String(v.value);
    case "string": return v.value;
    case "array": return `[${v.items.map(viperToString).join(", ")}]`;
    case "object": {
      const pairs: string[] = [];
      v.props.forEach((val, key) => pairs.push(`${key}: ${viperToString(val)}`));
      return `{ ${pairs.join(", ")} }`;
    }
    case "function": return `<fn ${v.name || "anonymous"}>`;
    case "native": return `<native ${v.name}>`;
    case "class": return `<class ${v.name}>`;
    case "instance": return `<${v.cls.name} { ${Array.from(v.fields.entries()).map(([k, v2]) => `${k}: ${viperToString(v2)}`).join(", ")} }>`;
  }
}

export function jsToViper(v: unknown): ViperValue {
  if (v === null || v === undefined) return NULL;
  if (typeof v === "number") return NUM(v);
  if (typeof v === "string") return STR(v);
  if (typeof v === "boolean") return BOOL(v);
  if (Array.isArray(v)) return ARR(v.map(jsToViper));
  if (typeof v === "object") {
    const m = new Map<string, ViperValue>();
    for (const [k, val] of Object.entries(v as Record<string, unknown>)) m.set(k, jsToViper(val));
    return OBJ(m);
  }
  return NULL;
}

function arrayMethods(arr: ViperArray, prop: string, interp: Interpreter): ViperValue {
  switch (prop) {
    case "length": return NUM(arr.items.length);
    case "push": return NATIVE("push", (args) => { arr.items.push(...args); return NUM(arr.items.length); });
    case "pop": return NATIVE("pop", () => arr.items.pop() ?? NULL);
    case "shift": return NATIVE("shift", () => arr.items.shift() ?? NULL);
    case "unshift": return NATIVE("unshift", (args) => { arr.items.unshift(...args); return NUM(arr.items.length); });
    case "reverse": return NATIVE("reverse", () => { arr.items.reverse(); return arr; });
    case "join": return NATIVE("join", (args) => STR(arr.items.map(viperToString).join(args[0] ? viperToString(args[0]) : ",")));
    case "indexOf": return NATIVE("indexOf", (args) => NUM(arr.items.findIndex(x => viperToString(x) === viperToString(args[0]))));
    case "includes": return NATIVE("includes", (args) => BOOL(arr.items.some(x => viperToString(x) === viperToString(args[0]))));
    case "slice": return NATIVE("slice", (args) => {
      const s = args[0]?.kind === "number" ? (args[0] as ViperNumber).value : 0;
      const e = args[1]?.kind === "number" ? (args[1] as ViperNumber).value : undefined;
      return ARR(arr.items.slice(s, e));
    });
    case "splice": return NATIVE("splice", (args) => {
      const s = args[0]?.kind === "number" ? (args[0] as ViperNumber).value : 0;
      const dc = args[1]?.kind === "number" ? (args[1] as ViperNumber).value : arr.items.length;
      const inserts = args.slice(2);
      const removed = arr.items.splice(s, dc, ...inserts);
      return ARR(removed);
    });
    case "concat": return NATIVE("concat", (args) => {
      const result = [...arr.items];
      for (const a of args) if (a.kind === "array") result.push(...a.items); else result.push(a);
      return ARR(result);
    });
    case "map": return NATIVE("map", (args) => {
      const fn = args[0];
      return ARR(arr.items.map((item, i) => interp.callValue(fn, [item, NUM(i)], undefined)));
    });
    case "filter": return NATIVE("filter", (args) => {
      const fn = args[0];
      return ARR(arr.items.filter((item, i) => isTruthy(interp.callValue(fn, [item, NUM(i)], undefined))));
    });
    case "reduce": return NATIVE("reduce", (args) => {
      const fn = args[0];
      let acc = args[1] ?? arr.items[0];
      const start = args[1] !== undefined ? 0 : 1;
      for (let i = start; i < arr.items.length; i++) acc = interp.callValue(fn, [acc, arr.items[i], NUM(i)], undefined);
      return acc;
    });
    case "forEach": return NATIVE("forEach", (args) => {
      const fn = args[0];
      arr.items.forEach((item, i) => interp.callValue(fn, [item, NUM(i)], undefined));
      return NULL;
    });
    case "find": return NATIVE("find", (args) => {
      const fn = args[0];
      return arr.items.find(item => isTruthy(interp.callValue(fn, [item], undefined))) ?? NULL;
    });
    case "findIndex": return NATIVE("findIndex", (args) => {
      const fn = args[0];
      return NUM(arr.items.findIndex(item => isTruthy(interp.callValue(fn, [item], undefined))));
    });
    case "some": return NATIVE("some", (args) => BOOL(arr.items.some(item => isTruthy(interp.callValue(args[0], [item], undefined)))));
    case "every": return NATIVE("every", (args) => BOOL(arr.items.every(item => isTruthy(interp.callValue(args[0], [item], undefined)))));
    case "flat": return NATIVE("flat", () => ARR(arr.items.flatMap(x => x.kind === "array" ? x.items : [x])));
    case "sort": return NATIVE("sort", (args) => {
      const cmp = args[0];
      const copy = [...arr.items];
      if (cmp) {
        copy.sort((a, b) => {
          const r = interp.callValue(cmp, [a, b], undefined);
          return r.kind === "number" ? r.value : 0;
        });
      } else {
        copy.sort((a, b) => viperToString(a).localeCompare(viperToString(b)));
      }
      arr.items.splice(0, arr.items.length, ...copy);
      return arr;
    });
    default: return NULL;
  }
}

function stringMethods(str: ViperString, prop: string): ViperValue {
  const s = str.value;
  switch (prop) {
    case "length": return NUM(s.length);
    case "upper": return NATIVE("upper", () => STR(s.toUpperCase()));
    case "lower": return NATIVE("lower", () => STR(s.toLowerCase()));
    case "trim": return NATIVE("trim", () => STR(s.trim()));
    case "trimStart": return NATIVE("trimStart", () => STR(s.trimStart()));
    case "trimEnd": return NATIVE("trimEnd", () => STR(s.trimEnd()));
    case "split": return NATIVE("split", (args) => {
      const sep = args[0]?.kind === "string" ? args[0].value : "";
      return ARR(s.split(sep).map(STR));
    });
    case "join": return NATIVE("join", (args) => {
      if (args[0]?.kind === "array") {
        return STR(args[0].items.map(viperToString).join(s));
      }
      return STR(s);
    });
    case "replace": return NATIVE("replace", (args) => {
      const from = args[0]?.kind === "string" ? args[0].value : viperToString(args[0]);
      const to = args[1]?.kind === "string" ? args[1].value : viperToString(args[1]);
      return STR(s.replaceAll(from, to));
    });
    case "contains": return NATIVE("contains", (args) => BOOL(s.includes(args[0]?.kind === "string" ? args[0].value : viperToString(args[0]))));
    case "startsWith": return NATIVE("startsWith", (args) => BOOL(s.startsWith(args[0]?.kind === "string" ? args[0].value : "")));
    case "endsWith": return NATIVE("endsWith", (args) => BOOL(s.endsWith(args[0]?.kind === "string" ? args[0].value : "")));
    case "indexOf": return NATIVE("indexOf", (args) => NUM(s.indexOf(args[0]?.kind === "string" ? args[0].value : "")));
    case "slice": return NATIVE("slice", (args) => {
      const a = args[0]?.kind === "number" ? args[0].value : 0;
      const b = args[1]?.kind === "number" ? args[1].value : undefined;
      return STR(s.slice(a, b));
    });
    case "substring": return NATIVE("substring", (args) => {
      const a = args[0]?.kind === "number" ? args[0].value : 0;
      const b = args[1]?.kind === "number" ? args[1].value : s.length;
      return STR(s.substring(a, b));
    });
    case "repeat": return NATIVE("repeat", (args) => STR(s.repeat(args[0]?.kind === "number" ? args[0].value : 1)));
    case "padStart": return NATIVE("padStart", (args) => {
      const len = args[0]?.kind === "number" ? args[0].value : 0;
      const fill = args[1]?.kind === "string" ? args[1].value : " ";
      return STR(s.padStart(len, fill));
    });
    case "padEnd": return NATIVE("padEnd", (args) => {
      const len = args[0]?.kind === "number" ? args[0].value : 0;
      const fill = args[1]?.kind === "string" ? args[1].value : " ";
      return STR(s.padEnd(len, fill));
    });
    case "char": return NATIVE("char", (args) => STR(s[args[0]?.kind === "number" ? args[0].value : 0] ?? ""));
    case "charCode": return NATIVE("charCode", (args) => NUM(s.charCodeAt(args[0]?.kind === "number" ? args[0].value : 0)));
    case "toNumber": return NATIVE("toNumber", () => NUM(parseFloat(s)));
    case "toBool": return NATIVE("toBool", () => BOOL(s !== "" && s !== "false" && s !== "0"));
    default: return NULL;
  }
}

export class Interpreter {
  private ctx: ExecutionContext;
  private globalEnv: Environment;
  private frameLimit = 5000000;
  private frameCount = 0;
  private frameCheckInterval = 500;
  private stopped = false;
  private compileCache = new Map<string, { js: string; error?: string }>();
  private compiledContext: Record<string, unknown> = {};
  private loopCallbacks: (() => void)[] = [];
  private animFrameId: number | null = null;
  private keyHandlers: ((key: string) => void)[] = [];
  private clickHandlers: ((x: number, y: number) => void)[] = [];
  private canvasSize = { w: 400, h: 400 };
  private isTrusted = false;

  constructor(ctx: ExecutionContext, isTrusted = false) {
    this.ctx = ctx;
    this.isTrusted = isTrusted;
    this.globalEnv = new Environment();
    this.setupGlobals();
  }

  setGlobal(name: string, value: ViperValue) {
    this.globalEnv.define(name, value);
  }

  registerCompiledGlobal(name: string, value: unknown) {
    this.compiledContext[name] = value;
  }

  stop() {
    this.stopped = true;
    this.ctx.cancelFrames();
    this.loopCallbacks = [];
    this.keyHandlers = [];
    this.clickHandlers = [];
  }

  getKeyHandlers() { return this.keyHandlers; }
  getClickHandlers() { return this.clickHandlers; }
  getCanvasSize() { return this.canvasSize; }

  private setupGlobals() {
    const env = this.globalEnv;

    // print / log
    env.define("print", NATIVE("print", (args) => {
      this.ctx.output(args.map(viperToString).join(" "), "log");
      return NULL;
    }));
    env.define("log", NATIVE("log", (args) => {
      this.ctx.output(args.map(viperToString).join(" "), "log");
      return NULL;
    }));
    env.define("warn", NATIVE("warn", (args) => {
      this.ctx.output(args.map(viperToString).join(" "), "warn");
      return NULL;
    }));
    env.define("error", NATIVE("error", (args) => {
      this.ctx.output(args.map(viperToString).join(" "), "error");
      return NULL;
    }));
    env.define("clear", NATIVE("clear", () => { this.ctx.clearConsole(); return NULL; }));

    // Type conversion
    env.define("str", NATIVE("str", (args) => STR(viperToString(args[0] ?? NULL))));
    env.define("num", NATIVE("num", (args) => {
      const v = args[0];
      if (v?.kind === "number") return v;
      if (v?.kind === "string") return NUM(parseFloat(v.value) || 0);
      if (v?.kind === "bool") return NUM(v.value ? 1 : 0);
      return NUM(0);
    }));
    env.define("bool", NATIVE("bool", (args) => BOOL(isTruthy(args[0] ?? NULL))));
    env.define("type", NATIVE("type", (args) => STR(args[0]?.kind ?? "null")));
    env.define("len", NATIVE("len", (args) => {
      const v = args[0];
      if (v?.kind === "array") return NUM(v.items.length);
      if (v?.kind === "string") return NUM(v.value.length);
      if (v?.kind === "object") return NUM(v.props.size);
      return NUM(0);
    }));
    env.define("keys", NATIVE("keys", (args) => {
      const v = args[0];
      if (v?.kind === "object") return ARR(Array.from(v.props.keys()).map(STR));
      if (v?.kind === "array") return ARR(v.items.map((_, i) => NUM(i)));
      return ARR([]);
    }));
    env.define("values", NATIVE("values", (args) => {
      const v = args[0];
      if (v?.kind === "object") return ARR(Array.from(v.props.values()));
      if (v?.kind === "array") return ARR([...v.items]);
      return ARR([]);
    }));
    env.define("range", NATIVE("range", (args) => {
      const a = args[0]?.kind === "number" ? args[0].value : 0;
      const b = args[1]?.kind === "number" ? args[1].value : a;
      const step = args[2]?.kind === "number" ? args[2].value : 1;
      const start = args[1] !== undefined ? a : 0;
      const end = args[1] !== undefined ? b : a;
      const result: ViperValue[] = [];
      for (let i = start; i < end; i += step) result.push(NUM(i));
      return ARR(result);
    }));
    env.define("JSON", (() => {
      const o = OBJ();
      o.props.set("stringify", NATIVE("stringify", (args) => STR(JSON.stringify(viperToJS(args[0]), null, args[1]?.kind === "number" ? args[1].value : undefined))));
      o.props.set("parse", NATIVE("parse", (args) => {
        try { return jsToViper(JSON.parse(args[0]?.kind === "string" ? args[0].value : "")); }
        catch { return NULL; }
      }));
      return o;
    })());

    // Math
    const mathObj = OBJ();
    const m = mathObj.props;
    m.set("PI", NUM(Math.PI));
    m.set("E", NUM(Math.E));
    m.set("sqrt", NATIVE("sqrt", (a) => NUM(Math.sqrt(a[0]?.kind === "number" ? a[0].value : 0))));
    m.set("abs", NATIVE("abs", (a) => NUM(Math.abs(a[0]?.kind === "number" ? a[0].value : 0))));
    m.set("floor", NATIVE("floor", (a) => NUM(Math.floor(a[0]?.kind === "number" ? a[0].value : 0))));
    m.set("ceil", NATIVE("ceil", (a) => NUM(Math.ceil(a[0]?.kind === "number" ? a[0].value : 0))));
    m.set("round", NATIVE("round", (a) => NUM(Math.round(a[0]?.kind === "number" ? a[0].value : 0))));
    m.set("sin", NATIVE("sin", (a) => NUM(Math.sin(a[0]?.kind === "number" ? a[0].value : 0))));
    m.set("cos", NATIVE("cos", (a) => NUM(Math.cos(a[0]?.kind === "number" ? a[0].value : 0))));
    m.set("tan", NATIVE("tan", (a) => NUM(Math.tan(a[0]?.kind === "number" ? a[0].value : 0))));
    m.set("asin", NATIVE("asin", (a) => NUM(Math.asin(a[0]?.kind === "number" ? a[0].value : 0))));
    m.set("acos", NATIVE("acos", (a) => NUM(Math.acos(a[0]?.kind === "number" ? a[0].value : 0))));
    m.set("atan", NATIVE("atan", (a) => NUM(Math.atan(a[0]?.kind === "number" ? a[0].value : 0))));
    m.set("atan2", NATIVE("atan2", (a) => NUM(Math.atan2(a[0]?.kind === "number" ? a[0].value : 0, a[1]?.kind === "number" ? a[1].value : 0))));
    m.set("pow", NATIVE("pow", (a) => NUM(Math.pow(a[0]?.kind === "number" ? a[0].value : 0, a[1]?.kind === "number" ? a[1].value : 1))));
    m.set("log", NATIVE("log", (a) => NUM(Math.log(a[0]?.kind === "number" ? a[0].value : 1))));
    m.set("log2", NATIVE("log2", (a) => NUM(Math.log2(a[0]?.kind === "number" ? a[0].value : 1))));
    m.set("log10", NATIVE("log10", (a) => NUM(Math.log10(a[0]?.kind === "number" ? a[0].value : 1))));
    m.set("max", NATIVE("max", (a) => NUM(Math.max(...a.filter(x => x.kind === "number").map(x => (x as ViperNumber).value)))));
    m.set("min", NATIVE("min", (a) => NUM(Math.min(...a.filter(x => x.kind === "number").map(x => (x as ViperNumber).value)))));
    m.set("hypot", NATIVE("hypot", (a) => NUM(Math.hypot(...a.filter(x => x.kind === "number").map(x => (x as ViperNumber).value)))));
    m.set("sign", NATIVE("sign", (a) => NUM(Math.sign(a[0]?.kind === "number" ? a[0].value : 0))));
    m.set("trunc", NATIVE("trunc", (a) => NUM(Math.trunc(a[0]?.kind === "number" ? a[0].value : 0))));
    m.set("clamp", NATIVE("clamp", (a) => {
      const [v, lo, hi] = a.map(x => x?.kind === "number" ? x.value : 0);
      return NUM(Math.min(Math.max(v, lo), hi));
    }));
    m.set("lerp", NATIVE("lerp", (a) => {
      const [x, y, t] = a.map(x => x?.kind === "number" ? x.value : 0);
      return NUM(x + (y - x) * t);
    }));
    m.set("random", NATIVE("random", () => NUM(this.ctx.random())));
    m.set("randInt", NATIVE("randInt", (a) => {
      const lo = a[0]?.kind === "number" ? a[0].value : 0;
      const hi = a[1]?.kind === "number" ? a[1].value : 1;
      return NUM(Math.floor(this.ctx.random() * (hi - lo + 1)) + lo);
    }));
    env.define("math", mathObj);

    // Timer
    const timerObj = OBJ();
    const tm = timerObj.props;
    tm.set("now", NATIVE("now", () => NUM(this.ctx.getTime())));
    tm.set("date", NATIVE("date", () => {
      const d = new Date();
      const o = OBJ();
      o.props.set("hours", NUM(d.getHours()));
      o.props.set("minutes", NUM(d.getMinutes()));
      o.props.set("seconds", NUM(d.getSeconds()));
      o.props.set("ms", NUM(d.getMilliseconds()));
      o.props.set("day", NUM(d.getDate()));
      o.props.set("month", NUM(d.getMonth() + 1));
      o.props.set("year", NUM(d.getFullYear()));
      o.props.set("weekday", NUM(d.getDay()));
      return o;
    }));
    tm.set("loop", NATIVE("loop", (args) => {
      const fn = args[0];
      this.loopCallbacks.push(() => this.callValue(fn, [], undefined));
      if (this.loopCallbacks.length === 1) this.startLoop();
      return NULL;
    }));
    env.define("timer", timerObj);

    // Canvas
    const canvasObj = OBJ();
    const cv = canvasObj.props;
    const draw = (cmd: string, ...args: (string | number | boolean)[]) => this.ctx.draw({ cmd, args });

    cv.set("setSize", NATIVE("setSize", (args) => {
      const w = args[0]?.kind === "number" ? args[0].value : 400;
      const h = args[1]?.kind === "number" ? args[1].value : 400;
      this.canvasSize = { w, h };
      draw("setSize", w, h);
      return NULL;
    }));
    cv.set("clear", NATIVE("clear", (args) => {
      const color = args[0]?.kind === "string" ? args[0].value : "#000000";
      draw("clear", color);
      return NULL;
    }));
    cv.set("rect", NATIVE("rect", (args) => {
      const [x, y, w, h] = args.slice(0, 4).map(a => a?.kind === "number" ? a.value : 0);
      const color = args[4]?.kind === "string" ? args[4].value : "#ffffff";
      draw("rect", x, y, w, h, color);
      return NULL;
    }));
    cv.set("roundRect", NATIVE("roundRect", (args) => {
      const [x, y, w, h, r] = args.slice(0, 5).map(a => a?.kind === "number" ? a.value : 0);
      const color = args[5]?.kind === "string" ? args[5].value : "#ffffff";
      draw("roundRect", x, y, w, h, r, color);
      return NULL;
    }));
    cv.set("circle", NATIVE("circle", (args) => {
      const [x, y, r] = args.slice(0, 3).map(a => a?.kind === "number" ? a.value : 0);
      const color = args[3]?.kind === "string" ? args[3].value : "#ffffff";
      draw("circle", x, y, r, color);
      return NULL;
    }));
    cv.set("ellipse", NATIVE("ellipse", (args) => {
      const [x, y, rx, ry] = args.slice(0, 4).map(a => a?.kind === "number" ? a.value : 0);
      const color = args[4]?.kind === "string" ? args[4].value : "#ffffff";
      draw("ellipse", x, y, rx, ry, color);
      return NULL;
    }));
    cv.set("line", NATIVE("line", (args) => {
      const [x1, y1, x2, y2, lw] = args.slice(0, 5).map(a => a?.kind === "number" ? a.value : 0);
      const color = args[5]?.kind === "string" ? args[5].value : "#ffffff";
      draw("line", x1, y1, x2, y2, lw, color);
      return NULL;
    }));
    cv.set("text", NATIVE("text", (args) => {
      const x = args[0]?.kind === "number" ? args[0].value : 0;
      const y = args[1]?.kind === "number" ? args[1].value : 0;
      const txt = args[2] ? viperToString(args[2]) : "";
      const size = args[3]?.kind === "number" ? args[3].value : 16;
      const color = args[4]?.kind === "string" ? args[4].value : "#ffffff";
      const align = args[5]?.kind === "string" ? args[5].value : "left";
      draw("text", x, y, txt, size, color, align);
      return NULL;
    }));
    cv.set("arc", NATIVE("arc", (args) => {
      const [x, y, r, start, end] = args.slice(0, 5).map(a => a?.kind === "number" ? a.value : 0);
      const color = args[5]?.kind === "string" ? args[5].value : "#ffffff";
      draw("arc", x, y, r, start, end, color);
      return NULL;
    }));
    cv.set("ringArc", NATIVE("ringArc", (args) => {
      const [x, y, inner, outer, start, end] = args.slice(0, 6).map(a => a?.kind === "number" ? a.value : 0);
      const color = args[6]?.kind === "string" ? args[6].value : "#ffffff";
      draw("ringArc", x, y, inner, outer, start, end, color);
      return NULL;
    }));
    cv.set("polygon", NATIVE("polygon", (args) => {
      const pts = args[0]?.kind === "array" ? args[0].items.map(p => {
        if (p.kind === "object") {
          const px = p.props.get("x"); const py = p.props.get("y");
          return `${px?.kind === "number" ? px.value : 0},${py?.kind === "number" ? py.value : 0}`;
        }
        return "0,0";
      }).join("|") : "";
      const color = args[1]?.kind === "string" ? args[1].value : "#ffffff";
      draw("polygon", pts, color);
      return NULL;
    }));
    cv.set("image", NATIVE("image", (args) => {
      const src = args[0]?.kind === "string" ? args[0].value : "";
      const [x, y, w, h] = args.slice(1, 5).map(a => a?.kind === "number" ? a.value : 0);
      draw("image", src, x, y, w, h);
      return NULL;
    }));
    cv.set("save", NATIVE("save", () => { draw("save"); return NULL; }));
    cv.set("restore", NATIVE("restore", () => { draw("restore"); return NULL; }));
    cv.set("translate", NATIVE("translate", (args) => {
      const [x, y] = args.map(a => a?.kind === "number" ? a.value : 0);
      draw("translate", x, y); return NULL;
    }));
    cv.set("rotate", NATIVE("rotate", (args) => {
      draw("rotate", args[0]?.kind === "number" ? args[0].value : 0); return NULL;
    }));
    cv.set("scale", NATIVE("scale", (args) => {
      const [x, y] = args.map(a => a?.kind === "number" ? a.value : 1);
      draw("scale", x, y); return NULL;
    }));
    cv.set("alpha", NATIVE("alpha", (args) => {
      draw("alpha", args[0]?.kind === "number" ? args[0].value : 1); return NULL;
    }));
    cv.set("onKey", NATIVE("onKey", (args) => {
      const fn = args[0];
      this.keyHandlers.push((key: string) => {
        this.frameCount = 0;
        return this.callValue(fn, [STR(key)], undefined);
      });
      return NULL;
    }));
    cv.set("onClick", NATIVE("onClick", (args) => {
      const fn = args[0];
      this.clickHandlers.push((x: number, y: number) => {
        this.frameCount = 0;
        return this.callValue(fn, [NUM(x), NUM(y)], undefined);
      });
      return NULL;
    }));
    cv.set("getWidth", NATIVE("getWidth", () => NUM(this.canvasSize.w)));
    cv.set("getHeight", NATIVE("getHeight", () => NUM(this.canvasSize.h)));
    env.define("canvas", canvasObj);

    // Also expose math.PI directly for template use
    env.define("PI", NUM(Math.PI));
  }

  private startLoop() {
    const run = () => {
      if (this.stopped || this.loopCallbacks.length === 0) return;
      this.frameCount = 0; // reset per frame so animations don't accumulate
      try {
        for (const cb of this.loopCallbacks) cb();
      } catch (e) {
        if (!(e instanceof BreakSignal) && !(e instanceof ContinueSignal)) {
          const msg = e instanceof ViperError ? e.message : String(e);
          this.ctx.output(`Runtime error: ${msg}`, "error");
          this.stopped = true;
          return;
        }
      }
      this.ctx.scheduleFrame(run);
    };
    this.ctx.scheduleFrame(run);
  }

  execute(code: string): ExecutionResult {
    this.stopped = false;
    this.loopCallbacks = [];
    this.keyHandlers = [];
    this.clickHandlers = [];
    this.frameCount = 0;
    try {
      // Check compile cache first
      const cached = this.compileCache.get(code);
      if (cached) {
        if (cached.error) {
          // Previous compilation failed, skip to interpreter
        } else {
          try {
            this.runCompiled(cached.js);
            return { success: true };
          } catch (e) {
            // Cached compiled code failed at runtime
          }
        }
      }

      const lexResult = lex(code);
      const parseResult = parse(lexResult.tokens);

      // Collect lexer + parser errors
      const allErrors = [
        ...lexResult.errors.map(e => ({ message: e.message, line: e.line })),
        ...parseResult.errors.map(e => ({ message: e.message, line: e.line })),
      ];

      if (allErrors.length > 0) {
        return { success: false, errors: allErrors };
      }

      // Try compiler path for native speed
      const compiledJS = compileToJS(parseResult.ast);
      if (compiledJS.success && compiledJS.js) {
        try {
          this.compileCache.set(code, { js: compiledJS.js });
          this.runCompiled(compiledJS.js);
          return { success: true };
        } catch (e) {
          // Compilation succeeded but execution failed - fall back to interpreter
          this.compileCache.set(code, { js: compiledJS.js, error: String(e) });
        }
      }

      // Try VM bytecode path
      try {
        const compiler = new Compiler();
        const program = compiler.compile(parseResult.ast);
        const vm = new VM(program, this.isTrusted);
        // Copy globals into VM
        this.copyGlobalsToVM(vm);
        const vmResult = vm.run();
        if (vmResult.success) {
          return { success: true };
        }
        // VM failed - fall through to tree-walker
      } catch (e) {
        // VM compilation/execution failed - fall through to tree-walker
      }

      // Fallback to tree-walker interpreter
      this.execNode(parseResult.ast, this.globalEnv.child());
      return { success: true };
    } catch (e) {
      if (e instanceof ViperError) {
        return { success: false, error: e.message, errorLine: e.line };
      }
      if (e instanceof ReturnSignal) return { success: true };
      return { success: false, error: String(e) };
    }
  }

  private execNode(node: AstNode, env: Environment): ViperValue {
    this.frameCount++;
    if (!this.isTrusted && (this.frameCount & 511) === 0 && this.frameCount > this.frameLimit) {
      throw new ViperError("Maximum execution depth exceeded (infinite loop?)");
    }

    switch (node.type) {
      case "Program":
      case "Block": {
        const stmts = node.body as AstNode[];
        let last: ViperValue = NULL;
        for (const s of stmts) last = this.execNode(s, env);
        return last;
      }
      case "LetDecl":
      case "VarDecl":
      case "ConstDecl": {
        const val = node.init ? this.execNode(node.init as AstNode, env) : NULL;
        env.define(node.name as string, val, node.type === "ConstDecl");
        return val;
      }
      case "FnDecl": {
        const fn: ViperFunction = {
          kind: "function", name: node.name as string,
          params: node.params as string[], body: node.body as AstNode,
          closure: env,
        };
        env.define(node.name as string, fn);
        return fn;
      }
      case "ClassDecl": {
        const methods = new Map<string, ViperFunction>();
        for (const m of (node.methods as AstNode[])) {
          methods.set(m.name as string, {
            kind: "function", name: m.name as string,
            params: m.params as string[], body: m.body as AstNode,
            closure: env,
          });
        }
        let superClass: ViperClass | undefined;
        if (node.superName) {
          const sv = env.get(node.superName as string, node.line as number);
          if (sv.kind !== "class") throw new ViperError(`'${node.superName}' is not a class`, node.line as number);
          superClass = sv;
        }
        const cls: ViperClass = { kind: "class", name: node.name as string, methods, superClass };
        env.define(node.name as string, cls);
        return cls;
      }
      case "If": {
        const cond = this.execNode(node.cond as AstNode, env);
        if (isTruthy(cond)) {
          return this.execNode(node.then as AstNode, env.child());
        } else if (node.els) {
          return this.execNode(node.els as AstNode, env.child());
        }
        return NULL;
      }
      case "While": {
        let result: ViperValue = NULL;
        while (isTruthy(this.execNode(node.cond as AstNode, env))) {
          try {
            result = this.execNode(node.body as AstNode, env.child());
          } catch (e) {
            if (e instanceof BreakSignal) break;
            if (e instanceof ContinueSignal) continue;
            throw e;
          }
        }
        return result;
      }
      case "For": {
        const forEnv = env.child();
        if (node.init) this.execNode(node.init as AstNode, forEnv);
        let result: ViperValue = NULL;
        while (!node.cond || isTruthy(this.execNode(node.cond as AstNode, forEnv))) {
          try {
            result = this.execNode(node.body as AstNode, forEnv.child());
          } catch (e) {
            if (e instanceof BreakSignal) break;
            if (e instanceof ContinueSignal) { if (node.update) this.execNode(node.update as AstNode, forEnv); continue; }
            throw e;
          }
          if (node.update) this.execNode(node.update as AstNode, forEnv);
        }
        return result;
      }
      case "ForOf": {
        const iter = this.execNode(node.iter as AstNode, env);
        const items = iter.kind === "array" ? iter.items : iter.kind === "string" ? iter.value.split("").map(STR) : [];
        let result: ViperValue = NULL;
        for (const item of items) {
          const loopEnv = env.child();
          loopEnv.define(node.varName as string, item);
          try { result = this.execNode(node.body as AstNode, loopEnv); }
          catch (e) { if (e instanceof BreakSignal) break; if (e instanceof ContinueSignal) continue; throw e; }
        }
        return result;
      }
      case "ForIn": {
        const iter = this.execNode(node.iter as AstNode, env);
        const keys = iter.kind === "object" ? Array.from(iter.props.keys()) :
          iter.kind === "array" ? iter.items.map((_, i) => String(i)) : [];
        let result: ViperValue = NULL;
        for (const key of keys) {
          const loopEnv = env.child();
          loopEnv.define(node.varName as string, STR(key));
          try { result = this.execNode(node.body as AstNode, loopEnv); }
          catch (e) { if (e instanceof BreakSignal) break; if (e instanceof ContinueSignal) continue; throw e; }
        }
        return result;
      }
      case "DoWhile": {
        let result: ViperValue = NULL;
        do {
          try {
            result = this.execNode(node.body as AstNode, env.child());
          } catch (e) {
            if (e instanceof BreakSignal) break;
            if (e instanceof ContinueSignal) continue;
            throw e;
          }
        } while (isTruthy(this.execNode(node.cond as AstNode, env)));
        return result;
      }
      case "Try": {
        try {
          return this.execNode(node.body as AstNode, env.child());
        } catch (e) {
          const catchEnv = env.child();
          let errVal: ViperValue;
          if (e instanceof ViperError) {
            errVal = STR(e.message);
          } else if (e instanceof ReturnSignal || e instanceof BreakSignal || e instanceof ContinueSignal) {
            throw e;
          } else {
            errVal = STR(String(e));
          }
          catchEnv.define(node.errName as string, errVal);
          return this.execNode(node.catchBody as AstNode, catchEnv);
        }
      }
      case "Throw": {
        const val = this.execNode(node.value as AstNode, env);
        throw new ViperError(viperToString(val), node.line);
      }
      case "Switch": {
        const condVal = this.execNode(node.cond as AstNode, env);
        const cases = node.cases as { cond: AstNode | null; body: AstNode[] }[];
        let matched = false;
        let result: ViperValue = NULL;
        for (const c of cases) {
          if (!matched) {
            if (c.cond === null) {
              matched = true;
            } else {
              const caseVal = this.execNode(c.cond, env);
              if (viperToString(caseVal) === viperToString(condVal)) {
                matched = true;
              }
            }
          }
          if (matched) {
            for (const stmt of c.body) {
              result = this.execNode(stmt, env.child());
            }
          }
        }
        return result;
      }
      case "Return": throw new ReturnSignal(node.value ? this.execNode(node.value as AstNode, env) : NULL);
      case "Break": throw new BreakSignal();
      case "Continue": throw new ContinueSignal();
      case "ExprStmt": return this.execNode(node.expr as AstNode, env);

      case "Assign": {
        const val = this.computeAssign(node.op as string, node.left as AstNode, node.right as AstNode, env);
        return val;
      }

      case "Binary": {
        const op = node.op as string;
        if (op === "&&" || op === "and") { const l = this.execNode(node.left as AstNode, env); return isTruthy(l) ? this.execNode(node.right as AstNode, env) : l; }
        if (op === "||" || op === "or") { const l = this.execNode(node.left as AstNode, env); return isTruthy(l) ? l : this.execNode(node.right as AstNode, env); }
        const left = this.execNode(node.left as AstNode, env);
        const right = this.execNode(node.right as AstNode, env);
        return this.applyBinary(op, left, right, node.line as number);
      }

      case "Unary": {
        if (node.op === "++" || node.op === "--") {
          const delta = node.op === "++" ? 1 : -1;
          const cur = this.execNode(node.expr as AstNode, env);
          const newVal = NUM((cur.kind === "number" ? cur.value : 0) + delta);
          this.assignTo(node.expr as AstNode, newVal, env);
          return node.prefix ? newVal : cur;
        }
        const val = this.execNode(node.expr as AstNode, env);
        if (node.op === "!" || node.op === "not") return BOOL(!isTruthy(val));
        if (node.op === "-") return NUM(-(val.kind === "number" ? val.value : 0));
        if (node.op === "+") return NUM(+(val.kind === "number" ? val.value : parseFloat(viperToString(val)) || 0));
        return val;
      }

      case "Postfix": {
        const cur = this.execNode(node.expr as AstNode, env);
        const delta = node.op === "++" ? 1 : -1;
        const newVal = NUM((cur.kind === "number" ? cur.value : 0) + delta);
        this.assignTo(node.expr as AstNode, newVal, env);
        return cur;
      }

      case "Call": {
        const callee = node.callee as AstNode;
        let selfVal: ViperValue | undefined;
        let fnVal: ViperValue;

        if (callee.type === "Member") {
          selfVal = this.execNode(callee.obj as AstNode, env);
          const prop = callee.prop as string;
          fnVal = this.getMember(selfVal, prop);
        } else if (callee.type === "Index") {
          selfVal = this.execNode(callee.obj as AstNode, env);
          const idx = this.execNode(callee.idx as AstNode, env);
          fnVal = this.getIndex(selfVal, idx);
        } else {
          fnVal = this.execNode(callee, env);
        }

        const args: ViperValue[] = [];
        for (const a of (node.args as AstNode[])) {
          if (a.type === "Spread") {
            const sv = this.execNode(a.expr as AstNode, env);
            if (sv.kind === "array") args.push(...sv.items);
          } else {
            args.push(this.execNode(a, env));
          }
        }
        return this.callValue(fnVal, args, selfVal, node.line as number);
      }

      case "Member": {
        if ((node.optional as boolean) && this.execNode(node.obj as AstNode, env).kind === "null") return NULL;
        const obj = this.execNode(node.obj as AstNode, env);
        return this.getMember(obj, node.prop as string);
      }

      case "Index": {
        const obj = this.execNode(node.obj as AstNode, env);
        const idx = this.execNode(node.idx as AstNode, env);
        return this.getIndex(obj, idx);
      }

      case "New": {
        const cls = env.get(node.cls as string, node.line as number);
        if (cls.kind !== "class") throw new ViperError(`'${node.cls}' is not a class`, node.line as number);
        const instance: ViperInstance = { kind: "instance", cls, fields: new Map() };
        const args: ViperValue[] = (node.args as AstNode[]).map(a => this.execNode(a, env));
        const initFn = this.lookupMethod(cls, "init");
        if (initFn && initFn.kind === "function") this.callMethod(initFn, args, instance);
        if (initFn && initFn.kind === "native") initFn.call(args, instance);
        return instance;
      }

      case "Ternary": {
        const c = this.execNode(node.cond as AstNode, env);
        return isTruthy(c) ? this.execNode(node.then as AstNode, env) : this.execNode(node.els as AstNode, env);
      }

      case "Template": {
        const parts = (node.parts as AstNode[]).map(p => viperToString(this.execNode(p, env)));
        return STR(parts.join(""));
      }

      case "Array": {
        const items: ViperValue[] = [];
        for (const it of (node.items as AstNode[])) {
          if (it.type === "Spread") {
            const sv = this.execNode(it.expr as AstNode, env);
            if (sv.kind === "array") items.push(...sv.items);
          } else {
            items.push(this.execNode(it, env));
          }
        }
        return ARR(items);
      }

      case "Object": {
        const props = new Map<string, ViperValue>();
        for (const p of (node.props as { key: string; value: AstNode }[])) {
          props.set(p.key, this.execNode(p.value, env));
        }
        return OBJ(props);
      }

      case "FnExpr": {
        return {
          kind: "function", name: "anonymous",
          params: node.params as string[], body: node.body as AstNode,
          closure: env,
        };
      }

      case "Ident": return env.get(node.name as string, node.line as number);
      case "Num": return NUM(node.value as number);
      case "Str": return STR(node.value as string);
      case "Bool": return BOOL(node.value as boolean);
      case "Null": return NULL;
      case "Self": {
        try {
          return env.get("self", node.line as number);
        } catch {
          return NULL;
        }
      }

      default: throw new ViperError(`Unknown node type: ${node.type}`, node.line as number);
    }
  }

  private applyBinary(op: string, left: ViperValue, right: ViperValue, line: number): ViperValue {
    if (op === "+") {
      if (left.kind === "string" || right.kind === "string") return STR(viperToString(left) + viperToString(right));
      if (left.kind === "number" && right.kind === "number") return NUM(left.value + right.value);
      if (left.kind === "array" && right.kind === "array") return ARR([...left.items, ...right.items]);
      return STR(viperToString(left) + viperToString(right));
    }
    if (left.kind === "number" && right.kind === "number") {
      switch (op) {
        case "-": return NUM(left.value - right.value);
        case "*": return NUM(left.value * right.value);
        case "/": return right.value === 0 ? NUM(Infinity) : NUM(left.value / right.value);
        case "%": return NUM(left.value % right.value);
        case "**": return NUM(Math.pow(left.value, right.value));
        case "<": return BOOL(left.value < right.value);
        case ">": return BOOL(left.value > right.value);
        case "<=": return BOOL(left.value <= right.value);
        case ">=": return BOOL(left.value >= right.value);
        case "==": return BOOL(left.value === right.value);
        case "!=": return BOOL(left.value !== right.value);
        case "===": return BOOL(left.value === right.value);
        case "!==": return BOOL(left.value !== right.value);
        case "is": return BOOL(left.value === right.value);
      }
    }
    // Fast comparison for booleans and null
    if (op === "==" || op === "===" || op === "is") {
      if (left.kind === "null" && right.kind === "null") return BOOL(true);
      if (left.kind === "bool" && right.kind === "bool") return BOOL(left.value === right.value);
    }
    if (op === "!=" || op === "!==") {
      if (left.kind === "null" && right.kind === "null") return BOOL(false);
      if (left.kind === "bool" && right.kind === "bool") return BOOL(left.value !== right.value);
    }
    switch (op) {
      case "==": return BOOL(viperToString(left) === viperToString(right));
      case "!=": return BOOL(viperToString(left) !== viperToString(right));
      case "===": return BOOL(left.kind === right.kind && viperToString(left) === viperToString(right));
      case "!==": return BOOL(left.kind !== right.kind || viperToString(left) !== viperToString(right));
      case "<": return BOOL(viperToString(left) < viperToString(right));
      case ">": return BOOL(viperToString(left) > viperToString(right));
      case "<=": return BOOL(viperToString(left) <= viperToString(right));
      case ">=": return BOOL(viperToString(left) >= viperToString(right));
      case "in": {
        if (right.kind === "array") return BOOL(right.items.some(x => viperToString(x) === viperToString(left)));
        if (right.kind === "string") return BOOL(right.value.includes(viperToString(left)));
        if (right.kind === "object") return BOOL(right.props.has(viperToString(left)));
        return BOOL(false);
      }
      case "is": {
        return BOOL(left.kind === right.kind && viperToString(left) === viperToString(right));
      }
    }
    throw new ViperError(`Cannot apply '${op}' to ${left.kind} and ${right.kind}`, line);
  }

  private getMember(obj: ViperValue, prop: string): ViperValue {
    if (obj.kind === "array") return arrayMethods(obj, prop, this);
    if (obj.kind === "string") return stringMethods(obj, prop);
    if (obj.kind === "object") return obj.props.get(prop) ?? NULL;
    if (obj.kind === "instance") {
      if (obj.fields.has(prop)) return obj.fields.get(prop)!;
      const method = this.lookupMethod(obj.cls, prop);
      if (method) {
        const self = obj;
        if (method.kind === "native") return NATIVE(method.name, (args) => (method as ViperNative).call(args, self));
        return NATIVE(prop, (args) => this.callMethod(method as ViperFunction, args, self));
      }
      return NULL;
    }
    if (obj.kind === "class") {
      const m = obj.methods.get(prop);
      if (m) return m;
    }
    return NULL;
  }

  private getIndex(obj: ViperValue, idx: ViperValue): ViperValue {
    if (obj.kind === "array") {
      if (idx.kind !== "number") return NULL;
      const i = idx.value < 0 ? obj.items.length + idx.value : idx.value;
      return obj.items[i] ?? NULL;
    }
    if (obj.kind === "object") return obj.props.get(viperToString(idx)) ?? NULL;
    if (obj.kind === "string") {
      if (idx.kind !== "number") return NULL;
      const i = idx.value < 0 ? obj.value.length + idx.value : idx.value;
      return obj.value[i] ? STR(obj.value[i]) : NULL;
    }
    return NULL;
  }

  private assignTo(target: AstNode, value: ViperValue, env: Environment) {
    if (target.type === "Ident") {
      env.set(target.name as string, value, target.line as number);
    } else if (target.type === "Member") {
      const obj = this.execNode(target.obj as AstNode, env);
      const prop = target.prop as string;
      if (obj.kind === "object") obj.props.set(prop, value);
      else if (obj.kind === "instance") obj.fields.set(prop, value);
      else if (obj.kind === "array" && prop === "length") {
        if (value.kind === "number") obj.items.length = value.value;
      } else throw new ViperError(`Cannot set property '${prop}' on ${obj.kind}`);
    } else if (target.type === "Index") {
      const obj = this.execNode(target.obj as AstNode, env);
      const idx = this.execNode(target.idx as AstNode, env);
      if (obj.kind === "array" && idx.kind === "number") {
        obj.items[idx.value] = value;
      } else if (obj.kind === "object") {
        obj.props.set(viperToString(idx), value);
      }
    }
  }

  private computeAssign(op: string, left: AstNode, right: AstNode, env: Environment): ViperValue {
    const rhs = this.execNode(right, env);
    if (op === "=") { this.assignTo(left, rhs, env); return rhs; }
    const lhs = this.execNode(left, env);
    let result: ViperValue;
    switch (op) {
      // += only concatenates if lhs is already a string or rhs is a string and lhs is number-ish
      case "+=": result = (lhs.kind === "string" || rhs.kind === "string") ? STR(viperToString(lhs) + viperToString(rhs)) : NUM((lhs.kind === "number" ? lhs.value : 0) + (rhs.kind === "number" ? rhs.value : 0)); break;
      case "-=": result = NUM((lhs.kind === "number" ? lhs.value : 0) - (rhs.kind === "number" ? rhs.value : 0)); break;
      case "*=": result = NUM((lhs.kind === "number" ? lhs.value : 0) * (rhs.kind === "number" ? rhs.value : 0)); break;
      case "/=": result = NUM((lhs.kind === "number" ? lhs.value : 0) / (rhs.kind === "number" ? rhs.value : 1)); break;
      case "%=": result = NUM((lhs.kind === "number" ? lhs.value : 0) % (rhs.kind === "number" ? rhs.value : 1)); break;
      default: result = rhs;
    }
    this.assignTo(left, result, env);
    return result;
  }

  callValue(fn: ViperValue, args: ViperValue[], self: ViperValue | undefined, line?: number): ViperValue {
    if (fn.kind === "native") return fn.call(args, self);
    if (fn.kind === "function") {
      const fnEnv = fn.closure.child();
      for (let i = 0; i < fn.params.length; i++) fnEnv.define(fn.params[i], args[i] ?? NULL);
      if (self !== undefined) fnEnv.define("self", self);
      try {
        this.execNode(fn.body, fnEnv);
        return NULL;
      } catch (e) {
        if (e instanceof ReturnSignal) return e.value;
        throw e;
      }
    }
    throw new ViperError(`'${viperToString(fn)}' is not callable`, line);
  }

  private callMethod(fn: ViperFunction, args: ViperValue[], instance: ViperInstance): ViperValue {
    const fnEnv = fn.closure.child();
    for (let i = 0; i < fn.params.length; i++) fnEnv.define(fn.params[i], args[i] ?? NULL);
    fnEnv.define("self", instance);
    try {
      this.execNode(fn.body, fnEnv);
      return NULL;
    } catch (e) {
      if (e instanceof ReturnSignal) return e.value;
      throw e;
    }
  }

  private lookupMethod(cls: ViperClass, name: string): ViperFunction | ViperNative | undefined {
    let c: ViperClass | undefined = cls;
    while (c) {
      if (c.methods.has(name)) return c.methods.get(name);
      c = c.superClass;
    }
    return undefined;
  }

  private runCompiled(js: string) {
    const self = this;
    const ctx = this.ctx;
    const size = this.canvasSize;
    const setSize = (w: number, h: number) => { this.canvasSize = { w, h }; };
    const ext = this.compiledContext;

    const runtime = `
      const __print = (...args) => { ctx.output(args.join(" "), "log"); };
      const __warn  = (...args) => { ctx.output(args.join(" "), "warn"); };
      const __error = (...args) => { ctx.output(args.join(" "), "error"); };
      const __clear = () => { ctx.clearConsole(); };
      const __num = (v) => {
        if (typeof v === "number") return v;
        if (typeof v === "string") return parseFloat(v) || 0;
        if (typeof v === "boolean") return v ? 1 : 0;
        return 0;
      };
      const __type = (v) => {
        if (v === null || v === undefined) return "null";
        if (Array.isArray(v)) return "array";
        return typeof v;
      };
      const __len = (v) => {
        if (Array.isArray(v)) return v.length;
        if (typeof v === "string") return v.length;
        if (v && typeof v === "object") return Object.keys(v).length;
        return 0;
      };
      const __keys = (v) => {
        if (v && typeof v === "object" && !Array.isArray(v)) return Object.keys(v);
        if (Array.isArray(v)) return v.map((_, i) => i);
        return [];
      };
      const __values = (v) => {
        if (Array.isArray(v)) return [...v];
        if (v && typeof v === "object") return Object.values(v);
        return [];
      };
      const __range = (a, b, step) => {
        const st = b !== undefined ? a : 0;
        const en = b !== undefined ? b : a;
        const s  = step || 1;
        const r  = [];
        for (let i = st; i < en; i += s) r.push(i);
        return r;
      };
      const __math = {
        PI: Math.PI, E: Math.E, TAU: Math.PI * 2,
        sqrt: Math.sqrt, abs: Math.abs, floor: Math.floor, ceil: Math.ceil, round: Math.round,
        sin: Math.sin, cos: Math.cos, tan: Math.tan, asin: Math.asin, acos: Math.acos,
        atan: Math.atan, atan2: Math.atan2, pow: Math.pow,
        log: Math.log, log2: Math.log2, log10: Math.log10,
        max: Math.max, min: Math.min, hypot: Math.hypot,
        sign: Math.sign, trunc: Math.trunc, exp: Math.exp, cbrt: Math.cbrt,
        clamp: (v, lo, hi) => Math.min(Math.max(v, lo), hi),
        lerp: (x, y, t) => x + (y - x) * t,
        random: () => Math.random(),
        randInt: (lo, hi) => Math.floor(Math.random() * (hi - lo + 1)) + lo,
      };
      const __timerDefault = {
        now:   () => performance.now(),
        date:  () => new Date().toISOString(),
        sleep: (ms) => { const t0 = Date.now(); while (Date.now() - t0 < ms) {} },
        loop:  (fn) => { __loop(fn); },
      };
      const __canvas = {
        setSize:   (w, h)               => { setSize(w, h); ctx.draw({ cmd: "setSize",   args: [w, h] }); },
        clear:     (color)              => ctx.draw({ cmd: "clear",     args: [color] }),
        rect:      (x, y, w, h, color) => ctx.draw({ cmd: "rect",      args: [x, y, w, h, color] }),
        roundRect: (x, y, w, h, r, c)  => ctx.draw({ cmd: "roundRect", args: [x, y, w, h, r, c] }),
        circle:    (x, y, r, color)    => ctx.draw({ cmd: "circle",    args: [x, y, r, color] }),
        ellipse:   (x, y, rx, ry, c)   => ctx.draw({ cmd: "ellipse",   args: [x, y, rx, ry, c] }),
        line:      (x1,y1,x2,y2,lw,c)  => ctx.draw({ cmd: "line",      args: [x1, y1, x2, y2, lw, c] }),
        text:      (x, y, t, s, c, a)  => ctx.draw({ cmd: "text",      args: [x, y, String(t), s||16, c||"#fff", a||"left"] }),
        arc:       (x,y,r,s,e,c)       => ctx.draw({ cmd: "arc",       args: [x, y, r, s, e, c] }),
        ringArc:   (x,y,i,o,s,e,c)     => ctx.draw({ cmd: "ringArc",   args: [x, y, i, o, s, e, c] }),
        polygon:   (pts, c)            => ctx.draw({ cmd: "polygon",   args: [pts, c] }),
        image:     (src,x,y,w,h)       => ctx.draw({ cmd: "image",     args: [src, x, y, w, h] }),
        save:      ()                  => ctx.draw({ cmd: "save",      args: [] }),
        restore:   ()                  => ctx.draw({ cmd: "restore",   args: [] }),
        translate: (x, y)              => ctx.draw({ cmd: "translate", args: [x, y] }),
        rotate:    (a)                 => ctx.draw({ cmd: "rotate",    args: [a] }),
        scale:     (x, y)              => ctx.draw({ cmd: "scale",     args: [x, y] }),
        alpha:     (a)                 => ctx.draw({ cmd: "alpha",     args: [a] }),
        getWidth:  ()                  => size.w,
        getHeight: ()                  => size.h,
        onKey:     (fn)                => { __onKey(fn); },
        onClick:   (fn)                => { __onClick(fn); },
      };
      function __viper_in(left, right) {
        if (Array.isArray(right)) return right.includes(left);
        if (typeof right === "string") return right.includes(String(left));
        if (right && typeof right === "object") return left in right;
        return false;
      }

      /* ── Viper built-in aliases (Viper code uses these names) ── */
      const print   = __print;
      const log     = __print;
      const warn    = __warn;
      const error   = __error;
      const clear   = __clear;
      const str     = (v) => String(v);
      const num     = __num;
      const bool    = (v) => !!v;
      const type    = __type;
      const len     = __len;
      const keys    = __keys;
      const values  = __values;
      const range   = __range;
      const math    = __ext.math    || __math;
      const timer   = __ext.timer   || __timerDefault;
      const canvas  = __canvas;
      const os      = __ext.os      || null;
      const env     = __ext.env     || null;
      const storage = __ext.storage || null;
      const fetch   = __ext.fetch   || (typeof globalThis !== "undefined" && globalThis.fetch) || null;
      const fetchPost = __ext.fetchPost || null;
      const http    = __ext.http    || null;
      const thread  = __ext.thread  || null;
    `;

    const fn = new Function("ctx", "setSize", "size", "__loop", "__onKey", "__onClick", "__ext", runtime + " " + js);
    fn(
      ctx,
      setSize,
      size,
      (cb: () => void) => {
        self.loopCallbacks.push(cb);
        if (self.loopCallbacks.length === 1) self.startLoop();
      },
      (cb: (key: string) => void) => self.keyHandlers.push(cb),
      (cb: (x: number, y: number) => void) => self.clickHandlers.push(cb),
      ext
    );
  }

}
