// Copyright 2026 mamadwkwk (devinaiisthebest272829@gmail.com)
// Licensed under the Apache License, Version 2.0
// See LICENSE or NOTICE for full license text
// Viper Invictus - A fast scripting language with browser IDE
// All rights reserved.

export { Interpreter, viperToString, NUM, STR, BOOL, NULL, ARR, OBJ, NATIVE } from "./interpreter";
export { lex } from "./lexer";
export { parse } from "./parser";
export type { ExecutionContext, ExecutionResult, DrawCommand, ViperValue } from "./types";
export { ViperError } from "./types";
export { jsToViper } from "./interpreter";
export { Compiler } from "./compiler";
export { VM } from "./vm";
export type { BytecodeProgram } from "./compiler";
export { compileToJS, hashCode } from "./compiler-js";
export { jitOptimize, MemoryGuard } from "./jit";
export type { JITResult, ExecutionBlock, MemoryTag } from "./jit";
export { compileToHDL, VerilogGenerator } from "./hdl";
export type { HDLResult, HDLTarget, HDLCompileOptions } from "./hdl";
