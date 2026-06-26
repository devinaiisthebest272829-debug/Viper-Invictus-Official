// Copyright 2026 mamadwkwk (devinaiisthebest272829@gmail.com)
// Licensed under the Apache License, Version 2.0
// See LICENSE or NOTICE for full license text
// Viper Invictus - A fast scripting language with browser IDE
// All rights reserved.

import type { AstNode } from "./types";

export interface CompilerResult {
  success: boolean;
  js?: string;
  error?: string;
}

let tmpCounter = 0;
function tmp() { return `__t${tmpCounter++}`; }
function resetTmp() { tmpCounter = 0; }

export function compileToJS(ast: AstNode): CompilerResult {
  resetTmp();
  try {
    const body = compileNode(ast);
    const js = `${body}`;
    return { success: true, js };
  } catch (e) {
    return { success: false, error: String(e) };
  }
}

/** Fast hash for code caching */
export function hashCode(str: string): string {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h + str.charCodeAt(i)) | 0;
  }
  return (h >>> 0).toString(36);
}

function compileNode(node: AstNode | null | undefined): string {
  if (!node) return "undefined";
  switch (node.type) {
    case "Program": return compileBlock(node.body as AstNode[], true);
    case "Block": return compileBlock(node.body as AstNode[], false);
    case "ExprStmt": return compileNode(node.expr as AstNode) + ";";
    case "LetDecl": return compileVarDecl(node, "let");
    case "VarDecl": return compileVarDecl(node, "var");
    case "ConstDecl": return compileVarDecl(node, "const");
    case "FnDecl": return compileFnDecl(node);
    case "FnExpr": return compileFnExpr(node);
    case "ArrowFn": return compileArrowFn(node);
    case "ClassDecl": return compileClassDecl(node);
    case "Method": return compileMethod(node);
    case "If": return compileIf(node);
    case "While": return compileWhile(node);
    case "DoWhile": return compileDoWhile(node);
    case "For": return compileFor(node);
    case "ForOf": return compileForOf(node);
    case "ForIn": return compileForIn(node);
    case "Return": return compileReturn(node);
    case "Break": return "break;";
    case "Continue": return "continue;";
    case "Try": return compileTry(node);
    case "Throw": return compileThrow(node);
    case "Switch": return compileSwitch(node);
    case "Case": return compileCase(node);
    case "DefaultCase": return "default:";
    case "Assign": return compileAssign(node);
    case "Binary": return compileBinary(node);
    case "Unary": return compileUnary(node);
    case "Postfix": return compilePostfix(node);
    case "Call": return compileCall(node);
    case "Member": return compileMember(node);
    case "Index": return compileIndex(node);
    case "New": return compileNew(node);
    case "Array": return compileArray(node);
    case "Object": return compileObject(node);
    case "Spread": return compileSpread(node);
    case "Ternary": return compileTernary(node);
    case "Template": return compileTemplate(node);
    case "Ident": return sanitizeName(node.name as string);
    case "Num": return String(node.value);
    case "Str": return JSON.stringify(node.value);
    case "Bool": return String(node.value);
    case "Null": return "null";
    case "Self": return "this";
    default: return "/* unknown: " + (node.type as string) + " */";
  }
}

function compileBlock(stmts: AstNode[], isProgram = false): string {
  if (!stmts || stmts.length === 0) return isProgram ? "" : "{}";
  const parts = stmts.map(s => compileNode(s)).filter(p => p !== ";" && p !== "");
  if (isProgram) return parts.join(" ");
  return "{ " + parts.join(" ") + " }";
}

function compileVarDecl(node: AstNode, kind: string): string {
  const name = sanitizeName(node.name as string);
  const init = node.init ? compileNode(node.init as AstNode) : "undefined";
  return `${kind} ${name} = ${init};`;
}

function compileFnDecl(node: AstNode): string {
  const name = sanitizeName(node.name as string);
  const params = (node.params as string[] || []).map(sanitizeName).join(", ");
  const body = compileBlock((node.body as AstNode).body as AstNode[]);
  return `function ${name}(${params}) ${body}`;
}

function compileFnExpr(node: AstNode): string {
  const params = (node.params as string[] || []).map(sanitizeName).join(", ");
  const body = compileBlock((node.body as AstNode).body as AstNode[]);
  return `function(${params}) ${body}`;
}

