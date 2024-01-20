import express, {Request, Response, Express} from 'express';

//routers
import healthRouter from "./controllers/health/router";

const app: Express = express();
app.use(express.json());

app.use("/status", healthRouter);

export default app;