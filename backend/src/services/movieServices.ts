import { Types } from "mongoose";
import { IMovie } from "../types/movieTypes";
import Movie from "../models/Movie";
import { NotFoundError } from "../errors";

export const createMovie = async (movieData: IMovie): Promise<IMovie> => {
  return await Movie.create(movieData);
};

export const getAllMovies = async (): Promise<IMovie[]> => {
  return await Movie.find();
};

export const getMovie = async (id: string): Promise<IMovie | null> => {
  return await Movie.findById(id);
};
