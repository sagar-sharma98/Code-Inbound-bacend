import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private repo: Repository<Task>) {}

  async create(dto: CreateTaskDto, user: any) {
    const task = this.repo.create({ ...dto, user: { id: user.id } as any });
    return this.repo.save(task);
  }

  async findAll(user: any) {
    return this.repo.find({ where: { user: { id: user.id } }, relations: ['user'] });
  }

  async findOne(id: number, user: any) {
    const task = await this.repo.findOne({ where: { id, user: { id: user.id } } });
    if (!task) throw new NotFoundException('Task not found');
    return task;
  }

  async update(id: number, dto: UpdateTaskDto, user: any) {
    const task = await this.repo.findOne({ where: { id, user: { id: user.id } } });
    if (!task) throw new NotFoundException('Task not found');
    Object.assign(task, dto);
    return this.repo.save(task);
  }

  async remove(id: number, user: any) {
    const task = await this.repo.findOne({ where: { id, user: { id: user.id } } });
    if (!task) throw new NotFoundException('Task not found');
    await this.repo.remove(task);
    return { deleted: true };
  }
}
