import { TasksService } from './tasks.service';
import { Request } from 'express';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getAllTasks(req: Request): Promise<import("./task.schema").Task[]>;
    createTask(title: string, description: string, req: Request): Promise<import("./task.schema").Task>;
    deleteTask(id: string, req: Request): Promise<{
        message: string;
    }>;
}
