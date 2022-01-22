import { Router } from "express";
import {
  createTemperatureLog,
  updateTemperatureLogById,
  deleteTemperatureLogById,
  findTemperatureLogById,
  findAllTemperatureLogs,
  findTemperatureLogsByValues,
} from "../controllers/temperature-logs/temperature-logs_controller.js";

const router = Router();

router.post("/create", createTemperatureLog);
router.patch("/edit/:id", updateTemperatureLogById);
router.delete("/delete/:id", deleteTemperatureLogById);
router.get("/get/:id", findTemperatureLogById);
router.get("/get-by-value", findTemperatureLogsByValues);
router.get("/get-all", findAllTemperatureLogs);

export default router;
