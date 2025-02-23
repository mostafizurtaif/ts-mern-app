import { NextFunction, Request, Response } from "express";
import { Document } from "mongoose";
import { createMovie } from "../services/movieServices";

export const createMovieController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const movieData = req.body;

    const movie: Document = await createMovie(movieData);

    res.status(201).json({
      success: true,
      message: "Movie created successfully",
      data: movie,
    });
  } catch (error) {
    next(error);
  }
};
