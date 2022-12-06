import { UserModel } from '../../database/models/user.js';
import { TweetModel } from '../../database/models/tweet.js';
import { isEmpty } from 'lodash-es';

const getTweetsByUser = async (params) => {
    const {
        payload
    } = params;

    const {
        user_id,
    } = payload;

    const getUser = await UserModel.findById(user_id);

    if (isEmpty(getUser) === true) {
        throw new Error('no users in db');
    }

    const tweetQuery = {
        _id: {$in:getUser.list_tweets}
    }

    const result = await TweetModel.find(tweetQuery);
    return result;
};

export { getTweetsByUser };