import { Router } from "express";
import classes from "./classes.js";

const router = Router();

router.use("/classes", classes);

export default router;
