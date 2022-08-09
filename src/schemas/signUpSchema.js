import joi from "joi";

const signUpSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
    name: joi.string().trim().required(),
    pictureUrl: joi.string().pattern(/./).required()
});

export default signUpSchema;