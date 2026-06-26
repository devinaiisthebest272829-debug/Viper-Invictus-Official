// Copyright 2026 mamadwkwk (devinaiisthebest272829@gmail.com)
// Licensed under the Apache License, Version 2.0
// See LICENSE or NOTICE for full license text
// Viper Invictus - A fast scripting language with browser IDE
// All rights reserved.

import { lex } from './lib/viper-lang/src/lexer.js';
import { parse } from './lib/viper-lang/src/parser.js';
import { Compiler } from './lib/viper-lang/src/compiler.js';
import { VM } from './lib/viper-lang/src/vm.js';

const code = `
fn fib(n) {
  if n <= 1 { return n }
  return fib(n - 1) + fib(n - 2)
}
print(fib(35))
`;

const lexResult = lex(code);
const parseResult = parse(lexResult.tokens);

const compiler = new Compiler();
const program = compiler.compile(parseResult.ast);

console.log('Bytecode functions:', program.functions.size);
for (const [name, fn] of program.functions) {
  console.log(`Function ${name}: ${fn.bytecode.length} instructions`);
  fn.bytecode.slice(0, 10).forEach((instr, i) => {
    console.log(`  ${i}: ${instr.op} ${instr.value !== undefined ? JSON.stringify(instr.value) : ''}`);
  });
  if (fn.bytecode.length > 10) console.log(`  ... (${fn.bytecode.length - 10} more)`);
}

const vm = new VM(program, true);

console.log('\n--- Running VM ---');
const start = performance.now();
const result = vm.run();
const elapsed = performance.now() - start;
console.log('VM result:', JSON.stringify(result, null, 2));
console.log('VM elapsed:', elapsed.toFixed(2), 'ms');
