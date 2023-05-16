import { Request, Response } from "express";
import { createUserToDB } from "../service/user";

export const createUser = async (req: Request, res: Response) => {
  const data = req.body;

  try {
    const user = await createUserToDB(data);

    if (user) {
      res.status(200).json({
        status: "success",
        data: user,
      });
    } else {
      res.status(500).json({
        error: "Internal server error",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
    });
  }
};
