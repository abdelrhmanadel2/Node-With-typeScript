import { Request, Response, NextFunction } from "express";
import Error from "../interfaces/error.interface";

export default errorMiddleware;

function errorMiddleware(
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction
) {
  if (err.name === "ValidationError") {
    // mongoose validation error
    return res.status(400).json({ status: 400, message: err.message });
  }

  if (err.name === "UnauthorizedError") {
    // jwt authentication error
    return res.status(401).json({ status: 401, message: "Invalid Token" });
  }
  const status = err.status || 500;
  const message = err.message || "Whoops!! something went wrong";
  // default to 500 server error
  return res.status(status).json({ status, message });
}
