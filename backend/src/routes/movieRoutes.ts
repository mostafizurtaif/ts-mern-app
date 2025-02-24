import { Router } from "express";
import {
  createMovieController,
  deleteMovieController,
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
  .put(updateMovieController)
  .delete(deleteMovieController);

export default router;
