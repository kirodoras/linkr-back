import { insertHashtags, selectHashtagsByName } from "../repositories/hashtagsRepository.js";

export async function filterHashtags(req, res, next) {
    try {
        const { article } = req.body;
        let hashtags = article.split(" ").filter((value) => value.startsWith("#")).filter((value) => value.length > 1);
        let hashtagsNames = hashtags.map((value) => value.substring(1));
        res.locals.hashtagsNames = [... new Set(hashtagsNames)];
        next();
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function createHashtags(req, res, next) {
    try {
        const { hashtagsNames } = res.locals;
        let hashtagsIds = [];
        for(let i = 0; i < hashtagsNames.length; i++) {
            let name = hashtagsNames[i];
            const { rows: select } = await selectHashtagsByName(name);
            if(select.length === 0) {
                const { rows: insert } = await insertHashtags(name);
                hashtagsIds.push(insert[0].id);
            } else {
                hashtagsIds.push(select[0].id);
            }
        }
        res.locals.hashtagsIds = [... new Set(hashtagsIds)];
        next();
    } catch (error) {
        res.status(500).send(error.message);
    }
}