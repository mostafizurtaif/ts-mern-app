import dotenv from "dotenv";
import app from "./app";

// Loads variables from .env
dotenv.config();

const PORT: number = parseInt(process.env.PORT || "5050");

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
