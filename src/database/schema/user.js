import mongoose from 'mongoose';

export const name = 'user';

export const schema = new mongoose.Schema(
    {
       auth:String,
       list_tweets: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'tweet'
        }]
    },
    {
        timestamps: true,
    },
);
