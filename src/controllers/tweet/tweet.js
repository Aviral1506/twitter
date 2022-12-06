import {
    successCreate, successGet,
} from '../../response-template/index.js';

// services
import { createTweet } from '../../services/tweet/create.js';
import {getTweetById } from '../../services/tweet/get-by-id.js';
import { retweetById } from '../../services/tweet/retweet.js';

const createTweetHandler = async (req, res) => {
    const header = req.headers;

    const params = {
        auth: header.authorization,
        payload: req.body,
    };

    const result = await createTweet(params);

    res.status(successCreate.STATUS_CODE).send({
        ...successCreate.response,
        response: {
            tweet: result,
        },
    });
};

const getTweetByIdHandler = async (req, res) => {
    try {
    

        const params = {
            payload: req.params,
        };

        const result = await getTweetById(params);

        res.status(successGet.STATUS_CODE).send({
            ...successGet.response,
            response: {
                tweet: result,
            },
        });
    } catch (error) {
        res.status(successGet.STATUS_CODE).send({
            ...successGet.response,
            message: error.message,
            response: {
                tweet: [],
            },
        });
    }
};

const retweetHandler = async (req, res) => {
    try {

        const params = {
           
            payload: req.params,
        };

        const result = await retweetById(params);

        res.status(successCreate.STATUS_CODE).send({
            ...successCreate.response,
            response: {
                retweet: result,
            },
        });
    } catch (error) {
        res.status(successCreate.STATUS_CODE).send({
            ...successCreate.response,
            message: error.message,
            response: {
                retweet: [],
            },
        });
    }
};

export {
    createTweetHandler,
    getTweetByIdHandler,
    retweetHandler,
};