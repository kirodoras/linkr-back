import { Router } from 'express';
import { requireToken } from '../services/requireToken.js';
import { publishPost , getPosts, deletePost} from '../controllers/postsController.js';
import { validateSchema } from "../middlewares/schemaValidator.js";
import { postsSchema } from '../schemas/postsSchema.js';
import { getUrlMetadata } from '../services/getUrlMetadata.js';
import { checkPostOwner } from '../middlewares/postsMiddleware.js';

const postsRouter = Router();

postsRouter.post("/timeline", validateSchema(postsSchema), requireToken, getUrlMetadata, publishPost);
postsRouter.get("/timeline", getPosts);
postsRouter.delete("/timeline/:postId", requireToken, checkPostOwner, deletePost);                  

export default postsRouter;