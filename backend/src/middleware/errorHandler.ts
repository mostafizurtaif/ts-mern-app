import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("Error: ", error.message);

  if (error.name === "ValidationError") {
    return res.status(400).json({ success: false, message: error.message });
  }

  res.status(500).json({ success: false, message: "Internal server error!" });
};
