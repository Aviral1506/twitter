import { TweetModel } from '../../database/models/tweet.js';
import { UserModel } from '../../database/models/user.js';
import { isEmpty } from 'lodash-es';
import { createUser } from '../user/create.js';
import { linkTweet } from '../user/link-tweet.js';


const createTweet = async (params) => {
    const {
        auth,
        payload,
    } = params;

    const {
       message
    } = payload;

    const userParams = {
        auth 
    }

    let user = await UserModel.findOne(userParams);

    if (isEmpty(user)===true){
        user = await createUser(userParams);
    }

    const tweetParams = {
       message,
        created_by: user._id,
        retweets : 0
    };

    const newModel = new TweetModel(tweetParams);

    const result = await newModel.save();
  
    const linkTweetParams ={
        tweet_id: result._id,
        user
    }

   await linkTweet(linkTweetParams);
    
    return result;
};

export { createTweet };