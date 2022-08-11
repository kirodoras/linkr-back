import connection from "../databases/postgres.js";

export async function addLike(user, post) {
    return connection.query(`
    INSERT INTO likes
    ("userId", "postId")
    VALUES
    ($1, $2)
    `, [user, post]);
}

export async function removeLike(user, post) {
    return connection.query(`
    DELETE FROM likes
    WHERE "userId" = $1
    AND "postId" = $2
    `, [user, post])
}

export async function findLike(post) {
    return connection.query(`
    SELECT "userId" FROM likes
    WHERE "postId" = $1
    `, [post])
}