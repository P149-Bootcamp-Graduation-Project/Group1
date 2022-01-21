import { Router } from "express";
import {
  createSchool,
  updateSchoolById,
  deleteSchoolById,
  findSchoolById,
  findAllSchools,
  findSchoolsByValues,
} from "../controllers/schools/schools_controller.js";

const router = Router();

router.post("/create", createSchool);
router.patch("/edit/:id", updateSchoolById);
router.delete("/delete/:id", deleteSchoolById);
router.get("/get/:id", findSchoolById);
router.get("/get-by-value", findSchoolsByValues);
router.get("/get-all", findAllSchools);

export default router;
