import Joi from "joi";

export const movieSchema = Joi.object({
  title: Joi.string().required(),
  duration: Joi.number().required().min(1),
  releaseYear: Joi.number().required().min(1900).max(new Date().getFullYear()),
  rating: Joi.number().required().min(0).max(10),
  notableCharacters: Joi.array().items(Joi.string()),
});
