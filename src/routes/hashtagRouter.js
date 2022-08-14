import express from 'express'
import { insert_new_hashtag, get_hashtags } from '../controllers/hashtagController.js'
const router=express.Router();

router.get('/hashtag/:hashtagName',get_hashtags);
router.get('/hashtag/trending',get_hashtags);


export default router;