function compileArrowFn(node: AstNode): string {
  const params = (node.params as string[] || []).map(sanitizeName).join(", ");
  const bodyNode = node.body as AstNode;
  if (bodyNode.type === "Block") {
    const body = compileBlock(bodyNode.body as AstNode[]);
    return `(${params}) => ${body}`;
  }
  return `(${params}) => ${compileNode(bodyNode)}`;
}

function compileClassDecl(node: AstNode): string {
  const name = sanitizeName(node.name as string);
  const superName = node.superName ? sanitizeName(node.superName as string) : null;
  const methods = node.methods as AstNode[];
  let s = `class ${name}`;
  if (superName) s += ` extends ${superName}`;
  s += " { ";
  const init = methods?.find((m: AstNode) => m.name === "init");
  if (init) {
    const params = (init.params as string[] || []).map(sanitizeName).join(", ");
    const body = compileBlock(init.body as AstNode[]);
    // Viper uses `self` as `this` – inject self binding
    s += `constructor(${params}) { let self = this; ${body.slice(2, -2)} } `;
  }
  for (const m of methods || []) {
    if (m.name === "init") continue;
    s += compileMethod(m);
  }
  s += " }";
  return s;
}

function compileMethod(node: AstNode): string {
  const name = node.name as string;
  const params = (node.params as string[] || []).map(sanitizeName).join(", ");
  const body = compileBlock((node.body as AstNode).body as AstNode[]);
  // Viper methods use `self` – bind to `this` at method entry
  const bodyInner = body.slice(2, -2).trim();
  return `${sanitizeName(name)}(${params}) { let self = this; ${bodyInner} } `;
}

function compileIf(node: AstNode): string {
  const cond = compileNode(node.cond as AstNode);
  const then = compileNode(node.then as AstNode);
  const els = node.els ? compileNode(node.els as AstNode) : "";
  let s = `if (${cond}) ${then}`;
  if (els) s += ` else ${els}`;
  return s;
}

function compileWhile(node: AstNode): string {
  const cond = compileNode(node.cond as AstNode);
  const body = compileNode(node.body as AstNode);
  return `while (${cond}) ${body}`;
}

function compileDoWhile(node: AstNode): string {
  const cond = compileNode(node.cond as AstNode);
  const body = compileNode(node.body as AstNode);
  return `do ${body} while (${cond});`;
}

function compileFor(node: AstNode): string {
  const initNode = node.init as AstNode;
  const condNode = node.cond as AstNode;
  const updateNode = node.update as AstNode;
  const body = compileNode(node.body as AstNode);
  const init = initNode ? compileNode(initNode).replace(/;$/, "") : "";
  const cond = condNode ? compileNode(condNode) : "true";
  const update = updateNode ? compileNode(updateNode).replace(/;$/, "") : "";
  return `for (${init}; ${cond}; ${update}) ${body}`;
}

function compileForOf(node: AstNode): string {
  const vn = sanitizeName(node.varName as string);
  const iter = compileNode(node.iter as AstNode);
  const body = compileNode(node.body as AstNode);
  return `for (const ${vn} of ${iter}) ${body}`;
}

function compileForIn(node: AstNode): string {
  const vn = sanitizeName(node.varName as string);
  const iter = compileNode(node.iter as AstNode);
  const body = compileNode(node.body as AstNode);
  return `for (const ${vn} in ${iter}) ${body}`;
}

function compileReturn(node: AstNode): string {
  const val = node.value ? compileNode(node.value as AstNode) : "";
  return `return ${val};`;
}

function compileTry(node: AstNode): string {
  const body = compileNode(node.body as AstNode);
  const catchBody = node.catchBody ? compileNode(node.catchBody as AstNode) : "{}";
  const errName = sanitizeName(node.errName as string);
  return `try ${body} catch (${errName}) ${catchBody}`;
}

function compileThrow(node: AstNode): string {
  return `throw new Error(${compileNode(node.value as AstNode)});`;
}

function compileSwitch(node: AstNode): string {
  const cond = compileNode(node.cond as AstNode);
  const cases = node.cases as AstNode[];
  let s = `switch (${cond}) {`;
  for (const c of cases || []) {
    s += " " + compileNode(c);
  }
  s += " }";
  return s;
}

function compileCase(node: AstNode): string {
  const cond = node.cond ? "case " + compileNode(node.cond as AstNode) + ":" : "default:";
  const body = compileBlock(node.body as AstNode[]);
  return `${cond} ${body}`;
}

