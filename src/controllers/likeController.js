import dotenv from "dotenv";
import { addLike, findLike, removeLike } from "../repositories/likeRepository.js";

dotenv.config();

export async function postLike(req, res) {
    const { userId, postId } = req.body;

    try {
        await addLike(userId, postId);

        res.status(201).send("like adicionado com sucesso!");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function getLike(req, res) {
    const { post } = req.body;

    try {
        const { rows: users } = await findLike(post);

        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function deleteLike(req, res) {
    const { userId, postId } = req.query;

    try {
        await removeLike(userId, postId);

        res.status(201).send("like removido com sucesso!");
    } catch (error) {
        res.status(500).send(error.message);
    }
}