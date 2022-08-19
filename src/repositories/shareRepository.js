import connection from "../databases/postgres.js";

export async function insertShare(userId, postId) {
    return connection.query(`
        INSERT INTO shares ("userId", "postId")
        VALUES ($1,$2)
    `, [userId, postId]);
}

export async function deleteShare(postId) {
    return connection.query(`
        DELETE FROM shares WHERE shares."postId" = $1
    `, [postId]);
}

export async function countAmountOfShares(postId) {
    return connection.query(`
        SELECT COUNT(shares."postId") as amount
        FROM posts
        JOIN shares ON posts.id = shares."postId"
        WHERE posts.id = $1
        GROUP BY shares."postId"
    `, [postId]);
}

export async function selectPostsShares(userId) {
    return connection.query(`
        SELECT posts.id AS "postId", posts."userId", posts.url, posts.article, posts.title, posts.image, posts.description, users.username, users."pictureUrl", posts."createdAt" as "createdAt" , u.username as "sharedBy" 
        FROM posts
        JOIN shares ON posts.id = shares."postId"
        JOIN users ON users.id = posts."userId"
        LEFT JOIN follows ON follows."followedId" = shares."userId"
        LEFT JOIN (
            SELECT * FROM users
        ) u
        ON u.id = shares."userId"
        WHERE follows."followerId" = $1 OR shares."userId" = $1
        ORDER BY posts."createdAt" DESC
        LIMIT 20
    `, [userId]);
}

export async function selectShare(userId, postId){
    return connection.query(`
        SELECT users.id as "userId"
        FROM users
        JOIN shares
        ON shares."userId" = users.id
        WHERE users.id = $1 AND shares."postId" = $2
    `,[userId, postId]);
}