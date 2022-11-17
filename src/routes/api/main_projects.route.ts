import { check, oneOf } from "express-validator";
import { Router, Response, Request } from "express";
import * as controller from "../../controllers/projects.main.controller";
const routes = Router();

routes.post(
  "/",
  check("contract", "Contract must be provided").exists(),
  check("name")
    .exists()
    .notEmpty()
    .withMessage("Project name must be provided"),
  check("type").exists().notEmpty().withMessage("type must be provided"),
  check("line").exists().notEmpty().withMessage("line must be provided"),
  controller.create
);
export default routes;
