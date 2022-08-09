import express from 'express'
import { hashtagController } from '../controllers/hashtagController.js'
const router=express.Router();

router.get('/hashtag/:hashtagName',hashtagController);

export default router;

