import { NextFunction, Request, Response } from "express";
import { Document } from "mongoose";
import { createMovie } from "../services/movieServices";
import { movieSchema } from "../schemas/movieSchema";
import { BadRequestError } from "../errors/BadRequestError";

export const createMovieController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const movieData = req.body;
    const { error } = movieSchema.validate(movieData);

    if (error) {
      throw new BadRequestError(error.details[0].message);
    }

    const movie: Document = await createMovie(movieData);

    res.status(201).json({
      success: true,
      message: "Movie created successfully",
      data: movie,
    });
  } catch (err) {
    next(err);
  }
};
