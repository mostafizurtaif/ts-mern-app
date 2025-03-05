import express, { Application } from "express";
import { connectDB } from "./config/db";
import movieRoutes from "./routes/movieRoutes";
import { errorHandler } from "./middlewares/errorHandler";
import cors from "cors";

const app: Application = express();

// Connects to the database
connectDB();

// Parses JSON
app.use(express.json());

// CORS policy
app.use(cors());

// Routes
app.use("/", movieRoutes);

// Middleware for handling errors
app.use(errorHandler as express.ErrorRequestHandler);

export default app;
