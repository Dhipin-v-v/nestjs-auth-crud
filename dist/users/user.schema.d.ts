import { Document } from 'mongoose';
export declare const UserSchema: any;
export interface User extends Document {
    id: string;
    name: string;
    email: string;
    password: string;
    roles: string[];
}
