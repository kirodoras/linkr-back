import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
import { getUserByEmail, createUser } from "../repositories/authRepository.js";

dotenv.config();

export async function signUp(req, res) {
    const { email, password, username, pictureUrl } = req.body;

    try {
        const existingUser = await getUserByEmail(email);

        if(existingUser.rowCount > 0) {
            return res.status(409).send(alert("email já cadastrado")); //conflit
        }

        await createUser(email, password, username, pictureUrl);

        res.status(201).send("usuário cadastrado com sucesso!"); //created
    } catch (error) {
        res.status(500).send(error); //server error
    }
}

export async function signIn(req, res) {
    const { emailLogin, passwordLogin } = req.body;

    try {
        const { rows: dbUserArray } = await getUserByEmail(emailLogin);

        if(dbUserArray.length === 0) {
            return res.status(401).send(alert("email ou senha incorretos")); //unauthorized
        }

        const dbUser = dbUserArray[0];

        const correctPassword = bcrypt.compareSync(passwordLogin, dbUser.password);

        if(!correctPassword) {
            return res.status(401).send(alert("email ou senha incorretos")); //unauthorized
        }

        const token = jwt.sign({ id: dbUser.id }, process.env.JWT_SECRET);

        delete dbUser.password;

        res.status(200).send({ user: { ...dbUser }, token }); 
    } catch (error) {
        res.status(500).send("erro ao logar usuário"); //server error
    }
}