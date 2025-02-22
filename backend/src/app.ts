import express, { Application } from "express";
import { connectDB } from "./config/db";
import movieRoutes from "./routes/movieRoutes";

const app: Application = express();

// Connects to the database
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/", movieRoutes);

export default app;
