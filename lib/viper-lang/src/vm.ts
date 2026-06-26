// Bytecode VM for Viper Invictus
// Executes compiled bytecode on a stack-based virtual machine

import {
  ViperValue, ViperNumber, ViperString, ViperBool, ViperNull,
  ViperArray, ViperObject, ViperFunction, ViperNative, ViperClass, ViperInstance,
  Environment, ViperError, ReturnSignal, BreakSignal, ContinueSignal,
} from "./types";
import { NUM, STR, BOOL, NULL, ARR, OBJ, NATIVE, viperToString, isTruthy } from "./interpreter";
import { Op, Instruction, CompiledFunction, CompiledClass, BytecodeProgram } from "./compiler";

export class VM {
  private stack: ViperValue[] = [];
  private env: Environment;
  private globals: Environment;
  private program: BytecodeProgram;
  private ip = 0; // instruction pointer
  private frameCount = 0;
  private frameLimit = 50000;
  private isTrusted = false;
  private callStack: { ip: number; env: Environment; bytecode: Instruction[]; locals: Environment[] }[] = [];
  private currentBytecode: Instruction[] = [];
  private loopDepth = 0;
  private breakTargets: number[] = [];
  private continueTargets: number[] = [];
  private errorHandlers: { ip: number; varName: string; env: Environment }[] = [];

  constructor(program: BytecodeProgram, isTrusted = false) {
    this.program = program;
    this.isTrusted = isTrusted;
    this.globals = new Environment();
    this.env = this.globals;
    this.currentBytecode = program.bytecode;
    this.setupGlobals();
  }

  setGlobal(name: string, value: ViperValue) {
    this.globals.define(name, value);
  }

  getGlobals(): Environment {
    return this.globals;
  }

  private push(v: ViperValue) {
    this.stack.push(v);
  }

  private pop(): ViperValue {
    const v = this.stack.pop();
    if (v === undefined) throw new ViperError("Stack underflow");
    return v;
  }

  private peek(): ViperValue {
    return this.stack[this.stack.length - 1];
  }

