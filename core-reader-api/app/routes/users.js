import { Router } from "express";
import { auth } from "../middleware/auth.js";
import {
  register,
  login,
  logout,
} from "../controllers/users/auth/auth_controller.js";
import {
  updateUserProfile,
  findUserProfile,
  deleteUserProfile,
} from "../controllers/users/users_controller.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", auth, logout);
router.patch("/edit/me", auth, updateUserProfile);
router.delete("/delete/me", auth, deleteUserProfile);
router.get("/get/me", auth, findUserProfile);

export default router;
