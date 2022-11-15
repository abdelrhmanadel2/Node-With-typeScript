import express, { Application } from "express";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
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
  rateLimit({
    windowMs: 5 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: "Too many requests , please try agian after 5 minutes",
  })
);
// console.log("Hello Server")
app.listen(3000, () => {
  console.log("Server listen to port 3000");
});
