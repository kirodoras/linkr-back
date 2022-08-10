import { Router } from 'express';
import { requireToken } from '../services/requireToken.js';
import { publishPost , getPosts} from '../controllers/postsController.js';
import { validateSchema } from "../middlewares/schemaValidator.js";
import { postsSchema } from '../schemas/postsSchema.js';
const postsRouter = Router();

postsRouter.post("/timeline", validateSchema(postsSchema), requireToken, publishPost);
postsRouter.get("/timeline", getPosts);

export default postsRouter;