import { Router } from "express";
import users from "./users.js";
import classes from "./classes.js";
import schools from "./schools.js";
import sensors from "./sensors.js";
import airLogs from "./air-logs.js";
import electricLogs from "./electric-logs.js";
import temperatureLogs from "./temperature-logs.js";

const router = Router();

router.use("/users", users);
router.use("/classes", classes);
router.use("/schools", schools);
router.use("/sensors", sensors);
router.use("/air-logs", airLogs);
router.use("/electric-logs", electricLogs);
router.use("/temperature-logs", temperatureLogs);

export default router;
