import express, {Request, Response, Express} from 'express';

//routers
import healthRouter from "./controllers/health/router";
import urlRouter from "./controllers/url/router";

const app: Express = express();
app.use(express.json());

app.use("/status", healthRouter);
app.use("/", urlRouter);

export default app;