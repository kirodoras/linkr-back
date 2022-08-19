import { selectShare } from "../repositories/shareRepository.js";

export async function checkIfAlreadyShare(req, res, next) {
    try {
        const { postId } = req.params;
        const { userId } = res.locals;
        const { rows: share } = await selectShare(userId, postId);
        console.log(share);
        if (share[0]?.userId === userId) {
            return res.sendStatus(406);
        }
        next();
    } catch (error) {
        res.status(500).send(error.message);
    }
}