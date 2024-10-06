import { Model } from 'mongoose';
import { Task } from './task.schema';
export declare class TasksService {
    private taskModel;
    constructor(taskModel: Model<Task>);
    getTaskByUser(userId: string): Promise<Task[]>;
    createTask(title: string, description: string, userId: string): Promise<Task>;
    deleteTask(taskId: string, userId: string): Promise<{
        message: string;
    }>;
}
