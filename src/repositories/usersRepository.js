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
        SELECT users.username, users."pictureUrl", posts.* 
        FROM posts JOIN users
        ON posts."userId" = users.id
        WHERE users.id = $1
    `, [id]);
}