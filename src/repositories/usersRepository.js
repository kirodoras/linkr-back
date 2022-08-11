import connection from "../databases/postgres.js";

export async function selectUsersByName(username) {
    return connection.query(`
        SELECT username, "pictureUrl"
        FROM users 
        WHERE username ILIKE $1
    `, [username + '%']);
}