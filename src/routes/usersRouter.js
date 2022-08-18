import { Router } from "express";
import { requireToken } from '../services/requireToken.js';
import { getUsersByName, getPostsUser } from "../controllers/usersController.js";

const usersRouter = Router();

//colocar token
usersRouter.get("/users/:id", requireToken, getUsersByName);
usersRouter.get("/user/:id", getPostsUser);

export default usersRouter;