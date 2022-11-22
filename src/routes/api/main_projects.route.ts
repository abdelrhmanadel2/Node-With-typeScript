import { check, oneOf } from "express-validator";
import { Router, Response, Request } from "express";
import * as controller from "../../controllers/projects.main.controller";
import { validate } from "../../middlewares/validate.req";
import { MainProjectSchema } from "../../validators/mainprojects.validator";
const routes = Router();

routes.post("/", validate(MainProjectSchema), controller.create);
export default routes;
