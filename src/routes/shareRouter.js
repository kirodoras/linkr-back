import { Router } from "express";
import { sharePost } from "../controllers/shareController.js";
import { requireToken } from '../services/requireToken.js';

const shareRouter = Router();

shareRouter.post("/share/:postId", requireToken, sharePost);

export default shareRouter;