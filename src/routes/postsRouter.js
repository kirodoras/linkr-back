import { Router } from 'express';
import { requireToken } from '../services/requireToken.js';
import { publishPost } from '../controllers/postsController.js';
import { validateSchema } from "../middlewares/schemaValidator.js";
import { postsSchema } from '../schemas/postsSchema.js';
const postsRouter = Router();

postsRouter.post("/timeline", validateSchema(postsSchema), requireToken, publishPost);

export default postsRouter;