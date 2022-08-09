import { Router } from "express";
import signUpSchema from "../schemas/signUpSchema";
import signInSchema from "../schemas/signInSchema";
import { validateSchema } from "../middlewares/schemaValidator.js";
import { signUp, signIn } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/sign-up", validateSchema(signUpSchema), signUp);
authRouter.post("/", validateSchema(signInSchema), signIn);

export default authRouter;