import { Router } from 'express';
import authRouter from './authRouter.js';
import likeRouter from './likeRouter.js';
import postsRouter from './postsRouter.js';

const router = Router();

router.use(authRouter);
router.use(postsRouter);
router.use(likeRouter);

export default router;