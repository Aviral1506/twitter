import { UserModel } from '../../database/models/user.js';


const linkTweet = async (params) => {
    const {
        tweet_id,
        user
    } = params;
    
  const listOfTweets = user.list_tweets;
  listOfTweets.push(tweet_id);
 
 

  const updatedUserParams = {
    list_tweets : listOfTweets
  }

    await UserModel.findOneAndUpdate(user._id,updatedUserParams);

   
};

export { linkTweet};