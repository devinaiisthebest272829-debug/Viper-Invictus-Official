// Copyright 2026 mamadwkwk (devinaiisthebest272829@gmail.com)
// Licensed under the Apache License, Version 2.0
// See LICENSE or NOTICE for full license text
// Viper Invictus - A fast scripting language with browser IDE
// All rights reserved.

import { Router, type IRouter } from "express";
import healthRouter from "./health";
import viperRouter from "./viper";

const router: IRouter = Router();

router.use(healthRouter);
router.use(viperRouter);

export default router;
