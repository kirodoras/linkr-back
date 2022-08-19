import { Router } from "express";
import { postComment , getAmountOfComments, getComments } from "../controllers/commentController.js";
import { requireToken } from '../services/requireToken.js';
import { validateSchema } from "../middlewares/schemaValidator.js";
import { commentSchema } from "../schemas/commentSchema.js";

const commentRouter = Router();

commentRouter.post("/comment/:postId", validateSchema(commentSchema), requireToken, postComment);
commentRouter.get("/comment/:postId", getAmountOfComments);
commentRouter.get("/comments/:postId", getComments);

export default commentRouter;