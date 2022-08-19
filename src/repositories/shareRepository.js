import connection from "../databases/postgres.js";

export async function insertShare(userId, postId) {
    return connection.query(`
        INSERT INTO shares ("userId", "postId")
        VALUES ($1,$2)
    `, [userId, postId]);
}