import { Document } from "mongoose";
import { IMovie } from "../types/movieTypes";
import Movie from "../models/Movie";

export const createMovie = async (movieData: IMovie): Promise<Document> => {
  return await Movie.create(movieData);
};

export const getAllMovies = async (): Promise<Document[]> => {
  return await Movie.find();
};
