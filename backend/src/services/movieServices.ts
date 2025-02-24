import { IMovie } from "../types/movieTypes";
import Movie from "../models/Movie";
import { NotFoundError } from "../errors";
import validateObjectId from "../utils/validateObjectId";

export const createMovie = async (movieData: IMovie): Promise<IMovie> => {
  return await Movie.create(movieData);
};

export const getAllMovies = async (): Promise<IMovie[]> => {
  return await Movie.find();
};

export const getMovie = async (id: string): Promise<IMovie> => {
  validateObjectId(id);

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
  validateObjectId(id);

  const updatedMovie = await Movie.findByIdAndUpdate(id, movieData, {
    new: true,
    runValidators: true,
  });

  if (!updatedMovie) {
    throw new NotFoundError("No movie found with the provided ID!");
  }

  return updatedMovie;
};

export const deleteMovie = async (id: string): Promise<void> => {
  validateObjectId(id);

  const deletedMovie = await Movie.findByIdAndDelete(id);

  if (!deletedMovie) {
    throw new NotFoundError("No movie found with the provided ID!");
  }
};
