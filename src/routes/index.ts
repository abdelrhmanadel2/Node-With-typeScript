import { Router } from "express";
import mainProjectsRouts from "./api/main_projects.route";
const routes = Router();
// all api routes
routes.use("/projects/main", mainProjectsRouts);
export default routes;
