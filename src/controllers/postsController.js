import { insertPost, selectPosts, deletePostById, deleteLikesPostByPostId, deleteHashtagsPostByPostId, updatePostById } from "../repositories/postsRepository.js";
import { insertHashtagsPost } from "../repositories/hashtagsRepository.js";
import { selectPostsShares } from "../repositories/shareRepository.js";
import { deleteShare } from "../repositories/shareRepository.js";

export async function publishPost(req, res) {
    try {
        const { userId, hashtagsIds } = res.locals;
        const { title, description, image } = res.locals.filterMetadata;
        const { url, article } = req.body;
        const { rows } = await insertPost(userId, url, article, title, description, image);
        for(let i = 0; i < hashtagsIds.length; i++) {
            let id = hashtagsIds[i];
            await insertHashtagsPost(rows[0].id, id);
        }
        res.sendStatus(201);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function getPosts(req, res) {
    try {
        const { userId } = req.params;
        const { rows: posts } = await selectPosts(userId);
        const { rows: postsShares} = await selectPostsShares(userId);
        let postsWithShares = postsShares.concat(posts);
        const sort = postsWithShares.sort((a, b) => {
            return b.createdAt - a.createdAt;
        });
        res.send(sort);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function deletePost(req, res) {
    try {
        const { postId } = req.params;
        await deleteShare(postId);
        await deleteLikesPostByPostId(postId);
        await deleteHashtagsPostByPostId(postId);
        await deletePostById(postId);
        res.sendStatus(204);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function editPost(req, res) {
    try {
        const { postId } = req.params;
        const { newArticle } = req.body;
        await updatePostById(postId, newArticle);
        res.sendStatus(200);
    } catch (error) {
        res.status(500).send(error.message);
    }
}