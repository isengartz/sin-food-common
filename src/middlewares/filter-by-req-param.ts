import { NextFunction, Request, Response } from 'express';
import { BadRequestError } from '../errors/bad-request-error';

/**
 * Add the given parameter as req.query filter
 * @param parameter
 */
export const filterByReqParam = (parameter: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.params[parameter]) {
      throw new BadRequestError(`No ${parameter} provided`);
    } else {
      req.query[parameter] = req.params[parameter];
    }
    next();
  };
};
