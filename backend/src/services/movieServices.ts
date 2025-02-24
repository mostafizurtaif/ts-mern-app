import { Types } from "mongoose";
import { IMovie } from "../types/movieTypes";
import Movie from "../models/Movie";
import { BadRequestError, NotFoundError } from "../errors";

export const createMovie = async (movieData: IMovie): Promise<IMovie> => {
  return await Movie.create(movieData);
};

export const getAllMovies = async (): Promise<IMovie[]> => {
  return await Movie.find();
};

export const getMovie = async (id: string): Promise<IMovie> => {
  if (!Types.ObjectId.isValid(id)) {
    throw new BadRequestError("The provided ID is invalid!");
  }

  const fetchedMovie = await Movie.findById(id);

  if (!fetchedMovie) {
    throw new NotFoundError("No movie found with the provided ID!");
  }

  return fetchedMovie;
};

export const updateMovie = async (
  id: string,
  movieData: IMovie
): Promise<IMovie> => {
  // Performs ID validation and throws error if movie was not found
  await getMovie(id);

  const updatedMovie = await Movie.findByIdAndUpdate(id, movieData, {
    new: true,
    runValidators: true,
  });

  if (!updatedMovie) {
    throw new Error("An unexpected error occurred while updating the movie!");
  }

  return updatedMovie;
};
