import { insertComment, countAmountOfComments } from "../repositories/commentRepository.js";

export async function getAmountOfComments(req, res) {
    try {
        const { postId } = req.params;
        const { rows } = await countAmountOfComments(postId);
        res.send(rows[0]);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function postComment(req, res) {
    try {
        const { userId } = res.locals;
        const { postId } = req.params;
        const { comment } = req.body;
        await insertComment(userId, postId, comment);
        res.sendStatus(201);
    } catch (error) {
        res.status(500).send(error.message);
    }
}