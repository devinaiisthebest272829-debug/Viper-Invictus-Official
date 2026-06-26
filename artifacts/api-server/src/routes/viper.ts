import { Router, type IRouter } from "express";
import { Interpreter, viperToString, NUM, STR, BOOL, NULL, ARR, OBJ, NATIVE } from "@workspace/viper-lang";
import type { ExecutionContext } from "@workspace/viper-lang";
import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { execSync } from "child_process";

const router: IRouter = Router();

interface RunRequest {
  code: string;
  trusted?: boolean;
}

function ensureDir(p: string) {
  const d = dirname(p);
  if (!existsSync(d)) mkdirSync(d, { recursive: true });
}

function makeCtx(): ExecutionContext & { outputs: string[] } {
  const outputs: string[] = [];
  return {
    outputs,
    output: (text: string, kind = "log") => {
      outputs.push(`[${kind}] ${text}`);
    },
    draw: () => {},
    clearCanvas: () => {},
    clearConsole: () => { outputs.length = 0; },
    getInput: () => "",
    setTitle: () => {},
    getTime: () => Date.now(),
    random: () => Math.random(),
    scheduleFrame: () => {},
    cancelFrames: () => {},
  };
}

function createBackendInterpreter(ctx: ReturnType<typeof makeCtx>, isTrusted: boolean) {
  const interp = new Interpreter(ctx, isTrusted);

  const fsObj = OBJ();
  fsObj.props.set("read", NATIVE("fs.read", (args) => {
    const path = viperToString(args[0] ?? NULL);
    try {
      if (!existsSync(path)) return NULL;
      return STR(readFileSync(path, "utf-8"));
    } catch { return NULL; }
  }));
  fsObj.props.set("write", NATIVE("fs.write", (args) => {
    const path = viperToString(args[0] ?? NULL);
    const content = viperToString(args[1] ?? NULL);
    try {
      ensureDir(path);
      writeFileSync(path, content, "utf-8");
      return BOOL(true);
    } catch { return BOOL(false); }
  }));
  fsObj.props.set("exists", NATIVE("fs.exists", (args) => {
    const path = viperToString(args[0] ?? NULL);
    return BOOL(existsSync(path));
  }));
  fsObj.props.set("list", NATIVE("fs.list", (args) => {
    const path = viperToString(args[0] ?? NULL);
    if (!existsSync(path)) return ARR([]);
    return ARR(readdirSync(path).map(STR));
  }));
  interp.setGlobal("fs", fsObj);

  const envObj = OBJ();
  envObj.props.set("get", NATIVE("env.get", (args) => {
    const key = viperToString(args[0] ?? NULL);
    const val = process.env[key];
    return val !== undefined ? STR(val) : NULL;
  }));
  envObj.props.set("set", NATIVE("env.set", (args) => {
    const key = viperToString(args[0] ?? NULL);
    const val = viperToString(args[1] ?? NULL);
    process.env[key] = val;
    return NULL;
  }));
  interp.setGlobal("env", envObj);

  const httpObj = OBJ();
  httpObj.props.set("get", NATIVE("http.get", (args) => {
    const url = viperToString(args[0] ?? NULL);
    const result = OBJ();
    result.props.set("text", NATIVE("text", () => {
      try {
        const out = execSync(`curl -s -L "${url}"`, { encoding: "utf-8", timeout: 10000 });
        return STR(out);
      } catch { return NULL; }
    }));
    return result;
  }));
  httpObj.props.set("post", NATIVE("http.post", (args) => {
    const url = viperToString(args[0] ?? NULL);
    const data = viperToString(args[1] ?? NULL);
    const result = OBJ();
    result.props.set("text", NATIVE("text", () => {
      try {
        const out = execSync(`curl -s -L -X POST -H "Content-Type: application/json" -d '${data.replace(/'/g, "'\\''")}' "${url}"`, { encoding: "utf-8", timeout: 10000 });
        return STR(out);
      } catch { return NULL; }
    }));
    return result;
  }));
  interp.setGlobal("http", httpObj);

  return interp;
}

router.post("/viper/run", async (req, res) => {
  const { code, trusted = false } = req.body as RunRequest;

  if (!code || typeof code !== "string") {
    res.status(400).json({ success: false, error: "Missing 'code' field" });
    return;
  }

  const ctx = makeCtx();
  const interp = createBackendInterpreter(ctx, trusted);
  const result = interp.execute(code);

  res.json({
    ...result,
    output: ctx.outputs,
  });
});

router.get("/viper/status", (_req, res) => {
  res.json({
    status: "ok",
    version: "1.2.0",
    features: ["fs", "env", "http", "canvas_off", "server_execution"],
  });
});

export default router;
