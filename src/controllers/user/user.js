import {
     successGet,
} from '../../response-template/index.js';

// services
import { getUsers } from '../../services/user/get-all-users.js';
import { getTweetsByUser } from '../../services/user/get-tweets-by-user.js';

const getUsersHandler = async (req, res) => {
    try {
    
        const result = await getUsers()

        res.status(successGet.STATUS_CODE).send({
            ...successGet.response,
            response: {
                users: result,
            },
        });
    } catch (error) {
        res.status(successGet.STATUS_CODE).send({
            ...successGet.response,
            message: error.message,
            response: {
                users: [],
            },
        });
    }
};

const getTweetsByUserHandler = async (req, res) => {
    try {
        //const user_id = req.params;

        const params = {
            payload : req.params
        };
        const result = await getTweetsByUser(params)

        res.status(successGet.STATUS_CODE).send({
            ...successGet.response,
            response: {
                tweets: result,
            },
        });
    } catch (error) {
        res.status(successGet.STATUS_CODE).send({
            ...successGet.response,
            message: error.message,
            response: {
               tweets: [],
            },
        });
    }
};


export {
    getUsersHandler,
    getTweetsByUserHandler
};