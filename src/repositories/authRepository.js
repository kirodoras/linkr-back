import connection from "../databases/postgres.js";
import bcrypt from "bcrypt";
import dayjs from "dayjs";

export async function getUserByEmail(email) {
    return connection.query(`SELECT * FROM users WHERE email = $1`, [email]);
}

export async function createUser(email, password, username, pictureUrl) {
    const SALT = 10;
    const passwordHash = bcrypt.hashSync(password, SALT);

    const now = dayjs().format("YYYY-MM-DD");

    return connection.query(`
        INSERT INTO users 
        (username, email, password, "pictureUrl", "createdAt") 
        VALUES 
        ($1, $2, $3, $4, $5)
    `, [username, email, passwordHash, pictureUrl, now]);
}