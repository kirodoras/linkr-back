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

export async function selectPostsByHashtagName(name) {
    return connection.query(`
        SELECT posts.id AS "postId", posts."userId", posts.url, posts.article, posts.title, posts.image, posts.description, users.username, users."pictureUrl" 
        FROM hashtags
        JOIN hashtagsposts 
        ON hashtagsposts."hashtagId" = hashtags.id
        JOIN posts 
        ON posts.id = hashtagsposts."postId"
        JOIN users 
        ON users.id = posts."userId"
        WHERE hashtags.name = $1
        ORDER BY posts."createdAt" DESC
        LIMIT 20
    `, [name]);
}

export async function selectTrendingHashtags() {
    return connection.query(`
        SELECT h.id, h.name, COUNT(hp."postId") as amount
        FROM hashtags h
        JOIN hashtagsposts hp
        ON hp."hashtagId" = h.id
        GROUP BY h.id
        ORDER BY amount DESC
        LIMIT 10
    `);
}