import { NextFunction, Request, Response } from "express";
import { Document, Types } from "mongoose";
import { createMovie, getAllMovies, getMovie } from "../services/movieServices";
import { movieSchema } from "../schemas/movieSchema";
import { JoiError, NotFoundError, BadRequestError } from "../errors";
import asyncHandler from "express-async-handler";
import { IMovie } from "../types/movieTypes";

export const createMovieController = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
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
  }
);

export const getAllMoviesController = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const movies: Document[] = await getAllMovies();

    if (movies.length == 0) {
      throw new NotFoundError("No movies found!");
    }

    res.status(200).json({
      success: true,
      message: "Successfully fetched all movies!",
      data: movies,
    });
  }
);

export const getMovieController = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestError("Invalid ObjectId.");
    }

    const movie = await getMovie(id);

    if (!movie) {
      throw new NotFoundError("No movies found!");
    }

    res.status(200).json({
      success: true,
      message: "Successfully fetched movie!",
      data: movie,
    });
  }
);
