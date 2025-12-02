import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { JwtAuthGuard } from '../auth/common/guards/jwt-auth.guard';

import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  async create(@Body() dto: CreateTaskDto, @Request() req: any) {
    return this.tasksService.create(dto, req.user);
  }

  @Get()
  async findAll(@Request() req: any) {
    return this.tasksService.findAll(req.user);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Request() req: any) {
    return this.tasksService.findOne(Number(id), req.user);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateTaskDto,
    @Request() req: any,
  ) {
    return this.tasksService.update(Number(id), dto, req.user);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Request() req: any) {
    return this.tasksService.remove(Number(id), req.user);
  }
}
