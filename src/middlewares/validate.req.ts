import { NextFunction, Response, Request } from "express";
import { validationResult } from "express-validator";

export const validate =
  (validator: () => any) =>
  (req: Request, res: Response, next: NextFunction) => {
    validator();

    const errors = validationResult(req);
    console.log(`error: ${!errors.isEmpty()}`);
    if (!errors.isEmpty()) {
      let errMessage = "";
      errors.array().map((e) => (errMessage += `${e.param} :  ${e.msg} \n`));
      console.error(`err : ${errMessage}`);
      const err = new Error(errMessage);
      err.name = "ValidationError";
      next(err);
    }
    next();
  };
