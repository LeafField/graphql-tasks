import { Injectable } from '@nestjs/common';
import { CreateTaskInput } from './dto/createTask.input';
import { PrismaService } from '../prisma/prisma.service';
import { Task } from '@prisma/client';
import { UpdateTaskInput } from './dto/updateTask.input';

@Injectable()
export class TaskService {
  constructor(private readonly prismaService: PrismaService) {}

  async getTasks(userId: number): Promise<Task[]> {
    return this.prismaService.task.findMany({ where: { userId } });
  }

  async createTask(createTaskInput: CreateTaskInput): Promise<Task> {
    const { name, dueDate, description, userId } = createTaskInput;
    return this.prismaService.task.create({
      data: {
        name,
        dueDate,
        description,
        userId,
      },
    });
  }

  async updateTask(updateTaskInput: UpdateTaskInput): Promise<Task> {
    return this.prismaService.task.update({
      data: { ...updateTaskInput },
      where: { id: updateTaskInput.id },
    });
  }

  async deleteTask(id: number): Promise<Task> {
    return this.prismaService.task.delete({ where: { id } });
  }
}
