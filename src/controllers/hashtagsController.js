import { selectPostsByHashtagName } from "../repositories/hashtagsRepository.js";

export async function getPostsByHashtag(req, res) {
    const { hashtag } = req.params;
    try {
        const { rows: posts } = await selectPostsByHashtagName(hashtag);
        res.status(200).send(posts);
    } catch (error) {
        res.status(500).send(error.message);
    }
}