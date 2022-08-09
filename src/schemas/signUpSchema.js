import joi from "joi";

const signUpSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
    username: joi.string().trim().required(),
    pictureUrl: joi.string().pattern(/\.(jpg|jpeg|png|svg)$/).required()
});

export default signUpSchema;