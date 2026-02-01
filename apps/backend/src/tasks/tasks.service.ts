import { Injectable, ForbiddenException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private readonly db: DatabaseService) {}

  async create(userId: number, dto: CreateTaskDto) {
    const sql = `
      INSERT INTO tasks (titulo, descripcion, imagen, usuario_id)
      VALUES (?, ?, ?, ?)
    `;

    const result: any = await this.db.query(sql, [
      dto.titulo,
      dto.descripcion || null,
      dto.imagen || null,
      userId,
    ]);

    // devolver la tarea creada (esto ayuda mucho al frontend)
    return {
      id: result.insertId,
      titulo: dto.titulo,
      descripcion: dto.descripcion || null,
      imagen: dto.imagen || null,
      estado: 'pendiente',
      usuario_id: userId,
      createdAt: new Date(),
    };
  }

  async findAll(userId: number) {
    return this.db.query(
      'SELECT * FROM tasks WHERE usuario_id = ? ORDER BY id DESC',
      [userId],
    );
  }

  async findOne(userId: number, taskId: number) {
    const rows: any = await this.db.query(
      'SELECT * FROM tasks WHERE id = ? AND usuario_id = ?',
      [taskId, userId],
    );

    return rows[0];
  }

  async update(userId: number, taskId: number, dto: UpdateTaskDto) {
    const task = await this.findOne(userId, taskId);
    if (!task) throw new ForbiddenException('Acceso denegado');

    const sql = `
      UPDATE tasks
      SET titulo = ?, descripcion = ?, estado = ?
      WHERE id = ? AND usuario_id = ?
    `;

    return this.db.query(sql, [
      dto.titulo ?? task.titulo,
      dto.descripcion ?? task.descripcion,
      dto.estado ?? task.estado,
      taskId,
      userId,
    ]);
  }

  async remove(userId: number, taskId: number) {
    return this.db.query(
      'DELETE FROM tasks WHERE id = ? AND usuario_id = ?',
      [taskId, userId],
    );
  }
}
