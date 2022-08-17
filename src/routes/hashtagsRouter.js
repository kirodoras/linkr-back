import { Router } from "express";
import { getPostsByHashtag } from "../controllers/hashtagsController.js";
import { getTrendingHashtags } from "../controllers/hashtagsController.js";

const hashtagsRouter = Router();

hashtagsRouter.get("/hashtag/:hashtag", getPostsByHashtag);
hashtagsRouter.get("/hashtag", getTrendingHashtags);

export default hashtagsRouter;