import express, { Application } from "express";
import { connectDB } from "./config/db";

const app: Application = express();

// Connects to the database
connectDB();

export default app;
