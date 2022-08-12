import connection from "../databases/postgres.js";

export async function selectUsersByName(username) {
    return connection.query(`
        SELECT id, username, "pictureUrl"
        FROM users 
        WHERE username ILIKE $1
    `, [username + '%']);
}

export async function selectPostsUser(id) {
    console.log(id);
    return connection.query(`
        SELECT posts.id AS "postId", posts."userId", posts.url, posts.article, posts.title, posts.image, posts.description, users.username, users."pictureUrl" 
        FROM users LEFT JOIN posts
        ON posts."userId" = users.id
        WHERE users.id = $1
        ORDER BY posts."createdAt" DESC;
    `, [id]);
}