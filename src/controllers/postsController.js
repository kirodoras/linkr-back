import { insertPost } from "../repositories/postsRepository.js";

export async function publishPost(req, res) {
    try {
        const { userId } = res.locals;
        const { url, article } = req.body;
        await insertPost(userId, url, article);
        res.sendStatus(201);
    } catch (error) {
        res.status(500).send(error.message);
    }
}