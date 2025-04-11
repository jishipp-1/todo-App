// src/tasks/tasks.controller.ts
import { Controller, Post, Get, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from '../src/tasks/dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly service: TasksService) {}

  @Post()
  create(@Body() dto: CreateTaskDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.service.delete(id);
  }
}
