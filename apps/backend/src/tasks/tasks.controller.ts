import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
  UseGuards,
  Req,
} from '@nestjs/common';

import { TasksService } from './tasks.service';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Req() req, @Body() dto: CreateTaskDto) {
    return this.tasksService.create(req.user.id, dto);
  }

  @Get()
  findAll(@Req() req) {
    return this.tasksService.findAll(req.user.id);
  }

  @Get(':id')
  findOne(@Req() req, @Param('id') id: number) {
    return this.tasksService.findOne(req.user.id, id);
  }

  @Patch(':id')
  update(
    @Req() req,
    @Param('id') id: number,
    @Body() dto: UpdateTaskDto,
  ) {
    return this.tasksService.update(req.user.id, id, dto);
  }

  @Delete(':id')
  remove(@Req() req, @Param('id') id: number) {
    return this.tasksService.remove(req.user.id, id);
  }
}
