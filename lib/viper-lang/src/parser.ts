// Copyright 2026 mamadwkwk (devinaiisthebest272829@gmail.com)
// Licensed under the Apache License, Version 2.0
// See LICENSE or NOTICE for full license text
// Viper Invictus - A fast scripting language with browser IDE
// All rights reserved.

import { Token, TokenType, AstNode, ViperError } from "./types";
import { lex } from "./lexer";

export function parse(tokens: Token[]): { ast: AstNode; errors: Array<{ message: string; line?: number }> } {
  let pos = 0;
  const errors: Array<{ message: string; line?: number }> = [];

  function peek(offset = 0): Token { return tokens[pos + offset] ?? tokens[tokens.length - 1]; }
  function advance(): Token { return tokens[pos++]; }
  function check(t: TokenType) { return peek().type === t; }
  function match(...types: TokenType[]): boolean {
    if (types.includes(peek().type)) { advance(); return true; }
    return false;
  }
  function eat(t: TokenType, msg?: string): Token {
    if (!check(t)) {
      const err = { message: msg ?? `Expected ${TokenType[t]}, got '${peek().value}'`, line: peek().line };
      errors.push(err);
      // Synchronize: skip to a safe token
      while (!check(t) && !check(TokenType.EOF) && !check(TokenType.Semicolon) && !check(TokenType.RBrace)) advance();
      if (check(t)) return advance();
      return peek();
    }
    return advance();
  }
  function eatIf(t: TokenType): boolean {
    if (check(t)) { advance(); return true; }
    return false;
  }

  function program(): AstNode {
    const stmts: AstNode[] = [];
    while (!check(TokenType.EOF)) stmts.push(statement());
    return { type: "Program", body: stmts };
  }

  function block(): AstNode {
    const line = peek().line;
    eat(TokenType.LBrace);
    const stmts: AstNode[] = [];
    while (!check(TokenType.RBrace) && !check(TokenType.EOF)) stmts.push(statement());
    eat(TokenType.RBrace, "Expected '}' to close block");
    return { type: "Block", body: stmts, line };
  }

  function statement(): AstNode {
    const t = peek();
    switch (t.type) {
      case TokenType.Let: return varDecl("let");
      case TokenType.Var: return varDecl("var");
      case TokenType.Const: return varDecl("const");
      case TokenType.Fn:
      case TokenType.Def:
      case TokenType.Function: {
        // Check if it's fn name() { } (declaration) or expression
        if (tokens[pos + 1]?.type === TokenType.Identifier) return fnDecl();
        return exprStmt();
      }
      case TokenType.Class: return classDecl();
      case TokenType.If: return ifStmt();
      case TokenType.While: return whileStmt();
      case TokenType.Do: return doWhileStmt();
      case TokenType.For: return forStmt();
      case TokenType.Try: return tryStmt();
      case TokenType.Throw: return throwStmt();
      case TokenType.Switch: return switchStmt();
      case TokenType.Return: return returnStmt();
      case TokenType.Break: advance(); eatIf(TokenType.Semicolon); return { type: "Break", line: t.line };
      case TokenType.Continue: advance(); eatIf(TokenType.Semicolon); return { type: "Continue", line: t.line };
      case TokenType.Pass: advance(); eatIf(TokenType.Semicolon); return { type: "Block", body: [], line: t.line };
      case TokenType.LBrace: return block();
      default: return exprStmt();
    }
  }

  function varDecl(kind: string): AstNode {
    const line = peek().line;
    advance();
    const name = eat(TokenType.Identifier).value;
    let init: AstNode | undefined;
    if (eatIf(TokenType.Assign)) init = expression();
    eatIf(TokenType.Semicolon);
    const type = kind === "let" ? "LetDecl" : kind === "var" ? "VarDecl" : "ConstDecl";
    return { type: type as AstNode["type"], name, init, line };
  }

  function fnDecl(): AstNode {
    const line = peek().line;
    const kw = peek().type;
    if (kw === TokenType.Fn || kw === TokenType.Def || kw === TokenType.Function) {
      advance();
    }
    let name = "";
    if (check(TokenType.Identifier)) name = advance().value;
    const params = paramList();
    const body = block();
    return { type: "FnDecl", name, params, body, line };
  }

  function paramList(): string[] {
    eat(TokenType.LParen);
    const params: string[] = [];
    while (!check(TokenType.RParen) && !check(TokenType.EOF)) {
      if (check(TokenType.Spread)) { advance(); }
      params.push(eat(TokenType.Identifier).value);
      if (!eatIf(TokenType.Comma)) break;
    }
    eat(TokenType.RParen, "Expected ')' after parameters");
    return params;
  }

  function classDecl(): AstNode {
    const line = peek().line;
    eat(TokenType.Class);
    const name = eat(TokenType.Identifier).value;
    let superName: string | undefined;
    if (eatIf(TokenType.Lt)) superName = eat(TokenType.Identifier).value;
    eat(TokenType.LBrace);
    const methods: AstNode[] = [];
    while (!check(TokenType.RBrace) && !check(TokenType.EOF)) {
      const mLine = peek().line;
      const mName = eat(TokenType.Identifier).value;
      const params = paramList();
      const body = block();
      methods.push({ type: "Method", name: mName, params, body, line: mLine });
    }
    eat(TokenType.RBrace);
    return { type: "ClassDecl", name, superName, methods, line };
  }

  function ifStmt(): AstNode {
    const line = peek().line;
    eat(TokenType.If);
    eat(TokenType.LParen, "Expected '(' after 'if'");
    const cond = expression();
    eat(TokenType.RParen, "Expected ')' after if condition");
    const then = block();
    let els: AstNode | undefined;
    if (eatIf(TokenType.Else)) {
      els = check(TokenType.If) || check(TokenType.Elif) ? ifStmt() : block();
    } else if (eatIf(TokenType.Elif)) {
      eat(TokenType.LParen, "Expected '(' after 'elif'");
      const elifCond = expression();
      eat(TokenType.RParen, "Expected ')' after elif condition");
      const elifThen = block();
      let elifEls: AstNode | undefined;
      if (eatIf(TokenType.Else)) {
        elifEls = check(TokenType.If) || check(TokenType.Elif) ? ifStmt() : block();
      } else if (eatIf(TokenType.Elif)) {
        eat(TokenType.LParen, "Expected '(' after 'elif'");
        const nc = expression();
        eat(TokenType.RParen, "Expected ')' after elif condition");
        const nt = block();
        elifEls = { type: "If", cond: nc, then: nt, els: undefined, line: peek().line };
      }
      els = { type: "If", cond: elifCond, then: elifThen, els: elifEls, line };
    }
    return { type: "If", cond, then, els, line };
  }

  function whileStmt(): AstNode {
    const line = peek().line;
    eat(TokenType.While);
    eat(TokenType.LParen, "Expected '(' after 'while'");
    const cond = expression();
    eat(TokenType.RParen, "Expected ')' after while condition");
    const body = block();
    return { type: "While", cond, body, line };
  }

  function doWhileStmt(): AstNode {
    const line = peek().line;
    eat(TokenType.Do);
    const body = block();
    eat(TokenType.While, "Expected 'while' after 'do' block");
    eat(TokenType.LParen, "Expected '(' after 'while'");
    const cond = expression();
    eat(TokenType.RParen, "Expected ')' after while condition");
    eatIf(TokenType.Semicolon);
    return { type: "DoWhile", cond, body, line };
  }

  function tryStmt(): AstNode {
    const line = peek().line;
    eat(TokenType.Try);
    const body = block();
    eat(TokenType.Catch, "Expected 'catch' after 'try' block");
    eat(TokenType.LParen, "Expected '(' after 'catch'");
    const errName = eat(TokenType.Identifier, "Expected error variable name in catch").value;
    eat(TokenType.RParen, "Expected ')' after catch variable");
    const catchBody = block();
    return { type: "Try", body, errName, catchBody, line };
  }

  function throwStmt(): AstNode {
    const line = peek().line;
    eat(TokenType.Throw);
    const value = expression();
    eatIf(TokenType.Semicolon);
    return { type: "Throw", value, line };
  }

  function switchStmt(): AstNode {
    const line = peek().line;
    eat(TokenType.Switch);
    eat(TokenType.LParen, "Expected '(' after 'switch'");
    const cond = expression();
    eat(TokenType.RParen, "Expected ')' after switch expression");
    eat(TokenType.LBrace, "Expected '{' to start switch cases");
    const cases: { cond: AstNode | null; body: AstNode[] }[] = [];
    while (!check(TokenType.RBrace) && !check(TokenType.EOF)) {
      if (eatIf(TokenType.Case)) {
        const c = expression();
        eat(TokenType.Colon, "Expected ':' after case expression");
        const stmts: AstNode[] = [];
        while (!check(TokenType.Case) && !check(TokenType.Default) && !check(TokenType.RBrace) && !check(TokenType.EOF)) {
          stmts.push(statement());
        }
        cases.push({ cond: c, body: stmts });
      } else if (eatIf(TokenType.Default)) {
        eat(TokenType.Colon, "Expected ':' after 'default'");
        const stmts: AstNode[] = [];
        while (!check(TokenType.RBrace) && !check(TokenType.EOF)) {
          stmts.push(statement());
        }
        cases.push({ cond: null, body: stmts });
      } else {
        errors.push({ message: "Expected 'case' or 'default' in switch", line: peek().line });
        advance();
      }
    }
    eat(TokenType.RBrace, "Expected '}' to close switch");
    return { type: "Switch", cond, cases, line };
  }

  function forStmt(): AstNode {
    const line = peek().line;
    eat(TokenType.For);
    eat(TokenType.LParen, "Expected '(' after 'for'");

    const isVarKw = check(TokenType.Let) || check(TokenType.Var) || check(TokenType.Const);
    if (isVarKw && (peek(2).type === TokenType.Of || peek(2).type === TokenType.In)) {
      advance();
      const varName = eat(TokenType.Identifier).value;
      const isOf = check(TokenType.Of);
      advance();
      const iter = expression();
      eat(TokenType.RParen);
      const body = block();
      return { type: isOf ? "ForOf" : "ForIn", varName, iter, body, line };
    }

    let init: AstNode | undefined;
    if (!check(TokenType.Semicolon)) {
      if (check(TokenType.Let) || check(TokenType.Var) || check(TokenType.Const)) {
        const kind = advance().value;
        const n = eat(TokenType.Identifier).value;
        let initVal: AstNode | undefined;
        if (eatIf(TokenType.Assign)) initVal = expression();
        const dType = kind === "let" ? "LetDecl" : kind === "var" ? "VarDecl" : "ConstDecl";
        init = { type: dType as AstNode["type"], name: n, init: initVal };
      } else {
        init = { type: "ExprStmt", expr: expression() };
      }
    }
    eat(TokenType.Semicolon);
    let cond: AstNode | undefined;
    if (!check(TokenType.Semicolon)) cond = expression();
    eat(TokenType.Semicolon);
    let update: AstNode | undefined;
    if (!check(TokenType.RParen)) update = expression();
    eat(TokenType.RParen);
    const body = block();
    return { type: "For", init, cond, update, body, line };
  }

  function returnStmt(): AstNode {
    const line = peek().line;
    eat(TokenType.Return);
    let value: AstNode | undefined;
    if (!check(TokenType.Semicolon) && !check(TokenType.RBrace) && !check(TokenType.EOF)) {
      value = expression();
    }
    eatIf(TokenType.Semicolon);
    return { type: "Return", value, line };
  }

  function exprStmt(): AstNode {
    const line = peek().line;
    const expr = expression();
    eatIf(TokenType.Semicolon);
    return { type: "ExprStmt", expr, line };
  }

  function expression(): AstNode { return assignment(); }

  function assignment(): AstNode {
    const left = ternary();
    const t = peek();
    const assignOps = [TokenType.Assign, TokenType.PlusAssign, TokenType.MinusAssign, TokenType.StarAssign, TokenType.SlashAssign, TokenType.PercentAssign];
    if (assignOps.includes(t.type)) {
      advance();
      const right = assignment();
      return { type: "Assign", op: t.value, left, right, line: t.line };
    }
    return left;
  }

  function ternary(): AstNode {
    let left = or();
    if (check(TokenType.Question)) {
      const line = peek().line;
      advance();
      const then = expression();
      eat(TokenType.Colon, "Expected ':' in ternary");
      const els = expression();
      return { type: "Ternary", cond: left, then, els, line };
    }
    return left;
  }

  function or(): AstNode {
    let left = and();
    while (check(TokenType.Or)) {
      const line = peek().line; const op = advance().value;
      left = { type: "Binary", op, left, right: and(), line };
    }
    return left;
  }

  function and(): AstNode {
    let left = equality();
    while (check(TokenType.And)) {
      const line = peek().line; const op = advance().value;
      left = { type: "Binary", op, left, right: equality(), line };
    }
    return left;
  }

  function equality(): AstNode {
    let left = membership();
    while (check(TokenType.Eq) || check(TokenType.NotEq) || check(TokenType.StrictEq) || check(TokenType.StrictNotEq)) {
      const line = peek().line; const op = advance().value;
      left = { type: "Binary", op, left, right: membership(), line };
    }
    return left;
  }

  function membership(): AstNode {
    let left = comparison();
    while (check(TokenType.In) || check(TokenType.Is)) {
      const line = peek().line; const op = advance().value;
      left = { type: "Binary", op, left, right: comparison(), line };
    }
    return left;
  }

  function comparison(): AstNode {
    let left = addSub();
    while ([TokenType.Lt, TokenType.Gt, TokenType.LtEq, TokenType.GtEq].includes(peek().type)) {
      const line = peek().line; const op = advance().value;
      left = { type: "Binary", op, left, right: addSub(), line };
    }
    return left;
  }

  function addSub(): AstNode {
    let left = mulDiv();
    while (check(TokenType.Plus) || check(TokenType.Minus)) {
      const line = peek().line; const op = advance().value;
      left = { type: "Binary", op, left, right: mulDiv(), line };
    }
    return left;
  }

  function mulDiv(): AstNode {
    let left = power();
    while ([TokenType.Star, TokenType.Slash, TokenType.Percent].includes(peek().type)) {
      const line = peek().line; const op = advance().value;
      left = { type: "Binary", op, left, right: power(), line };
    }
    return left;
  }

  function power(): AstNode {
    const left = unary();
    if (check(TokenType.StarStar)) {
      const line = peek().line; const op = advance().value;
      return { type: "Binary", op, left, right: power(), line };
    }
    return left;
  }

  function unary(): AstNode {
    const t = peek();
    if (t.type === TokenType.Not || t.type === TokenType.Minus || t.type === TokenType.Plus) {
      advance();
      return { type: "Unary", op: t.value, expr: unary(), line: t.line };
    }
    if (t.type === TokenType.PlusPlus || t.type === TokenType.MinusMinus) {
      advance();
      return { type: "Unary", op: t.value, prefix: true, expr: postfix(), line: t.line };
    }
    return postfix();
  }

  function postfix(): AstNode {
    let expr = callMember();
    while (check(TokenType.PlusPlus) || check(TokenType.MinusMinus)) {
      const line = peek().line; const op = advance().value;
      expr = { type: "Postfix", op, expr, line };
    }
    return expr;
  }

  function callMember(): AstNode {
    let expr = primary();
    while (true) {
      const t = peek();
      if (t.type === TokenType.Dot || t.type === TokenType.QuestionDot) {
        advance();
        const prop = eat(TokenType.Identifier, "Expected property name after '.'").value;
        expr = { type: "Member", obj: expr, prop, optional: t.type === TokenType.QuestionDot, line: t.line };
      } else if (t.type === TokenType.LBracket) {
        advance();
        const idx = expression();
        eat(TokenType.RBracket, "Expected ']'");
        expr = { type: "Index", obj: expr, idx, line: t.line };
      } else if (t.type === TokenType.LParen) {
        const args = argList();
        expr = { type: "Call", callee: expr, args, line: t.line };
      } else {
        break;
      }
    }
    return expr;
  }

  function argList(): AstNode[] {
    eat(TokenType.LParen);
    const args: AstNode[] = [];
    while (!check(TokenType.RParen) && !check(TokenType.EOF)) {
      if (check(TokenType.Spread)) {
        const line = peek().line; advance();
        args.push({ type: "Spread", expr: expression(), line });
      } else {
        args.push(expression());
      }
      if (!eatIf(TokenType.Comma)) break;
    }
    eat(TokenType.RParen, "Expected ')' after arguments");
    return args;
  }

  function parseTemplate(raw: string, line: number): AstNode {
    const parts: AstNode[] = [];
    let i = 0;
    let str = "";
    while (i < raw.length) {
      if (raw[i] === "$" && raw[i + 1] === "{") {
        if (str) { parts.push({ type: "Str", value: str }); str = ""; }
        i += 2;
        let depth = 1, inner = "";
        while (i < raw.length && depth > 0) {
          if (raw[i] === "{") depth++;
          else if (raw[i] === "}") { depth--; if (depth === 0) { i++; break; } }
          inner += raw[i++];
        }
        try {
          const innerResult = lex(inner);
          const innerParse = parse(innerResult.tokens);
          const stmts = innerParse.ast.body as AstNode[];
          if (stmts.length > 0) {
            const s = stmts[0];
            parts.push(s.type === "ExprStmt" ? s.expr as AstNode : s);
          }
        } catch {
          parts.push({ type: "Str", value: `\${${inner}}` });
        }
      } else if (raw[i] === "\\") {
        i++;
        const esc = raw[i++];
        switch (esc) {
          case "n": str += "\n"; break;
          case "t": str += "\t"; break;
          default: str += esc;
        }
      } else {
        str += raw[i++];
      }
    }
    if (str) parts.push({ type: "Str", value: str });
    return { type: "Template", parts, line };
  }

  function primary(): AstNode {
    const t = peek();
    switch (t.type) {
      case TokenType.Number: advance(); return { type: "Num", value: parseFloat(t.value), line: t.line };
      case TokenType.String: advance(); return { type: "Str", value: t.value, line: t.line };
      case TokenType.TemplateString: advance(); return parseTemplate(t.value, t.line);
      case TokenType.True: advance(); return { type: "Bool", value: true, line: t.line };
      case TokenType.False: advance(); return { type: "Bool", value: false, line: t.line };
      case TokenType.Null: advance(); return { type: "Null", line: t.line };
      case TokenType.None: advance(); return { type: "Null", line: t.line };
      case TokenType.Undefined: advance(); return { type: "Null", line: t.line };
      case TokenType.Self: advance(); return { type: "Self", line: t.line };
      case TokenType.This: advance(); return { type: "Self", line: t.line };
      case TokenType.Identifier: advance(); return { type: "Ident", name: t.value, line: t.line };
      case TokenType.Fn:
      case TokenType.Def:
      case TokenType.Function: return fnExpr();
      case TokenType.New: return newExpr();
      case TokenType.LParen: {
        advance();
        const expr = expression();
        eat(TokenType.RParen, "Expected ')'");
        return expr;
      }
      case TokenType.LBracket: return arrayLiteral();
      case TokenType.LBrace: return objectLiteral();
      default: throw new ViperError(`Unexpected token '${t.value}'`, t.line);
    }
  }

  function fnExpr(): AstNode {
    const line = peek().line;
    const kw = peek().type;
    if (kw === TokenType.Fn || kw === TokenType.Def || kw === TokenType.Function) {
      advance();
    }
    const params = paramList();
    const body = block();
    return { type: "FnExpr", params, body, line };
  }

  function newExpr(): AstNode {
    const line = peek().line;
    eat(TokenType.New);
    const cls = eat(TokenType.Identifier).value;
    const args = check(TokenType.LParen) ? argList() : [];
    return { type: "New", cls, args, line };
  }

  function arrayLiteral(): AstNode {
    const line = peek().line;
    eat(TokenType.LBracket);
    const items: AstNode[] = [];
    while (!check(TokenType.RBracket) && !check(TokenType.EOF)) {
      if (check(TokenType.Spread)) {
        const l = peek().line; advance();
        items.push({ type: "Spread", expr: expression(), line: l });
      } else {
        items.push(expression());
      }
      if (!eatIf(TokenType.Comma)) break;
    }
    eat(TokenType.RBracket, "Expected ']'");
    return { type: "Array", items, line };
  }

  function objectLiteral(): AstNode {
    const line = peek().line;
    eat(TokenType.LBrace);
    const props: { key: string; value: AstNode }[] = [];
    while (!check(TokenType.RBrace) && !check(TokenType.EOF)) {
      let key: string;
      if (check(TokenType.Identifier) || check(TokenType.String) || check(TokenType.Number)) {
        key = advance().value;
      } else {
        throw new ViperError(`Invalid object key '${peek().value}'`, peek().line);
      }
      if (eatIf(TokenType.Colon)) {
        props.push({ key, value: expression() });
      } else {
        props.push({ key, value: { type: "Ident", name: key } });
      }
      if (!eatIf(TokenType.Comma)) break;
    }
    eat(TokenType.RBrace, "Expected '}'");
    return { type: "Object", props, line };
  }

  const ast = program();
  return { ast, errors };
}
