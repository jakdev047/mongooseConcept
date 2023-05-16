import express, { Application } from "express";

import { createUser } from "./user.controller";

const router: Application = express.Router();

router.post("/create-user", createUser);

export default router;
