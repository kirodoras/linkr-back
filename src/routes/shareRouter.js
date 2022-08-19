import { Router } from "express";
import { sharePost , getAmountOfShares} from "../controllers/shareController.js";
import { requireToken } from '../services/requireToken.js';

const shareRouter = Router();

shareRouter.post("/share/:postId", requireToken, sharePost);
shareRouter.get("/share/:postId", getAmountOfShares);

export default shareRouter;