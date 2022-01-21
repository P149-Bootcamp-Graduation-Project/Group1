import { Router } from "express";
import classes from "./classes.js";
import schools from "./schools.js";

const router = Router();

router.use("/classes", classes);
router.use("/schools", schools);

export default router;
