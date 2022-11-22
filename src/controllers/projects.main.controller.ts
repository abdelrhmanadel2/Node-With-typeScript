import { createProjectInput } from "./../validators/mainprojects.validator";
import mongoose from "mongoose";
import { connectToCluster } from "../database/connect_to.db";
import { Response, Request, NextFunction } from "express";
import config from "../config/config";
import { createProject } from "../service/user_service";

// const projectsModel = new MainProjectsModel();

export const create = async (
  req: Request<{}, {}, createProjectInput["body"]>,
  res: Response,
  next: NextFunction
) => {
  try {
    // add validation here
    connectToCluster(config.dataBaseUrl);
    // // make req
    const input: any = req.body;
    const project = await createProject(input, req.locale);
    res.json({
      status: req.locale == "ar" ? "نجحت العملية" : "Success",
      message:
        req.locale == "ar"
          ? "تم اضافه المشروع بنجاح"
          : "Project Created Successfully",
      data: project,
    });
  } catch (err) {
    next(err);
  }
};
