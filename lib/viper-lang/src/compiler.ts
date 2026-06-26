// Bytecode compiler and VM for Viper Invictus
// Compiles AST to bytecode, then executes on a stack-based VM

import { AstNode, ViperValue, ViperNumber, ViperString, ViperBool, ViperNull, ViperArray, ViperObject, ViperFunction, ViperNative, ViperClass, ViperInstance, Environment, ViperError, ReturnSignal, BreakSignal, ContinueSignal } from "./types";
import { NUM, STR, BOOL, NULL, ARR, OBJ, NATIVE, viperToString, isTruthy } from "./interpreter";

// ===== OPCODES =====
export enum Op {
  PUSH_CONST,    // Push a constant value
  PUSH_VAR,      // Push variable value
  STORE_VAR,     // Store top of stack into variable
  STORE_CONST,   // Store as constant
  POP,           // Pop top of stack
  DUP,           // Duplicate top of stack
  SWAP,          // Swap top two stack items

  // Arithmetic
  ADD, SUB, MUL, DIV, MOD, POW,
  NEG, INC, DEC,

  // Comparison
  EQ, NE, LT, GT, LE, GE,

  // Logical
  AND, OR, NOT,

  // Control flow
  JUMP,          // Unconditional jump
  JUMP_IF_FALSE, // Jump if top is falsy
  JUMP_IF_TRUE,  // Jump if top is truthy
  CALL,          // Call function
  RETURN,        // Return from function
  MAKE_FN,       // Create function object
  MAKE_CLASS,    // Create class object
  NEW,           // Create instance
  GET_MEMBER,    // Get property
  SET_MEMBER,    // Set property
  GET_INDEX,     // Get index
  SET_INDEX,     // Set index
  MAKE_ARRAY,    // Create array
  MAKE_OBJECT,   // Create object
  SPREAD,        // Spread array
  PUSH_SELF,     // Push self
  GET_THIS,      // Push self (alias)
  THROW,         // Throw error
  TRY_START,     // Start try block
  TRY_END,       // End try block
  CATCH,         // Catch handler
  LOOP_START,    // Loop boundary marker
  LOOP_END,      // Loop boundary marker
  BREAK,         // Break out of loop
  CONTINUE,      // Continue loop
  END,           // End of program
}

export interface Instruction {
  op: Op;
  value?: number | string | boolean | null;
  line?: number;
}

export interface CompiledFunction {
  name: string;
  params: string[];
  bytecode: Instruction[];
  constants: ViperValue[];
  locals: string[];
  upvalues: string[];
  isConstructor?: boolean;
}

export interface CompiledClass {
  name: string;
  superName?: string;
  methods: Map<string, CompiledFunction>;
}

export interface BytecodeProgram {
  bytecode: Instruction[];
  constants: ViperValue[];
  functions: Map<string, CompiledFunction>;
  classes: Map<string, CompiledClass>;
  globals: string[];
}

// ===== COMPILER =====
export class Compiler {
  private constants: ViperValue[] = [];
  private functions: Map<string, CompiledFunction> = new Map();
  private classes: Map<string, CompiledClass> = new Map();
  private globals: Set<string> = new Set();
  private locals: string[] = [];
  private localDepth = 0;
  private currentBytecode: Instruction[] = [];
  private breakStack: number[] = [];
  private continueStack: number[] = [];
  private loopDepth = 0;

  compile(node: AstNode): BytecodeProgram {
    this.constants = [];
    this.functions = new Map();
    this.classes = new Map();
    this.globals = new Set();
    this.locals = [];
    this.localDepth = 0;
    this.currentBytecode = [];
    this.breakStack = [];
    this.continueStack = [];
    this.loopDepth = 0;

    this.emitNode(node);
    this.emit(Op.END);

    return {
      bytecode: this.currentBytecode,
      constants: this.constants,
      functions: this.functions,
      classes: this.classes,
      globals: Array.from(this.globals),
    };
  }

  private addConst(v: ViperValue): number {
    const idx = this.constants.length;
    this.constants.push(v);
    return idx;
  }

