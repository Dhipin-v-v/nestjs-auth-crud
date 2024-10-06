import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('tasks')
@UseGuards(AuthGuard('jwt'))
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(@Req() req: Request) {
    const user = req.user;
    return this.tasksService.getTaskByUser(user['email']);
  }

  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
    @Req() req: Request,
  ) {
    const user = req.user;
    return this.tasksService.createTask(title, description, user['email']);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string, @Req() req: Request) {
    const user = req.user;
    return this.tasksService.deleteTask(id, user['email']);
  }
}
