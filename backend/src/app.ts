import express, { Application } from "express";
import { connectDB } from "./config/db";
import movieRoutes from "./routes/movieRoutes";
import { errorHandler } from "./middleware/errorHandler";

const app: Application = express();

// Connects to the database
connectDB();

// Middleware for parsing JSON
app.use(express.json());

// Routes
app.use("/", movieRoutes);

// Middleware for handling errors
app.use(errorHandler as express.ErrorRequestHandler);

export default app;
