import { Router } from "express";
import errors from "./errors.js";

const router = Router();

router.use("/errors", errors);

export default router;
