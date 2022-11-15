import { Request, Response, NextFunction } from "express";
import Error from "../interfaces/error.interface";

export default errorMiddleware;

function errorMiddleware(
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction
) {
  //   if (typeof err === "string") {
  //     // custom application error
  //     return res.status(400).json({ message: err });
  //   }

  //   if (err.name === "ValidationError") {
  //     // mongoose validation error
  //     return res.status(400).json({ message: err.message });
  //   }

  const status = err.status || 500;
  const message = err.message || "Whoops!! something went wrong";
  if (err.name === "UnauthorizedError") {
    // jwt authentication error
    return res.status(401).json({ message: "Invalid Token" });
  }
  // default to 500 server error
  return res.status(status).json({ status, message });
}
