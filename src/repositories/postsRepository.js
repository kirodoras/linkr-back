import connection from "../databases/postgres.js";
import dayjs from "dayjs";


export async function insertPost(userId, url, article, title, description, image) {
    const now = dayjs().format("YYYY-MM-DD HH:mm:ss");
    const insertImage = image.length > 0 ? image : null;
    return connection.query(`
        INSERT INTO posts 
        ("userId", url, article, title, description, image, "createdAt") 
        VALUES 
        ($1, $2, $3, $4, $5, $6, $7)
    `, [userId, url, article, title, description, insertImage, now]);
}

export async function selectPosts() {
    return connection.query(`
        SELECT posts.id, posts.url, posts.article, posts.title, posts.image, posts.description, users.username, users."pictureUrl" 
        FROM posts
        JOIN users ON users.id = posts."userId"
        ORDER BY posts."createdAt" DESC
        LIMIT 20
    `);
}