import { Router } from "express";
import { getPostsByHashtag } from "../controllers/hashtagsController.js";

const hashtagsRouter = Router();

hashtagsRouter.get("/hashtag/:hashtag", getPostsByHashtag);

export default hashtagsRouter;