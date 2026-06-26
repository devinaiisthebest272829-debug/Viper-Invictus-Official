import type { AstNode } from "./types";

export interface CompilerResult {
  success: boolean;
  js?: string;
  error?: string;
}

export function compileToJS(ast: AstNode): CompilerResult {
  try {
    const body = compileNode(ast);
    const js = `${body}`;
    return { success: true, js };
  } catch (e) {
    return { success: false, error: String(e) };
  }
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
  const body = compileBlock(node.body as AstNode[]);
  return `function ${name}(${params}) ${body}`;
}

function compileFnExpr(node: AstNode): string {
  const params = (node.params as string[] || []).map(sanitizeName).join(", ");
  const body = compileBlock(node.body as AstNode[]);
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
    s += `constructor(${params}) ${body} `;
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
  const body = compileBlock(node.body as AstNode[]);
  return `${name}(${params}) ${body} `;
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
  // v1.3: Inline literal number operations for faster compiled math
  const leftNode = node.left as AstNode;
  const rightNode = node.right as AstNode;
  if (isLiteralNumber(leftNode) && isLiteralNumber(rightNode)) {
    const lv = leftNode.value as number;
    const rv = rightNode.value as number;
    switch (op) {
      case "+": return String(lv + rv);
      case "-": return String(lv - rv);
      case "*": return String(lv * rv);
      case "/": return String(rv === 0 ? Infinity : lv / rv);
      case "%": return String(lv % rv);
      case "**": return String(Math.pow(lv, rv));
      case "==": case "===": return String(lv === rv);
      case "!=": case "!==": return String(lv !== rv);
      case "<": return String(lv < rv);
      case ">": return String(lv > rv);
      case "<=": return String(lv <= rv);
      case ">=": return String(lv >= rv);
    }
  }
  return `(${left} ${jsOp} ${right})`;
}

function isLiteralNumber(node: unknown): boolean {
  const n = node as AstNode | null;
  return !!n && n.type === "Num" && typeof n.value === "number";
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

function compileCall(node: AstNode): string {
  const callee = compileNode(node.callee as AstNode);
  const args = (node.args as AstNode[] || []).map(compileNode).join(", ");
  return `${callee}(${args})`;
}

function compileMember(node: AstNode): string {
  const obj = compileNode(node.obj as AstNode);
  const prop = node.prop as string;
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
  const items = (node.items as AstNode[] || []).map(compileNode).join(", ");
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
  const parts = (node.parts as (string | AstNode)[] || []).map(p => {
    if (typeof p === "string") return JSON.stringify(p);
    return "String(" + compileNode(p as AstNode) + ")";
  });
  // v1.3: Single string literal if no interpolations
  if (parts.length === 1) return parts[0];
  return parts.join(" + ");
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

function sanitizeName(name: string): string {
  const mapped = viperBuiltins.get(name);
  if (mapped) return mapped;
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
`;
