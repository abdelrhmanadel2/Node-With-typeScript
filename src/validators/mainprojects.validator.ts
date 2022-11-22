import { body, oneOf, check } from "express-validator";

export function createProjectValidator() {
  check("contract", "Contract must be provided").exists();
  check("name")
    .exists()
    .isString()
    .withMessage("Project name must be String")
    .notEmpty()
    .withMessage("Project name must be provided");

  check("type")
    .exists()
    .notEmpty()
    .withMessage("type must be provided")
    .isString()
    .withMessage("Project name must be either Fraame or Frarmeless");

  check("line")
    .exists()
    .notEmpty()
    .withMessage("line must be provided")
    .isString()
    .withMessage("line must be String");
}
