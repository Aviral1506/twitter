import Mongoose from 'mongoose';
import {name,schema} from '../schema/user.js';

const UserModel = Mongoose.model(name, schema);

export { UserModel };