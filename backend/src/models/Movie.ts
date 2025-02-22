import { Schema, model } from "mongoose";
import { IMovie } from "../types/movieTypes";

const movieSchema = new Schema<IMovie>(
  {
    title: { type: String, required: [true, "Title is required!"] },
    notableCharacters: { type: [String], default: [] },
    duration: {
      type: Number,
      required: [true, "Duration is required!"],
      min: [1, "Duration must be at least 1 minute long!"],
    },
    releaseYear: {
      type: Number,
      required: [true, "Release year is required!"],
      min: [1900, "Release year cannot be before 1900!"],
      max: [new Date().getFullYear(), "Release year cannot be in the future!"],
    },
    rating: {
      type: Number,
      required: [true, "Rating is required!"],
      min: [0, "Rating cannot be negative!"],
      max: [10, "Rating cannot be greater than 10!"],
    },
  },
  { timestamps: true }
);

const Movie = model<IMovie>("Movie", movieSchema);

export default Movie;
