import joi from "joi";

const postsSchema = joi.object({
    url: joi.string().uri().required(),
    article: joi.string()
});

export { postsSchema };