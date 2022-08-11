import express from 'express'
import { insert_new_hashtag } from '../controllers/hashtagController.js'
const router=express.Router();

router.get('/hashtag/:hashtagName',insert_new_hashtag);

export default router;

