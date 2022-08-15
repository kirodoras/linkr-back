import joi from "joi";

const articleSchema = joi.object({
    newArticle: joi.string().allow("")
});

export { articleSchema };