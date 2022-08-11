import { Router } from 'express';
import authRouter from './authRouter.js';
import likeRouter from './likeRouter.js';
import postsRouter from './postsRouter.js';
import usersRouter from './usersRouter.js';

const router = Router();

router.use(authRouter);
router.use(postsRouter);
router.use(likeRouter);
router.use(usersRouter);

export default router;