// src/tasks/tasks.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto } from '../src/tasks/dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private repo: Repository<Task>) {}

  create(dto: CreateTaskDto) {
    const task = this.repo.create(dto);
    return this.repo.save(task);
  }

  findAll() {
    return this.repo.find();
  }

  delete(id: number) {
    return this.repo.delete(id);
  }
}
