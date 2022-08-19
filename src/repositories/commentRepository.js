import connection from "../databases/postgres.js";

export async function insertComment(userId, postId, comment) {
    return connection.query(`
        INSERT INTO comments ("userId", "postId", comment)
        VALUES ($1, $2, $3)
    `, [userId, postId, comment]);
}

export async function countAmountOfComments(postId) {
    return connection.query(`
        SELECT COUNT(comments."postId") as amount
        FROM posts
        JOIN comments ON posts.id = comments."postId"
        WHERE posts.id = $1
        GROUP BY comments."postId"
    `, [postId]);
}

export async function getCommentsByPostId(postId) {
    return connection.query(`
        SELECT comments."userId", users.username, users."pictureUrl", comments.comment
        FROM comments
        JOIN users ON users.id = comments."userId"
        WHERE comments."postId" = $1
        ORDER BY comments."createdAt"
    `, [postId]);
}