import express, { Application, Response, Request } from "express";
import helmet from "helmet";
import morgan from "morgan";
import errorMiddelware from "./middlewares/erorr.middleware";
import RateLimit from "express-rate-limit";
import config from "./config/config";
import routes from "./routes";

const app: Application = express();
// Middlewares
// http logger
app.use(morgan("common"));
//secutity
app.use(helmet());
// json parser
app.use(express.json());
// apply the Rate Limiting middleware to spesific requests
// use this for auth
app.use(
  "/auth",
  RateLimit({
    windowMs: 5 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: "Too many requests , please try agian after 5 minutes",
  })
);

// Routes
app.use("/api/v1", routes);

app.get("/auth", (_req: Request, res: Response) => {
  throw new Error("error");
});
// unknown route
app.use((_req: Request, res: Response) => {
  res.status(400).json({ message: "Ohh you are lost." });
});

// error middlewear
app.use(errorMiddelware);
// console.log("Hello Server")
app.listen(config.port || 4800, () => {
  console.log(`Server listen to port ${config.port}`);
});
