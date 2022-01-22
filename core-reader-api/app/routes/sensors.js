import { Router } from "express";
import {
  createSensor,
  updateSensorById,
  deleteSensorById,
  findSensorById,
  findAllSensors,
  findSensorsByValues
} from "../controllers/sensors/sensors_controller.js";

const router = Router();

router.post("/create", createSensor);
router.patch("/edit/:id", updateSensorById);
router.delete("/delete/:id", deleteSensorById);
router.get("/get/:id", findSensorById);
router.get("/get-by-value", findSensorsByValues);
router.get("/get-all", findAllSensors);

export default router;
