import joi from "joi";

const postsSchema = joi.object({
    url: joi.string().required(),
    article: joi.string()
});

export { postsSchema };