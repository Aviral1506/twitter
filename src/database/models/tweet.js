import Mongoose from 'mongoose';
import {name,schema} from '../schema/tweet.js';

const TweetModel = Mongoose.model(name, schema);

export { TweetModel };