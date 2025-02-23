import { Router } from "express";
import {
  createMovieController,
  getAllMoviesController,
} from "../controllers/movieControllers";

const router: Router = Router();

// prettier-ignore
router.route("/movies")
  .post(createMovieController)
  .get(getAllMoviesController);

export default router;
