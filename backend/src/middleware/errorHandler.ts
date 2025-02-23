import { Request, Response, NextFunction } from "express";
import { JoiError } from "../errors/JoiError";
import { MongoValidationError } from "../errors/MongoValidationError";

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof JoiError) {
    console.error(`Joi ValidationError: ${error.message}`);

    return res.status(error.getStatusCode()).json({
      success: false,
      message: error.message,
    });
  }

  if (error instanceof MongoValidationError) {
    console.error(`MongoDB ValidationError: ${error.message}`);

    return res
      .status(MongoValidationError.getStatusCode())
      .json({ success: false, message: error.message });
  }

  res.status(500).json({ success: false, message: "Internal server error!" });
  console.error("Error: ", error.message);
};
