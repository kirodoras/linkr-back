import { selectUsersFollowedByName, selectUsersByName, selectPostsUser } from "../repositories/usersRepository.js";

export async function getUsersByName(req, res) {
    try {
        const { username } = req.query;
        const { id } = req.params;
        if (username) {
            const { rows: usersFollowed } = await selectUsersFollowedByName(username, id);
            const { rows: users } = await selectUsersByName(username);
            const usersUnfollowed = users.filter((user) => JSON.stringify(usersFollowed).indexOf(JSON.stringify(user)) === -1);

            const usersList = [...usersFollowed, ...usersUnfollowed];

            return res.send(usersList);
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