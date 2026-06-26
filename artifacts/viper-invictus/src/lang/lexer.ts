import { Token, TokenType, ViperError } from "./types";

const KEYWORDS: Record<string, TokenType> = {
  let: TokenType.Let, var: TokenType.Var, const: TokenType.Const,
  fn: TokenType.Fn, def: TokenType.Def, function: TokenType.Function, class: TokenType.Class,
  if: TokenType.If, else: TokenType.Else, elif: TokenType.Elif,
  while: TokenType.While, for: TokenType.For,
  in: TokenType.In, of: TokenType.Of,
  return: TokenType.Return, break: TokenType.Break, continue: TokenType.Continue,
  true: TokenType.True, false: TokenType.False, null: TokenType.Null,
  True: TokenType.True, False: TokenType.False, None: TokenType.None,
  self: TokenType.Self, this: TokenType.This, new: TokenType.New,
  try: TokenType.Try, catch: TokenType.Catch, throw: TokenType.Throw,
  switch: TokenType.Switch, case: TokenType.Case, default: TokenType.Default,
  do: TokenType.Do, pass: TokenType.Pass,
  and: TokenType.And, or: TokenType.Or, not: TokenType.Not,
  is: TokenType.Is, undefined: TokenType.Undefined,
};

export function lex(src: string): { tokens: Token[]; errors: Array<{ message: string; line: number }> } {
  const tokens: Token[] = [];
  const errors: Array<{ message: string; line: number }> = [];
  let pos = 0, line = 1, col = 1;

  function peek(offset = 0) { return src[pos + offset] ?? ""; }
  function advance() {
    const ch = src[pos++];
    if (ch === "\n") { line++; col = 1; } else { col++; }
    return ch;
  }
  function tok(type: TokenType, value: string, l = line, c = col): Token {
    return { type, value, line: l, col: c };
  }
  function match(ch: string) {
    if (src[pos] === ch) { pos++; col++; return true; }
    return false;
  }

  while (pos < src.length) {
    const startLine = line, startCol = col;
    const ch = advance();

    if (ch === "/" && peek() === "/") {
      while (pos < src.length && peek() !== "\n") advance();
      continue;
    }
    if (ch === "/" && peek() === "*") {
      advance();
      while (pos < src.length && !(peek() === "*" && peek(1) === "/")) advance();
      advance(); advance();
      continue;
    }

    if (ch === " " || ch === "\t" || ch === "\r" || ch === "\n") continue;

    if (ch === "`") {
      let str = "";
      while (pos < src.length && peek() !== "`") {
        if (peek() === "\\" && peek(1) === "`") { advance(); str += "`"; advance(); continue; }
        str += advance();
      }
      advance();
      tokens.push(tok(TokenType.TemplateString, str, startLine, startCol));
      continue;
    }

    if (ch === '"' || ch === "'") {
      let str = "";
      while (pos < src.length && peek() !== ch) {
        if (peek() === "\\") {
          advance();
          const esc = advance();
          switch (esc) {
            case "n": str += "\n"; break;
            case "t": str += "\t"; break;
            case "r": str += "\r"; break;
            case "\\": str += "\\"; break;
            default: str += esc;
          }
        } else {
          str += advance();
        }
      }
      advance();
      tokens.push(tok(TokenType.String, str, startLine, startCol));
      continue;
    }

    if (ch >= "0" && ch <= "9" || (ch === "." && peek() >= "0" && peek() <= "9")) {
      let num = ch;
      while (pos < src.length && (peek() >= "0" && peek() <= "9" || peek() === ".")) num += advance();
      if (peek() === "e" || peek() === "E") {
        num += advance();
        if (peek() === "+" || peek() === "-") num += advance();
        while (pos < src.length && peek() >= "0" && peek() <= "9") num += advance();
      }
      tokens.push(tok(TokenType.Number, num, startLine, startCol));
      continue;
    }

    if (ch === "_" || (ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
      let id = ch;
      while (pos < src.length && (peek() === "_" || (peek() >= "a" && peek() <= "z") || (peek() >= "A" && peek() <= "Z") || (peek() >= "0" && peek() <= "9"))) id += advance();
      const kw = KEYWORDS[id];
      tokens.push(tok(kw !== undefined ? kw : TokenType.Identifier, id, startLine, startCol));
      continue;
    }

    switch (ch) {
      case "+": tokens.push(match("+") ? tok(TokenType.PlusPlus, "++", startLine, startCol) : match("=") ? tok(TokenType.PlusAssign, "+=", startLine, startCol) : tok(TokenType.Plus, "+", startLine, startCol)); break;
      case "-": tokens.push(match("-") ? tok(TokenType.MinusMinus, "--", startLine, startCol) : match("=") ? tok(TokenType.MinusAssign, "-=", startLine, startCol) : tok(TokenType.Minus, "-", startLine, startCol)); break;
      case "*": tokens.push(match("*") ? tok(TokenType.StarStar, "**", startLine, startCol) : match("=") ? tok(TokenType.StarAssign, "*=", startLine, startCol) : tok(TokenType.Star, "*", startLine, startCol)); break;
      case "/": tokens.push(match("=") ? tok(TokenType.SlashAssign, "/=", startLine, startCol) : tok(TokenType.Slash, "/", startLine, startCol)); break;
      case "%": tokens.push(match("=") ? tok(TokenType.PercentAssign, "%=", startLine, startCol) : tok(TokenType.Percent, "%", startLine, startCol)); break;
      case "=": tokens.push(match("=") ? (match("=") ? tok(TokenType.StrictEq, "===", startLine, startCol) : tok(TokenType.Eq, "==", startLine, startCol)) : match(">") ? tok(TokenType.Arrow, "=>", startLine, startCol) : tok(TokenType.Assign, "=", startLine, startCol)); break;
      case "!": tokens.push(match("=") ? (match("=") ? tok(TokenType.StrictNotEq, "!==", startLine, startCol) : tok(TokenType.NotEq, "!=", startLine, startCol)) : tok(TokenType.Not, "!", startLine, startCol)); break;
      case "<": tokens.push(match("=") ? tok(TokenType.LtEq, "<=", startLine, startCol) : tok(TokenType.Lt, "<", startLine, startCol)); break;
      case ">": tokens.push(match("=") ? tok(TokenType.GtEq, ">=", startLine, startCol) : tok(TokenType.Gt, ">", startLine, startCol)); break;
      case "&": if (match("&")) { tokens.push(tok(TokenType.And, "&&", startLine, startCol)); break; } else { errors.push({ message: `Unexpected '&'`, line: startLine }); continue; }
      case "|": if (match("|")) { tokens.push(tok(TokenType.Or, "||", startLine, startCol)); break; } else { errors.push({ message: `Unexpected '|'`, line: startLine }); continue; }
      case "?": tokens.push(match(".") ? tok(TokenType.QuestionDot, "?.", startLine, startCol) : tok(TokenType.Question, "?", startLine, startCol)); break;
      case ".": tokens.push(match(".") ? (match(".") ? tok(TokenType.Spread, "...", startLine, startCol) : tok(TokenType.Range, "..", startLine, startCol)) : tok(TokenType.Dot, ".", startLine, startCol)); break;
      case "(": tokens.push(tok(TokenType.LParen, "(", startLine, startCol)); break;
      case ")": tokens.push(tok(TokenType.RParen, ")", startLine, startCol)); break;
      case "{": tokens.push(tok(TokenType.LBrace, "{", startLine, startCol)); break;
      case "}": tokens.push(tok(TokenType.RBrace, "}", startLine, startCol)); break;
      case "[": tokens.push(tok(TokenType.LBracket, "[", startLine, startCol)); break;
      case "]": tokens.push(tok(TokenType.RBracket, "]", startLine, startCol)); break;
      case ";": tokens.push(tok(TokenType.Semicolon, ";", startLine, startCol)); break;
      case ",": tokens.push(tok(TokenType.Comma, ",", startLine, startCol)); break;
      case ":": tokens.push(tok(TokenType.Colon, ":", startLine, startCol)); break;
      default: errors.push({ message: `Unexpected character '${ch}'`, line: startLine }); continue;
    }
  }

  tokens.push({ type: TokenType.EOF, value: "", line, col });
  return { tokens, errors };
}
