import { Router } from "express";
import {
  createErrorLog,
  getAllErrorLogs,
} from "../controllers/errors_controller.js";

const router = Router();

router.post("/create", createErrorLog);
router.get("/get-all", getAllErrorLogs);

export default router;
