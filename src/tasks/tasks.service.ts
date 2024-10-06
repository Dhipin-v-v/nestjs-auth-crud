import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './task.schema';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private taskModel: Model<Task>) {}

  // Get tasks for a specific user
  async getTaskByUser(userId: string): Promise<Task[]> {
    return this.taskModel.find({ userId }).exec();
  }

  // Create a task and associate it with a user
  async createTask(
    title: string,
    description: string,
    userId: string,
  ): Promise<Task> {
    const newTask = new this.taskModel({ title, description, userId });
    return newTask.save();
  }

  // Delete a task by ID for a specific user
  async deleteTask(taskId: string, userId: string): Promise<{message: string}> {
    await this.taskModel.findOneAndDelete({ _id: taskId, userId });
    return {message:"Task deleted successfully"}
  }
}
