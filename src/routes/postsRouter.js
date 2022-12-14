import { Router } from 'express';
import { requireToken } from '../services/requireToken.js';
import { publishPost, getPosts, deletePost, editPost } from '../controllers/postsController.js';
import { validateSchema } from "../middlewares/schemaValidator.js";
import { postsSchema } from '../schemas/postsSchema.js';
import { articleSchema } from '../schemas/articleSchema.js';
import { getUrlMetadata } from '../services/getUrlMetadata.js';
import { checkPostOwner } from '../middlewares/postsMiddleware.js';
import { filterHashtags, createHashtags } from '../middlewares/hashtagsMiddleware.js';

const postsRouter = Router();

postsRouter.post("/timeline", validateSchema(postsSchema), requireToken, getUrlMetadata, filterHashtags, createHashtags, publishPost);
postsRouter.get("/timeline/:userId", getPosts);
postsRouter.delete("/timeline/:postId", requireToken, checkPostOwner, deletePost);
postsRouter.put("/timeline/:postId", requireToken, checkPostOwner, validateSchema(articleSchema), editPost);

export default postsRouter;