import { Router, type IRouter } from "express";
import healthRouter from "./health";
import viperRouter from "./viper";

const router: IRouter = Router();

router.use(healthRouter);
router.use(viperRouter);

export default router;
