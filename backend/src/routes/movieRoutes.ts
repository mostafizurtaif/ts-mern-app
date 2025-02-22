import { Router } from "express";
import { createMovie } from "../controllers/movieControllers";

const router: Router = Router();

router.route("/movies").post(createMovie);

export default router;
