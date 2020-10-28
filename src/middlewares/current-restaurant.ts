import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";


interface RestaurantPayload {
  id: string;
  name: string;
}
// Modify Express Request Type and add currentRestaurant
declare global {
  namespace Express {
    interface Request {
      currentRestaurant?: RestaurantPayload;
    }
  }
}
export const currentRestaurant = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    // equiv to !req.session || !req.session.jwt
    return next();
  }
  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_RESTAURANT_SECRET!
    ) as RestaurantPayload;
    req.currentRestaurant = payload;
  } catch (e) {
    // No need to do something
  }
  next();
};
