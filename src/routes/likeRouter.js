import { Router } from "express";
import { postLike, getLike, deleteLike } from "../controllers/likeController.js";
import { likeSchema } from "../schemas/likeSchema.js";
import { requireToken } from '../services/requireToken.js';
import { validateSchema } from "../middlewares/schemaValidator.js";

const likeRouter = Router();

likeRouter.post("/like",validateSchema(likeSchema), requireToken, postLike);
likeRouter.delete("/like", deleteLike);
likeRouter.get("/like", getLike);

export default likeRouter;