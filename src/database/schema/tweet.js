import mongoose from 'mongoose';

export const name = 'tweet';

export const schema = new mongoose.Schema(
    {
        message: String,
        created_by: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user' },
        retweets : Number
    },
    {
        timestamps: true,
    },
);

