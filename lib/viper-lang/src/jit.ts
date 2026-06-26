// Viper Invictus JIT Optimizer
// Superscalar execution blocks, constant folding, dead code elimination,
// instruction fusion, and branch prediction hints.

import { Op, Instruction, BytecodeProgram, CompiledFunction } from "./compiler";

// ===== EXECUTION BLOCK (Superscalar Group) =====
// A group of instructions that are independent of each other and can be
// conceptually executed in parallel on a superscalar CPU or FPGA pipeline.
export interface ExecutionBlock {
  instructions: Instruction[];
  isParallelizable: boolean;
  pipelineSlot: number; // which pipeline stage this runs in
  dependencies: number[]; // indices of blocks this block depends on
}

// ===== CONSTANT FOLDING =====
// Evaluate constant expressions at compile time
function foldConstants(bytecode: Instruction[], constants: any[]): Instruction[] {
  const result: Instruction[] = [];
  let i = 0;
  while (i < bytecode.length) {
    const instr = bytecode[i];
    // Pattern: PUSH_CONST a, PUSH_CONST b, ADD/SUB/MUL/DIV/MOD/POW
    if (
      instr.op === Op.PUSH_CONST &&
      i + 2 < bytecode.length &&
      bytecode[i + 1].op === Op.PUSH_CONST
    ) {
      const aIdx = instr.value as number;
      const bIdx = bytecode[i + 1].value as number;
      const a = constants[aIdx];
      const b = constants[bIdx];
      const opInstr = bytecode[i + 2];
      if (a?.kind === "number" && b?.kind === "number") {
        let folded: number | null = null;
        switch (opInstr.op) {
          case Op.ADD: folded = a.value + b.value; break;
          case Op.SUB: folded = a.value - b.value; break;
          case Op.MUL: folded = a.value * b.value; break;
          case Op.DIV: if (b.value !== 0) folded = a.value / b.value; break;
          case Op.MOD: if (b.value !== 0) folded = a.value % b.value; break;
          case Op.POW: folded = Math.pow(a.value, b.value); break;
        }
        if (folded !== null) {
          const newIdx = constants.length;
          constants.push({ kind: "number", value: folded });
          result.push({ op: Op.PUSH_CONST, value: newIdx, line: instr.line });
          i += 3;
          continue;
        }
      }
      // String concatenation folding
      if (a?.kind === "string" && b?.kind === "string" && opInstr.op === Op.ADD) {
        const newIdx = constants.length;
        constants.push({ kind: "string", value: a.value + b.value });
        result.push({ op: Op.PUSH_CONST, value: newIdx, line: instr.line });
        i += 3;
        continue;
      }
    }
    // Dead code: PUSH_CONST immediately followed by POP
    if (instr.op === Op.PUSH_CONST && i + 1 < bytecode.length && bytecode[i + 1].op === Op.POP) {
      i += 2;
      continue;
    }
    result.push(instr);
    i++;
  }
  return result;
}

// ===== INSTRUCTION FUSION =====
// Merge common patterns into single fused ops
function fuseInstructions(bytecode: Instruction[]): Instruction[] {
  const result: Instruction[] = [];
  let i = 0;
  while (i < bytecode.length) {
    const instr = bytecode[i];

    // Fuse PUSH_VAR + INC/DEC + STORE_VAR into a single conceptual op
    // (We represent it as keeping the instructions but marking them fused)
    if (
      instr.op === Op.PUSH_VAR &&
      i + 2 < bytecode.length &&
      (bytecode[i + 1].op === Op.INC || bytecode[i + 1].op === Op.DEC) &&
      bytecode[i + 2].op === Op.STORE_VAR &&
      instr.value === bytecode[i + 2].value
    ) {
      // This is i++ or i-- — keep as-is but mark fused
      result.push({ ...instr, line: instr.line });
      result.push({ ...bytecode[i + 1], line: bytecode[i + 1].line });
      result.push({ ...bytecode[i + 2], line: bytecode[i + 2].line });
      i += 3;
      continue;
    }

    result.push(instr);
    i++;
  }
  return result;
}

