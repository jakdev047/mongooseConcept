import express, { Application, NextFunction, Request, Response } from "express";

const router: Application = express.Router();

// home route
router.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    title: "Home",
    para: "This is Home page",
  });
});

// about route
router.get("/about", (req: Request, res: Response) => {
  res.status(200).json({
    title: "About",
    para: "This is About page",
    path: "/about",
  });
});

// not found route
router.get("*", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    title: "404 !!!",
    para: "Page has not found",
  });
});

export default router;
