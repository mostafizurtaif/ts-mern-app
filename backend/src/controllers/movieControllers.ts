import { Request, Response } from "express";
import { Document } from "mongoose";
import { IMovie } from "../types/movieTypes";
import { createMovie } from "../services/movieServices";

export const createMovieController = async (req: Request, res: Response) => {
  const movieData: IMovie = req.body;

  try {
    const movie: Document = await createMovie(movieData);

    res.status(201).json({
      success: true,
      message: "Movie created successfully",
      data: movie,
    });
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === "ValidationError") {
        res.status(400).json({
          success: false,
          message: error.message,
        });
        console.error("Error adding movie: ", error.message);
      } else {
        res.status(500).json({
          success: false,
          message: error.message,
        });
        console.error("Internal server error: ", error.message);
      }
    } else {
      console.error("Error: ", error);
    }
  }
};
