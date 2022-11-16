import MainProjectsModel from "../models/main_Projects.model";
import { Response, Request, NextFunction } from "express";

const projectsModel = new MainProjectsModel();

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // add validation here
    const project = projectsModel.create(req.body);
    res.json({
      status: "Success",
      message: "Project Created Successfully",
      data: { ...project },
    });
  } catch (err) {
    next(err);
  }
};
