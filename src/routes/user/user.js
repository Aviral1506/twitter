import express from 'express';
import expressAsyncHandler from 'express-async-handler';

const router = express.Router();

import {
   getUsersHandler,
   getTweetsByUserHandler
} from '../../controllers/user/user.js';

router.get('/',
    expressAsyncHandler(getUsersHandler));

router.get('/tweet/:user_id',
    expressAsyncHandler(getTweetsByUserHandler));


export { router as userRoutes }