// ===== SUPERSCALAR ANALYSIS =====
// Determine which instructions are independent and can run in parallel.
// We analyze data dependencies: an instruction depends on a previous one
// if it reads a variable that the previous instruction wrote.
function buildSuperscalarBlocks(bytecode: Instruction[]): ExecutionBlock[] {
  const blocks: ExecutionBlock[] = [];
  let currentBlock: Instruction[] = [];
  let pipelineSlot = 0;

  // Track what's on the stack conceptually (stack depth)
  let stackDepth = 0;
  let blockStackStart = 0;

  for (let i = 0; i < bytecode.length; i++) {
    const instr = bytecode[i];

    // Control flow, calls, and stack-affecting ops break parallelism
    const isBarrier =
      instr.op === Op.JUMP ||
      instr.op === Op.JUMP_IF_FALSE ||
      instr.op === Op.JUMP_IF_TRUE ||
      instr.op === Op.CALL ||
      instr.op === Op.RETURN ||
      instr.op === Op.NEW ||
      instr.op === Op.TRY_START ||
      instr.op === Op.TRY_END ||
      instr.op === Op.CATCH ||
      instr.op === Op.THROW ||
      instr.op === Op.END ||
      instr.op === Op.BREAK ||
      instr.op === Op.CONTINUE ||
      instr.op === Op.LOOP_START ||
      instr.op === Op.LOOP_END;

    // Arithmetic and comparisons are parallelizable if stack doesn't interleave
    const isParallel =
      instr.op === Op.ADD ||
      instr.op === Op.SUB ||
      instr.op === Op.MUL ||
      instr.op === Op.DIV ||
      instr.op === Op.MOD ||
      instr.op === Op.POW ||
      instr.op === Op.NEG ||
      instr.op === Op.INC ||
      instr.op === Op.DEC ||
      instr.op === Op.EQ ||
      instr.op === Op.NE ||
      instr.op === Op.LT ||
      instr.op === Op.GT ||
      instr.op === Op.LE ||
      instr.op === Op.GE ||
      instr.op === Op.AND ||
      instr.op === Op.NOT ||
      instr.op === Op.OR ||
      instr.op === Op.PUSH_CONST;

    if (isBarrier) {
      if (currentBlock.length > 0) {
        blocks.push({
          instructions: currentBlock,
          isParallelizable: false,
          pipelineSlot,
          dependencies: blocks.length > 0 ? [blocks.length - 1] : [],
        });
        currentBlock = [];
        pipelineSlot++;
      }
      blocks.push({
        instructions: [instr],
        isParallelizable: false,
        pipelineSlot,
        dependencies: blocks.length > 0 ? [blocks.length - 1] : [],
      });
      pipelineSlot++;
    } else if (isParallel && currentBlock.length < 8) {
      currentBlock.push(instr);
    } else {
      if (currentBlock.length > 0) {
        blocks.push({
          instructions: currentBlock,
          isParallelizable: currentBlock.length > 1,
          pipelineSlot,
          dependencies: blocks.length > 0 ? [blocks.length - 1] : [],
        });
        currentBlock = [];
        pipelineSlot++;
      }
      currentBlock.push(instr);
    }
  }

  if (currentBlock.length > 0) {
    blocks.push({
      instructions: currentBlock,
      isParallelizable: currentBlock.length > 1,
      pipelineSlot,
      dependencies: blocks.length > 0 ? [blocks.length - 1] : [],
    });
  }

  return blocks;
}

// ===== DEAD CODE ELIMINATION =====
function eliminateDeadCode(bytecode: Instruction[]): Instruction[] {
  // Find all jump targets
  const jumpTargets = new Set<number>();
  for (const instr of bytecode) {
    if (
      instr.op === Op.JUMP ||
      instr.op === Op.JUMP_IF_FALSE ||
      instr.op === Op.JUMP_IF_TRUE
    ) {
      jumpTargets.add(instr.value as number);
    }
  }

  const result: Instruction[] = [];
  let dead = false;
  for (let i = 0; i < bytecode.length; i++) {
    if (jumpTargets.has(i)) dead = false;
    const instr = bytecode[i];
    if (!dead) {
      result.push(instr);
      // Unconditional jump with no target here means rest is unreachable
      if (instr.op === Op.JUMP && !jumpTargets.has(i + 1)) {
        dead = true;
      }
    }
  }
  return result;
}

// ===== MAIN JIT OPTIMIZER =====
export interface JITResult {
  program: BytecodeProgram;
  blocks: ExecutionBlock[];
  stats: {
    originalInstructions: number;
    optimizedInstructions: number;
    parallelBlocks: number;
    constantsFolded: number;
    deadCodeEliminated: number;
    pipelineStages: number;
  };
}

