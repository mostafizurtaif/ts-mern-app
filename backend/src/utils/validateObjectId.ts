import { Types } from "mongoose";
import { BadRequestError } from "../errors";

export default (id: string) => {
  if (!Types.ObjectId.isValid(id)) {
    throw new BadRequestError("The provided ID is invalid!");
  }
};
