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

//pegar post por hashtag
export function getPostByHashtag(hashtag){
    return connection.query(`
            SELECT *
            FROM posts p
            LEFT JOIN users u on p."userId" = u.id 
            WHERE article LIKE $1
            GROUP BY article,p.id
            ORDER BY p.id DESC
            LIMIT 20
        `, [`%#${hashtag}%`]);
}