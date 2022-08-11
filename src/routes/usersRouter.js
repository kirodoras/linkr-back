import { Router } from "express";
import { requireToken } from '../services/requireToken.js';
import { getUsersByName } from "../controllers/usersController.js";

const usersRouter = Router();

//colocar token
usersRouter.get("/user", requireToken, getUsersByName);

export default usersRouter;