import { Router } from "express";
import { postFollow, deleteFollow, getFollowers } from "../controllers/followController.js";
import { followSchema } from "../schemas/followSchema.js";
import { requireToken } from '../services/requireToken.js';
import { validateSchema } from "../middlewares/schemaValidator.js";

const followRouter = Router();

followRouter.post("/follow", validateSchema(followSchema), requireToken, postFollow);
followRouter.delete("/follow", deleteFollow);

followRouter.get("/follow/:id", getFollowers);

export default followRouter;