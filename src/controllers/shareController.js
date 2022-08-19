import { insertShare, countAmountOfShares } from "../repositories/shareRepository.js";


export async function sharePost(req, res) {
    try {
        const { userId } = res.locals;
        const { postId } = req.params;
        await insertShare(userId, postId);
        res.sendStatus(201);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function getAmountOfShares(req, res) {
    try {
        const { postId } = req.params;
        const { rows } = await countAmountOfShares(postId);
        res.send(rows[0]);
    } catch (error) {
        res.status(500).send(error.message);
    }
}