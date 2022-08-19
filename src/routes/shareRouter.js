import { Router } from "express";
import { sharePost , getAmountOfShares} from "../controllers/shareController.js";
import { requireToken } from '../services/requireToken.js';
import { checkIfAlreadyShare } from "../middlewares/shareMiddleware.js";

const shareRouter = Router();

shareRouter.post("/share/:postId", requireToken, checkIfAlreadyShare, sharePost);
shareRouter.get("/share/:postId", getAmountOfShares);

export default shareRouter;