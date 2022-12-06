import { TweetModel } from '../../database/models/tweet.js';
import { isEmpty } from 'lodash-es';


const getTweetById = async (params) => {
    const {
        //userId,
        payload,
    } = params;

    const {
        tweet_id,
    } = payload;

    const result = await TweetModel.findById(tweet_id);

    if (isEmpty(result) === true) {
        throw new Error('tweet not found for given id');
    }

    return result;
};

export { getTweetById };