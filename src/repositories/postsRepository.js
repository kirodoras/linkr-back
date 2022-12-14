import connection from "../databases/postgres.js";
import dayjs from "dayjs";


export async function insertPost(userId, url, article, title, description, image) {
    const now = dayjs().format("YYYY-MM-DD HH:mm:ss");
    let insertImage = image.length > 0 ? image : null;
    if(typeof insertImage === 'string' && !insertImage?.startsWith("http")) {
        insertImage = null;
    }
    return connection.query(`
        INSERT INTO posts 
        ("userId", url, article, title, description, image, "createdAt") 
        VALUES 
        ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id
    `, [userId, url, article, title, description, insertImage, now]);
}

export async function selectPosts(userId) {
    return connection.query(`
        SELECT posts.id AS "postId", posts."userId", posts.url, posts.article, posts.title, posts.image, posts.description, users.username, users."pictureUrl", posts."createdAt" as "createdAt"
        FROM posts
        JOIN users ON users.id = posts."userId"
        LEFT JOIN follows ON follows."followedId" = users.id
        WHERE follows."followerId" = $1 OR posts."userId" = $1
        ORDER BY posts."createdAt" DESC
        LIMIT 20
    `, [userId]);
}

export async function selectPostById(postId) {
    return connection.query(`
        SELECT posts.id AS "postId", posts."userId", posts.url, posts.article, posts.title, posts.image, posts.description, users.username, users."pictureUrl" 
        FROM posts
        JOIN users ON users.id = posts."userId"
        WHERE posts.id = $1
    `, [postId]);
}

export async function deletePostById(postId) {
    return connection.query(`
        DELETE FROM posts WHERE posts.id = $1
    `, [postId]);
}

export async function deleteLikesPostByPostId(postId) {
    return connection.query(`
        DELETE FROM likes l WHERE l."postId" = $1
    `, [postId]);
}

export async function deleteHashtagsPostByPostId(postId) {
    return connection.query(`
        DELETE FROM hashtagsposts h WHERE  h."postId" = $1
    `, [postId]);
}

export async function updatePostById(postId, newArticle) {
    return connection.query(`
        UPDATE posts 
        SET article=$1 WHERE id=$2
    `, [newArticle, postId]);
}