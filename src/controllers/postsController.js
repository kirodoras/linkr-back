import { insertPost, selectPosts } from "../repositories/postsRepository.js";
import { insert_new_hashtag } from './hashtagController.js'
export async function publishPost(req, res) {
    try {
        const { userId } = res.locals;
        const { url, article } = req.body;

        const hashtags = ['wlae','wssi']; //teste
        const post_id = userId; //somente teste

        await insertPost(userId, url, article);
        await insert_new_hashtag(hashtags,post_id);
        res.sendStatus(201);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function getPosts(req, res) {
    try {
        const { rows } = await selectPosts();
        res.send(rows);
    } catch (error) {
        res.status(500).send(error.message);
    }
}