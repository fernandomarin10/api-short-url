import express, {Request, Response, Router} from "express";

const router: Router = express.Router();

router.get("", (_req: Request, res: Response) => {
    res.sendStatus(200);
});

export default router;
