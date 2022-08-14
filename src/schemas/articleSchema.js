import joi from "joi";

const articleSchema = joi.object({
    article: joi.string().allow("")
});

export { articleSchema };