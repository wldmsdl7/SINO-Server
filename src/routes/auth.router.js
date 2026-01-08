import { Router } from "express";
import {
  handleUserSignUp,
  handleLogin,
  handleCheck,
} from "../controllers/auth.controller.js";

const router = Router();

router.post("/signup", handleUserSignUp);
router.post("/login", handleLogin);
router.post("/check", handleCheck);

export default router;
