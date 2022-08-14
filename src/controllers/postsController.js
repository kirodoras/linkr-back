import { insertPost, selectPosts, getPostByHashtag } from "../repositories/postsRepository.js";
import { insert_new_hashtag } from './hashtagController.js'
import addSpaceHashtagsStuck from '../services/HelpfulFunctions.js'
import { hash } from "bcrypt";
export async function publishPost(req, res) {
    try {
        const { userId } = res.locals;
        const { url, article } = req.body;

        // const hashtags = ['wlae','wssi']; //teste
        // const post_id = userId; //somente teste
        const description = addSpaceHashtagsStuck(article)
        const hashtags = (description.includes('#') ? (description.match(/#[^\s#\.\;]*/gmi).map(x => x.substr(1).toLowerCase())):[])

        const {rows:post_id} = await insertPost(userId, url, article);
        await insert_new_hashtag(hashtags,post_id);
        res.sendStatus(201);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function getPosts(req, res) {
    const { hashtag } = req.query;
    let result =null;
    if(hashtag){
        result = await getPostByHashtag(hashtag);
    }
    if(result!=null && result.rows.length==0){
        return res.send([])
    }
   
else{
    const { rows } = await selectPosts();
        return res.send(rows);
}
   
}