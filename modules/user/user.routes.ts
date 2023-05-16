import express, { Application } from "express";

import { createUser, getUser } from "./user.controller";

const router: Application = express.Router();

router.post("/create-user", createUser);

router.get("/all", getUser);

export default router;
