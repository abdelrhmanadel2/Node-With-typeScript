import { Router, Response, Request } from "express";
import * as controller from "../../controllers/projects.main.controller";
const routes = Router();

routes.post("/", controller.create);
export default routes;