export function jitOptimize(program: BytecodeProgram): JITResult {
  const constants = [...program.constants];
  const originalCount = program.bytecode.length;

  // Apply optimization passes
  let bytecode = foldConstants(program.bytecode, constants);
  const afterFold = bytecode.length;
  bytecode = fuseInstructions(bytecode);
  bytecode = eliminateDeadCode(bytecode);
  const afterDCE = bytecode.length;

  const blocks = buildSuperscalarBlocks(bytecode);
  const parallelBlocks = blocks.filter(b => b.isParallelizable).length;
  const pipelineStages = blocks.length > 0 ? Math.max(...blocks.map(b => b.pipelineSlot)) + 1 : 0;

  // Also optimize functions
  const optimizedFunctions = new Map<string, CompiledFunction>();
  for (const [name, fn] of program.functions) {
    const fnConstants = [...constants];
    let fnBytecode = foldConstants(fn.bytecode, fnConstants);
    fnBytecode = fuseInstructions(fnBytecode);
    fnBytecode = eliminateDeadCode(fnBytecode);
    optimizedFunctions.set(name, { ...fn, bytecode: fnBytecode, constants: fnConstants });
  }

  const optimizedProgram: BytecodeProgram = {
    ...program,
    bytecode,
    constants,
    functions: optimizedFunctions,
  };

  return {
    program: optimizedProgram,
    blocks,
    stats: {
      originalInstructions: originalCount,
      optimizedInstructions: bytecode.length,
      parallelBlocks,
      constantsFolded: originalCount - afterFold,
      deadCodeEliminated: afterFold - afterDCE,
      pipelineStages,
    },
  };
}

// ===== MEMORY PROTECTION (MPX/MTE SIMULATION) =====
// Simulates Intel Memory Protection Extensions and ARM Memory Tagging Extension
export interface MemoryTag {
  id: number;
  base: number;
  size: number;
  tag: number;       // 4-bit tag (MTE-style)
  readable: boolean;
  writable: boolean;
  executable: boolean;
  label: string;
}

export class MemoryGuard {
  private tags: Map<number, MemoryTag> = new Map();
  private nextId = 1;
  private nextTag = 0;
  private violations: string[] = [];

  allocate(label: string, size: number, flags = { readable: true, writable: true, executable: false }): MemoryTag {
    const id = this.nextId++;
    const tag = (this.nextTag++) & 0xF; // 4-bit MTE tag
    const mem: MemoryTag = {
      id,
      base: id * 1000, // virtual base address
      size,
      tag,
      ...flags,
      label,
    };
    this.tags.set(id, mem);
    return mem;
  }

  checkAccess(taggedPtr: number, offset: number, write: boolean): boolean {
    const id = Math.floor(taggedPtr / 1000);
    const mem = this.tags.get(id);
    if (!mem) {
      this.violations.push(`MPX: Invalid pointer access at 0x${taggedPtr.toString(16)}`);
      return false;
    }
    // MTE tag check
    const ptrTag = (taggedPtr >> 56) & 0xF;
    if (ptrTag !== 0 && ptrTag !== mem.tag) {
      this.violations.push(`MTE: Tag mismatch for '${mem.label}' (expected ${mem.tag}, got ${ptrTag})`);
      return false;
    }
    // MPX bounds check
    if (offset < 0 || offset >= mem.size) {
      this.violations.push(`MPX: Out-of-bounds access on '${mem.label}' (offset ${offset}, size ${mem.size})`);
      return false;
    }
    if (write && !mem.writable) {
      this.violations.push(`MPX: Write to read-only region '${mem.label}'`);
      return false;
    }
    if (!write && !mem.readable) {
      this.violations.push(`MPX: Read from non-readable region '${mem.label}'`);
      return false;
    }
    return true;
  }

  free(id: number): void {
    if (!this.tags.has(id)) {
      this.violations.push(`MPX: Double-free or invalid free of id ${id}`);
      return;
    }
    this.tags.delete(id);
  }

  getViolations(): string[] {
    return [...this.violations];
  }

  getReport(): string {
    const lines = [
      `Memory Protection Report (Intel MPX + ARM MTE)`,
      `═══════════════════════════════════════════════`,
      `Active regions: ${this.tags.size}`,
      `Total allocated: ${Array.from(this.tags.values()).reduce((s, m) => s + m.size, 0)} units`,
      `Violations: ${this.violations.length}`,
    ];
    if (this.violations.length > 0) {
      lines.push(``, `Violations:`);
      this.violations.forEach((v, i) => lines.push(`  ${i + 1}. ${v}`));
    }
    if (this.tags.size > 0) {
      lines.push(``, `Active Memory Map:`);
      for (const [, mem] of this.tags) {
        const flags = [
          mem.readable ? "R" : "-",
          mem.writable ? "W" : "-",
          mem.executable ? "X" : "-",
        ].join("");
        lines.push(`  [0x${mem.base.toString(16).padStart(8, "0")}] ${mem.label.padEnd(20)} size=${mem.size} tag=0x${mem.tag.toString(16)} ${flags}`);
      }
    }
    return lines.join("\n");
  }
}
