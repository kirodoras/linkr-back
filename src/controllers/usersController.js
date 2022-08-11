import { selectUsersByName } from "../repositories/usersRepository.js";

export async function getUsersByName(req, res) {
    try {
        const { username } = req.query;
        
        if(username) {
            const { rows: users } = await selectUsersByName(username);

            console.log(users);
            return res.send(users); 
        }

        res.send([]);
    } catch (error) {
        res.status(500).send(error.message);
    }
}