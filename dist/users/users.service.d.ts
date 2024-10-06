import { Model } from 'mongoose';
import { User } from './user.schema';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    register(name: string, email: string, password: string): Promise<User>;
    findUserByEmail(email: string): Promise<User>;
}
