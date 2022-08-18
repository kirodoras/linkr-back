import joi from "joi";

const followSchema = joi.object({
    followerId: joi.number().required(),
    followedId: joi.number().required()
});

export { followSchema };