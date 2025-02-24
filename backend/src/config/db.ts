import dotenv from "dotenv";
import mongoose from "mongoose";

// Loads variables from .env
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "";

if (!MONGO_URI) {
  console.error("MONGO_URI is not defined in the environment variables.");
  process.exit(1);
}

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Database connected successfully!");
  } catch (error) {
    console.error(
      "Database connection failed: ",
      error instanceof Error ? error.message : error
    );
    process.exit(1);
  }
};