  private setupGlobals() {
    const env = this.globals;

    // print / log
    env.define("print", NATIVE("print", (args) => {
      console.log(args.map(viperToString).join(" "));
      return NULL;
    }));
    env.define("log", NATIVE("log", (args) => {
      console.log(args.map(viperToString).join(" "));
      return NULL;
    }));
    env.define("warn", NATIVE("warn", (args) => {
      console.warn(args.map(viperToString).join(" "));
      return NULL;
    }));
    env.define("error", NATIVE("error", (args) => {
      console.error(args.map(viperToString).join(" "));
      return NULL;
    }));

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
      const start = args[1] !== undefined ? a : 0;
      const end = args[1] !== undefined ? b : a;
      const result: ViperValue[] = [];
      for (let i = start; i < end; i++) result.push(NUM(i));
      return ARR(result);
    }));

    // JSON
    env.define("JSON", (() => {
      const o = OBJ();
      o.props.set("stringify", NATIVE("stringify", (args) => {
        const val = args[0];
        const replacer = (k: string, v: any) => {
          if (v?.kind === "native") return `<native ${v.name}>`;
          if (v?.kind === "function") return `<fn ${v.name}>`;
          if (v?.kind === "class") return `<class ${v.name}>`;
          if (v?.kind === "instance") return `<instance>`;
          return v;
        };
        return STR(JSON.stringify(viperToJS(val), replacer, args[1]?.kind === "number" ? args[1].value : undefined));
      }));
      o.props.set("parse", NATIVE("parse", (args) => {
        try {
          const s = args[0]?.kind === "string" ? args[0].value : "";
          return jsToViper(JSON.parse(s));
        } catch { return NULL; }
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
    m.set("random", NATIVE("random", () => NUM(Math.random())));
    m.set("randInt", NATIVE("randInt", (a) => {
      const lo = a[0]?.kind === "number" ? a[0].value : 0;
      const hi = a[1]?.kind === "number" ? a[1].value : 1;
      return NUM(Math.floor(Math.random() * (hi - lo + 1)) + lo);
    }));
    env.define("math", mathObj);
  }

  run(): { success: boolean; error?: string; result?: ViperValue } {
    try {
      this.ip = 0;
      this.frameCount = 0;
      while (this.ip < this.currentBytecode.length) {
        this.frameCount++;
        if (!this.isTrusted && (this.frameCount & 511) === 0 && this.frameCount > this.frameLimit) {
          throw new ViperError("Maximum execution depth exceeded (infinite loop?)");
        }
        const instr = this.currentBytecode[this.ip];
        this.executeInstr(instr);
        this.ip++;
      }
      const result = this.stack.length > 0 ? this.stack[this.stack.length - 1] : NULL;
      return { success: true, result };
    } catch (e) {
      if (e instanceof ViperError) {
        return { success: false, error: e.message };
      }
      return { success: false, error: String(e) };
    }
  }

  private executeInstr(instr: Instruction): void {
    const op = instr.op;
    const value = instr.value;
    const line = instr.line;

    switch (op) {
      case Op.PUSH_CONST: {
        this.push(this.program.constants[value as number]);
        break;
      }
      case Op.PUSH_VAR: {
        const name = value as string;
        this.push(this.env.get(name, line));
        break;
      }
      case Op.STORE_VAR: {
        const name = value as string;
        this.env.define(name, this.pop());
        break;
      }
      case Op.STORE_CONST: {
        const name = value as string;
        // Const is already stored, just mark it
        break;
      }
      case Op.POP: {
        this.pop();
        break;
      }
      case Op.DUP: {
        this.push(this.peek());
        break;
      }
      case Op.SWAP: {
        const a = this.pop();
        const b = this.pop();
        this.push(a);
        this.push(b);
        break;
      }

      case Op.ADD: {
        const b = this.pop();
        const a = this.pop();
        if (a.kind === "number" && b.kind === "number") {
          this.push(NUM(a.value + b.value));
        } else {
          this.push(STR(viperToString(a) + viperToString(b)));
        }
        break;
      }
      case Op.SUB: {
        const b = this.pop();
        const a = this.pop();
        this.push(NUM((a.kind === "number" ? a.value : 0) - (b.kind === "number" ? b.value : 0)));
        break;
      }
      case Op.MUL: {
        const b = this.pop();
        const a = this.pop();
        this.push(NUM((a.kind === "number" ? a.value : 0) * (b.kind === "number" ? b.value : 0)));
        break;
      }
      case Op.DIV: {
        const b = this.pop();
        const a = this.pop();
        this.push(NUM((a.kind === "number" ? a.value : 0) / (b.kind === "number" ? b.value : 1)));
        break;
      }
      case Op.MOD: {
        const b = this.pop();
        const a = this.pop();
        this.push(NUM((a.kind === "number" ? a.value : 0) % (b.kind === "number" ? b.value : 1)));
        break;
      }
      case Op.POW: {
        const b = this.pop();
        const a = this.pop();
        this.push(NUM(Math.pow(a.kind === "number" ? a.value : 0, b.kind === "number" ? b.value : 1)));
        break;
      }
      case Op.NEG: {
        const a = this.pop();
        this.push(NUM(-(a.kind === "number" ? a.value : 0)));
        break;
      }
      case Op.INC: {
        const a = this.pop();
        this.push(NUM((a.kind === "number" ? a.value : 0) + 1));
        break;
      }
      case Op.DEC: {
        const a = this.pop();
        this.push(NUM((a.kind === "number" ? a.value : 0) - 1));
        break;
      }

      case Op.EQ: {
        const b = this.pop();
        const a = this.pop();
        // Fast path: compare numbers directly, fallback to string comparison
        if (a.kind === "number" && b.kind === "number") this.push(BOOL(a.value === b.value));
        else if (a.kind === "bool" && b.kind === "bool") this.push(BOOL(a.value === b.value));
        else if (a.kind === "null" && b.kind === "null") this.push(BOOL(true));
        else this.push(BOOL(viperToString(a) === viperToString(b)));
        break;
      }
      case Op.NE: {
        const b = this.pop();
        const a = this.pop();
        if (a.kind === "number" && b.kind === "number") this.push(BOOL(a.value !== b.value));
        else if (a.kind === "bool" && b.kind === "bool") this.push(BOOL(a.value !== b.value));
        else if (a.kind === "null" && b.kind === "null") this.push(BOOL(false));
        else this.push(BOOL(viperToString(a) !== viperToString(b)));
        break;
      }
      case Op.LT: {
        const b = this.pop();
        const a = this.pop();
        if (a.kind === "number" && b.kind === "number") this.push(BOOL(a.value < b.value));
        else this.push(BOOL(viperToString(a) < viperToString(b)));
        break;
      }
      case Op.GT: {
        const b = this.pop();
        const a = this.pop();
        if (a.kind === "number" && b.kind === "number") this.push(BOOL(a.value > b.value));
        else this.push(BOOL(viperToString(a) > viperToString(b)));
        break;
      }
      case Op.LE: {
        const b = this.pop();
        const a = this.pop();
        if (a.kind === "number" && b.kind === "number") this.push(BOOL(a.value <= b.value));
        else this.push(BOOL(viperToString(a) <= viperToString(b)));
        break;
      }
      case Op.GE: {
        const b = this.pop();
        const a = this.pop();
        if (a.kind === "number" && b.kind === "number") this.push(BOOL(a.value >= b.value));
        else this.push(BOOL(viperToString(a) >= viperToString(b)));
        break;
      }

      case Op.AND: {
        const b = this.pop();
        const a = this.pop();
        this.push(BOOL(isTruthy(a) && isTruthy(b)));
        break;
      }
      case Op.OR: {
        const b = this.pop();
        const a = this.pop();
        this.push(BOOL(isTruthy(a) || isTruthy(b)));
        break;
      }
      case Op.NOT: {
        const a = this.pop();
        this.push(BOOL(!isTruthy(a)));
        break;
      }

      case Op.JUMP: {
        this.ip = (value as number) - 1;
        break;
      }
      case Op.JUMP_IF_FALSE: {
        const cond = this.pop();
        if (!isTruthy(cond)) {
          this.ip = (value as number) - 1;
        }
        break;
      }
      case Op.JUMP_IF_TRUE: {
        const cond = this.pop();
        if (isTruthy(cond)) {
          this.ip = (value as number) - 1;
        }
        break;
      }

      case Op.CALL: {
        const argCount = value as number;
        const args: ViperValue[] = [];
        for (let i = 0; i < argCount; i++) args.unshift(this.pop());
        const fn = this.pop();
        if (fn.kind === "native") {
          this.push(fn.call(args, undefined));
        } else if (fn.kind === "function") {
          // Find the compiled bytecode for this function
          const compiled = this.program.functions.get(fn.name);
          if (compiled && compiled.bytecode.length > 0) {
            this.callStack.push({ ip: this.ip, env: this.env, bytecode: this.currentBytecode, locals: [] });
            const fnEnv = fn.closure.child();
            for (let i = 0; i < fn.params.length; i++) fnEnv.define(fn.params[i], args[i] ?? NULL);
            this.env = fnEnv;
            this.currentBytecode = compiled.bytecode;
            this.ip = -1;
          } else {
            // No compiled bytecode - fallback to interpreter
            try {
              const result = this.callValue(fn, args);
              this.push(result);
            } catch (e) {
              if (e instanceof ReturnSignal) this.push(e.value);
              else throw e;
            }
          }
        } else {
          throw new ViperError(`'${viperToString(fn)}' is not callable`, line);
        }
        break;
      }
      case Op.RETURN: {
        const returnVal = this.pop();
        if (this.callStack.length > 0) {
          const frame = this.callStack.pop()!;
          this.ip = frame.ip;
          this.env = frame.env;
          this.currentBytecode = frame.bytecode;
        }
        this.push(returnVal);
        break;
      }

      case Op.MAKE_FN: {
        const name = value as string;
        const compiled = this.program.functions.get(name);
        if (!compiled) throw new ViperError(`Function ${name} not found`, line);
        const fn: ViperFunction = {
          kind: "function", name: compiled.name,
          params: compiled.params, body: { type: "Block", body: [] },
          closure: this.env,
        };
        this.push(fn);
        break;
      }
      case Op.MAKE_CLASS: {
        const name = value as string;
        const compiled = this.program.classes.get(name);
        if (!compiled) throw new ViperError(`Class ${name} not found`, line);
        const methods = new Map<string, ViperFunction | ViperNative>();
        const cls: ViperClass = { kind: "class", name, methods, superClass: undefined };
        this.push(cls);
        break;
      }
      case Op.NEW: {
        const argCount = value as number;
        const args: ViperValue[] = [];
        for (let i = 0; i < argCount; i++) args.unshift(this.pop());
        const cls = this.pop();
        if (cls.kind !== "class") throw new ViperError(`'${viperToString(cls)}' is not a class`, line);
        const instance: ViperInstance = { kind: "instance", cls, fields: new Map() };
        const initFn = this.lookupMethod(cls, "init");
        if (initFn && initFn.kind === "function") {
          const compiled = this.program.functions.get(initFn.name);
          if (compiled && compiled.bytecode.length > 0) {
            this.callStack.push({ ip: this.ip, env: this.env, bytecode: this.currentBytecode, locals: [] });
            const initEnv = initFn.closure.child();
            for (let i = 0; i < initFn.params.length; i++) initEnv.define(initFn.params[i], args[i] ?? NULL);
            initEnv.define("self", instance);
            this.env = initEnv;
            this.currentBytecode = compiled.bytecode;
            this.ip = -1;
          } else {
            const initEnv = initFn.closure.child();
            for (let i = 0; i < initFn.params.length; i++) initEnv.define(initFn.params[i], args[i] ?? NULL);
            initEnv.define("self", instance);
            try { this.callValue(initFn, args); } catch (e) { if (e instanceof ReturnSignal) {/* ignore */} }
          }
        }
        this.push(instance);
        break;
      }

      case Op.GET_MEMBER: {
        const prop = value as string;
        const obj = this.pop();
        this.push(this.getMember(obj, prop));
        break;
      }
      case Op.SET_MEMBER: {
        const prop = value as string;
        const val = this.pop();
        const obj = this.pop();
        if (obj.kind === "object") obj.props.set(prop, val);
        else if (obj.kind === "instance") obj.fields.set(prop, val);
        else throw new ViperError(`Cannot set property '${prop}' on ${obj.kind}`, line);
        this.push(val);
        break;
      }
      case Op.GET_INDEX: {
        const idx = this.pop();
        const obj = this.pop();
        this.push(this.getIndex(obj, idx));
        break;
      }
      case Op.SET_INDEX: {
        const val = this.pop();
        const idx = this.pop();
        const obj = this.pop();
        if (obj.kind === "array" && idx.kind === "number") {
          obj.items[idx.value] = val;
        } else if (obj.kind === "object") {
          obj.props.set(viperToString(idx), val);
        }
        this.push(val);
        break;
      }

      case Op.MAKE_ARRAY: {
        const count = value as number;
        const items: ViperValue[] = [];
        for (let i = 0; i < count; i++) items.unshift(this.pop());
        this.push(ARR(items));
        break;
      }
      case Op.MAKE_OBJECT: {
        const keysStr = value as string;
        const keys = keysStr.split("\x00");
        const props = new Map<string, ViperValue>();
        const vals: ViperValue[] = [];
        for (let i = 0; i < keys.length; i++) vals.unshift(this.pop());
        for (let i = 0; i < keys.length; i++) props.set(keys[i], vals[i]);
        this.push(OBJ(props));
        break;
      }
      case Op.SPREAD: {
        const arr = this.pop();
        if (arr.kind === "array") {
          for (const item of arr.items) this.push(item);
        }
        break;
      }
      case Op.PUSH_SELF: {
        const self = this.env.get("self", line);
        this.push(self);
        break;
      }
      case Op.GET_THIS: {
        const self = this.env.get("self", line);
        this.push(self);
        break;
      }

      case Op.TRY_START: {
        this.errorHandlers.push({ ip: (value as number), varName: value as string, env: this.env });
        break;
      }
      case Op.TRY_END: {
        this.errorHandlers.pop();
        break;
      }
      case Op.CATCH: {
        // Handled by error handler
        break;
      }
      case Op.THROW: {
        const err = this.pop();
        throw new ViperError(viperToString(err), line);
      }

      case Op.LOOP_START: {
        this.loopDepth++;
        break;
      }
      case Op.LOOP_END: {
        this.loopDepth--;
        break;
      }
      case Op.BREAK: {
        if (this.breakTargets.length > 0) {
          this.ip = this.breakTargets[this.breakTargets.length - 1] - 1;
        }
        break;
      }
      case Op.CONTINUE: {
        if (this.continueTargets.length > 0) {
          this.ip = this.continueTargets[this.continueTargets.length - 1] - 1;
        }
        break;
      }

      case Op.END: {
        this.ip = this.currentBytecode.length;
        break;
      }

      default:
        throw new Error(`Unknown opcode: ${op}`);
    }
  }

  private getMember(obj: ViperValue, prop: string): ViperValue {
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

  private lookupMethod(cls: ViperClass, name: string): ViperFunction | ViperNative | undefined {
    let c: ViperClass | undefined = cls;
    while (c) {
      if (c.methods.has(name)) return c.methods.get(name);
      c = c.superClass;
    }
    return undefined;
  }

  private callMethod(fn: ViperFunction, args: ViperValue[], instance: ViperInstance): ViperValue {
    const compiled = this.program.functions.get(fn.name);
    if (compiled && compiled.bytecode.length > 0) {
      // Save current frame
      this.callStack.push({ ip: this.ip, env: this.env, bytecode: this.currentBytecode, locals: [] });
      // Setup method environment
      const fnEnv = fn.closure.child();
      for (let i = 0; i < fn.params.length; i++) fnEnv.define(fn.params[i], args[i] ?? NULL);
      fnEnv.define("self", instance);
      this.env = fnEnv;
      this.currentBytecode = compiled.bytecode;
      this.ip = -1;
      // Run method bytecode until RETURN
      return this.runUntilReturn();
    }
    // Fallback: tree-walker style
    const fnEnv = fn.closure.child();
    for (let i = 0; i < fn.params.length; i++) fnEnv.define(fn.params[i], args[i] ?? NULL);
    fnEnv.define("self", instance);
    try {
      return NULL;
    } catch (e) {
      if (e instanceof ReturnSignal) return e.value;
      throw e;
    }
  }

  private callValue(fn: ViperValue, args: ViperValue[], self?: ViperValue): ViperValue {
    if (fn.kind === "native") return fn.call(args, self);
    if (fn.kind === "function") {
      const compiled = this.program.functions.get(fn.name);
      if (compiled && compiled.bytecode.length > 0) {
        // Save current frame
        this.callStack.push({ ip: this.ip, env: this.env, bytecode: this.currentBytecode, locals: [] });
        // Setup function environment
        const fnEnv = fn.closure.child();
        for (let i = 0; i < fn.params.length; i++) fnEnv.define(fn.params[i], args[i] ?? NULL);
        if (self !== undefined) fnEnv.define("self", self);
        this.env = fnEnv;
        this.currentBytecode = compiled.bytecode;
        this.ip = -1;
        // Run function bytecode until RETURN
        return this.runUntilReturn();
      }
      // Fallback
      const fnEnv = fn.closure.child();
      for (let i = 0; i < fn.params.length; i++) fnEnv.define(fn.params[i], args[i] ?? NULL);
      if (self !== undefined) fnEnv.define("self", self);
      try {
        return NULL;
      } catch (e) {
        if (e instanceof ReturnSignal) return e.value;
        throw e;
      }
    }
    throw new ViperError(`'${viperToString(fn)}' is not callable`);
  }

  // Run bytecode until a RETURN instruction is hit, then restore frame
  // Returns the value WITHOUT pushing it to the stack - caller handles pushing
  private runUntilReturn(): ViperValue {
    while (this.ip < this.currentBytecode.length) {
      this.frameCount++;
      if (!this.isTrusted && (this.frameCount & 511) === 0 && this.frameCount > this.frameLimit) {
        throw new ViperError("Maximum execution depth exceeded (infinite loop?)");
      }
      const instr = this.currentBytecode[this.ip];
      if (instr.op === Op.RETURN) {
        const returnVal = this.pop();
        if (this.callStack.length > 0) {
          const frame = this.callStack.pop()!;
          this.ip = frame.ip;
          this.env = frame.env;
          this.currentBytecode = frame.bytecode;
        }
        return returnVal;
      }
      this.executeInstr(instr);
      this.ip++;
    }
    // No explicit return - return null
    const returnVal = this.stack.length > 0 ? this.stack[this.stack.length - 1] : NULL;
    if (this.callStack.length > 0) {
      const frame = this.callStack.pop()!;
      this.ip = frame.ip;
      this.env = frame.env;
      this.currentBytecode = frame.bytecode;
    }
    return returnVal;
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
    default: return null;
  }
}

function jsToViper(v: unknown): ViperValue {
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
