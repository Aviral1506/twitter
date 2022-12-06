import express from 'express';
import expressAsyncHandler from 'express-async-handler';

const router = express.Router();

import {
  createTweetHandler,
  getTweetByIdHandler,
  retweetHandler,
} from '../../controllers/tweet/tweet.js';

router.post(
    '/',
    expressAsyncHandler(createTweetHandler),
);

router.post('/:tweet_id/retweet',
expressAsyncHandler(retweetHandler));

router.get('/:tweet_id',
expressAsyncHandler(getTweetByIdHandler));


export {router as tweetRoutes}