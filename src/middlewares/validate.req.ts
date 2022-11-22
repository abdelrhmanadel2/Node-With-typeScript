import { NextFunction, Response, Request } from "express";
import { AnyZodObject, ZodError } from "zod";

export const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (errors) {
      const error = errors as ZodError;
      let errMessage = "";
      error.errors.map(
        (e) =>
          (errMessage += `${e.path.toString().split(",")[1]} :  ${
            e.message
          } \n`)
      );
      console.error(`${errMessage}`);
      const err = new Error(errMessage);
      err.name = "ValidationError";
      next(err);
    }
  };
