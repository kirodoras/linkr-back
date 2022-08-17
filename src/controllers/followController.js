import { addFollow, removeFollow, selectFollowers } from "../repositories/followRepository.js";

export async function postFollow(req, res) {
    const { followerId, followedId } = req.body;

    try {
        await addFollow(followerId, followedId);

        res.status(201).send("follow adicionado com sucesso!");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function deleteFollow(req, res) {
    const { followerId, followedId } = req.query;

    try {
        await removeFollow(followerId, followedId);

        res.status(200).send("follow removido com sucesso!");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function getFollowers(req, res) {
    const { id } = req.params;

    try {
        const { rows: followers } = await selectFollowers(id);

        res.status(200).send(followers);
    } catch (error) {
        res.status(500).send(error.message);
    }
}