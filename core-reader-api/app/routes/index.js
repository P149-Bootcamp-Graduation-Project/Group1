import { Router } from "express";
import classes from "./classes.js";
import schools from "./schools.js";
import sensors from "./sensors.js";
import airLogs from "./air-logs.js";

const router = Router();

router.use("/classes", classes);
router.use("/schools", schools);
router.use("/sensors", sensors);
router.use("/air-logs", airLogs);
export default router;
