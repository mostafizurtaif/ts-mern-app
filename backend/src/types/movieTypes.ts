import { Document } from "mongoose";

export interface IMovie extends Document {
  title: string;
  notableCharacters?: string[];
  duration: number;
  releaseYear: number;
  rating: number;
}
