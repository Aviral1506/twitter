import express from 'express';
import { connectDB } from '../../db.js'

connectDB();
const app = express();
import {tweetRoutes} from './tweet/tweet.js';
import { userRoutes } from './user/user.js';

app.use(express.json())
app.listen(5000, () => {
    console.log('Server is up and running...')
})

app.use('/tweet', tweetRoutes)
app.use('/user',userRoutes)


