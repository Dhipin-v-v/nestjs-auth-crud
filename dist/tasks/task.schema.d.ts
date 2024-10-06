import { Document } from 'mongoose';
export declare const TaskSchema: any;
export interface Task extends Document {
    id: string;
    title: string;
    description: string;
    status: string;
    userId: string;
}
