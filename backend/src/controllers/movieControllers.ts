import { NextFunction, Request, Response } from "express";
import { Document } from "mongoose";
import { createMovie, getAllMovies } from "../services/movieServices";
import { movieSchema } from "../schemas/movieSchema";
import { JoiError, NotFoundError } from "../errors";

export const createMovieController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const movieData = req.body;
    const { error } = movieSchema.validate(movieData);

    if (error) {
      throw new JoiError(error.details[0].message);
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

export const getAllMoviesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const movies: Document[] = await getAllMovies();

    if (movies.length == 0) {
      throw new NotFoundError("No movies found!");
    }

    res.status(200).json({
      success: true,
      message: "Successfully fetched all movies!",
      data: movies,
    });
  } catch (err) {
    next(err);
  }
};
