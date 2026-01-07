import { Router } from "express";
import {
  handleUserSignUp,
  handleLogin,
} from "../controllers/auth.controller.js";

const router = Router();

router.post("/signup", handleUserSignUp);
router.post("/login", handleLogin);

export default router;
