import connection from "../databases/postgres.js";

export async function insertHashtags(name) {
    return connection.query(`
        INSERT INTO hashtags
        (name)
        VALUES
        ($1)
        RETURNING id
    `, [name]);
}

export async function insertHashtagsPost(postId, hashtagId) {
    return connection.query(`
        INSERT INTO hashtagsposts
        ("postId", "hashtagId")
        VALUES
        ($1, $2)
    `, [postId, hashtagId]);
}

export async function selectHashtagsByName(name) {
    return connection.query(`
        SELECT * FROM hashtags WHERE name = $1
    `, [name]);
}