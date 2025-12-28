import { Router } from "express";

const router = Router();

router.post("/api/v1/users/signup", handleSignup);

export default router;
