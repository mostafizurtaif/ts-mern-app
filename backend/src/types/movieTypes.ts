import { Date, Document, Types } from "mongoose";

export interface IMovie extends Document {
  _id: Types.ObjectId;
  title: string;
  notableCharacters?: string[];
  duration: number;
  releaseYear: number;
  rating: number;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
}
