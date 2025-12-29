import { Injectable, BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

import { DatabaseService } from '../database/database.service';

@Injectable()
export class UsersService {
  constructor(private readonly db: DatabaseService) {}

  async register(createUserDto: CreateUserDto) {
    const { nombres, apellidos, cedula, usuario, clave, confirmacion } = createUserDto;

    // Validar contraseñas
    if (clave !== confirmacion) {
      throw new BadRequestException('Las contraseñas no coinciden');
    }

    // Validar si el usuario ya existe
    const existing = await this.db.query('SELECT * FROM usuarios WHERE usuario = ?', [usuario]) as any[];
    if (existing.length > 0) {
      throw new BadRequestException('Usuario ya existe');
    }

    // Hashear contraseña
    const hashedPassword = await bcrypt.hash(clave, 10);

    // Insertar usuario
    const result: any = await this.db.query(
      'INSERT INTO usuarios (nombres, apellidos, cedula, usuario, clave) VALUES (?, ?, ?, ?, ?)',
      [nombres, apellidos, cedula, usuario, hashedPassword]
    );

    // Insertar rol por defecto (user) en tabla usuario_rol
    const userId = result.insertId; // ID del usuario recién creado
    await this.db.query('INSERT INTO usuario_rol (usuario_id, rol_id) VALUES (?, ?)', [userId, 2]);

    return { message: 'Usuario creado correctamente' };
  }

  async validateUser(loginDto: LoginDto) {
    const { usuario, clave } = loginDto;

    const rows = await this.db.query('SELECT * FROM usuarios WHERE usuario = ?', [usuario]) as any[];
    const user = rows[0];
    if (!user) return null;

    const isMatch = await bcrypt.compare(clave, user.clave);
    if (!isMatch) return null;

    return user;
  }
}
