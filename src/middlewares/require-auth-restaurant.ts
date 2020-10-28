import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "..";

export const requireAuthRestaurant = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentRestaurant) {
    throw new NotAuthorizedError();
  }
  next();
};
