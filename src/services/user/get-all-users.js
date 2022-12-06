import { UserModel } from '../../database/models/user.js';
import { isEmpty } from 'lodash-es';

const getUsers = async () => {
    

    const result = await UserModel.find();

    if (isEmpty(result) === true) {
        throw new Error('no users in db');
    }

    return result;
};

export { getUsers };