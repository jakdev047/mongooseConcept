import express, { Application } from "express";

import { createUser, getUser, getUserById } from "./user.controller";

const router: Application = express.Router();

router.post("/create-user", createUser);

router.get("/:id", getUserById);

router.get("/all", getUser);

export default router;
