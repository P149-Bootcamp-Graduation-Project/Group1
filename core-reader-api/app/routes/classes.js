import { Router } from "express";
import {
  createClass,
  updateClassById,
  deleteClassById,
  findClassById,
  findAllClasses,
} from "../controllers/classes/classes_controller.js";

const router = Router();

router.post("/create", createClass);
router.patch("/edit/:id", updateClassById);
router.delete("/delete/:id", deleteClassById);
router.get("/get/:id", findClassById);
router.get("/get-all", findAllClasses);

export default router;
