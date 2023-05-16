import express, { Application, NextFunction, Request, Response } from "express";
import { createUser } from "../controller/userController";

const router: Application = express.Router();

router.post("/create-user", createUser);

export default router;
