import { NextFunction, Request, Response } from "express";
import {
  createMovie,
  getAllMovies,
  getMovie,
  updateMovie,
  deleteMovie,
} from "../services/movieServices";
import { movieSchema } from "../schemas/movieSchema";
import { JoiError, NotFoundError } from "../errors";
import asyncHandler from "express-async-handler";

export const createMovieController = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const movieData = req.body;
    const { error } = movieSchema.validate(movieData);

    if (error) {
      throw new JoiError(error.details[0].message);
    }

    const movie = await createMovie(movieData);

    res.status(201).json({
      success: true,
      message: "Movie created successfully",
      data: movie,
    });
  }
);

export const getAllMoviesController = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const movies = await getAllMovies();

    if (movies.length == 0) {
      throw new NotFoundError("No movies found!");
    }

    res.status(200).json({
      success: true,
      message: "All movies fetched successfully!",
      data: movies,
    });
  }
);

export const getMovieController = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const movie = await getMovie(id);

    res.status(200).json({
      success: true,
      message: "Movie fetched successfully!",
      data: movie,
    });
  }
);

export const updateMovieController = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const movieData = req.body;
    const { error } = movieSchema.validate(movieData);

    if (error) {
      throw new JoiError(error.details[0].message);
    }

    const updatedMovie = await updateMovie(id, movieData);

    res.status(200).json({
      success: true,
      message: "Movie updated successfully!",
      data: updatedMovie,
    });
  }
);

export const deleteMovieController = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    await deleteMovie(id);

    res.status(200).json({
      success: true,
      message: "Movie deleted successfully!",
    });
  }
);
