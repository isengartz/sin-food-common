import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";
import { Error as MongooseError } from "mongoose";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }
  if (err instanceof MongooseError.ValidationError) {
    const mongooseErrors = Object.values(err.errors).map((el) => {
      return { message: el.message };
    });
    return res.status(400).send({ errors: mongooseErrors });
  }
  if (err instanceof MongooseError.CastError) {
    return res
      .status(400)
      .send({ errors: [{ message: `Invalid ${err.path} : ${err.value}` }] });
  }
  console.error(err);
  res.status(500).send({
    errors: [
      {
        message: "Something Went Wrong !",
      },
    ],
  });
};