  private emit(op: Op, value?: number | string | boolean | null, line?: number) {
    this.currentBytecode.push({ op, value, line });
  }

  private emitNode(node: AstNode): void {
    if (!node) return;
    const line = node.line;

    switch (node.type) {
      case "Program":
      case "Block": {
        const stmts = node.body as AstNode[];
        for (const s of stmts) this.emitNode(s);
        break;
      }

      case "LetDecl":
      case "VarDecl":
      case "ConstDecl": {
        const name = node.name as string;
        if (node.init) this.emitNode(node.init as AstNode);
        else this.emit(Op.PUSH_CONST, this.addConst(NULL), line);
        this.emit(Op.STORE_VAR, name, line);
        if (node.type === "ConstDecl") this.emit(Op.STORE_CONST, name, line);
        break;
      }

      case "ExprStmt": {
        this.emitNode(node.expr as AstNode);
        this.emit(Op.POP, undefined, line);
        break;
      }

      case "FnDecl": {
        const name = node.name as string;
        const params = node.params as string[];
        const savedBytecode = this.currentBytecode;
        const savedLocals = this.locals;
        const savedDepth = this.localDepth;
        this.currentBytecode = [];
        this.locals = [...params];
        this.localDepth = 1;

        this.emitNode(node.body as AstNode);
        this.emit(Op.PUSH_CONST, this.addConst(NULL), line);
        this.emit(Op.RETURN, undefined, line);

        const fn: CompiledFunction = {
          name, params,
          bytecode: this.currentBytecode,
          constants: this.constants,
          locals: [...this.locals],
          upvalues: [],
        };
        this.functions.set(name, fn);

        this.currentBytecode = savedBytecode;
        this.locals = savedLocals;
        this.localDepth = savedDepth;

        this.emit(Op.MAKE_FN, name, line);
        this.emit(Op.STORE_VAR, name, line);
        break;
      }

      case "ClassDecl": {
        const name = node.name as string;
        const superName = node.superName as string | undefined;
        const methods = new Map<string, CompiledFunction>();
        for (const m of (node.methods as AstNode[])) {
          const mName = m.name as string;
          const mParams = m.params as string[];
          const savedBytecode = this.currentBytecode;
          const savedLocals = this.locals;
          const savedDepth = this.localDepth;
          this.currentBytecode = [];
          this.locals = [...mParams, "self"];
          this.localDepth = 1;

          this.emitNode(m.body as AstNode);
          this.emit(Op.PUSH_CONST, this.addConst(NULL), line);
          this.emit(Op.RETURN, undefined, line);

          const fn: CompiledFunction = {
            name: mName, params: mParams,
            bytecode: this.currentBytecode,
            constants: this.constants,
            locals: [...this.locals],
            upvalues: [],
            isConstructor: mName === "init",
          };
          methods.set(mName, fn);

          this.currentBytecode = savedBytecode;
          this.locals = savedLocals;
          this.localDepth = savedDepth;
        }
        this.classes.set(name, { name, superName, methods });
        this.emit(Op.MAKE_CLASS, name, line);
        this.emit(Op.STORE_VAR, name, line);
        break;
      }

      case "If": {
        this.emitNode(node.cond as AstNode);
        const jumpFalseIdx = this.currentBytecode.length;
        this.emit(Op.JUMP_IF_FALSE, 0, line);
        this.emitNode(node.then as AstNode);
        if (node.els) {
          const jumpEndIdx = this.currentBytecode.length;
          this.emit(Op.JUMP, 0, line);
          this.currentBytecode[jumpFalseIdx].value = this.currentBytecode.length;
          this.emitNode(node.els as AstNode);
          this.currentBytecode[jumpEndIdx].value = this.currentBytecode.length;
        } else {
          this.currentBytecode[jumpFalseIdx].value = this.currentBytecode.length;
        }
        break;
      }

      case "While": {
        const loopStart = this.currentBytecode.length;
        this.emitNode(node.cond as AstNode);
        const jumpFalseIdx = this.currentBytecode.length;
        this.emit(Op.JUMP_IF_FALSE, 0, line);
        this.emit(Op.LOOP_START, undefined, line);
        this.loopDepth++;
        this.breakStack.push(0);
        this.continueStack.push(loopStart);
        this.emitNode(node.body as AstNode);
        this.emit(Op.LOOP_END, undefined, line);
        this.emit(Op.JUMP, loopStart, line);
        this.currentBytecode[jumpFalseIdx].value = this.currentBytecode.length;
        this.loopDepth--;
        this.breakStack.pop();
        this.continueStack.pop();
        break;
      }

      case "DoWhile": {
        const loopStart = this.currentBytecode.length;
        this.emit(Op.LOOP_START, undefined, line);
        this.loopDepth++;
        this.breakStack.push(0);
        this.continueStack.push(loopStart);
        this.emitNode(node.body as AstNode);
        this.emit(Op.LOOP_END, undefined, line);
        this.emitNode(node.cond as AstNode);
        this.emit(Op.JUMP_IF_TRUE, loopStart, line);
        this.loopDepth--;
        this.breakStack.pop();
        this.continueStack.pop();
        break;
      }

      case "For": {
        // for (init; cond; update) body
        this.emitNode(node.init as AstNode);
        const loopStart = this.currentBytecode.length;
        this.emitNode(node.cond as AstNode);
        const jumpFalseIdx = this.currentBytecode.length;
        this.emit(Op.JUMP_IF_FALSE, 0, line);
        this.emit(Op.LOOP_START, undefined, line);
        this.loopDepth++;
        this.breakStack.push(0);
        this.continueStack.push(loopStart);
        this.emitNode(node.body as AstNode);
        this.emitNode(node.update as AstNode);
        this.emit(Op.LOOP_END, undefined, line);
        this.emit(Op.JUMP, loopStart, line);
        this.currentBytecode[jumpFalseIdx].value = this.currentBytecode.length;
        this.loopDepth--;
        this.breakStack.pop();
        this.continueStack.pop();
        break;
      }

      case "ForOf": {
        const arrVar = `__forof_${this.loopDepth}`;
        const idxVar = `__forof_idx_${this.loopDepth}`;
        this.emitNode(node.expr as AstNode);
        this.emit(Op.STORE_VAR, arrVar, line);
        this.emit(Op.PUSH_CONST, this.addConst(NUM(0)), line);
        this.emit(Op.STORE_VAR, idxVar, line);
        const loopStart = this.currentBytecode.length;
        this.emit(Op.PUSH_VAR, idxVar, line);
        this.emit(Op.PUSH_VAR, arrVar, line);
        this.emit(Op.GET_MEMBER, "length", line);
        this.emit(Op.LT, undefined, line);
        const jumpFalseIdx = this.currentBytecode.length;
        this.emit(Op.JUMP_IF_FALSE, 0, line);
        this.emit(Op.LOOP_START, undefined, line);
        this.loopDepth++;
        this.breakStack.push(0);
        this.continueStack.push(loopStart);
        this.emit(Op.PUSH_VAR, arrVar, line);
        this.emit(Op.PUSH_VAR, idxVar, line);
        this.emit(Op.GET_INDEX, undefined, line);
        this.emit(Op.STORE_VAR, node.name as string, line);
        this.emitNode(node.body as AstNode);
        this.emit(Op.LOOP_END, undefined, line);
        this.emit(Op.PUSH_VAR, idxVar, line);
        this.emit(Op.PUSH_CONST, this.addConst(NUM(1)), line);
        this.emit(Op.ADD, undefined, line);
        this.emit(Op.STORE_VAR, idxVar, line);
        this.emit(Op.JUMP, loopStart, line);
        this.currentBytecode[jumpFalseIdx].value = this.currentBytecode.length;
        this.loopDepth--;
        this.breakStack.pop();
        this.continueStack.pop();
        break;
      }

      case "Break": {
        if (this.loopDepth === 0) throw new Error("Break outside loop");
        this.emit(Op.BREAK, undefined, line);
        break;
      }

      case "Continue": {
        if (this.loopDepth === 0) throw new Error("Continue outside loop");
        this.emit(Op.CONTINUE, undefined, line);
        break;
      }

      case "Return": {
        if (node.value) this.emitNode(node.value as AstNode);
        else this.emit(Op.PUSH_CONST, this.addConst(NULL), line);
        this.emit(Op.RETURN, undefined, line);
        break;
      }

      case "Try": {
        const tryStart = this.currentBytecode.length;
        this.emit(Op.TRY_START, node.catchVar as string || "err", line);
        this.emitNode(node.body as AstNode);
        this.emit(Op.TRY_END, undefined, line);
        const jumpEndIdx = this.currentBytecode.length;
        this.emit(Op.JUMP, 0, line);
        const catchStart = this.currentBytecode.length;
        this.emit(Op.CATCH, node.catchVar as string || "err", line);
        this.emitNode(node.catchBody as AstNode);
        this.currentBytecode[jumpEndIdx].value = this.currentBytecode.length;
        break;
      }

      case "Throw": {
        this.emitNode(node.value as AstNode);
        this.emit(Op.THROW, undefined, line);
        break;
      }

      case "Switch": {
        this.emitNode(node.expr as AstNode);
        const caseLabels: number[] = [];
        const defaultLabel = -1;
        const endJumps: number[] = [];

        for (const c of (node.cases as AstNode[])) {
          if (c.type === "DefaultCase") {
            caseLabels.push(-1);
          } else {
            this.emit(Op.DUP, undefined, line);
            this.emitNode(c.value as AstNode);
            this.emit(Op.EQ, undefined, line);
            const jumpIdx = this.currentBytecode.length;
            this.emit(Op.JUMP_IF_FALSE, 0, line);
            caseLabels.push(this.currentBytecode.length);
            this.currentBytecode[jumpIdx].value = this.currentBytecode.length;
          }
        }

        // Default case
        const defaultIdx = (node.cases as AstNode[]).findIndex(c => c.type === "DefaultCase");
        if (defaultIdx >= 0) {
          caseLabels[defaultIdx] = this.currentBytecode.length;
        }

        // Jump to end if no match
        const jumpEndIdx = this.currentBytecode.length;
        this.emit(Op.JUMP, 0, line);

        for (let i = 0; i < (node.cases as AstNode[]).length; i++) {
          const c = (node.cases as AstNode[])[i];
          if (c.type !== "DefaultCase") {
            this.currentBytecode[caseLabels[i] - 1] = { op: Op.JUMP, value: this.currentBytecode.length, line };
          }
          this.emitNode(c.body as AstNode);
          if (i < (node.cases as AstNode[]).length - 1) {
            const endJump = this.currentBytecode.length;
            this.emit(Op.JUMP, 0, line);
            endJumps.push(endJump);
          }
        }

        this.currentBytecode[jumpEndIdx].value = this.currentBytecode.length;
        for (const j of endJumps) {
          this.currentBytecode[j].value = this.currentBytecode.length;
        }
        this.emit(Op.POP, undefined, line); // Pop switch value
        break;
      }

      case "Num": {
        this.emit(Op.PUSH_CONST, this.addConst(NUM(node.value as number)), line);
        break;
      }
      case "Str": {
        this.emit(Op.PUSH_CONST, this.addConst(STR(node.value as string)), line);
        break;
      }
      case "Bool": {
        this.emit(Op.PUSH_CONST, this.addConst(BOOL(node.value as boolean)), line);
        break;
      }
      case "Null": {
        this.emit(Op.PUSH_CONST, this.addConst(NULL), line);
        break;
      }
      case "Ident": {
        this.emit(Op.PUSH_VAR, node.name as string, line);
        break;
      }
      case "Self": {
        this.emit(Op.PUSH_SELF, undefined, line);
        break;
      }

      case "Binary": {
        this.emitNode(node.left as AstNode);
        this.emitNode(node.right as AstNode);
        const op = node.op as string;
        switch (op) {
          case "+": this.emit(Op.ADD, undefined, line); break;
          case "-": this.emit(Op.SUB, undefined, line); break;
          case "*": this.emit(Op.MUL, undefined, line); break;
          case "/": this.emit(Op.DIV, undefined, line); break;
          case "%": this.emit(Op.MOD, undefined, line); break;
          case "**": this.emit(Op.POW, undefined, line); break;
          case "==": this.emit(Op.EQ, undefined, line); break;
          case "!=": this.emit(Op.NE, undefined, line); break;
          case "<": this.emit(Op.LT, undefined, line); break;
          case ">": this.emit(Op.GT, undefined, line); break;
          case "<=": this.emit(Op.LE, undefined, line); break;
          case ">=": this.emit(Op.GE, undefined, line); break;
          case "&&": this.emit(Op.AND, undefined, line); break;
          case "||": this.emit(Op.OR, undefined, line); break;
          default: throw new Error(`Unknown binary op: ${op}`);
        }
        break;
      }

      case "Unary": {
        this.emitNode(node.expr as AstNode);
        const op = node.op as string;
        if (op === "-") this.emit(Op.NEG, undefined, line);
        else if (op === "!") this.emit(Op.NOT, undefined, line);
        break;
      }

      case "Postfix": {
        this.emitNode(node.expr as AstNode);
        const op = node.op as string;
        if (op === "++") this.emit(Op.INC, undefined, line);
        else if (op === "--") this.emit(Op.DEC, undefined, line);
        break;
      }

      case "Ternary": {
        this.emitNode(node.cond as AstNode);
        const jumpFalseIdx = this.currentBytecode.length;
        this.emit(Op.JUMP_IF_FALSE, 0, line);
        this.emitNode(node.then as AstNode);
        const jumpEndIdx = this.currentBytecode.length;
        this.emit(Op.JUMP, 0, line);
        this.currentBytecode[jumpFalseIdx].value = this.currentBytecode.length;
        this.emitNode(node.els as AstNode);
        this.currentBytecode[jumpEndIdx].value = this.currentBytecode.length;
        break;
      }

      case "Assign": {
        if (node.op === "=") {
          this.emitNode(node.right as AstNode);
          this.emitAssignTarget(node.left as AstNode);
        } else {
          this.emitNode(node.left as AstNode);
          this.emitNode(node.right as AstNode);
          const op = (node.op as string).replace("=", "");
          switch (op) {
            case "+": this.emit(Op.ADD, undefined, line); break;
            case "-": this.emit(Op.SUB, undefined, line); break;
            case "*": this.emit(Op.MUL, undefined, line); break;
            case "/": this.emit(Op.DIV, undefined, line); break;
            case "%": this.emit(Op.MOD, undefined, line); break;
          }
          this.emitAssignTarget(node.left as AstNode);
        }
        break;
      }

      case "Call": {
        const callee = node.callee as AstNode;
        const args = node.args as AstNode[];
        if (callee.type === "Member") {
          this.emitNode(callee.obj as AstNode);
          this.emit(Op.DUP, undefined, line);
          this.emit(Op.GET_MEMBER, callee.prop as string, line);
          for (const a of args) this.emitNode(a);
          this.emit(Op.CALL, args.length, line);
        } else if (callee.type === "Index") {
          this.emitNode(callee.obj as AstNode);
          this.emitNode(callee.idx as AstNode);
          this.emit(Op.GET_INDEX, undefined, line);
          for (const a of args) this.emitNode(a);
          this.emit(Op.CALL, args.length, line);
        } else {
          this.emitNode(callee);
          for (const a of args) this.emitNode(a);
          this.emit(Op.CALL, args.length, line);
        }
        break;
      }

      case "New": {
        this.emit(Op.PUSH_VAR, node.cls as string, line);
        const args = node.args as AstNode[];
        for (const a of args) this.emitNode(a);
        this.emit(Op.NEW, args.length, line);
        break;
      }

      case "Member": {
        this.emitNode(node.obj as AstNode);
        this.emit(Op.GET_MEMBER, node.prop as string, line);
        break;
      }

      case "Index": {
        this.emitNode(node.obj as AstNode);
        this.emitNode(node.idx as AstNode);
        this.emit(Op.GET_INDEX, undefined, line);
        break;
      }

      case "Array": {
        const elements = node.elements as AstNode[];
        for (const e of elements) {
          if (e.type === "Spread") {
            this.emitNode(e.expr as AstNode);
            this.emit(Op.SPREAD, undefined, line);
          } else {
            this.emitNode(e);
          }
        }
        this.emit(Op.MAKE_ARRAY, elements.length, line);
        break;
      }

      case "Object": {
        const props = node.props as Array<{ key: string; value: AstNode }>;
        for (const p of props) this.emitNode(p.value);
        this.emit(Op.MAKE_OBJECT, props.map(p => p.key).join("\x00"), line);
        break;
      }

      case "Template": {
        const parts = node.parts as AstNode[];
        let first = true;
        for (const part of parts) {
          if (part.type === "Str") {
            this.emit(Op.PUSH_CONST, this.addConst(STR(part.value as string)), line);
          } else {
            this.emitNode(part);
          }
          if (!first) this.emit(Op.ADD, undefined, line);
          first = false;
        }
        if (first) this.emit(Op.PUSH_CONST, this.addConst(STR("")), line);
        break;
      }

      case "FnExpr": {
        const name = `__anon_${this.functions.size}`;
        const params = node.params as string[];
        const savedBytecode = this.currentBytecode;
        const savedLocals = this.locals;
        const savedDepth = this.localDepth;
        this.currentBytecode = [];
        this.locals = [...params];
        this.localDepth = 1;

        this.emitNode(node.body as AstNode);
        this.emit(Op.PUSH_CONST, this.addConst(NULL), line);
        this.emit(Op.RETURN, undefined, line);

        const fn: CompiledFunction = {
          name, params,
          bytecode: this.currentBytecode,
          constants: this.constants,
          locals: [...this.locals],
          upvalues: [],
        };
        this.functions.set(name, fn);

        this.currentBytecode = savedBytecode;
        this.locals = savedLocals;
        this.localDepth = savedDepth;

        this.emit(Op.MAKE_FN, name, line);
        break;
      }

      case "ArrowFn": {
        // Same as FnExpr
        const name = `__arrow_${this.functions.size}`;
        const params = node.params as string[];
        const savedBytecode = this.currentBytecode;
        const savedLocals = this.locals;
        const savedDepth = this.localDepth;
        this.currentBytecode = [];
        this.locals = [...params];
        this.localDepth = 1;

        this.emitNode(node.body as AstNode);
        this.emit(Op.PUSH_CONST, this.addConst(NULL), line);
        this.emit(Op.RETURN, undefined, line);

        const fn: CompiledFunction = {
          name, params,
          bytecode: this.currentBytecode,
          constants: this.constants,
          locals: [...this.locals],
          upvalues: [],
        };
        this.functions.set(name, fn);

        this.currentBytecode = savedBytecode;
        this.locals = savedLocals;
        this.localDepth = savedDepth;

        this.emit(Op.MAKE_FN, name, line);
        break;
      }

      default:
        throw new Error(`Unknown node type: ${node.type}`);
    }
  }

  private emitAssignTarget(node: AstNode): void {
    const line = node.line;
    if (node.type === "Ident") {
      this.emit(Op.STORE_VAR, node.name as string, line);
    } else if (node.type === "Member") {
      this.emitNode(node.obj as AstNode);
      this.emit(Op.SWAP, undefined, line);
      this.emit(Op.SET_MEMBER, node.prop as string, line);
    } else if (node.type === "Index") {
      this.emitNode(node.obj as AstNode);
      this.emitNode(node.idx as AstNode);
      this.emit(Op.SWAP, undefined, line);
      this.emit(Op.SET_INDEX, undefined, line);
    }
  }
}
