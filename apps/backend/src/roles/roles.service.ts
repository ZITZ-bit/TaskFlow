import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {
    constructor(private readonly db: DatabaseService) {}

    async createRole(dto: CreateRoleDto) {
        const sql = 'INSERT INTO roles (nombre_rol, descripcion) VALUES (?, ?)';
        const values = [dto.nombre_rol, dto.descripcion || null];
        const result = await this.db.query(sql, values);
        return result;
    }

    async findAll() {
        return await this.db.query('SELECT * FROM roles');
    }

    async findOne(id: number) {
        const rows = await this.db.query('SELECT * FROM roles WHERE id = ?', [id]);
        return rows[0];
    }
}
