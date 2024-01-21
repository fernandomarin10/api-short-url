import express, {Request, Response, Router} from "express";
import { GetUrlFromHash } from "../../use-cases/url/getUrlFromHash";
import { SaveUrl } from "../../use-cases/url/saveUrl";

const router: Router = express.Router();

//container instantation
const getUrlFromHash: GetUrlFromHash = new GetUrlFromHash();
const saveUrl: SaveUrl = new SaveUrl();


router.get("/:urlHash", (req: Request, res: Response) => {
    try{
        const hash = req.params.urlHash;
        const urlFromHash = getUrlFromHash.run(hash);
        res.status(200).json({"url": urlFromHash, hash: req.params.urlHash});
    }catch(e){
        console.log("Error on GET petition / :>> ", e.toString());
        res.status(500).json({error: e.toString()});;
    }
    
});

router.post("", (_req: Request, res: Response) => {
    try{
        const hashFromUrl = saveUrl.run();
        return res.status(200).json({"hash": hashFromUrl});
    }catch(e){
        console.log("Error on POST petition / :>> ", e.toString());
        return res.status(500).json({error: e.toString()});
    }
});

export default router;
