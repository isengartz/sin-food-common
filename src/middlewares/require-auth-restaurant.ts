import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError, UserRole } from "..";

export const requireAuthRestaurant = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (
    req.currentUser &&
    req.currentUser.role &&
    req.currentUser.role === UserRole.Admin
  ) {
    return next();
  }
  if (!req.currentRestaurant) {
    throw new NotAuthorizedError();
  }
  next();
};
