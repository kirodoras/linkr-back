import { hash } from "bcrypt";
import connection from "../databases/postgres.js";

//funcção para inserir uma hashtag:
export async function insertNewHashtag(hashtag){
    connection.query(`INSERT INTO hashtags (name) VALUES ($1) RETURNING id`,[hashtag])
}

//pegar a hashtag clicada:
export function selectHashtag(hashtag) {
    connection.query(`SELECT id FROM hashtags WHERE name = $1`, [hashtag]);
}


export function getHashtags() {
    connection.query(`
            SELECT hash.name, COUNT(hp.*)  
            FROM hashtagsPosts hp
            INNER JOIN hashtags hash on hash.id = hp."hashtagId"
            GROUP BY hash.name
            ORDER BY COUNT DESC, hash.name
            LIMIT 9;
        `);
}

//função para inserir hashtags nos posts:
export async function insertPostHashtag(hashtag_id,post_id){
    connection.query(`INSERT INTO hashtagsPosts ("postId","hashtagId") VALUES ($1,$2)`,[post_id,hashtag_id])
}

