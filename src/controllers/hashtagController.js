import { insertNewHashtag, selectHashtag, insertPostHashtag, getHashtags } from '../repositories/hashtagRepository.js'
import express from 'express'

export async function insert_new_hashtag(hashtags,post_id){
    console.log(hashtags)
    console.log(post_id)

    for(const hashtag of hashtags){
        if(hashtag===''){
            continue;
        }

        let hashtag_id;

        try {
            hashtag_id = await insertNewHashtag(hashtag)

            hashtag_id = hashtag_id.rows[0].id;
        } catch (error) {
            if(error.message === 'duplicate key value violates unique constraint "hashtags_name_key"'){

                hashtag_id = await selectHashtag(hashtag);
                hashtag_id = hashtag_id.rows[0].id;
            }
        }

        await insertPostHashtag(hashtag_id,post_id)
    }
}

export async function get_hashtags(req,res){
   
    try {
        const { rows:hashtags } = await getHashtags()
        console.log(hashtags)
        return res.status(200).send(hashtags)
    } catch (error) {
        res.send(error)
    }
}

