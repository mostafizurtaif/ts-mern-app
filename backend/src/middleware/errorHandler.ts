import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "../errors/BadRequestError";

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("Error: ", error.message);

  if (error instanceof BadRequestError) {
    return res.status(error.getStatusCode()).json({
      success: false,
      message: error.message,
    });
  }

  // Error thrown by MongoDB based on mongoose.Schema
  if (error.name === "ValidationError") {
    return res.status(400).json({ success: false, message: error.message });
  }

  res.status(500).json({ success: false, message: "Internal server error!" });
};
