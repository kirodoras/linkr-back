import { selectPostById } from "../repositories/postsRepository.js";

export async function checkPostOwner(req, res, next) {
    try {
        const { postId } = req.params;
        const { userId } = res.locals;
        const { rows: post } = await selectPostById(postId);
        if (post[0].userId !== userId) {
            return res.sendStatus(403);
        }
        next();
    } catch (error) {
        res.status(500).send(error.message);
    }
}