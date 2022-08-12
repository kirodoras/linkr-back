import { selectUsersByName, selectPostsUser } from "../repositories/usersRepository.js";

export async function getUsersByName(req, res) {
    try {
        const { username } = req.query;

        if (username) {
            const { rows: users } = await selectUsersByName(username);
            
            return res.send(users);
        }

        res.send([]);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function getPostsUser(req, res) {
    try {
        const { id } = req.params;

        const { rows: postsUser } = await selectPostsUser(id);

        console.log(postsUser);

        return res.send(postsUser);
    } catch (error) {
        res.status(500).send(error.message);
    }
}