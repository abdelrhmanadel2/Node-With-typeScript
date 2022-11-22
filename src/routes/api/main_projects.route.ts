import { check, oneOf } from "express-validator";
import { Router, Response, Request } from "express";
import * as controller from "../../controllers/projects.main.controller";
import { validate } from "../../middlewares/validate.req";
import { createProjectValidator } from "../../validators/mainprojects.validator";
const routes = Router();

routes.post("/", validate(createProjectValidator), controller.create);
export default routes;
