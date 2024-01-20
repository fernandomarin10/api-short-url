import express, {Request, Response, Router} from "express";
import { GetUrlFromHash } from "../../use-cases/url/getUrlFromHash";
import { SaveUrl } from "../../use-cases/url/saveUrl";

const router: Router = express.Router();

//container instantation
const getUrlFromHash: GetUrlFromHash = new GetUrlFromHash();
const saveUrl: SaveUrl = new SaveUrl();


router.get("/:urlHash", (req: Request, res: Response) => {
    const hash = req.params.urlHash;
    const urlFromHash = getUrlFromHash.run(hash);
    res.status(200).json({"url": urlFromHash, hash: req.params.urlHash});
});

router.post("", (_req: Request, res: Response) => {
    const hashFromUrl = saveUrl.run();
    res.status(200).json({"hash": hashFromUrl});
});

export default router;
