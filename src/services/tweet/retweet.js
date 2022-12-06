import { TweetModel } from '../../database/models/tweet.js';
import { isEmpty } from 'lodash-es';

const retweetById = async (params) => {
    const {
        //userId,
        payload,
    } = params;

    const {
        tweet_id
    } = payload;

    let result = await TweetModel.findById(tweet_id);

    if (isEmpty(result) === true) {
        throw new Error('tweet not found for given id');
    }

    const currentRetweets = result.retweets;

    const retweetedTweet ={
        retweets : currentRetweets + 1
    }

    result = await TweetModel.findByIdAndUpdate(tweet_id,retweetedTweet)
    const newtweet = await TweetModel.findById(tweet_id);
    return newtweet;
};

export {retweetById};