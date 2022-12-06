import { UserModel } from '../../database/models/user.js';


const createUser = async (params) => {
    const {
        auth
    } = params;

    const userParams = {
       auth
    };

    const newModel = new UserModel(userParams);

    const result = await newModel.save();

    return result;
};

export { createUser};