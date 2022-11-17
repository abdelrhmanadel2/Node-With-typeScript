import MainProjectsModel from "../models/main_Projects.model";
import MainProject from "../types/main_project.type";
import { Response, Request, NextFunction } from "express";
import { errorThrower } from "../utils/helpers/error.handellar.helper";

import {
  body,
  validationResult,
  oneOf,
  ValidationError,
  check,
} from "express-validator";

const projectsModel = new MainProjectsModel();

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // add validation here

    const errors = validationResult(req);
    console.log(`error: ${!errors.isEmpty()}`);
    if (!errors.isEmpty()) {
      let errMessage = "";
      errors.array().map((e) => (errMessage += `${e.msg} \n`));
      return res.status(400).json({ status: 400, message: errMessage });
    }
    // make req
    const project = await projectsModel.create(req.body);
    res.json({
      status: "Success",
      message: "Project Created Successfully",
      data: { ...project },
    });
  } catch (err) {
    next(err);
  }
};

export const create1 =
  // username must be an email

  async (req: Request, res: Response) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    console.log(`error: ${errors}`);
    if (!errors.isEmpty()) {
      let errMessage = "";
      errors.array().forEach((e) => (errMessage += `\\n ${e.msg}`));
      return Error(errMessage);
    }

    // const project = await projectsModel.create(req.body);
    // res.json({
    //   status: "Success",
    //   message: "Project Created Successfully",
    //   data: { ...project },
    // });
  };
