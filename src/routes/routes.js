import { Router } from "express";

import authRouter from "./auth.router.js";

const routers = Router();

routers.use("/api/v1/auth", authRouter);

export default routers;
