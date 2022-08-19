import connection from "../databases/postgres.js";

export async function insertShare(userId, postId) {
    return connection.query(`
        INSERT INTO shares ("userId", "postId")
        VALUES ($1,$2)
    `, [userId, postId]);
}

export async function countAmountOfShares(postId) {
    return connection.query(`
        SELECT COUNT(shares."postId") as amount
        FROM posts
        JOIN shares ON posts.id = shares."postId"
        WHERE posts.id = $1
        GROUP BY shares."postId"
    `, [postId]);
}