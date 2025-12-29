import { Inject, Injectable } from '@nestjs/common';
import type { Pool } from 'mysql2/promise';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {
    constructor(@Inject('DATABASE_POOL') private pool: Pool) {}

    async createRole(dto: CreateRoleDto) {
        const sql = 'INSERT INTO roles (nombre_rol, descripcion) VALUES (?, ?)';
        const values = [dto.nombre_rol, dto.descripcion || null];
        const [result] = await this.pool.query(sql, values);
        return result;
    }

    async findAll() {
        const [rows] = await this.pool.query('SELECT * FROM roles');
        return rows;
    }

    async findOne(id: number) {
        const [rows] = await this.pool.query('SELECT * FROM roles WHERE id = ?', [id]);
        return rows[0];
    }
}