function compileAssign(node: AstNode): string {
  const left = compileNode(node.left as AstNode);
  const right = compileNode(node.right as AstNode);
  const op = node.op as string;
  if (op === "=") return `${left} = ${right};`;
  const jsOp = op.replace("=", "");
  return `${left} ${jsOp}= ${right};`;
}

function compileBinary(node: AstNode): string {
  const left = compileNode(node.left as AstNode);
  const right = compileNode(node.right as AstNode);
  const op = node.op as string;
  const jsOp = op === "===" ? "===" : op === "!==" ? "!==" : op === "==" ? "==" : op === "!=" ? "!=" : op === "and" ? "&&" : op === "or" ? "||" : op === "is" ? "===" : op === "**" ? "**" : op;
  // Handle 'in' operator specially
  if (op === "in") {
    return `__viper_in(${left}, ${right})`;
  }
  return `(${left} ${jsOp} ${right})`;
}

function compileUnary(node: AstNode): string {
  const expr = compileNode(node.expr as AstNode);
  const op = node.op as string;
  if (op === "++" || op === "--") {
    return node.prefix ? `${op}${expr}` : `${expr}${op}`;
  }
  if (op === "not") return `(!${expr})`;
  return `(${op}${expr})`;
}

function compilePostfix(node: AstNode): string {
  const expr = compileNode(node.expr as AstNode);
  return `${expr}${node.op}`;
}

const MATH_NATIVE = new Set([
  "sqrt","abs","floor","ceil","round","sin","cos","tan","asin","acos","atan","atan2",
  "pow","log","log2","log10","max","min","hypot","sign","trunc","exp","cbrt","sinh","cosh","tanh","fround","imul"
]);

function compileCall(node: AstNode): string {
  const calleeNode = node.callee as AstNode;
  const args = (node.args as AstNode[] || []).map(compileNode).join(", ");

  if (calleeNode.type === "Member") {
    const objNode = calleeNode.obj as AstNode;
    const prop = calleeNode.prop as string;
    const objName = objNode.type === "Ident" ? (objNode.name as string) : null;

    if (objName === "math") {
      if (MATH_NATIVE.has(prop)) return `Math.${prop}(${args})`;
      if (prop === "random")  return `Math.random()`;
      if (prop === "randInt") {
        const [lo, hi] = (node.args as AstNode[] || []).map(compileNode);
        return `(Math.floor(Math.random()*(${hi}-${lo}+1))+${lo})`;
      }
      if (prop === "clamp") {
        const [v, lo, hi] = (node.args as AstNode[] || []).map(compileNode);
        return `Math.min(Math.max(${v},${lo}),${hi})`;
      }
      if (prop === "lerp") {
        const [x, y, t] = (node.args as AstNode[] || []).map(compileNode);
        return `(${x}+(${y}-${x})*${t})`;
      }
    }

    if (objName === "timer" && prop === "now")  return `performance.now()`;
    if (objName === "timer" && prop === "date")  return `(new Date().toISOString())`;
    if (objName === "JSON"  && prop === "stringify") return `JSON.stringify(${args})`;
    if (objName === "JSON"  && prop === "parse")     return `(()=>{try{return JSON.parse(${args});}catch{return null;}})()`;
  }

  if (calleeNode.type === "Ident") {
    const name = calleeNode.name as string;
    if (name === "str")  return `String(${args})`;
    if (name === "num")  return `(+(${args})||0)`;
    if (name === "bool") return `(!!(${args}))`;
    if (name === "len")  return `((v=>Array.isArray(v)?v.length:v&&typeof v==="string"?v.length:v&&typeof v==="object"?Object.keys(v).length:0)(${args}))`;
  }

  const callee = compileNode(calleeNode);
  return `${callee}(${args})`;
}

function compileMember(node: AstNode): string {
  const objNode = node.obj as AstNode;
  const prop = node.prop as string;

  if (objNode.type === "Ident") {
    const objName = objNode.name as string;
    if (objName === "math") {
      if (prop === "PI")  return "Math.PI";
      if (prop === "E")   return "Math.E";
      if (prop === "TAU") return "(Math.PI*2)";
    }
  }

  const obj = compileNode(objNode);
  if (prop.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*$/)) {
    return `${obj}.${prop}`;
  }
  return `${obj}[${JSON.stringify(prop)}]`;
}

function compileIndex(node: AstNode): string {
  const obj = compileNode(node.obj as AstNode);
  const idx = compileNode(node.idx as AstNode);
  return `${obj}[${idx}]`;
}

function compileNew(node: AstNode): string {
  const callee = compileNode(node.callee as AstNode);
  const args = (node.args as AstNode[] || []).map(compileNode).join(", ");
  return `new ${callee}(${args})`;
}

