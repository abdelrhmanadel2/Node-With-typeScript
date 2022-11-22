import { AnyError } from "./../../node_modules/mongoose/node_modules/mongodb/src/error";
import IMainProject from "./../models/main_Projects.model";
import { MongoServerError } from "mongodb";
import mongoose from "mongoose";
import Mainproject from "../models/main_Projects.model";
import { connectToCluster } from "../database/connect_to.db";
import { Response, Request, NextFunction } from "express";
import { errorThrower } from "../utils/helpers/error.handellar.helper";
import config from "../config/config";
import { createProject } from "../service/user_service";

// const projectsModel = new MainProjectsModel();

export const create = async (
  req: Request,
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
