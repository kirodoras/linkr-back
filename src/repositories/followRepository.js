import connection from "../databases/postgres.js";

export async function addFollow(followerId, followedId) {
    return connection.query(`
        INSERT INTO follows
        ("followerId", "followedId")
        VALUES
        ($1, $2)
    `, [followerId, followedId]);
}

export async function removeFollow(followerId, followedId) {
    return connection.query(`
        DELETE FROM follows
        WHERE "followerId" = $1
        AND "followedId" = $2
    `, [followerId, followedId])
}

export async function selectFollowers(id) {
    return connection.query(`
        SELECT "followedId" FROM follows
        WHERE "followerId" = $1
    `, [id]);
}