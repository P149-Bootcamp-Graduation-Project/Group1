import { Router } from "express";
import {
  createAirLog,
  updateAirLogById,
  deleteAirLogById,
  findAirLogById,
  findAllAirLogs,
  findAirLogsByValues,
} from "../controllers/air-logs/air-logs_controller.js";

const router = Router();

router.post("/create", createAirLog);
router.patch("/edit/:id", updateAirLogById);
router.delete("/delete/:id", deleteAirLogById);
router.get("/get/:id", findAirLogById);
router.get("/get-by-value", findAirLogsByValues);
router.get("/get-all", findAllAirLogs);

export default router;
