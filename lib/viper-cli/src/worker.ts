import { workerData } from "worker_threads";
import { readFileSync, existsSync } from "fs";

const filePath = (workerData as any).filePath;
if (!filePath || !existsSync(filePath)) {
  console.error(`File not found: ${filePath}`);
  process.exit(1);
}

const src = readFileSync(filePath, "utf-8");

async function run() {
  const { Interpreter } = await import("@workspace/viper-lang");
  const ctx = {
    output: (text: string) => console.log(text),
    draw: () => {},
    clearCanvas: () => {},
    clearConsole: () => {},
    getInput: () => "",
    setTitle: () => {},
    getTime: () => Date.now(),
    random: () => Math.random(),
    scheduleFrame: () => {},
    cancelFrames: () => {},
  };
  const interp = new Interpreter(ctx, true);
  const result = interp.execute(src);
  if (result.errors && result.errors.length > 0) {
    result.errors.forEach(e => console.error(`[thread] ${e.message}`));
    process.exit(1);
  }
  if (result.error) {
    console.error(`[thread] ${result.error}`);
    process.exit(1);
  }
}

run().catch(console.error);
