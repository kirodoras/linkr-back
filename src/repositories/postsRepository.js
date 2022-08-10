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