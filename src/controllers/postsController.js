import { insertPost, selectPosts, deletePostById, deleteLikesPostByPostId, deleteHashtagsPostByPostId, updatePostById } from "../repositories/postsRepository.js";

export async function publishPost(req, res) {
    try {
        const { userId } = res.locals;
        const { title, description, image } = res.locals.filterMetadata;
        const { url, article } = req.body;
        const { rows } = await insertPost(userId, url, article, title, description, image);
        console.log(rows[0].id);
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

export async function deletePost(req, res) {
    try {
        const { postId } = req.params;
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