import { Router } from "express";
import {
  handleUserSignUp,
  handleLogin,
  handleCheck,
  // handleProfile,
} from "../controllers/auth.controller.js";

const router = Router();

router.post("/signup", handleUserSignUp);
router.post("/login", handleLogin);
router.post("/check", handleCheck);
// router.post("/profile", handleProfile);

export default router;
