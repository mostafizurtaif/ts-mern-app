import { Router } from "express";
import { createMovieController } from "../controllers/movieControllers";

const router: Router = Router();

router.route("/movies").post(createMovieController);

export default router;
