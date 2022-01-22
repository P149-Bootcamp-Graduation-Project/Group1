import { Router } from "express";
import {
  createElectricLog,
  updateElectricLogById,
  deleteElectricLogById,
  findElectricLogById,
  findAllElectricLogs,
  findElectricLogsByValues,
} from "../controllers/electric-logs/electric-logs_controller.js";

const router = Router();

router.post("/create", createElectricLog);
router.patch("/edit/:id", updateElectricLogById);
router.delete("/delete/:id", deleteElectricLogById);
router.get("/get/:id", findElectricLogById);
router.get("/get-by-value", findElectricLogsByValues);
router.get("/get-all", findAllElectricLogs);

export default router;
