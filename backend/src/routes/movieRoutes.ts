import { Router } from "express";
import {
  createMovieController,
  getAllMoviesController,
  getMovieController,
  updateMovieController,
} from "../controllers/movieControllers";

const router: Router = Router();

// prettier-ignore
router.route("/movies")
  .post(createMovieController)
  .get(getAllMoviesController);

// prettier-ignore
router.route("/movies/:id")
  .get(getMovieController)
  .put(updateMovieController);

export default router;
