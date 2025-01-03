import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { CreateTaskInput } from './dto/createTask.input';
import { Task } from '@prisma/client';
import { Task as TaskModel, Tasks } from './models/task.model';
import { UpdateTaskInput } from './dto/updateTask.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Resolver()
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => Tasks)
  @UseGuards(JwtAuthGuard)
  async getTasks(
    @Args('userId', { type: () => Int }) userId: number,
  ): Promise<Tasks> {
    const tasks = await this.taskService.getTasks(userId);
    return { data: tasks };
  }

  @Mutation(() => TaskModel)
  @UseGuards(JwtAuthGuard)
  async createTask(
    @Args('createTaskInput') createTaskInput: CreateTaskInput,
  ): Promise<Task> {
    return this.taskService.createTask(createTaskInput);
  }

  @Mutation(() => TaskModel)
  @UseGuards(JwtAuthGuard)
  async updateTask(
    @Args('updateTaskInput') updateTaskInput: UpdateTaskInput,
  ): Promise<Task> {
    return this.taskService.updateTask(updateTaskInput);
  }

  @Mutation(() => TaskModel)
  @UseGuards(JwtAuthGuard)
  async deleteTask(@Args('id', { type: () => Int }) id: number): Promise<Task> {
    return this.taskService.deleteTask(id);
  }
}
