import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError, UserRole } from "..";

// For routes that require userId param instead of checking if currentUser Id equal userId Param
// Add this middleware so admin can edit anything but simple user only his collection
export const isAdminOrCurrentRestaurant = (param: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // Only admin can modify a restaurant directly
    if (req.currentUser && req.currentUser.role !== UserRole.Admin) {
      throw new NotAuthorizedError();
    }
    if (req.currentRestaurant) {
      req.params[param] = req.currentRestaurant.id;
    }
    next();
  };
};
