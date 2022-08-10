import connection from "../databases/postgres.js";
import dayjs from "dayjs";


export async function insertPost(userId, url, article) {
    const now = dayjs().format("YYYY-MM-DD");

    return connection.query(`
        INSERT INTO posts 
        ("userId", url, article, "createdAt") 
        VALUES 
        ($1, $2, $3, $4)
    `, [userId, url, article, now]);
}

export async function selectPosts() {
    return connection.query(`
        SELECT posts.id, posts.url, posts. article, users.username, users."pictureUrl" FROM posts
        JOIN users ON users.id = posts."userId"
        ORDER BY posts."createdAt"
        LIMIT 20
    `);
}