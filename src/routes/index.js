import { Router } from 'express';
import authRouter from './authRouter.js';
import likeRouter from './likeRouter.js';
import postsRouter from './postsRouter.js';
import usersRouter from './usersRouter.js';
import followRouter from './followRouter.js';
import hashtagsRouter from './hashtagsRouter.js';

const router = Router();
router.get("/", (req, res) => {
    res.send("Online");
})
router.use(authRouter);
router.use(postsRouter);
router.use(likeRouter);
router.use(usersRouter);
router.use(followRouter);
router.use(hashtagsRouter);

export default router;