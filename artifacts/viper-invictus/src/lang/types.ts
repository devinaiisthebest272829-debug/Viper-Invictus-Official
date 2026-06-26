// Copyright 2026 mamadwkwk (devinaiisthebest272829@gmail.com)
// Licensed under the Apache License, Version 2.0
// See LICENSE or NOTICE for full license text
// Viper Invictus - A fast scripting language with browser IDE
// All rights reserved.

export enum TokenType {
  Number, String, TemplateString, Identifier,
  Let, Var, Const, Fn, Class,
  If, Else, Elif, While, For, In, Of, Return, Break, Continue,
  True, False, Null, Self, New,
  Try, Catch, Throw, Switch, Case, Default, Do, Pass,
  Def, Function, And, Or, Not, Is, None, This, Undefined,
  Plus, Minus, Star, Slash, Percent, StarStar,
  Eq, NotEq, StrictEq, StrictNotEq, Lt, Gt, LtEq, GtEq,
  Assign, PlusAssign, MinusAssign, StarAssign, SlashAssign, PercentAssign,
  PlusPlus, MinusMinus,
  QuestionDot, Spread, Range, Arrow,
  LParen, RParen, LBrace, RBrace, LBracket, RBracket,
  Semicolon, Comma, Dot, Colon, Question,
  EOF,
}

export interface Token {
  type: TokenType;
  value: string;
  line: number;
  col: number;
}

export type NodeType =
  | "Program" | "Block"
  | "LetDecl" | "VarDecl" | "ConstDecl"
  | "FnDecl" | "FnExpr" | "ArrowFn"
  | "ClassDecl" | "Method"
  | "If" | "While" | "DoWhile" | "For" | "ForOf" | "ForIn"
  | "Return" | "Break" | "Continue"
  | "Try" | "Catch" | "Throw" | "Switch" | "Case" | "DefaultCase"
  | "ExprStmt"
  | "Assign" | "Binary" | "Unary" | "Postfix"
  | "Call" | "Member" | "Index" | "New"
  | "Array" | "Object" | "Spread"
  | "Ident" | "Num" | "Str" | "Bool" | "Null" | "Self"
  | "Ternary" | "Template";

export interface AstNode {
  type: NodeType;
  line?: number;
  [key: string]: unknown;
}

export type ViperValue =
  | ViperNumber
  | ViperString
  | ViperBool
  | ViperNull
  | ViperArray
  | ViperObject
  | ViperFunction
  | ViperNative
  | ViperClass
  | ViperInstance;

export interface ViperNumber { kind: "number"; value: number }
export interface ViperString { kind: "string"; value: string }
export interface ViperBool { kind: "bool"; value: boolean }
export interface ViperNull { kind: "null" }
export interface ViperArray { kind: "array"; items: ViperValue[] }
export interface ViperObject { kind: "object"; props: Map<string, ViperValue> }
export interface ViperFunction {
  kind: "function";
  name: string;
  params: string[];
  body: AstNode;
  closure: Environment;
  isConstructor?: boolean;
}
export interface ViperNative {
  kind: "native";
  name: string;
  call: (args: ViperValue[], self?: ViperValue) => ViperValue;
}
export interface ViperClass {
  kind: "class";
  name: string;
  methods: Map<string, ViperFunction | ViperNative>;
  superClass?: ViperClass;
}
export interface ViperInstance {
  kind: "instance";
  cls: ViperClass;
  fields: Map<string, ViperValue>;
}

export class Environment {
  private vars = new Map<string, ViperValue>();
  private consts = new Set<string>();
  private depth = 0;
  constructor(public parent?: Environment) {
    if (parent) this.depth = parent.depth + 1;
  }

  get(name: string, line?: number): ViperValue {
    let env: Environment | undefined = this;
    while (env) {
      const v = env.vars.get(name);
      if (v !== undefined) return v;
      env = env.parent;
    }
    throw new ViperError(`Undefined variable '${name}'`, line);
  }

  set(name: string, value: ViperValue, line?: number): void {
    let env: Environment | undefined = this;
    while (env) {
      if (env.vars.has(name)) {
        if (env.consts.has(name)) throw new ViperError(`Cannot reassign const '${name}'`, line);
        env.vars.set(name, value);
        return;
      }
      env = env.parent;
    }
    throw new ViperError(`Undefined variable '${name}'`, line);
  }

  define(name: string, value: ViperValue, isConst = false): void {
    this.vars.set(name, value);
    if (isConst) this.consts.add(name);
  }

  child(): Environment {
    return new Environment(this);
  }

  getKeys(): string[] {
    const keys: string[] = [];
    let env: Environment | undefined = this;
    while (env) {
      for (const k of env.vars.keys()) {
        if (!keys.includes(k)) keys.push(k);
      }
      env = env.parent;
    }
    return keys;
  }

  getLocalVars(): Map<string, ViperValue> {
    return this.vars;
  }
}

export class ViperError extends Error {
  constructor(message: string, public line?: number) {
    super(message);
    this.name = "ViperError";
  }
}

export class ReturnSignal {
  constructor(public value: ViperValue) {}
}
export class BreakSignal {}
export class ContinueSignal {}

export interface DrawCommand {
  cmd: string;
  args: (string | number | boolean)[];
}

export interface ExecutionContext {
  output: (text: string, kind?: "log" | "error" | "warn" | "info") => void;
  draw: (cmd: DrawCommand) => void;
  clearCanvas: () => void;
  clearConsole: () => void;
  getInput: (prompt: string) => string;
  setTitle: (title: string) => void;
  getTime: () => number;
  random: () => number;
  scheduleFrame: (cb: () => void) => void;
  cancelFrames: () => void;
}

export interface ExecutionError {
  message: string;
  line?: number;
}

export interface ExecutionResult {
  success: boolean;
  error?: string;
  errorLine?: number;
  errors?: ExecutionError[];
}