function compileArray(node: AstNode): string {
  // AST uses "elements" for array items
  const items = (node.elements as AstNode[] || []).map(compileNode).join(", ");
  return `[${items}]`;
}

function compileObject(node: AstNode): string {
  const props = (node.props as { key: string; value: AstNode }[] || []);
  const parts = props.map(p => {
    const key = p.key.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*$/) ? p.key : JSON.stringify(p.key);
    return `${key}: ${compileNode(p.value)}`;
  });
  return `{${parts.join(", ")}}`;
}

function compileSpread(node: AstNode): string {
  return `...${compileNode(node.expr as AstNode)}`;
}

function compileTernary(node: AstNode): string {
  const cond = compileNode(node.cond as AstNode);
  const t = compileNode(node.then as AstNode);
  const f = compileNode(node.els as AstNode);
  return `(${cond} ? ${t} : ${f})`;
}

function compileTemplate(node: AstNode): string {
  const parts = (node.parts as AstNode[] || []);
  let first = true;
  let result = "";
  for (const part of parts) {
    const piece = part.type === "Str"
      ? JSON.stringify(part.value as string)
      : `String(${compileNode(part)})`;
    if (first) result = piece;
    else result = `(${result} + ${piece})`;
    first = false;
  }
  return first ? '""' : result;
}

const viperBuiltins = new Map<string, string>([
  ["print", "__print"],
  ["log", "__print"],
  ["warn", "__warn"],
  ["error", "__error"],
  ["clear", "__clear"],
  ["str", "__str"],
  ["num", "__num"],
  ["bool", "__bool"],
  ["type", "__type"],
  ["len", "__len"],
  ["keys", "__keys"],
  ["values", "__values"],
  ["range", "__range"],
  ["math", "__math"],
  ["timer", "__timer"],
  ["canvas", "__canvas"],
  ["JSON", "__JSON"],
  ["input", "__input"],
  ["PI", "Math.PI"],
]);

function sanitizeName(name: string): string {
  const mapped = viperBuiltins.get(name);
  if (mapped) return mapped;
  const jsReserved = new Set([
    "break", "case", "catch", "class", "const", "continue", "debugger", "default",
    "delete", "do", "else", "export", "extends", "false", "finally", "for",
    "function", "if", "import", "in", "instanceof", "new", "null", "return",
    "super", "switch", "this", "throw", "true", "try", "typeof", "var", "void",
    "while", "with", "yield", "let", "static", "await", "enum", "implements",
    "interface", "package", "private", "protected", "public", "abstract",
    "byte", "char", "double", "final", "float", "goto", "int", "long",
    "native", "short", "synchronized", "throws", "transient", "volatile",
    "arguments", "eval",
  ]);
  if (jsReserved.has(name)) return "__viper_" + name;
  return name.replace(/[^a-zA-Z0-9_$]/g, "_");
}

// Runtime helpers that are injected alongside compiled code
export const RUNTIME_HELPERS = `
function __viper_in(left, right) {
  if (Array.isArray(right)) return right.includes(left);
  if (typeof right === "string") return right.includes(String(left));
  if (right && typeof right === "object") return left in right;
  return false;
}
const __ArrayProto = Array.prototype;
const __arrPush = __ArrayProto.push;
const __arrPop = __ArrayProto.pop;
const __arrShift = __ArrayProto.shift;
const __arrUnshift = __ArrayProto.unshift;
const __arrMap = __ArrayProto.map;
const __arrFilter = __ArrayProto.filter;
const __arrReduce = __ArrayProto.reduce;
const __arrFind = __ArrayProto.find;
const __arrFindIndex = __ArrayProto.findIndex;
const __arrSome = __ArrayProto.some;
const __arrEvery = __ArrayProto.every;
const __arrIndexOf = __ArrayProto.indexOf;
const __arrIncludes = __ArrayProto.includes;
const __arrSlice = __ArrayProto.slice;
const __arrSplice = __ArrayProto.splice;
const __arrConcat = __ArrayProto.concat;
const __arrSort = __ArrayProto.sort;
const __arrJoin = __ArrayProto.join;
const __arrReverse = __ArrayProto.reverse;
const __arrFlat = __ArrayProto.flat;
const __arrForEach = __ArrayProto.forEach;
const __String = String;
const __Number = Number;
const __Math = Math;
const __JSON = JSON;
const __Date = Date;
`;
